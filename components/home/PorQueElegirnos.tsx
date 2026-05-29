'use client';

import { motion } from 'framer-motion';
import { Award, MapPin, Link2, Headphones } from 'lucide-react';

const razones = [
  {
    icon: Award,
    title: '+20 Años de Experiencia',
    desc: 'Dos décadas acompañando a empresas hondureñas en su transformación digital y crecimiento sostenido.',
  },
  {
    icon: MapPin,
    title: 'Soporte Técnico Nacional',
    desc: 'Equipo disponible a nivel nacional para atención presencial y soporte inmediato cuando lo necesitas.',
  },
  {
    icon: Link2,
    title: 'Integración con SAP',
    desc: 'Solución móvil de ventas integrada con SAP Business One, potenciando a tu fuerza de ventas en campo.',
  },
  {
    icon: Headphones,
    title: 'Atención Personalizada',
    desc: 'Cada cliente recibe acompañamiento dedicado desde la implementación hasta el soporte continuo.',
  },
];

export default function PorQueElegirnos() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">¿Por Qué Elegirnos?</h2>
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            Razones por las que empresas en Honduras confían en Solteci.
          </p>
          <div className="mt-4 h-1 w-16 bg-accent rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {razones.map((razon, i) => (
            <motion.div
              key={razon.title}
              className="flex gap-4 bg-white/5 hover:bg-white/10 rounded-xl p-6 border border-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <razon.icon size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1">{razon.title}</h3>
                <p className="text-white/60 text-sm leading-6">{razon.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
