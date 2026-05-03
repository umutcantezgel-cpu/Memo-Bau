import React from 'react';
import { CityConfig } from '../../core/cityConfig.types';
import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';

interface ValuePropositionSectionProps {
    config: CityConfig;
    variant?: 'elegant' | 'stats-heavy' | 'minimal';
}

export const ValuePropositionSection: React.FC<ValuePropositionSectionProps> = ({ config, variant = 'elegant' }) => {
    const accentColor = `oklch(var(--color-accent-base-l) var(--color-accent-base-c) calc(var(--color-accent-base-h) + ${config.accentShift}deg))`;

    const stats = [
        { label: 'Anfahrt', value: `${config.fahrzeitMin} Min` },
        { label: 'Kundenzufriedenheit', value: '100%' },
        { label: 'Erfahrung', value: '25 Jahre' }
    ];

    if (variant === 'stats-heavy') {
        return (
            <Section bgVariant="offwhite" className="py-8 md:py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-space-8 max-w-5xl mx-auto">
                    {stats.map((stat, idx) => (
                        <Reveal key={idx} animation="fade-in-up" delay={idx * 100}>
                            <div className="text-center">
                                <span className="block text-4xl md:text-5xl font-sans font-bold mb-2 tracking-tighter" style={{ color: accentColor }}>
                                    {stat.value}
                                </span>
                                <span className="text-sm font-bold uppercase tracking-widest text-neutral-midgray">{stat.label}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>
        );
    }

    return (
        <Section bgVariant="offwhite">
            <div className="max-w-4xl mx-auto text-center">
                <Reveal animation="fade-in-up">
                    <h2 className="text-h2 font-sans font-bold text-neutral-darkgray mb-space-8">
                        Warum Memo-BauT in {config.name}?
                    </h2>
                    <p className="text-neutral-midgray text-lg leading-relaxed mb-space-12 max-w-3xl mx-auto">
                        Wir vereinen jahrzehntelange handwerkliche Perfektion mit modernster Gartenarchitektur.
                        Unsere tiefe Verwurzelung in der Region {config.region} ermöglicht unseren Kunden höchste
                        Verlässlichkeit, kurze Wege ({config.fahrzeitMin} Minuten) und ein tiefes Verständnis für die baulichen Gegebenheiten vor Ort.
                    </p>
                </Reveal>
            </div>
        </Section>
    );
};
