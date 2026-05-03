/**
 * Memo-BauT User Profile Service
 * Manages user profile persistence, retrieval, and updates
 * GDPR-compliant with consent-based data collection
 */

import {
    UserProfile,
    UserSegment,
    UserPreferences,
    BehavioralData,
    UTMParameters,
    USER_PROFILE_STORAGE_KEY,
    CONSENT_STORAGE_KEY,
    DEFAULT_PREFERENCES,
    DEFAULT_BEHAVIORAL_DATA,
} from '../types/userProfile.types';
import * as CookieConsent from 'vanilla-cookieconsent';

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Generate a unique user ID
 */
const generateUserId = (): string => {
    return `user_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
};

/**
 * Parse UTM parameters from URL
 */
export const parseUTMParameters = (urlSearch: string = window.location.search): UTMParameters | null => {
    const params = new URLSearchParams(urlSearch);

    const utmSource = params.get('utm_source');
    const utmMedium = params.get('utm_medium');
    const utmCampaign = params.get('utm_campaign');
    const utmContent = params.get('utm_content');
    const utmTerm = params.get('utm_term');

    // Only return if at least one UTM param exists
    if (utmSource || utmMedium || utmCampaign) {
        return {
            source: utmSource,
            medium: utmMedium,
            campaign: utmCampaign,
            content: utmContent,
            term: utmTerm,
        };
    }

    return null;
};

// ============================================================================
// CONSENT MANAGEMENT
// ============================================================================

export interface ConsentState {
    analytics: boolean;
    marketing: boolean;
    personalization: boolean;
    timestamp: number;
}

export const getConsentState = (): ConsentState | null => {
    try {
        const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
        return stored ? JSON.parse(stored) : null;
    } catch {
        return null;
    }
};

export const setConsentState = (consent: ConsentState): void => {
    try {
        localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    } catch (error) {
        console.warn('Failed to store consent state:', error);
    }
};

export const hasPersonalizationConsent = (): boolean => {
    const consent = getConsentState();
    return consent?.personalization === true;
};

export const syncConsentFromLibrary = (): void => {
    const analytics = CookieConsent.acceptedCategory('analytics');
    const marketing = CookieConsent.acceptedCategory('marketing');
    const personalization = CookieConsent.acceptedCategory('personalization');

    const newState: ConsentState = {
        analytics,
        marketing,
        personalization,
        timestamp: Date.now()
    };

    setConsentState(newState);

    // Trigger legacy event for backwards compatibility
    window.dispatchEvent(new CustomEvent('consent_updated', { detail: newState }));
};

// ============================================================================
// PROFILE PERSISTENCE
// ============================================================================

/**
 * Retrieve user profile from localStorage
 */
export const getStoredProfile = (): UserProfile | null => {
    // Only access storage if personalization consent is given
    if (!hasPersonalizationConsent()) {
        return null;
    }

    try {
        const stored = localStorage.getItem(USER_PROFILE_STORAGE_KEY);
        return stored ? JSON.parse(stored) : null;
    } catch {
        return null;
    }
};

/**
 * Store user profile to localStorage
 */
export const storeProfile = (profile: UserProfile): void => {
    // Only store if personalization consent is given
    if (!hasPersonalizationConsent()) {
        return;
    }

    try {
        localStorage.setItem(USER_PROFILE_STORAGE_KEY, JSON.stringify(profile));
    } catch (error) {
        console.warn('Failed to store user profile:', error);
    }
};

/**
 * Clear user profile from storage
 */
export const clearStoredProfile = (): void => {
    try {
        localStorage.removeItem(USER_PROFILE_STORAGE_KEY);
    } catch (error) {
        console.warn('Failed to clear user profile:', error);
    }
};

// ============================================================================
// PROFILE CREATION & MANAGEMENT
// ============================================================================

/**
 * Create a new user profile with default values
 */
export const createNewProfile = (): UserProfile => {
    const now = Date.now();
    const utmParams = parseUTMParameters();

    return {
        id: generateUserId(),
        segment: 'unknown',
        purchaseHistory: 'first-time',
        lifecycleStage: 'new',
        isAuthenticated: false,
        preferences: { ...DEFAULT_PREFERENCES },
        behavioralData: {
            ...DEFAULT_BEHAVIORAL_DATA,
            lastActivity: now,
            referralSource: document.referrer || null,
            utmParams,
        },
        account: null,
        createdAt: now,
        updatedAt: now,
    };
};

/**
 * Get or create user profile
 */
export const getOrCreateProfile = (): UserProfile => {
    const stored = getStoredProfile();

    if (stored) {
        // Update last activity
        const updated = {
            ...stored,
            behavioralData: {
                ...stored.behavioralData,
                lastActivity: Date.now(),
                sessionCount: stored.behavioralData.sessionCount + 1,
            },
            updatedAt: Date.now(),
        };
        storeProfile(updated);
        return updated;
    }

    const newProfile = createNewProfile();
    storeProfile(newProfile);
    return newProfile;
};

/**
 * Update user profile with partial data
 */
export const updateProfile = (
    profile: UserProfile,
    updates: Partial<Omit<UserProfile, 'id' | 'createdAt'>>
): UserProfile => {
    const updated: UserProfile = {
        ...profile,
        ...updates,
        updatedAt: Date.now(),
    };
    storeProfile(updated);
    return updated;
};

/**
 * Update user preferences
 */
export const updatePreferences = (
    profile: UserProfile,
    preferences: Partial<UserPreferences>
): UserProfile => {
    return updateProfile(profile, {
        preferences: { ...profile.preferences, ...preferences },
    });
};

/**
 * Update behavioral data
 */
export const updateBehavioralData = (
    profile: UserProfile,
    behavioralUpdates: Partial<BehavioralData>
): UserProfile => {
    return updateProfile(profile, {
        behavioralData: { ...profile.behavioralData, ...behavioralUpdates },
    });
};

// ============================================================================
// BEHAVIORAL TRACKING
// ============================================================================

/**
 * Track page visit
 */
export const trackPageVisit = (profile: UserProfile, pagePath: string): UserProfile => {
    const pagesVisited = [...profile.behavioralData.pagesVisited];

    // Only add if not the last visited page (avoid duplicates)
    if (pagesVisited[pagesVisited.length - 1] !== pagePath) {
        pagesVisited.push(pagePath);
    }

    return updateBehavioralData(profile, {
        pagesVisited,
        lastActivity: Date.now(),
    });
};

/**
 * Track product view
 */
export const trackProductView = (profile: UserProfile, productId: string): UserProfile => {
    const productsViewed = [...profile.behavioralData.productsViewed];

    // Move to end if already viewed, or add new
    const existingIndex = productsViewed.indexOf(productId);
    if (existingIndex > -1) {
        productsViewed.splice(existingIndex, 1);
    }
    productsViewed.push(productId);

    // Keep only last 50 products
    const trimmedProducts = productsViewed.slice(-50);

    return updateBehavioralData(profile, {
        productsViewed: trimmedProducts,
        lastActivity: Date.now(),
    });
};

// ============================================================================
// SEGMENT DETECTION
// ============================================================================

/**
 * Determine user segment based on signals
 */
export const detectSegment = (profile: UserProfile): UserSegment => {
    // If authenticated, use account type
    if (profile.isAuthenticated && profile.account) {
        // B2B partners have company names
        if (profile.account.companyName) {
            return 'b2b-partner';
        }
        // Check tier for contractor indication
        if (profile.account.tier === 'premium' || profile.account.tier === 'vip') {
            return 'contractor';
        }
    }

    // Check UTM parameters for segment hints
    const utmSource = profile.behavioralData.utmParams?.source?.toLowerCase();
    if (utmSource) {
        if (utmSource.includes('contractor') || utmSource.includes('handwerk')) {
            return 'contractor';
        }
        if (utmSource.includes('b2b') || utmSource.includes('partner')) {
            return 'b2b-partner';
        }
    }

    // Check browsing behavior
    const visitedB2BPages = profile.behavioralData.pagesVisited.some(
        (page) => page.includes('/partner') || page.includes('/b2b')
    );
    if (visitedB2BPages) {
        return 'b2b-partner';
    }

    // Check for professional product patterns
    const viewedBulkProducts = profile.behavioralData.productsViewed.length > 10;
    if (viewedBulkProducts) {
        return 'contractor';
    }

    // Default based on session count
    if (profile.behavioralData.sessionCount > 3) {
        return 'retail';
    }

    return 'unknown';
};

/**
 * Update profile with detected segment
 */
export const updateSegment = (profile: UserProfile): UserProfile => {
    const detectedSegment = detectSegment(profile);

    if (detectedSegment !== profile.segment) {
        return updateProfile(profile, { segment: detectedSegment });
    }

    return profile;
};
