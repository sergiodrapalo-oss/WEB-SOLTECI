<?php
/**
 * Receptor del formulario de contacto de Solteci — envío por SMTP autenticado.
 *
 * El formulario (React) envía un JSON por POST a este archivo. Aquí se valida,
 * se arma el correo y se entrega vía SMTP a ventas@solteci.com usando las
 * credenciales del buzón (más fiable que mail(): evita el spam).
 *
 * Las credenciales NO van en este archivo ni en git: se leen de `smtp-config.php`,
 * que debes crear una sola vez en el servidor (ver `smtp-config.example.php`).
 *
 * Se sube a la raíz del sitio (public_html), junto al resto del export estático.
 */

header('Content-Type: application/json; charset=utf-8');

// ---- Solo POST -----------------------------------------------------------
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido.']);
    exit;
}

// ---- Cargar credenciales SMTP --------------------------------------------
$configPath = __DIR__ . '/smtp-config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Falta smtp-config.php en el servidor.']);
    exit;
}
$cfg = require $configPath;

// ---- Leer el cuerpo (JSON o formulario clásico) --------------------------
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST; // respaldo por si llega como form-urlencoded
}

$nombre   = trim($data['nombre']   ?? '');
$empresa  = trim($data['empresa']  ?? '');
$email    = trim($data['email']    ?? '');
$telefono = trim($data['telefono'] ?? '');
$mensaje  = trim($data['mensaje']  ?? '');
$honeypot = trim($data['website']  ?? '');

// ---- Anti-spam: honeypot -------------------------------------------------
if ($honeypot !== '') {
    echo json_encode(['ok' => true]); // fingimos éxito ante el bot
    exit;
}

// ---- Validación ----------------------------------------------------------
$errores = [];
if ($nombre === '')   $errores[] = 'nombre';
if ($telefono === '') $errores[] = 'telefono';
if ($mensaje === '')  $errores[] = 'mensaje';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errores[] = 'email';

if ($errores) {
    http_response_code(400);
    echo json_encode(['error' => 'Campos inválidos.', 'campos' => $errores]);
    exit;
}

// ---- Evitar inyección de cabeceras (saltos de línea) ---------------------
$limpiar = fn($v) => str_replace(["\r", "\n"], '', $v);
$nombreSeguro = $limpiar($nombre);
$emailSeguro  = $limpiar($email);

// ---- Cuerpo del correo ---------------------------------------------------
$cuerpo  = "Nuevo mensaje desde el formulario de contacto:\n\n";
$cuerpo .= "Nombre:   $nombre\n";
$cuerpo .= "Empresa:  " . ($empresa !== '' ? $empresa : '—') . "\n";
$cuerpo .= "Correo:   $email\n";
$cuerpo .= "Teléfono: $telefono\n\n";
$cuerpo .= "Mensaje:\n$mensaje\n";

$asunto = 'Nuevo mensaje de contacto — ' . $nombreSeguro;

// ---- Enviar --------------------------------------------------------------
$err = null;
$ok = smtp_send($cfg, $asunto, $cuerpo, $nombreSeguro, $emailSeguro, $err);

if ($ok) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    // Loguea el detalle en el servidor; al cliente solo le decimos que falló.
    error_log('Contacto SMTP error: ' . $err);
    echo json_encode(['error' => 'No se pudo enviar el correo.']);
}

// ==========================================================================
// Cliente SMTP mínimo (sin dependencias). Soporta SSL (465) y STARTTLS (587).
// ==========================================================================
function smtp_send(array $cfg, string $subject, string $body, string $replyName, string $replyEmail, ?string &$err = null): bool
{
    $host   = $cfg['host'];
    $port   = (int) $cfg['port'];
    $secure = strtolower($cfg['secure'] ?? 'ssl');

    // En hosting compartido el certificado suele no coincidir con mail.dominio,
    // por eso no verificamos el peer. La conexión es al propio servidor de correo.
    $ctx = stream_context_create([
        'ssl' => ['verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true],
    ]);

    $endpoint = ($secure === 'ssl' ? 'ssl://' : '') . $host . ':' . $port;
    $fp = @stream_socket_client($endpoint, $errno, $errstr, 20, STREAM_CLIENT_CONNECT, $ctx);
    if (!$fp) {
        $err = "Conexión fallida a $endpoint: $errstr ($errno)";
        return false;
    }
    stream_set_timeout($fp, 20);

    $read = function () use ($fp) {
        $out = '';
        while (($line = fgets($fp, 515)) !== false) {
            $out .= $line;
            if (isset($line[3]) && $line[3] === ' ') break; // fin de respuesta multilínea
        }
        return $out;
    };
    $cmd = function ($c) use ($fp, $read) {
        fwrite($fp, $c . "\r\n");
        return $read();
    };
    $expect = function ($resp, $code) use (&$err) {
        if (strncmp($resp, $code, strlen($code)) !== 0) {
            $err = "Respuesta SMTP inesperada: " . trim($resp);
            return false;
        }
        return true;
    };

    if (!$expect($read(), '220')) return false;

    $ehlo = $_SERVER['SERVER_NAME'] ?? 'localhost';
    if (!$expect($cmd("EHLO $ehlo"), '250')) return false;

    if ($secure === 'tls') {
        if (!$expect($cmd('STARTTLS'), '220')) return false;
        if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            $err = 'No se pudo negociar TLS (STARTTLS).';
            return false;
        }
        if (!$expect($cmd("EHLO $ehlo"), '250')) return false;
    }

    if (!$expect($cmd('AUTH LOGIN'), '334')) return false;
    if (!$expect($cmd(base64_encode($cfg['username'])), '334')) return false;
    if (!$expect($cmd(base64_encode($cfg['password'])), '235')) return false;

    $from = $cfg['from'];
    $to   = $cfg['to'];
    if (!$expect($cmd("MAIL FROM:<$from>"), '250')) return false;
    $rcpt = $cmd("RCPT TO:<$to>");
    if (strncmp($rcpt, '250', 3) !== 0 && strncmp($rcpt, '251', 3) !== 0) {
        $err = 'RCPT rechazado: ' . trim($rcpt);
        return false;
    }
    if (!$expect($cmd('DATA'), '354')) return false;

    // Asunto y nombre pueden traer acentos -> codificación MIME (RFC 2047).
    $mimeWord = fn($s) => '=?UTF-8?B?' . base64_encode($s) . '?=';

    $headers = [
        'Date: ' . date('r'),
        'From: ' . $mimeWord('Solteci Web') . " <$from>",
        "To: <$to>",
        'Reply-To: ' . $mimeWord($replyName) . " <$replyEmail>",
        'Subject: ' . $mimeWord($subject),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
    ];

    $message = implode("\r\n", $headers) . "\r\n\r\n" . $body;
    $message = preg_replace("/\r\n|\r|\n/", "\r\n", $message); // normaliza a CRLF
    $message = preg_replace('/^\./m', '..', $message);          // dot-stuffing

    fwrite($fp, $message . "\r\n.\r\n");
    if (!$expect($read(), '250')) return false;

    $cmd('QUIT');
    fclose($fp);
    return true;
}
