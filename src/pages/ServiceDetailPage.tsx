import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICE_DETAILS } from '../core/services.data';
import { COMPANY_INFO } from '../core/constants';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Section } from '../components/layout/Section';
import { Reveal } from '../components/common/Reveal';
import { PageHero } from '../components/common/PageHero';
import { CheckCircle, ArrowRight, Phone, MessageCircle, ChevronDown } from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
    const { serviceSlug } = useParams<{ serviceSlug: string }>();

    const service = useMemo(() => {
        return SERVICE_DETAILS.find(s => s.slug === serviceSlug);
    }, [serviceSlug]);

    // Link to next/prev service for internal linking
    const otherServices = useMemo(() => {
        if (!service) return [];
        return SERVICE_DETAILS.filter(s => s.slug !== service.slug).slice(0, 3);
    }, [service]);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <main className="bg-neutral-white min-h-screen">
            {/* ═══ SEO HEAD ═══ */}
            <SEO
                title={service.metaTitle.replace(' | Memo BauT', '')}
                description={service.metaDescription}
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Leistungen', url: '/services' },
                    { name: service.breadcrumbLabel, url: `/leistungen/${service.slug}` }
                ]}
                faqs={service.faqs}
                services={[{ name: service.title, description: service.metaDescription }]}
            />

            {/* ═══ SERVICE SCHEMA ═══ */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": service.title,
                    "description": service.metaDescription,
                    "provider": {
                        "@type": "HomeAndConstructionBusiness",
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
                        "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 50.605, "longitude": 8.441 },
                        "geoRadius": 35000
                    },
                    "serviceType": service.title
                })
            }} />

            {/* ═══ BREADCRUMBS ═══ */}
            <Breadcrumbs items={[
                { label: 'Leistungen', href: '/services' },
                { label: service.breadcrumbLabel }
            ]} />

            {/* ═══ HERO ═══ */}
            <PageHero
                title={service.title}
                subtitle="Unsere Leistung im Detail"
                description={service.metaDescription}
                backgroundImage={service.heroImage}
            />

            {/* ═══ INTRO ═══ */}
            <Section bgVariant="white" className="py-16 md:py-20">
                <Reveal animation="fade-in-up">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl leading-relaxed text-neutral-darkgray font-normal">
                            {service.intro}
                        </p>
                    </div>
                </Reveal>
            </Section>

            {/* ═══ DETAIL BLOCKS ═══ */}
            {service.detailBlocks.map((block, idx) => (
                <Section bgVariant={idx % 2 === 0 ? 'offwhite' : 'white'} key={idx} className="py-14 md:py-20">
                    <Reveal animation="fade-in-up">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-h3 md:text-h2 font-sans font-bold text-neutral-darkgray mb-space-6 tracking-tight text-balance">
                                {block.heading}
                            </h2>
                            <p className="text-body text-neutral-midgray leading-body mb-space-6">
                                {block.text}
                            </p>
                            {block.listItems && (
                                <ul className="space-y-3 mt-space-4">
                                    {block.listItems.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-darkgray">
                                            <CheckCircle className="w-5 h-5 text-primary-base shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </Reveal>
                </Section>
            ))}

            {/* ═══ MATERIALIEN (if present) ═══ */}
            {service.materialien && service.materialien.length > 0 && (
                <Section bgVariant="white" className="py-14 md:py-20">
                    <Reveal animation="fade-in-up">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-10 text-center">
                                Materialien, die wir verarbeiten
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-6">
                                {service.materialien.map((mat, i) => (
                                    <div key={i} className="p-space-6 rounded-[var(--radius-lg)] border border-neutral-lightgray/30 bg-neutral-offwhite">
                                        <h3 className="font-bold text-sm text-neutral-darkgray mb-2">{mat.name}</h3>
                                        <p className="text-xs text-neutral-midgray leading-relaxed">{mat.beschreibung}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </Section>
            )}

            {/* ═══ ABLAUF ═══ */}
            <Section bgVariant="offwhite" className="py-16 md:py-24">
                <Reveal animation="fade-in-up">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-12 text-center">
                            So läuft ein Projekt mit uns
                        </h2>
                        <div className="space-y-0">
                            {service.ablauf.map((step, i) => (
                                <div key={i} className="flex gap-space-6 relative">
                                    {/* Timeline Line */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-primary-base text-neutral-white flex items-center justify-center font-bold text-sm shrink-0 z-10">
                                            {i + 1}
                                        </div>
                                        {i < service.ablauf.length - 1 && (
                                            <div className="w-px flex-1 bg-neutral-lightgray my-1" />
                                        )}
                                    </div>
                                    {/* Content */}
                                    <div className="pb-space-8">
                                        <h3 className="font-bold text-neutral-darkgray mb-1">{step.schritt}</h3>
                                        <p className="text-sm text-neutral-midgray leading-relaxed">{step.beschreibung}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </Section>

            {/* ═══ FAQS ═══ */}
            <Section bgVariant="white" className="py-16 md:py-24">
                <Reveal animation="fade-in-up">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-10 text-center">
                            Häufige Fragen zu {service.breadcrumbLabel}
                        </h2>
                        <div className="space-y-space-4">
                            {service.faqs.map((faq, i) => (
                                <details key={i} className="group border border-neutral-lightgray/30 rounded-[var(--radius-md)] overflow-hidden">
                                    <summary className="flex items-center justify-between gap-4 p-space-6 cursor-pointer hover:bg-neutral-offwhite transition-colors">
                                        <span className="font-semibold text-sm text-neutral-darkgray pr-4">{faq.q}</span>
                                        <ChevronDown className="w-5 h-5 text-neutral-midgray shrink-0 group-open:rotate-180 transition-transform duration-300" />
                                    </summary>
                                    <div className="px-space-6 pb-space-6 text-sm text-neutral-midgray leading-relaxed">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </Section>

            {/* ═══ CTA BANNER ═══ */}
            <Section bgVariant="offwhite" className="py-16 md:py-20">
                <Reveal animation="scale-in">
                    <div className="max-w-3xl mx-auto text-center bg-primary-base rounded-[var(--radius-xl)] p-space-12 md:p-space-16 relative overflow-hidden shadow-elevation-3">
                        <div className="absolute top-0 right-0 w-full h-full bg-neutral-white opacity-[0.03] mix-blend-overlay" />
                        <h2 className="text-h3 md:text-h2 font-sans font-bold text-neutral-white mb-space-4 relative z-10 text-balance">
                            {service.ctaText}
                        </h2>
                        <p className="text-neutral-white/80 text-sm mb-space-8 relative z-10">
                            Kostenlose Erstberatung. Festpreisangebot. Keine versteckten Kosten.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-[var(--radius-md)] bg-accent-base text-neutral-darkgray font-bold text-sm hover:bg-accent-light transition-colors"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Online anfragen
                            </Link>
                            <a
                                href={`tel:${COMPANY_INFO.phone}`}
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-[var(--radius-md)] border-2 border-neutral-white/30 text-neutral-white font-bold text-sm hover:bg-neutral-white/10 transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                Direkt anrufen
                            </a>
                        </div>
                    </div>
                </Reveal>
            </Section>

            {/* ═══ RELATED SERVICES ═══ */}
            <Section bgVariant="white" className="py-12 md:py-16">
                <Reveal animation="fade-in-up">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-h4 font-sans font-bold text-neutral-darkgray mb-space-8 text-center">
                            Weitere Leistungen
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-4">
                            {otherServices.map(other => (
                                <Link
                                    key={other.slug}
                                    to={`/leistungen/${other.slug}`}
                                    className="group p-space-6 rounded-[var(--radius-lg)] border border-neutral-lightgray/30 hover:border-accent-base/40 hover:shadow-elevation-2 transition-all duration-300 bg-neutral-offwhite"
                                >
                                    <h4 className="font-bold text-sm text-neutral-darkgray group-hover:text-accent-base transition-colors mb-2">
                                        {other.title}
                                    </h4>
                                    <div className="flex items-center gap-1 text-xs text-accent-base opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span>Details ansehen</span>
                                        <ArrowRight className="w-3 h-3" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </Section>
        </main>
    );
};
