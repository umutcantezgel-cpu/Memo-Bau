import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getConsentState } from '../../services/userProfile.service';

declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
        dataLayer: unknown[];
    }
}

// Get GA ID from environment variable or leave undefined
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

export const GoogleAnalytics: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        // Check for consent and valid ID
        const consent = getConsentState();
        const hasConsent = consent?.analytics === true;

        if (!hasConsent || !GA_MEASUREMENT_ID) {
            return;
        }

        // Initialize GA if not already initialized
        if (!window.gtag) {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

            document.head.appendChild(script);

            script.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag(...args: unknown[]) {
                    window.dataLayer.push(args);
                }
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', GA_MEASUREMENT_ID, {
                    page_path: location.pathname,
                    anonymize_ip: true, // GDPR compliance
                });
            };
        } else {
            // Send pageview on route change
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: location.pathname,
            });
        }
    }, [location.pathname]);

    return null;
};
