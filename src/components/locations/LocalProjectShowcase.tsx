import React from 'react';
import { CityConfig } from '../../core/cityConfig.types';
import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';
import { Button } from '../common/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface LocalProjectShowcaseProps {
    config: CityConfig;
    limit?: number;
    layout?: 'grid' | 'masonry';
}

export const LocalProjectShowcase: React.FC<LocalProjectShowcaseProps> = ({ config, limit = 4, layout = 'grid' }) => {
    // In einer echten DB würden wir hier Projekte filtern nach config.slug
    // Für das Frontend mocken wir high-end Landschaftsbau-Bilder
    const projects = [
        { id: 1, title: 'Naturstein Terrassierung', category: 'Hanggarten', img: '/images/final/service-landscaping.webp' },
        { id: 2, title: 'Großformat Keramik', category: 'Lounge Bereich', img: '/images/final/service-paving.webp' },
        { id: 3, title: 'Smarte Wasseranlage', category: 'Pool & Teich', img: '/images/final/service-water.webp' },
        { id: 4, title: 'Edelpflaster Auffahrt', category: 'Villen-Zufahrt', img: '/images/final/services-hero.webp' }
    ].slice(0, limit);

    const accentColor = `oklch(var(--color-accent-base-l) var(--color-accent-base-c) calc(var(--color-accent-base-h) + ${config.accentShift}deg))`;

    return (
        <Section bgVariant="white">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-12 gap-space-6">
                <Reveal animation="fade-in">
                    <div className="max-w-2xl">
                        <span
                            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-space-4 border"
                            style={{ borderColor: accentColor, color: accentColor }}
                        >
                            {config.projektAnzahl} Projekt-Referenzen
                        </span>
                        <h2 className="text-h2 font-sans font-bold text-neutral-darkgray tracking-tight">
                            Erschaffen in {config.name}
                        </h2>
                    </div>
                </Reveal>

                <Reveal animation="fade-in">
                    <Link to="/galerie">
                        <Button variant="outline" className="border-neutral-midgray text-neutral-darkgray hover:border-accent-base">
                            Alle {config.region} Projekte <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </Reveal>
            </div>

            <div className={`grid grid-cols-1 ${layout === 'masonry' ? 'md:grid-cols-2 gap-space-8' : 'md:grid-cols-2 lg:grid-cols-4 gap-space-6'}`}>
                {projects.map((project, idx) => (
                    <Reveal key={project.id} animation="fade-in-up" delay={idx * 100}>
                        <div className="group cursor-pointer">
                            <div className={`relative overflow-hidden rounded-[var(--radius-lg)] mb-space-4 ${layout === 'masonry' && idx % 2 !== 0 ? 'aspect-[4/5]' : 'aspect-square'}`}>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-neutral-darkgray/0 group-hover:bg-neutral-darkgray/20 transition-colors duration-300" />

                                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="bg-neutral-white/95 backdrop-blur-sm p-4 rounded-lg shadow-elevation-2 flex items-center justify-between">
                                        <span className="font-bold text-neutral-darkgray">{project.title}</span>
                                        <ArrowRight className="w-5 h-5" style={{ color: accentColor }} />
                                    </div>
                                </div>
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-neutral-midgray">{project.category}</span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};
