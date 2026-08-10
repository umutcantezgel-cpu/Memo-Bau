import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../../core/constants';

const SITE_URL = 'https://memobaut.de';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    faqs?: { q: string; a: string }[];
    breadcrumbs?: { name: string; url: string }[];
    noindex?: boolean;
    isHomePage?: boolean;
    localBusiness?: {
        city: string;
        zip: string;
        lat: number;
        lng: number;
    };
    services?: {
        name: string;
        description: string;
    }[];
    aggregateRating?: {
        ratingValue: number;
        reviewCount: number;
    };
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    image = '/images/final/hero-home.webp',
    faqs,
    breadcrumbs,
    noindex = false,
    isHomePage = false,
    localBusiness,
    services,
    aggregateRating
}) => {
    const { pathname } = useLocation();
    const resolvedCanonical = canonical || `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
    const siteTitle = `${title} | ${COMPANY_INFO.name}`;

    // ══════════════════════════════════════════════════════════════
    // SCHEMA 1: LocalBusiness (on every page)
    // ══════════════════════════════════════════════════════════════
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "@id": `${SITE_URL}/#business`,
        "name": localBusiness ? `${COMPANY_INFO.name} - Standort ${localBusiness.city}` : COMPANY_INFO.name,
        "alternateName": "Memo BauT Garten  und Landschaftsbau",
        "url": resolvedCanonical,
        "logo": `${SITE_URL}/logo.png`,
        "image": `${SITE_URL}/images/final/hero-home.webp`,
        "description": `Professioneller Garten- und Landschaftsbau in der Region Wetzlar. Seit ${COMPANY_INFO.founded} realisieren wir anspruchsvolle Außenanlagen – Pflasterarbeiten, Zaunbau, Terrassengestaltung und mehr.`,
        "telephone": COMPANY_INFO.phone,
        "email": COMPANY_INFO.email,
        "founder": {
            "@type": "Person",
            "name": "Mehmet Tezgel"
        },
        "foundingDate": `${COMPANY_INFO.founded}`,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": COMPANY_INFO.address.street,
            "addressLocality": localBusiness ? localBusiness.city : COMPANY_INFO.address.city,
            "addressRegion": "Hessen",
            "postalCode": localBusiness ? localBusiness.zip : COMPANY_INFO.address.zip,
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": localBusiness ? localBusiness.lat : 50.5697,
            "longitude": localBusiness ? localBusiness.lng : 8.4989
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "07:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "08:00",
                "closes": "14:00"
            }
        ],
        "priceRange": "€€",
        "areaServed": localBusiness ? localBusiness.city : "Wetzlar, Aßlar, Lahn-Dill-Kreis, Gießen",
        "knowsAbout": [
            "Gartengestaltung", "Landschaftsbau", "Pflasterarbeiten",
            "Terrassenbau", "Zaunbau", "Natursteinarbeiten",
            "Gartenplanung", "Gartenpflege"
        ],
        "sameAs": [],
        ...(aggregateRating ? {
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": aggregateRating.ratingValue,
                "reviewCount": aggregateRating.reviewCount,
                "bestRating": 5,
                "worstRating": 1
            }
        } : {})
    };

    // ══════════════════════════════════════════════════════════════
    // SCHEMA 2: Organization (only on homepage)
    // ══════════════════════════════════════════════════════════════
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": COMPANY_INFO.name,
        "alternateName": "Memo BauT Garten  und Landschaftsbau",
        "url": SITE_URL,
        "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/logo.png`,
            "width": 250,
            "height": 60
        },
        "founder": {
            "@type": "Person",
            "name": "Mehmet Tezgel",
            "jobTitle": "Inhaber & Geschäftsführer"
        },
        "foundingDate": `${COMPANY_INFO.founded}`,
        "foundingLocation": {
            "@type": "Place",
            "name": "Aßlar, Hessen"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": COMPANY_INFO.phone,
            "contactType": "customer service",
            "availableLanguage": ["German", "Turkish"],
            "areaServed": "DE"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": COMPANY_INFO.address.street,
            "addressLocality": COMPANY_INFO.address.city,
            "addressRegion": "Hessen",
            "postalCode": COMPANY_INFO.address.zip,
            "addressCountry": "DE"
        },
        "sameAs": []
    };

    // ══════════════════════════════════════════════════════════════
    // SCHEMA 3: WebSite + SearchAction (only on homepage)
    // ══════════════════════════════════════════════════════════════
    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "name": COMPANY_INFO.name,
        "url": SITE_URL,
        "publisher": { "@id": `${SITE_URL}/#organization` },
        "inLanguage": "de-DE"
    };

    return (
        <Helmet>
            <html lang="de" />
            <meta charSet="utf-8" />
            {/* ─── Standard Meta ─── */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={resolvedCanonical} />
            {noindex && <meta name="robots" content="noindex, follow" />}

            {/* ─── Open Graph / Facebook ─── */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={resolvedCanonical} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${SITE_URL}${image}`} />
            <meta property="og:site_name" content={COMPANY_INFO.name} />
            <meta property="og:locale" content="de_DE" />

            {/* ─── Twitter ─── */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${SITE_URL}${image}`} />

            {/* ─── Schema: LocalBusiness (always) ─── */}
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>

            {/* ─── Schema: Organization + WebSite (homepage only) ─── */}
            {isHomePage && (
                <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
                </script>
            )}
            {isHomePage && (
                <script type="application/ld+json">
                    {JSON.stringify(webSiteSchema)}
                </script>
            )}

            {/* ─── Schema: FAQ ─── */}
            {faqs && faqs.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map((faq) => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a
                            }
                        }))
                    })}
                </script>
            )}

            {/* ─── Schema: Breadcrumbs ─── */}
            {breadcrumbs && breadcrumbs.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": breadcrumbs.map((bc, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "name": bc.name,
                            "item": `${SITE_URL}${bc.url}`
                        }))
                    })}
                </script>
            )}

            {/* ─── Schema: Service (for service pages) ─── */}
            {services && services.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": services.map((service, idx) => ({
                            "@type": "ListItem",
                            "position": idx + 1,
                            "item": {
                                "@type": "Service",
                                "name": service.name,
                                "description": service.description,
                                "provider": { "@id": `${SITE_URL}/#business` }
                            }
                        }))
                    })}
                </script>
            )}
        </Helmet>
    );
};
