import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="px-4 py-2 inline-block">
              <Image
                src="/imagenes/logo-solteci_white.png"
                alt="Solteci"
                width={130}
                height={42}
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-3 text-white/60 text-sm leading-6">
              Más de 20 años ofreciendo soluciones tecnológicas y contables en San Pedro Sula,
              Honduras.
            </p>
            <p className="mt-4 text-white/40 text-xs">
              © {new Date().getFullYear()} Solteci. Todos los derechos reservados.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/nosotros', label: 'Nosotros' },
                { href: '/software', label: 'Software' },
                // { href: '/clientes', label: 'Clientes' }, // Oculto temporalmente — implementación futura
                { href: '/contacto', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail size={14} className="text-accent flex-shrink-0" />
                ventas@solteci.com
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Phone size={14} className="text-accent flex-shrink-0" />
                +504 9471-0698
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={14} className="text-accent flex-shrink-0 mt-0.5" />
                Barrio Suyapa, Edificio Nova<br />San Pedro Sula, Honduras
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Redes Sociales
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/50494710698"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-accent text-sm transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-accent text-sm transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
