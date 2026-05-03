# KFT Design System Documentation

## Memo-BauT Design System

---

## Overview

This is a token-based design system with the `--kft-*` prefix for "Memo-BauT". All design decisions are systematically organized using CSS custom properties for consistent, maintainable styling.

**Key Principles:**

- ✅ WCAG 2.2 AA compliant (all color combinations tested for ≥4.5:1 contrast)
- ✅ Consent-first privacy approach
- ✅ Token-based design (no hard-coded values)
- ✅ Responsive and accessible
- ✅ Performance-optimized

---

## Token Reference

### Color Tokens

#### Semantic Colors (Use these in components)

```css
--kft-color-surface             /* Main background: #ffffff */
--kft-color-surface-subtle      /* Subtle background: stone-50 */
--kft-color-surface-muted       /* Muted background: stone-100 */

--kft-color-fg                  /* Main text: stone-900 */
--kft-color-fg-muted            /* Muted text: stone-600 */
--kft-color-fg-subtle           /* Subtle text: stone-500 */

--kft-color-primary             /* Primary brand: stone-800 */
--kft-color-primary-fg          /* Primary foreground: white */
--kft-color-primary-hover       /* Primary hover: stone-900 */

--kft-color-accent              /* Accent/CTA: terracotta-600 */
--kft-color-accent-fg           /* Accent foreground: white */
--kft-color-accent-hover        /* Accent hover: terracotta-700 */

--kft-color-border              /* Default border: stone-200 */
--kft-color-border-strong       /* Strong border: stone-300 */

--kft-color-success             /* Success state: #16a34a */
--kft-color-warning             /* Warning state: #ea580c */
--kft-color-error               /* Error state: #dc2626 */

--kft-focus-ring                /* Focus ring: terracotta-600 */
```

#### Base Color Palette

```css
/* Stone Palette (Earthy, neutral) */
--kft-color-stone-50 through --kft-color-stone-900

/* Terracotta Accent (Warm, inviting) */
--kft-color-terracotta-400 through --kft-color-terracotta-700
```

**Contrast Testing:** All text/background combinations have been verified to meet WCAG 2.2 AA standards (≥4.5:1).

---

### Spacing Scale (8pt system)

```css
--kft-space-1: 2px --kft-space-2: 4px --kft-space-3: 8px --kft-space-4: 12px --kft-space-5: 16px
  --kft-space-6: 24px --kft-space-7: 32px --kft-space-8: 40px --kft-space-9: 48px
  --kft-space-10: 64px --kft-space-11: 80px --kft-space-12: 96px;
```

**Usage:**

- padding: var(--kft-space-6)
- gap: var(--kft-space-4)
- margin-bottom: var(--kft-space-8)

---

### Border Radius

```css
--kft-radius-sm: 4px --kft-radius-md: 8px --kft-radius-lg: 12px --kft-radius-xl: 16px;
```

---

### Shadows (Elevation)

```css
--kft-shadow-sm   /* Subtle elevation */
--kft-shadow-md   /* Cards, dropdowns */
--kft-shadow-lg   /* Modals, popovers */
--kft-shadow-xl   /* High elevation (consent banner) */
```

---

### Motion Tokens

```css
/* Easing */
--kft-ease-standard: cubic-bezier(0.4, 0, 0.2, 1) --kft-ease-in: cubic-bezier(0.4, 0, 1, 1)
  --kft-ease-out: cubic-bezier(0, 0, 0.2, 1) /* Duration */ --kft-dur-100: 100ms
  --kft-dur-150: 150ms --kft-dur-200: 200ms --kft-dur-300: 300ms;
```

**Reduced Motion:** All animations respect `prefers-reduced-motion: reduce`.

---

### Container & Layout

```css
--kft-container-max: 1200px --kft-container-padding: 24px (responsive: 16px on mobile)
  --kft-measure-narrow: 65ch --kft-measure-comfortable: 75ch;
```

