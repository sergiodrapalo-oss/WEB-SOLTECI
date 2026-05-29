# CLAUDE.md — Sitio Web Solteci

## Visión General del Proyecto

Sitio web corporativo para **Solteci**, empresa hondureña con más de 20 años de experiencia, ubicada en San Pedro Sula. El sitio debe transmitir confianza, profesionalismo y modernidad. Se construirá con **Next.js 15** usando **SSR (Server-Side Rendering)** para maximizar el SEO y el rendimiento.

---

## Stack Tecnológico

| Herramienta | Versión / Notas |
|---|---|
| Next.js | 15 (App Router) |
| React | 19 |
| TypeScript | Requerido en todo el proyecto |
| Tailwind CSS | v4 |
| Framer Motion | Animaciones de UI |
| React Hook Form + Zod | Formulario de contacto |
| next-sitemap | Sitemap automático |
| Resend o Nodemailer | Envío de emails desde el formulario |

---

## Estructura de Carpetas

```
solteci-web/
├── app/
│   ├── layout.tsx              # Layout raíz con Navbar y Footer
│   ├── page.tsx                # Página de Inicio (Home)
│   ├── nosotros/
│   │   └── page.tsx            # Acerca de Nosotros
│   ├── software/
│   │   └── page.tsx            # Productos de Software
│   ├── contacto/
│   │   └── page.tsx            # Página de Contacto
│   └── api/
│       └── contact/
│           └── route.ts        # API Route para el formulario de contacto
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Servicios.tsx
│   │   ├── Productos.tsx
│   │   ├── FlujoDeTrabajo.tsx
│   │   └── PorQueElegirnos.tsx
│   ├── software/
│   │   └── ProductCard.tsx
│   ├── contacto/
│   │   └── ContactForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionTitle.tsx
│       └── Badge.tsx
├── lib/
│   └── metadata.ts             # Metadata base reutilizable
├── public/
│   ├── logo.svg
│   └── og-image.png
└── next.config.ts
```

---

## Empresa: Solteci

### Datos Clave

- **Nombre:** Solteci
- **País:** Honduras
- **Ciudad:** San Pedro Sula
- **Experiencia:** Más de 20 años
- **Email:** ventas@solteci.com
- **Teléfono / WhatsApp:** +504 9471-0698
- **Facebook:** *(agregar URL cuando esté disponible)*
- **WhatsApp link:** `https://wa.me/50494710698`

### Servicios Principales

1. Contabilidad
2. Trámites Administrativos
3. Venta y Desarrollo de Software
4. Soporte Técnico
5. Venta de Equipo de Cómputo
6. Hosting Web

### Productos de Software

| Producto | Descripción |
|---|---|
| **CONTPAQi** | Sistema de contabilidad y nómina líder en Latinoamérica |
| **SoftRestaurant** | Software de administración para restaurantes |
| **iSync SAP B1** | App móvil de ventas integrada con SAP Business One |

---

## Páginas y Contenido

### 1. `/` — Inicio (Home)

**Renderizado:** SSR (`generateMetadata` + `async` server component)

Secciones en orden:
1. **Hero** — Headline fuerte, subtítulo, CTA doble ("Ver Software" + "Contáctanos"), imagen/ilustración de fondo corporativa
2. **Servicios** — Grid de 6 tarjetas con ícono, título y descripción breve
3. **Productos Destacados** — Cards de CONTPAQi, SoftRestaurant, iSync con badge y CTA
4. **Flujo de Venta** — Timeline/stepper horizontal de 4 pasos (ver sección más abajo)
5. **¿Por qué elegirnos?** — 3-4 puntos diferenciadores (20+ años, soporte local, integración SAP, etc.)
6. **CTA Final** — Banner con fondo oscuro, texto motivador y botón de contacto

---

### 2. `/nosotros` — Acerca de Nosotros

**Renderizado:** SSR

Secciones:
- Historia de la empresa (fundada hace 20+ años en San Pedro Sula)
- Misión y Visión
- Valores corporativos (en grid de cards)
- Equipo (placeholder si no hay fotos reales)
- Ubicación (mapa embebido de Google Maps o link directo)

---

### 3. `/software` — Productos de Software

**Renderizado:** SSR

- Introducción a la línea de software
- Cards individuales por producto con:
  - Logo / imagen del producto
  - Nombre y descripción detallada
  - Lista de características clave (bullet points)
  - Badge de categoría (Contabilidad, Restaurantes, Ventas Móviles)
  - Botón CTA → "Solicitar Demo" (abre WhatsApp o va a /contacto)

---

### 4. `/contacto` — Contacto

**Renderizado:** SSR para metadata; formulario en Client Component

- Información de contacto (email, teléfono, WhatsApp)
- Horario de atención
- Formulario con campos:
  - Nombre completo
  - Empresa
  - Email
  - Teléfono (opcional)
  - Mensaje / Necesidad
  - Botón: "Enviar mensaje"
- Validación con **Zod + React Hook Form**
- Envío a `/api/contact` (route handler)
- Feedback visual de éxito / error

---

## Flujo de Trabajo para Venta de Software

Implementar como **stepper visual horizontal** (escritorio) / **vertical** (móvil):

```
Paso 1: Diagnóstico
El cliente nos comenta sobre su negocio y necesidades específicas.

Paso 2: Reunión Presencial
Agendamos un encuentro en nuestras instalaciones o las del cliente.

Paso 3: Presentación del Sistema
Mostramos el software en acción adaptado a su giro de negocio.

Paso 4: Cotización
Enviamos propuesta personalizada con precios y condiciones.
```

---

## Navbar

