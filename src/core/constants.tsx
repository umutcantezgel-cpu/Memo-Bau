import { Leaf, Hammer, Droplets, PenTool, TreePine, Fence } from 'lucide-react';
import { NavigationItem, ServiceItem, PortfolioItem, Testimonial, FaqItem } from '../types';
import React from 'react';

/**
 * Main navigation structure for the application.
 * Used in Header and Footer components.
 */
export const NAVIGATION: NavigationItem[] = [
    { name: 'Startseite', id: 'home' },
    { name: 'Leistungen', id: 'services' },
    { name: 'Projekte', id: 'gallery' },
    { name: 'Standorte', id: 'standorte' },
    { name: 'Ratgeber', id: 'ratgeber' },
    { name: 'Über Uns', id: 'about' },
    { name: 'Kontakt', id: 'contact' },
];

/**
 * Service offerings for GaLaBau (Garten- und Landschaftsbau)
 */
export const SERVICES: ServiceItem[] = [
    {
        id: 1,
        title: 'Gartendesign & Architektur',
        description:
            'Visionäre Gartenplanung, die Ästhetik und Funktionalität vereint. Wir konzipieren Außenräume als Erweiterung Ihrer Wohnkultur – von der ersten Skizze bis zur finalen Inszenierung.',
        icon: React.createElement(PenTool, { className: 'w-8 h-8' }),
        features: ['High-End 3D-Visualisierung', 'Kuratiertes Pflanzdesign', 'Atmosphärische Lichtkonzepte', 'Exklusive Wasserspiele'],
        imageUrl: '/images/final/service-planning.webp',
    },
    {
        id: 2,
        title: 'Landschaftsbau & Topographie',
        description:
            'Präzise Geländemodellierung für anspruchsvolle Grundstücke. Wir formen das Fundament Ihrer Vision mit schwerem Gerät und feinem Gespür für die natürliche Umgebung.',
        icon: React.createElement(Hammer, { className: 'w-8 h-8' }),
        features: [
            'Niveau-Modellierung',
            'Nachhaltige Entwässerung',
            'Architektonische Hangsicherung',
            'Fundamentbau',
        ],
        imageUrl: '/images/final/service-landscaping.webp',
    },
    {
        id: 3,
        title: 'Stonework & Terrassen',
        description: 'Meisterhafte Pflasterarbeiten mit Naturstein und Keramik. Wir schaffen zeitlose Wege und Plätze, die Generationen überdauern.',
        icon: React.createElement(Fence, { className: 'w-8 h-8' }),
        features: ['Naturstein-Unikate', 'Großformat-Keramik', 'Edle Holzdecks', 'Lounge-Areale'],
        imageUrl: '/images/final/service-paving.webp',
    },
    {
        id: 4,
        title: 'Exklusive Bepflanzung',
        description:
            'Botanische Expertise für lebendige Gärten. Wir selektieren Solitärgehölze und Staudenkompositionen, die zu jeder Jahreszeit faszinieren.',
        icon: React.createElement(TreePine, { className: 'w-8 h-8' }),
        features: [
            'Premium Rollrasen',
            'Solitärbaum-Pflanzung',
            'Sichtschutz-Architektur',
            'Ganzjahres-Blütenkonzepte',
        ],
        imageUrl: '/images/final/service-planting.webp',
    },
    {
        id: 5,
        title: 'Smart Garden & Wasser',
        description:
            'Technologie trifft Natur. Automatisierte Bewässerung und intelligente Steuerungssysteme für den pflegeleichten Traumgarten.',
        icon: React.createElement(Droplets, { className: 'w-8 h-8' }),
        features: ['Unterflur-Bewässerung', 'App-Steuerung', 'Zisternensysteme', 'Ressourceneffizienz'],
        imageUrl: '/images/final/service-water.webp',
    },
    {
        id: 6,
        title: 'Garten-Concierge',
        description: 'Werterhaltende Pflege für Ihre grüne Investition. Unser Expertenteam sorgt dafür, dass Ihr Garten mit den Jahren immer schöner wird.',
        icon: React.createElement(Leaf, { className: 'w-8 h-8' }),
        features: ['Formgehölzschnitt', 'Rasen-Aerifizieren', 'Vital-Düngung', 'Saisonale Pflegekur'],
        imageUrl: '/images/final/products-tools.webp',
    },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    {
        id: 1,
        category: 'privat',
        title: 'Terrassenanlage mit Holzpergola und Feinsteinzeug',
        size: 'large',
        imageUrl: '/images/final/gallery-01.webp',
        images: [
            '/images/final/gallery-01.webp',
            '/images/final/gallery-02.webp',
        ],
    },
    {
        id: 2,
        category: 'privat',
        title: 'Moderne Terrassenüberdachung mit Glasschiebewänden',
        size: 'large',
        imageUrl: '/images/final/gallery-04.webp',
        images: [
            '/images/final/gallery-04.webp',
            '/images/final/gallery-07.webp',
            '/images/final/gallery-08.webp',
            '/images/final/gallery-09.webp',
            '/images/final/gallery-10.webp',
        ],
    },
    {
        id: 3,
        category: 'privat',
        title: 'Erhöhte Natursteinterrasse mit Blockstufen',
        size: 'tall',
        imageUrl: '/images/final/gallery-06.webp',
    },
    {
        id: 4,
        category: 'privat',
        title: 'Gepflasterter Sitzplatz im Garten',
        size: 'wide',
        imageUrl: '/images/final/gallery-05.webp',
    },
    {
        id: 5,
        category: 'privat',
        title: 'Eingangsbereich und Zuwegung mit Rechteckpflaster',
        size: 'wide',
        imageUrl: '/images/final/gallery-13.webp',
        images: [
            '/images/final/gallery-13.webp',
            '/images/final/gallery-12.webp',
        ],
    },
    {
        id: 6,
        category: 'privat',
        title: 'Rollrasenverlegung mit modernem Sichtschutzzaun',
        size: 'wide',
        imageUrl: '/images/final/gallery-11.webp',
    },
    {
        id: 7,
        category: 'privat',
        title: 'Garten-Neuanlage und Erdarbeiten',
        size: 'wide',
        imageUrl: '/images/final/gallery-14.webp',
    },
    {
        id: 8,
        category: 'gewerbe',
        title: 'Maschinentransport für Erdarbeiten',
        size: 'tall',
        imageUrl: '/images/final/gallery-03.webp',
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Familie von Schneider',
        role: 'Privatier',
        text: 'Memo BauT hat nicht nur einen Garten gebaut, sondern einen echten Rückzugsort geschaffen. Die Balance zwischen Architektur und Natur ist meisterhaft gelungen.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Dr. Michael Weber',
        role: 'Architekt BDA',
        text: 'Als Architekt lege ich Wert auf Präzision. Das Team von Memo BauT hat meine hohen Ansprüche an Detailgenauigkeit und Materialqualität übertroffen.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Geschäftsleitung Müller Automotive',
        role: 'Corporate Real Estate',
        text: 'Unsere neue Außenanlage repräsentiert nun endlich die Qualität unserer Marke. Exzellente Abwicklung, absolut termintreu und diskret.',
        rating: 5,
    },
];

