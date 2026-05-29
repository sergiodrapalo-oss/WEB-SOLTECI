'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle, ChevronRight } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const softwareItems = [
  {
    title: 'CONTPAQi',
    href: '/software',
    desc: 'Sistema líder de contabilidad y nómina en Latinoamérica.',
    badge: 'Contabilidad',
  },
  {
    title: 'SoftRestaurant',
    href: '/software',
    desc: 'Administración integral para restaurantes y bares.',
    badge: 'Restaurantes',
  },
  {
    title: 'iSync SAP B1',
    href: '/software',
    desc: 'Ventas móviles integradas con SAP Business One.',
    badge: 'Ventas Móviles',
  },
];

const mobileLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/software', label: 'Software' },
  { href: '/clientes', label: 'Clientes' },
  { href: '/contacto', label: 'Contacto' },
];

const triggerStyle =
  'bg-transparent text-white/80 hover:bg-white/10 hover:text-white data-popup-open:bg-white/10 data-popup-open:text-white';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-primary'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-white rounded-lg px-3 py-1">
              <Image
                src="/imagenes/Logo Solteci Fondo Blanco.png"
                alt="Solteci"
                width={110}
                height={36}
                className="h-9 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Inicio */}
                <NavigationMenuItem>
                  <Link href="/" className={cn(navigationMenuTriggerStyle(), triggerStyle)}>
                    Inicio
                  </Link>
                </NavigationMenuItem>

                {/* Nosotros */}
                <NavigationMenuItem>
                  <Link href="/nosotros" className={cn(navigationMenuTriggerStyle(), triggerStyle)}>
                    Nosotros
                  </Link>
                </NavigationMenuItem>

                {/* Software — con mega dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(triggerStyle)}>
                    Software
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-3">
                      <p className="px-3 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Nuestros productos
                      </p>
                      {softwareItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-start gap-3 rounded-lg p-3 hover:bg-muted transition-colors group"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                              </span>
                              <span className="text-[10px] font-semibold bg-accent/20 text-accent-dark px-1.5 py-0.5 rounded-full border border-accent/30">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                      <div className="border-t border-border mt-2 pt-2">
                        <Link
                          href="/software"
                          className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-primary hover:bg-primary/5 transition-colors"
                        >
                          Ver todos los productos
                          <ChevronRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Clientes */}
                <NavigationMenuItem>
                  <Link href="/clientes" className={cn(navigationMenuTriggerStyle(), triggerStyle)}>
                    Clientes
                  </Link>
                </NavigationMenuItem>

                {/* Contacto */}
                <NavigationMenuItem>
                  <Link href="/contacto" className={cn(navigationMenuTriggerStyle(), triggerStyle)}>
                    Contacto
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a
              href="https://wa.me/50494710698"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold text-sm px-4 py-2 rounded-full transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary-dark border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium px-3 py-2 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 mt-1 border-t border-white/10">
              <a
                href="https://wa.me/50494710698"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-4 py-2 rounded-full w-fit text-sm transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
