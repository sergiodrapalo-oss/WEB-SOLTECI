import type { Metadata } from 'next';
import { Poppins, Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Solteci | Software, Contabilidad y Servicios TI en Honduras',
    template: '%s | Solteci',
  },
  description:
    'Empresa hondureña con más de 20 años ofreciendo CONTPAQi, SoftRestaurant, iSync SAP B1, soporte técnico y hosting en San Pedro Sula.',
  metadataBase: new URL('https://solteci.com'),
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("h-full", "antialiased", poppins.variable, "font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
