/**
 * CMS Data Types
 * Type definitions for all content managed through the admin system.
 */


// ===== SERVICE ITEMS =====
export interface CMSServiceItem {
    id: number;
    title: string;
    description: string;
    iconName: string; // Lucide icon name instead of ReactNode for serialization
    features: string[];
    imageUrl?: string;
    isActive: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
}

// ===== PORTFOLIO ITEMS =====
export type CMSPortfolioCategory = 'privat' | 'gewerbe' | 'oeffentlich' | 'bad' | 'living' | 'kitchen' | 'outdoor';
export type CMSPortfolioSize = 'small' | 'wide' | 'tall' | 'large';

export interface CMSPortfolioItem {
    id: number;
    category: CMSPortfolioCategory;
    title: string;
    description?: string;
    size: CMSPortfolioSize;
    imageUrl?: string;
    isActive: boolean;
    isFeatured: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
}

// ===== TESTIMONIALS =====
export interface CMSTestimonial {
    id: number;
    name: string;
    role: string;
    text: string;
    rating: number;
    imageUrl?: string;
    isActive: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
}

// ===== FAQ ITEMS =====
export interface CMSFaqItem {
    id: number;
    question: string;
    answer: string;
    category?: string;
    isActive: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
}

// ===== BUSINESS INFORMATION =====
export interface CMSBusinessHours {
    day: string;
    openTime: string;
    closeTime: string;
    isClosed: boolean;
}

export interface CMSContactInfo {
    phone: string;
    email: string;
    address: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
    socialMedia: {
        instagram?: string;
        facebook?: string;
        linkedin?: string;
    };
}

export interface CMSTeamMember {
    id: number;
    name: string;
    title: string;
    bio: string;
    imageUrl?: string;
    email?: string;
    phone?: string;
    specializations: string[];
    isActive: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
}

export interface CMSBusinessInfo {
    companyName: string;
    tagline: string;
    description: string;
    missionStatement: string;
    foundedYear: number;
    hours: CMSBusinessHours[];
    contact: CMSContactInfo;
    team: CMSTeamMember[];
    serviceArea: string;
    updatedAt: string;
}

// ===== SITE SETTINGS =====
export interface CMSSiteSettings {
    siteName: string;
    siteDescription: string;
    logoUrl?: string;
    faviconUrl?: string;
    primaryColor: string;
    accentColor: string;
    enableNewsletter: boolean;
    googleAnalyticsId?: string;
    updatedAt: string;
}

// ===== COMPLETE CMS DATA STRUCTURE =====
export interface CMSData {
    services: CMSServiceItem[];
    portfolio: CMSPortfolioItem[];
    testimonials: CMSTestimonial[];
    faqs: CMSFaqItem[];
    businessInfo: CMSBusinessInfo;
    settings: CMSSiteSettings;
    version: number;
    lastModified: string;
}

// ===== AUDIT LOG =====
export interface CMSAuditLogEntry {
    id: string;
    timestamp: string;
    username: string;
    action: 'create' | 'update' | 'delete' | 'login' | 'logout';
    entityType: 'service' | 'portfolio' | 'testimonial' | 'faq' | 'business' | 'team' | 'settings';
    entityId?: number;
    changes?: {
        field: string;
        oldValue: unknown;
        newValue: unknown;
    }[];
    ipAddress?: string;
}
