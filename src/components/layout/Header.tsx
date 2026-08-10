import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../../core/constants';
import { Button } from '../common/Button';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const activeTab = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  // Scroll effect optimized for luxury feel and smart mobile header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state for background styling
      setScrolled(currentScrollY > 20);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[var(--z-sticky)] transition-[background-color,border-color,backdrop-filter] duration-[var(--motion-standard-duration)] ease-[var(--motion-standard-easing)] border-b py-space-4 ${scrolled
          ? 'bg-neutral-white/95 backdrop-blur-md shadow-elevation-1 border-neutral-lightgray'
          : 'bg-transparent border-transparent'
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="flex items-center cursor-pointer group gap-space-3">
              {/* Logo Mark */}
              <img
                src="/images/logo-memobaut.jpg"
                alt="Memo BauT"
                className={`h-12 w-auto object-contain rounded-[var(--radius-sm)] transition-transform duration-[var(--motion-standard-duration)] ease-[var(--motion-standard-easing)] origin-left ${scrolled ? 'scale-90' : 'scale-100'}`}
              />
              {/* Logo Text */}
              <div className="flex flex-col justify-center">
                <h1
                  className={`text-xl font-sans font-bold tracking-wide transition-colors duration-[var(--motion-standard-duration)] ease-[var(--motion-standard-easing)] leading-none ${scrolled ? 'text-neutral-darkgray' : 'text-neutral-white'
                    }`}
                >
                  Memo Bau<span className="text-accent-base">T</span>
                </h1>
                <span
                  className={`text-xs uppercase tracking-widest font-medium transition-colors duration-[var(--motion-standard-duration)] ease-[var(--motion-standard-easing)] mt-1 whitespace-nowrap ${scrolled ? 'text-neutral-midgray' : 'text-neutral-white/80'
                    }`}
                >
                  Garten  & Landschaftsbau
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center space-x-10">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.id}
                  to={item.id === 'home' ? '/' : `/${item.id}`}
                  className={`text-sm font-semibold tracking-wide whitespace-nowrap transition-colors duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] relative group py-2 ${activeTab === item.id
                    ? (scrolled ? 'text-accent-base' : 'text-accent-base')
                    : (scrolled ? 'text-neutral-darkgray hover:text-accent-base' : 'text-neutral-white hover:text-accent-base')
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-base transform transition-transform duration-[var(--motion-standard-duration)] ease-[var(--motion-standard-easing)] origin-left ${activeTab === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                  />
                </Link>
              ))}

              {/* CTA Button */}
              <Button
                variant={scrolled ? 'primary' : 'gold'}
                className="ml-4 !py-2.5 !px-6 text-sm font-bold whitespace-nowrap"
                onClick={() => window.location.href = '/contact'}
              >
                Projekt anfragen
              </Button>
            </nav>

            {/* Mobile Menu Toggle (Touch-Target min 48x48px) */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-3 -mr-3 transition-colors duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] hover:text-accent-base ${scrolled ? 'text-neutral-darkgray' : 'text-neutral-white'
                  }`}
                aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={mobileMenuOpen ? "true" : "false"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-neutral-white z-[900] transition-transform duration-[var(--motion-emphasis-duration)] ease-[var(--motion-emphasis-easing)]  will-change-transform lg:hidden pt-24 px-6 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2">
          {NAVIGATION.map((item, index) => (
            <Link
              key={item.id}
              to={item.id === 'home' ? '/' : `/${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-h3 font-sans font-bold py-4 border-b border-neutral-lightgray flex justify-between items-center transition-all duration-[var(--motion-emphasis-duration)] ease-[var(--motion-emphasis-easing)] ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} ${activeTab === item.id ? 'text-accent-base' : 'text-neutral-darkgray hover:text-accent-base'
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
              <ArrowRight className={`w-5 h-5 opacity-0 -translate-x-4 transition-all duration-[var(--motion-standard-duration)] ease-[var(--motion-standard-easing)] ${activeTab === item.id ? 'opacity-100 translate-x-0' : ''}`} />
            </Link>
          ))}
          <div className="pt-8">
            <Button
              variant="gold"
              className="w-full justify-center py-4 text-base"
              icon={Phone}
              onClick={() => window.location.href = '/contact'}
            >
              Kostenlose Beratung
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};
