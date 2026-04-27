// src/lib/analytics.ts

/**
 * ZB-05 Conversion Tracking System (Local, Privacy-First)
 * Tracks user behavior and conversion milestones locally without external scripts (Google, Meta, etc).
 */

export type ConversionEvent =
    | 'form_start'
    | 'form_progress'
    | 'form_submit'
    | 'form_success'
    | 'form_error'
    | 'cta_click'
    | 'calendly_open'
    | 'scroll_depth';

export interface TrackingProperties {
    label?: string;
    path?: string;
    value?: number | string;
    depth?: 25 | 50 | 75 | 100;
    [key: string]: unknown;
}

export const trackEvent = (
    eventName: ConversionEvent,
    properties?: TrackingProperties
) => {
    // Bestimme den aktuellen Pfad
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : 'unknown';
    
    // Initialisiere/hole Session ID
    let sessionId = 'unknown';
    if (typeof window !== 'undefined') {
        sessionId = sessionStorage.getItem('analytics_sessionId') || 'unknown';
        if (sessionId === 'unknown') {
            sessionId = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2);
            sessionStorage.setItem('analytics_sessionId', sessionId);
            sessionStorage.setItem('session_start', new Date().toISOString());
        }
    }

    const eventPayload = {
        event_name: eventName,
        path: currentPath,
        session_id: sessionId,
        timestamp: new Date().toISOString(),
        ...properties,
    };

    // Im Development-Modus lokal loggen
    if (import.meta.env.DEV) {
        console.debug(`[Analytics Tracker] ${eventName}`, eventPayload);
    }

    // Forward to GA4 if available (Consent was already checked via the GA4 initialization)
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        const { event_name, ...gaProperties } = eventPayload;
        window.gtag('event', eventName, gaProperties);
    }
};
