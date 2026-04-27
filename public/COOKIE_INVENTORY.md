# Cookie & LocalStorage Inventory
**Letztes Update: April 2026**

Diese Dokumentation erfasst alle von "Memo BauT" verwendeten Client-Side Storage-Mechanismen (Cookies, LocalStorage, SessionStorage). Die Anwendung ist nach dem *Privacy-by-Design*-Prinzip entwickelt und verwendet primär LocalStorage anstelle veralteter Cookies, um Data-Leaks zu verhindern.

## 1. Technisch Notwendig (Essential)
Diese Daten sind für den Betrieb der Website zwingend erforderlich und bedürfen laut DSGVO/TTDSG keiner vorherigen, aktiven Einwilligung (Opt-in).

| Key | Typ | Lebensdauer | Zweck |
| :--- | :--- | :--- | :--- |
| `memobau_consent` | LocalStorage | 12 Monate | Speichert die granularen Datenschutzeinstellungen des Nutzers (Analytics, Marketing, Personalization). |
| `analytics_sessionId` | SessionStorage| Session (ca. 24h) | Eindeutige ID für die aktuelle Sitzung zur rudimentären Fehleranalyse und Funnel-Zuordnung (ohne PII). |
| `session_start` | SessionStorage| Session | Speichert den Zeitstempel des Sitzungsbeginns für Time-on-Page Metriken. |

## 2. Analyse & Performance (Analytics)
Werden nur bei Klick auf "Alle Akzeptieren" oder spezifische Anwahl von "Analyse" im Consent-Manager gesetzt.

| Key | Typ | Lebensdauer | Zweck |
| :--- | :--- | :--- | :--- |
| `_ga` | Cookie | 2 Jahre | Google Analytics 4: Zur Unterscheidung von Benutzern. Wird lokalisiert, IP-Adressen werden anonymisiert (anonymize_ip). |
| `_gid` | Cookie | 24 Stunden | Google Analytics 4: Zur Unterscheidung von Benutzern. |
| `utm_parameters`| SessionStorage| Session | Temporärer Speicher für Kampagnen-Parameter (`utm_source`, etc.), um Conversions zuzuordnen. |

## 3. Marketing & Externe Dienste (Marketing)
Werden nur mit expliziter Zustimmung gesetzt.

| Key/Service | Typ | Provider | Zweck |
| :--- | :--- | :--- | :--- |
| `Calendly` | 3rd-Party | calendly.com | Terminbuchungs-Widget. Setzt eigene Session-Cookies zur Terminverwaltung und Spamprävention. |

## 4. Datenschutz-Mechanismen (Deletion)
- **Granularer Widerruf:** User können über den Footer-Link "Datenschutz" jederzeit den Cookie-Manager erneut aufrufen.
- **LocalStorage Clears:** Beim Ablehnen von `Analytics` oder `Marketing` werden zugehörige Tracking-Befehle unterbrochen. Externe Cookies (wie `_ga`) können Browser-bedingt bestehen bleiben, es werden jedoch keine neuen Events mehr dorthin gesendet.

> _Entspricht den Anforderungen gemäß DSGVO (Art. 6 Abs. 1 lit. a) und TTDSG (§ 25 Abs. 1)._
