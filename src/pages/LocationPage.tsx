import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PREMIUM_LOCATIONS } from '../core/locations';
import { SEO } from '../components/common/SEO';
import { LocationSectionRenderer } from '../components/locations/LocationSectionRenderer';
import { InteractiveMap } from '../components/features/InteractiveMap';
import { Section } from '../components/layout/Section';
import { Reveal } from '../components/common/Reveal';

export const LocationPage: React.FC = () => {
    const { cityId } = useParams<{ cityId: string }>();

    const locationConfig = useMemo(() => {
        return PREMIUM_LOCATIONS.find(loc => loc.slug === cityId);
    }, [cityId]);

    // Fallback if URL slug is invalid
    if (!locationConfig) {
        return <Navigate to="/standorte" replace />;
    }

    return (
        <main className="bg-neutral-white min-h-screen">
            {/* 1. Zentrale SEO Injection mit den tiefen CityConfig Daten */}
            <SEO
                title={locationConfig.metaTitle}
                description={locationConfig.metaDescription}
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Standorte', url: '/standorte' },
                    { name: locationConfig.name, url: `/standorte/${locationConfig.slug}` }
                ]}
                faqs={locationConfig.faqItems}
                localBusiness={{
                    city: locationConfig.name,
                    zip: locationConfig.plz,
                    lat: locationConfig.geoCoordinates[0],
                    lng: locationConfig.geoCoordinates[1]
                }}
            />

            {/* Injektion der ServiceArea für Google */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Memo BauT"
                    },
                    "areaServed": {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                            "@type": "GeoCoordinates",
                            "latitude": 50.605,
                            "longitude": 8.441
                        },
                        "geoRadius": 35000
                    },
                    "description": locationConfig.fokusLeistungen.join(", ")
                })
            }} />

            {/* 2. Die zentrale Engine übernimmt das Rendering anhand des Profils A-E */}
            <LocationSectionRenderer config={locationConfig} />

            {/* 3. Globales Footer-Element: Interaktive Map zur Orientierung */}
            <Section bgVariant="offwhite" className="py-16 md:py-24">
                <Reveal animation="fade-in-up">
                    <div className="text-center mb-space-12 max-w-2xl mx-auto">
                        <h3 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-4">Das gesamte Einsatzgebiet</h3>
                        <p className="text-neutral-midgray text-sm">
                            Von {locationConfig.name} bis ins {locationConfig.entfernungKm > 30 ? 'ganze Rhein-Main-Gebiet' : 'gesamte Dilltal'} – wir sind in der Region für Sie stark aufgestellt.
                        </p>
                    </div>
                    <InteractiveMap />
                </Reveal>
            </Section>
        </main>
    );
};
