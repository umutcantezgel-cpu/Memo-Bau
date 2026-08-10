import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAVIGATION, COMPANY_INFO } from '../../core/constants';

export const Footer: React.FC = () => (
  <footer role="contentinfo" className="bg-neutral-darkgray text-neutral-white pt-space-20 pb-space-10 lg:pb-32 border-t border-neutral-white/10">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/images/logo-memobaut.jpg"
              alt="Memo BauT"
              className="h-16 w-auto rounded-md"
            />
            <span className="ml-3 text-xl font-bold tracking-tight text-neutral-white">
              Memo BauT<span className="text-accent-base">.</span>
            </span>
          </div>
          <p className="text-neutral-white/60 text-sm leading-relaxed mb-6">
            {COMPANY_INFO.name}
            <br />
            {COMPANY_INFO.tagline}
          </p>
          {/* Social-Media-Links entfernt – erst wieder einbinden, wenn echte Profile existieren */}
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6 text-neutral-white/90">Navigation</h2>
          <nav aria-label="Footer Links">
            <ul className="space-y-3 text-sm text-neutral-white/60">
              {NAVIGATION.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id === 'home' ? '/' : `/${item.id}`}
                    className="hover:text-accent-base transition-colors duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-base rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)]"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6 text-neutral-white/90">Leistungen</h2>
          <nav aria-label="Footer Leistungen">
            <ul className="space-y-3 text-sm text-neutral-white/60">
              {[
                { label: 'Gartendesign', slug: 'gartendesign' },
                { label: 'Landschaftsbau', slug: 'landschaftsbau' },
                { label: 'Pflasterarbeiten', slug: 'pflasterarbeiten' },

                { label: 'Bewässerung', slug: 'bewaesserung' },
                { label: 'Gartenpflege', slug: 'gartenpflege' },
              ].map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/leistungen/${item.slug}`}
                    className="hover:text-accent-base transition-colors duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-base rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)]"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6 text-neutral-white/90">Öffnungszeiten</h2>
          <ul className="space-y-3 text-sm text-neutral-white/60">
            <li>Mo Fr: 07:00   18:00</li>
            <li>Sa: 08:00   14:00</li>
            <li>So: Geschlossen</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6 text-neutral-white/90">Kontakt</h2>
          <ul className="space-y-4 text-sm text-neutral-white/60">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-accent-base mr-3 flex-shrink-0" />
              <span>
                {COMPANY_INFO.address.street}
                <br />
                {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-accent-base mr-3 flex-shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-accent-base mr-3 flex-shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-white/50">
        <p>
          &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Alle Rechte
          vorbehalten.
          <span className="mx-2 hidden md:inline">|</span>
          <br className="md:hidden" />
          <a
            href="https://codayweb.de"
            target="_blank"
            rel="noopener"
            className="hover:text-white transition-colors duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)]"
          >
            Webdesign by Coday
          </a>
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0 items-center">
          <Link to="/impressum" className="hover:text-white transition-colors duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)]">
            Impressum
          </Link>
          <Link to="/datenschutz" className="hover:text-white transition-colors duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)]">
            Datenschutz
          </Link>
          <Link to="/agb" className="hover:text-white transition-colors duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)]">
            AGB & Widerruf
          </Link>
          <Link to="/cookie-richtlinie" className="hover:text-white transition-colors duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)]">
            Cookie Richtlinie
          </Link>
          <Link to="/barrierefreiheit" className="hover:text-white transition-colors duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)]">
            Barrierefreiheit
          </Link>
          <button
            type="button"
            data-cc="show-preferencesModal"
            className="hover:text-white transition-colors duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] cursor-pointer"
          >
            Cookie Einstellungen
          </button>
        </div>
      </div>
    </div>
  </footer>
);
