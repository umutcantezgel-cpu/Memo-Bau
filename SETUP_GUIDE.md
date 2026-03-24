# 🛠️ Calendly & Formspree – Schritt-für-Schritt Setup Guide

> Kopiere die jeweilige Anleitung und sende sie an den **Comet (Perplexity) Assistenten**, damit er dich durch jeden Schritt begleiten kann.

---

## TEIL 1: FORMSPREE (Kontaktformular)

### An Comet senden:

```
Ich habe ein Formspree-Konto erstellt und bin eingeloggt auf formspree.io.
Bitte führe mich Schritt für Schritt durch die folgenden Aufgaben:

ZIEL: Ein Kontaktformular-Backend für meine Memo BauT Website einrichten.

SCHRITT 1 – Neues Formular erstellen:
- Gehe auf formspree.io/forms
- Klicke "New Form" oder "+ Create Form"
- Name des Formulars: "Memo BauT Kontaktformular"
- Wähle den FREE Plan (oder den aktuellen Plan)
- Klicke "Create Form"

SCHRITT 2 – Formular-Endpoint kopieren:
- Nach dem Erstellen zeigt Formspree einen Endpoint an
- Format: https://formspree.io/f/xxxxxxxx (8-stelliger Code)
- Kopiere diesen vollständigen Endpoint-Link

SCHRITT 3 – E-Mail-Empfänger konfigurieren:
- Gehe in die Formular-Settings
- Setze die Empfänger-E-Mail auf: mehmet68.tezgel@gmail.com
- Das ist die E-Mail, an die alle Kontaktanfragen gesendet werden

SCHRITT 4 – Spam-Schutz aktivieren:
- Gehe zu "Settings" → "Spam Filtering"
- Aktiviere "reCAPTCHA" NICHT (wir nutzen ein Honeypot-Feld namens "_gotcha")
- Stelle sicher, dass der integrierte Spam-Filter aktiv ist

SCHRITT 5 – Erlaubte Domains (CORS):
- Gehe zu "Settings" → "Restrictions" oder "Allowed Domains"
- Füge folgende Domains hinzu:
  - localhost (für Entwicklung)
  - Die finale Domain der Website (z.B. memobau-exklusiv.de oder die Netlify/Vercel-Domain)
- Das verhindert, dass Dritte dein Formular missbrauchen

SCHRITT 6 – Auto-Reply einrichten (optional aber empfohlen):
- Gehe zu "Settings" → "Auto-Response" oder "Autoresponder"
- Aktiviere die automatische Antwort
- Betreff: "Vielen Dank für Ihre Anfrage – Memo BauT"
- Nachricht:
  "Sehr geehrte/r Interessent/in,

  vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten
  und werden uns innerhalb von 24 Stunden bei Ihnen melden.

  Mit freundlichen Grüßen
  Ihr Memo BauT Team
  Falkenstraße 9, 35614 Werdorf"

SCHRITT 7 – Testen:
- Gehe auf die Formular-Testseite in Formspree
- Sende eine Test-Nachricht
- Prüfe ob die E-Mail bei mehmet68.tezgel@gmail.com ankommt

Wenn alles funktioniert, gib mir den ENDPOINT zurück (https://formspree.io/f/xxxxxxxx).
Diesen brauche ich für die Website-Integration.
```

### Nach dem Setup – Website-Integration:

Sobald du den Formspree-Endpoint hast (z.B. `https://formspree.io/f/abc12345`), muss er als Umgebungsvariable gesetzt werden:

**Lokal** (`.env`-Datei):
```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/abc12345
```

**Netlify** (Dashboard → Site settings → Environment variables):
```
Key:   VITE_FORMSPREE_ENDPOINT
Value: https://formspree.io/f/abc12345
```

**Vercel** (Dashboard → Project → Settings → Environment Variables):
```
Key:   VITE_FORMSPREE_ENDPOINT
Value: https://formspree.io/f/abc12345
```

> ⚠️ Nach dem Setzen der Umgebungsvariable muss ein **Re-Deploy** erfolgen!

---

## TEIL 2: CALENDLY (Online-Terminbuchung)

### An Comet senden:

