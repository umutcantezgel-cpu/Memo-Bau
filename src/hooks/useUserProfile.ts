/**
 * Memo-BauT User Profile Hook
 * React hook for accessing and managing user profile state
 */

import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
    UserProfile,
    UserSegment,
    UserPreferences,
    ProductInterest,
} from '../types/userProfile.types';
import {
    getOrCreateProfile,
    updateProfile,
    updatePreferences,
    updateSegment,
    trackPageVisit,
    trackProductView,
    hasPersonalizationConsent,
} from '../services/userProfile.service';

export interface UseUserProfileReturn {
    /** Current user profile */
    profile: UserProfile;
    /** Current active segment */
    segment: UserSegment;
    /** Whether user is authenticated */
    isAuthenticated: boolean;
    /** Whether personalization is enabled */
    isPersonalizationEnabled: boolean;
    /** Update user preferences */
    updateUserPreferences: (preferences: Partial<UserPreferences>) => void;
    /** Track a product view */
    trackProduct: (productId: string) => void;
    /** Set user segment manually (e.g., from account login) */
    setSegment: (segment: UserSegment) => void;
    /** Track a category browse */
    trackCategory: (category: ProductInterest) => void;
    /** Refresh profile from storage */
    refreshProfile: () => void;
}

/**
 * Hook for accessing user profile and personalization features
 */
export const useUserProfile = (): UseUserProfileReturn => {
    const location = useLocation();
    const [profile, setProfile] = useState<UserProfile>(() => getOrCreateProfile());
    const [isPersonalizationEnabled, setIsPersonalizationEnabled] = useState<boolean>(
        hasPersonalizationConsent
    );

    // Track page visits on route changes
    useEffect(() => {
        if (isPersonalizationEnabled) {

            const updatedProfile = trackPageVisit(profile, location.pathname);
             
            setProfile(updatedProfile);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname, isPersonalizationEnabled]);

    // Update segment when profile changes significantly
    useEffect(() => {
        if (isPersonalizationEnabled) {
            const updatedProfile = updateSegment(profile);
            if (updatedProfile !== profile) {
                 
                setProfile(updatedProfile);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profile.behavioralData.pagesVisited.length, profile.behavioralData.productsViewed.length]);

    // Check consent state periodically
    useEffect(() => {
        const checkConsent = () => {
            setIsPersonalizationEnabled(hasPersonalizationConsent());
        };

        // Check on storage events (consent changes in another tab)
        window.addEventListener('storage', checkConsent);
        return () => window.removeEventListener('storage', checkConsent);
    }, []);

    const updateUserPreferences = useCallback(
        (preferences: Partial<UserPreferences>) => {
            const updated = updatePreferences(profile, preferences);
            setProfile(updated);
        },
        [profile]
    );

    const trackProduct = useCallback(
        (productId: string) => {
            if (isPersonalizationEnabled) {
                const updated = trackProductView(profile, productId);
                setProfile(updated);
            }
        },
        [profile, isPersonalizationEnabled]
    );

    const setSegment = useCallback(
        (segment: UserSegment) => {
            const updated = updateProfile(profile, { segment });
            setProfile(updated);
        },
        [profile]
    );

    const trackCategory = useCallback(
        (category: ProductInterest) => {
            if (isPersonalizationEnabled) {
                const categoriesBrowsed = [...profile.behavioralData.categoriesBrowsed];
                if (!categoriesBrowsed.includes(category)) {
                    categoriesBrowsed.push(category);
                }
                const updated = updateProfile(profile, {
                    behavioralData: {
                        ...profile.behavioralData,
                        categoriesBrowsed,
                    },
                });
                setProfile(updated);
            }
        },
        [profile, isPersonalizationEnabled]
    );

    const refreshProfile = useCallback(() => {
        const freshProfile = getOrCreateProfile();
        setProfile(freshProfile);
    }, []);

    return {
        profile,
        segment: profile.segment,
        isAuthenticated: profile.isAuthenticated,
        isPersonalizationEnabled,
        updateUserPreferences,
        trackProduct,
        setSegment,
        trackCategory,
        refreshProfile,
    };
};

/**
 * Hook for getting content variations based on user segment
 */
export const usePersonalizedContent = () => {
    const { segment } = useUserProfile();

    const getHeadlineVariation = useCallback(() => {
        switch (segment) {
            case 'contractor':
                return {
                    title: 'Professionelle Baumaterialien',
                    subtitle: 'Für Handwerksbetriebe',
                    cta: 'Angebot anfordern',
                };
            case 'b2b-partner':
                return {
                    title: 'Partner-Portal',
                    subtitle: 'Exklusive B2B-Konditionen',
                    cta: 'Zum Partner-Bereich',
                };
            case 'retail':
                return {
                    title: 'Qualität für Ihr Zuhause',
                    subtitle: 'Baumaterialien vom Profi',
                    cta: 'Jetzt entdecken',
                };
            default:
                return {
                    title: 'Baumaterialien für Profis',
                    subtitle: 'Ihr Partner in Wetzlar',
                    cta: 'Jetzt anfragen',
                };
        }
    }, [segment]);

    const getPricingMode = useCallback(() => {
        switch (segment) {
            case 'contractor':
            case 'b2b-partner':
                return 'net'; // Show net prices for professionals
            default:
                return 'gross'; // Show gross prices for consumers
        }
    }, [segment]);

    const getFeaturedProductsType = useCallback(() => {
        switch (segment) {
            case 'contractor':
                return 'professional';
            case 'b2b-partner':
                return 'bulk';
            default:
                return 'popular';
        }
    }, [segment]);

    return {
        segment,
        getHeadlineVariation,
        getPricingMode,
        getFeaturedProductsType,
    };
};
