# Developer Handoff Guide

## KFT - Kreative Fliesenverlegung Tezgel

---

## Quick Start

This website is built with:

- **React** (functional components with hooks)
- **Tailwind CSS** with custom design tokens
- **Shadcn/ui** component library
- **Lucide React** for icons

**All styling uses CSS custom properties with `--kft-*` prefix.**

---

## 🎨 Design System

### Using Tokens

Always use design tokens instead of hard-coded values:

```tsx
// ✅ Correct
<div className="bg-[var(--kft-color-surface)] p-[var(--kft-space-6)]">

// ❌ Wrong
<div className="bg-white p-6">
```

**Complete token reference:** See `/DESIGN_SYSTEM.md`

---

## 📁 File Structure

```
/components
  /ui/              # Shadcn components (DO NOT MODIFY)
  /figma/           # Figma-specific utilities (PROTECTED)
  Header.tsx        # Main navigation
  Hero.tsx          # Hero sections
  ServiceCard.tsx   # Service offerings display
  ProcessTimeline.tsx
  TrustBadges.tsx
  AboutUs.tsx
  FAQ.tsx
  ContactForm.tsx   # Lead generation form
  ConsentBanner.tsx # GDPR/DSGVO consent
  ProjectCard.tsx   # Case studies
  Footer.tsx        # NAP data for SEO
  StickyMobileCTA.tsx

/styles
  globals.css       # Token definitions + base styles

App.tsx             # Main application entry
```

---

## 🎯 Key Components

### Header

- Sticky navigation
- Mobile hamburger menu with focus trap
- Primary CTA always visible
- Auto-scroll shadow effect

```tsx
<Header />
```

### Hero

- Statement variant (landing page)
- Case variant (project pages)

```tsx
<Hero />
<CaseHero title="..." location="..." imageUrl="..." />
```

### Service Cards

- Display services in grid
- Icon, image, description, CTA
- Hover effects and transitions

```tsx
<ServiceGrid title="..." description="...">
  <ServiceCard icon={Bath} title="..." description="..." href="..." imageUrl="..." />
</ServiceGrid>
```

### Contact Form

- Lead generation
- Validation and error states
- DSGVO compliance notice
- Success/error feedback

```tsx
<ContactForm />
```

### Consent Banner

- Cookie consent (GDPR/DSGVO)
- Equal prominence for accept/reject
- Preference center with categories
- localStorage persistence

```tsx
<ConsentBanner />
```

---

## ♿ Accessibility Checklist

### Before Deployment

- [ ] All interactive elements have `min-h-[44px]` (touch targets)
- [ ] Focus states visible (using `--kft-focus-ring`)
- [ ] Forms have proper `<label>` elements with `htmlFor`
- [ ] Images have descriptive `alt` text
- [ ] Headings follow hierarchy (H1 → H2 → H3)
- [ ] Color contrast meets WCAG 2.2 AA (4.5:1 minimum)
- [ ] Keyboard navigation works (Tab, Enter, ESC)
- [ ] Screen reader tested (test skip-to-content link)
- [ ] `aria-label` on icon-only buttons
- [ ] `role` attributes on landmarks

### Testing Tools

- **Contrast:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Keyboard:** Test with Tab, Shift+Tab, Enter, Space, ESC
- **Screen Reader:** NVDA (Windows), VoiceOver (Mac)

---

## 📱 Responsive Behavior

### Breakpoints

```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

### Grid System

- **Mobile (< 768px):** Single column, stack elements
- **Tablet (768-1023px):** 2 columns for cards
- **Desktop (≥ 1024px):** 3 columns for cards, 12-col grid

### Mobile-Specific Features

- Hamburger menu (Header)
- Sticky CTA bar (appears after scroll)
- Simplified navigation
- Touch-optimized spacing

---

## 🔒 Privacy & Consent

### Cookie Categories

1. **Necessary** (always enabled)
   - Session management
   - Form functionality
   - Consent preferences

2. **Analytics** (optional)
   - Usage tracking (anonymized)
   - Performance monitoring

3. **External Media** (optional)
   - Google Maps embeds
   - YouTube videos
   - Other third-party content

### Two-Click Privacy

External media (maps, videos) should only load after explicit consent:

```tsx
{
  consentGiven ? (
    <iframe src="https://maps.google.com/..." />
  ) : (
    <ConsentPlaceholder onClick={requestConsent} />
  );
}
```

---

## 🌍 Local SEO Implementation

### NAP Data Consistency

**Name, Address, Phone must be identical everywhere:**

```
Kreative Fliesenverlegung Tezgel
Inhaber: Özcan Tezgel
Musterstraße 42
35614 Aßlar
Tel: 06441 123456
```

**Locations:** Footer, Contact page, Schema markup

### Schema Markup (Add to `<head>`)

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kreative Fliesenverlegung Tezgel",
    "image": "https://...",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Musterstraße 42",
      "addressLocality": "Aßlar",
      "postalCode": "35614",
    "addressCountry": "DE"
    },
    "telephone": "+4917670162293",
    "email": "info@memo-baut.de",
    "url": "https://fliesenverlegung-tezgel.de",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "50.6037",
        "longitude": "8.4627"
      },
      "geoRadius": "50000"
    }
  }
</script>
```

