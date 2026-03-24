import React from 'react';
import { CityConfig } from '../../core/cityConfig.types';
import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';

interface LocalStorySectionProps {
    config: CityConfig;
    reversed?: boolean;
    compact?: boolean;
    highlightLocalReferences?: boolean;
}

export const LocalStorySection: React.FC<LocalStorySectionProps> = ({
    config,
    reversed = false,
    compact = false,
    highlightLocalReferences = false
}) => {
    // Dynamic Accent
    const accentColor = `oklch(var(--color-accent-base-l) var(--color-accent-base-c) calc(var(--color-accent-base-h) + ${config.accentShift}deg))`;

    return (
        <Section bgVariant="white" className={compact ? 'py-8 md:py-12' : ''}>
            <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-space-12 lg:gap-space-20`}>

                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                    <Reveal animation="fade-in">
                        <div className="relative aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden shadow-elevation-2">
                            {/* Fallback image, would ideally use specific city imagery like config.slug */}
                            <img
                                src={`/images/final/service-landscaping.webp`}
                                alt={`Landschaftsbau in ${config.name}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-neutral-darkgray/10 mix-blend-multiply" />

                            {/* Accent Decoration depending on imageStyle */}
                            {config.imageStyle !== 'fullbleed' && (
                                <div
                                    className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-[12px] border-neutral-white z-10"
                                    style={{ backgroundColor: accentColor, opacity: 0.1 }}
                                />
                            )}
                        </div>
                    </Reveal>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                    <Reveal animation="fade-in-up">
                        <span
                            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-space-6 border"
                            style={{ borderColor: accentColor, color: accentColor }}
                        >
                            Verwurzelt in {config.region}
                        </span>
                        <h2 className="text-h2 font-sans font-bold text-neutral-darkgray mb-space-6 tracking-h2 leading-tight">
                            Landschaftsarchitektur für <br className="hidden md:block" />
                            <span className="italic font-light">{config.name}</span>
                        </h2>

                        <div className="prose prose-lg text-neutral-midgray">
                            <p className="font-medium text-neutral-darkgray text-lg leading-relaxed mb-space-4">
                                {config.story}
                            </p>
                            {!compact && (
                                <>
                                    <p className="mb-space-4 leading-relaxed">
                                        <strong>Terrain & Struktur:</strong> {config.topografie} {config.wohnstruktur}
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong>Stilistik:</strong> {config.gartenStil}
                                    </p>
                                </>
                            )}
                        </div>

                        {/* Local References highlighting */}
                        {highlightLocalReferences && config.lokalerBezug.length > 0 && (
                            <div className="mt-space-8 py-space-6 border-t border-b border-neutral-lightgray">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-darkgray mb-space-4">Lokale Meilensteine in {config.name}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {config.lokalerBezug.map((ort, idx) => (
                                        <span key={idx} className="bg-neutral-offwhite text-neutral-midgray px-3 py-1.5 rounded-md text-sm">
                                            {ort}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Reveal>
                </div>
            </div>
        </Section>
    );
};
