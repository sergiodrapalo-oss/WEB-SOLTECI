<?php
/**
 * PLANTILLA de configuración SMTP del formulario de contacto.
 *
 * Pasos (una sola vez, en el servidor cPanel):
 *   1. Copia este archivo y renómbralo a  smtp-config.php  dentro de public_html.
 *   2. Rellena 'password' con la contraseña real del buzón ventas@solteci.com.
 *   3. NO subas smtp-config.php a git (ya está en .gitignore).
 *
 * Los valores de host/puerto los confirmas en cPanel → "Cuentas de correo" →
 * (tu cuenta) → "Conectar dispositivos" / "Configurar cliente de correo".
 * En la mayoría de cPanel es mail.<tu-dominio> con SSL en el puerto 465.
 */

return [
    'host'     => 'mail.solteci.com', // servidor SMTP (suele ser mail.<dominio>)
    'port'     => 465,                // 465 = SSL  |  587 = STARTTLS
    'secure'   => 'ssl',              // 'ssl' (puerto 465)  o  'tls' (puerto 587)
    'username' => 'ventas@solteci.com',
    'password' => 'CONTRASEÑA_DEL_BUZON', // <-- rellenar en el servidor
    'from'     => 'ventas@solteci.com',   // remitente (mismo dominio, para SPF/DKIM)
    'to'       => 'ventas@solteci.com',   // a dónde llegan los mensajes
];