**Utility Classes:**

```css
.kft-container  /* Max-width container with responsive padding */
.kft-section    /* Vertical section spacing (96px desktop, 64px mobile) */
```

---

### Z-Index Scale

```css
--kft-z-base: 0 --kft-z-dropdown: 100 --kft-z-sticky: 200 /* Header */ --kft-z-fixed: 300
  --kft-z-overlay: 400 /* Mobile menu */ --kft-z-modal: 500 /* Dialogs */ --kft-z-toast: 600
  /* Consent banner, notifications */;
```

---

## Breakpoints

```css
Mobile:  375px - 767px
Tablet:  768px - 991px
Desktop: 992px - 1199px
Large:   1200px+
```

**Grid System:**

- Mobile: 4 columns
- Tablet: 8 columns
- Desktop: 12 columns

---

## Components

### Button Variants

**Primary CTA:**

```tsx
<Button
  className="bg-[var(--kft-color-accent)] 
  hover:bg-[var(--kft-color-accent-hover)]
  text-[var(--kft-color-accent-fg)] min-h-[44px]"
>
  Kostenlose Vor-Ort-Beratung
</Button>
```

**Secondary:**

```tsx
<Button variant="outline" className="min-h-[44px]">
  Mehr erfahren
</Button>
```

---

## Accessibility (WCAG 2.2 AA)

### Required Patterns

1. **Focus States:**
   - All interactive elements have visible focus rings
   - Uses `--kft-focus-ring` color (terracotta-600)
   - 2px outline with 2px offset

2. **Touch Targets:**
   - Minimum 44x44px for all clickable elements
   - Applies to buttons, links, form controls

3. **Keyboard Navigation:**
   - All interactive elements accessible via keyboard
   - Modal/dialog focus traps implemented
   - ESC key closes overlays
   - Skip-to-main-content link for screen readers

4. **ARIA:**
   - Proper roles on landmarks (banner, navigation, main, contentinfo)
   - Labels on form inputs
   - aria-expanded on toggles
   - aria-label for icon-only buttons

5. **Color Contrast:**
   - All text meets 4.5:1 ratio minimum
   - Interactive elements have sufficient contrast in all states

---

## Consent-First Privacy

### Implementation Requirements

1. **Equal Button Prominence:**
   - "Alle ablehnen" and "Alle akzeptieren" have equal visual weight
   - No dark patterns or pre-selected checkboxes

2. **Categories:**
   - Necessary (always on, cannot be disabled)
   - Analytics (optional)
   - External Media (optional, e.g., Google Maps)

3. **User Experience:**
   - Banner appears on first visit
   - Preference center accessible via settings
   - ESC key closes dialogs
   - Focus trap in modal
   - Persistent storage of preferences in localStorage

---

## Local SEO Requirements

### NAP Data (Name, Address, Phone)

**Must be consistent across:**

- Footer
- Contact page
- Schema markup (to be implemented in meta tags)

```
Memo-BauT
Geschäftsführer: Mehmet Tezgel
Manufakturstraße 1
35578 Wetzlar
Tel: +49 176 70162293
E-Mail: anfrage@memobau-exklusiv.de
```

### Service Area

Aßlar, Wetzlar, Gießen und Umgebung (50 km Radius)

