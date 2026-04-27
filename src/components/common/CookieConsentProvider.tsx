import React, { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import { cookieConsentConfig } from '../../lib/cookieconsent.config';

export const CookieConsentProvider: React.FC = () => {
    useEffect(() => {
        // Initialize the library
        CookieConsent.run(cookieConsentConfig);
    }, []);

    return null; // This component just mounts the vanilla JS library
};

export const hasAnalyticsConsent = (): boolean => CookieConsent.acceptedCategory('analytics');
export const hasMarketingConsent = (): boolean => CookieConsent.acceptedCategory('marketing');
export const hasPersonalizationConsent = (): boolean => CookieConsent.acceptedCategory('personalization');
