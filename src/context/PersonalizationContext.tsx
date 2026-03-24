/**
 * Memo BauT Personalization Context
 * React context for managing personalization state across the application
 */

/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import {
    UserProfile,
    UserSegment,
    ContentVariations,
} from '../types/userProfile.types';
import {
    getOrCreateProfile,
    updateSegment,
    hasPersonalizationConsent,
} from '../services/userProfile.service';

// ============================================================================
// CONTEXT TYPES
// ============================================================================

interface PersonalizationProviderProps {
    children: ReactNode;
}

interface PersonalizationState {
    /** Current user profile */
    profile: UserProfile;
    /** Whether personalization is enabled (based on consent) */
    isEnabled: boolean;
    /** Current content variations */
    contentVariations: ContentVariations;
    /** Update profile */
    updateProfile: (updates: Partial<UserProfile>) => void;
    /** Force refresh profile from storage */
    refreshProfile: () => void;
    /** Get personalized heading for segment */
    getPersonalizedHeading: () => { title: string; subtitle: string };
    /** Get personalized CTA text */
    getPersonalizedCTA: () => string;
}

// ============================================================================
// CONTENT VARIATIONS
// ============================================================================

const getContentVariations = (segment: UserSegment): ContentVariations => {
    switch (segment) {
        case 'contractor':
            return {
                heroHeadline: 'contractor',
                primaryCta: 'quote',
                featuredProducts: 'professional',
                pricingMode: 'bulk',
            };
        case 'b2b-partner':
            return {
                heroHeadline: 'b2b',
                primaryCta: 'partner',
                featuredProducts: 'bulk',
                pricingMode: 'negotiated',
            };
        case 'retail':
            return {
                heroHeadline: 'retail',
                primaryCta: 'shop',
                featuredProducts: 'popular',
                pricingMode: 'unit',
            };
        default:
            return {
                heroHeadline: 'retail',
                primaryCta: 'shop',
                featuredProducts: 'popular',
                pricingMode: 'unit',
            };
    }
};

// ============================================================================
// CONTEXT
// ============================================================================

const PersonalizationContext = createContext<PersonalizationState | null>(null);

// ============================================================================
// PROVIDER
// ============================================================================

export const PersonalizationProvider: React.FC<PersonalizationProviderProps> = ({ children }) => {
    const [profile, setProfile] = useState<UserProfile>(() => getOrCreateProfile());
    const [isEnabled, setIsEnabled] = useState<boolean>(() => hasPersonalizationConsent());

    // Update content variations when segment changes
    const contentVariations = getContentVariations(profile.segment);

    // Check consent state on mount and on storage changes
    useEffect(() => {
        const checkConsent = () => {
            const hasConsent = hasPersonalizationConsent();
            setIsEnabled(hasConsent);
        };

        window.addEventListener('storage', checkConsent);
        return () => window.removeEventListener('storage', checkConsent);
    }, []);

    // Auto-update segment based on behavioral data
    useEffect(() => {
        if (isEnabled) {
            const updated = updateSegment(profile);
            if (updated.segment !== profile.segment) {
                setProfile(updated);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profile.behavioralData, isEnabled]);

    const updateProfileHandler = useCallback((updates: Partial<UserProfile>) => {
        setProfile((prev) => ({
            ...prev,
            ...updates,
            updatedAt: Date.now(),
        }));
    }, []);

    const refreshProfile = useCallback(() => {
        setProfile(getOrCreateProfile());
    }, []);

    const getPersonalizedHeading = useCallback(() => {
        switch (profile.segment) {
            case 'contractor':
                return {
                    title: 'Professionelle Baumaterialien',
                    subtitle: 'Für Handwerksbetriebe in der Region',
                };
            case 'b2b-partner':
                return {
                    title: 'Willkommen zurück, Partner',
                    subtitle: 'Ihre exklusiven B2B-Konditionen',
                };
            case 'retail':
                return {
                    title: 'Qualität für Ihr Projekt',
                    subtitle: 'Baumaterialien vom Fachhandel',
                };
            default:
                return {
                    title: 'Baumaterialien für Profis',
                    subtitle: 'Ihr Partner in Wetzlar-Gießen',
                };
        }
    }, [profile.segment]);

    const getPersonalizedCTA = useCallback(() => {
        switch (profile.segment) {
            case 'contractor':
                return 'Angebot anfordern';
            case 'b2b-partner':
                return 'Zum Partner-Bereich';
            case 'retail':
                return 'Jetzt entdecken';
            default:
                return 'Jetzt anfragen';
        }
    }, [profile.segment]);

    const value: PersonalizationState = {
        profile,
        isEnabled,
        contentVariations,
        updateProfile: updateProfileHandler,
        refreshProfile,
        getPersonalizedHeading,
        getPersonalizedCTA,
    };

    return (
        <PersonalizationContext.Provider value={value}>
            {children}
        </PersonalizationContext.Provider>
    );
};

// ============================================================================
// HOOK
// ============================================================================

export const usePersonalization = (): PersonalizationState => {
    const context = useContext(PersonalizationContext);

    if (!context) {
        throw new Error('usePersonalization must be used within a PersonalizationProvider');
    }

    return context;
};

// ============================================================================
// UTILITY HOOKS
// ============================================================================

/**
 * Hook to get segment-specific pricing display
 */
export const usePricingDisplay = () => {
    const { contentVariations, profile } = usePersonalization();

    const formatPrice = useCallback(
        (grossPrice: number, netPrice?: number) => {
            const isNetPricing = contentVariations.pricingMode !== 'unit';
            const displayPrice = isNetPricing && netPrice ? netPrice : grossPrice;

            return {
                price: displayPrice.toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                }),
                suffix: isNetPricing ? 'netto' : 'inkl. MwSt.',
                showBulkDiscount: profile.segment === 'contractor' || profile.segment === 'b2b-partner',
            };
        },
        [contentVariations.pricingMode, profile.segment]
    );

    return { formatPrice };
};

/**
 * Hook to get segment-specific product recommendations
 */
export const useProductRecommendations = () => {
    const { contentVariations, profile } = usePersonalization();

    const getRecommendationType = useCallback(() => {
        return contentVariations.featuredProducts;
    }, [contentVariations.featuredProducts]);

    const shouldShowBulkOptions = useCallback(() => {
        return profile.segment === 'contractor' || profile.segment === 'b2b-partner';
    }, [profile.segment]);

    return { getRecommendationType, shouldShowBulkOptions };
};
