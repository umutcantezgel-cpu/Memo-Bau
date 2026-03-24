import React from 'react';
import { CityConfig } from '../../core/cityConfig.types';
import { Reveal } from '../common/Reveal';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

interface PremiumContactBannerProps {
    config: CityConfig;
    highlightCTA?: boolean;
}

export const PremiumContactBanner: React.FC<PremiumContactBannerProps> = ({ config, highlightCTA = false }) => {
    const accentColor = `oklch(var(--color-accent-base-l) var(--color-accent-base-c) calc(var(--color-accent-base-h) + ${config.accentShift}deg))`;

    return (
        <section className="py-space-24 relative overflow-hidden bg-neutral-darkgray text-neutral-white">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: accentColor }} />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: accentColor }} />
            </div>

            <div className="container mx-auto px-space-6 relative z-10 text-center">
                <Reveal animation="fade-in-up">
                    <h2 className="text-h2 font-sans font-bold tracking-h2 mb-space-6 max-w-3xl mx-auto leading-tight">
                        Bereit für Exzellenz in {config.name}?
                    </h2>
                    <p className="text-lg text-neutral-lightgray max-w-2xl mx-auto mb-space-12 leading-relaxed font-light">
                        Unsere Kapazitäten für exklusive Projekte in {config.region} sind begrenzt. Sichern Sie sich jetzt unkompliziert Ihren kostenlosen Erstberatungstermin direkt auf Ihrem Grundstück.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-space-4">
                        <Link to="/kontakt">
                            <Button
                                variant="primary"
                                className={highlightCTA ? 'scale-110 shadow-[0_0_30px_rgba(255,255,255,0.2)]' : ''}
                            >
                                {config.ctaPrimary}
                            </Button>
                        </Link>
                        <Link to="/galerie">
                            <Button
                                variant="outline"
                                className="border-neutral-midgray text-neutral-white hover:bg-neutral-white hover:text-neutral-darkgray"
                            >
                                {config.ctaSecondary}
                            </Button>
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
