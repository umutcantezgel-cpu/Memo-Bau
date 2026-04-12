import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { LegalLayout } from '../components/legal/LegalLayout';
import { LegalDefinition } from '../components/legal/LegalDefinition';

import { LegalInfoBox } from '../components/legal/LegalInfoBox';
import { LegalCrossLinks } from '../components/legal/LegalCrossLinks';
import { COMPANY_INFO } from '../core/constants';

export const ImprintPage: React.FC = () => {
    return (
        <main className="bg-neutral-white min-h-screen">
            <SEO
                title="Impressum | Memo BauT – Garten- & Landschaftsbau Werdorf"
                description={`Impressum der ${COMPANY_INFO.name}. Angaben gemäß § 5 DDG, Kontaktdaten, Steuerdaten, berufsrechtliche Angaben und Haftungshinweise.`}
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Impressum', url: '/impressum' }
                ]}
            />

            <PageHero
                title="Impressum"
                subtitle="Rechtliches"
                description="Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)"
                backgroundImage="/images/final/gallery-03.webp"
            />

            <LegalLayout lastUpdated="März 2026">
                <p className="lead text-lg font-medium text-neutral-darkgray border-l-4 border-accent-base pl-4 italic">
                    Dieses Impressum gilt für die Website der {COMPANY_INFO.name} sowie für alle verknüpften Social-Media-Profile und externen Plattformen. Es enthält die gesetzlich vorgeschriebenen Angaben zur Anbieterkennzeichnung gemäß dem Digitale-Dienste-Gesetz (DDG).
                </p>

                {/* ─── SEKTION 1: DIENSTEANBIETER ─── */}
                <h2>1. Angaben gemäß § 5 DDG</h2>

                <LegalInfoBox variant="kontakt" title="Diensteanbieter">
                    <p>
                        <strong>{COMPANY_INFO.name}</strong><br />
                        {COMPANY_INFO.owner}<br />
                        {COMPANY_INFO.address.street}<br />
                        {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}<br />
                        Bundesrepublik Deutschland
                    </p>
                </LegalInfoBox>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-6 mb-space-8">
                    <LegalInfoBox variant="kontakt" title="Vertretungsberechtigter">
                        <p>
                            <strong>Geschäftsführer:</strong><br />
                            Mehmet Tezgel
                        </p>
                    </LegalInfoBox>

                    <LegalInfoBox variant="kontakt" title="Kontakt">
                        <p>
                            Telefon: <a href={`tel:${COMPANY_INFO.phone?.replace(/\s/g, '')}`}>{COMPANY_INFO.phone}</a><br />
                            E-Mail: <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                        </p>
                    </LegalInfoBox>
                </div>

                <LegalInfoBox variant="hinweis">
                    <p>
                        Für eine schnelle und effiziente Kommunikation empfehlen wir die Kontaktaufnahme per E-Mail. Wir bemühen uns, Ihre Anfrage innerhalb von 24 Stunden zu beantworten.
                    </p>
                </LegalInfoBox>

                {/* ─── SEKTION 2: STEUERDATEN ─── */}
                <h2>2. Steuerdaten</h2>

                <p>
                    <strong>Steuernummer:</strong><br />
                    039/874/03159 (Finanzamt Wetzlar)
                </p>

                {/* ─── SEKTION 3: BERUFSRECHT ─── */}
                <h2>3. Berufsrechtliche Angaben</h2>
                <p>
                    Für unsere gartenbaulichen und handwerklichen Leistungen unterliegen wir den Bestimmungen der zuständigen Kammer sowie der deutschen Handwerksordnung (<LegalDefinition term="HwO" definition="Die Handwerksordnung regelt die Berufsausübung im Handwerk, insbesondere die Meisterpflicht für zulassungspflichtige Handwerke." />).
                </p>

                <LegalInfoBox variant="pflicht" title="Kammer & Berufsbezeichnung">
                    <p>
                        <strong>Zuständige Kammer:</strong> Handwerkskammer Wiesbaden, Bierstadter Str. 45, 65189 Wiesbaden<br />
                        <strong>Berufsbezeichnung:</strong> Garten- und Landschaftsbauer<br />
                        <strong>Staat der Verleihung:</strong> Bundesrepublik Deutschland<br />
                        <strong>Berufsrechtliche Regelungen:</strong> Handwerksordnung (HwO) – einsehbar unter <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer">gesetze-im-internet.de/hwo</a>
                    </p>
                </LegalInfoBox>

                {/* ─── SEKTION 4: REDAKTIONELL VERANTWORTLICHER ─── */}
                <h2>4. Verantwortlicher für redaktionelle Inhalte</h2>
                <p>
                    Verantwortlich für den Inhalt nach <strong>§ 18 Abs. 2 MStV (Medienstaatsvertrag)</strong>:
                </p>

                <LegalInfoBox variant="kontakt" title="Inhaltlich Verantwortlicher">
                    <p>
                        Mehmet Tezgel<br />
                        c/o {COMPANY_INFO.name}<br />
                        {COMPANY_INFO.address.street}<br />
                        {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
                    </p>
                </LegalInfoBox>

                {/* ─── SEKTION 5: STREITBEILEGUNG ─── */}
                <h2>5. Streitbeilegung und Verbraucherschlichtung</h2>

                <LegalInfoBox variant="wichtig" title="Hinweis zur Verbraucherschlichtung">
                    <p>
                        Die Europäische Kommission hat die Plattform zur Online-Streitbeilegung (OS-Plattform) zum <strong>20. Juli 2025 eingestellt</strong>. Ein Verweis auf diese Plattform entfällt daher.
                    </p>
                </LegalInfoBox>

                <p>
                    Wir sind konsequent bestrebt, etwaige Meinungsverschiedenheiten aus unserer Vertragsbeziehung einvernehmlich beizulegen. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer <LegalDefinition term="Verbraucherschlichtungsstelle" definition="Eine neutrale Einrichtung zur außergerichtlichen Beilegung von Streitigkeiten zwischen Verbrauchern und Unternehmen." /> sind wir jedoch weder bereit noch verpflichtet.
                </p>

                {/* ─── SEKTION 6: HAFTUNG FÜR INHALTE ─── */}
                <h2>6. Haftung für Inhalte</h2>

                <div className="mb-8">
                    <h3>Haftung für eigene Inhalte (§ 7 DDG)</h3>
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 <LegalDefinition term="DDG" definition="Digitale-Dienste-Gesetz – das seit Februar 2024 geltende deutsche Umsetzungsgesetz des EU Digital Services Act (DSA), ersetzt das bisherige TMG." /> für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                    </p>
                    <p>
                        Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                </div>

                <div className="mb-8">
                    <h3>Haftung für externe Links</h3>
                    <p>
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                    <p>
                        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                    </p>
                    <p>
                        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>
                </div>

                {/* ─── SEKTION 7: URHEBERRECHT ─── */}
                <h2>7. Urheberrecht & geistiges Eigentum</h2>

                <div className="mb-8">
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten (insbesondere Fotos, 3D-Renderings, Texte und Logos) unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                    <p>
                        Downloads und Kopien dieser Seite sind strengstens untersagt, es sei denn, sie geschehen für den ausschließlich privaten, nicht kommerziellen Gebrauch.
                    </p>
                    <p>
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                </div>

                <br />
                <p className="text-sm font-bold text-neutral-midgray">
                    Stand des Impressums: März 2026.
                </p>

                {/* ─── QUERVERWEISE ─── */}
                <LegalCrossLinks currentPath="/impressum" />
            </LegalLayout>
        </main>
    );
};
