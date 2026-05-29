'use client';

import { motion } from 'framer-motion';
import { Search, Users, Monitor, FileText } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const pasos = [
  {
    icon: Search,
    step: '01',
    title: 'Diagnóstico',
    desc: 'El cliente nos comenta sobre su negocio y necesidades específicas.',
  },
  {
    icon: Users,
    step: '02',
    title: 'Reunión Presencial',
    desc: 'Agendamos un encuentro en nuestras instalaciones o las del cliente.',
  },
  {
    icon: Monitor,
    step: '03',
    title: 'Presentación del Sistema',
    desc: 'Mostramos el software en acción adaptado a su giro de negocio.',
  },
  {
    icon: FileText,
    step: '04',
    title: 'Cotización',
    desc: 'Enviamos propuesta personalizada con precios y condiciones.',
  },
];

export default function FlujoDeTrabajo() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="¿Cómo Trabajamos?"
          subtitle="Un proceso simple y transparente para encontrar la solución perfecta para tu empresa."
        />

        {/* Desktop: horizontal stepper */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-0">
          {pasos.map((paso, i) => (
            <motion.div
              key={paso.step}
              className="relative flex flex-col items-center text-center px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {i < pasos.length - 1 && (
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 z-0" />
              )}
              <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 ring-4 ring-slate-50">
                <paso.icon size={24} className="text-accent" />
              </div>
              <span className="text-xs font-bold text-accent tracking-widest mb-1">
                PASO {paso.step}
              </span>
              <h3 className="font-bold text-primary text-base mb-2">{paso.title}</h3>
              <p className="text-slate-500 text-sm leading-6">{paso.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="lg:hidden flex flex-col">
          {pasos.map((paso, i) => (
            <motion.div
              key={paso.step}
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <paso.icon size={20} className="text-accent" />
                </div>
                {i < pasos.length - 1 && <div className="w-0.5 flex-1 bg-slate-200 my-2" />}
              </div>
              <div className={i < pasos.length - 1 ? 'pb-10' : 'pb-0'}>
                <span className="text-xs font-bold text-accent tracking-widest">PASO {paso.step}</span>
                <h3 className="font-bold text-primary text-base mt-0.5 mb-1">{paso.title}</h3>
                <p className="text-slate-500 text-sm leading-6">{paso.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
