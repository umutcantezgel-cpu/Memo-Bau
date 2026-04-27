/**
 * CTA Text Library — Centralized, conversion-optimized call-to-action texts.
 *
 * Rules (Phase 10 — Content Architecture):
 * - Primary CTAs use "Ich"-Perspektive (user's point of view)
 * - Secondary CTAs are low-threshold ("Mehr erfahren")
 * - VERBOTEN: "Senden", "Absenden", "Submit", "Hier klicken"
 * - Every CTA text must communicate a clear benefit or next step
 */

export const CTA_TEXTS = {
  /** Primary CTAs — high intent, user-perspective */
  primary: {
    requestQuote: 'Mein kostenloses Angebot anfordern',
    bookConsultation: 'Meinen Beratungstermin sichern',
    startProject: 'Mein Projekt starten',
    contactNow: 'Jetzt Kontakt aufnehmen',
    callback: 'Rückruf anfordern',
    getOffer: 'Unverbindliches Angebot erhalten',
  },

  /** Secondary CTAs — low threshold, exploration */
  secondary: {
    learnMore: 'Mehr erfahren',
    viewDetails: 'Details ansehen',
    seeProjects: 'Projekte ansehen',
    viewServices: 'Leistungen entdecken',
    readMore: 'Weiterlesen',
    seeAll: 'Alle ansehen',
  },

  /** Trust micro-copy — displayed under primary CTAs */
  trust: {
    default: 'Kostenlos & unverbindlich · Antwort in 24h · DSGVO-konform',
    consultation: 'Kostenlos · 15 Min · Unverbindlich',
    quote: 'Kostenlos · Innerhalb von 24h · Ohne Verpflichtung',
    callback: 'Wir rufen Sie zurück · Innerhalb 1 Stunde · Wochentags',
  },

  /** Form helper micro-copy — displayed under form fields via aria-describedby */
  formHints: {
    email: 'Ausschließlich für die Antwort auf Ihre Anfrage.',
    phone: 'Optional — beschleunigt die Rückmeldung.',
    message: 'Beschreiben Sie kurz Ihr Anliegen.',
    name: 'Damit wir Sie persönlich ansprechen können.',
  },
} as const;

/** Type-safe CTA key access */
export type PrimaryCTAKey = keyof typeof CTA_TEXTS.primary;
export type SecondaryCTAKey = keyof typeof CTA_TEXTS.secondary;
export type TrustCopyKey = keyof typeof CTA_TEXTS.trust;
