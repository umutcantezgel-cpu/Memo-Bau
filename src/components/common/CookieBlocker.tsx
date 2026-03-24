import React, { useState, useEffect } from 'react';
import { getConsentState, setConsentState } from '../../services/userProfile.service';
import { Button } from './Button';
import { ShieldAlert } from 'lucide-react';

interface CookieBlockerProps {
    children: React.ReactNode;
    type: 'marketing' | 'analytics';
    title: string;
    description: string;
}

export const CookieBlocker: React.FC<CookieBlockerProps> = ({ children, type, title, description }) => {
    const [hasConsent, setHasConsent] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
        const checkConsent = () => {
            const consent = getConsentState();
            if (consent && consent[type]) {
                setHasConsent(true);
            } else {
                setHasConsent(false);
            }
        };

        checkConsent();

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'memobau_consent' || e.key === 'sg-consent' || e.key === 'cookie-consent') {
                checkConsent();
            }
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('consent_updated', checkConsent);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('consent_updated', checkConsent);
        };
    }, [type]);

    const handleAccept = () => {
        const currentConsent = getConsentState() || { analytics: false, marketing: false, personalization: false, timestamp: Date.now() };
        const newConsent = { ...currentConsent, [type]: true, timestamp: Date.now() };
        setConsentState(newConsent);
        localStorage.setItem('cookie-consent', 'accepted');
        setHasConsent(true);
        window.dispatchEvent(new Event('consent_updated'));
        window.dispatchEvent(new StorageEvent('storage', { key: 'memobau_consent' }));
    };

    if (!isMounted) return null; // Prevent hydration errors
    if (hasConsent) return <>{children}</>;

    return (
        <div className="w-full h-full min-h-[300px] bg-neutral-offwhite border border-neutral-lightgray rounded-[var(--radius-lg)] flex flex-col items-center justify-center p-8 text-center shadow-inner">
            <ShieldAlert className="w-12 h-12 text-neutral-midgray mb-4" />
            <h4 className="text-lg font-bold text-neutral-darkgray mb-2">{title}</h4>
            <p className="text-sm text-neutral-midgray mb-6 max-w-sm">
                {description}
            </p>
            <Button onClick={handleAccept} variant="primary" className="text-sm font-semibold">
                Inhalte laden & Cookies akzeptieren
            </Button>
            <p className="text-xs text-neutral-midgray mt-4 max-w-xs leading-relaxed">
                Ihre Einwilligung können Sie jederzeit in unserer <a href="/datenschutz" className="text-accent-base hover:text-primary-base underline underline-offset-2 transition-colors duration-[var(--default-transition-duration)]">Datenschutzerklärung</a> widerrufen.
            </p>
        </div>
    );
};
