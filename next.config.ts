import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Genera un sitio 100% estático en la carpeta `out/` al correr `next build`.
  // Esos archivos (HTML/CSS/JS) se suben tal cual al hosting cPanel.
  output: 'export',

  // Cada ruta se emite como `ruta/index.html`, que Apache (cPanel) sirve
  // automáticamente sin necesidad de reglas .htaccess.
  trailingSlash: true,

  //allowedDevOrigins: ['192.168.100.6'],
  allowedDevOrigins: ['192.168.100.3'],
  images: {
    // El export estático no soporta la optimización de imágenes de Next
    // (requiere servidor). Con `unoptimized` se emiten <img> normales.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
