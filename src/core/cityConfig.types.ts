export interface Testimonial {
    text: string;
    author: string;
    location?: string;
    rating?: number;
}

export interface FAQ {
    q: string;
    a: string;
}

export interface GeoShape {
    type: string;
    polygon?: string;
    circle?: {
        lat: number;
        lng: number;
        radius: number;
    };
}

export interface CityConfig {
    // ── IDENTITÄT ──
    slug: string;                    // "werdorf", "wetzlar", etc.
    name: string;                    // "Werdorf", "Wetzlar", etc.
    plz: string;                     // "35614", "35578", etc.
    region: string;                  // "Lahn-Dill-Kreis"
    einwohner: string;               // "ca. 5.200"
    entfernungKm: number;            // Entfernung zum Hauptstandort
    fahrzeitMin: number;             // Fahrzeit in Minuten
    geoCoordinates: [number, number]; // [lat, lng]

    // ── VISUELLES PROFIL ──
    heroVariant: 1 | 2 | 3 | 4 | 5 | 6;
    layoutProfile: 'A' | 'B' | 'C' | 'D' | 'E';
    motionProfile: 'cinematic' | 'organic' | 'dynamic' | 'elegant' | 'playful';
    accentShift: number;             // Hue-Shift für individuellen Farbakzent (0-15°)
    imageStyle: 'fullbleed' | 'grid' | 'asymmetric' | 'circular' | 'masked';

    // ── CONTENT-DNA ──
    headline: string;                // Einzigartiger H1
    subheadline: string;             // Einzigartige Subline
    metaTitle: string;               // SEO-Title
    metaDescription: string;         // SEO-Description
    story: string;                   // Lokale Geschichte / Narrativ
    topografie: string;              // Beschreibung der Landschaft
    gartenStil: string;              // Typischer Gartenstil der Region
    wohnstruktur: string;            // Art der Bebauung
    lokalerBezug: string[];          // Lokale Referenzpunkte
    fokusLeistungen: string[];       // Top-3 Leistungen für diesen Ort

    // ── CONVERSION ──
    ctaPrimary: string;              // Individueller CTA-Text
    ctaSecondary: string;
    testimonialLocal?: Testimonial;  // Lokales Testimonial falls vorhanden
    projektAnzahl: number;           // Projekte in diesem Ort

    // ── SEO ──
    faqItems: FAQ[];                 // 5-8 standortspezifische FAQs
    schemaServiceArea: GeoShape;     // ServiceArea-Schema
    internalLinks: string[];         // 4-5 Links zu anderen Standortseiten
}
