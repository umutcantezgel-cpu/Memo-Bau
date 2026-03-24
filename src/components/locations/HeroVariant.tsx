import React from 'react';
import { motion } from 'framer-motion';
import { CityConfig } from '../../core/cityConfig.types';
import { PageHero } from '../common/PageHero';
import { MapPin } from 'lucide-react';

interface HeroVariantProps {
    config: CityConfig;
    variant: 1 | 2 | 3 | 4 | 5 | 6;
}

export const HeroVariant: React.FC<HeroVariantProps> = ({ config, variant }) => {
    // Farb-Logik für Accent-Shift anwenden
    const customAccentColor = `oklch(var(--color-accent-base-l) var(--color-accent-base-c) calc(var(--color-accent-base-h) + ${config.accentShift}deg))`;

    // Je nach MotionProfile nutzen wir unterschiedliche Animationen in der internen Logik
    // Für die schnelle Demo nutzen wir aktuell die existierende PageHero-Logik (erweitert)
    // Perspektivisch können hier z.B. 6 komplett unterschiedliche Return-Trees stehen.

    switch (variant) {
        case 1: // Klassisch Elegant (z.B. Werdorf, Braunfels)
            return (
                <div style={{ '--local-accent': customAccentColor } as React.CSSProperties}>
                    <PageHero
                        title={config.headline}
                        subtitle={`Standort ${config.name}`}
                        description={config.subheadline}
                        backgroundImage={`/images/final/service-landscaping.webp`} // Hier perspektivisch lokales Bild
                        centered={true}
                    />
                </div>
            );

        case 6: // Ultra-Premium / Skyline (z.B. Frankfurt)
            return (
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-darkgray text-neutral-white">
                    <div className="absolute inset-0 z-0">
                        {/* Fallback Image. Ideally Frankfurt-specific skyline + garden imagery */}
                        <img src="/images/final/services-hero.webp" alt={config.name} className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-darkgray via-neutral-darkgray/80 to-transparent" />
                    </div>

                    <div className="relative z-10 container mx-auto px-space-6 md:px-space-8 lg:px-space-12 text-center mt-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-space-8 border"
                                style={{ borderColor: customAccentColor, color: customAccentColor }}
                            >
                                <MapPin className="w-4 h-4" />
                                Premium Standort {config.name}
                            </span>
                            <h1 className="text-h1-mobile md:text-h1 font-sans font-bold tracking-h1 mb-space-6 text-balance leading-tight">
                                {config.headline}
                            </h1>
                            <p className="text-lg md:text-xl text-neutral-lightgray max-w-3xl mx-auto leading-relaxed mb-space-12 font-light">
                                {config.subheadline}
                            </p>
                        </motion.div>
                    </div>
                </section>
            );

        default: // Fallback für alle anderen (nutzt aktuell PageHero)
            return (
                <PageHero
                    title={config.headline}
                    subtitle={`Premium Gartenbau in ${config.name}`}
                    description={config.subheadline}
                    backgroundImage={`/images/final/service-landscaping.webp`}
                    centered={false}
                />
            );
    }
};
