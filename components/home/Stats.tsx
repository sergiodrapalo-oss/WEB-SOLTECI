'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '+20', label: 'Años de experiencia', desc: 'Acompañando empresas en Honduras' },
  { value: '3', label: 'Softwares líderes', desc: 'CONTPAQi, SoftRestaurant, iSync SAP B1' },
  { value: '6', label: 'Servicios especializados', desc: 'Tecnología, contabilidad y soporte' },
  { value: '100%', label: 'Soporte local', desc: 'Atención presencial en San Pedro Sula' },
];

export default function Stats() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center px-6 py-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="text-4xl font-extrabold text-primary">{stat.value}</span>
              <span className="mt-1 text-sm font-bold text-slate-700">{stat.label}</span>
              <span className="mt-1 text-xs text-slate-400 leading-tight">{stat.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
