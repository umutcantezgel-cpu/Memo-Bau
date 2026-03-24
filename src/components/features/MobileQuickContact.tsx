import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, X, ArrowRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { COMPANY_INFO } from '../../core/constants';

import { useNavigate, useLocation } from 'react-router-dom';

const LEGAL_PATHS = ['/impressum', '/datenschutz', '/agb', '/cookie-richtlinie', '/barrierefreiheit'];

export const MobileQuickContact: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isLegalPage = LEGAL_PATHS.some(p => location.pathname.startsWith(p));

    // Only show FAB after scrolling down a bit
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleConsultationClick = () => {
        setIsOpen(false);
        navigate('/contact');
    };

    // Hide on legal pages where TOC & scroll-to-top buttons occupy the same corner
    if (isLegalPage) return null;

    return (
        <>
            {/* Floating Action Button (Mobile Only) */}
            <div
                className={twMerge(
                    "fixed bottom-6 right-6 z-[45] md:hidden transition-all duration-500 ease-[var(--animate-spring-bouncy)]",
                    isVisible && !isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-50 pointer-events-none"
                )}
            >
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 bg-accent-base text-white rounded-full shadow-elevation-4 flex items-center justify-center animate-float hover:scale-105 active:scale-95 transition-transform"
                    aria-label="Schnellkontakt öffnen"
                >
                    <MessageSquare className="w-6 h-6" />
                </button>
            </div>

            {/* Backdrop */}
            <div
                className={twMerge(
                    "fixed inset-0 bg-neutral-black/40 backdrop-blur-sm z-[50] md:hidden transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />

            {/* Bottom Sheet */}
            <div
                className={twMerge(
                    "fixed bottom-0 left-0 w-full bg-neutral-white rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-[51] md:hidden transition-transform duration-500 ease-[var(--animate-spring-bouncy)] px-6 pb-10 pt-4 flex flex-col",
                    isOpen ? "translate-y-0" : "translate-y-full"
                )}
            >
                {/* Drag Handle */}
                <div className="w-12 h-1.5 bg-neutral-lightgray rounded-full mx-auto mb-6" />

                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-h4 font-sans font-bold text-neutral-darkgray">Wie können wir helfen?</h3>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-neutral-darkgray/80 bg-neutral-offwhite rounded-full active:scale-95 transition-transform"
                        aria-label="Schließen"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <p className="text-body text-neutral-darkgray/80 mb-8">
                    Wählen Sie Ihren bevorzugten Weg, um mit uns in Kontakt zu treten.
                </p>

                <div className="space-y-4">
                    <a
                        href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                        className="flex items-center p-4 bg-neutral-offwhite rounded-[var(--radius-lg)] border border-neutral-lightgray active:border-primary-base active:bg-primary-bg transition-colors"
                    >
                        <div className="w-12 h-12 bg-neutral-white rounded-[var(--radius-md)] flex items-center justify-center text-primary-base shadow-sm mr-4">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-neutral-darkgray">Jetzt Anrufen</p>
                            <p className="text-sm text-neutral-darkgray/80">{COMPANY_INFO.phone}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-neutral-darkgray/60 ml-auto" />
                    </a>

                    <button
                        onClick={handleConsultationClick}
                        className="w-full flex items-center p-4 bg-accent-base text-white rounded-[var(--radius-lg)] active:scale-[0.98] transition-transform shadow-elevation-2"
                    >
                        <div className="w-12 h-12 bg-white/20 rounded-[var(--radius-md)] flex items-center justify-center mr-4">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold">Projekt anfragen</p>
                            <p className="text-sm text-white/80">Kostenlose Ersteinschätzung</p>
                        </div>
                        <ArrowRight className="w-5 h-5 opacity-80 ml-auto" />
                    </button>
                </div>
            </div>
        </>
    );
};
