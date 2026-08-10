import React from 'react';
import { ArrowRight, Ruler, ShieldCheck, Sprout, Sparkles, Award } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { SERVICES } from '../core/constants';
import { Button } from '../components/common/Button';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { SEO } from '../components/common/SEO';
import { Section } from '../components/layout/Section';

// Extended descriptions for each service
const SERVICE_DETAILS: Record<number, string> = {
    1: 'Von der ersten Idee bis zum fertigen Konzept begleiten wir Sie durch jeden Schritt. Unsere 3D-Visualisierungen geben Ihnen bereits vor dem ersten Spatenstich einen realistischen Eindruck Ihres zukünftigen Gartens. Wir berücksichtigen dabei Bodenbeschaffenheit, Sonnenverlauf und Ihre persönlichen Wünsche – für ein stimmiges Gesamtkonzept, das Architektur und Natur harmonisch verbindet.',
    2: 'Ob Hanglage, Senke oder unebenes Terrain – wir modellieren Ihr Grundstück nach Maß. Mit modernem Gerät und jahrelanger Erfahrung schaffen wir die perfekte Basis für alle weiteren Arbeiten. Professionelle Drainage-Systeme sorgen für optimale Entwässerung, während unsere Hangsicherungen mit Naturstein oder Gabionen auch schwierige Geländestrukturen dauerhaft stabilisieren.',
    3: 'Jede Fläche verdient das passende Material. Ob eleganter Naturstein aus Portugal, robuster Granit aus der Region oder warme Holzdielen für die Terrasse – wir verarbeiten ausschließlich erstklassige Materialien mit höchsten Qualitätsstandards. Unsere Pflastermeister stehen für präzise Verlegung und fachgerechten Unterbau nach bewährten Richtlinien.',
    5: 'Moderne Bewässerungstechnik spart Zeit, Wasser und Geld. Wir installieren vollautomatische Systeme mit Bodenfeuchtesensoren und App-Steuerung, die Ihren Garten auch während Ihres Urlaubs optimal versorgen. Zusätzlich integrieren wir auf Wunsch Zisternen zur Regenwassernutzung – nachhaltig und kosteneffizient für die kommenden Jahre.',
    6: 'Ein Garten ist niemals fertig, er entwickelt sich stetig weiter. Mit unseren Wartungsverträgen bleibt Ihr Rasen dicht, die Beete gepflegt und die Anlage in Bestform. Von der Frühjahrskur über den sommerlichen Formschnitt bis zur Wintervorbereitung – wir kümmern uns um alle saisonalen Arbeiten, damit Sie Ihren Garten einfach nur genießen können.',
};

// Map service IDs to detail page slugs
const SERVICE_SLUG_MAP: Record<number, string> = {
    1: 'gartendesign',
    2: 'landschaftsbau',
    3: 'pflasterarbeiten',
    5: 'bewaesserung',
    6: 'gartenpflege',
};

