# 🚀 Vollständiger Deployment Guide – Für Comet (Perplexity) Assistenten

> **Anleitung:** Kopiere den gesamten Textblock unten und sende ihn an den Comet-Assistenten.
> Er wird dich dann Schritt für Schritt durch das komplette Deployment führen.

---

## 📋 AN COMET SENDEN:

```
Ich habe ein fertiges Website-Projekt (React + Vite + TypeScript) das ich auf Netlify deployen möchte.
Das Projekt liegt bereits auf GitHub: https://github.com/umutcantezgel-cpu/Memo-Bau

Bitte führe mich Schritt für Schritt durch das GESAMTE Deployment von 0 auf fertig.

═══════════════════════════════════════════════════
PROJEKT-ÜBERSICHT
═══════════════════════════════════════════════════

Firma: Memo BauT (Garten- & Landschaftsbau, Werdorf bei Wetzlar)
Tech Stack: React 18, TypeScript, Tailwind CSS 4, Vite 6
Build: npm run build → Output in /build Ordner
GitHub Repo: https://github.com/umutcantezgel-cpu/Memo-Bau (privat)

Bereits konfigurierte Dateien im Repo:
- netlify.toml (Build-Befehl, Redirects, Security Headers, CSP)
- vercel.json (als Alternative)
- robots.txt + sitemap.xml
- .env.example mit allen Variablen

═══════════════════════════════════════════════════
SCHRITT 1: NETLIFY ACCOUNT & PROJEKT VERBINDEN
═══════════════════════════════════════════════════

1.1 – Gehe zu https://app.netlify.com/signup
1.2 – Melde dich mit deinem GitHub-Account an (umutcantezgel-cpu)
1.3 – Autorisiere Netlify für den Zugriff auf deine GitHub-Repositories
1.4 – Klicke auf "Add new site" → "Import an existing project"
1.5 – Wähle "GitHub" als Provider
1.6 – Suche und wähle das Repository "Memo-Bau"
1.7 – Bei den Build-Einstellungen sollten diese Werte automatisch erkannt werden:
      - Branch: main
      - Build Command: npm run build
      - Publish Directory: build
      (Falls nicht, setze sie manuell genau so)
1.8 – NOCH NICHT auf "Deploy" klicken! Zuerst Umgebungsvariablen setzen (Schritt 2)

═══════════════════════════════════════════════════
SCHRITT 2: UMGEBUNGSVARIABLEN SETZEN
═══════════════════════════════════════════════════

Bevor der erste Deploy startet, müssen die Umgebungsvariablen gesetzt werden.

2.1 – Gehe zu: Site settings → Environment variables (oder "Build & deploy" → "Environment")
2.2 – Klicke "Add a variable" und füge folgende Variablen hinzu:

Variable 1:
  Key:   VITE_FORMSPREE_ENDPOINT
  Value: https://formspree.io/f/mqedvbeb

Variable 2:
  Key:   VITE_CALENDLY_URL
  Value: https://calendly.com/mehmet68-tezgel/30min

(Optional – nur wenn Google Analytics gewünscht:)
Variable 3:
  Key:   VITE_GA_MEASUREMENT_ID
  Value: G-XXXXXXXXXX  (ersetze mit echter Measurement ID)

2.3 – Speichere alle Variablen

═══════════════════════════════════════════════════
SCHRITT 3: ERSTER DEPLOY STARTEN
═══════════════════════════════════════════════════

3.1 – Gehe zurück zu "Deploys"
3.2 – Klicke "Trigger deploy" → "Deploy site" (oder "Clear cache and deploy site")
3.3 – Warte auf den Build (dauert ca. 1-3 Minuten)
3.4 – Erwartetes Ergebnis: "Published" Status
3.5 – Netlify gibt dir eine temporäre URL: https://xxxxx.netlify.app
3.6 – Öffne diese URL und prüfe ob die Seite lädt

═══════════════════════════════════════════════════
SCHRITT 4: CUSTOM DOMAIN EINRICHTEN (optional)
═══════════════════════════════════════════════════

Falls eine eigene Domain verwendet werden soll:

4.1 – Gehe zu: Site settings → Domain management
4.2 – Klicke "Add custom domain"
4.3 – Gib die Domain ein (z.B. memo-baut.de oder memobau-exklusiv.de)
4.4 – Bestätige mit "Verify" → "Add domain"
4.5 – Netlify zeigt dir die nötigen DNS-Einträge an

4.6 – Beim Domain-Registrar (z.B. IONOS, Strato, Hetzner):
      Setze einen A-Record:
        Typ:  A
        Name: @
        Wert: (die IP die Netlify anzeigt, z.B. 75.2.60.5)
        TTL:  3600

      Setze einen CNAME-Record:
        Typ:  CNAME
        Name: www
        Wert: xxxxx.netlify.app. (deine Netlify-URL)
        TTL:  3600

4.7 – Warte auf DNS-Propagation (5 Min bis 48 Stunden)
      Prüfe mit: https://dnschecker.org

4.8 – SSL/HTTPS wird von Netlify automatisch über Let's Encrypt bereitgestellt
4.9 – Aktiviere "Force HTTPS" unter Domain management → HTTPS

═══════════════════════════════════════════════════
SCHRITT 5: POST-DEPLOYMENT CHECKLISTE
═══════════════════════════════════════════════════

Prüfe nach dem Deploy folgende Punkte:

GRUNDFUNKTIONEN:
☐ Startseite lädt korrekt (https://deine-url.netlify.app)
☐ HTTPS aktiv (Schloss-Symbol)
☐ Navigation funktioniert (alle Links)
☐ Direkter URL-Aufruf funktioniert (z.B. /datenschutz, /contact)
☐ Browser-Refresh auf Unterseiten funktioniert (kein 404)

FORMULARE & BUCHUNG:
☐ Kontaktformular auf /contact → Sende eine Testnachricht
☐ E-Mail kommt bei mehmet68.tezgel@gmail.com an
☐ Calendly Button "Kostenlose Beratung buchen" erscheint (Desktop)
☐ Calendly Inline-Kalender auf /contact lädt
☐ Cookie-Banner erscheint beim ersten Besuch

RECHTSSEITEN:
☐ /impressum → zeigt Falkenstraße 9, 35614 Werdorf
☐ /datenschutz → lädt alle 14 Kapitel
☐ /agb → lädt alle 12 Paragraphen
☐ /cookie-richtlinie → zeigt Cookie-Tabellen
☐ /barrierefreiheit → zeigt WCAG-Erklärung

SEO:
☐ /robots.txt → erreichbar
☐ /sitemap.xml → erreichbar
☐ Seitentitel korrekt in Browser-Tab

MOBILE:
☐ Öffne auf Smartphone oder Chrome DevTools (F12 → Responsive)
☐ Navigation klappt mobil auf/zu
☐ Kontaktformular mobil bedienbar
☐ Texte auf Rechtsseiten erscheinen (nicht unsichtbar)

PERFORMANCE:
☐ Teste mit https://pagespeed.web.dev
☐ Ziel: Performance ≥ 80, Accessibility ≥ 90

SICHERHEIT:
☐ Teste mit https://securityheaders.com
☐ Erwartetes Ergebnis: A oder A+

═══════════════════════════════════════════════════
SCHRITT 6: AUTOMATISIERUNG
═══════════════════════════════════════════════════

Ab jetzt deployed Netlify automatisch bei jedem Git-Push:

  git add .
  git commit -m "Beschreibung der Änderung"
  git push origin main
  → Netlify baut und deployed automatisch

Preview-Deploys für Pull Requests sind ebenfalls automatisch aktiv.

═══════════════════════════════════════════════════
WICHTIGE HINWEISE
═══════════════════════════════════════════════════

- Die netlify.toml im Repo enthält bereits:
  ✅ Build-Befehl (npm run build)
  ✅ SPA-Routing (/* → /index.html)
  ✅ Security Headers (HSTS, CSP, X-Frame-Options)
  ✅ Content Security Policy (Calendly, OpenStreetMap, Formspree erlaubt)

- Die .env Datei wird NICHT committed (steht in .gitignore)
- Umgebungsvariablen müssen NUR im Netlify Dashboard gesetzt werden

- Repo-Größe: ~206 MB (HD-Bilder & Videos)
  Der erste Deploy kann 2-3 Minuten dauern

Bitte führe mich jetzt Schritt für Schritt durch diesen Prozess.
Sage mir bei jedem Schritt genau was ich klicken soll.
```

