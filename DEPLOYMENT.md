# 🚀 Deployment Guide – Memo BauT Website

> Vollständige Schritt-für-Schritt-Anleitung zum Deployment der Memo BauT Website auf Netlify oder Vercel.

---

## Inhaltsverzeichnis

1. [Voraussetzungen](#1-voraussetzungen)
2. [Umgebungsvariablen konfigurieren](#2-umgebungsvariablen-konfigurieren)
3. [Lokaler Build-Test](#3-lokaler-build-test)
4. [Option A: Deployment auf Netlify](#4-option-a-deployment-auf-netlify)
5. [Option B: Deployment auf Vercel](#5-option-b-deployment-auf-vercel)
6. [Custom Domain einrichten](#6-custom-domain-einrichten)
7. [DNS-Konfiguration](#7-dns-konfiguration)
8. [SSL/HTTPS aktivieren](#8-sslhttps-aktivieren)
9. [Post-Deployment Checkliste](#9-post-deployment-checkliste)
10. [Externe Dienste verbinden](#10-externe-dienste-verbinden)
11. [Monitoring & Analytics](#11-monitoring--analytics)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Voraussetzungen

| Anforderung | Details |
|---|---|
| **Node.js** | ≥ 18.0 ([nodejs.org](https://nodejs.org)) |
| **npm** | ≥ 9.0 (kommt mit Node.js) |
| **Git** | Repository: [github.com/umutcantezgel-cpu/Memo-Bau](https://github.com/umutcantezgel-cpu/Memo-Bau) |
| **Hosting-Account** | [Netlify](https://app.netlify.com/signup) oder [Vercel](https://vercel.com/signup) (kostenlos) |
| **Domain** | z.B. `memobau-exklusiv.de` (optional, eigene Domain) |

---

## 2. Umgebungsvariablen konfigurieren

Erstelle eine `.env`-Datei im Projekt-Root (wird **nicht** committed):

```bash
cp .env.example .env
```

Dann befülle diese mit den echten Werten:

```env
# ─── Pflicht für volle Funktionalität ───
VITE_CALENDLY_URL=https://calendly.com/DEIN-CALENDLY-BENUTZERNAME
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/DEIN-FORM-ID

# ─── Optional ───
VITE_GEMINI_API_KEY=DEIN_GOOGLE_GEMINI_API_KEY
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Variablen im Detail

| Variable | Dienst | Zweck | Wo beantragen? |
|---|---|---|---|
| `VITE_CALENDLY_URL` | Calendly | Online-Terminbuchung Widget | [calendly.com](https://calendly.com) → Event anlegen → Link kopieren |
| `VITE_FORMSPREE_ENDPOINT` | Formspree | Kontaktformular-Backend | [formspree.io](https://formspree.io) → Neues Formular → Endpoint kopieren |
| `VITE_GEMINI_API_KEY` | Google AI | Admin-Chat Funktion | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics | Besuchertracking | [analytics.google.com](https://analytics.google.com) → Property anlegen |

> ⚠️ **Wichtig**: Ohne `VITE_CALENDLY_URL` und `VITE_FORMSPREE_ENDPOINT` funktionieren Terminbuchung und Kontaktformular nicht – die Website zeigt dann Platzhalter-Verhalten.

---

## 3. Lokaler Build-Test

Vor dem Deployment **immer** lokal testen:

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. TypeScript-Prüfung
npm run check

# 3. Produktions-Build erstellen
npm run build

# 4. Build lokal testen
npx serve build -s
```

Öffne `http://localhost:3000` und prüfe:
- [ ] Startseite lädt vollständig
- [ ] Navigation funktioniert (alle Links)
- [ ] Kontaktformular anzeigbar
- [ ] Rechtsseiten laden (Impressum, Datenschutz, AGB)
- [ ] Bilder und Videos laden
- [ ] Keine Konsolen-Fehler

> ✅ **Erwartetes Ergebnis**: `✓ built in ~2s` mit 0 Fehlern

---

## 4. Option A: Deployment auf Netlify

### Schritt 4.1 – Konto erstellen
1. Gehe zu [app.netlify.com/signup](https://app.netlify.com/signup)
2. Melde dich mit **GitHub** an

### Schritt 4.2 – Neue Site erstellen
1. Klicke **"Add new site"** → **"Import an existing project"**
2. Wähle **"GitHub"** als Git-Provider
3. Autorisiere Netlify für dein GitHub-Konto
4. Suche und wähle das Repository **`Memo-Bau`**

### Schritt 4.3 – Build-Einstellungen konfigurieren
| Feld | Wert |
|---|---|
| Branch to deploy | `main` |
| Build command | `npm run build` |
| Publish directory | `build` |

> Diese Werte sind bereits in der `netlify.toml`-Datei definiert und werden automatisch erkannt.

### Schritt 4.4 – Umgebungsvariablen setzen
1. Gehe zu **Site settings** → **Environment variables**
2. Klicke **"Add a variable"** für jede Variable aus [Abschnitt 2](#2-umgebungsvariablen-konfigurieren)
3. Setze jeweils Key und Value:
   ```
   VITE_CALENDLY_URL        = https://calendly.com/dein-link
   VITE_FORMSPREE_ENDPOINT  = https://formspree.io/f/xxxxx
   VITE_GA_MEASUREMENT_ID   = G-XXXXXXXXXX
   ```

### Schritt 4.5 – Deploy starten
1. Klicke **"Deploy site"**
2. Warte auf den Build (ca. 1-2 Minuten)
3. Nach Erfolg: Netlify gibt dir eine URL wie `https://random-name.netlify.app`

### Was `netlify.toml` automatisch konfiguriert
- ✅ SPA-Routing (alle Pfade → `index.html`)
- ✅ Security Headers (HSTS, CSP, X-Frame-Options)
- ✅ Content Security Policy (Calendly, OpenStreetMap, Formspree erlaubt)

---

## 5. Option B: Deployment auf Vercel

### Schritt 5.1 – Konto erstellen
1. Gehe zu [vercel.com/signup](https://vercel.com/signup)
2. Melde dich mit **GitHub** an

### Schritt 5.2 – Neues Projekt erstellen
1. Klicke **"Add New..."** → **"Project"**
2. Wähle **"Import Git Repository"**
3. Suche **`Memo-Bau`** und klicke **"Import"**

### Schritt 5.3 – Build-Einstellungen
| Feld | Wert |
|---|---|
| Framework Preset | **Vite** |
| Build Command | `npm run build` |
| Output Directory | `build` |

### Schritt 5.4 – Umgebungsvariablen
1. Klappe **"Environment Variables"** auf
2. Füge alle Variablen aus [Abschnitt 2](#2-umgebungsvariablen-konfigurieren) hinzu
3. Setze Scope auf **"Production"** (und optional Preview/Development)

### Schritt 5.5 – Deploy
1. Klicke **"Deploy"**
2. Warte auf den Build (ca. 1-2 Minuten)
3. Vercel gibt dir eine URL wie `https://memo-bau.vercel.app`

### Was `vercel.json` automatisch konfiguriert
- ✅ SPA-Rewrites (alle Pfade → `index.html`)
- ✅ Security Headers (identisch zu Netlify)

---

## 6. Custom Domain einrichten

### Bei Netlify
1. **Site settings** → **Domain management** → **"Add custom domain"**
2. Gib `memobau-exklusiv.de` ein
3. Klicke **"Verify"** → **"Add domain"**
4. Füge auch `www.memobau-exklusiv.de` hinzu (mit Redirect auf die Hauptdomain)

### Bei Vercel
1. **Project Settings** → **Domains** → **"Add domain"**
2. Gib `memobau-exklusiv.de` ein
3. Wähle **"Recommended"** Konfiguration (www → non-www Redirect)

---

## 7. DNS-Konfiguration

Bei deinem Domain-Registrar (z.B. IONOS, Strato, Hetzner, Namecheap):

### Für Netlify
```
Typ    Name    Wert                         TTL
─────────────────────────────────────────────────
A      @       75.2.60.5                    3600
CNAME  www     random-name.netlify.app.     3600
```

> Netlify zeigt dir die exakten DNS-Werte im Domain-Setup an.

### Für Vercel
```
Typ    Name    Wert                         TTL
─────────────────────────────────────────────────
A      @       76.76.21.21                  3600
CNAME  www     cname.vercel-dns.com.        3600
```

> ⏱️ **DNS-Propagation**: Kann 5 Minuten bis 48 Stunden dauern. Prüfe mit [dnschecker.org](https://dnschecker.org).

---

## 8. SSL/HTTPS aktivieren

### Netlify
- SSL-Zertifikat wird **automatisch** über Let's Encrypt bereitgestellt
- Gehe zu **Domain management** → **HTTPS** → **"Verify DNS configuration"**
- Nach erfolgreicher DNS-Verifizierung: Zertifikat wird in wenigen Minuten ausgestellt
- **"Force HTTPS"** aktivieren (leitet HTTP automatisch um)

### Vercel
- SSL wird **automatisch** aktiviert sobald die Domain verbunden ist
- Kein manueller Schritt erforderlich

---

## 9. Post-Deployment Checkliste

Nach dem Deployment diese Punkte systematisch prüfen:

### 9.1 – Grundfunktionen
- [ ] `https://deine-domain.de` lädt ohne Fehler
- [ ] HTTPS aktiv (Schloss-Symbol in der Adressleiste)
- [ ] Alle Navigations-Links funktionieren
- [ ] Direkte URL-Eingabe funktioniert (z.B. `/datenschutz`, `/agb`)
- [ ] Seite lädt auch beim Reload einer Unterseite (SPA-Routing)

### 9.2 – Inhalte
- [ ] Alle Bilder und Videos laden
- [ ] Interaktive Karte zeigt Einzugsgebiet an
- [ ] Kontaktformular sendet Nachrichten (Formspree-Test)
- [ ] Calendly-Widget öffnet Terminbuchung
- [ ] Cookie-Banner erscheint

### 9.3 – Rechtsseiten
- [ ] `/impressum` zeigt korrekte Firmendaten
- [ ] `/datenschutz` zeigt alle 14 Kapitel
- [ ] `/agb` zeigt alle 12 Paragraphen
- [ ] `/cookie-richtlinie` zeigt Cookie-Kategorien
- [ ] `/barrierefreiheit` zeigt WCAG-Erklärung

### 9.4 – SEO & Meta
- [ ] `https://deine-domain.de/robots.txt` erreichbar
- [ ] `https://deine-domain.de/sitemap.xml` erreichbar
- [ ] Seitentitel in Browser-Tab korrekt
- [ ] Open Graph Meta-Tags vorhanden (Test: [metatags.io](https://metatags.io))

### 9.5 – Performance
- [ ] Lighthouse Score prüfen (Ziel: ≥ 90 in allen Kategorien)
- [ ] Mobile Darstellung auf echtem Smartphone testen
- [ ] Ladezeit unter 3 Sekunden (Test: [pagespeed.web.dev](https://pagespeed.web.dev))

### 9.6 – Sicherheit
- [ ] Security Headers prüfen: [securityheaders.com](https://securityheaders.com)
- [ ] HSTS aktiv (Strict-Transport-Security Header)
- [ ] CSP-Header korrekt (keine Blockierungen in der Browser-Konsole)

---

## 10. Externe Dienste verbinden

### 10.1 – Calendly (Terminbuchung)
1. Erstelle ein Konto auf [calendly.com](https://calendly.com)
2. Lege einen **Event Type** an (z.B. "Kostenlose Erstberatung – 30 Min")
3. Kopiere die Event-URL: `https://calendly.com/dein-username/erstberatung`
4. Setze diese als `VITE_CALENDLY_URL` in den Umgebungsvariablen
5. **Re-Deploy** die Site (bei Netlify/Vercel wird dies automatisch getriggert nach einem neuen Push)

### 10.2 – Formspree (Kontaktformular)
1. Erstelle ein Konto auf [formspree.io](https://formspree.io)
2. Klicke **"New Form"** → gib einen Namen ein (z.B. "Memo BauT Kontakt")
3. Kopiere den Endpoint: `https://formspree.io/f/xxxxxxxx`
4. Setze diesen als `VITE_FORMSPREE_ENDPOINT`
5. Konfiguriere in Formspree:
   - **E-Mail-Empfänger**: deine Firmen-E-Mail
   - **Auto-Reply**: Optional eine automatische Antwort an den Kunden
   - **Spam-Filter**: Aktivieren

### 10.3 – Google Analytics (optional)
1. Gehe zu [analytics.google.com](https://analytics.google.com)
2. Erstelle eine neue **Property** für `memobau-exklusiv.de`
3. Wähle **Web** als Plattform
4. Kopiere die **Measurement ID** (Format: `G-XXXXXXXXXX`)
5. Setze diese als `VITE_GA_MEASUREMENT_ID`

> ⚠️ **DSGVO-Hinweis**: Google Analytics benötigt Cookie-Consent. Das Cookie-Consent-Banner der Website fragt den Nutzer automatisch ab.

---

## 11. Monitoring & Analytics

### Netlify Analytics (empfohlen)
- **Server-seitig**, kein Client-Code nötig
- DSGVO-konform (keine Cookies)
- Kostenpflichtig: $9/Monat
- Aktivieren unter: **Site settings** → **Analytics**

### Vercel Analytics
- Ähnlich server-seitig
- **Web Vitals** Monitoring inklusive
- Aktivieren unter: **Project** → **Analytics**

### Uptime-Monitoring
Empfohlene kostenlose Dienste:
- [UptimeRobot](https://uptimerobot.com) – prüft alle 5 Minuten
- [Hetrixtools](https://hetrixtools.com) – Uptime + Blacklist-Monitoring

---

## 12. Troubleshooting

### Build schlägt fehl
```bash
# Lokalen Build testen
npm run build

# TypeScript Fehler finden
npm run check

# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install
```

### Seite zeigt 404 bei Unterseiten
→ SPA-Routing ist nicht konfiguriert. Prüfe ob `netlify.toml` (Netlify) oder `vercel.json` (Vercel) im Repository vorhanden ist.

### Calendly/Formspree funktioniert nicht
→ Umgebungsvariablen prüfen. Nach dem Setzen muss ein **Re-Deploy** erfolgen:
- Netlify: **Deploys** → **"Trigger deploy"** → **"Clear cache and deploy site"**
- Vercel: **Deployments** → **"Redeploy"**

### Bilder laden nicht (CSP-Fehler)
→ Browser-Konsole auf `Content-Security-Policy`-Fehler prüfen. Wenn neue externe Bildquellen verwendet werden, muss die CSP in `netlify.toml` / `vercel.json` erweitert werden.

### mixed-content Warnung
→ Alle externen URLs müssen `https://` verwenden, nicht `http://`.

---

## Schnellreferenz

```bash
# Täglicher Workflow
git add .
git commit -m "fix: Beschreibung der Änderung"
git push origin main
# → Netlify/Vercel deployen automatisch bei jedem Push auf main
```

| Aktion | Netlify | Vercel |
|---|---|---|
| Auto-Deploy bei Git-Push | ✅ Ja | ✅ Ja |
| Preview für Pull Requests | ✅ Ja | ✅ Ja |
| Rollback zu älterem Deploy | Dashboard → Deploys → Published | Dashboard → Deployments → Promote |
| Build-Logs einsehen | Dashboard → Deploys → Log | Dashboard → Deployments → Log |
| Umgebungsvariablen ändern | Site settings → Environment | Project settings → Environment |

---

<p align="center">
  <sub>Erstellt für Memo BauT · Zuletzt aktualisiert: März 2026</sub>
</p>
