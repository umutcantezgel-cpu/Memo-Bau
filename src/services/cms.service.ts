/**
 * CMS Data Service
 * Handles CRUD operations for all CMS content.
 * Uses localStorage for persistence (JSON file storage simulation).
 */

import {
    CMSData,
    CMSServiceItem,
    CMSPortfolioItem,
    CMSTestimonial,
    CMSFaqItem,
    CMSBusinessInfo,
    CMSSiteSettings,
    CMSAuditLogEntry,
    CMSTeamMember,
} from '../types/cms.types';
import { getSession } from './auth.service';

const CMS_DATA_KEY = 'mb_cms_data';
const CMS_AUDIT_KEY = 'mb_cms_audit';

// ===== DEFAULT DATA =====
const getDefaultData = (): CMSData => ({
    services: [
        {
            id: 1,
            title: 'Gartendesign & Architektur',
            description: 'Visionäre Gartenplanung, die Ästhetik und Funktionalität vereint. Wir konzipieren Außenräume als Erweiterung Ihrer Wohnkultur.',
            iconName: 'PenTool',
            features: ['3D-Visualisierung', 'Pflanzdesign', 'Lichtkonzepte', 'Wasserspiele'],
            imageUrl: '/images/final/service-planning.webp',
            isActive: true,
            order: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 2,
            title: 'Landschaftsbau & Topographie',
            description: 'Präzise Geländemodellierung für anspruchsvolle Grundstücke. Wir formen das Fundament Ihrer Vision.',
            iconName: 'Hammer',
            features: ['Niveau-Modellierung', 'Nachhaltige Entwässerung', 'Hangsicherung', 'Fundamentbau'],
            imageUrl: '/images/final/service-landscaping.webp',
            isActive: true,
            order: 2,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 3,
            title: 'Stonework & Terrassen',
            description: 'Meisterhafte Pflasterarbeiten mit Naturstein und Keramik. Zeitlose Wege und Plätze für Generationen.',
            iconName: 'Fence',
            features: ['Naturstein-Unikate', 'Großformat-Keramik', 'Edle Holzdecks', 'Lounge-Areale'],
            imageUrl: '/images/final/service-paving.webp',
            isActive: true,
            order: 3,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 4,
            title: 'Exklusive Bepflanzung',
            description: 'Botanische Expertise für lebendige Gärten. Solitärgehölze und Staudenkompositionen.',
            iconName: 'TreePine',
            features: ['Premium Rollrasen', 'Solitärbaum-Pflanzung', 'Sichtschutz', 'Ganzjahres-Blüten'],
            imageUrl: '/images/final/service-planting.webp',
            isActive: true,
            order: 4,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 5,
            title: 'Smart Garden & Wasser',
            description: 'Automatisierte Bewässerung und intelligente Steuerungssysteme für den pflegeleichten Traumgarten.',
            iconName: 'Droplets',
            features: ['Unterflur-Bewässerung', 'App-Steuerung', 'Zisternensysteme', 'Ressourceneffizienz'],
            imageUrl: '/images/final/service-water.webp',
            isActive: true,
            order: 5,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 6,
            title: 'Garten-Concierge',
            description: 'Werterhaltende Pflege für Ihre grüne Investition. Damit Ihr Garten immer schöner wird.',
            iconName: 'Leaf',
            features: ['Formgehölzschnitt', 'Rasen-Aerifizieren', 'Vital-Düngung', 'Saisonale Pflege'],
            imageUrl: '/images/final/products-tools.webp',
            isActive: true,
            order: 6,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
    ],
    portfolio: [
        {
            id: 1,
            category: 'privat',
            title: 'Terrassen-Lounge mit Glasdach',
            size: 'large',
            imageUrl: '/images/final/service-paving.webp',
            isActive: true,
            isFeatured: true,
            order: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 2,
            category: 'privat',
            title: 'Design-Pergola',
            size: 'small',
            imageUrl: '/images/final/hero-home.webp',
            isActive: true,
            isFeatured: true,
            order: 2,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 3,
            category: 'gewerbe',
            title: 'Corporate Green Campus',
            size: 'small',
            imageUrl: '/images/final/service-landscaping.webp',
            isActive: true,
            isFeatured: false,
            order: 3,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
    ],
    testimonials: [
        {
            id: 1,
            name: 'Yücel Deniz',
            role: 'Privatkunde',
            text: 'Sehr zuverlässige und professionelle Baufirma! Die Arbeiten wurden pünktlich und in hoher Qualität ausgeführt. Die Kommunikation war jederzeit klar und freundlich, und auf Wünsche wurde sofort eingegangen. Das Team arbeitet sauber, organisiert und mit viel Fachwissen. Absolut empfehlenswert.',
            rating: 5,
            isActive: true,
            order: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 2,
            name: 'Angelina P',
            role: 'Privatkunde',
            text: 'Ich bin wirklich froh, mich für Memo-BauT Garten- und Landschaftsbau entschieden zu haben. Von Anfang an war die Kommunikation super angenehm, ehrlich und unkompliziert. Man merkt sofort, dass hier jemand mit echter Erfahrung und Leidenschaft arbeitet.',
            rating: 5,
            isActive: true,
            order: 2,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
    ],
    faqs: [
        {
            id: 1,
            question: 'Wie verläuft der Design-Prozess?',
            answer: 'Jedes Projekt beginnt mit einer persönlichen Vor-Ort-Analyse. Wir hören zu und entwickeln daraufhin ein maßgeschneidertes Konzept mit Materialmustern und 3D-Visualisierung.',
            isActive: true,
            order: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 2,
            question: 'Welche Projektgrößen realisieren Sie?',
            answer: 'Unser Fokus liegt auf kompletten Neugestaltungen und hochwertigen Teilbereichen. Wir realisieren Projekte ab einem Investitionsvolumen von ca. 10.000€ bis hin zu Großprojekten.',
            isActive: true,
            order: 2,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 3,
            question: 'Bieten Sie Pflegeverträge an?',
            answer: 'Selbstverständlich. Um den Wert und die Schönheit Ihrer Anlage langfristig zu sichern, bieten wir individuell abgestimmte "Concierge"-Pflegepakete an.',
            isActive: true,
            order: 3,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
    ],
    businessInfo: {
        companyName: 'Memo BauT',
        tagline: 'Exklusive Gartenkunst',
        description: 'Memo-BauT ist Ihr erfahrener Fachbetrieb für Garten- und Landschaftsbau in Aßlar und der Region Wetzlar. Wir planen und gestalten Ihren Traumgarten – von der Terrassenanlage über Pflasterarbeiten bis hin zur kompletten Gartengestaltung. Als gelernter Maurer mit langjähriger Erfahrung bieten wir handwerkliche Präzision und zuverlässige Ausführung für Privat- und Gewerbekunden. Unsere Leistungen umfassen: Pflasterarbeiten, Terrassenbau, Mauerwerk, Bepflanzung und individuelle Gartengestaltung. Kontaktieren Sie uns für eine kostenlose Erstberatung – wir freuen uns auf Ihr Projekt!',
        missionStatement: 'Räume für die Sinne. Gärten für die Ewigkeit.',
        foundedYear: 2019,
        hours: [
            { day: 'Montag', openTime: '08:00', closeTime: '18:00', isClosed: false },
            { day: 'Dienstag', openTime: '08:00', closeTime: '18:00', isClosed: false },
            { day: 'Mittwoch', openTime: '08:00', closeTime: '18:00', isClosed: false },
            { day: 'Donnerstag', openTime: '08:00', closeTime: '18:00', isClosed: false },
            { day: 'Freitag', openTime: '08:00', closeTime: '18:00', isClosed: false },
            { day: 'Samstag', openTime: '09:00', closeTime: '14:00', isClosed: false },
            { day: 'Sonntag', openTime: '', closeTime: '', isClosed: true },
        ],
        contact: {
            phone: '+49 176 70162293',
            email: 'info@memo-baut.de',
            address: {
                street: 'Falkenstraße 9',
                city: 'Aßlar',
                postalCode: '35614',
                country: 'Deutschland',
            },
            socialMedia: {
                instagram: '#',
                facebook: '#',
            },
        },
        team: [
            {
                id: 1,
                name: 'Mehmet Tezgel',
                title: 'Geschäftsführer & Gründer',
                bio: 'Visionär mit über 20 Jahren Erfahrung in der Landschaftsarchitektur.',
                specializations: ['Gartendesign', 'Großprojekte', 'Materialkunde'],
                isActive: true,
                order: 1,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        ],
        serviceArea: 'Wetzlar, Gießen, Frankfurt und Umgebung (100 km Radius)',
        updatedAt: new Date().toISOString(),
    },
    settings: {
        siteName: 'Memo BauT | Exklusive Gartenkunst',
        siteDescription: 'Premium Garten- und Landschaftsbau für anspruchsvolle Kunden.',
        primaryColor: '#57534e', // Stone-600
        accentColor: '#d97706', // Amber-600
        enableNewsletter: false,
        updatedAt: new Date().toISOString(),
    },
    version: 1,
    lastModified: new Date().toISOString(),
});

// ===== DATA ACCESS =====

/**
 * Get all CMS data
 */
export const getCMSData = (): CMSData => {
    try {
        const stored = localStorage.getItem(CMS_DATA_KEY);
        if (!stored) {
            const defaultData = getDefaultData();
            localStorage.setItem(CMS_DATA_KEY, JSON.stringify(defaultData));
            return defaultData;
        }
        return JSON.parse(stored);
    } catch (error) {
        console.error('Failed to get CMS data:', error);
        return getDefaultData();
    }
};

/**
 * Save all CMS data
 */
export const saveCMSData = (data: CMSData): boolean => {
    try {
        data.lastModified = new Date().toISOString();
        data.version += 1;
        localStorage.setItem(CMS_DATA_KEY, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Failed to save CMS data:', error);
        return false;
    }
};

// ===== AUDIT LOGGING =====

/**
 * Add an entry to the audit log
 */
export const addAuditLog = (
    action: CMSAuditLogEntry['action'],
    entityType: CMSAuditLogEntry['entityType'],
    entityId?: number,
    changes?: CMSAuditLogEntry['changes']
): void => {
    try {
        const session = getSession();
        const logs = getAuditLogs();

        const entry: CMSAuditLogEntry = {
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            timestamp: new Date().toISOString(),
            username: session?.username || 'system',
            action,
            entityType,
            entityId,
            changes,
        };

        logs.unshift(entry);

        // Keep only last 1000 entries
        if (logs.length > 1000) {
            logs.splice(1000);
        }

        localStorage.setItem(CMS_AUDIT_KEY, JSON.stringify(logs));
    } catch (error) {
        console.error('Failed to add audit log:', error);
    }
};

/**
 * Get all audit logs
 */
export const getAuditLogs = (): CMSAuditLogEntry[] => {
    try {
        const stored = localStorage.getItem(CMS_AUDIT_KEY);
        if (!stored) return [];
        return JSON.parse(stored);
    } catch {
        return [];
    }
};

// ===== CRUD OPERATIONS =====

// Services
export const getServices = (): CMSServiceItem[] => getCMSData().services;

export const updateService = (id: number, updates: Partial<CMSServiceItem>): boolean => {
    const data = getCMSData();
    const index = data.services.findIndex(s => s.id === id);
    if (index === -1) return false;

    const oldItem = data.services[index];
    data.services[index] = { ...oldItem, ...updates, updatedAt: new Date().toISOString() };

    addAuditLog('update', 'service', id);
    return saveCMSData(data);
};

export const createService = (item: Omit<CMSServiceItem, 'id' | 'createdAt' | 'updatedAt'>): CMSServiceItem | null => {
    const data = getCMSData();
    const newId = Math.max(0, ...data.services.map(s => s.id)) + 1;
    const now = new Date().toISOString();

    const newItem: CMSServiceItem = {
        ...item,
        id: newId,
        createdAt: now,
        updatedAt: now,
    };

    data.services.push(newItem);
    addAuditLog('create', 'service', newId);

    if (saveCMSData(data)) return newItem;
    return null;
};

export const deleteService = (id: number): boolean => {
    const data = getCMSData();
    data.services = data.services.filter(s => s.id !== id);
    addAuditLog('delete', 'service', id);
    return saveCMSData(data);
};

// Portfolio
export const getPortfolio = (): CMSPortfolioItem[] => getCMSData().portfolio;

export const updatePortfolio = (id: number, updates: Partial<CMSPortfolioItem>): boolean => {
    const data = getCMSData();
    const index = data.portfolio.findIndex(p => p.id === id);
    if (index === -1) return false;

    data.portfolio[index] = { ...data.portfolio[index], ...updates, updatedAt: new Date().toISOString() };
    addAuditLog('update', 'portfolio', id);
    return saveCMSData(data);
};

// Testimonials
export const getTestimonials = (): CMSTestimonial[] => getCMSData().testimonials;

export const updateTestimonial = (id: number, updates: Partial<CMSTestimonial>): boolean => {
    const data = getCMSData();
    const index = data.testimonials.findIndex(t => t.id === id);
    if (index === -1) return false;

    data.testimonials[index] = { ...data.testimonials[index], ...updates, updatedAt: new Date().toISOString() };
    addAuditLog('update', 'testimonial', id);
    return saveCMSData(data);
};

// FAQs
export const getFaqs = (): CMSFaqItem[] => getCMSData().faqs;

export const updateFaq = (id: number, updates: Partial<CMSFaqItem>): boolean => {
    const data = getCMSData();
    const index = data.faqs.findIndex(f => f.id === id);
    if (index === -1) return false;

    data.faqs[index] = { ...data.faqs[index], ...updates, updatedAt: new Date().toISOString() };
    addAuditLog('update', 'faq', id);
    return saveCMSData(data);
};

// Business Info
export const getBusinessInfo = (): CMSBusinessInfo => getCMSData().businessInfo;

export const updateBusinessInfo = (updates: Partial<CMSBusinessInfo>): boolean => {
    const data = getCMSData();
    data.businessInfo = { ...data.businessInfo, ...updates, updatedAt: new Date().toISOString() };
    addAuditLog('update', 'business');
    return saveCMSData(data);
};

// Settings
export const getSettings = (): CMSSiteSettings => getCMSData().settings;

export const updateSettings = (updates: Partial<CMSSiteSettings>): boolean => {
    const data = getCMSData();
    data.settings = { ...data.settings, ...updates, updatedAt: new Date().toISOString() };
    addAuditLog('update', 'settings');
    return saveCMSData(data);
};

// Team Members
export const getTeamMembers = (): CMSTeamMember[] => getCMSData().businessInfo.team;

export const updateTeamMember = (id: number, updates: Partial<CMSTeamMember>): boolean => {
    const data = getCMSData();
    const index = data.businessInfo.team.findIndex(t => t.id === id);
    if (index === -1) return false;

    data.businessInfo.team[index] = { ...data.businessInfo.team[index], ...updates, updatedAt: new Date().toISOString() };
    addAuditLog('update', 'team', id);
    return saveCMSData(data);
};