- Logo Solteci (SVG o imagen)
- Links: Inicio · Nosotros · Software · Contacto
- Botón CTA: "WhatsApp" (abre wa.me link) — color acento
- Menú hamburguesa en móvil
- Sticky + efecto de blur/shadow al hacer scroll (`use client` con `useEffect`)

---

## Footer

Incluir siempre en todas las páginas:

```
Columna 1: Logo + descripción corta + copyright
Columna 2: Navegación rápida (links internos)
Columna 3: Contacto
  - ventas@solteci.com
  - +504 9471-0698
  - San Pedro Sula, Honduras
Columna 4: Redes Sociales
  - WhatsApp: https://wa.me/50494710698
  - Facebook: [URL]
  - Íconos SVG o Lucide icons
```

---

## SEO — Configuración SSR

### Metadata por página

Usar `generateMetadata()` en cada `page.tsx`:

```ts
// app/page.tsx
export const metadata: Metadata = {
  title: 'Solteci | Software, Contabilidad y Servicios TI en Honduras',
  description: 'Empresa hondureña con más de 20 años ofreciendo CONTPAQi, SoftRestaurant, iSync SAP B1, soporte técnico y hosting en San Pedro Sula.',
  openGraph: {
    title: 'Solteci Honduras',
    description: '...',
    url: 'https://solteci.com',
    siteName: 'Solteci',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'es_HN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://solteci.com',
  },
};
```

### Metadata base en `lib/metadata.ts`

```ts
export const baseMetadata = {
  siteName: 'Solteci',
  baseUrl: 'https://solteci.com',
  defaultDescription: 'Solteci: más de 20 años ofreciendo software, contabilidad y servicios TI en San Pedro Sula, Honduras.',
};
```

### Sitemap

Instalar `next-sitemap` y configurar `next-sitemap.config.js`:

```js
module.exports = {
  siteUrl: 'https://solteci.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
};
```

Agregar script en `package.json`:
```json
"postbuild": "next-sitemap"
```

### JSON-LD (Datos Estructurados)

Agregar en `app/layout.tsx`:

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Solteci',
  url: 'https://solteci.com',
  logo: 'https://solteci.com/logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+504-9471-0698',
    contactType: 'sales',
    availableLanguage: 'Spanish',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Pedro Sula',
    addressCountry: 'HN',
  },
};
```

---

## Diseño Visual

### Paleta de Colores (marca oficial Solteci)

```css
:root {
  --primary: #002A5C;       /* Azul marino — color principal de marca */
  --accent: #DDB619;        /* Amarillo dorado — color de acento de marca */
  --primary-dark: #001E42;  /* Azul más oscuro para hover y fondos */
  --accent-dark: #C4A215;   /* Dorado oscuro para hover en botones de acento */
  --background: #F8FAFC;
  --surface: #FFFFFF;
  --text-primary: #0F172A;
  --text-muted: #64748B;
  --border: #E2E8F0;
}
```

**Uso de colores:**
- `--primary` (#002A5C): Navbar, Footer, headings principales, botones primarios
- `--accent` (#DDB619): CTAs destacados ("Solicitar Demo", "WhatsApp"), badges, iconos de acento, underlines decorativos, stepper activo
- Combinar fondo `--primary` con texto/iconos `--accent` para secciones hero y banners
- Nunca usar `--accent` como color de texto sobre fondo blanco (contraste insuficiente); usarlo solo sobre `--primary` o como fondo con texto blanco/oscuro

### Tipografía

- **Fuente única:** `Poppins` (Google Fonts) — para headings y body
- Pesos a importar: `300`, `400`, `500`, `600`, `700`, `800`
- Importar en `app/layout.tsx` con `next/font/google`:

```ts
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});
```

- Aplicar `poppins.variable` en el `<html>` y usar `font-family: var(--font-poppins)` en Tailwind (`fontFamily.sans`)
- Headings H1: `font-weight: 800`, H2: `700`, H3: `600`, body: `400`/`500`

### Estilo General

- Limpio, profesional, confiable
- Cards con sombra suave y bordes redondeados (`rounded-xl`)
- Secciones alternando fondo blanco y fondo gris muy claro
- Animaciones sutiles de entrada con Framer Motion (`fadeInUp`, `staggerChildren`)
- Totalmente responsive (mobile-first)

---

## Comandos para Iniciar

```bash
# Crear el proyecto
npx create-next-app@latest solteci-web --typescript --tailwind --app --src-dir=false --import-alias="@/*"

cd solteci-web

# Dependencias adicionales
npm install framer-motion react-hook-form zod @hookform/resolvers lucide-react next-sitemap

# Desarrollo
npm run dev
```

---

## Notas para Claude Code

- **Todo el código en TypeScript estricto.** Sin `any`.
- **Componentes del servidor por defecto.** Usar `'use client'` solo cuando sea estrictamente necesario (formularios, hooks de estado, animaciones).
- **SSR real:** Todas las páginas deben ser `async` server components con `generateMetadata` definido.
- **No usar `getServerSideProps`** — ese es el Pages Router. Usar App Router con `fetch` directamente en server components.
- **Accesibilidad:** usar atributos `aria-label`, etiquetas semánticas (`<main>`, `<section>`, `<nav>`, `<footer>`).
- **Performance:** imágenes con `next/image`, fuentes con `next/font`, lazy loading en secciones pesadas.
- **El formulario de contacto** debe tener feedback de loading, éxito y error — no solo enviar y silencio.
- **WhatsApp CTA** siempre visible: en Navbar, en Hero, en Footer, y en la página de Software (botón "Solicitar Demo").
