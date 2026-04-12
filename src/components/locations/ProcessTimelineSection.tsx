import React from 'react';
import { CityConfig } from '../../core/cityConfig.types';
import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';

interface ProcessTimelineSectionProps {
    config: CityConfig;
}

export const ProcessTimelineSection: React.FC<ProcessTimelineSectionProps> = ({ config }) => {
    const accentColor = `oklch(var(--color-accent-base-l) var(--color-accent-base-c) calc(var(--color-accent-base-h) + ${config.accentShift}deg))`;

    const steps = [
        {
            num: '01',
            title: `Vor-Ort-Besichtigung in ${config.name}`,
            desc: `Kostenlose Analyse der Grundstücks-Topografie & Machbarkeitsprüfung direkt in ${config.region}.`
        },
        {
            num: '02',
            title: '3D-Planung & Bemusterung',
            desc: 'Visualisierung Ihres Premium-Gartens und Auswahl exklusiver Materialien in unserem Showroom.'
        },
        {
            num: '03',
            title: 'Meisterhafte Umsetzung',
            desc: `Termingetreue Bauausführung durch unser erfahrenes Landschaftsbau-Team bei Ihnen in ${config.name}.`
        }
    ];

    return (
        <Section bgVariant="offwhite">
            <div className="text-center max-w-3xl mx-auto mb-space-16">
                <Reveal animation="fade-in">
                    <h2 className="text-h2 font-sans font-bold text-neutral-darkgray mb-space-4">Lückenlose Umsetzung</h2>
                    <p className="text-neutral-midgray text-lg">
                        Transparenz, Termintreue und absolute Präzision von der ersten Skizze bis zur schlüsselfertigen Übergabe.
                    </p>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-12 relative max-w-5xl mx-auto">
                {/* Connecting Line (Desktop only) */}
                <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-[2px] bg-neutral-lightgray z-0" />

                {steps.map((step, idx) => (
                    <Reveal key={idx} animation="fade-in-up" delay={idx * 150}>
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center bg-neutral-white shadow-elevation-2 font-bold text-xl mb-space-6 border-2"
                                style={{ borderColor: idx === 1 ? accentColor : 'transparent', color: accentColor }}
                            >
                                {step.num}
                            </div>
                            <h3 className="font-sans font-bold text-xl text-neutral-darkgray mb-space-3">{step.title}</h3>
                            <p className="text-neutral-midgray leading-relaxed">{step.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};