export const ServicesPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="bg-neutral-white min-h-screen">
            <SEO
                title="Leistungen & Expertise"
                description="Unser Leistungsspektrum: Visionäres Gartendesign, präziser Landschaftsbau, Stonework und intelligente Bewässerung. Handwerkskunst für Ihren Außenbereich."
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Leistungen', url: '/services' }
                ]}
                services={SERVICES.map(s => ({
                    name: s.title,
                    description: s.description
                }))}
            />


            <PageHero
                title="Handwerk & Präzision"
                subtitle="Unsere Leistungen"
                description="Wir verstehen unser Handwerk als Kunstform. Mit Leidenschaft für Details und Respekt vor der Natur gestalten wir einzigartige Außenanlagen."
                backgroundImage="/images/final/services-hero.webp"
            />

            <Section bgVariant="white">
                {/* Introduction Text */}
                <Reveal animation="fade-in-up">
                    <div className="max-w-3xl mx-auto text-center mb-space-20">
                        <h1 className="text-h2 md:text-h1 font-sans font-bold text-neutral-darkgray mb-space-6 tracking-h2 text-balance">Gärten mit Charakter</h1>
                        <p className="text-body text-neutral-midgray leading-body font-normal">
                            Jeder Garten ist ein Unikat. Unser Anspruch ist es, die Architektur Ihres Hauses mit der Natur zu verbinden.
                            Dabei setzen wir auf langlebige Materialien und bewährte Bautechniken.
                        </p>
                    </div>
                </Reveal>

                {/* Services List */}
                <div className="space-y-space-24">
                    {SERVICES.map((service, idx) => (
                        <Reveal key={service.id} animation="fade-in-up">
                            <div
                                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24 group`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2 relative">
                                    <div
                                        className={`absolute inset-0 bg-neutral-offwhite transform ${idx % 2 === 0 ? '-translate-x-6 -translate-y-6' : 'translate-x-6 translate-y-6'} z-0 transition-transform duration-[var(--default-transition-duration)] group-hover:translate-x-0 group-hover:translate-y-0`}
                                    ></div>
                                    <div className="aspect-[4/3] overflow-hidden relative z-10 shadow-elevation-2 rounded-[var(--radius-lg)]">
                                        <div className="absolute inset-0 bg-primary-base/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-[var(--default-transition-duration)] z-20"></div>
                                        <img
                                            src={service.imageUrl}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2">
                                    <div className="flex items-center mb-space-6">
                                        <span className="text-accent-base text-xs font-bold uppercase tracking-widest relative whitespace-nowrap inline-block">
                                            Service 0{idx + 1}
                                            <span className="absolute -bottom-2 left-0 w-8 h-px bg-accent-base"></span>
                                        </span>
                                    </div>

                                    <h3 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-6 leading-tight text-balance">
                                        {service.title}
                                    </h3>

                                    <p className="text-neutral-darkgray text-lg leading-body mb-space-4 font-semibold">
                                        {service.description}
                                    </p>

                                    <p className="text-neutral-midgray text-body leading-body mb-space-10 font-normal">
                                        {SERVICE_DETAILS[service.id]}
                                    </p>

                                    {/* Premium Design Element Instead of Text Features */}
                                    <div className="flex items-center gap-4 sm:gap-6 mb-space-10 p-5 rounded-[var(--radius-lg)] border border-neutral-lightgray relative overflow-hidden group/premium bg-neutral-white shadow-sm">
                                        {/* Glassmorphic Background Effect */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-base/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover/premium:scale-150"></div>

                                        <div className="flex -space-x-3 relative z-10 shrink-0">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-white shadow-elevation-2 flex items-center justify-center border-2 border-neutral-white z-30">
                                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent-base" />
                                            </div>
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-white shadow-elevation-2 flex items-center justify-center border-2 border-neutral-white z-20">
                                                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent-base" />
                                            </div>
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-white shadow-elevation-2 flex items-center justify-center border-2 border-neutral-white z-10">
                                                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-accent-base" />
                                            </div>
                                        </div>
                                        <div className="flex-grow h-px bg-gradient-to-r from-accent-base/20 via-accent-base/10 to-transparent relative z-10 mx-2"></div>
                                        <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-neutral-darkgray relative z-10 flex flex-col items-end shrink-0">
                                            <span className="text-accent-base">Exklusive</span>
                                            <span>Ausführung</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Button variant="primary" icon={ArrowRight} onClick={() => navigate('/contact')} className="px-8">
                                            Beratung vereinbaren
                                        </Button>
                                        {SERVICE_SLUG_MAP[service.id] && (
                                            <Link
                                                to={`/leistungen/${SERVICE_SLUG_MAP[service.id]}`}
                                                className="text-sm font-semibold text-neutral-midgray hover:text-accent-base transition-colors flex items-center gap-1"
                                            >
                                                Details
                                                <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Quality Seal Section */}
                <Reveal animation="fade-in-up">
                    <div className="mt-space-24 border-t border-neutral-lightgray pt-space-20 text-center">
                        <h2 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-16 tracking-h3 text-balance">Unser Qualitätsversprechen</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { icon: Ruler, title: "Präzise Planung", text: "Detailgenaue Ausführungspläne und transparente Kostenkalkulation." },
                                { icon: ShieldCheck, title: "Qualitätsstandards", text: "Fachgerechte Ausführung nach anerkannten Regeln der Technik und DIN Normen." },
                                { icon: Sprout, title: "Pflegeberatung", text: "Individuelle Pflege  und Bewässerungstipps für eine langfristig gepflegte Gartenanlage." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-neutral-offwhite border border-neutral-lightgray flex items-center justify-center text-primary-base mb-6">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-h4 font-sans font-bold text-neutral-darkgray mb-3">{item.title}</h3>
                                    <p className="text-neutral-midgray font-normal text-sm max-w-xs mx-auto">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </Section>
        </main>
    );
};