### Service Pages

Each service should have:

- Unique H1 with keyword
- Service description (min 300 words)
- Local keyword integration ("Fliesenleger Aßlar", "Badsanierung Wetzlar")
- Clear CTA to contact form

---

## 🚀 Performance Optimization

### Images

```tsx
// ✅ Use ImageWithFallback component
<ImageWithFallback
  src="..."
  alt="..."
  loading="lazy"  // Below fold
  className="..."
/>

// For hero images (above fold)
<ImageWithFallback
  src="..."
  alt="..."
  loading="eager"
  fetchpriority="high"
/>
```

### Lazy Loading

- Images below fold: `loading="lazy"`
- Hero image: `loading="eager"`
- Icons: inline SVG (already optimized)

### Bundle Optimization

- Code splitting by route (if using Next.js/Vite)
- Tree-shake unused components
- Compress images (WebP format)

---

## 🛠️ Common Tasks

### Adding a New Service

1. **Update ServiceGrid in App.tsx:**

```tsx
<ServiceCard
  icon={YourIcon}
  title="New Service"
  description="..."
  href="#leistungen"
  imageUrl="..."
/>
```

2. **Add to navigation** (Header.tsx navItems)

3. **Create detail page** (optional)

### Adding FAQ Items

Edit `/components/FAQ.tsx`:

```tsx
const faqItems = [
  {
    question: 'Your question?',
    answer: 'Your detailed answer...',
  },
  // ...
];
```

### Updating Contact Information

**Update in 3 places:**

1. Footer.tsx (NAP section)
2. ContactForm.tsx (sidebar)
3. Header.tsx (phone link)
4. Schema markup (see above)

### Changing Colors

Edit `/styles/globals.css`:

```css
:root {
  --kft-color-accent: #your-color;
  --kft-color-accent-hover: #your-hover-color;
}
```

**Test contrast after changes!**

---

## 📋 Pre-Launch Checklist

### Content

- [ ] All placeholder text replaced with real content
- [ ] Phone number, email, address updated
- [ ] Service descriptions complete
- [ ] Images optimized and compressed
- [ ] Alt text on all images
- [ ] Meta descriptions for SEO

### Technical

- [ ] Forms connected to backend/email service
- [ ] Google Analytics (with consent check)
- [ ] Google Maps embed (two-click solution)
- [ ] Favicon and app icons
- [ ] robots.txt configured
- [ ] Sitemap generated
- [ ] SSL certificate installed

### Legal

- [ ] Impressum page complete
- [ ] Datenschutzerklärung (privacy policy) complete
- [ ] Cookie consent functional
- [ ] GDPR compliance verified

### Testing

- [ ] Mobile responsive (test on real devices)
- [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Keyboard navigation
- [ ] Screen reader test
- [ ] Form validation
- [ ] Contact form submission
- [ ] Page load speed (< 3s)
- [ ] Lighthouse audit (score ≥ 90)

---

## 🐛 Troubleshooting

### Focus Ring Not Visible

Check if element has `focus-visible:outline-2` or use global styles from globals.css

### Mobile Menu Not Closing

Ensure `setIsMobileMenuOpen(false)` is called on link click

### Form Not Submitting

Check if form has `onSubmit` handler and preventDefault()

### Images Not Loading

Verify ImageWithFallback component is imported and used correctly

### Spacing Inconsistent

Make sure you're using `--kft-space-*` tokens, not Tailwind's default spacing

---

## 📞 Support

For questions about:

- **Design tokens:** See `/DESIGN_SYSTEM.md`
- **Component API:** Check component file headers
- **Accessibility:** Review WCAG 2.2 AA guidelines
- **Legal/GDPR:** Consult legal advisor

---

## 📚 Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

**Version:** 1.0  
**Last Updated:** October 2025
