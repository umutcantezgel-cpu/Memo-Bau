# Kreative Fliesenverlegung Tezgel

Premium website for a local tile-laying business in Aßlar, Wetzlar & Gießen, Germany.

---

## 🎯 Project Overview

**Business:** Meisterbetrieb (master craftsman business) specializing in:

- Bathroom renovations
- Large format tile installation
- Natural stone laying
- Mosaic design
- Outdoor terrace tiling

**Primary Goal:** Lead generation through "Kostenlose Vor-Ort-Beratung" (Free on-site consultation)

**Target Audience:** Homeowners in the Aßlar/Wetzlar/Gießen region seeking professional tile installation

---

## ✨ Key Features

### Design System

- **Token-based architecture** with `--kft-*` prefix
- Earthy, stone-inspired color palette with terracotta accents
- 8-point spacing scale
- Consistent typography and hierarchy
- Light mode (dark mode tokens defined but not activated)

### Accessibility (WCAG 2.2 AA)

- ✅ Minimum 4.5:1 contrast ratios on all text
- ✅ 44px minimum touch targets
- ✅ Keyboard navigation support
- ✅ Focus states on all interactive elements
- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Screen reader optimized
- ✅ Reduced motion support

### Privacy & Consent

- **Consent-first approach** (GDPR/DSGVO compliant)
- Equal prominence for accept/reject buttons
- Granular cookie categories (Necessary, Analytics, External Media)
- Two-click solution for external embeds (maps, videos)
- localStorage for consent preferences

### Local SEO

- Consistent NAP data (Name, Address, Phone)
- Service area clearly defined
- Schema.org LocalBusiness markup ready
- Regional keyword optimization
- Mobile-first responsive design

### Lead Generation

- Primary CTA: "Kostenlose Vor-Ort-Beratung"
- Accessible contact form with validation
- Sticky mobile CTA bar
- Multiple conversion touchpoints
- Trust indicators (certifications, testimonials)

---

## 🏗️ Architecture

### Tech Stack

- **React** (functional components with hooks)
- **Tailwind CSS** v4.0
- **Shadcn/ui** component library
- **Lucide React** icons
- **TypeScript** support

### File Structure

```
/components
  /ui/              # Shadcn components
  /figma/           # Protected utilities
  Header.tsx
  Hero.tsx
  ServiceCard.tsx
  ProcessTimeline.tsx
  TrustBadges.tsx
  AboutUs.tsx
  FAQ.tsx
  ContactForm.tsx
  ConsentBanner.tsx
  ProjectCard.tsx
  Footer.tsx
  StickyMobileCTA.tsx

/styles
  globals.css       # Design tokens + base styles

App.tsx             # Main application
```

---

## 🎨 Design Tokens

All styling uses CSS custom properties:

```css
/* Colors */
--kft-color-surface
--kft-color-fg
--kft-color-primary
--kft-color-accent
--kft-color-border

/* Spacing (8pt scale) */
--kft-space-1 through --kft-space-12

/* Radius */
--kft-radius-sm, -md, -lg, -xl

/* Shadows */
--kft-shadow-sm, -md, -lg, -xl

/* Motion */
--kft-ease-standard
--kft-dur-100, -150, -200, -300
```

**Full token documentation:** See `/DESIGN_SYSTEM.md`

---

## 📱 Responsive Design

### Breakpoints

- **Mobile:** 375px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

### Grid System

- Mobile: 4 columns, stacked layouts
- Tablet: 8 columns, 2-col card grids
- Desktop: 12 columns, 3-col card grids

### Mobile Optimizations

- Hamburger navigation with focus trap
- Sticky CTA bar (appears after scroll)
- Touch-optimized spacing (min 44px targets)
- Simplified layouts

---

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

## 📋 Components

### Header

Sticky navigation with mobile menu, primary CTA always visible

### Hero

Statement variant for landing page, case variant for project pages

### ServiceGrid & ServiceCard

Display service offerings in responsive grid with icons, images, descriptions

### ProcessTimeline

5-step visualization of the workflow from consultation to completion

### TrustBadges

Certifications, guarantees, and reliability indicators

### Testimonials

Customer reviews with star ratings

### AboutUs

Company story, values, qualifications, owner introduction

### FAQ

Accessible accordion with common questions

### ContactForm

Lead generation with proper validation, DSGVO notice, success/error states

### ConsentBanner

Cookie consent with preference center, localStorage persistence

### ProjectCard

Case study display with images, metadata (location, area, date)

### Footer

NAP data, service area, links, consent reminder for external maps

