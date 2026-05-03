/**
 * Memo-BauT User Profile & Segmentation Types
 * Enables personalized user experiences based on customer type
 */

// ============================================================================
// USER SEGMENT TYPES
// ============================================================================

/**
 * Primary user segment categories
 * - retail: End consumers, individual buyers
 * - contractor: Professional handwerker, small construction firms
 * - b2b-partner: Registered business partners with accounts
 * - unknown: New/unidentified visitors
 */
export type UserSegment = 'retail' | 'contractor' | 'b2b-partner' | 'unknown';

/**
 * Purchase history classification
 */
export type PurchaseHistory = 'first-time' | 'repeat' | 'high-value' | 'inactive';

/**
 * Product interest categories
 */
export type ProductInterest =
    | 'building-materials'
    | 'tools-equipment'
    | 'delivery-services'
    | 'b2b-services'
    | 'general';

/**
 * Customer lifecycle stage
 */
export type LifecycleStage =
    | 'new'
    | 'engaged'
    | 'returning'
    | 'loyal'
    | 'at-risk'
    | 'churned';

// ============================================================================
// USER PREFERENCES
// ============================================================================

export interface UserPreferences {
    /** Preferred communication language */
    language: 'de' | 'en';
    /** Preferred product categories */
    productInterests: ProductInterest[];
    /** Email marketing consent */
    marketingConsent: boolean;
    /** Analytics/personalization consent */
    analyticsConsent: boolean;
    /** Preferred view mode */
    viewMode: 'grid' | 'list';
    /** Show prices with/without VAT */
    showNetPrices: boolean;
}

// ============================================================================
// BEHAVIORAL DATA
// ============================================================================

export interface BehavioralData {
    /** Pages visited in current session */
    pagesVisited: string[];
    /** Products viewed */
    productsViewed: string[];
    /** Categories browsed */
    categoriesBrowsed: ProductInterest[];
    /** Total time on site (seconds) */
    timeOnSite: number;
    /** Number of sessions */
    sessionCount: number;
    /** Last activity timestamp */
    lastActivity: number;
    /** Referral source */
    referralSource: string | null;
    /** UTM parameters from current/last session */
    utmParams: UTMParameters | null;
}

export interface UTMParameters {
    source: string | null;
    medium: string | null;
    campaign: string | null;
    content: string | null;
    term: string | null;
}

// ============================================================================
// USER PROFILE
// ============================================================================

export interface UserProfile {
    /** Unique user identifier */
    id: string;
    /** Detected or assigned user segment */
    segment: UserSegment;
    /** Purchase history classification */
    purchaseHistory: PurchaseHistory;
    /** Customer lifecycle stage */
    lifecycleStage: LifecycleStage;
    /** Whether user is authenticated */
    isAuthenticated: boolean;
    /** User preferences (explicit settings) */
    preferences: UserPreferences;
    /** Behavioral tracking data */
    behavioralData: BehavioralData;
    /** Account information (if authenticated) */
    account: UserAccount | null;
    /** Profile creation timestamp */
    createdAt: number;
    /** Last profile update timestamp */
    updatedAt: number;
}

export interface UserAccount {
    /** Account email */
    email: string;
    /** Company name (for B2B) */
    companyName: string | null;
    /** Customer number */
    customerNumber: string | null;
    /** Account tier */
    tier: 'standard' | 'premium' | 'vip';
    /** Credit limit (for invoice purchases) */
    creditLimit: number | null;
}

// ============================================================================
// SEGMENTATION SIGNALS
// ============================================================================

/**
 * Signals used to determine user segment
 */
export interface SegmentationSignals {
    /** UTM source indicates segment */
    utmSource: string | null;
    /** Referrer domain */
    referrer: string | null;
    /** Direct navigation to B2B pages */
    visitedB2BPages: boolean;
    /** Viewed bulk/wholesale products */
    viewedBulkProducts: boolean;
    /** Time spent on technical specifications */
    technicalEngagement: number;
    /** Account type (if logged in) */
    accountType: UserSegment | null;
}

// ============================================================================
// PERSONALIZATION CONTEXT
// ============================================================================

export interface PersonalizationContext {
    /** Current user profile */
    profile: UserProfile;
    /** Active segment for content adaptation */
    activeSegment: UserSegment;
    /** Content variations to apply */
    contentVariations: ContentVariations;
    /** Whether personalization is enabled */
    isEnabled: boolean;
}

export interface ContentVariations {
    /** Hero headline variation */
    heroHeadline: 'retail' | 'contractor' | 'b2b';
    /** CTA button text variation */
    primaryCta: 'shop' | 'quote' | 'partner';
    /** Featured products source */
    featuredProducts: 'popular' | 'professional' | 'bulk';
    /** Pricing display mode */
    pricingMode: 'unit' | 'bulk' | 'negotiated';
}

// ============================================================================
// STORAGE KEYS
// ============================================================================

export const USER_PROFILE_STORAGE_KEY = 'memobau_user_profile';
export const CONSENT_STORAGE_KEY = 'memobau_consent';
export const SESSION_STORAGE_KEY = 'memobau_session';

// ============================================================================
// DEFAULT VALUES
// ============================================================================

export const DEFAULT_PREFERENCES: UserPreferences = {
    language: 'de',
    productInterests: ['general'],
    marketingConsent: false,
    analyticsConsent: false,
    viewMode: 'grid',
    showNetPrices: false,
};

export const DEFAULT_BEHAVIORAL_DATA: BehavioralData = {
    pagesVisited: [],
    productsViewed: [],
    categoriesBrowsed: [],
    timeOnSite: 0,
    sessionCount: 1,
    lastActivity: Date.now(),
    referralSource: null,
    utmParams: null,
};
