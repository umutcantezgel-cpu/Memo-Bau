import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { getConsentState } from '../../services/userProfile.service';

const PopupWidget = lazy(() => import('react-calendly').then(mod => ({ default: mod.PopupWidget })));

const LEGAL_PATHS = ['/impressum', '/datenschutz', '/agb', '/cookie-richtlinie', '/barrierefreiheit'];

export const GlobalCalendlyWidget: React.FC = () => {
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
    const [hasConsent, setHasConsent] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);
    const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/mehmet68-tezgel/30min';

    useEffect(() => {
        const handleInteraction = () => setShouldLoad(true);
        window.addEventListener('scroll', handleInteraction, { once: true, passive: true });
        window.addEventListener('mousemove', handleInteraction, { once: true, passive: true });
        window.addEventListener('touchstart', handleInteraction, { once: true, passive: true });
        const timer = setTimeout(() => setShouldLoad(true), 3500);
        if (typeof window !== 'undefined') {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setRootElement(document.getElementById('root'));
        }

        // Check consent on mount
        const checkConsent = () => {
            const consent = getConsentState();
            setHasConsent(consent?.marketing === true);
        };

        checkConsent();

        // Listen for consent changes
        const handleConsentChange = () => checkConsent();
        window.addEventListener('consent_updated', handleConsentChange);
        window.addEventListener('storage', (e: StorageEvent) => {
            if (e.key === 'memobau_consent' || e.key === 'cookie-consent') {
                checkConsent();
            }
        });

        return () => {
            window.removeEventListener('consent_updated', handleConsentChange);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            clearTimeout(timer);
        };
    }, []);

    const location = useLocation();
    const isLegalPage = LEGAL_PATHS.some(p => location.pathname.startsWith(p));

    // DSGVO: Only render if marketing consent is granted and loaded
    if (!rootElement || isLegalPage || !hasConsent || !shouldLoad) return null;

    return (
        <div className="hidden md:block" style={{ zIndex: 40 }}>
            <Suspense fallback={null}>
                <PopupWidget
                    url={calendlyUrl}
                    rootElement={rootElement}
                    text="Kostenlose Beratung buchen"
                    textColor="#ffffff"
                    color="#b38b59"
                />
            </Suspense>
        </div>
    );
};
