import React, { useState, useCallback } from 'react';
import { SEO } from '../components/common/SEO';
import { ArrowRight } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioCategory, PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS } from '../core/constants';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { Reveal } from '../components/common/Reveal';

import { Lightbox } from '../components/common/Lightbox';
import { Section } from '../components/layout/Section';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const GalleryPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = (searchParams.get('filter') as PortfolioCategory | 'all') || 'all';

    const handleFilterChange = useCallback((newFilter: PortfolioCategory | 'all') => {
        if (newFilter === 'all') {
            setSearchParams({});
        } else {
            setSearchParams({ filter: newFilter });
        }
    }, [setSearchParams]);
    const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

    const filters: { id: PortfolioCategory | 'all'; label: string }[] = [
        { id: 'all', label: 'Alle Projekte' },
        { id: 'privat', label: 'Privatgärten' },
        { id: 'gewerbe', label: 'Gewerbe' },
        { id: 'oeffentlich', label: 'Öffentlich' },
    ];

    const filteredItems = filter === 'all'
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

    return (
        <main className="bg-neutral-white min-h-screen">
            <SEO
                title="Portfolio & Referenzen"
                description="Entdecken Sie unsere erfolgreich umgesetzten Projekte. Inspirationen für Gartendesign, Landschaftsbau und exklusive Terrassengestaltung."
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Portfolio', url: '/gallery' }
                ]}
            />

            <Lightbox
                images={lightboxItem?.images || (lightboxItem?.imageUrl ? [lightboxItem.imageUrl] : [])}
                isOpen={!!lightboxItem}
                onClose={() => setLightboxItem(null)}
            />

            <Breadcrumbs items={[{ label: 'Portfolio' }]} />

            <PageHero
                title="Unsere Projekte"
                subtitle="Portfolio"
                description="Eine Auswahl unserer realisierten Visionen. Jeder Garten erzählt eine eigene Geschichte."
                backgroundImage="/images/final/hero-home.webp"
                centered={true}
            />

            <Section bgVariant="white">
                {/* Filter Tabs */}
                <Reveal animation="fade-in">
                    <div className="flex flex-wrap justify-center gap-4 mb-space-16">
                        {filters.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => handleFilterChange(f.id)}
                                className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-[var(--default-transition-duration)] ${filter === f.id
                                    ? 'bg-accent-base text-neutral-white shadow-elevation-2 transform scale-105'
                                    : 'bg-neutral-white text-neutral-midgray border border-neutral-lightgray hover:border-accent-base hover:text-accent-base'
                                    }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Masonry Grid Simulation (using Columns) */}
                <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-space-8 space-y-space-8">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                                key={item.id}
                                onClick={() => setLightboxItem(item)}
                                className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-[var(--radius-lg)] bg-neutral-white shadow-elevation-1 hover:shadow-elevation-3 transition-shadow duration-[var(--motion-standard-duration)] hover:-translate-y-[8px] transform-gpu border border-neutral-lightgray/50"
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-[var(--motion-standard-duration)] ease-[var(--motion-standard-easing)] group-hover:scale-105"
                                    />
                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-primary-base/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--motion-standard-duration)] flex items-center justify-center">
                                        <span className="bg-neutral-white/90 backdrop-blur-sm text-accent-base px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-[var(--motion-standard-duration)]">
                                            Galerie öffnen
                                        </span>
                                    </div>
                                </div>

                                {/* Content Panel */}
                                <div className="p-space-8 border-t border-neutral-lightgray relative bg-neutral-white z-10">
                                    <span className="block text-accent-base text-[10px] font-bold uppercase tracking-widest mb-3">
                                        {item.category === 'privat' && 'Privat Residence'}
                                        {item.category === 'gewerbe' && 'Commercial Space'}
                                        {item.category === 'oeffentlich' && 'Public Space'}
                                    </span>
                                    <h3 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-3 group-hover:text-accent-base transition-colors duration-[var(--motion-micro-duration)]">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-3 mb-space-6">
                                        <span className="w-8 h-[1px] bg-accent-base/60"></span>
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-midgray font-medium">Signature Execution</span>
                                    </div>
                                    <div className="w-full h-px bg-neutral-lightgray mb-space-6 group-hover:bg-accent-base/30 transition-colors duration-[var(--motion-micro-duration)]"></div>
                                    <span className="inline-flex items-center text-xs font-bold text-neutral-darkgray uppercase tracking-widest group-hover:text-accent-base transition-colors duration-[var(--motion-micro-duration)]">
                                        Projekt ansehen <ArrowRight className="ml-2 w-3 h-3" />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>



                {/* Final CTA */}
                <Reveal animation="scale-in">
                    <div className="mt-space-24 text-center bg-primary-base rounded-[var(--radius-xl)] p-space-16 relative overflow-hidden shadow-elevation-3">
                        <div className="absolute top-0 right-0 w-full h-full bg-neutral-white opacity-[0.03] mix-blend-overlay"></div>
                        <h2 className="text-h2 font-sans font-bold text-neutral-white mb-space-8 tracking-h2 relative z-10 text-balance">Lassen Sie uns Ihr Projekt starten</h2>
                        <Button variant="gold" icon={ArrowRight} onClick={() => navigate('/contact')} className="relative z-10">
                            Kostenloses Angebot
                        </Button>
                    </div>
                </Reveal>
            </Section>
        </main>
    );
};
