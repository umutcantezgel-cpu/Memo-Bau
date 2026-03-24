import React from 'react';
import { CityConfig } from '../../core/cityConfig.types';
import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';
import { CheckCircle2 } from 'lucide-react';

interface FeatureGridSectionProps {
    config: CityConfig;
    compact?: boolean;
    highlightFirst?: boolean;
}

export const FeatureGridSection: React.FC<FeatureGridSectionProps> = ({ config, compact = false, highlightFirst = false }) => {
    const accentColor = `oklch(var(--color-accent-base-l) var(--color-accent-base-c) calc(var(--color-accent-base-h) + ${config.accentShift}deg))`;

    return (
        <Section bgVariant="offwhite" className={compact ? 'py-8 md:py-12' : ''}>
            <div className="text-center max-w-3xl mx-auto mb-space-12">
                <Reveal animation="fade-in-up">
                    <h2 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-4">
                        Häufige Anforderungen in {config.name}
                    </h2>
                    <p className="text-neutral-midgray leading-relaxed">
                        Basierend auf der typischen {config.wohnstruktur.toLowerCase()} und der Topografie in {config.name} realisieren wir besonders häufig folgende Premium-Leistungen:
                    </p>
                </Reveal>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-space-6 ${compact ? 'max-w-5xl mx-auto' : ''}`}>
                {config.fokusLeistungen.map((leistung, idx) => {
                    const isHighlighted = highlightFirst && idx === 0;

                    return (
                        <Reveal key={idx} animation="fade-in-up" delay={(idx * 100) as any}>
                            <div
                                className={`h-full p-space-8 rounded-[var(--radius-lg)] transition-all duration-300 ${isHighlighted
                                    ? 'bg-neutral-darkgray text-neutral-white shadow-elevation-3 scale-105 z-10 relative'
                                    : 'bg-neutral-white border border-neutral-lightgray hover:border-accent-base hover:shadow-elevation-2'
                                    }`}
                                style={isHighlighted ? { borderTop: `4px solid ${accentColor}` } : {}}
                            >
                                <div className="flex items-start gap-4">
                                    <CheckCircle2
                                        className="w-6 h-6 flex-shrink-0 mt-1"
                                        style={{ color: isHighlighted ? accentColor : accentColor }}
                                    />
                                    <div>
                                        <h3 className={`font-sans font-bold text-lg mb-2 ${isHighlighted ? 'text-neutral-white' : 'text-neutral-darkgray'}`}>
                                            {leistung}
                                        </h3>
                                        <p className={isHighlighted ? 'text-neutral-lightgray/80 text-sm leading-relaxed' : 'text-neutral-midgray text-sm leading-relaxed'}>
                                            Perfekt abgestimmt auf die klimatischen und architektonischen Bedingungen in {config.region}.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </Section>
    );
};
