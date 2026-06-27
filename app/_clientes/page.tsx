import type { Metadata } from 'next';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Nuestros Clientes',
  description:
    'Empresas hondureñas que confían en Solteci para su gestión tecnológica y contable.',
};

const testimonios = [
  {
    nombre: 'Carlos Mejía',
    empresa: 'Distribuidora El Sol',
    cargo: 'Gerente General',
    texto:
      'Solteci nos implementó CONTPAQi y el cambio fue inmediato. Cerramos la contabilidad mensual en la mitad del tiempo. El soporte local es excelente.',
    seed: 'client-carlos',
    stars: 5,
  },
  {
    nombre: 'María López',
    empresa: 'Restaurante La Hacienda',
    cargo: 'Propietaria',
    texto:
      'SoftRestaurant transformó la operación de mi restaurante. Ahora tengo control total del inventario, mesas y caja desde una sola pantalla.',
    seed: 'client-maria',
    stars: 5,
  },
  {
    nombre: 'Roberto Hernández',
    empresa: 'Grupo Comercial HN',
    cargo: 'Director de Ventas',
    texto:
      'Con iSync SAP B1 nuestros vendedores en campo pueden tomar pedidos y consultar inventario en tiempo real. Las ventas aumentaron notablemente.',
    seed: 'client-roberto',
    stars: 5,
  },
  {
    nombre: 'Ana Figueroa',
    empresa: 'Contadores & Asociados',
    cargo: 'Socia Directora',
    texto:
      'Llevamos 8 años trabajando con Solteci. Su servicio de contabilidad y soporte a CONTPAQi nos da la tranquilidad de tener siempre todo al día.',
    seed: 'client-ana',
    stars: 5,
  },
  {
    nombre: 'Luis Andino',
    empresa: 'Ferretería Central',
    cargo: 'Administrador',
    texto:
      'El equipo de Solteci nos capacitó a fondo y siempre responde rápido. Nunca hemos tenido un problema sin solución en el mismo día.',
    seed: 'client-luis',
    stars: 5,
  },
  {
    nombre: 'Patricia Reyes',
    empresa: 'Hotel Palmeras',
    cargo: 'Gerente Administrativo',
    texto:
      'Migramos todo nuestro sistema contable con Solteci. El proceso fue ordenado, sin pérdida de datos y con capacitación completa para el equipo.',
    seed: 'client-patricia',
    stars: 5,
  },
];

const sectores = [
  { nombre: 'Comercio Retail', imageSeed: 'sector-retail', desc: 'Tiendas, ferreterías, distribuidoras' },
  { nombre: 'Gastronomía', imageSeed: 'sector-restaurant', desc: 'Restaurantes, cafeterías, bares' },
  { nombre: 'Servicios Profesionales', imageSeed: 'sector-services', desc: 'Consultoras, despachos, firmas' },
  { nombre: 'Manufactura', imageSeed: 'sector-manufacturing', desc: 'Fábricas y empresas productoras' },
  { nombre: 'Hotelería', imageSeed: 'sector-hotel', desc: 'Hoteles, hostales, apart-hoteles' },
];

export default async function ClientesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4 border border-accent/30 uppercase tracking-wider">
            Nuestros Clientes
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            Empresas que confían en Solteci
          </h1>
          <p className="text-white/70 text-lg leading-8">
            Desde pequeños negocios hasta corporaciones, acompañamos a empresas hondureñas en su
            crecimiento tecnológico con soluciones probadas y soporte local.
          </p>
        </div>
      </section>

      {/* Sectores */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Sectores que Atendemos"
            subtitle="Nuestras soluciones se adaptan a distintos tipos de empresas e industrias."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectores.map((sector) => (
              <div
                key={sector.nombre}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow text-center"
              >
                <div className="relative h-24">
                  <Image
                    src={`https://picsum.photos/seed/${sector.imageSeed}/200/96`}
                    alt={sector.nombre}
                    fill
                    sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/50" />
                </div>
                <div className="p-3">
                  <div className="font-semibold text-primary text-xs leading-tight">{sector.nombre}</div>
                  <div className="text-slate-500 text-xs mt-0.5 leading-tight">{sector.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Lo que dicen nuestros clientes"
            subtitle="Testimonios de empresas que ya transformaron su gestión con Solteci."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonios.map((t) => (
              <div
                key={t.seed}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow flex flex-col"
              >
                <Quote size={24} className="text-accent mb-4 opacity-60" />
                <p className="text-slate-600 text-sm leading-7 flex-1 mb-4 italic">
                  &quot;{t.texto}&quot;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="text-accent fill-accent" />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={`https://picsum.photos/seed/${t.seed}/40/40`}
                      alt={t.nombre}
                      fill
                      sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">{t.nombre}</div>
                    <div className="text-slate-500 text-xs">{t.cargo} · {t.empresa}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Únete a nuestros clientes satisfechos</h2>
          <p className="text-white/60 text-lg mb-8">
            Contáctanos hoy y comienza a transformar la gestión de tu empresa con Solteci.
          </p>
          <a
            href="https://wa.me/50494710698"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Solicitar información
          </a>
        </div>
      </section>
    </>
  );
}