---

## ⚡ KURZVERSION (für erfahrene Nutzer)

Falls du es lieber selbst machst ohne Comet:

```bash
# 1. Netlify verbinden
# → app.netlify.com → Import from GitHub → Memo-Bau

# 2. Env Vars im Dashboard setzen:
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mqedvbeb
VITE_CALENDLY_URL=https://calendly.com/mehmet68-tezgel/30min

# 3. Deploy → fertig
```

---
---

# 🌐 Folgeprompt: Domain memobaut.de (Strato) → Vercel

> **Anleitung:** Kopiere den gesamten Textblock unten und sende ihn an den Comet-Assistenten,
> NACHDEM das Vercel-Deployment aus dem Hauptguide oben erfolgreich war.

---

## 📋 AN COMET SENDEN:

```
Mein Projekt (React + Vite Website) ist bereits auf Vercel deployed und läuft unter einer
temporären URL (z.B. memo-bau.vercel.app).

Jetzt möchte ich meine eigene Domain memobaut.de verbinden.
Die Domain ist bei STRATO registriert.

Bitte führe mich Schritt für Schritt durch die komplette Domain-Konfiguration.

═══════════════════════════════════════════════════
AUSGANGSSITUATION
═══════════════════════════════════════════════════

- Vercel-Projekt: Memo-Bau (bereits deployed & funktioniert)
- Vercel-URL: xxxxx.vercel.app (temporär)
- Domain: memobaut.de (registriert bei Strato)
- Strato Login: https://www.strato.de/apps/CustomerService
- Gewünschtes Ergebnis:
  → https://memobaut.de zeigt die Website
  → https://www.memobaut.de leitet auf https://memobaut.de weiter
  → SSL/HTTPS automatisch aktiv

═══════════════════════════════════════════════════
SCHRITT 1: DOMAIN IN VERCEL HINZUFÜGEN
═══════════════════════════════════════════════════

1.1 – Öffne https://vercel.com/dashboard
1.2 – Klicke auf dein Projekt "Memo-Bau"
1.3 – Gehe zu "Settings" → "Domains"
1.4 – Gib ein: memobaut.de
1.5 – Klicke "Add"
1.6 – Vercel fragt nach der Konfiguration. Wähle die empfohlene Option:
      → "Recommended": memobaut.de (Primary) + www.memobaut.de (Redirect)
1.7 – Vercel zeigt dir jetzt die nötigen DNS-Einträge an:
      → Notiere dir diese Werte! Du brauchst sie für Strato.

      Erwartete Werte (können leicht variieren):
      ┌─────────┬──────┬──────────────────────────┐
      │ Typ     │ Name │ Wert                     │
      ├─────────┼──────┼──────────────────────────┤
      │ A       │ @    │ 76.76.21.21              │
      │ CNAME   │ www  │ cname.vercel-dns.com     │
      └─────────┴──────┴──────────────────────────┘

1.8 – Lasse diesen Tab offen! Du brauchst die Werte im nächsten Schritt.

═══════════════════════════════════════════════════
SCHRITT 2: DNS-EINTRÄGE BEI STRATO KONFIGURIEREN
═══════════════════════════════════════════════════

2.1 – Öffne einen neuen Tab: https://www.strato.de/apps/CustomerService
2.2 – Logge dich in dein Strato-Kundenkonto ein
2.3 – Gehe zu: "Domains" → klicke auf "memobaut.de"
2.4 – Suche den Bereich "DNS-Verwaltung" oder "DNS-Einstellungen"
      (Bei Strato manchmal unter "Domains verwalten" → "DNS" oder "Subdomains")

2.5 – WICHTIG: Falls Strato "Domain-Weiterleitung" oder "Domain-Umleitung" aktiv hat,
      deaktiviere diese ZUERST! Sonst überschreibt sie die DNS-Einträge.

2.6 – Setze folgenden A-Record:
      ┌─────────────────────────────────────────────────┐
      │ Typ:        A-Record                            │
      │ Hostname:   @ (oder leer lassen bei Strato)     │
      │ Ziel/Wert:  76.76.21.21                         │
      │ TTL:        3600 (oder Standard)                │
      └─────────────────────────────────────────────────┘

      ⚠️ STRATO-BESONDERHEIT: Bei Strato kann es sein, dass du den
      A-Record nicht direkt setzen kannst. In diesem Fall:
      → Schaue nach "Eigener DNS" oder "Externes Hosting"
      → Oder nutze die Option "DNS-Einstellungen zurücksetzen" und
        dann manuell setzen

2.7 – Setze folgenden CNAME-Record:
      ┌─────────────────────────────────────────────────┐
      │ Typ:        CNAME-Record                        │
      │ Hostname:   www                                 │
      │ Ziel/Wert:  cname.vercel-dns.com                │
      │ TTL:        3600 (oder Standard)                │
      └─────────────────────────────────────────────────┘

2.8 – Falls Strato nach einem AAAA-Record fragt (IPv6), optional setzen:
      ┌─────────────────────────────────────────────────┐
      │ Typ:        AAAA-Record                         │
      │ Hostname:   @ (oder leer)                       │
      │ Ziel/Wert:  2606:4700:20::681a:a71              │
      │             (nur setzen wenn Vercel es anzeigt)  │
      └─────────────────────────────────────────────────┘

2.9 – Speichere alle DNS-Änderungen bei Strato
2.10 – LÖSCHE eventuelle alte A-Records die auf Strato-IPs zeigen
       (z.B. 81.169.xxx.xxx – das sind Strato-Server)

═══════════════════════════════════════════════════
SCHRITT 3: STRATO-SPEZIFISCHE FALLSTRICKE
═══════════════════════════════════════════════════

Strato hat einige Eigenheiten, die oft Probleme machen:

PROBLEM 1: "DNS-Einstellungen nicht verfügbar"
→ Lösung: Gehe zu "Domains" → "Domain verwalten" → suche nach
  "Eigene Nameserver" oder "DNS-Einstellungen verwalten"
→ Manchmal muss man erst "Strato DNS nutzen" aktivieren

PROBLEM 2: A-Record lässt sich nicht ändern
→ Lösung: Strato hat manchmal einen "Paketumzug" oder "Webspace"
  der den A-Record blockiert. Deaktiviere den Webspace für die Domain:
  "Hosting" → "Webspace zuordnen" → Domain entfernen

PROBLEM 3: "Domain-Weiterleitung" überschreibt DNS
→ Lösung: Unter "Domains" → "Umleitungen" alle Weiterleitungen
  für memobaut.de und www.memobaut.de LÖSCHEN

PROBLEM 4: E-Mail-Weiterleitung geht verloren
→ Falls du Strato-E-Mail nutzt (@memobaut.de): MX-Records NICHT ändern!
  Nur A-Record und CNAME ändern. MX bleibt auf Strato.

ALTERNATIVE falls DNS bei Strato nicht funktioniert:
→ Nameserver komplett auf Vercel umstellen:
  Bei Strato → "Eigene Nameserver" oder "Nameserver ändern"
  Setze:
    ns1.vercel-dns.com
    ns2.vercel-dns.com
  ⚠️ ACHTUNG: Das übernimmt ALLE DNS-Einträge. E-Mail über Strato
  funktioniert dann NICHT mehr ohne zusätzliche Konfiguration.

═══════════════════════════════════════════════════
SCHRITT 4: VERIFIKATION IN VERCEL
═══════════════════════════════════════════════════

4.1 – Gehe zurück zum Vercel-Tab: Settings → Domains
4.2 – Vercel prüft die DNS-Einträge automatisch
4.3 – Mögliche Status:
      ⏳ "Pending Verification" → DNS noch nicht propagiert (5 Min bis 48h)
      ✅ "Valid Configuration" → Alles korrekt!
      ❌ "Invalid Configuration" → DNS-Einträge prüfen

4.4 – Prüfe die DNS-Propagation extern:
      → Öffne https://dnschecker.org
      → Gib memobaut.de ein
      → Typ: A
      → Prüfe ob überall 76.76.21.21 angezeigt wird

4.5 – Prüfe auch www:
      → Gib www.memobaut.de ein
      → Typ: CNAME
      → Sollte cname.vercel-dns.com zeigen

═══════════════════════════════════════════════════
SCHRITT 5: SSL / HTTPS AUTOMATISCH
═══════════════════════════════════════════════════

5.1 – Sobald die Domain in Vercel als "Valid" markiert ist,
      wird SSL automatisch über Let's Encrypt bereitgestellt
5.2 – Das dauert ca. 1-5 Minuten nach erfolgreicher DNS-Verifizierung
5.3 – Danach ist https://memobaut.de erreichbar
5.4 – HTTP wird automatisch auf HTTPS weitergeleitet
5.5 – Kein manueller Schritt nötig!

═══════════════════════════════════════════════════
SCHRITT 6: FINALER TEST
═══════════════════════════════════════════════════

Teste folgende URLs im Browser:

☐ https://memobaut.de → Startseite lädt
☐ https://www.memobaut.de → leitet auf https://memobaut.de weiter
☐ http://memobaut.de → leitet auf https://memobaut.de weiter
☐ https://memobaut.de/contact → Kontaktseite lädt (SPA-Routing)
☐ https://memobaut.de/impressum → Impressum lädt
☐ https://memobaut.de/datenschutz → Datenschutz lädt
☐ https://memobaut.de/robots.txt → robots.txt erreichbar
☐ https://memobaut.de/sitemap.xml → Sitemap erreichbar

Performance-Test:
☐ https://pagespeed.web.dev → memobaut.de eingeben
Security-Test:
☐ https://securityheaders.com → memobaut.de eingeben

Bitte führe mich jetzt Schritt für Schritt durch diesen Prozess.
Sage mir bei jedem Schritt genau was ich wo klicken soll.
Wenn ein Strato-spezifisches Problem auftritt, hilf mir bei der Lösung.
```

