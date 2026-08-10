import React from 'react';
import { Quote, TreePine, Hammer, Award, Leaf } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionTitle } from '../components/common/SectionTitle';
import { Reveal } from '../components/common/Reveal';
import { StaggeredList } from '../components/common/StaggeredList';
import { Section } from '../components/layout/Section';
import { COMPANY_INFO, STATS } from '../core/constants';

export const AboutPage: React.FC = () => (
    <main className="bg-neutral-white min-h-screen">
        <SEO
            title="Über Uns | Memo-BauT Handwerkstradition & Vision in Wetzlar"
            description="Lernen Sie das Team hinter Memo-BauT kennen. Ihr erfahrener Partner für exklusiven Landschaftsbau und langlebige Außenanlagen."
            breadcrumbs={[
                { name: 'Home', url: '/' },
                { name: 'Über Uns', url: '/about' }
            ]}
        />

        <PageHero
            title="Leidenschaft für Gärten"
            subtitle="Über Memo-BauT"
            description={`Seit ${new Date().getFullYear() - COMPANY_INFO.founded} Jahren gestalten wir exklusive Gärten und Außenanlagen in der Region Wetzlar-Gießen.`}
            backgroundImage="/images/final/about-hero.webp"
        />

        <Section bgVariant="white">
            {/* Company Story */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-space-24">
                <Reveal animation="fade-in" className="md:w-1/2">
                    <h2 className="text-h2 font-sans font-bold text-neutral-darkgray mb-space-6 tracking-h2 text-balance">
                        Vom Handwerksbetrieb zum GaLaBau Experten
                    </h2>
                    <div className="w-20 h-1 bg-accent-base mb-8"></div>
                    <p className="text-body text-neutral-midgray font-normal leading-body mb-space-6 max-w-prose">
                        Was 2019 als ambitionierte Vision begann, ist heute ein etabliertes
                        Unternehmen für Premium Garten- und Landschaftsbau. Wir
                        haben uns zum führenden Ansprechpartner für anspruchsvolle Außenanlagen, präzise Pflasterarbeiten und Natursteinverlegung in der Region entwickelt.
                    </p>
                    <p className="text-body text-neutral-midgray font-normal leading-body mb-space-6 max-w-prose">
                        Unser Team besteht aus erfahrenen Landschaftsgärtnern, die mit Leidenschaft
                        und Fachwissen jeden Garten in eine grüne Oase verwandeln – von der Konzeption bis zur fachgerechten Gartenpflege.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mt-8">
                        {STATS.slice(0, 2).map((stat, i) => (
                            <div key={i} className="flex flex-col p-4 bg-neutral-offwhite rounded-[var(--radius-lg)] border border-neutral-lightgray">
                                <span className="text-3xl font-bold text-accent-base">{stat.value}</span>
                                <span className="text-sm text-neutral-midgray/80 font-normal uppercase tracking-wider">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </Reveal>
                <Reveal animation="fade-in-up" delay={100} className="md:w-1/2 relative">
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-accent-base/10 rounded-full -z-10 transform translate-x-10 translate-y-10"></div>
                    <img
                        src="/images/final/service-landscaping.webp"
                        alt="Memo BauT Team bei der Arbeit"
                        className="rounded-[var(--radius-xl)] shadow-elevation-4 relative z-10 w-full object-cover aspect-[4/5]"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-accent-base text-neutral-white p-6 rounded-[var(--radius-lg)] z-20 shadow-elevation-3 hidden md:block">
                        <p className="font-sans font-bold text-lg">Memo BauT</p>
                        <p className="text-xs uppercase tracking-widest font-semibold">Seit {COMPANY_INFO.founded}</p>
                    </div>
                </Reveal>
            </div>

            {/* Signature Philosophy */}
            <div className="py-space-24 border-t border-neutral-lightgray mb-space-24">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <Reveal animation="fade-in-up" className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-primary-base/5 transform -rotate-3 rounded-[var(--radius-xl)] -z-10"></div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="/images/final/gallery-09.webp"
                                alt="Detailarbeit Naturstein"
                                className="rounded-[var(--radius-lg)] shadow-md w-full h-64 object-cover object-center translate-y-8"
                                loading="lazy"
                            />
                            <img
                                src="/images/final/gallery-01.webp"
                                alt="Premium Terrassen Design"
                                className="rounded-[var(--radius-lg)] shadow-elevation-3 w-full h-80 object-cover object-center"
                                loading="lazy"
                            />
                        </div>
                        {/* Overlay Card */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-6 rounded-[var(--radius-md)] shadow-elevation-4 border border-white/20 text-center w-3/4">
                            <span className="block text-accent-base font-bold text-2xl mb-1">Manufaktur</span>
                            <span className="block text-neutral-midgray text-xs uppercase tracking-widest font-semibold">Qualität im Detail</span>
                        </div>
                    </Reveal>

                    <Reveal animation="fade-in" delay={200} className="lg:w-1/2">
                        <span className="text-accent-base font-semibold tracking-widest uppercase text-sm mb-4 block">Signature Approach</span>
                        <h2 className="text-h2 font-sans font-bold text-neutral-darkgray mb-space-6 tracking-tight text-balance">
                            Kunstwerk statt <br className="hidden lg:block" />klassischem GaLaBau.
                        </h2>
                        <div className="w-16 h-1 bg-neutral-lightgray mb-8"></div>
                        <p className="text-body text-neutral-midgray font-normal leading-body mb-space-6">
                            Unser Ansatz geht weit über gewöhnlichen Landschaftsbau hinaus. Wir betrachten jeden Garten als
                            einzigartiges Kunstwerk – eine nahtlose Erweiterung Ihrer Wohnkultur in die freie Natur, präzise auf Ihre Bedürfnisse zugeschnitten.
                        </p>
                        <p className="text-body text-neutral-midgray font-normal leading-body mb-space-8">
                            Durch die Kombination von traditioneller Handwerkskunst mit modernstem Design und erlesenen
                            Materialien schaffen wir Rückzugsorte, die nicht nur heute beeindrucken, sondern mit den Jahren an
                            Charakter und natürlicher Schönheit gewinnen.
                        </p>

                        <ul className="space-y-4">
                            {[
                                'Individuelle High-End Konzeption',
                                'Kompromisslose Materialqualität',
                                'Diskrete & termintreue Umsetzung'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-neutral-darkgray font-medium">
                                    <span className="w-2 h-2 rounded-full bg-accent-base mr-4"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </div>

            {/* Mission Statement */}
            <Reveal animation="scale-in">
                <div className="bg-primary-base text-neutral-white p-space-12 rounded-[var(--radius-xl)] mb-space-24 relative overflow-hidden shadow-elevation-4">
                    <Quote className="absolute top-8 left-8 text-neutral-white/10 w-32 h-32" />
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h3 className="text-h3 font-sans font-bold mb-space-6 text-balance">Unsere Mission</h3>
                        <p className="text-lead leading-lead text-neutral-white/80 font-normal italic">
                            "Wir glauben, dass jeder einen Traumgarten verdient. Deshalb setzen wir auf
                            Qualität, Nachhaltigkeit und echte Partnerschaft mit unseren Kunden."
                        </p>
                        <div className="mt-8 flex justify-center items-center">
                            <div className="w-12 h-1 bg-accent-base mr-4"></div>
                            <span className="font-semibold text-neutral-white tracking-widest uppercase">
                                Das Memo BauT Team
                            </span>
                            <div className="w-12 h-1 bg-accent-base ml-4"></div>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Strengths */}
            <SectionTitle subtitle="Unsere Stärken" title="Warum Memo BauT?" />
            <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" baseDelay={0} staggerDelay={100}>
                {[
                    { icon: Award, title: `${new Date().getFullYear() - COMPANY_INFO.founded}+ Jahre Erfahrung`, description: 'Kompetenz aus dutzenden exklusiven Projekten in der Region.' },
                    { icon: TreePine, title: 'Alles aus einer Hand', description: 'Von der Planung über die Umsetzung bis zur Pflege.' },
                    { icon: Leaf, title: 'Nachhaltig', description: 'Umweltbewusste Materialien und ressourcenschonende Arbeit.' },
                    { icon: Hammer, title: 'Zertifizierte Qualität', description: 'Fachgerechte Ausführung nach anerkannten Standards.' },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="text-center p-8 bg-neutral-offwhite rounded-[var(--radius-lg)] border border-neutral-lightgray hover:border-primary-base transition-all duration-[var(--default-transition-duration)] group hover:shadow-elevation-3 hover:-translate-y-2"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 rounded-[var(--radius-md)] bg-neutral-white flex items-center justify-center group-hover:bg-primary-base transition-colors duration-[var(--default-transition-duration)] border border-neutral-lightgray">
                            <item.icon className="w-8 h-8 text-primary-base group-hover:text-neutral-white transition-colors duration-[var(--default-transition-duration)]" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-darkgray mb-2">{item.title}</h3>
                        <p className="text-neutral-midgray font-normal text-sm leading-body">{item.description}</p>
                    </div>
                ))}
            </StaggeredList>

            {/* Team Expertise & Arbeitsweise */}
            <div className="mt-space-24 border-t border-neutral-lightgray pt-space-20">
                <Reveal animation="fade-in-up">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-8 text-center">
                            Unser Team   Handwerker mit Herzblut
                        </h2>
                        <div className="text-sm text-neutral-midgray leading-relaxed space-y-4 font-normal">
                            <p>
                                Hinter Memo BauT steht ein eingespieltes Team aus erfahrenen Landschaftsgärtnern, Pflasterlegern und Gartenbauspezialisten. Das macht sich in der Qualität jedes einzelnen Projekts bemerkbar.
                            </p>
                            <p>
                                Unser Gründer Mehmet Tezgel bringt über 7 Jahre Berufserfahrung im GaLaBau mit. Was 2019 mit einem Minibagger und einer klaren Vision begann, ist heute ein Fachbetrieb mit eigenem Maschinenpark   Bagger, Radlader, Rüttelplatten, Bewässerungsbohrer, Erdbohrer   alles, was man für professionellen Gartenbau braucht. Keine gemieteten Geräte von der Baumaschinen Börse. Eigene Maschinen, die wir kennen und die zuverlässig funktionieren.
                            </p>
                            <p>
                                Wir arbeiten grundsätzlich nach dem Prinzip: ein Projekt, ein Team, volle Aufmerksamkeit. Das heißt, wir haben keine fünf Baustellen gleichzeitig laufen, bei denen die Mitarbeiter hin  und hergeschickt werden. Wenn wir bei Ihnen anfangen, bleiben wir, bis alles fertig ist. Das spart Zeit, vermeidet Fehler und gibt Ihnen die Sicherheit, dass Ihr Garten nicht zur Dauerbaustelle wird.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Unsere Arbeitsweise im Detail */}
            <div className="mt-space-20">
                <Reveal animation="fade-in-up">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-8 text-center">
                            Wie wir arbeiten   transparent und verbindlich
                        </h2>
                        <div className="text-sm text-neutral-midgray leading-relaxed space-y-4 font-normal">
                            <p>
                                Planung ist bei uns nicht nur ein Prospekt mit hübschen Bildern. Wir erstellen echte Ausführungspläne mit Maßen, Schichtangaben, Materiallisten und einer detaillierten Kostenkalkulation. Sie wissen vorher, was es kostet   und es gibt keine bösen Überraschungen auf der Rechnung. Das unterscheidet uns von vielen Mitbewerbern, die erst mal anfangen und dann nachrechnen.
                            </p>
                            <p>
                                Unsere Materialien beziehen wir von regionalen Baustoffhändlern und direkt von Herstellern, mit denen wir seit Jahren zusammenarbeiten. Naturstein aus dem Westerwald, Keramikplatten aus italienischer Produktion, Rollrasen von einer Gärtnerei bei Gießen. Wir wissen, woher jedes Material kommt und können für die Qualität bürgen.
                            </p>
                            <p>
                                Bei der Umsetzung halten wir uns an die anerkannten Regeln der Technik: ZTV Wegebau für Pflasterarbeiten, DIN 18915 für Bodenarbeiten, FLL Richtlinien für Dachbegrünungen. Das klingt trocken, ist aber der Grund, warum unsere Pflasterflächen auch nach 20 Jahren noch plan liegen.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Regionaler Bezug */}
            <div className="mt-space-20 mb-space-12">
                <Reveal animation="fade-in-up">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-8 text-center">
                            Regional verwurzelt   von Wetzlar bis Gießen
                        </h2>
                        <div className="text-sm text-neutral-midgray leading-relaxed space-y-4 font-normal">
                            <p>
                                Der Lahn Dill Kreis und der nördliche Gießener Raum sind unser Revier. Wir kennen die Böden hier   den schweren Lehm im Dilltal, den steinigen Untergrund an den Hängen bei Braunfels, den sandigen Boden in der Wetterau. Dieses lokale Wissen fließt in jede unserer Planungen ein. Denn die beste Planung nützt nichts, wenn sie nicht zum Standort passt.
                            </p>
                            <p>
                                Viele unserer Kunden empfehlen uns im Freundes  und Bekanntenkreis weiter. Das ist für uns das größte Kompliment und der beste Beweis dafür, dass unsere Arbeit überzeugt. In Aßlar, Wetzlar und Lahnau kennt man uns mittlerweile   nicht, weil wir die lauteste Werbung machen, sondern weil die Gärten für sich sprechen.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </Section>
    </main>
);