### Structured Data (Recommended)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Memo-BauT",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Manufakturstraße 1",
    "addressLocality": "Wetzlar",
    "postalCode": "35578",
  "telephone": "+4917670162293",
  "priceRange": "$$"
}
```

---

## Performance Optimization

### Image Guidelines

1. **Lazy Loading:**
   - Use `loading="lazy"` on images below fold
   - Hero images should load eagerly

2. **Responsive Images:**
   - Provide multiple sizes via srcset
   - Define aspect ratios to prevent CLS

3. **Format:**
   - WebP with JPEG fallback
   - SVG for icons and logos

### LCP (Largest Contentful Paint)

**Priority Elements:**

- Hero heading text
- Hero CTA button
- Above-fold images

---

## Component Contracts

### ServiceCard

```tsx
interface ServiceCardProps {
  icon: LucideIcon; // Icon component from lucide-react
  title: string; // Service name
  description: string; // Short description (2-3 lines)
  href: string; // Link destination
  imageUrl?: string; // Optional thumbnail
}
```

**A11y:**

- Proper heading hierarchy (h3 for title)
- Entire card is clickable
- Focus visible on card link

---

### ContactForm

```tsx
// No props - self-contained component
```

**A11y:**

- Labels associated with inputs (htmlFor)
- Required fields marked with asterisk + aria-required
- Error states with clear messaging
- Success confirmation with role="alert"

**Privacy:**

- DSGVO notice with link to Datenschutzerklärung
- Explains data processing

---

## Development Handoff Notes

### CSS Custom Properties Mapping

All Figma tokens map directly to CSS:

| Figma Variable    | CSS Custom Property |
| ----------------- | ------------------- |
| kft-color-surface | --kft-color-surface |
| kft-space-6       | --kft-space-6       |
| kft-radius-md     | --kft-radius-md     |

### Implementation Example

```css
/* ✅ Correct - Uses tokens */
.my-component {
  background: var(--kft-color-surface);
  padding: var(--kft-space-6);
  border-radius: var(--kft-radius-md);
  color: var(--kft-color-fg);
}

/* ❌ Incorrect - Hard-coded values */
.my-component {
  background: #ffffff;
  padding: 24px;
  border-radius: 8px;
  color: #1c1917;
}
```

---

## Typography

**Font Family:** Inter (or fallback system fonts)

**Hierarchy:**

- Display: Large hero headings
- H1-H6: Defined in globals.css
- Body: Default text size
- Subtle: Smaller, muted text

**Line Length:**

- Body text: max 65-75 characters
- Use `max-w-prose` or `--kft-measure-comfortable`

---

## Brand Voice & Microcopy

**Tone:** Professional, warm, approachable

- Not "luxurious" or pretentious
- Emphasizes craftsmanship, precision, transparency

**Primary CTA:** "Kostenlose Vor-Ort-Beratung"
**Secondary CTAs:** "Mehr erfahren", "Projekt ansehen"

**USP Statement:**
"Kreative Fliesenverlegung. Präzise. Transparent. Vor Ort."

---

## Testing Checklist

- [ ] All color combinations meet 4.5:1 contrast
- [ ] Focus states visible on all interactive elements
- [ ] Keyboard navigation works (Tab, Enter, ESC)
- [ ] Touch targets minimum 44x44px
- [ ] Mobile menu focus trap functional
- [ ] Consent banner equal prominence for accept/reject
- [ ] Forms have proper labels and error states
- [ ] Images have alt text
- [ ] Semantic HTML (header, nav, main, footer, article, section)
- [ ] Skip-to-main-content link for screen readers
- [ ] Reduced motion respected

---

## File Structure

```
/components
  /ui               # Shadcn components
  Header.tsx        # Sticky navigation
  Hero.tsx          # Hero variants
  ServiceCard.tsx   # Service offerings
  ProcessTimeline.tsx
  TrustBadges.tsx   # Certifications, reviews
  AboutUs.tsx
  FAQ.tsx           # Accessible accordion
  ContactForm.tsx   # Lead generation form
  ConsentBanner.tsx # Privacy consent
  Footer.tsx        # NAP data, sitemap

/styles
  globals.css       # Token definitions + base styles
```

---

## Contact for Questions

For any questions about implementation or design decisions:

- Review component documentation in file headers
- Check A11y patterns in component comments
- Refer to this design system doc for token usage

---

**Version:** 1.0
**Last Updated:** October 2025
**Compliance:** WCAG 2.2 AA, DSGVO/GDPR