---
---

# 🔎 Letzter Folgeprompt: Google Search Console & Sitemap

> **Anleitung:** Sende diesen letzten Textblock an Comet,
> NACHDEM die Domain memobaut.de online ist und SSL funktioniert.

---

## 📋 AN COMET SENDEN:

```
Die Website ist jetzt live unter https://memobaut.de und SSL (HTTPS) ist aktiv.
Als allerletzten Schritt möchte ich die Google Search Console einrichten
und die Sitemap einreichen, damit die Seite bei Google indexiert wird.

Die Domain liegt nach wie vor bei STRATO und wir haben Zugriff auf die DNS-Verwaltung.

Bitte führe mich durch diesen finalen Prozess.

═══════════════════════════════════════════════════
AUSGANGSSITUATION
═══════════════════════════════════════════════════

- Website-URL: https://memobaut.de
- Sitemap-URL: https://memobaut.de/sitemap.xml
- Strato Login: (für DNS-Einträge bereit)
- Google Account: (eingeloggt)

═══════════════════════════════════════════════════
SCHRITT 1: PROPERTY HINZUFÜGEN
═══════════════════════════════════════════════════

1.1 – Öffne https://search.google.com/search-console
1.2 – Klicke oben links auf das Dropdown-Menü und wähle "Property hinzufügen"
1.3 – Es erscheinen zwei Boxen ("Domain" und "URL-Präfix")
1.4 – Wähle die linke Box: "Domain"
1.5 – Gib ein: memobaut.de (OHNE https:// und OHNE www)
1.6 – Klicke "Weiter"
1.7 – Ein Popup "Inhaberschaft per DNS-Eintrag bestätigen" erscheint
1.8 – Kopiere den angezeigten TXT-Eintrag (sieht so aus: google-site-verification=...)
1.9 – Lass dieses Fenster der Search Console offen!

═══════════════════════════════════════════════════
SCHRITT 2: DNS-TXT-EINTRAG BEI STRATO SETZEN
═══════════════════════════════════════════════════

2.1 – Gehe zurück in dein Strato-Kundenkonto ("Domains" → "DNS-Verwaltung")
2.2 – Suche den Bereich "TXT Records" oder "TXT-Einträge"
2.3 – WICHTIG: Füge einen neuen TXT-Eintrag hinzu:

      ┌─────────────────────────────────────────────────┐
      │ Typ:        TXT-Record                          │
      │ Hostname:   @ (oder leer / memobaut.de)         │
      │ Wert:       (den kopierten google-site-veri...) │
      └─────────────────────────────────────────────────┘

2.4 – Speichere die DNS-Änderungen bei Strato
2.5 – Warte ca. 5 bis 15 Minuten (DNS-TXT ändert sich meist schnell)

═══════════════════════════════════════════════════
SCHRITT 3: INHABERSCHAFT BESTÄTIGEN
═══════════════════════════════════════════════════

3.1 – Gehe zurück in den offengelassenen Search Console Tab
3.2 – Klicke auf den Button "Bestätigen"
3.3 – Wenn alles geklappt hat, erscheint ein grünes "Inhaberschaft bestätigt"
3.4 – Klicke auf "Zur Property"

(Falls es fehlschlägt: Keine Panik, oft braucht Strato einfach 15 Minuten.
Klicke später einfach erneut auf Bestätigen).

═══════════════════════════════════════════════════
SCHRITT 4: SITEMAP EINREICHEN
═══════════════════════════════════════════════════

Jetzt müssen wir Google mitteilen, wo die Seiten zu finden sind.
Die `sitemap.xml` wurde bereits generiert und ist online.

4.1 – In der Search Console, klicke im linken Menü auf "Sitemaps"
4.2 – Unter "Neue Sitemap hinzufügen" siehst du bereits `https://memobaut.de/`
4.3 – Gib ins Textfeld ein: sitemap.xml
4.4 – Klicke "Senden"
4.5 – Es sollte "Sitemap erfolgreich eingereicht" erscheinen
4.6 – Der Status springt auf "Erfolgreich" (kann dauern, falls "Konnte nicht..." steht)

═══════════════════════════════════════════════════
SCHRITT 5: ABSCHLUSS-CHECK
═══════════════════════════════════════════════════

5.1 – Prüfe im Browser ob die Sitemap da ist: https://memobaut.de/sitemap.xml
5.2 – Klicke links im Menü der Search Console auf "URL-Prüfung"
5.3 – Gib `https://memobaut.de` oben in die Suchleiste ein und drücke Enter
5.4 – Klicke auf "Indexierung beantragen" (für einen schnelleren Start)

Herzlichen Glückwunsch! Google weiß jetzt von der Existenz der Website
und wird sie in den kommenden Tagen indexieren. Die Sitemap (mit allen Standorten, 
Rechtsseiten und Unterseiten) wird automatisch gecrawlt.

Bitte führe mich jetzt durch diesen letzten Prozess und sage mir,
was ich als Erstes bei Strato tun muss.
```
