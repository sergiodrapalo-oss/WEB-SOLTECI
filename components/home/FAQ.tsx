'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

const faqs = [
  {
    q: '¿En qué zonas de Honduras ofrecen servicio?',
    a: 'Tenemos oficinas en San Pedro Sula y brindamos atención presencial en la zona norte del país. También ofrecemos soporte remoto a nivel nacional para clientes en todo Honduras.',
  },
  {
    q: '¿La implementación del software incluye capacitación?',
    a: 'Sí. Cada implementación incluye capacitación personalizada para tu equipo. Nos aseguramos de que todos los usuarios dominen el sistema antes de dejarlo operando de forma independiente.',
  },
  {
    q: '¿Cuánto tiempo toma implementar el software?',
    a: 'Depende de la solución y el tamaño de tu empresa. En promedio, una implementación de CONTPAQi tarda entre 1 y 3 semanas. SoftRestaurant puede estar operativo en pocos días.',
  },
  {
    q: '¿Qué hago si tengo un problema técnico urgente?',
    a: 'Puedes contactarnos por WhatsApp, teléfono o correo electrónico. Nuestro equipo de soporte técnico atiende en horario de lunes a viernes de 8:00 am a 5:00 pm y da seguimiento a cada caso hasta su resolución.',
  },
  {
    q: '¿Puedo probar el software antes de comprarlo?',
    a: 'Sí. Ofrecemos demostraciones sin costo ni compromiso. Agendamos una reunión presencial o virtual donde mostramos el software funcionando con casos reales de tu tipo de negocio.',
  },
  {
    q: '¿Trabajan con empresas pequeñas o solo corporaciones?',
    a: 'Trabajamos con todo tipo de empresas: desde negocios familiares y microempresas hasta corporaciones. Nuestras soluciones se adaptan al tamaño y necesidades de cada cliente.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-primary font-semibold text-base leading-snug">{q}</span>
        <ChevronDown
          size={20}
          className={`text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-500 text-sm leading-7">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionTitle
              title="Preguntas Frecuentes"
              subtitle="Todo lo que necesitas saber antes de dar el primer paso."
              centered={false}
            />
            <p className="text-slate-500 text-sm leading-7 mt-2">
              ¿Tienes otra duda? Escríbenos por WhatsApp y te respondemos al instante.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 px-6 shadow-sm">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
