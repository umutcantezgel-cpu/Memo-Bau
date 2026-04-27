# Security-Checkliste — Memo BauT

## Automatisierter Schutz (bereits implementiert)

- [x] **React XSS-Schutz**: JSX escaped standardmäßig alle Werte
- [x] **Kein `dangerouslySetInnerHTML`**: Nicht verwendet im gesamten Projekt
- [x] **Honeypot Anti-Spam** (`_gotcha`): Hidden field in QuickContactForm
- [x] **Time-Based Bot Detection**: Submissions < 3s nach Mount werden abgelehnt
- [x] **Submit Throttle**: 10s Cooldown nach erfolgreichem Submit
- [x] **DSGVO Cookie Consent**: Granularer 3-Kategorien Consent-Manager
- [x] **GA4 Consent-Gating**: Kein Tracking ohne explizites Opt-in
- [x] **Formspree Origin-Check**: Nur erlaubte Domains können submittieren
- [x] **Security Headers** (via `vercel.json`): HSTS, CSP, X-Frame-Options, Referrer-Policy
- [x] **CSP Whitelist**: Nur self, Formspree, Calendly, GA4 erlaubt
- [x] **Keine Secrets im Client-Bundle**: Nur öffentliche IDs (`VITE_*`)
- [x] **HTTPS erzwungen**: HSTS mit 2-Jahre max-age
- [x] **Lock-File im Git**: `package-lock.json` committed

## Manuelle Prüfung (Pre-Deploy)

- [ ] `npm audit` ausführen → 0 Critical, 0 High
- [ ] **XSS**: `<script>alert(1)</script>` in Kontaktformular eingeben → wird escaped
- [ ] **Clickjacking**: Website in iframe einbetten → wird durch X-Frame-Options blockiert
- [ ] **HTTPS**: `http://` URL aufrufen → Redirect zu `https://`
- [ ] **Source Maps**: Prüfen ob `.map` Dateien in Production erreichbar sind
- [ ] **Cookie Flags**: Alle Cookies haben SameSite=Lax (via CookieConsent)
- [ ] **Lighthouse Best Practices**: ≥ 90/100

## DSGVO-Compliance

- [x] Datenschutzerklärung (`/datenschutz`) vorhanden
- [x] Impressum (`/impressum`) vorhanden mit §5 TMG Pflichtangaben
- [x] Cookie-Banner mit "Alle Akzeptieren" / "Nur Notwendige" / "Anpassen"
- [x] Granulare Cookie-Einstellungen nachträglich änderbar (Footer-Link)
- [x] Cookie-Inventar dokumentiert (`src/lib/cookie-inventory.ts`, `public/COOKIE_INVENTORY.md`)
- [x] Formspree: AVV / DPA prüfen (formspree.io/legal/dpa)
- [x] Calendly: AVV / DPA prüfen (calendly.com/privacy)
- [x] Google Analytics: IP-Anonymisierung aktiviert (`anonymize_ip: true`)
