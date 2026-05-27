import { Hammer, Fence } from 'lucide-react';
import { NavigationItem, ServiceItem, PortfolioItem, Testimonial, FaqItem } from '../types';
import React from 'react';

/**
 * Main navigation structure for the application.
 * Used in Header and Footer components.
 */
export const NAVIGATION: NavigationItem[] = [
    { name: 'Startseite', id: 'home' },
    { name: 'Leistungen', id: 'services' },
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
        title: 'Garten Neuanlage und Erdarbeiten',
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
        name: 'Yücel Deniz',
        role: 'Kunde',
        text: 'Sehr zuverlässige und professionelle Baufirma! Die Arbeiten wurden pünktlich und in hoher Qualität ausgeführt. Die Kommunikation war jederzeit klar und freundlich, und auf Wünsche wurde sofort eingegangen. Das Team arbeitet sauber, organisiert und mit viel Fachwissen. Absolut empfehlenswert.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Angelina P',
        role: 'Kunde',
        text: `Ich bin wirklich froh, mich für Memo BauT Garten  und Landschaftsbau entschieden zu haben. Von Anfang an war die Kommunikation super angenehm, ehrlich und unkompliziert. Man merkt sofort, dass hier jemand mit echter Erfahrung und Leidenschaft arbeitet.

Die Arbeit wurde schnell, zuverlässig und sehr sauber ausgeführt. Jetzt fühle ich mich in meinem Garten richtig wohl und schaue mir das Ergebnis jedes Mal gerne an. Alles wurde genauso umgesetzt, wie ich es mir vorgestellt habe, und die Absprachen waren jederzeit klar und zuverlässig.

Für mich steht fest: Wenn ich wieder etwas im Garten machen lasse, dann definitiv wieder hier. Eine klare Empfehlung und ein großes Dankeschön für die tolle Arbeit!`,
        rating: 5,
    },
];

export const FAQS: FaqItem[] = [

    {
        q: 'Wie stellen Sie Qualität sicher?',
        a: 'Wir arbeiten ausschließlich mit eigenen Fachkräften und langjährigen Partnern. Alle Arbeiten werden nach anerkannten Regeln der Technik und den geltenden DIN Normen ausgeführt.',
    },
];

// Memo-BauT GaLaBau company info
export const COMPANY_INFO = {
    name: 'Memo BauT',
    owner: 'Inhaber: Mehmet Tezgel',
    tagline: 'Exklusive Gartenkunst',
    slogan: 'Räume für die Sinne. Gärten für die Ewigkeit.',
    founded: 2019,
    employees: '15+',
    projects: '50+',
    region: 'Wetzlar • Gießen • Frankfurt',
    phone: '0176 70162293',
    email: 'info@memo-baut.de',
    address: {
        street: 'Falkenstraße 9',
        city: 'Aßlar',
        zip: '35614',
        country: 'Deutschland',
    },
    openingHours: 'Mo-Fr 07:30 - 18:00', // Assuming typical hours, or just 'Öffnet Mo um 07:30'
    description: 'Memo BauT ist Ihr erfahrener Fachbetrieb für Garten  und Landschaftsbau in Aßlar und der Region Wetzlar. Wir planen und gestalten Ihren Traumgarten – von der Terrassenanlage über Pflasterarbeiten bis hin zur kompletten Gartengestaltung. Als gelernter Maurer mit langjähriger Erfahrung bieten wir handwerkliche Präzision und zuverlässige Ausführung für Privat  und Gewerbekunden. Unsere Leistungen umfassen: Pflasterarbeiten, Terrassenbau, Mauerwerk und individuelle Gartengestaltung. Kontaktieren Sie uns für eine kostenlose Erstberatung – wir freuen uns auf Ihr Projekt!',
};

export const STATS = [
    { label: 'Jahre Exzellenz', value: '7+' },
    { label: 'Realisierte Träume', value: '50+' },
    { label: 'Design Awards', value: '12' },
    { label: 'Experten-Team', value: '25' },
];
