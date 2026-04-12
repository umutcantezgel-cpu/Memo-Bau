import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Leaf, PenTool, Sprout, Shield, Award, CheckCircle, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SERVICES, COMPANY_INFO } from '../core/constants';
import { Button } from '../components/common/Button';
import { Reveal } from '../components/common/Reveal';

import { StaggeredList } from '../components/common/StaggeredList';
import { Counter } from '../components/common/Counter';
import { SEO } from '../components/common/SEO';
import { TestimonialCarousel } from '../components/features/TestimonialCarousel';

const FaqItem: React.FC<{ faq: { q: string, a: string }, idx: number }> = ({ faq, idx }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Reveal animation="fade-in-up" delay={(idx * 100) as 0 | 100 | 200 | 300 | 400 | 500}>
            <div className="border border-neutral-lightgray rounded-[var(--radius-md)] overflow-hidden bg-neutral-offwhite transition-all duration-[var(--default-transition-duration)] hover:border-neutral-midgray/30">
                <button
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <span className="font-bold text-neutral-darkgray pr-4 font-sans">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full bg-neutral-white flex items-center justify-center shrink-0 shadow-elevation-1 transition-transform duration-[var(--default-transition-duration)] ${isOpen ? 'rotate-180 bg-accent-base text-white' : 'text-neutral-darkgray'}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                </button>
                <div className={`overflow-hidden transition-[max-height,opacity] duration-[var(--motion-standard-duration)] ease-[var(--motion-standard-easing)] will-change-[max-height,opacity] transform-gpu ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 text-neutral-midgray leading-relaxed font-normal text-sm border-t border-neutral-lightgray/50 mt-2">
                        {faq.a}
                    </div>
                </div>
            </div>
        </Reveal>
    );
};

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-neutral-white text-neutral-darkgray selection:bg-primary-base selection:text-neutral-white">
            <SEO
                title="Exklusive Gartengestaltung & Landschaftsarchitektur Wetzlar"
                description="Memo BauT verwandelt Außenbereiche in luxuriöse Lebensräume. Ihre Experten für gehobene Gartengestaltung, Landschaftsbau und Architektur in Wetzlar."
            />

            {/* HERO SECTION: Emotional & Dramatic */}
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-neutral-darkgray">

                {/* Background Video & Overlay */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/images/final/hero-home.webp"
                        className="w-full h-full object-cover object-center opacity-70"
                    >
                        <source src="/videos/hero-garden-latest.mp4" type="video/mp4" />
                        {/* Fallback image if video is not supported or taking long to load */}
                        <img
                            src="/images/final/hero-home.webp"
                            alt="Luxuriöser Garten mit Pool"
                            className="w-full h-full object-cover object-center"
                        />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-darkgray/80 via-neutral-darkgray/60 to-neutral-darkgray/90 mix-blend-multiply" />
                </div>

                <div className="relative z-30 max-w-[1200px] mx-auto px-6 lg:px-12 w-full text-center flex flex-col items-center">
                    <Reveal animation="fade-in-up-dramatic" delay={0}>
                        <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/5 backdrop-blur-md text-white/90 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium mb-space-8">
                            Est. 2011 • Wetzlar Region
                        </span>
                    </Reveal>
                    <Reveal animation="fade-in-up-dramatic" delay={100}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold text-white leading-[1.1] mb-space-8 drop-shadow-lg max-w-5xl mx-auto text-balance">
                            Die Kunst der <br />
                            <span className="italic font-serif text-accent-light">Gartengestaltung</span>
                        </h1>
                    </Reveal>
                    <Reveal animation="fade-in-up-dramatic" delay={200}>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-space-12 font-normal leading-relaxed text-balance">
                            Wir schaffen zeitlose Außenanlagen, die Architektur und Natur in perfekten Einklang bringen.
                            Ihr Partner für anspruchsvollen Garten- und Landschaftsbau.
                        </p>
                    </Reveal>
                    <Reveal animation="fade-in-up-dramatic" delay={300}>
                        <div className="flex flex-col md:flex-row gap-6">
                            <Button variant="gold" icon={ArrowRight} onClick={() => navigate('/contact')} className="min-w-[200px]">
                                Erstberatung vereinbaren
                            </Button>
                            <Button variant="outline" onClick={() => navigate('/gallery')} className="min-w-[200px] border-white/50 text-white hover:bg-white/10">
                                Portfolio entdecken
                            </Button>
                        </div>
                    </Reveal>
                </div>

                {/* Scroll Indicator */}
                <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="flex flex-col items-center gap-2 animate-bounce">
                        <span className="text-[10px] uppercase tracking-widest">Discover</span>
                        <ChevronDown className="w-5 h-5" />
                    </div>
                </div>
            </section>

            {/* TRUST BAR */}
            <section className="bg-neutral-darkgray border-t border-white/10 py-space-6 relative z-30">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-wrap justify-center gap-space-8 md:gap-space-24 opacity-70">
                        <div className="flex items-center gap-3 hover:opacity-100 transition-opacity duration-[var(--default-transition-duration)]"><Shield className="w-5 h-5 text-accent-base" /><span className="text-white text-sm font-semibold tracking-widest uppercase">Premium Qualität</span></div>
                        <div className="flex items-center gap-3 hover:opacity-100 transition-opacity duration-[var(--default-transition-duration)]"><Award className="w-5 h-5 text-accent-base" /><span className="text-white text-sm font-semibold tracking-widest uppercase"><Counter end={new Date().getFullYear() - COMPANY_INFO.founded} duration={2000} suffix="+" /> Jahre Expertise</span></div>
                        <div className="flex items-center gap-3 hover:opacity-100 transition-opacity duration-[var(--default-transition-duration)]"><CheckCircle className="w-5 h-5 text-accent-base" /><span className="text-white text-sm font-semibold tracking-widest uppercase">Höchste Präzision</span></div>
                    </div>
                </div>
            </section>

            {/* VALUE PROPOSITION: Architectural Quality */}
            <section className="py-space-20 md:py-space-24 bg-neutral-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <Reveal animation="scale-in">
                                <div className="aspect-[4/5] bg-stone-200 rounded-[var(--radius-lg)] overflow-hidden relative shadow-elevation-2">
                                    <img
                                        src="/images/final/service-planning.webp"
                                        alt="Detailgenaue Planung"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[700ms] ease-out scale-105"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </Reveal>

                        </div>
                        <div className="order-1 lg:order-2">
                            <Reveal animation="fade-in-up">
                                <div className="mb-space-6 w-12 h-1 bg-accent-base"></div>
                                <h2 className="text-h2 md:text-h1 font-heading font-bold text-neutral-darkgray mb-space-8 leading-h2 text-balance">
                                    Wir planen nicht nur Gärten. <br />
                                    <span className="text-neutral-midgray italic font-serif">Wir gestalten Lebensräume.</span>
                                </h2>
                                <p className="text-body text-neutral-midgray mb-space-12 leading-body font-normal">
                                    Ein Garten ist mehr als Grünfläche. Er ist Erweiterung des Wohnraums, Rückzugsort und Ausdruck Ihrer Persönlichkeit.
                                    Unser Ansatz verbindet architektonische Strenge mit organischer Vielfalt.
                                </p>
                            </Reveal>

                            <StaggeredList className="space-y-space-8 mt-space-12" baseDelay={100} staggerDelay={100}>
                                {[
                                    { icon: PenTool, title: "Ganzheitliche Planung", text: "Von der ersten Skizze bis zum Beleuchtungskonzept." },
                                    { icon: Sprout, title: "Exquisite Bepflanzung", text: "Sorgfältig kuratierte Pflanzenauswahl für jede Jahreszeit." },
                                    { icon: Leaf, title: "Nachhaltige Materialien", text: "Naturstein, Hölzer und Keramik höchster Qualität." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-neutral-offwhite text-neutral-darkgray group-hover:bg-accent-base group-hover:text-neutral-white shadow-elevation-1 transition-colors duration-[var(--default-transition-duration)]">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-neutral-darkgray mb-1 font-sans">{item.title}</h3>
                                            <p className="text-neutral-midgray leading-body font-normal text-sm">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </StaggeredList>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES PREVIEW: Minimalist & Elegant */}
            <section className="py-space-20 md:py-space-24 bg-neutral-offwhite border-y border-neutral-lightgray">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <Reveal animation="fade-in-up">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-space-16 gap-8">
                            <div>
                                <span className="text-accent-base text-xs font-bold uppercase tracking-widest mb-space-4 block">Expertise</span>
                                <h2 className="text-h2 md:text-h1 font-heading text-neutral-darkgray font-bold">Unsere Leistungen</h2>
                            </div>
                            <Button variant="ghost" onClick={() => navigate('/services')} icon={ArrowRight}>
                                Alle Leistungen
                            </Button>
                        </div>
                    </Reveal>

                    <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-space-8" baseDelay={100} staggerDelay={100}>
                        {SERVICES.slice(0, 3).map((service) => (
                            <div key={service.id} className="group cursor-pointer" onClick={() => navigate('/services')}>
                                <div className="aspect-[3/4] overflow-hidden mb-space-6 bg-stone-200 relative rounded-[var(--radius-lg)] shadow-elevation-1">
                                    <div className="absolute inset-0 bg-primary-base/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--default-transition-duration)] z-10"></div>
                                    <img
                                        src={service.imageUrl}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-[700ms] group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-[var(--default-transition-duration)] transform translate-y-4 group-hover:translate-y-0">
                                        <Button variant="gold" className="!py-2 !px-4 text-xs font-bold text-neutral-darkgray">Details ansehen</Button>
                                    </div>
                                </div>
                                <h3 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-2 group-hover:text-accent-base transition-colors duration-[var(--default-transition-duration)]">{service.title}</h3>
                                <p className="text-neutral-midgray line-clamp-2 font-normal text-body">{service.description}</p>
                            </div>
                        ))}
                    </StaggeredList>
                </div>
            </section>

            {/* PROCESS SECTION: Timeline */}
            <section className="py-space-20 md:py-space-24 bg-primary-base text-neutral-offwhite overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/3"></div>
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
                    <Reveal animation="fade-in-up">
                        <div className="text-center mb-space-20">
                            <span className="text-accent-base text-xs font-bold uppercase tracking-widest mb-space-4 block">Der Weg zum Ziel</span>
                            <h2 className="text-h2 md:text-h1 font-heading text-neutral-white font-bold">Ihr Projekt in besten Händen</h2>
                        </div>
                    </Reveal>

                    <div className="relative z-10">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/20 z-0 pointer-events-none"></div>

                        <StaggeredList className="grid grid-cols-1 md:grid-cols-4 gap-space-8 relative" baseDelay={100} staggerDelay={100}>
                            {[
                                { step: "01", title: "Beratung", text: "Persönliches Gespräch und Bestandsaufnahme vor Ort." },
                                { step: "02", title: "Konzept", text: "Entwicklung kreativer Entwürfe und Materialauswahl." },
                                { step: "03", title: "Umsetzung", text: "Fachgerechte Ausführung durch unser Expertenteam." },
                                { step: "04", title: "Übergabe", text: "Finale Begehung und Pflegeanleitung für Ihren Garten." }
                            ].map((item, i) => (
                                <div key={i} className="relative pt-8 group z-10">
                                    <div className="w-4 h-4 rounded-full bg-accent-base absolute top-10 left-1/2 -translate-x-1/2 z-10 shadow-[0_0_0_8px_rgba(61,90,71,1)] group-hover:bg-neutral-white transition-colors duration-[var(--default-transition-duration)]"></div>
                                    <div className="text-center p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-[var(--default-transition-duration)] backdrop-blur-sm rounded-[var(--radius-lg)] mt-8">
                                        <div className="text-6xl font-sans font-bold text-white/10 mb-4 absolute top-4 right-4">{item.step}</div>
                                        <h3 className="text-xl font-bold text-neutral-white mb-space-4 relative z-10 font-sans">{item.title}</h3>
                                        <p className="text-white/70 relative z-10 font-normal text-sm leading-body">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </StaggeredList>
                    </div>
                </div>
            </section>



            <TestimonialCarousel />

            {/* FAQ SECTION */}
            <section className="py-space-20 md:py-space-24 bg-neutral-white">
                <div className="max-w-[800px] mx-auto px-6 lg:px-12">
                    <Reveal animation="fade-in-up">
                        <div className="text-center mb-space-16">
                            <span className="text-accent-base text-xs font-bold uppercase tracking-widest mb-space-4 block">FAQ</span>
                            <h2 className="text-h2 md:text-h1 font-heading text-neutral-darkgray font-bold">Häufige Fragen</h2>
                        </div>
                    </Reveal>

                    <div className="space-y-4">
                        {[
                            { q: "Wie läuft ein Projekt mit Memo BauT ab?", a: "Nach einer ersten Kontaktaufnahme vereinbaren wir einen Vor-Ort-Termin zur Bestandsaufnahme und Besprechung Ihrer Wünsche. Daraufhin erstellen wir ein detailliertes Konzept inklusive Kostenvoranschlag. Nach Ihrer Freigabe beginnen wir mit der fachgerechten Umsetzung." },
                            { q: "Bieten Sie auch regelmäßige Gartenpflege an?", a: "Ja, wir bieten umfassende Pflegekonzepte für private und gewerbliche Anlagen an. Von saisonalen Rückschnitten bis zur ganzjährigen Betreuung schnüren wir ein Paket, das genau auf die Bedürfnisse Ihres Gartens abgestimmt ist." },
                            { q: "In welchem Umkreis sind Sie tätig?", a: "Unser Kerngebiet ist die Region Wetzlar, Gießen und das Rhein-Main-Gebiet. Bei größeren Projekten sind wir nach Absprache auch überregional in ganz Hessen für Sie im Einsatz." },
                            { q: "Verwenden Sie nachhaltige Materialien?", a: "Nachhaltigkeit ist ein Grundpfeiler unserer Philosophie. Wir bevorzugen regionale Materialien, langlebige Natursteine und FSC-zertifizierte Hölzer. Zudem integrieren wir ressourcenschonende Bewässerungssysteme und insektenfreundliche Bepflanzungen in unsere Konzepte." }
                        ].map((faq, idx) => (
                            <FaqItem key={idx} faq={faq} idx={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA: Final Impression */}
            <section className="py-space-20 md:py-space-24 bg-neutral-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <Reveal animation="fade-in-up">
                        <h2 className="text-h2 md:text-h1 font-heading font-bold text-neutral-darkgray mb-space-8 leading-h2">
                            Erzählen Sie uns von <br />
                            <span className="text-accent-base italic font-serif">Ihrer Vision</span>
                        </h2>
                        <p className="text-lead text-neutral-midgray mb-space-12 max-w-2xl mx-auto font-normal leading-lead">
                            Jedes große Projekt beginnt mit einem Gespräch. Lassen Sie uns gemeinsam herausfinden, was möglich ist.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Button variant="primary" icon={ArrowRight} onClick={() => navigate('/contact')} className="min-w-[240px] text-lg py-5 shadow-elevation-2">
                                Projekt anfragen
                            </Button>
                            <Button variant="ghost" onClick={() => window.location.href = 'tel:+4917670162293'} className="min-w-[240px] text-lg py-5 text-neutral-darkgray hover:text-primary-base">
                                Telefonisch beraten
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div >
    );
};
