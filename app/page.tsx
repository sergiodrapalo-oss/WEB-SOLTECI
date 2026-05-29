import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Servicios from '@/components/home/Servicios';
import Productos from '@/components/home/Productos';
import NuestraEmpresa from '@/components/home/NuestraEmpresa';
import FlujoDeTrabajo from '@/components/home/FlujoDeTrabajo';
import PorQueElegirnos from '@/components/home/PorQueElegirnos';
import FAQ from '@/components/home/FAQ';

export const metadata: Metadata = {
  title: 'Solteci | Software, Contabilidad y Servicios TI en Honduras',
  description:
    'Empresa hondureña con más de 20 años ofreciendo CONTPAQi, SoftRestaurant, iSync SAP B1, soporte técnico y hosting en San Pedro Sula.',
  openGraph: {
    title: 'Solteci Honduras',
    description:
      'Empresa hondureña con más de 20 años ofreciendo software, contabilidad y servicios TI en San Pedro Sula.',
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

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Servicios />
      <Productos />
      <NuestraEmpresa />
      <FlujoDeTrabajo />
      <PorQueElegirnos />
      <FAQ />

      {/* CTA Final */}
      <section className="bg-primary-dark py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-8">
            Contáctanos hoy y descubre cómo Solteci puede ayudarte a crecer con tecnología.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/50494710698"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              <MessageCircle size={18} />
              Escribir por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              Formulario de Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
