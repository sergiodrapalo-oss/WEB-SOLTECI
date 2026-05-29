import type { Metadata } from 'next';
import Image from 'next/image';
import { MessageCircle, CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Productos de Software',
  description:
    'CONTPAQi, SoftRestaurant e iSync SAP B1 — soluciones de software líderes distribuidas por Solteci en Honduras.',
};

const productos = [
  {
    name: 'CONTPAQi',
    badge: 'Contabilidad',
    tagline: 'El sistema contable más utilizado en Latinoamérica',
    desc: 'CONTPAQi es la solución líder para la gestión contable y de nómina. Permite automatizar procesos, generar reportes fiscales, emitir facturas electrónicas y gestionar el capital humano desde una sola plataforma.',
    features: [
      'Contabilidad general y auxiliar',
      'Nómina y gestión de RRHH',
      'Facturación electrónica',
      'Declaraciones fiscales',
      'Reportes financieros avanzados',
      'Multi-empresa y multi-sucursal',
    ],
    imageSeed: 'contpaq-software',
    imageAlt: 'Pantalla del sistema CONTPAQi',
    accentColor: 'bg-blue-600',
  },
  {
    name: 'SoftRestaurant',
    badge: 'Restaurantes',
    tagline: 'Administración integral para tu restaurante',
    desc: 'SoftRestaurant es el software más completo para la gestión de restaurantes, bares y cafeterías. Controla mesas, comandas, inventario y facturación con una interfaz intuitiva diseñada para el sector.',
    features: [
      'Control de mesas y comandas',
      'Gestión de cocina en tiempo real',
      'Control de inventario y recetas',
      'Facturación y caja',
      'Reportes de ventas y costos',
      'Integración con dispositivos POS',
    ],
    imageSeed: 'restaurant-management',
    imageAlt: 'Pantalla del sistema SoftRestaurant',
    accentColor: 'bg-orange-600',
  },
  {
    name: 'iSync SAP B1',
    badge: 'Ventas Móviles',
    tagline: 'Tu fuerza de ventas conectada en campo',
    desc: 'iSync SAP B1 es la app móvil de ventas diseñada para integrarse directamente con SAP Business One. Permite a tus vendedores tomar pedidos, consultar inventario y generar cotizaciones desde cualquier lugar.',
    features: [
      'Sincronización en tiempo real con SAP B1',
      'Toma de pedidos y cotizaciones',
      'Consulta de catálogo e inventario',
      'Historial de clientes y facturas',
      'Funciona en modo offline',
      'Disponible en iOS y Android',
    ],
    imageSeed: 'mobile-sales',
    imageAlt: 'Aplicación móvil iSync SAP B1',
    accentColor: 'bg-green-700',
  },
];

export default async function SoftwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4 border border-accent/30 uppercase tracking-wider">
            Nuestros Productos
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            Software líder para empresas hondureñas
          </h1>
          <p className="text-white/70 text-lg leading-8">
            Somos distribuidores autorizados de las soluciones más reconocidas en contabilidad,
            administración de restaurantes y ventas móviles. Implementación, capacitación y soporte
            local incluidos.
          </p>
        </div>
      </section>

      {/* Productos detallados */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {productos.map((producto, i) => (
            <div
              key={producto.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={`https://picsum.photos/seed/${producto.imageSeed}/600/288`}
                    alt={producto.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/40" />
                  <div className="absolute top-4 left-4">
                    <Badge label={producto.badge} variant="accent" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="text-3xl font-extrabold text-primary mb-2">{producto.name}</h2>
                <p className="text-accent-dark font-semibold text-sm mb-4">{producto.tagline}</p>
                <p className="text-slate-600 leading-7 mb-6">{producto.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {producto.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle size={15} className="text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/50494710698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-6 py-3 rounded-full text-sm transition-colors"
                >
                  <MessageCircle size={16} />
                  Solicitar Demo de {producto.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿No sabes cuál es el indicado para ti?</h2>
          <p className="text-white/60 text-lg mb-8">
            Cuéntanos sobre tu negocio y te recomendamos la solución perfecta sin costo ni compromiso.
          </p>
          <a
            href="https://wa.me/50494710698"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            <MessageCircle size={18} />
            Hablar con un asesor
          </a>
        </div>
      </section>
    </>
  );
}
