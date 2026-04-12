import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PREMIUM_LOCATIONS } from '../core/locations';
import { COMPANY_INFO } from '../core/constants';
import { SEO } from '../components/common/SEO';
import { LocationSectionRenderer } from '../components/locations/LocationSectionRenderer';
import { InteractiveMap } from '../components/features/InteractiveMap';
import { Section } from '../components/layout/Section';
import { Reveal } from '../components/common/Reveal';
import { Star, MapPin, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const LocationPage: React.FC = () => {
    const { cityId } = useParams<{ cityId: string }>();

    const locationConfig = useMemo(() => {
        return PREMIUM_LOCATIONS.find(loc => loc.slug === cityId);
    }, [cityId]);

    // Resolve internal link targets
    const linkedLocations = useMemo(() => {
        if (!locationConfig) return [];
        return locationConfig.internalLinks
            .map(slug => PREMIUM_LOCATIONS.find(loc => loc.slug === slug))
            .filter(Boolean);
    }, [locationConfig]);

    // Fallback if URL slug is invalid
    if (!locationConfig) {
        return <Navigate to="/standorte" replace />;
    }

    return (
        <main className="bg-neutral-white min-h-screen">
            {/* ═══ 1. SEO HEAD INJECTION ═══ */}
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

            {/* ═══ 2. SERVICE AREA SCHEMA ═══ */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": `Garten- & Landschaftsbau ${locationConfig.name}`,
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": COMPANY_INFO.name,
                        "telephone": COMPANY_INFO.phone,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": COMPANY_INFO.address.street,
                            "addressLocality": COMPANY_INFO.address.city,
                            "postalCode": COMPANY_INFO.address.zip,
                            "addressCountry": "DE"
                        }
                    },
                    "areaServed": {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                            "@type": "GeoCoordinates",
                            "latitude": locationConfig.geoCoordinates[0],
                            "longitude": locationConfig.geoCoordinates[1]
                        },
                        "geoRadius": locationConfig.schemaServiceArea?.circle?.radius || 5000
                    },
                    "serviceType": locationConfig.fokusLeistungen,
                    "description": locationConfig.metaDescription
                })
            }} />

            {/* ═══ 3. REVIEW SCHEMA (if testimonial exists) ═══ */}
            {locationConfig.testimonialLocal && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Review",
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": locationConfig.testimonialLocal.rating || 5,
                            "bestRating": 5
                        },
                        "author": {
                            "@type": "Person",
                            "name": locationConfig.testimonialLocal.author
                        },
                        "reviewBody": locationConfig.testimonialLocal.text,
                        "itemReviewed": {
                            "@type": "LocalBusiness",
                            "name": `${COMPANY_INFO.name} – ${locationConfig.name}`
                        }
                    })
                }} />
            )}

            {/* ═══ 4. VISIBLE BREADCRUMBS ═══ */}
            <Breadcrumbs items={[
                { label: 'Standorte', href: '/standorte' },
                { label: locationConfig.name }
            ]} />

            {/* ═══ 5. MAIN CONTENT ENGINE ═══ */}
            <LocationSectionRenderer config={locationConfig} />

            {/* ═══ 6. LOCAL TESTIMONIAL ═══ */}
            {locationConfig.testimonialLocal && (
                <Section bgVariant="white" className="py-16 md:py-24">
                    <Reveal animation="fade-in-up">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="flex justify-center gap-1 mb-space-6">
                                {[...Array(locationConfig.testimonialLocal.rating || 5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-accent-base fill-accent-base" />
                                ))}
                            </div>
                            <blockquote className="text-lg md:text-xl font-medium text-neutral-darkgray leading-relaxed italic mb-space-6">
                                „{locationConfig.testimonialLocal.text}"
                            </blockquote>
                            <div className="flex items-center justify-center gap-2 text-sm text-neutral-midgray">
                                <MapPin className="w-4 h-4 text-accent-base" />
                                <span className="font-semibold">{locationConfig.testimonialLocal.author}</span>
                                {locationConfig.testimonialLocal.location && (
                                    <span>— {locationConfig.testimonialLocal.location}</span>
                                )}
                            </div>
                        </div>
                    </Reveal>
                </Section>
            )}

            {/* ═══ 7. LOKALER BEZUG & TRUST SIGNALS ═══ */}
            <Section bgVariant="offwhite" className="py-16 md:py-20">
                <Reveal animation="fade-in-up">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-12">
                            {/* Lokale Referenzpunkte */}
                            <div>
                                <h3 className="text-h4 font-sans font-bold text-neutral-darkgray mb-space-6">
                                    Unser Bezug zu {locationConfig.name}
                                </h3>
                                <p className="text-neutral-midgray text-sm mb-space-4">
                                    Wir kennen {locationConfig.name} ({locationConfig.plz}) im {locationConfig.region} mit seinen rund {locationConfig.einwohner} Einwohnern und den lokalen Gegebenheiten aus erster Hand.
                                </p>
                                <ul className="space-y-2">
                                    {locationConfig.lokalerBezug.map((ort, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-neutral-darkgray">
                                            <MapPin className="w-4 h-4 text-accent-base shrink-0" />
                                            {ort}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Trust Signals */}
                            <div>
                                <h3 className="text-h4 font-sans font-bold text-neutral-darkgray mb-space-6">
                                    Warum Memo BauT in {locationConfig.name}?
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-neutral-darkgray">
                                        <CheckCircle className="w-5 h-5 text-primary-base shrink-0 mt-0.5" />
                                        <span><strong>{locationConfig.projektAnzahl}+ realisierte Projekte</strong> im Raum {locationConfig.name}</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-neutral-darkgray">
                                        <CheckCircle className="w-5 h-5 text-primary-base shrink-0 mt-0.5" />
                                        <span>Nur <strong>{locationConfig.entfernungKm} km</strong> von unserem Standort entfernt ({locationConfig.fahrzeitMin} Min. Fahrzeit)</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-neutral-darkgray">
                                        <CheckCircle className="w-5 h-5 text-primary-base shrink-0 mt-0.5" />
                                        <span>Kostenlose Erstberatung direkt in {locationConfig.name}</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-neutral-darkgray">
                                        <CheckCircle className="w-5 h-5 text-primary-base shrink-0 mt-0.5" />
                                        <span>Fokus-Leistungen: {locationConfig.fokusLeistungen.join(', ')}</span>
                                    </li>
                                </ul>
                                <div className="mt-space-8">
                                    <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] bg-primary-base text-neutral-white font-semibold text-sm hover:bg-primary-dark transition-colors">
                                        <Phone className="w-4 h-4" />
                                        Jetzt Beratung in {locationConfig.name} sichern
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </Section>

            {/* ═══ 8. CROSS-LINKS: Auch tätig in... ═══ */}
            {linkedLocations.length > 0 && (
                <Section bgVariant="white" className="py-12 md:py-16">
                    <Reveal animation="fade-in-up">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-h4 font-sans font-bold text-neutral-darkgray mb-space-6 text-center">
                                Auch in der Nähe von {locationConfig.name} tätig
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-space-4">
                                {linkedLocations.map((loc) => (
                                    loc && (
                                        <Link
                                            key={loc.slug}
                                            to={`/standorte/${loc.slug}`}
                                            className="group p-space-4 rounded-[var(--radius-md)] border border-neutral-lightgray/30 hover:border-accent-base/40 hover:shadow-elevation-2 transition-all duration-300 bg-neutral-offwhite"
                                        >
                                            <div className="flex items-center gap-2 mb-1">
                                                <MapPin className="w-4 h-4 text-accent-base" />
                                                <span className="font-bold text-sm text-neutral-darkgray group-hover:text-accent-base transition-colors">{loc.name}</span>
                                            </div>
                                            <p className="text-xs text-neutral-midgray">{loc.plz} · {loc.entfernungKm} km</p>
                                            <div className="flex items-center gap-1 mt-2 text-xs text-accent-base opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span>Mehr erfahren</span>
                                                <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </Section>
            )}

            {/* ═══ 9. KARTE ═══ */}
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
