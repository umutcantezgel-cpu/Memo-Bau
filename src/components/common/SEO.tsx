import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../../core/constants';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    faqs?: { q: string; a: string }[];
    breadcrumbs?: { name: string; url: string }[];
    noindex?: boolean;
    localBusiness?: {
        city: string;
        zip: string;
        lat: number;
        lng: number;
    };
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical = 'https://memobaut.de',
    image = '/images/final/hero-home.webp',
    faqs,
    breadcrumbs,
    noindex = false,
    localBusiness
}) => {
    const siteTitle = `${title} | ${COMPANY_INFO.name}`;

    // Schema.org LocalBusiness Markup
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": localBusiness ? `${COMPANY_INFO.name} - Standort ${localBusiness.city}` : COMPANY_INFO.name,
        "alternateName": "Memo-BauT Garten- und Landschaftsbau",
        "url": canonical,
        "logo": "https://memobaut.de/logo.png",
        "image": "https://memobaut.de/logo.png",
        "description": "Professioneller Garten- und Landschaftsbau in der Region Wetzlar. Seit 2005 realisieren wir anspruchsvolle Außenanlagen – Pflasterarbeiten, Zaunbau, Terrassengestaltung und mehr.",
        "telephone": COMPANY_INFO.phone,
        "email": COMPANY_INFO.email,
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
                "opens": "08:00",
                "closes": "17:00"
            }
        ],
        "priceRange": "€€",
        "areaServed": localBusiness ? localBusiness.city : "Wetzlar, Werdorf, Lahn-Dill-Kreis",
        "sameAs": [
            "https://www.google.com/maps?cid=GOOGLE_CID_HIER_EINTRAGEN"
        ]
    };

    return (
        <Helmet>
            {/* Standard Meta */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            {noindex && <meta name="robots" content="noindex, follow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${canonical}${image}`} />
            <meta property="og:site_name" content={COMPANY_INFO.name} />
            <meta property="og:locale" content="de_DE" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${canonical}${image}`} />

            {/* Structured Data - Base */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>

            {/* Structured Data - FAQ */}
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

            {/* Structured Data - Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": breadcrumbs.map((bc, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "name": bc.name,
                            "item": `${canonical.split('/').slice(0, 3).join('/')}${bc.url}`
                        }))
                    })}
                </script>
            )}
        </Helmet>
    );
};
