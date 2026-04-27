/**
 * Feature Flags — Zentrales Flag-System ohne externen Service (CC-11).
 *
 * Jedes Flag kann per Umgebungsvariable überschrieben werden:
 *   VITE_FF_TESTIMONIALS=false → Testimonials ausblenden
 *
 * Verwendung in Komponenten:
 *   import { FLAGS } from '@/lib/feature-flags';
 *   if (FLAGS.showTestimonials) { ... }
 */

const envBool = (key: string, fallback: boolean): boolean => {
  const raw = import.meta.env[key];
  if (raw === undefined || raw === '') return fallback;
  return raw === 'true' || raw === '1';
};

export const FLAGS = {
  /** Testimonial-Sektion auf der Startseite */
  showTestimonials: envBool('VITE_FF_TESTIMONIALS', true),

  /** Framer-Motion Animationen systemweit */
  enableAnimations: envBool('VITE_FF_ANIMATIONS', true),

  /** Galerie-Filter (URL-sync via useSearchParams) */
  showGalleryFilter: envBool('VITE_FF_GALLERY_FILTER', true),

  /** Blog-Sektion */
  showBlog: envBool('VITE_FF_BLOG', true),

  /** Calendly Terminbuchungs-Widget */
  showCalendly: envBool('VITE_FF_CALENDLY', true),

  /** Kontaktformular (immer aktiv, safety-override) */
  showContactForm: true as const,

  /** ScrollProgressIndicator oben */
  showScrollProgress: envBool('VITE_FF_SCROLL_PROGRESS', true),

  /** Sticky Mobile CTA am unteren Rand */
  showStickyMobileCta: envBool('VITE_FF_STICKY_CTA', true),
} as const;

/** Alle verfügbaren Flag-Namen */
export type FeatureFlagName = keyof typeof FLAGS;
