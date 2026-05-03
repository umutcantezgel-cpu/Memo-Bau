import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { LegalLayout } from '../components/legal/LegalLayout';
import { LegalDefinition } from '../components/legal/LegalDefinition';
import { LegalAccordion } from '../components/legal/LegalAccordion';
import { LegalInfoBox } from '../components/legal/LegalInfoBox';
import { LegalCrossLinks } from '../components/legal/LegalCrossLinks';
import { COMPANY_INFO } from '../core/constants';

export const PrivacyPage: React.FC = () => {
    return (
        <main className="bg-neutral-white min-h-screen">
            <SEO
                title="Datenschutzerklärung | Memo-BauT – Sicherheit & Transparenz"
                description={`Umfassende Informationen zum Datenschutz (DSGVO) und zur Verarbeitung Ihrer personenbezogenen Daten bei der ${COMPANY_INFO.name}. Ihre Rechte, unsere Drittanbieter und Löschkonzepte.`}
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Datenschutz', url: '/datenschutz' }
                ]}
            />

            <PageHero
                title="Datenschutzerklärung"
                subtitle="Sicherheit & Transparenz"
                description="Informationen zur sicheren Verarbeitung Ihrer Daten gemäß DSGVO."
                backgroundImage="/images/final/gallery-02.webp"
            />

            <LegalLayout lastUpdated="März 2026">
                <p className="lead text-lg font-medium text-neutral-darkgray border-l-4 border-accent-base pl-4 italic">
                    Der Schutz Ihrer persönlichen Daten hat bei der {COMPANY_INFO.name} höchste Priorität. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (<LegalDefinition term="DSGVO" definition="Datenschutz-Grundverordnung – die seit Mai 2018 geltende EU-Verordnung zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten." />) sowie dieser Datenschutzerklärung.
                </p>

                {/* ─── KAPITEL 1 ─── */}
                <h2>1. Datenschutz auf einen Blick</h2>
                <p>
                    Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren <LegalDefinition term="personenbezogenen Daten" definition="Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z.B. Name, Adresse, IP-Adresse, E-Mail)." /> passiert, wenn Sie unsere Website besuchen.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-6 mb-space-8 mt-space-8">
                    <LegalInfoBox variant="pflicht" title="Wer erfasst Ihre Daten?">
                        <p>
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:<br />
                            <strong>{COMPANY_INFO.name}</strong><br />
                            {COMPANY_INFO.address.street}, {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
                        </p>
                    </LegalInfoBox>
                    <LegalInfoBox variant="pflicht" title="Wie erfassen wir Daten?">
                        <p>
                            Zum einen, indem Sie uns diese mitteilen (z.B. Kontaktformular). Andere Daten werden automatisch (<LegalDefinition term="Server-Logs" definition="Technische Zugriffsprotokolle des Webservers, die bei jedem Seitenaufruf automatisch erstellt werden." />) bei der Websitenutzung erfasst.
                        </p>
                    </LegalInfoBox>
                </div>

                {/* ─── KAPITEL 2 ─── */}
                <h2>2. Verantwortliche Stelle</h2>
                <p>
                    Verantwortliche Stelle für die Datenverarbeitung ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung entscheidet.
                </p>

                <LegalInfoBox variant="kontakt" title="Verantwortlicher">
                    <p>
                        <strong>{COMPANY_INFO.name}</strong><br />
                        {COMPANY_INFO.address.street}<br />
                        {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}<br />
                        Telefon: <a href={`tel:${COMPANY_INFO.phone?.replace(/\s/g, '')}`}>{COMPANY_INFO.phone}</a><br />
                        E-Mail: <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                    </p>
                </LegalInfoBox>

                {/* ─── KAPITEL 3 ─── */}
                <h2>3. Allgemeine Hinweise zur Datenverarbeitung</h2>

                <h3>Rechtsgrundlagen</h3>
                <p>
                    Die Verarbeitung Ihrer Daten erfolgt stets auf Basis einer Rechtsgrundlage. Die wichtigsten Rechtsgrundlagen nach der DSGVO sind:
                </p>
                <ul>
                    <li><strong>Einwilligung</strong> (<LegalDefinition term="Art. 6 Abs. 1 lit. a DSGVO" definition="Rechtsgrundlage der Einwilligung. Die betroffene Person hat ihre Einwilligung zur Verarbeitung für einen oder mehrere bestimmte Zwecke gegeben." />) – Sie haben Ihre ausdrückliche Zustimmung gegeben.</li>
                    <li><strong>Vertragserfüllung</strong> (Art. 6 Abs. 1 lit. b DSGVO) – Die Verarbeitung ist zur Erfüllung eines Vertrags erforderlich.</li>
                    <li><strong>Rechtliche Verpflichtung</strong> (Art. 6 Abs. 1 lit. c DSGVO) – Wir sind gesetzlich zur Verarbeitung verpflichtet.</li>
                    <li><strong>Berechtigtes Interesse</strong> (Art. 6 Abs. 1 lit. f DSGVO) – Die Verarbeitung dient unserem berechtigten Interesse, sofern Ihre Grundrechte nicht überwiegen.</li>
                </ul>

                <h3>Speicherdauer</h3>
                <p>
                    Soweit innerhalb dieser Datenschutzerklärung keine spezielle Speicherdauer genannt wird, verbleiben Ihre Daten bei uns, bis der Zweck für die Verarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für deren Speicherung haben (z.B. steuerliche Aufbewahrungsfristen von 10 Jahren).
                </p>

                <h3>Widerruf Ihrer Einwilligung</h3>
                <LegalInfoBox variant="wichtig" title="Ihr Widerrufsrecht">
                    <p>
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung <strong>jederzeit formlos</strong> (z.B. per E-Mail an {COMPANY_INFO.email}) widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.
                    </p>
                </LegalInfoBox>

                {/* ─── KAPITEL 4: BETROFFENENRECHTE ─── */}
                <h2>4. Ihre Rechte als betroffene Person</h2>
                <p>
                    Nach der DSGVO stehen Ihnen umfassende Rechte bezüglich Ihrer personenbezogenen Daten zu. Im Folgenden erläutern wir jedes Recht einzeln:
                </p>

                <LegalAccordion title="Recht auf Auskunft (Art. 15 DSGVO)">
                    <p>
                        Sie haben das Recht, jederzeit unentgeltlich Auskunft über die bei uns gespeicherten personenbezogenen Daten zu verlangen. Dies umfasst Informationen über die Verarbeitungszwecke, die Kategorien der Daten, die Empfänger, die geplante Speicherdauer sowie die Herkunft der Daten.
                    </p>
                    <p>
                        <strong>So üben Sie dieses Recht aus:</strong> Senden Sie eine E-Mail an <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a> mit dem Betreff „Auskunftsersuchen nach Art. 15 DSGVO".
                    </p>
                </LegalAccordion>

                <LegalAccordion title="Recht auf Berichtigung (Art. 16 DSGVO)">
                    <p>
                        Sie haben das Recht, unverzüglich die Berichtigung unrichtiger personenbezogener Daten zu verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie das Recht, die Vervollständigung unvollständiger Daten zu verlangen.
                    </p>
                </LegalAccordion>

                <LegalAccordion title="Recht auf Löschung (Art. 17 DSGVO)">
                    <p>
                        Sie haben das Recht, die unverzügliche Löschung Ihrer Daten zu verlangen, sofern einer der folgenden Gründe zutrifft: Die Daten sind für die Zwecke, für die sie erhoben wurden, nicht mehr notwendig; Sie widerrufen Ihre Einwilligung; Sie legen Widerspruch ein und es liegen keine vorrangigen berechtigten Gründe vor.
                    </p>
                    <p>
                        <strong>Einschränkung:</strong> Das Recht auf Löschung besteht nicht, wenn die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung (z.B. steuerliche Aufbewahrungspflichten) erforderlich ist.
                    </p>
                </LegalAccordion>

                <LegalAccordion title="Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)">
                    <p>
                        Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen, wenn Sie die Richtigkeit der Daten bestreiten, die Verarbeitung unrechtmäßig ist, wir die Daten nicht mehr benötigen oder Sie Widerspruch eingelegt haben.
                    </p>
                </LegalAccordion>

                <LegalAccordion title="Recht auf Datenübertragbarkeit (Art. 20 DSGVO)">
                    <p>
                        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                    </p>
                </LegalAccordion>

                <LegalAccordion title="Widerspruchsrecht (Art. 21 DSGVO)">
                    <LegalInfoBox variant="wichtig">
                        <p>
                            Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie <strong>jederzeit</strong> das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Widerspruch einzulegen.
                        </p>
                    </LegalInfoBox>
                </LegalAccordion>

                <LegalAccordion title="Beschwerderecht bei der Aufsichtsbehörde">
                    <p>
                        Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
                    </p>
                    <LegalInfoBox variant="kontakt" title="Zuständige Aufsichtsbehörde">
                        <p>
                            <strong>Der Hessische Beauftragte für Datenschutz und Informationsfreiheit</strong><br />
                            Gustav-Stresemann-Ring 1<br />
                            65189 Wiesbaden<br />
                            <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer">datenschutz.hessen.de</a>
                        </p>
                    </LegalInfoBox>
                </LegalAccordion>

                {/* ─── KAPITEL 5 ─── */}
                <h2>5. SSL- bzw. TLS-Verschlüsselung</h2>
                <p>
                    Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte nutzt diese Website eine <LegalDefinition term="TLS-Verschlüsselung" definition="Transport Layer Security – kryptographisches Protokoll zur sicheren Datenübertragung im Internet, erkennbar am 'https://' in der Adresszeile." />. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol.
                </p>

                {/* ─── KAPITEL 6 ─── */}
                <h2>6. Hosting & Server-Logfiles</h2>
                <h3>Externes Hosting</h3>
                <p>
                    Diese Website wird bei der Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Die Domainregistrierung erfolgt über die STRATO AG (Pascalstraße 10, 10587 Berlin). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf Servern des Hosters gespeichert. Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Der Einsatz erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherer Bereitstellung).
                </p>
                <p>
                    Wir haben einen Vertrag über <LegalDefinition term="Auftragsverarbeitung (AVV)" definition="Vertrag gemäß Art. 28 DSGVO, der sicherstellt, dass ein externer Dienstleister weisungsgebunden und datenschutzkonform personenbezogene Daten verarbeitet." /> mit unserem Hosting-Anbieter geschlossen.
                </p>

                <h3>Server-Log-Dateien</h3>
                <p>
                    Der Provider erhebt und speichert automatisch Informationen in Server-Log-Dateien. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Erfasst werden:
                </p>
                <ul>
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL (die zuvor besuchte Seite)</li>
                    <li>Hostname des zugreifenden Rechners (verkürzte IP)</li>
                    <li>Uhrzeit der Serveranfrage</li>
                </ul>
                <p>
                    Diese Daten werden nach einer statistischen und sicherheitstechnischen Auswertung regelmäßig (meist nach 7–14 Tagen) automatisch gelöscht.
                </p>

                {/* ─── KAPITEL 7 ─── */}
                <h2>7. Cookies & Speichertechnologien</h2>
                <p>
                    Unsere Website verwendet teilweise Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
                </p>
                <p>
                    Cookies, die zur Bereitstellung bestimmter Funktionen zwingend erforderlich sind (<LegalDefinition term="technisch notwendige Cookies" definition="Cookies, ohne die die Website nicht wie vorgesehen funktionieren würde (z.B. Consent-Status, Spracheinstellungen). Erfordern keine Einwilligung." />), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO sowie dem <LegalDefinition term="TDDDG" definition="Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz – seit 2024 die offizielle Bezeichnung des vormaligen TTDSG." /> gespeichert.
                </p>
                <p>
                    Andere Cookies (z.B. für Analytics) werden nur mit Ihrer ausdrücklichen Zustimmung gesetzt (Art. 6 Abs. 1 lit. a DSGVO). Diese Zustimmung können Sie über die Cookie-Einstellungen im Footer jederzeit widerrufen oder anpassen.
                </p>

                <LegalInfoBox variant="hinweis">
                    <p>
                        Detaillierte Informationen über die auf dieser Website verwendeten Cookies, deren Zweck, Anbieter und Lebensdauer finden Sie in unserer <a href="/cookie-richtlinie">Cookie-Richtlinie</a>.
                    </p>
                </LegalInfoBox>

                {/* ─── KAPITEL 8 ─── */}
                <h2>8. Kontaktformular & E-Mail-Anfragen</h2>
                <p>
                    Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
                </p>

                <LegalInfoBox variant="pflicht" title="Verarbeitete Daten">
                    <p>Name, E-Mail-Adresse, Telefonnummer (optional), Nachrichteninhalt, IP-Adresse und Zeitstempel der Anfrage.</p>
                </LegalInfoBox>

                {/* ─── KAPITEL 9 ─── */}
                <h2>9. Terminbuchung (Calendly)</h2>
                <p>
                    Für die Online-Terminbuchung nutzen wir das Tool „Calendly" (Calendly LLC, Atlanta, GA, USA). Die eingegebenen Daten werden an Server von Calendly übertragen (teilweise in die USA).
                </p>

                <LegalInfoBox variant="wichtig" title="Drittlandübermittlung USA">
                    <p>
                        Calendly ist zertifiziert unter dem <LegalDefinition term="EU-US Data Privacy Framework" definition="Abkommen zwischen der EU und den USA vom Juli 2023, das den sicheren Datentransfer in die USA für zertifizierte Unternehmen regelt." /> und gewährleistet ein angemessenes europäisches Datenschutzniveau. Die Einbindung erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                    </p>
                </LegalInfoBox>

                {/* ─── KAPITEL 10 ─── */}
                <h2>10. Karteneinbindung (OpenStreetMap / Leaflet)</h2>
                <p>
                    Für die Darstellung interaktiver Karten verwenden wir OpenStreetMap-Kartenkacheln über die Leaflet-Bibliothek. Beim Laden der Karte wird Ihre IP-Adresse an die Server der OpenStreetMap Foundation (OSMF) übertragen. Die Einbindung erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung über unseren Cookie-Banner (2-Klick-Lösung) gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können diese Einwilligung jederzeit widerrufen.
                </p>

                {/* ─── KAPITEL 11 ─── */}
                <h2>11. Schriftarten (lokal gehostet)</h2>
                <p>
                    Diese Website verwendet die Schriftart „Inter", die <strong>lokal auf unserem Server gehostet</strong> wird. Beim Aufruf der Website werden keine Anfragen an externe Schriftarten-Server (z.B. Google Fonts) gesendet. Es findet kein Datentransfer an Google oder andere Drittanbieter für die Schriftarten-Bereitstellung statt.
                </p>

                {/* ─── KAPITEL 12 ─── */}
                <h2>12. Social Media Präsenzen</h2>
                <p>
                    Wir unterhalten Onlinepräsenzen in sozialen Netzwerken, um mit dort aktiven Kunden und Interessenten zu kommunizieren. Beim Aufruf der jeweiligen Netzwerke gelten die Geschäftsbedingungen und Datenschutzbestimmungen der jeweiligen Betreiber.
                </p>

                {/* ─── KAPITEL 13 ─── */}
                <h2>13. Änderungen dieser Datenschutzerklärung</h2>
                <p>
                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Das aktuelle Datum der letzten Aktualisierung finden Sie im Inhaltsverzeichnis dieser Seite.
                </p>

                <br />
                <p className="text-sm font-bold text-neutral-midgray">
                    Stand der Datenschutzerklärung: April 2026.
                </p>

                {/* ─── QUERVERWEISE ─── */}
                <LegalCrossLinks currentPath="/datenschutz" />
            </LegalLayout>
        </main>
    );
};
