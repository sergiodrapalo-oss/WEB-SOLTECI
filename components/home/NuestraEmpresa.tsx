'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const datos = [
  { value: '20+', label: 'Años en el mercado' },
  { value: '3', label: 'Softwares líderes' },
  { value: '100%', label: 'Soporte local' },
];

export default function NuestraEmpresa() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images collage */}
          <motion.div
            className="relative h-[420px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main photo */}
            <div className="absolute top-0 left-0 w-[65%] h-[75%] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/imagenes/san-pedro-sula.jpg"
                alt="San Pedro Sula"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Secondary photo */}
            <div className="absolute bottom-0 right-0 w-[50%] h-[55%] rounded-2xl overflow-hidden shadow-xl ">
              <Image
                src="/imagenes/softrestaurant-inicio.png"
                alt="Panel de análisis y reportes de gestión"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Years badge */}
            <div className="absolute bottom-6 left-6 bg-primary text-white rounded-xl shadow-lg px-5 py-4 z-10">
              <div className="text-accent font-extrabold text-3xl leading-none">20+</div>
              <div className="text-white/80 text-xs mt-1 leading-tight">años sirviendo<br />a Honduras</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent/20 text-accent-dark text-xs font-bold px-3 py-1 rounded-full mb-4 border border-accent/30 uppercase tracking-wider">
              Nuestra Empresa
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4">
              Tecnología hondureña con respaldo de dos décadas
            </h2>
            <p className="text-slate-500 text-base leading-8 mb-6">
              Desde San Pedro Sula, Solteci lleva más de 20 años acompañando a empresas de Honduras en
              su digitalización. Somos distribuidores autorizados de los sistemas más utilizados en el
              país y ofrecemos soporte local, capacitación e implementación.
            </p>
            <p className="text-slate-500 text-base leading-8 mb-8">
              Nuestro equipo conoce la realidad del empresario hondureño y trabaja para ofrecer
              soluciones prácticas que realmente funcionen en tu negocio.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-slate-100">
              {datos.map((dato) => (
                <div key={dato.label} className="text-center">
                  <div className="text-2xl font-extrabold text-primary">{dato.value}</div>
                  <div className="text-slate-500 text-xs mt-1 leading-tight">{dato.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              Conoce más sobre nosotros
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
