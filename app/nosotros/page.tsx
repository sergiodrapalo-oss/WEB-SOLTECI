import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Target, Eye, Heart } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Acerca de Nosotros',
  description:
    'Conoce la historia, misión y valores de Solteci — empresa hondureña con más de 20 años en tecnología y servicios contables en San Pedro Sula.',
};

const valores = [
  {
    icon: Heart,
    title: 'Compromiso',
    desc: 'Nos comprometemos con cada cliente para garantizar resultados reales y duraderos.',
  },
  {
    icon: Target,
    title: 'Excelencia',
    desc: 'Buscamos la calidad en cada servicio, producto y solución que entregamos.',
  },
  {
    icon: Eye,
    title: 'Transparencia',
    desc: 'Comunicación honesta y clara en cada etapa del proceso con nuestros clientes.',
  },
  {
    icon: MapPin,
    title: 'Arraigo Local',
    desc: 'Conocemos la realidad empresarial hondureña porque somos parte de ella.',
  },
];

const equipo = [
  { nombre: 'Nombre Apellido', cargo: 'Gerente General', seed: 'person-ceo' },
  { nombre: 'Nombre Apellido', cargo: 'Director Comercial', seed: 'person-sales' },
  { nombre: 'Nombre Apellido', cargo: 'Líder de Soporte Técnico', seed: 'person-tech' },
  { nombre: 'Nombre Apellido', cargo: 'Consultora Contable', seed: 'person-accounting' },
];

export default async function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4 border border-accent/30 uppercase tracking-wider">
                Acerca de Nosotros
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
                Dos décadas construyendo confianza en Honduras
              </h1>
              <p className="text-white/70 text-lg leading-8">
                Fundada en San Pedro Sula, Solteci nació con la misión de acercar la tecnología a las
                empresas hondureñas, ofreciendo soluciones contables, de software y soporte tecnológico
                adaptadas a la realidad local.
              </p>
            </div>
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="https://picsum.photos/seed/solteci-about-hero/600/400"
                alt="Oficinas de Solteci en San Pedro Sula"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/seed/solteci-history/540/320"
                alt="Historia de Solteci"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionTitle title="Nuestra Historia" centered={false} />
              <div className="space-y-4 text-slate-600 leading-8">
                <p>
                  Solteci fue fundada hace más de 20 años en San Pedro Sula por profesionales
                  hondureños convencidos de que las empresas locales merecían acceso a tecnología de
                  primer nivel con soporte cercano y personalizado.
                </p>
                <p>
                  Con el tiempo crecimos hasta convertirnos en distribuidores autorizados de
                  CONTPAQi — el sistema contable más utilizado en Latinoamérica — así como
                  SoftRestaurant e iSync SAP B1, soluciones reconocidas en toda la región.
                </p>
                <p>
                  Hoy atendemos a cientos de empresas en Honduras, desde pequeños negocios hasta
                  corporaciones, ofreciendo implementación, capacitación y soporte técnico local.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Misión y Visión" subtitle="Los principios que guían nuestro trabajo cada día." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Target size={22} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Misión</h3>
              <p className="text-white/70 leading-7">
                Brindar soluciones tecnológicas, contables y de soporte que impulsen el crecimiento
                de las empresas hondureñas, con atención personalizada, calidad de servicio y
                compromiso con la satisfacción del cliente.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Eye size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Visión</h3>
              <p className="text-slate-600 leading-7">
                Ser la empresa de tecnología más confiable de Honduras, reconocida por transformar
                negocios a través de soluciones innovadoras y un equipo humano excepcional comprometido
                con el desarrollo del país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Nuestros Valores" subtitle="Los principios que nos definen como empresa y como equipo." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor) => (
              <div
                key={valor.title}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <valor.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-primary text-base mb-2">{valor.title}</h3>
                <p className="text-slate-500 text-sm leading-6">{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Nuestro Equipo" subtitle="Profesionales comprometidos con el éxito de tu empresa." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {equipo.map((persona) => (
              <div key={persona.seed} className="text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-slate-100 shadow">
                  <Image
                    src={`https://picsum.photos/seed/${persona.seed}/128/128`}
                    alt={persona.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                  />
                </div>
                <div className="font-semibold text-primary text-sm">{persona.nombre}</div>
                <div className="text-slate-500 text-xs mt-0.5">{persona.cargo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Encuéntranos" subtitle="Visítanos en nuestras oficinas en San Pedro Sula." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-primary text-sm">Dirección</div>
                  <div className="text-slate-500 text-sm mt-0.5">Barrio Suyapa, Edificio Nova<br />San Pedro Sula, Cortés, Honduras</div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=San+Pedro+Sula+Honduras"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors mt-2"
              >
                <MapPin size={15} />
                Ver en Google Maps
              </a>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/seed/san-pedro-sula-map/600/256"
                alt="Ubicación de Solteci en San Pedro Sula"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                  <MapPin size={15} className="text-accent" />
                  Barrio Suyapa, Edificio Nova, San Pedro Sula
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
