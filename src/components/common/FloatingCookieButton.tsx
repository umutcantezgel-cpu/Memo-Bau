import React from 'react';
import { Cookie } from 'lucide-react';
import * as CookieConsent from 'vanilla-cookieconsent';

export const FloatingCookieButton: React.FC = () => {
    const handleOpenSettings = () => {
        CookieConsent.showPreferences();
    };

    return (
        <button
            onClick={handleOpenSettings}
            className="fixed bottom-6 left-6 z-[100] w-12 h-12 bg-neutral-white shadow-elevation-2 rounded-full flex items-center justify-center text-primary-base hover:bg-primary-base hover:text-neutral-white transition-all duration-[var(--motion-micro-duration)] focus:outline-none focus:ring-2 focus:ring-primary-base focus:ring-offset-2"
            aria-label="Cookie-Einstellungen öffnen"
            title="Cookie-Einstellungen"
        >
            <Cookie className="w-5 h-5" />
        </button>
    );
};
