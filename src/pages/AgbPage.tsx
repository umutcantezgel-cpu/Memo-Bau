import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { LegalLayout } from '../components/legal/LegalLayout';
import { LegalDefinition } from '../components/legal/LegalDefinition';
import { LegalAccordion } from '../components/legal/LegalAccordion';
import { LegalInfoBox } from '../components/legal/LegalInfoBox';
import { LegalCrossLinks } from '../components/legal/LegalCrossLinks';
import { COMPANY_INFO } from '../core/constants';

export const AgbPage: React.FC = () => {
    return (
        <main className="bg-neutral-white min-h-screen">
            <SEO
                title="AGB & Widerruf | Allgemeine Geschäftsbedingungen | Memo BauT"
                description={`Allgemeine Geschäftsbedingungen und Widerrufsbelehrung der ${COMPANY_INFO.name}. Vertragsgrundlagen, Zahlungskonditionen und Widerrufsrecht für Premium-Landschaftsbau.`}
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'AGB', url: '/agb' }
                ]}
            />

            <PageHero
                title="Allgemeine Geschäftsbedingungen"
                subtitle="Rechtliches"
                description="Vertragsgrundlagen, Zahlungskonditionen & Widerrufsrecht"
                backgroundImage="/images/final/service-planning.webp"
            />

            <LegalLayout lastUpdated="März 2026">
                <p className="lead text-lg font-medium text-neutral-darkgray border-l-4 border-accent-base pl-4 italic">
                    Nachfolgend finden Sie die Allgemeinen Geschäftsbedingungen (AGB) der {COMPANY_INFO.name}. Sie regeln die Vertragsbeziehungen für sämtliche Planungs-, Bau- und Dienstleistungen im Garten- und Landschaftsbau.
                </p>

                {/* ─── §1 GELTUNGSBEREICH ─── */}
                <h2>§ 1 Geltungsbereich</h2>
                <p>
                    <strong>1.1.</strong> Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, Lieferungen und sonstigen Leistungen zwischen der <strong>{COMPANY_INFO.name}</strong>, {COMPANY_INFO.address.street}, {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city} (nachfolgend „Auftragnehmer") und dem Kunden (nachfolgend „Auftraggeber").
                </p>
                <p>
                    <strong>1.2.</strong> Abweichende oder ergänzende Bedingungen des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
                </p>
                <p>
                    <strong>1.3.</strong> Soweit im Einzelfall bei gewerblichen Kunden (B2B) die <LegalDefinition term="VOB/B" definition="Vergabe- und Vertragsordnung für Bauleistungen, Teil B. Regelt die Allgemeinen Vertragsbedingungen für die Ausführung von Bauleistungen." /> in den Vertrag einbezogen wurde, gelten deren Bestimmungen vorrangig. Bei Verbrauchern gilt grundsätzlich das Werkvertragsrecht des <LegalDefinition term="BGB" definition="Bürgerliches Gesetzbuch. Zentrales Gesetzeswerk des deutschen Privatrechts, das u.a. das Werk- und Kaufvertragsrecht regelt." />.
                </p>

                {/* ─── §2 ANGEBOTE ─── */}
                <h2>§ 2 Angebote, Vertragsschluss & Urheberrecht</h2>
                <p>
                    <strong>2.1.</strong> Angebote des Auftragnehmers sind grundsätzlich unverbindlich und freibleibend, sofern sie nicht schriftlich als verbindlich gekennzeichnet sind.
                </p>
                <p>
                    <strong>2.2.</strong> Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung oder durch beiderseitige Unterzeichnung eines Bauvertrages zustande. Die bloße Übermittlung von Bauplänen oder Kostenvoranschlägen stellt keinen Vertragsschluss dar.
                </p>
                <p>
                    <strong>2.3.</strong> An von uns erstellten Entwürfen, Pflanzplänen, 3D-Visualisierungen und Kostenvoranschlägen behält sich die {COMPANY_INFO.name} das <strong>Urheber- und Eigentumsrecht</strong> vor. Sie dürfen Dritten ohne ausdrückliche schriftliche Zustimmung nicht zugänglich gemacht werden. Bei Nichtzustandekommen des Vertrags sind überlassene Unterlagen unverzüglich zurückzugeben.
                </p>

                {/* ─── §3 BAUAUSFÜHRUNG ─── */}
                <h2>§ 3 Bauausführung, Fristen & Witterung</h2>
                <p>
                    <strong>3.1.</strong> Die Ausführung erfolgt nach den anerkannten Regeln der Technik und gemäß dem vereinbarten Leistungsumfang.
                </p>
                <p>
                    <strong>3.2.</strong> Im Garten- und Landschaftsbau sind Ausführungsfristen stark witterungsabhängig. Verbindliche Fristenzusagen müssen ausdrücklich schriftlich als „Fixtermin" vereinbart werden.
                </p>
                <p>
                    <strong>3.3.</strong> Bei Witterungseinflüssen (Dauerfrost, Starkregen, Hitze), die eine fachgerechte Ausführung nicht zulassen, verschieben sich die Fristen angemessen um die Dauer der witterungsbedingten Behinderung.
                </p>

                {/* ─── §4 VERGÜTUNG ─── */}
                <h2>§ 4 Vergütung und Zahlungsbedingungen</h2>
                <p>
                    <strong>4.1.</strong> Alle Preise verstehen sich in Euro. Für Verbraucher brutto inkl. USt., für Unternehmer netto zzgl. USt.
                </p>
                <p>
                    <strong>4.2.</strong> Die {COMPANY_INFO.name} ist berechtigt, angemessene <LegalDefinition term="Abschlagszahlungen" definition="Teilzahlungen auf die gesamte Vertragssumme, die entsprechend dem Wert der bereits erbrachten Bauleistungen erhoben werden." /> (z.B. nach Bauabschnitten oder Materiallieferung) in Rechnung zu stellen.
                </p>
                <p>
                    <strong>4.3.</strong> Rechnungen sind <strong>innerhalb von 10 Tagen ohne Abzug</strong> fällig, sofern nicht anders vereinbart.
                </p>
                <p>
                    <strong>4.4.</strong> Bei Zahlungsverzug: Verbraucher 5 Prozentpunkte, gewerbliche Kunden 9 Prozentpunkte über dem Basiszinssatz.
                </p>

                {/* ─── §5 ABNAHME ─── */}
                <h2>§ 5 Abnahme und Gefahrenübergang</h2>
                <p>
                    <strong>5.1.</strong> Nach Fertigstellung fordert der Auftragnehmer den Auftraggeber zur Abnahme auf. Die Abnahme sollte schriftlich erfolgen.
                </p>
                <p>
                    <strong>5.2.</strong> Nimmt der Auftraggeber die Leistung trotz Aufforderung und Setzen einer angemessenen Frist nicht ab, gilt die Leistung mit Ablauf der Frist als abgenommen, sofern keine wesentlichen Mängel vorliegen.
                </p>
                <p>
                    <strong>5.3.</strong> Mit der Abnahme geht die Gefahr auf den Auftraggeber über.
                </p>

                {/* ─── §6 MITWIRKUNGSPFLICHTEN ─── */}
                <h2>§ 6 Mitwirkungspflichten des Auftraggebers</h2>
                <p>
                    <strong>6.1.</strong> Der Auftraggeber ist verpflichtet, dem Auftragnehmer das Baugrundstück frei und in einem Zustand zur Verfügung zu stellen, der die Ausführung der vereinbarten Arbeiten erlaubt. Bestehende Leitungen, Kabel und Einbauten sind dem Auftragnehmer <strong>vor Arbeitsbeginn</strong> mitzuteilen.
                </p>
                <p>
                    <strong>6.2.</strong> Der Auftraggeber stellt kostenlos Wasser- und Stromanschlüsse in zumutbarer Entfernung zur Baustelle zur Verfügung.
                </p>
                <p>
                    <strong>6.3.</strong> Der Auftraggeber sorgt für einen für Baufahrzeuge und Materialtransporte geeigneten <strong>Zugang zur Baustelle</strong>. Eventuelle Zusatzkosten durch erschwerte Zugangsbedingungen gehen zu Lasten des Auftraggebers, sofern sie bei Angebotsabgabe nicht bekannt waren.
                </p>

                <LegalInfoBox variant="wichtig" title="Hinweis für Verbraucher">
                    <p>
                        Die Mitwirkungspflichten dienen der reibungslosen Durchführung Ihres Projekts. Bei Fragen zu den Anforderungen beraten wir Sie gerne vorab und kostenfrei.
                    </p>
                </LegalInfoBox>

                {/* ─── §7 GEWÄHRLEISTUNG ─── */}
                <h2>§ 7 Gewährleistung</h2>
                <p>
                    <strong>7.1.</strong> Die Gewährleistung richtet sich nach den jeweils geltenden gesetzlichen Bestimmungen. Bei Verbrauchern gelten die Regelungen des BGB, bei Einbeziehung der VOB/B die dort vorgesehenen Fristen.
                </p>
                <p>
                    <strong>7.2.</strong> Bei lebenden Baustoffen (Pflanzen, Rollrasen, Saatgut) leistet der Auftragnehmer Gewähr für art- und fachgerechte Lieferung und Pflanzung.
                </p>
                <p>
                    <strong>7.3.</strong> Für das Anwachsen und die Entwicklung von Pflanzen wird keine gesonderte Gewährleistung übernommen, da diese von zahlreichen externen Faktoren abhängen (Witterung, Bodenbeschaffenheit, Pflege durch den Auftraggeber). Wir empfehlen den Abschluss eines separaten Pflegevertrags.
                </p>

                {/* ─── §8 EIGENTUMSVORBEHALT ─── */}
                <h2>§ 8 Eigentumsvorbehalt</h2>
                <p>
                    Bis zur vollständigen Begleichung aller Forderungen bleiben sämtliche gelieferten Materialien, Pflanzen und Ausstattungselemente, soweit sie nicht fest mit dem Grundstück verbunden wurden
                    (wesentliche Bestandteile), im Eigentum der {COMPANY_INFO.name}.
                </p>

                {/* ─── §9 HAFTUNG ─── */}
                <h2>§ 9 Haftungsbeschränkung</h2>
                <p>
                    <strong>9.1.</strong> Der Auftragnehmer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung von Leben, Körper und Gesundheit.
                </p>
                <p>
                    <strong>9.2.</strong> Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur, sofern eine wesentliche Vertragspflicht verletzt wird. In diesem Fall ist die Haftung auf den Ersatz des vorhersehbaren, vertragstypischen Schadens begrenzt.
                </p>

                <LegalInfoBox variant="wichtig" title="Verbraucherschutzhinweis">
                    <p>
                        Die vorstehenden Haftungsbeschränkungen gelten nicht gegenüber Verbrauchern, soweit sie mit den gesetzlichen Verbraucherschutzrechten unvereinbar wären. Ihre gesetzlichen Gewährleistungsrechte bleiben in jedem Fall unberührt.
                    </p>
                </LegalInfoBox>

                {/* ─── §10 WIDERRUFSBELEHRUNG ─── */}
                <h2>§ 10 Widerrufsbelehrung (für Verbraucher)</h2>
                <p>
                    Wenn Sie Verbraucher im Sinne des § 13 BGB sind und der Vertrag unter ausschließlicher Verwendung von Fernkommunikationsmitteln (z.B. E-Mail, Telefon) oder außerhalb von Geschäftsräumen geschlossen wurde, steht Ihnen ein gesetzliches Widerrufsrecht zu.
                </p>

                <LegalAccordion title="Vollständige Widerrufsbelehrung lesen">
                    <h4>Widerrufsrecht</h4>
                    <p>
                        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
                    </p>
                    <p>
                        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns:<br />
                        <strong>{COMPANY_INFO.name}</strong><br />
                        {COMPANY_INFO.address.street}, {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}<br />
                        E-Mail: {COMPANY_INFO.email}<br />
                        <br />
                        mittels einer eindeutigen Erklärung (z.B. per Post oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
                    </p>

                    <h4>Folgen des Widerrufs</h4>
                    <p>
                        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen unverzüglich und spätestens binnen vierzehn Tagen ab Eingang Ihrer Widerrufserklärung zurückzuzahlen. Wir verwenden dasselbe Zahlungsmittel wie bei der ursprünglichen Transaktion.
                    </p>
                    <p>
                        <strong>Wertersatzpflicht:</strong> Haben Sie verlangt, dass die Leistungen während der Widerrufsfrist beginnen, ist ein angemessener Betrag für die bereits erbrachten Leistungen zu zahlen.
                    </p>
                </LegalAccordion>

                <LegalAccordion title="Muster-Widerrufsformular">
                    <p>
                        (Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es per Post oder E-Mail an uns zurück.)
                    </p>
                    <div className="bg-neutral-offwhite p-space-6 rounded-[var(--radius-lg)] font-mono text-sm border border-neutral-lightgray">
                        <p>An:</p>
                        <p>{COMPANY_INFO.name}<br />
                            {COMPANY_INFO.address.street}<br />
                            {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}<br />
                            E-Mail: {COMPANY_INFO.email}</p>
                        <br />
                        <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung (*):</p>
                        <br />
                        <p>[Projektbezeichnung / Angebotsnummer]</p>
                        <br />
                        <p>Beauftragt am (*):</p>
                        <p>Name des/der Verbraucher(s):</p>
                        <p>Anschrift des/der Verbraucher(s):</p>
                        <br />
                        <p>Unterschrift (nur bei Papier):</p>
                        <p>Datum:</p>
                        <hr className="my-4 border-neutral-lightgray" />
                        <p className="text-xs text-neutral-midgray">(*) Unzutreffendes streichen.</p>
                    </div>
                </LegalAccordion>

                {/* ─── §11 DATENSCHUTZ ─── */}
                <h2>§ 11 Datenschutz</h2>
                <p>
                    <strong>11.1.</strong> Personenbezogene Daten, die im Rahmen der Vertragsanbahnung und -abwicklung erhoben werden, verarbeiten wir ausschließlich nach den Bestimmungen der DSGVO und des BDSG.
                </p>
                <p>
                    <strong>11.2.</strong> Ausführliche Informationen zur Datenverarbeitung, zu Ihren Rechten als betroffene Person und zur zuständigen Aufsichtsbehörde finden Sie in unserer <a href="/datenschutz">Datenschutzerklärung</a>.
                </p>

                {/* ─── §12 SCHLUSSBESTIMMUNGEN ─── */}
                <h2>§ 12 Schlussbestimmungen & Gerichtsstand</h2>
                <p>
                    <strong>12.1.</strong> Es gilt das Recht der Bundesrepublik Deutschland.
                </p>
                <p>
                    <strong>12.2.</strong> Ist der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher <strong>Gerichtsstand für alle Streitigkeiten {COMPANY_INFO.address.city}</strong> (AG Wetzlar). Dies gilt auch, wenn der Auftraggeber keinen allgemeinen Gerichtsstand in Deutschland hat.
                </p>
                <p>
                    <strong>12.3. Salvatorische Klausel:</strong> Sollten einzelne Bestimmungen unwirksam oder undurchführbar sein, bleibt die Wirksamkeit des Vertrages im Übrigen unberührt. An die Stelle der unwirksamen Bestimmung tritt die wirksame Regelung, deren Wirkungen der wirtschaftlichen Zielsetzung am nächsten kommen.
                </p>
                <p>
                    <strong>12.4.</strong> Änderungen und Ergänzungen des Vertrages bedürfen der Schriftform. Dies gilt auch für die Aufhebung dieser Schriftformklausel.
                </p>
                <p>
                    <strong>12.5.</strong> Die Europäische Kommission hat die Plattform zur Online-Streitbeilegung (OS-Plattform) zum 20. Juli 2025 eingestellt. Ein Verweis entfällt daher. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir weder bereit noch verpflichtet.
                </p>

                <br />
                <p className="text-sm font-bold text-neutral-midgray">
                    Stand der AGB: März 2026.
                </p>

                {/* ─── QUERVERWEISE ─── */}
                <LegalCrossLinks currentPath="/agb" />
            </LegalLayout>
        </main>
    );
};
