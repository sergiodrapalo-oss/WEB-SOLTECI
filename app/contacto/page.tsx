import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/contacto/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contáctanos por WhatsApp, email o formulario. Solteci — San Pedro Sula, Honduras. Tel: +504 9471-0698.',
};

const infoContacto = [
  {
    icon: Phone,
    titulo: 'Teléfono / WhatsApp',
    valor: '+504 9471-0698',
    href: 'https://wa.me/50494710698',
  },
  {
    icon: Mail,
    titulo: 'Correo Electrónico',
    valor: 'ventas@solteci.com',
    href: 'mailto:ventas@solteci.com',
  },
  {
    icon: MapPin,
    titulo: 'Ubicación',
    valor: 'Barrio Suyapa, Edificio Nova, San Pedro Sula, Honduras',
    href: 'https://maps.app.goo.gl/yJUkvHoGx3xcfAYj9',
  },
  {
    icon: Clock,
    titulo: 'Horario de Atención',
    valor: 'Lun–Vie 8:00 am – 5:00 pm',
    href: null,
  },
];

export default async function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4 border border-accent/30 uppercase tracking-wider">
            Contacto
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            Hablemos de tu negocio
          </h1>
          <p className="text-white/70 text-lg leading-8">
            Cuéntanos qué necesitas y te asesoramos sin costo ni compromiso. Estamos en San Pedro Sula
            listos para ayudarte.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">Información de contacto</h2>
                <p className="text-slate-500 text-sm leading-6">
                  Puedes contactarnos por cualquiera de estos medios. Respondemos en el menor tiempo
                  posible durante nuestro horario de atención.
                </p>
              </div>

              <div className="space-y-4">
                {infoContacto.map((item) => (
                  <div key={item.titulo} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        {item.titulo}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-primary font-medium text-sm hover:text-primary-dark transition-colors"
                        >
                          {item.valor}
                        </a>
                      ) : (
                        <span className="text-slate-700 font-medium text-sm">{item.valor}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-primary rounded-2xl p-6 mt-4">
                <h3 className="text-white font-bold mb-2 text-base">¿Prefieres WhatsApp?</h3>
                <p className="text-white/60 text-sm mb-4 leading-6">
                  Escríbenos directamente y te respondemos al instante.
                </p>
                <a
                  href="https://wa.me/50494710698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  <MessageCircle size={16} />
                  Abrir WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-1">Envíanos un mensaje</h2>
                <p className="text-slate-500 text-sm mb-6">
                  Completa el formulario y te contactaremos pronto.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
