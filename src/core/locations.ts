import { CityConfig } from './cityConfig.types';
import { LOCATIONS_PART1 } from './locations/locations.data.part1';
import { LOCATIONS_PART2 } from './locations/locations.data.part2';
import { LOCATIONS_PART3 } from './locations/locations.data.part3';
import { LOCATIONS_PART4 } from './locations/locations.data.part4';

// Combine all premium location configurations into one master array
export const PREMIUM_LOCATIONS: CityConfig[] = [
    ...LOCATIONS_PART1,
    ...LOCATIONS_PART2,
    ...LOCATIONS_PART3,
    ...LOCATIONS_PART4
];

export const MAIN_LOCATION = {
    name: "Werdorf",
    lat: 50.605,
    lng: 8.441
};

// ============================================================================
// ADAPTER FÜR ABWÄRTSKOMPATIBILITÄT WÄHREND DER TRANSITION
// ============================================================================
// Solange LocationOverviewPage oder andere alte Komponenten noch das alte
// 'LocationData' Interface erwarten, mappen wir die neuen CityConfigs on-the-fly.
// (Dies wird entfernt, sobald die Overview-Page das neue CityConfig Interface nutzt.)

export interface LegacyLocationData {
    id: string; // slug for url
    name: string;
    zipCode: string;
    coordinates: { lat: number; lng: number };
    distanceFromHQ: number; // in km
    heroImage: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    introParagraph: string;
    highlights: string[];
}

export const LOCATIONS: LegacyLocationData[] = PREMIUM_LOCATIONS.map(config => ({
    id: config.slug,
    name: config.name,
    zipCode: config.plz,
    coordinates: { lat: config.geoCoordinates[0], lng: config.geoCoordinates[1] },
    distanceFromHQ: config.entfernungKm,
    heroImage: '/images/final/service-landscaping.webp', // Placeholder fallback
    metaTitle: config.metaTitle,
    metaDescription: config.metaDescription,
    h1: config.headline,
    introParagraph: config.story,
    highlights: config.fokusLeistungen
}));
