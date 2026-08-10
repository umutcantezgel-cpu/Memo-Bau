import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { Section } from '../components/layout/Section';
import { Reveal } from '../components/common/Reveal';
import { PREMIUM_LOCATIONS } from '../core/locations';
import { CityConfig } from '../core/cityConfig.types';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { InteractiveMap } from '../components/features/InteractiveMap';


const LocationGrid: React.FC<{ locations: CityConfig[], startIndex?: number }> = ({ locations, startIndex = 0 }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {locations.map((loc, idx) => {
            const accentColor = `oklch(var(--color-accent-base-l) var(--color-accent-base-c) calc(var(--color-accent-base-h) + ${loc.accentShift}deg))`;

            return (
                <Reveal key={loc.slug} animation="fade-in-up" delay={(((startIndex + idx) % 4) * 100) as 0 | 100 | 200 | 300 | 400 | 500}>
                    <Link
                        to={`/standorte/${loc.slug}`}
                        className="group block p-space-6 border border-neutral-lightgray rounded-[var(--radius-lg)] bg-neutral-white hover:shadow-elevation-2 transition-all duration-[var(--default-transition-duration)] relative overflow-hidden"
                    >
                        <div
                            className="absolute right-0 top-0 w-16 h-16 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-150"
                            style={{ backgroundColor: accentColor, opacity: 0.05 }}
                        ></div>
                        <div className="flex items-start justify-between relative z-10">
                            <div>
                                <div className="flex items-center gap-2 mb-2" style={{ color: accentColor }}>
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{loc.plz}</span>
                                </div>
                                <h3 className="text-lg font-sans font-bold text-neutral-darkgray mb-1 group-hover:text-primary-base transition-colors duration-300">
                                    {loc.name}
                                </h3>
                                <span className="text-sm font-normal text-neutral-midgray">
                                    {loc.entfernungKm === 0 ? 'Hauptstandort' : `${loc.entfernungKm} km entfernt`}
                                </span>
                            </div>
                            <div
                                className="w-8 h-8 rounded-full bg-neutral-offwhite flex items-center justify-center transition-colors duration-300"
                                style={{ '--hover-bg': accentColor } as React.CSSProperties}
                            >
                                <ArrowRight className="w-4 h-4 text-neutral-darkgray group-hover:text-amber-500" />
                            </div>
                        </div>
                    </Link>
                </Reveal>
            )
        })}
    </div>
);

export const LocationOverviewPage: React.FC = () => {
    // Teilt die Master-Liste in zwei visuelle Blöcke für die UX
    const lahnDillLocations = PREMIUM_LOCATIONS.filter(loc => loc.region === 'Lahn-Dill-Kreis');
    const surroundingLocations = PREMIUM_LOCATIONS.filter(loc => loc.region !== 'Lahn-Dill-Kreis');

    return (
        <main className="bg-neutral-white min-h-screen">
            <SEO
                title="Unsere Standorte | Hessenweit für Sie im Einsatz"
                description="Egal ob Wetzlar, Gießen, Bad Homburg oder Frankfurt: Memo-BauT gestaltet Traumgärten in ganz Hessen. Premium-Landschaftsbau in Ihrer Nähe."
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Standorte', url: '/standorte' }
                ]}
            />


            <PageHero
                title="Von der Lahn bis in den Taunus"
                subtitle="Unsere Premium-Standorte"
                description="Wir gestalten Traumgärten im gesamten Lahn-Dill-Kreis, der Wetterau und dem Rhein-Main-Gebiet. Finden Sie Ihre exklusive Beratung direkt vor Ort."
                backgroundImage="/images/final/service-landscaping.webp"
                centered={true}
            />

            <Section bgVariant="white">
                <Reveal animation="fade-in">
                    <div className="text-center max-w-3xl mx-auto mb-space-20">
                        <h2 className="text-h2 font-sans font-bold text-neutral-darkgray mb-space-6 tracking-h2 text-balance">Verwurzelt in der Region. Stark in ganz Hessen.</h2>
                        <p className="text-neutral-midgray leading-body font-normal">
                            Unser Hauptstandort Aßlar bildet das logistische und handwerkliche Zentrum. Von hier aus planen und realisieren wir – dank modernstem Fuhrpark – effizient und termintreu Exklusiv Gärten in der gesamten Fläche.
                        </p>
                    </div>
                </Reveal>

                <div className="mb-space-16">
                    <h3 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-8 border-b border-neutral-lightgray pb-4">
                        Lahn Dill Kreis (Kerngebiet)
                    </h3>
                    <LocationGrid locations={lahnDillLocations} />
                </div>

                <div className="mb-space-12">
                    <h3 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-8 border-b border-neutral-lightgray pb-4">
                        Gießen, Wetterau & Limburg Weilburg (Umland)
                    </h3>
                    <LocationGrid locations={surroundingLocations} startIndex={lahnDillLocations.length} />
                </div>

                <Reveal animation="fade-in-up" delay={200}>
                    <div className="mt-space-24">
                        <div className="text-center mb-space-12">
                            <h3 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-4">Das Einsatzgebiet auf der Karte</h3>
                            <p className="text-neutral-midgray text-sm">Mit unserem Bauhof in Aßlar decken wir einen hochverdichteten Radius von ca. 35km hocheffizient ab.</p>
                        </div>
                        <InteractiveMap />
                    </div>
                </Reveal>

                {/* SEO-Textblock: Regionale Verankerung */}
                <Reveal animation="fade-in-up">
                    <div className="mt-space-24 max-w-3xl mx-auto">
                        <h2 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-6 text-center">
                            Ihr Garten  und Landschaftsbau Partner in Mittelhessen
                        </h2>
                        <div className="text-sm text-neutral-midgray leading-relaxed space-y-4 font-normal">
                            <p>
                                Unser Einzugsgebiet erstreckt sich vom Lahn Dill Kreis über den Landkreis Gießen bis in die Wetterau und den Kreis Limburg Weilburg. In jedem dieser Gebiete haben wir über die Jahre echte Erfahrung aufgebaut. Wir kennen die Besonderheiten jeder Lage: Die Hangsituationen in Braunfels und Solms brauchen andere Lösungen als die flachen Grundstücke in der Lahnaue bei Lahnau oder Wetzlar. In Dillenburg und Herborn arbeiten wir häufig mit den regionaltypischen Grauwacke Natursteinen, während in der Wetterau bei Butzbach und Bad Nauheim Sandstein und Basalt dominieren.
                            </p>
                            <p>
                                Die Entfernungen in unserem Einsatzgebiet sind überschaubar   kein Standort ist mehr als 35 Kilometer von unserem Bauhof in Aßlar entfernt. Das bedeutet: Kurze Anfahrten, keine überhöhten Fahrtkosten, und im Notfall sind wir innerhalb von 30 Minuten bei Ihnen. Für Projekte außerhalb unseres Kerngebiets sprechen Sie uns bitte direkt an   bei entsprechender Projektgröße fahren wir auch gerne weiter.
                            </p>
                            <p>
                                Auf den Standortseiten finden Sie zu jeder Stadt konkrete Informationen: Welche Leistungen wir dort anbieten und Erfahrungsberichte von zufriedenen Kunden direkt aus der Nachbarschaft. So bekommen Sie einen ehrlichen Eindruck davon, was wir in Ihrer Gemeinde bereits umgesetzt haben.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </Section>
        </main >
    );
};