```
Ich habe ein Calendly-Konto erstellt und bin eingeloggt auf calendly.com.
Bitte führe mich Schritt für Schritt durch die folgenden Aufgaben:

ZIEL: Online-Terminbuchung für kostenlose Erstberatungen der Memo BauT einrichten.

SCHRITT 1 – Profil einrichten:
- Gehe zu calendly.com/event_types oder "Event Types"
- Dein Profilname sollte "Memo BauT" oder "Memo BauT" sein
- Gehe zu Account Settings → Profile und setze:
  - Name: "Memo BauT" oder "Mehmet Tezgel"
  - Zeitzone: (GMT+01:00) Berlin, Europe
  - Sprache: Deutsch (falls verfügbar)
  - Welcome Message: "Willkommen bei Memo BauT – buchen Sie Ihre kostenlose Erstberatung."

SCHRITT 2 – Event Type erstellen:
- Klicke "Create" oder "+ New Event Type"
- Wähle "One-on-One" (Einzelgespräch)
- Konfiguriere wie folgt:

  Event Name: "Kostenlose Erstberatung"
  Dauer: 15 Minuten (oder 30 Minuten)
  Ort/Location: "Phone Call" → Telefonnummer des Kunden wird abgefragt
    ODER "Custom" → Text: "Wir rufen Sie an"

SCHRITT 3 – Verfügbarkeitszeiten setzen:
- Gehe zu "Availability" oder "When can people book"
- Setze die Zeiten so:
  - Montag bis Freitag: 09:00 – 17:00
  - Samstag: 10:00 – 13:00
  - Sonntag: nicht verfügbar
- Minimaler Vorlauf (Minimum scheduling notice): 4 Stunden
- Maximale Vorausbuchung: 2 Wochen im Voraus
- Pufferzeit zwischen Terminen: 15 Minuten

SCHRITT 4 – Buchungsformular-Felder:
- Gehe zu "Invitee Questions" oder "Booking Form"
- Standardfelder: Name, E-Mail (sind Pflicht)
- Füge hinzu:
  - "Telefonnummer" (Pflichtfeld)
  - "Welches Projekt planen Sie?" (Optionales Textfeld)
  - "Grundstücksgröße ca. (m²)" (Optionales Textfeld)

SCHRITT 5 – Bestätigungs- und Erinnerungsmails:
- Gehe zu "Notifications & Cancellation Policy"
- Aktiviere:
  - Bestätigung an Kunden: Ja
  - Erinnerung 24h vorher: Ja
  - Erinnerung 1h vorher: Ja (optional)
- Benachrichtigung an dich (mehmet68.tezgel@gmail.com): Ja
- Stornierungsrichtlinie: "Kostenlose Stornierung bis 2 Stunden vor dem Termin"

SCHRITT 6 – Branding anpassen:
- Gehe zu "Branding" oder Event-Einstellungen → Appearance
- Primärfarbe: #b38b59 (Goldton – passend zur Website)
- Wenn möglich: Logo der Memo BauT hochladen
- Button-Text: "Termin buchen" (falls anpassbar)

SCHRITT 7 – Event-Link kopieren:
- Nachdem alles konfiguriert ist, gehe zurück zur Event-Übersicht
- Kopiere den Event-Link
- Format: https://calendly.com/DEIN-USERNAME/kostenlose-erstberatung
- ODER: https://calendly.com/DEIN-USERNAME/15min

SCHRITT 8 – Testen:
- Öffne den Link in einem Inkognito-Fenster
- Prüfe ob:
  - Die verfügbaren Zeiten korrekt angezeigt werden
  - Das Formular die richtigen Felder hat
  - Eine Test-Buchung funktioniert
  - Die Bestätigungsmail ankommt

Wenn alles funktioniert, gib mir den EVENT-LINK zurück.
Diesen brauche ich für die Website-Integration.
```

### Nach dem Setup – Website-Integration:

Sobald du den Calendly-Link hast (z.B. `https://calendly.com/memobau/erstberatung`), muss er als Umgebungsvariable gesetzt werden:

**Lokal** (`.env`-Datei):
```env
VITE_CALENDLY_URL=https://calendly.com/memobau/erstberatung
```

**Netlify** (Dashboard → Site settings → Environment variables):
```
Key:   VITE_CALENDLY_URL
Value: https://calendly.com/memobau/erstberatung
```

**Vercel** (Dashboard → Project → Settings → Environment Variables):
```
Key:   VITE_CALENDLY_URL
Value: https://calendly.com/memobau/erstberatung
```

> ⚠️ Nach dem Setzen der Umgebungsvariable muss ein **Re-Deploy** erfolgen!

---

## TEIL 3: INTEGRATION ABSCHLIESSEN

Nachdem beide Endpoints stehen, aktualisiere die `.env`-Datei:

```env
# Kontaktformular
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/DEIN-CODE

# Terminbuchung
VITE_CALENDLY_URL=https://calendly.com/DEIN-USERNAME/DEIN-EVENT

# Optional
VITE_GEMINI_API_KEY=DEIN_KEY
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Wo werden die Werte verwendet?

| Variable | Komponente | Seite |
|---|---|---|
| `VITE_FORMSPREE_ENDPOINT` | `ContactPage.tsx` | `/contact` – Hauptkontaktformular |
| `VITE_FORMSPREE_ENDPOINT` | `QuickContactForm.tsx` | Standortseiten – Schnellkontakt |
| `VITE_CALENDLY_URL` | `GlobalCalendlyWidget.tsx` | Alle Seiten – Floating "Beratung buchen" Button |
| `VITE_CALENDLY_URL` | `ContactPage.tsx` | `/contact` – Eingebetteter Kalender |

### Finaler Test-Ablauf:

```bash
# 1. .env aktualisieren
# 2. Dev-Server neu starten
npm run dev

# 3. Prüfe auf http://localhost:5173:
#    - Kontaktformular senden → E-Mail kommt an?
#    - Calendly Widget klicken → Kalender öffnet sich?
#    - /contact Seite → Eingebetteter Kalender lädt?

# 4. Produktions-Build testen
npm run build
npx serve build -s
```
