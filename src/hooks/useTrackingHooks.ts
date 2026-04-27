// src/hooks/useTrackingHooks.ts

import { useEffect, useCallback, useRef } from 'react';
import { trackEvent, ConversionEvent, TrackingProperties } from '../lib/analytics';

/**
 * Hook to fire an analytics event manually
 */
export const useConversionTracking = () => {
    return useCallback((eventName: ConversionEvent, properties?: TrackingProperties) => {
        trackEvent(eventName, properties);
    }, []);
};

/**
 * Hook to track scroll depth progressively (25, 50, 75, 100%)
 */
export const useScrollDepth = () => {
    const trackedDepths = useRef(new Set<number>());

    useEffect(() => {
        const handleScroll = () => {
            if (typeof document === 'undefined' || typeof window === 'undefined') return;

            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (scrollHeight <= 0) return;

            const currentScrollPos = window.scrollY;
            const scrollPercentage = Math.round((currentScrollPos / scrollHeight) * 100);

            const milestones: (25 | 50 | 75 | 100)[] = [25, 50, 75, 100];

            milestones.forEach(depth => {
                // If we've passed this depth and haven't tracked it yet
                if (scrollPercentage >= depth && !trackedDepths.current.has(depth)) {
                    trackedDepths.current.add(depth);
                    trackEvent('scroll_depth', { depth });
                }
            });
        };

        // Attach with passive flag for performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial check in case they reload further down the page
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
};

/**
 * Hook to track page views and capture UTM parameters
 */
export const usePageTracking = (pathname: string, search: string) => {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Extract UTM parameters if present
        const searchParams = new URLSearchParams(search);
        const hasUtm = Array.from(searchParams.keys()).some(key => key.startsWith('utm_'));
        
        if (hasUtm) {
            const utmData: Record<string, string> = {};
            ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(param => {
                const value = searchParams.get(param);
                if (value) utmData[param] = value;
            });
            
            if (Object.keys(utmData).length > 0) {
                // Store in session storage for later attribution (e.g., when they submit a form)
                sessionStorage.setItem('utm_parameters', JSON.stringify({
                    ...utmData,
                    capturedAt: new Date().toISOString()
                }));
            }
        }

        // We don't trigger GoogleAnalytics pageviews here since GoogleAnalytics.tsx 
        // already handles route changes correctly via the config call.
        // But we DO track a custom page_view event with extra metadata for our local logs
        
        const viewportCategory = window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop';
        trackEvent('form_progress', { 
            action: 'page_view', 
            url: pathname + search,
            title: document.title,
            viewportCategory
        });

    }, [pathname, search]);
};
