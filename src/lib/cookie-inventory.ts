/**
 * Cookie & Storage Inventory — SSOT (Single Source of Truth)
 *
 * Maschinenlesbare Inventarisierung aller Client-Side Storage-Mechanismen.
 * Wird von der Datenschutzerklärung automatisch importiert und gerendert.
 *
 * @see public/COOKIE_INVENTORY.md (Human-readable Kopie)
 */

export type CookieCategory = 'essential' | 'analytics' | 'marketing';

export interface CookieEntry {
  /** Cookie / Storage Key Name */
  name: string;
  /** Kategorie für Consent-Steuerung */
  category: CookieCategory;
  /** Speichermechanismus */
  type: 'cookie' | 'localStorage' | 'sessionStorage';
  /** Lebensdauer (menschenlesbar) */
  duration: string;
  /** Zweck (Deutsch, für Datenschutzerklärung) */
  purpose: string;
  /** Provider / Quelle */
  provider: string;
}

export const COOKIE_INVENTORY: readonly CookieEntry[] = [
  // ─── Essential (kein Consent erforderlich) ───
  {
    name: 'memobau_consent',
    category: 'essential',
    type: 'localStorage',
    duration: '12 Monate',
    purpose: 'Speichert die granularen Datenschutzeinstellungen des Nutzers.',
    provider: 'Eigen',
  },
  {
    name: 'cookie-consent',
    category: 'essential',
    type: 'localStorage',
    duration: '12 Monate',
    purpose: 'Legacy-Key für Abwärtskompatibilität des Consent-Status.',
    provider: 'Eigen',
  },
  {
    name: 'analytics_sessionId',
    category: 'essential',
    type: 'sessionStorage',
    duration: 'Session',
    purpose: 'Sitzungs-ID für rudimentäre Fehleranalyse und Funnel-Zuordnung (ohne PII).',
    provider: 'Eigen',
  },
  {
    name: 'session_start',
    category: 'essential',
    type: 'sessionStorage',
    duration: 'Session',
    purpose: 'Zeitstempel des Sitzungsbeginns für Time-on-Page Metriken.',
    provider: 'Eigen',
  },
  {
    name: 'memo_form_autosave',
    category: 'essential',
    type: 'sessionStorage',
    duration: 'Session',
    purpose: 'Automatische Zwischenspeicherung von Formulardaten zur Vermeidung von Datenverlust.',
    provider: 'Eigen',
  },

  // ─── Analytics (nur mit Consent) ───
  {
    name: '_ga',
    category: 'analytics',
    type: 'cookie',
    duration: '2 Jahre',
    purpose: 'Google Analytics 4: Unterscheidung von Nutzern. IP-Adressen werden anonymisiert.',
    provider: 'Google Ireland Limited',
  },
  {
    name: '_gid',
    category: 'analytics',
    type: 'cookie',
    duration: '24 Stunden',
    purpose: 'Google Analytics 4: Unterscheidung von Nutzern innerhalb einer Sitzung.',
    provider: 'Google Ireland Limited',
  },
  {
    name: 'utm_parameters',
    category: 'analytics',
    type: 'sessionStorage',
    duration: 'Session',
    purpose: 'Temporärer Speicher für Kampagnen-Parameter (utm_source, utm_medium, etc.).',
    provider: 'Eigen',
  },

  // ─── Marketing / Externe Dienste (nur mit Consent) ───
  {
    name: 'Calendly Session-Cookies',
    category: 'marketing',
    type: 'cookie',
    duration: 'Session',
    purpose: 'Terminbuchungs-Widget: Session-Verwaltung und Spamprävention.',
    provider: 'Calendly LLC',
  },
] as const;

/** Filter-Helfer für Datenschutzerklärung */
export const getCookiesByCategory = (category: CookieCategory): readonly CookieEntry[] =>
  COOKIE_INVENTORY.filter(c => c.category === category);
