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
        const handleAnalytics = () => {
            const consent = getConsentState();
            const hasConsent = consent?.analytics === true;

            if (!hasConsent) {
                if (window.gtag) {
                    window.gtag('consent', 'update', { analytics_storage: 'denied' });
                }
                const existingScript = document.getElementById('ga-script');
                if (existingScript) {
                    existingScript.remove();
                }
                return;
            }

            if (!GA_MEASUREMENT_ID) return;

            // Initialize GA if not already initialized
            if (!document.getElementById('ga-script')) {
                const script = document.createElement('script');
                script.id = 'ga-script';
                script.async = true;
                script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

                document.head.appendChild(script);

                script.onload = () => {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(...args: unknown[]) {
                        window.dataLayer.push(args);
                    }
                    window.gtag = gtag;
                    
                    gtag('consent', 'default', { analytics_storage: 'denied' });
                    gtag('consent', 'update', { analytics_storage: 'granted' });
                    
                    gtag('js', new Date());
                    gtag('config', GA_MEASUREMENT_ID, {
                        page_path: location.pathname,
                        anonymize_ip: true, // GDPR compliance
                    });
                };
            } else if (window.gtag) {
                // Send pageview on route change
                window.gtag('consent', 'update', { analytics_storage: 'granted' });
                window.gtag('config', GA_MEASUREMENT_ID, {
                    page_path: location.pathname,
                });
            }
        };

        handleAnalytics();
        
        window.addEventListener('consent_updated', handleAnalytics);
        
        return () => {
            window.removeEventListener('consent_updated', handleAnalytics);
        };
    }, [location.pathname]);

    return null;
};
