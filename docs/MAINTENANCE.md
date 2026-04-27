# Wartungsplan — Memo BauT

## Wöchentlich

- [ ] `npm audit` ausführen → Critical/High Vulnerabilities sofort beheben
- [ ] Vercel Logs auf Fehler prüfen
- [ ] Google Analytics auf ungewöhnliche Patterns prüfen
- [ ] Kontaktformular-Submissions in Formspree Dashboard prüfen

## Monatlich

- [ ] `npm update` für Patch/Minor-Updates ausführen
- [ ] `npm run build && npm run lint` nach Updates validieren
- [ ] Google Search Console: Crawl-Fehler, Indexierungsprobleme prüfen
- [ ] Lighthouse-Audit auf Hauptseiten (Performance ≥ 90, SEO ≥ 95)
- [ ] Content-Aktualität prüfen (Telefonnummer, Öffnungszeiten, Preise)

## Quartalsweise

- [ ] Major-Dependency-Updates evaluieren (Vite, React, Tailwind)
- [ ] Security Headers re-audit (securityheaders.com → A+ Ziel)
- [ ] DSGVO-Compliance prüfen (Cookie Inventory aktuell?)
- [ ] Datenschutzerklärung auf Aktualität prüfen
- [ ] Formspree AVV/DPA Status prüfen

## Jährlich

- [ ] Vollständiger Security-Audit (Dependencies, Code, Infrastruktur)
- [ ] Accessibility-Compliance re-audit (WCAG 2.1 AA)
- [ ] Performance-Benchmark-Vergleich (Year over Year)
- [ ] Architektur-Review und Modernisierungsplan
- [ ] SSL-Zertifikat-Status prüfen (bei Custom Domain)
