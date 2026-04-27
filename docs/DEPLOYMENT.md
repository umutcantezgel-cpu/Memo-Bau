# Deployment Guide — Memo BauT

## Voraussetzungen

- Node.js 18+
- npm 9+

## Lokale Entwicklung

```bash
# 1. Repository klonen
git clone <repo-url>
cd Memo-Bau-main

# 2. Dependencies installieren
npm install

# 3. Environment konfigurieren
cp .env.example .env.local
# → Werte in .env.local eintragen

# 4. Dev-Server starten
npm run dev
```

## Build & Vorschau

```bash
npm run build       # TypeScript Check + Vite Build
npm run check       # Nur TypeScript Check (ohne Build)
npm run lint        # ESLint
npm run format      # Prettier
```

## Deployment (Vercel)

### Automatisch (empfohlen)
1. Repository mit Vercel verbinden
2. Environment Variables im Vercel Dashboard setzen:
   - `VITE_FORMSPREE_ENDPOINT` (Production)
   - `VITE_GA_MEASUREMENT_ID` (Production, optional)
3. Push zu `main` → automatisches Production Deployment
4. Pull Requests → automatische Preview Deployments

### Manuell (CLI)
```bash
npx vercel          # Preview Deployment
npx vercel --prod   # Production Deployment
```

### Security Headers
Alle HTTP Security Headers werden über `vercel.json` konfiguriert:
- HSTS (2 Jahre, includeSubDomains, preload)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- CSP (Whitelist: self, Formspree, Calendly, GA4)
- Permissions-Policy (Camera, Mic, Geo deaktiviert)

## Rollback

### Über Vercel Dashboard
1. Vercel Dashboard → Deployments
2. Vorheriges Deployment auswählen
3. "Promote to Production" klicken

### Über CLI
```bash
npx vercel rollback
```

## Architektur-Übersicht

| Komponente | Technologie |
|:---|:---|
| Framework | Vite + React 18 |
| Sprache | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Animationen | Framer Motion |
| Formulare | Formspree |
| Termine | Calendly (react-calendly) |
| Analytics | GA4 (consent-gated) |
| Hosting | Vercel |

## Externe Dienste

| Service | Zweck | Dashboard |
|:---|:---|:---|
| Formspree | Kontaktformular | formspree.io/dashboard |
| Calendly | Terminbuchung | calendly.com/event_types |
| Google Analytics 4 | Website-Analyse (opt-in) | analytics.google.com |
| Vercel | Hosting & CDN | vercel.com/dashboard |
