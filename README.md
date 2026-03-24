<p align="center">
  <img src="public/images/logo.webp" alt="Memo BauT Logo" width="120" />
</p>

<h1 align="center">Memo BauT – Premium Website</h1>

<p align="center">
  <strong>Exklusive Gartengestaltung & Landschaftsarchitektur · Werdorf / Wetzlar</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

##  Über das Projekt

Vollständig responsive, performante Premium-Website für die **Memo BauT** – ein Garten- und Landschaftsbauunternehmen aus Werdorf bei Wetzlar. Die Website vereint modernes Design mit rechtssicherer Compliance und bietet Besuchern ein erstklassiges digitales Erlebnis.

###  Highlights

| Feature | Beschreibung |
|---|---|
|  **Interaktive Standortkarte** | Leaflet-basierte Karte mit Einzugsgebiet & Standort-Markern |
|  **Galerie mit Lightbox** | Projektgalerie mit Kategorie-Filtern und Vollbild-Ansicht |
|  **Calendly-Integration** | Online-Terminbuchung direkt auf der Website |
|  **Mobile-First Design** | Optimiert für alle Geräte ab 320px Breite |
|  **15× Premium-Rechtsseiten** | Impressum, Datenschutz (14 Kapitel), AGB, Cookie-Richtlinie, Barrierefreiheit |
|  **Barrierefreiheit** | WCAG 2.1 AA konform mit Tastatur-Navigation & Reduced-Motion |
|  **SEO-optimiert** | Meta-Tags, Sitemap, robots.txt, semantisches HTML, Open Graph |
|  **Performance** | Code-Splitting, Lazy-Loading, Gzip-Kompression, optimierte Bilder |

---

##  Tech Stack

| Kategorie | Technologie |
|---|---|
| **Framework** | React 18 + TypeScript 5.9 |
| **Styling** | Tailwind CSS 4.1 + Custom Design-System |
| **Animationen** | Framer Motion 12 |
| **Routing** | React Router v7 |
| **Icons** | Lucide React |
| **Karten** | Leaflet + React-Leaflet |
| **Terminbuchung** | React-Calendly |
| **SEO** | React-Helmet-Async |
| **Build** | Vite 6.3 + SWC |
| **Linting** | ESLint 9 + Prettier |
| **Deployment** | Netlify / Vercel |

---

## 📁 Projektstruktur

```
src/
├── admin/              # Admin-Dashboard (CMS-ähnlich)
├── components/
│   ├── common/         # Wiederverwendbare UI-Komponenten (Reveal, CookieConsent, SEO)
│   ├── features/       # Feature-Komponenten (Calendly, QuickContact, ConsentBanner)
│   ├── layout/         # Layout-Komponenten (Header, Footer, Section)
│   ├── legal/          # Rechtsseiten-Komponenten (LegalLayout, LegalTOC, LegalInfoBox)
│   └── sections/       # Homepage-Sektionen (Hero, Services, Stats, Testimonials)
├── context/            # React Context (ThemeProvider)
├── core/               # Konstanten, Theme, Konfiguration
├── data/               # Statische Daten (FAQ, Services)
├── hooks/              # Custom Hooks (IntersectionObserver, useDebounce)
├── pages/              # Seiten-Komponenten (13 Pages)
├── services/           # API-Services (Admin Auth, Portfolio, Testimonials)
├── styles/             # Globale Styles
└── types/              # TypeScript Type-Definitionen
```

---

##  Schnellstart

### Voraussetzungen

- **Node.js** ≥ 18.0
- **npm** ≥ 9.0

### Installation

```bash
# Repository klonen
git clone https://github.com/umutcantezgel-cpu/Memo-Bau.git
cd Memo-Bau

# Abhängigkeiten installieren
npm install

# Umgebungsvariablen konfigurieren
cp .env.example .env
```

### Development Server

```bash
npm run dev
```

Öffne [http://localhost:5173](http://localhost:5173) im Browser.

### Produktions-Build

```bash
npm run build
```

Der Build wird in `build/` erzeugt und enthält automatisch eine generierte `sitemap.xml`.

### Weitere Befehle

| Befehl | Beschreibung |
|---|---|
| `npm run dev` | Startet den Vite Dev-Server |
| `npm run build` | Erstellt den Produktions-Build |
| `npm run check` | TypeScript-Typprüfung |
| `npm run lint` | ESLint-Analyse |
| `npm run format` | Code-Formatierung mit Prettier |

---

##  Umgebungsvariablen

Erstelle eine `.env`-Datei basierend auf `.env.example`:

| Variable | Beschreibung | Required |
|---|---|---|
| `VITE_CALENDLY_URL` | Calendly Terminbuchungs-URL | Optional |
| `VITE_GEMINI_API_KEY` | Google Gemini API Key (Admin-Chat) | Optional |

---

##  Deployment

### Netlify

Die `netlify.toml` ist bereits konfiguriert:

```bash
# Automatisches Deployment über Git-Push
# Build-Befehl: npm run build
# Publish-Verzeichnis: build
```

### Vercel

Die `vercel.json` ist bereits konfiguriert mit Rewrites für SPA-Routing.

---

##  Seiten

| Seite | Route | Beschreibung |
|---|---|---|
| Startseite | `/` | Hero, Leistungen, Prozess, Galerie-Preview, Testimonials |
| Leistungen | `/leistungen` | 6 Leistungskategorien mit Detail-Karten |
| Projekte | `/projekte` | Bildergalerie mit Lightbox |
| Standorte | `/standorte` | Interaktive Karte + Einzugsgebiet |
| Über Uns | `/ueber-uns` | Firmengeschichte, Team, Werte |
| Kontakt | `/contact` | Formular, FAQ-Accordion, Google Maps |
| Produkte | `/produkte` | Produktkatalog |
| Impressum | `/impressum` | Anbieterkennzeichnung nach § 5 DDG |
| Datenschutz | `/datenschutz` | 14-Kapitel DSGVO-konforme Erklärung |
| AGB | `/agb` | 12 Paragraphen Geschäftsbedingungen |
| Cookie-Richtlinie | `/cookie-richtlinie` | Cookie-Kategorien & Tabellen |
| Barrierefreiheit | `/barrierefreiheit` | WCAG 2.1 AA Konformitätserklärung |

---

##  Design-System

Das Projekt verwendet ein maßgeschneidertes Design-System:

- **Typografie**: Inter (Headlines) + System-Stack (Body)
- **Farben**: Primary (Dunkelgrün), Accent (Warm Gold), Neutral-Palette
- **Schatten**: 5-stufige Elevation-Skala
- **Radius**: Konsistente Border-Radius-Token
- **Animationen**: Spring-Physics-basierte Transitions

Details in [`src/DESIGN_SYSTEM.md`](src/DESIGN_SYSTEM.md).

---

##  Lizenz

Dieses Projekt ist proprietär. Alle Rechte vorbehalten.

**© 2025 Memo BauT** · Falkenstraße 9, 35614 Werdorf

---

<p align="center">
  <sub>Erstellt mit ❤️ für exzellente Gartengestaltung</sub>
</p>
