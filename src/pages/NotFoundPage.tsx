import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { SEO } from '../components/common/SEO';
import { Section } from '../components/layout/Section';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
    return (
        <>
            <SEO
                title="Seite nicht gefunden"
                description="Die angeforderte Seite konnte leider nicht gefunden werden. Kehren Sie zur Startseite zurück oder kontaktieren Sie uns."
                noindex
            />
            <Section bgVariant="white" className="py-space-24 lg:py-space-32">
                <div className="max-w-2xl mx-auto text-center">
                    <span className="text-[8rem] md:text-[12rem] font-sans font-bold leading-none text-neutral-lightgray select-none" aria-hidden="true">
                        404
                    </span>
                    <h1 className="text-h2 font-sans font-bold text-neutral-darkgray mt-space-4 mb-space-6">
                        Seite nicht gefunden
                    </h1>
                    <p className="text-lg text-neutral-midgray leading-relaxed mb-space-12">
                        Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
                        Bitte überprüfen Sie die URL oder kehren Sie zur Startseite zurück.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-space-4">
                        <Link to="/">
                            <Button variant="primary" icon={Home}>
                                Zur Startseite
                            </Button>
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-midgray hover:text-accent-base transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Zurück zur vorherigen Seite
                        </button>
                    </div>
                </div>
            </Section>
        </>
    );
};
