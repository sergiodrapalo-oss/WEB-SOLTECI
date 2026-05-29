'use client';

import { motion } from 'framer-motion';
import { Calculator, FileText, Code2, Headphones, Monitor, Globe } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const servicios = [
  {
    icon: Calculator,
    title: 'Contabilidad',
    desc: 'Asesoría y gestión contable integral para mantener las finanzas de tu empresa al día.',
  },
  {
    icon: FileText,
    title: 'Trámites Administrativos',
    desc: 'Gestión de documentos y trámites empresariales con eficiencia y precisión.',
  },
  {
    icon: Code2,
    title: 'Venta y Desarrollo de Software',
    desc: 'Distribución de software líder y desarrollo de soluciones a la medida de tu negocio.',
  },
  {
    icon: Headphones,
    title: 'Soporte Técnico',
    desc: 'Asistencia técnica especializada para mantener tu operación sin interrupciones.',
  },
  {
    icon: Monitor,
    title: 'Venta de Equipo de Cómputo',
    desc: 'Hardware y periféricos de calidad con asesoría personalizada para tu empresa.',
  },
  {
    icon: Globe,
    title: 'Hosting Web',
    desc: 'Alojamiento web confiable y rápido para fortalecer tu presencia en internet.',
  },
];

export default function Servicios() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Una gama completa de soluciones tecnológicas y administrativas para impulsar tu empresa."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, i) => (
            <motion.div
              key={servicio.title}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <servicio.icon
                  size={22}
                  className="text-primary group-hover:text-accent transition-colors duration-300"
                />
              </div>
              <h3 className="font-semibold text-primary text-base mb-2">{servicio.title}</h3>
              <p className="text-slate-500 text-sm leading-6">{servicio.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
