import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { LegalLayout } from '../components/legal/LegalLayout';
import { LegalDefinition } from '../components/legal/LegalDefinition';
import { LegalInfoBox } from '../components/legal/LegalInfoBox';
import { LegalCrossLinks } from '../components/legal/LegalCrossLinks';
import { COMPANY_INFO } from '../core/constants';

const COOKIE_CATEGORIES = [
    {
        name: 'Technisch Notwendig',
        description: 'Cookies, die für die Grundfunktionen der Website erforderlich sind (z.B. Cookie-Consent-Status).',
        canDisable: false,
    },
    {
        name: 'Funktional',
        description: 'Cookies, die erweiterte Funktionen ermöglichen (z.B. Spracheinstellungen, Kartenanbieter).',
        canDisable: true,
    },
    {
        name: 'Analyse & Statistik',
        description: 'Cookies, die uns helfen zu verstehen, wie Besucher unsere Website nutzen (z.B. Google Analytics).',
        canDisable: true,
    },
    {
        name: 'Externe Medien',
        description: 'Cookies, die für die Einbindung externer Inhalte und Dienste erforderlich sind (z.B. Calendly, Google Maps).',
        canDisable: true,
    },
];

export const CookiePolicyPage: React.FC = () => {
    const openCookieSettings = () => {
        window.dispatchEvent(new Event('show_cookie_settings'));
    };

    return (
        <main className="bg-neutral-white min-h-screen">
            <SEO
                title="Cookie-Richtlinie | Memo BauT"
                description={`Detaillierte Informationen über die Verwendung von Cookies auf der Website der ${COMPANY_INFO.name}. Cookie-Kategorien, Zweck und Einstellungsmöglichkeiten.`}
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Cookie-Richtlinie', url: '/cookie-richtlinie' }
                ]}
            />

            <PageHero
                title="Cookie-Richtlinie"
                subtitle="Transparenz"
                description="Welche Cookies wir verwenden und warum."
                backgroundImage="/images/final/gallery-06.webp"
            />

            <LegalLayout lastUpdated="März 2026">
                <p className="lead text-lg font-medium text-neutral-darkgray border-l-4 border-accent-base pl-4 italic">
                    Diese Cookie-Richtlinie ergänzt unsere <a href="/datenschutz">Datenschutzerklärung</a> und erklärt im Detail, welche Cookies und ähnlichen Technologien auf dieser Website eingesetzt werden, zu welchem Zweck und wie Sie Ihre Einstellungen verwalten können.
                </p>

                {/* ─── Was sind Cookies? ─── */}
                <h2>1. Was sind Cookies?</h2>
                <p>
                    <LegalDefinition term="Cookies" definition="Kleine Textdateien, die von einer Website auf Ihrem Computer oder Mobilgerät gespeichert werden. Sie ermöglichen es der Website, sich an Ihre Aktionen und Einstellungen über einen bestimmten Zeitraum zu erinnern." /> sind kleine Textdateien, die Ihr Browser auf Ihrem Endgerät speichert, wenn Sie eine Website besuchen. Sie dienen verschiedenen Zwecken: Manche sind technisch notwendig, damit die Website überhaupt funktioniert. Andere helfen uns, die Website zu verbessern oder Ihnen zusätzliche Funktionen anzubieten.
                </p>
                <p>
                    Cookies können von uns selbst gesetzt werden (<strong>First-Party-Cookies</strong>) oder von Drittanbietern stammen, deren Dienste wir auf unserer Website einbinden (<strong>Third-Party-Cookies</strong>).
                </p>

                {/* ─── Cookie-Kategorien ─── */}
                <h2>2. Cookie-Kategorien im Überblick</h2>
                <p>
                    Wir unterteilen die auf unserer Website verwendeten Cookies in die folgenden Kategorien:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-4 my-space-8">
                    {COOKIE_CATEGORIES.map((cat) => (
                        <div
                            key={cat.name}
                            className="p-space-6 bg-neutral-offwhite rounded-[var(--radius-lg)] border border-neutral-lightgray/30"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-base font-bold text-neutral-darkgray m-0 p-0 border-0">{cat.name}</h3>
                                <span className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${cat.canDisable ? 'bg-accent-base/10 text-accent-base' : 'bg-primary-base/10 text-primary-base'}`}>
                                    {cat.canDisable ? 'Optional' : 'Erforderlich'}
                                </span>
                            </div>
                            <p className="text-sm text-neutral-midgray mb-0">{cat.description}</p>
                        </div>
                    ))}
                </div>

                {/* ─── Detaillierte Cookie-Auflistung ─── */}
                <h2>3. Detaillierte Cookie-Auflistung</h2>

                <h3>Technisch notwendige Cookies</h3>
                <div className="overflow-x-auto mb-space-8">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="border-b-2 border-neutral-lightgray">
                                <th className="text-left py-3 pr-4 font-bold text-neutral-darkgray">Cookie</th>
                                <th className="text-left py-3 pr-4 font-bold text-neutral-darkgray">Anbieter</th>
                                <th className="text-left py-3 pr-4 font-bold text-neutral-darkgray">Zweck</th>
                                <th className="text-left py-3 font-bold text-neutral-darkgray">Lebensdauer</th>
                            </tr>
                        </thead>
                        <tbody className="text-neutral-midgray">
                            <tr className="border-b border-neutral-lightgray/50">
                                <td className="py-3 pr-4 font-mono text-xs">cookie_consent</td>
                                <td className="py-3 pr-4">{COMPANY_INFO.name}</td>
                                <td className="py-3 pr-4">Speichert Ihre Cookie-Einwilligungsentscheidung</td>
                                <td className="py-3">1 Jahr</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Analyse-Cookies (nur mit Einwilligung)</h3>
                <div className="overflow-x-auto mb-space-8">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="border-b-2 border-neutral-lightgray">
                                <th className="text-left py-3 pr-4 font-bold text-neutral-darkgray">Cookie</th>
                                <th className="text-left py-3 pr-4 font-bold text-neutral-darkgray">Anbieter</th>
                                <th className="text-left py-3 pr-4 font-bold text-neutral-darkgray">Zweck</th>
                                <th className="text-left py-3 font-bold text-neutral-darkgray">Lebensdauer</th>
                            </tr>
                        </thead>
                        <tbody className="text-neutral-midgray">
                            <tr className="border-b border-neutral-lightgray/50">
                                <td className="py-3 pr-4 font-mono text-xs">_ga</td>
                                <td className="py-3 pr-4">Google</td>
                                <td className="py-3 pr-4">Unterscheidung eindeutiger Nutzer</td>
                                <td className="py-3">2 Jahre</td>
                            </tr>
                            <tr className="border-b border-neutral-lightgray/50">
                                <td className="py-3 pr-4 font-mono text-xs">_ga_*</td>
                                <td className="py-3 pr-4">Google</td>
                                <td className="py-3 pr-4">Speicherung des Sitzungsstatus</td>
                                <td className="py-3">2 Jahre</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* ─── Einstellungen ändern ─── */}
                <h2>4. Cookie-Einstellungen ändern</h2>
                <p>
                    Sie können Ihre Cookie-Einstellungen jederzeit über den folgenden Button oder über den Link „Cookie-Einstellungen" im Footer unserer Website anpassen:
                </p>

                <div className="my-space-6">
                    <button
                        onClick={openCookieSettings}
                        className="inline-flex items-center px-6 py-3 bg-primary-base text-white font-bold rounded-[var(--radius-md)] hover:bg-primary-dark transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-primary-base focus-visible:ring-offset-2"
                    >
                        Cookie-Einstellungen öffnen
                    </button>
                </div>

                <LegalInfoBox variant="hinweis">
                    <p>
                        Darüber hinaus können Sie in den Einstellungen Ihres Browsers Cookies generell deaktivieren oder für bestimmte Websites einschränken. Bitte beachten Sie, dass die Funktionalität unserer Website eingeschränkt sein kann, wenn Sie technisch notwendige Cookies blockieren.
                    </p>
                </LegalInfoBox>

                {/* ─── Rechtsgrundlage ─── */}
                <h2>5. Rechtsgrundlage</h2>
                <p>
                    Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO und § 25 Abs. 2 <LegalDefinition term="TDDDG" definition="Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz – regelt den Datenschutz in der Telekommunikation und bei digitalen Diensten." /> gespeichert. Alle anderen Cookies werden nur mit Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG) gesetzt.
                </p>

                <br />
                <p className="text-sm font-bold text-neutral-midgray">
                    Stand der Cookie-Richtlinie: März 2026.
                </p>

                <LegalCrossLinks currentPath="/cookie-richtlinie" />
            </LegalLayout>
        </main>
    );
};
