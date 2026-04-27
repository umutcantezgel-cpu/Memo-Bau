# Incident Response — Memo BauT

## Severity Levels

| Level | Beschreibung | Reaktionszeit |
|:------|:-------------|:--------------|
| **P1** | Seite komplett offline | Sofort (< 5 Min) |
| **P2** | Kritisches Feature defekt (Kontaktformular, Navigation) | < 1 Stunde |
| **P3** | Leichtes Problem (langsame Seite, visueller Fehler) | < 24 Stunden |
| **P4** | Kosmetisch (Tippfehler, nicht-kritischer UI-Bug) | Nächster Sprint |

## Rollback-Entscheidungsbaum

```
Problem auf Production
├── Neuer Code fehlerhaft? → Hotfix forward (schneller)
├── Ungültige Env-Variable? → Variable korrigieren + Redeploy
├── Externer Service down? → Feature Flag deaktivieren (FF in lib/feature-flags.ts)
└── Kritischer Bug in Core-Feature? → Vercel Rollback zur letzten stabilen Version
```

## Rollback-Prozedur

1. **Identifizieren**: Vercel Logs oder Browser Console prüfen
2. **Entscheiden**: Hotfix oder Rollback?
3. **Rollback ausführen**: Vercel Dashboard → Deployments → Vorherige Version → "Promote to Production"
4. **Alternativ CLI**: `npx vercel rollback`
5. **Verifizieren**: Alle Seiten manuell prüfen
6. **Dokumentieren**: Post-Mortem erstellen

## Post-Mortem Template

```markdown
### Incident #XXX — [Titel]
- **Datum**: YYYY-MM-DD
- **Severity**: P1/P2/P3/P4
- **Dauer**: X Minuten/Stunden
- **Was passiert ist**: [Beschreibung]
- **Root Cause**: [Ursache]
- **Fix**: [Was wurde getan]
- **Prävention**: [Wie vermeiden wir das in Zukunft]
```

## Monitoring-Quellen

| Quelle | Zugang | Was wird überwacht |
|:-------|:-------|:-------------------|
| Vercel Logs | vercel.com/dashboard | Build-Fehler, Runtime-Logs |
| Google Analytics 4 | analytics.google.com | Traffic, Conversions, Events |
| Google Search Console | search.google.com/search-console | Indexierung, SEO-Fehler |
| Browser DevTools | F12 → Console | Client-Side Errors |
