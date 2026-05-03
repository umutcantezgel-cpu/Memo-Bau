import { Leaf, Hammer, Droplets, PenTool, Fence } from 'lucide-react';
import { NavigationItem, ServiceItem, PortfolioItem, Testimonial, FaqItem } from '../types';
import React from 'react';

/**
 * Main navigation structure for Memo-BauT GaLaBau website.
 */
export const NAVIGATION: NavigationItem[] = [
  { name: 'Startseite', id: 'home' },
  { name: 'Leistungen', id: 'services' },
  { name: 'Über Uns', id: 'about' },
  { name: 'Kontakt', id: 'contact' },
];

/**
 * GaLaBau Service offerings
 */
export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Gartengestaltung & Planung',
    description:
      'Professionelle Gartenplanung und -gestaltung. Von der ersten Idee bis zur Umsetzung.',
    icon: React.createElement(PenTool, { className: 'w-8 h-8' }),
    features: ['3D-Visualisierung', 'Materialplanung', 'Beleuchtungskonzepte', 'Wasserelemente'],
    imageUrl: '/images/final/service-planning.webp',
  },
  {
    id: 2,
    title: 'Landschaftsbau & Erdarbeiten',
    description:
      'Komplette Geländemodellierung und Erdarbeiten für Ihren Traumgarten.',
    icon: React.createElement(Hammer, { className: 'w-8 h-8' }),
    features: [
      'Geländemodellierung',
      'Drainage',
      'Hangsicherung',
      'Fundamentarbeiten',
    ],
    imageUrl: '/images/final/service-landscaping.webp',
  },
  {
    id: 3,
    title: 'Pflaster- & Terrassenbau',
    description: 'Hochwertige Pflasterarbeiten: Einfahrten, Wege und Terrassen.',
    icon: React.createElement(Fence, { className: 'w-8 h-8' }),
    features: ['Natursteinpflaster', 'Betonstein', 'Holzterrassen', 'Poolumrandungen'],
    imageUrl: '/images/final/service-paving.webp',
  },

  {
    id: 5,
    title: 'Bewässerungssysteme',
    description: 'Automatische Bewässerungsanlagen für sorgloses Gärtnern.',
    icon: React.createElement(Droplets, { className: 'w-8 h-8' }),
    features: ['Sprinkleranlagen', 'Tropfbewässerung', 'Regenwassernutzung', 'Smarte Steuerung'],
    imageUrl: '/images/final/service-water.webp',
  },
  {
    id: 6,
    title: 'Gartenpflege & Wartung',
    description: 'Regelmäßige Gartenpflege, damit Ihr Garten immer in Bestform bleibt.',
    icon: React.createElement(Leaf, { className: 'w-8 h-8' }),
    features: ['Rasenpflege', 'Heckenschnitt', 'Winterservice'],
    imageUrl: '/images/final/products-tools.webp',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: 'privat',
    title: 'Moderner Stadtgarten',
    size: 'large',
    imageUrl: '/images/final/service-planting.webp',
  },
  {
    id: 2,
    category: 'privat',
    title: 'Poollandschaft mit Naturstein',
    size: 'small',
    imageUrl: '/images/final/hero-home.webp',
  },
  {
    id: 3,
    category: 'gewerbe',
    title: 'Firmengelände Außenanlage',
    size: 'small',
    imageUrl: '/images/final/service-landscaping.webp',
  },
  {
    id: 4,
    category: 'privat',
    title: 'Hanggrundstück mit Terrassen',
    size: 'wide',
    imageUrl: '/images/final/service-paving.webp',
  },
  {
    id: 5,
    category: 'oeffentlich',
    title: 'Parkanlage Neugestaltung',
    size: 'tall',
    imageUrl: '/images/final/service-planning.webp',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Yücel Deniz',
    role: 'Privatkunde',
    text: 'Sehr zuverlässige und professionelle Baufirma! Die Arbeiten wurden pünktlich und in hoher Qualität ausgeführt. Die Kommunikation war jederzeit klar und freundlich, und auf Wünsche wurde sofort eingegangen. Das Team arbeitet sauber, organisiert und mit viel Fachwissen. Absolut empfehlenswert.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Angelina P',
    role: 'Privatkunde',
    text: 'Ich bin wirklich froh, mich für Memo-BauT Garten- und Landschaftsbau entschieden zu haben. Von Anfang an war die Kommunikation super angenehm, ehrlich und unkompliziert. Man merkt sofort, dass hier jemand mit echter Erfahrung und Leidenschaft arbeitet.',
    rating: 5,
  },
];

export const FAQS: FaqItem[] = [
  {
    q: 'Wie läuft die Planung ab?',
    a: 'Nach einem kostenlosen Erstgespräch vor Ort erstellen wir einen Entwurf mit 3D-Visualisierung. Nach Ihrer Freigabe beginnen wir mit der Umsetzung.',
  },
  {
    q: 'Wie lange dauert ein typisches Projekt?',
    a: 'Ein Terrassenprojekt dauert ca. 1-2 Wochen, eine komplette Gartengestaltung 3-6 Wochen. Wir nennen Ihnen einen verbindlichen Zeitplan.',
  },
  {
    q: 'Bieten Sie auch Gartenpflege an?',
    a: 'Ja, wir bieten regelmäßige Gartenpflege als Wartungsvertrag an. Flexibel nach Ihren Bedürfnissen.',
  },
  {
    q: 'Wie stellen Sie Qualität sicher?',
    a: 'Wir arbeiten ausschließlich mit eigenen Fachkräften und hochwertigen Materialien nach anerkannten Regeln der Technik. Details zu Gewährleistungsfristen regeln wir individuell im Werkvertrag.',
  },
];

// Company info
export const COMPANY_INFO = {
  name: 'Memo-BauT',
  tagline: 'Garten- und Landschaftsbau',
  slogan: 'Ihr Traumgarten wird Wirklichkeit',
  founded: 2019,
  employees: '15+',
  projects: '50+',
  phone: '+49 176 70162293',
  address: {
    street: 'Falkenstraße 9',
    city: 'Aßlar',
    zip: '35614',
    country: 'Deutschland',
  },
};

export const STATS = [
  { label: 'Jahre Erfahrung', value: '7+' },
  { label: 'Zufriedene Kunden', value: '50+' },
  { label: 'Projekte realisiert', value: '50+' },
  { label: 'Mitarbeiter', value: '15+' },
];
