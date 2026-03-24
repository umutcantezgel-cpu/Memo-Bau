import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { setConsentState, getConsentState } from '../../services/userProfile.service';

export const CookieConsent: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check for existing consent state
        const consent = getConsentState();
        if (!consent) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsMounted(true);
            // Allow DOM to paint before triggering transition
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsVisible(true));
            });
        }

        const handleShowSettings = () => {

            setIsMounted(true);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsVisible(true));
            });
        };
        window.addEventListener('show_cookie_settings', handleShowSettings);

        return () => {
            window.removeEventListener('show_cookie_settings', handleShowSettings);
        };
    }, []);

    const hideBanner = () => {
        setIsVisible(false);
        // Wait for exit animation to complete before unmounting (400ms emphasis)
        setTimeout(() => setIsMounted(false), 400);
    };

    const handleAccept = () => {
        // Store consent with all permissions enabled
        setConsentState({
            analytics: true,
            marketing: true,
            personalization: true,
            timestamp: Date.now(),
        });

        // Also set legacy key for backwards compatibility
        localStorage.setItem('cookie-consent', 'accepted');
        hideBanner();

        // Trigger storage event for other components
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'memobau_consent',
        }));
        window.dispatchEvent(new Event('consent_updated'));
    };

    const handleDecline = () => {
        // Store consent with only essential permissions
        setConsentState({
            analytics: false,
            marketing: false,
            personalization: false,
            timestamp: Date.now(),
        });

        // Also set legacy key for backwards compatibility
        localStorage.setItem('cookie-consent', 'declined');
        hideBanner();
        window.dispatchEvent(new Event('consent_updated'));
    };

    const handleCustomize = () => {
        // For now, treat customize as decline (can be expanded later)
        handleDecline();
    };

    if (!isMounted) return null;

    return (
        <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-neutral-white/95 backdrop-blur-md border-t border-neutral-lightgray shadow-elevation-4 transition-[transform,opacity] duration-[var(--motion-emphasis-duration)] ease-[var(--motion-emphasis-easing)] will-change-transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-neutral-darkgray text-center md:text-left">
                    <p>
                        Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                        Dazu gehören Analyse-Cookies und personalisierte Inhalte.
                        <Link to="/datenschutz" className="text-accent hover:text-accent-hover ml-1 font-medium underline">
                            Datenschutz
                        </Link>
                    </p>
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                    <Button variant="ghost" onClick={handleDecline} className="text-xs py-2 h-auto text-neutral-darkgray hover:bg-neutral-lightgray/50 hover:text-black">
                        Nur Notwendige
                    </Button>
                    <Button variant="secondary" onClick={handleCustomize} className="text-xs py-2 h-auto">
                        Anpassen
                    </Button>
                    <Button variant="primary" onClick={handleAccept} className="text-xs py-2 h-auto">
                        Alle Akzeptieren
                    </Button>
                </div>
            </div>
        </div>
    );
};
