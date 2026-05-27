import React from 'react';
import { SEO } from '../components/common/SEO';
import { PenTool } from 'lucide-react';
import { COMPANY_INFO } from '../core/constants';

export const MaintenancePage: React.FC = () => {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-white relative overflow-hidden font-sans">
            <SEO
                title="Wartungsarbeiten | Memo BauT"
                description="Unsere Webseite wird derzeit überarbeitet. Wir sind bald wieder für Sie da."
                noindex={true}
            />

            {/* Background Elements */}
            <div className="absolute inset-0 bg-noise pointer-events-none z-[1] opacity-50" aria-hidden="true"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-base/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-base/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="relative z-10 text-center max-w-2xl px-6">
                <div className="w-20 h-20 bg-neutral-offwhite rounded-[var(--radius-xl)] flex items-center justify-center mx-auto mb-8 shadow-elevation-3 border border-neutral-lightgray">
                    <PenTool className="w-10 h-10 text-accent-base" />
                </div>

                <h1 className="text-4xl md:text-5xl font-sans font-bold text-neutral-darkgray mb-6 tracking-tight leading-tight">
                    Premium Gärten <br className="hidden sm:block" />im digitalen Aufbau.
                </h1>

                <div className="flex items-center justify-center gap-3 mb-space-8">
                    <span className="w-12 h-[1px] bg-accent-base/60"></span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-midgray font-medium">Signature Execution</span>
                    <span className="w-12 h-[1px] bg-accent-base/60"></span>
                </div>

                <p className="text-lg text-neutral-midgray mb-10 leading-relaxed font-normal text-balance">
                    Wir überarbeiten aktuell unseren Auftritt, um Ihnen unsere Garten  und Landschaftsbau Projekte noch exklusiver präsentieren zu können.
                    <br /><br />
                    In der Zwischenzeit sind wir natürlich weiterhin persönlich für Ihr Projekt erreichbar.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href={`mailto:${COMPANY_INFO.email}`} className="w-full sm:w-auto px-8 py-4 bg-primary-base text-neutral-white font-semibold rounded-[var(--radius-md)] hover:bg-neutral-darkgray transition-colors duration-[var(--motion-smooth-duration)] shadow-elevation-2">
                        {COMPANY_INFO.email}
                    </a>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/s+/g, '')}`} className="w-full sm:w-auto px-8 py-4 bg-neutral-white text-primary-base border border-neutral-lightgray font-semibold rounded-[var(--radius-md)] hover:bg-neutral-offwhite transition-colors duration-[var(--motion-smooth-duration)]">
                        {COMPANY_INFO.phone}
                    </a>
                </div>

                <div className="mt-16 sm:mt-24 space-y-2">
                    <p className="font-sans font-bold text-lg text-neutral-darkgray">Memo BauT</p>
                    <p className="text-xs text-neutral-midgray/60 uppercase tracking-widest font-semibold">
                        &copy; {new Date().getFullYear()} Alle Rechte vorbehalten.
                    </p>
                </div>
            </div>
        </main>
    );
};