export const FAQS: FaqItem[] = [
    {
        q: 'Wie verläuft der Design-Prozess?',
        a: 'Jedes Projekt beginnt mit einer persönlichen Vor-Ort-Analyse. Wir hören zu und entwickeln daraufhin ein maßgeschneidertes Konzept mit Materialmustern und 3D-Visualisierung.',
    },
    {
        q: 'Welche Projektgrößen realisieren Sie?',
        a: 'Unser Fokus liegt auf kompletten Neugestaltungen und hochwertigen Teilbereichen. Wir realisieren Projekte ab einem Investitionsvolumen von ca. 10.000€ bis hin zu Großprojekten.',
    },
    {
        q: 'Bieten Sie Pflegeverträge an?',
        a: 'Selbstverständlich. Um den Wert und die Schönheit Ihrer Anlage langfristig zu sichern, bieten wir individuell abgestimmte "Concierge"-Pflegepakete an.',
    },
    {
        q: 'Wie stellen Sie Qualität sicher?',
        a: 'Wir arbeiten ausschließlich mit eigenen Fachkräften und langjährigen Partnern. Alle Arbeiten werden nach anerkannten Regeln der Technik und den geltenden DIN-Normen ausgeführt.',
    },
];

// Memo BauT GaLaBau company info
export const COMPANY_INFO = {
    name: 'Memo BauT',
    owner: 'Inhaber: Mehmet Tezgel',
    tagline: 'Exklusive Gartenkunst',
    slogan: 'Räume für die Sinne. Gärten für die Ewigkeit.',
    founded: 2019,
    employees: '15+',
    projects: '50+',
    region: 'Wetzlar • Gießen • Frankfurt',
    phone: '+49 176 70162293',
    email: 'info@memo-baut.de',
    address: {
        street: 'Falkenstraße 9',
        city: 'Werdorf',
        zip: '35614',
        country: 'Deutschland',
    },
};

export const STATS = [
    { label: 'Jahre Exzellenz', value: '7+' },
    { label: 'Realisierte Träume', value: '50+' },
    { label: 'Design Awards', value: '12' },
    { label: 'Experten-Team', value: '25' },
];
