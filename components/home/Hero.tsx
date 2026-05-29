'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-primary min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1 rounded-full mb-6 border border-accent/30">
                Impulsa. Controla. Crece.
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Soluciones Tecnológicas para{' '}
              <span className="text-accent">Hacer Crecer</span> tu Negocio
            </motion.h1>

            <motion.p
              className="mt-6 text-lg sm:text-xl text-white/70 leading-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Software de contabilidad, gestión empresarial y soporte tecnológico en San Pedro Sula.
              Distribuidores autorizados de CONTPAQi, SoftRestaurant e iSync SAP&nbsp;B1.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/software"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-8 py-4 rounded-full text-base transition-colors"
              >
                Ver Software
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/50494710698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
              >
                <MessageCircle size={18} />
                Contáctanos
              </a>
            </motion.div>

            <motion.div
              className="mt-14 grid grid-cols-3 gap-6 pt-10 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {[
                { value: '+20', label: 'Años de experiencia' },
                { value: '3', label: 'Productos de software' },
                { value: '6', label: 'Servicios especializados' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-extrabold text-accent">{stat.value}</div>
                  <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image mockup */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              {/* Floating card decoration */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-2xl border border-accent/30 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="text-accent font-extrabold text-xl">+20</div>
                  <div className="text-white/70 text-xs leading-tight">años de<br />confianza</div>
                </div>
              </div>

              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="https://picsum.photos/seed/solteci-office/520/400"
                  alt="Equipo Solteci trabajando"
                  width={520}
                  height={400}
                  className="w-full object-cover"
                  priority
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
