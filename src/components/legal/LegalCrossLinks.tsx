import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CrossLink {
    title: string;
    description: string;
    href: string;
}

interface LegalCrossLinksProps {
    /** The current page path to exclude from links */
    currentPath: string;
}

const ALL_LEGAL_PAGES: CrossLink[] = [
    { title: 'Impressum', description: 'Anbieterkennung, Kontakt & Haftungshinweise', href: '/impressum' },
    { title: 'Datenschutzerklärung', description: 'Datenverarbeitung, Ihre Rechte & Drittanbieter', href: '/datenschutz' },
    { title: 'AGB & Widerruf', description: 'Vertragsgrundlagen, Zahlungskonditionen & Widerrufsrecht', href: '/agb' },
    { title: 'Cookie-Richtlinie', description: 'Cookies, Kategorien & Einstellungen', href: '/cookie-richtlinie' },
    { title: 'Barrierefreiheit', description: 'Konformitätsstatus, Maßnahmen & Feedback', href: '/barrierefreiheit' },
];

export const LegalCrossLinks: React.FC<LegalCrossLinksProps> = ({ currentPath }) => {
    const links = ALL_LEGAL_PAGES.filter((page) => page.href !== currentPath);

    return (
        <section className="mt-space-16 pt-space-12 border-t border-neutral-lightgray/50" aria-label="Verwandte Rechtsseiten">
            <h2 className="text-lg font-bold text-neutral-darkgray mb-space-6">Weitere rechtliche Informationen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-4">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        className="group flex items-center justify-between p-space-6 bg-neutral-offwhite rounded-[var(--radius-lg)] border border-neutral-lightgray/30 hover:shadow-elevation-2 hover:-translate-y-0.5 transition-all duration-300 no-underline"
                    >
                        <div>
                            <h3 className="text-base font-bold text-neutral-darkgray group-hover:text-primary-base transition-colors m-0 p-0 border-0">
                                {link.title}
                            </h3>
                            <p className="text-sm text-neutral-midgray mt-1 mb-0">{link.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary-base flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                ))}
            </div>
        </section>
    );
};
