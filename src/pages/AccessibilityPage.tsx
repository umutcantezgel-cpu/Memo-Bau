import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { LegalLayout } from '../components/legal/LegalLayout';
import { LegalInfoBox } from '../components/legal/LegalInfoBox';
import { LegalCrossLinks } from '../components/legal/LegalCrossLinks';
import { COMPANY_INFO } from '../core/constants';

export const AccessibilityPage: React.FC = () => {
    return (
        <main className="bg-neutral-white min-h-screen">
            <SEO
                title="Barrierefreiheit | Memo BauT"
                description={`Barrierefreiheitserklärung der ${COMPANY_INFO.name}. Informationen zu unserem Engagement für digitale Barrierefreiheit, Konformitätsstatus und Feedback-Möglichkeiten.`}
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Barrierefreiheit', url: '/barrierefreiheit' }
                ]}
            />

            <PageHero
                title="Barrierefreiheit"
                subtitle="Für alle zugänglich"
                description="Unser Engagement für digitale Barrierefreiheit."
                backgroundImage="/images/final/gallery-05.webp"
            />

            <LegalLayout lastUpdated="März 2026">
                <p className="lead text-lg font-medium text-neutral-darkgray border-l-4 border-accent-base pl-4 italic">
                    Die {COMPANY_INFO.name} hat sich zum Ziel gesetzt, ihre Website so barrierefrei wie möglich zu gestalten. Wir möchten sicherstellen, dass alle Menschen – unabhängig von körperlichen, sensorischen oder kognitiven Einschränkungen – Zugang zu unseren digitalen Angeboten haben.
                </p>

                {/* ─── Konformitätsstatus ─── */}
                <h2>1. Konformitätsstatus</h2>
                <p>
                    Diese Website strebt die Konformität mit den <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> an. Die WCAG Richtlinien sind ein international anerkannter Standard für die barrierefreie Gestaltung von Webinhalten, entwickelt vom World Wide Web Consortium (W3C).
                </p>

                <LegalInfoBox variant="pflicht" title="Aktueller Status">
                    <p>
                        <strong>Weitgehend barrierefrei</strong> – Unsere Website erfüllt die meisten Anforderungen der WCAG 2.1 Level AA. Wir arbeiten kontinuierlich daran, verbleibende Barrieren zu identifizieren und zu beseitigen.
                    </p>
                </LegalInfoBox>

                {/* ─── Maßnahmen ─── */}
                <h2>2. Unsere Maßnahmen</h2>
                <p>
                    Wir haben folgende Maßnahmen ergriffen, um die Barrierefreiheit unserer Website zu gewährleisten:
                </p>
                <ul>
                    <li><strong>Semantisches HTML:</strong> Korrekte Verwendung von HTML5 Elementen (header, nav, main, footer, section, article) für eine logische Dokumentstruktur.</li>
                    <li><strong>Tastaturnavigation:</strong> Alle interaktiven Elemente sind vollständig per Tastatur bedienbar. Sichtbare Fokus Indikatoren zeigen die aktuelle Position.</li>
                    <li><strong>Farbkontraste:</strong> Alle Text Hintergrund Kombinationen erfüllen mindestens die WCAG AA Kontrastanforderungen (4.5:1 für normalen Text, 3:1 für großen Text).</li>
                    <li><strong>Alternative Texte:</strong> Alle inhaltlichen Bilder verfügen über aussagekräftige Alt Texte. Dekorative Bilder sind für Screenreader versteckt.</li>
                    <li><strong>Skip Links:</strong> Ein „Zum Hauptinhalt springen" Link ermöglicht es Tastaturnutzern, die Navigation zu überspringen.</li>
                    <li><strong>Responsive Design:</strong> Die Website ist für alle Bildschirmgrößen optimiert und funktioniert auf allen gängigen Geräten.</li>
                    <li><strong>ARIA Attribute:</strong> Interaktive Komponenten (Akkordeons, Menüs, Formulare) verfügen über korrekte ARIA Attribute für Screenreader Kompatibilität.</li>
                    <li><strong>Reduzierte Bewegung:</strong> Bei aktivierter „prefers reduced motion" Einstellung werden alle Animationen deaktiviert.</li>
                </ul>

                {/* ─── Bekannte Einschränkungen ─── */}
                <h2>3. Bekannte Einschränkungen</h2>
                <p>
                    Trotz unserer Bemühungen sind uns folgende Einschränkungen bekannt:
                </p>

                <LegalInfoBox variant="hinweis" title="Interaktive Karte">
                    <p>
                        Die interaktive Standortkarte (basierend auf Leaflet/OpenStreetMap) ist nur eingeschränkt mit Screenreadern und per Tastatur bedienbar. <strong>Alternative:</strong> Die vollständige Adresse aller Standorte ist als Text auf der jeweiligen Standortseite verfügbar.
                    </p>
                </LegalInfoBox>

                <LegalInfoBox variant="hinweis" title="PDF Dokumente">
                    <p>
                        Einige ältere PDF Dokumente sind möglicherweise nicht vollständig barrierefrei. Wir arbeiten daran, diese sukzessive durch barrierefreie Versionen zu ersetzen. Kontaktieren Sie uns gerne, wenn Sie ein bestimmtes Dokument in einem zugänglichen Format benötigen.
                    </p>
                </LegalInfoBox>

                <LegalInfoBox variant="hinweis" title="Externe Dienste">
                    <p>
                        Eingebundene Drittanbieter Dienste (z.B. Calendly für Terminbuchungen) unterliegen den Barrierefreiheitsstandards der jeweiligen Anbieter und liegen teilweise außerhalb unserer Kontrolle.
                    </p>
                </LegalInfoBox>

                {/* ─── Feedback ─── */}
                <h2>4. Feedback & Kontakt</h2>
                <p>
                    Wir nehmen Barrierefreiheit ernst und freuen uns über Ihr Feedback. Wenn Sie auf Barrieren stoßen oder Verbesserungsvorschläge haben, kontaktieren Sie uns bitte:
                </p>

                <LegalInfoBox variant="kontakt" title="Barrierefreiheits Feedback">
                    <p>
                        <strong>{COMPANY_INFO.name}</strong><br />
                        E Mail: <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a><br />
                        Telefon: <a href={`tel:${COMPANY_INFO.phone?.replace(/\s/g, '')}`}>{COMPANY_INFO.phone}</a><br />
                        <br />
                        Bitte beschreiben Sie das Problem möglichst genau (Seite, Browser, assistive Technologie). Wir bemühen uns, innerhalb von <strong>14 Tagen</strong> zu antworten und Lösungen anzubieten.
                    </p>
                </LegalInfoBox>

                {/* ─── Durchsetzungsverfahren ─── */}
                <h2>5. Durchsetzungsverfahren</h2>
                <p>
                    Sollte eine zufriedenstellende Lösung über unser Feedback Verfahren nicht möglich sein, können Sie sich an die zuständige Durchsetzungsstelle wenden. In Hessen ist dies:
                </p>

                <LegalInfoBox variant="kontakt" title="Durchsetzungsstelle">
                    <p>
                        <strong>Hessisches Ministerium für Soziales und Integration</strong><br />
                        Durchsetzungsstelle für digitale Barrierefreiheit<br />
                        Sonnenberger Straße 2/2a<br />
                        65193 Wiesbaden
                    </p>
                </LegalInfoBox>

                {/* ─── Erstellung ─── */}
                <h2>6. Erstellung und Überprüfung</h2>
                <p>
                    Diese Erklärung wurde am 01. März 2026 erstellt. Die technische Überprüfung der Barrierefreiheit erfolgte durch interne Prüfung unter Einsatz von Lighthouse Accessibility Audits, manuellen Tastaturnavigationstests und Screenreader Stichproben.
                </p>

                <br />
                <p className="text-sm font-bold text-neutral-midgray">
                    Stand der Barrierefreiheitserklärung: März 2026.
                </p>

                <LegalCrossLinks currentPath="/barrierefreiheit" />
            </LegalLayout>
        </main>
    );
};