### StickyMobileCTA

Mobile-only quick access to phone and contact form

---

## ♿ Accessibility Features

- Semantic HTML5 elements (`header`, `nav`, `main`, `article`, `footer`)
- Skip-to-main-content link for keyboard users
- Proper heading hierarchy (H1 → H2 → H3)
- Form labels associated with inputs
- Error messages linked to form fields
- Focus trap in mobile menu and dialogs
- Keyboard shortcuts (ESC closes overlays)
- ARIA roles and labels
- Alt text on all images
- Color contrast tested (WCAG 2.2 AA)
- Reduced motion support

---

## 🔒 Privacy & Legal

### GDPR/DSGVO Compliance

- Consent banner on first visit
- Equal prominence for accept/reject
- Granular consent categories
- Easy access to preference center
- Data processing notice in contact form
- Link to Datenschutzerklärung (privacy policy)

### Cookie Categories

1. **Necessary** (always on) - Session, consent storage
2. **Analytics** (optional) - Usage tracking
3. **External Media** (optional) - Maps, videos

### Two-Click Privacy

External embeds (Google Maps) only load after explicit consent

---

## 🌍 Local SEO

### NAP Data Consistency

```
Name: Kreative Fliesenverlegung Tezgel
Inhaber: Özcan Tezgel
Phone: 0176 70162293
```

### Service Area

Aßlar, Wetzlar, Gießen und Umgebung (50 km Radius)

### Schema Markup

Ready for LocalBusiness schema - see `/HANDOFF_GUIDE.md` for implementation

---

## 📊 Performance

### Image Optimization

- ImageWithFallback component for all images
- Lazy loading below fold
- Eager loading for LCP elements (hero)
- Aspect ratios defined (prevent CLS)

### Code Optimization

- Component-based architecture
- Minimal bundle size
- CSS custom properties (no runtime CSS-in-JS)
- Tree-shakable imports

### Performance Budget

- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

---

## 🛠️ Customization

### Changing Brand Colors

Edit `/styles/globals.css`:

```css
:root {
  --kft-color-accent: #your-color;
  --kft-color-primary: #your-color;
}
```

**Remember to test contrast ratios!**

### Adding Services

Add to `ServiceGrid` in `App.tsx` and navigation in `Header.tsx`

### Updating Contact Info

Update in: Footer, ContactForm, Header, Schema markup

### Adding FAQ Items

Edit `faqItems` array in `/components/FAQ.tsx`

---

## 📚 Documentation

- **Design System:** `/DESIGN_SYSTEM.md` - Complete token reference, component contracts
- **Handoff Guide:** `/HANDOFF_GUIDE.md` - Developer guide, checklists, troubleshooting
- **Component Docs:** See file headers in each component for detailed API and a11y notes

---

## ✅ Pre-Launch Checklist

### Content

- [ ] Replace all placeholder content
- [ ] Update NAP data (3 locations)
- [ ] Add real project images
- [ ] Write service descriptions
- [ ] Complete Impressum
- [ ] Complete Datenschutzerklärung

### Technical

- [ ] Connect form to email service
- [ ] Add Google Analytics (with consent)
- [ ] Implement Google Maps (two-click)
- [ ] Add Schema.org markup
- [ ] Configure robots.txt
- [ ] Generate sitemap
- [ ] SSL certificate

### Testing

- [ ] Mobile responsive (real devices)
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Keyboard navigation
- [ ] Screen reader test
- [ ] Form submission
- [ ] Lighthouse audit (≥90 score)

---

## 🎯 Brand Voice

**Tone:** Professional, warm, approachable

- Emphasizes craftsmanship and precision
- Transparent pricing and process
- Personal, local service
- Not pretentious or "luxury-focused"

**Key Messages:**

- "Kreative Fliesenverlegung. Präzise. Transparent. Vor Ort."
- HWK-Meisterbetrieb (certified master craftsman)
- 15+ years experience
- 5-year warranty
- Regional service (Aßlar, Wetzlar, Gießen)

---

## 📞 Support & Questions

For questions about:

- **Design decisions:** See component file headers
- **Token usage:** Check `/DESIGN_SYSTEM.md`
- **Implementation:** Review `/HANDOFF_GUIDE.md`
- **Accessibility:** Refer to WCAG 2.2 AA guidelines

---

## 📝 License

This is a custom website design for Kreative Fliesenverlegung Tezgel.

---

**Version:** 1.0  
**Created:** October 2025  
**Compliance:** WCAG 2.2 AA, GDPR/DSGVO
