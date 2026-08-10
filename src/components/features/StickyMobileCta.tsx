// src/components/features/StickyMobileCta.tsx
import React, { useEffect, useState } from 'react';
import { Phone, Calendar, X } from 'lucide-react';
import { COMPANY_INFO } from '../../core/constants';
import { useConversionTracking } from '../../hooks/useTrackingHooks';

export const StickyMobileCta: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const track = useConversionTracking();

    useEffect(() => {
        // Only valid on mobile size
        const handleScroll = () => {
            if (isDismissed || window.innerWidth > 768) return;
            
            // Show CTA when scrolling past 40vh (approx. 50% depending on page length)
            if (window.scrollY > window.innerHeight * 0.4) {
                if (!isVisible) setIsVisible(true);
            } else {
                if (isVisible) setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [isVisible, isDismissed]);

    if (isDismissed) return null;

    return (
        <div 
            className={`fixed bottom-0 left-0 right-0 z-[var(--z-fixed)] bg-neutral-white border-t border-neutral-lightgray shadow-[0_-4px_24px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-[var(--ease-spring-snappy)] md:hidden p-4 pb-safe flex gap-3 ${
                isVisible ? 'translate-y-0' : 'translate-y-[150%]'
            }`}
        >
            <button 
                onClick={() => setIsDismissed(true)}
                className="absolute -top-3 -right-2 bg-neutral-white border border-neutral-lightgray text-neutral-midgray rounded-full p-1 shadow-elevation-1"
                aria-label="Leiste ausblenden"
            >
                <X className="w-3.5 h-3.5" />
            </button>
            <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} 
                onClick={() => track('cta_click', { label: 'mobile_sticky_phone' })}
                className="flex-1 py-3 px-4 rounded-[var(--radius-md)] border-2 border-neutral-lightgray text-neutral-darkgray font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-neutral-offwhite transition-colors"
                aria-label="Jetzt anrufen"
            >
                <Phone className="w-4 h-4 text-accent-base" /> Anrufen
            </a>
            <a 
                href="/kontakt" 
                onClick={() => track('cta_click', { label: 'mobile_sticky_contact' })}
                className="flex-1 py-3 px-4 rounded-[var(--radius-md)] bg-primary-base text-neutral-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-elevation-1 active:scale-95 transition-transform"
            >
                <Calendar className="w-4 h-4" /> Anfragen
            </a>
        </div>
    );
};
