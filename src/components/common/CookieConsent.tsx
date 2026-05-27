/**
 * @deprecated Ersetzt durch CookieConsentProvider.tsx (vanilla-cookieconsent).
 * Datei bleibt für historische Referenz. Wird in v2.0.0 entfernt.
 * Zuletzt aktiv: 2026-04-27
 */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { setConsentState, getConsentState } from '../../services/userProfile.service';

export const CookieConsent: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        analytics: false,
        marketing: false,
        personalization: false,
    });

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
            setShowSettings(true);
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

    const handleAcceptAll = () => {
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

    const handleDeclineAll = () => {
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

    const handleSaveSettings = () => {
        setConsentState({
            ...preferences,
            timestamp: Date.now(),
        });
        localStorage.setItem('cookie-consent', 'accepted'); // Treating custom as accepted, but properly filtered above
        hideBanner();
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'memobau_consent',
        }));
        window.dispatchEvent(new Event('consent_updated'));
    };

    const handleCustomize = () => {
        setShowSettings(true);
    };

    const togglePreference = (key: keyof typeof preferences) => {
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    if (!isMounted) return null;

    if (showSettings) {
        return (
            <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="bg-neutral-white p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-4 font-display text-primary">Ihre Cookie Einstellungen</h2>
                    <p className="text-neutral-darkgray mb-6 text-sm">
                        Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Sie können Ihre Einstellungen hier anpassen. Weitere Informationen finden Sie in unserer <Link to="/datenschutz" className="text-accent underline">Datenschutzerklärung</Link>.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                        {/* Notwendig (Always on) */}
                        <div className="flex items-start justify-between p-4 border border-neutral-lightgray bg-neutral-lightgray/20">
                            <div>
                                <h3 className="font-semibold mb-1">Notwendige Cookies</h3>
                                <p className="text-sm text-neutral-darkgray">Diese Cookies sind für die grundlegende Funktion der Website erforderlich und können nicht deaktiviert werden.</p>
                            </div>
                            <div className="ml-4 pt-1">
                                <input type="checkbox" checked disabled className="w-5 h-5 accent-primary opacity-70" />
                            </div>
                        </div>

                        {/* Analyse */}
                        <div className="flex items-start justify-between p-4 border border-neutral-lightgray">
                            <label htmlFor="cookie-analytics" className="cursor-pointer flex-1">
                                <h3 className="font-semibold mb-1">Analyse & Performance</h3>
                                <p className="text-sm text-neutral-darkgray">Helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen anonym gesammelt und gemeldet werden.</p>
                            </label>
                            <div className="ml-4 pt-1">
                                <input 
                                    id="cookie-analytics"
                                    type="checkbox" 
                                    checked={preferences.analytics} 
                                    onChange={() => togglePreference('analytics')}
                                    className="w-5 h-5 accent-primary cursor-pointer" 
                                />
                            </div>
                        </div>

                        {/* Marketing / Externe Medien */}
                        <div className="flex items-start justify-between p-4 border border-neutral-lightgray">
                            <label htmlFor="cookie-marketing" className="cursor-pointer flex-1">
                                <h3 className="font-semibold mb-1">Externe Medien & Marketing</h3>
                                <p className="text-sm text-neutral-darkgray">Werden verwendet, um externe Dienste wie die dynamische Online Terminbuchung (Calendly) freizuschalten und auszuführen.</p>
                            </label>
                            <div className="ml-4 pt-1">
                                <input 
                                    id="cookie-marketing"
                                    type="checkbox" 
                                    checked={preferences.marketing} 
                                    onChange={() => togglePreference('marketing')}
                                    className="w-5 h-5 accent-primary cursor-pointer" 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 flex-wrap justify-end">
                        <Button variant="ghost" onClick={handleDeclineAll} className="py-2 h-auto text-neutral-darkgray hover:bg-neutral-lightgray/50 hover:text-black">
                            Alle Ablehnen
                        </Button>
                        <Button variant="secondary" onClick={handleSaveSettings} className="py-2 h-auto">
                            Auswahl Speichern
                        </Button>
                        <Button variant="primary" onClick={handleAcceptAll} className="py-2 h-auto">
                            Alle Akzeptieren
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-neutral-white/95 backdrop-blur-md border-t border-neutral-lightgray shadow-elevation-4 transition-[transform,opacity] duration-[var(--motion-emphasis-duration)] ease-[var(--motion-emphasis-easing)] will-change-transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-neutral-darkgray text-center md:text-left">
                    <p>
                        Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                        Dazu gehören Analyse Cookies und personalisierte Inhalte.
                        <Link to="/datenschutz" className="text-accent hover:text-accent-hover ml-1 font-medium underline">
                            Datenschutz
                        </Link>
                    </p>
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                    <Button variant="ghost" onClick={handleDeclineAll} className="text-xs py-2 h-auto text-neutral-darkgray hover:bg-neutral-lightgray/50 hover:text-black">
                        Nur Notwendige
                    </Button>
                    <Button variant="secondary" onClick={handleCustomize} className="text-xs py-2 h-auto">
                        Anpassen
                    </Button>
                    <Button variant="primary" onClick={handleAcceptAll} className="text-xs py-2 h-auto">
                        Alle Akzeptieren
                    </Button>
                </div>
            </div>
        </div>
    );
};
