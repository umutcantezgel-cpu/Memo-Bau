# Testing-Strategie — Memo BauT

## Architektur-Entscheidung

Dieses Projekt ist eine **statische 14-Seiten Vite/React SPA** ohne eigenen Backend-Server.
Vollständiges Vitest + Playwright + CI/CD wäre Over-Engineering (10X Non-Action).
Stattdessen setzen wir auf die folgenden, pragmatischen Quality Gates:

## 1. Build-basierte Validierung (Primary Gate)

```bash
npm run build     # tsc --noEmit && vite build
npm run lint      # eslint .
npm run check     # tsc --noEmit (standalone)
```

Alle drei müssen 0 Errors/Warnings liefern.

## 2. Anti-Spam (CC-09 — Implementiert)

| Mechanismus | Datei | Status |
|:---|:---|:---|
| Honeypot-Feld (`_gotcha`, `display: none`) | `QuickContactForm.tsx` | ✅ |
| Time-based Bot Detection (< 3s = reject) | `QuickContactForm.tsx` | ✅ |
| Submit-Throttle (10s Cooldown) | `QuickContactForm.tsx` | ✅ |
| DSGVO Consent Checkbox (required) | `QuickContactForm.tsx` | ✅ |

## 3. Manuelle Prüf-Checkliste (Pre-Deploy)

- [ ] Alle 13 Public Routes erreichbar (`/`, `/leistungen`, `/galerie`, `/kontakt`, `/ueber-uns`, etc.)
- [ ] Kontaktformular sendet an Formspree
- [ ] Calendly-Widget lädt korrekt
- [ ] Cookie-Banner erscheint beim Erstbesuch
- [ ] Mobile Navigation öffnet/schließt korrekt
- [ ] Kein visueller Overflow auf 360px Viewport

## 4. Lighthouse Quick-Check

```bash
# Über Chrome DevTools → Lighthouse Tab
# Zielwerte:
# Performance: ≥ 90
# Accessibility: ≥ 95
# Best Practices: ≥ 90
# SEO: ≥ 95
```

## 5. Future: Vitest Setup (bei Bedarf)

Falls zukünftig Unit-Tests benötigt werden:

```bash
npm install -D vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom
```

Empfohlene Prioritäten:
1. `analytics.ts` (trackEvent Funktion)
2. `QuickContactForm.tsx` (Formular-Logik + Anti-Spam)
3. `CookieConsent.tsx` (Consent State Management)
