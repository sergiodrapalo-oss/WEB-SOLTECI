'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const productos = [
  {
    name: 'CONTPAQi',
    category: 'Contabilidad y Nómina',
    tagline: 'El sistema contable más usado en Latinoamérica',
    desc: 'Automatiza tu contabilidad, nómina y facturación electrónica con la solución líder del mercado.',
    features: ['Contabilidad general', 'Nómina y RRHH', 'Facturación electrónica', 'Reportes fiscales'],
    color: 'bg-blue-700',
    src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=480&h=200&fit=crop&auto=format',
    alt: 'CONTPAQi sistema contable',
  },
  {
    name: 'SoftRestaurant',
    category: 'Gestión de Restaurantes',
    tagline: 'Control total de tu restaurante en un solo lugar',
    desc: 'Administra mesas, cocina, inventario y ventas con el software especializado para el sector gastronómico.',
    features: ['Control de mesas', 'Gestión de cocina', 'Control de inventario', 'Reportes de ventas'],
    color: 'bg-orange-600',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=480&h=200&fit=crop&auto=format',
    alt: 'SoftRestaurant sistema para restaurantes',
  },
  {
    name: 'iSync SAP B1',
    category: 'Ventas Móviles',
    tagline: 'Tu fuerza de ventas conectada en tiempo real',
    desc: 'App móvil integrada con SAP Business One para tomar pedidos, consultar inventario y generar cotizaciones en campo.',
    features: ['Sincronización con SAP B1', 'Pedidos en campo', 'Consulta de inventario', 'Funciona offline'],
    color: 'bg-green-700',
    src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=480&h=200&fit=crop&auto=format',
    alt: 'iSync SAP B1 ventas móviles',
  },
];

export default function Productos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nuestros Productos"
          subtitle="Distribuidores autorizados de las soluciones líderes para contabilidad, restaurantes y ventas móviles."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productos.map((p, i) => (
            <motion.div
              key={p.name}
              className="rounded-2xl border border-slate-200 overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* imagen con overlay de color */}
              <div className="relative h-44">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className={`absolute inset-0 ${p.color} opacity-75`} />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-1">
                    {p.category}
                  </span>
                  <h3 className="text-white font-extrabold text-2xl leading-tight">{p.name}</h3>
                </div>
              </div>

              {/* contenido */}
              <div className="p-6 flex flex-col flex-1 bg-white">
                <p className="text-accent-dark font-semibold text-xs mb-2">{p.tagline}</p>
                <p className="text-slate-500 text-sm leading-6 mb-4">{p.desc}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle size={15} className="text-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2 mt-auto">
                  <a
                    href="https://wa.me/50494710698"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                  >
                    <MessageCircle size={15} />
                    Solicitar Demo
                  </a>
                  <Link
                    href="/software"
                    className="inline-flex items-center justify-center gap-1.5 text-primary hover:text-primary-dark text-sm font-semibold transition-colors"
                  >
                    Ver más detalles
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
