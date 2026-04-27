# Design System — Memo BauT

> **SSOT**: Der Code in `src/index.css` ist die einzige Wahrheit.
> Dieses Dokument ist eine menschenlesbare Referenz, extrahiert aus dem Code.

## Farb-Palette (OKLCH)

| Token | Wert | Verwendung |
|:------|:-----|:-----------|
| `--color-primary-base` | `oklch(35% 0.07 145)` | Tiefes Waldgrün — CTAs, Hauptaktionen |
| `--color-primary-hover` | `oklch(30% 0.06 145)` | Hover-Zustand |
| `--color-primary-active` | `oklch(25% 0.05 145)` | Active/Pressed-Zustand |
| `--color-secondary-base` | `oklch(50% 0.09 145)` | Helles Premium-Grün — subtile Akzente |
| `--color-accent-base` | `oklch(40% 0.08 80)` | Erde/Braun — Natürlichkeit |
| `--color-neutral-white` | `#ffffff` | Seitenhintergrund |
| `--color-neutral-offwhite` | `oklch(98% 0.01 100)` | Card-Hintergrund |
| `--color-neutral-darkgray` | `oklch(25% 0.01 145)` | Haupt-Textfarbe |
| `--color-neutral-midgray` | `oklch(60% 0.01 100)` | Sekundärer Text |

### Semantische Farben
| Token | Verwendung |
|:------|:-----------|
| `--color-success` | Erfolg (oklch grün) |
| `--color-warning` | Warnung (oklch amber) |
| `--color-error` | Fehler (oklch rot) |
| `--color-info` | Information (oklch grün) |

## Typografie (Fluid Scale — Major Third 1.250)

| Token | Wert | Zweck |
|:------|:-----|:------|
| `--text-hero` | `clamp(2.5rem, 5vw + 1rem, 3.8125rem)` | Hero-Überschriften |
| `--text-h1` | `clamp(2rem, 4vw + 0.5rem, 3.0625rem)` | Seitenüberschriften |
| `--text-h2` | `clamp(1.75rem, 3vw + 0.25rem, 2.4375rem)` | Abschnittsüberschriften |
| `--text-h3` | `clamp(1.5rem, 2vw + 0.25rem, 1.9375rem)` | Unterabschnitte |
| `--text-h4` | `clamp(1.25rem, 1.5vw + 0.25rem, 1.5625rem)` | Card-Überschriften |
| `--text-lead` | `clamp(1.125rem, 1.25vw + 0.25rem, 1.25rem)` | Lead-Absätze |
| `--text-body` | `1rem` | Fließtext (16px) |
| `--text-small` | `0.8125rem` | Kleine Beschriftungen |
| `--text-xs` | `0.625rem` | Micro-Text |

### Zeilenhöhen & Zeichenabstände
| Typ | Line-Height | Letter-Spacing |
|:----|:------------|:---------------|
| Hero | `1.05` | `-0.03em` |
| H1 | `1.1` | `-0.02em` |
| H2 | `1.2` | `-0.01em` |
| H3 | `1.3` | `0em` |
| Body | `1.6` | — |

## Spacing (4px Grid)

| Token | Wert | Verwendung |
|:------|:-----|:-----------|
| `space-1` | 4px | Icon-Gaps, Micro-Spacing |
| `space-2` | 8px | Inline-Gaps, Button-Padding |
| `space-3` | 12px | Card-Padding (klein) |
| `space-4` | 16px | Standard-Gap |
| `space-6` | 24px | Section-Gap (intern) |
| `space-8` | 32px | Section-Gap (mittel) |
| `space-12` | 48px | Section-Gap (groß) |
| `space-16` | 64px | Section-Padding |
| `space-20` | 80px | Hero-Padding |
| `space-24` | 96px | Section-Margin |
| `space-32` | 128px | Page-Section-Separator |

## Border Radius

| Token | Wert | Verwendung |
|:------|:-----|:-----------|
| `radius-sm` | 4px | Inputs, kleine Elemente |
| `radius-md` | 8px | Buttons, Cards |
| `radius-lg` | 12px | Große Cards, Modals |
| `radius-xl` | 16px | Feature-Cards |
| `radius-full` | 9999px | Avatare, Badges |

## Elevation (Warm Green-Tinted Shadows)

| Level | Verwendung |
|:------|:-----------|
| `elevation-1` | Resting Cards (subtil) |
| `elevation-2` | Hover State |
| `elevation-3` | Prominent (Buttons, Modals) |
| `elevation-4` | Overlays (Dropdowns) |
| `elevation-5` | Modals, Sheets |

## Motion System (6 Tiers)

| Tier | Duration | Easing | Verwendung |
|:-----|:---------|:-------|:-----------|
| **Micro** | 150ms | `cubic-bezier(0.2, 0, 0, 1)` | Hover, Focus |
| **Standard** | 250ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Dropdowns, Panels |
| **Emphasis** | 400ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Entry, Scroll-Reveal |
| **Dramatic** | 600ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Hero, Map |
| **Gentle** | 800ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Parallax, Floating |
| **Exit** | 200ms | `cubic-bezier(0.4, 0, 1, 1)` | Ausgangsanimationen |

### Spring Physics
| Token | Easing | Verwendung |
|:------|:-------|:-----------|
| `spring-standard` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Hover-Effekte |
| `spring-bouncy` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Emphasis |
| `spring-gentle` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard |
| `spring-fast` | `cubic-bezier(0.1, 0.9, 0.2, 1)` | Sofort-Feedback |

## Z-Index Skala

| Token | Wert | Verwendung |
|:------|:-----|:-----------|
| `z-dropdown` | 100 | Dropdowns, Popovers |
| `z-sticky` | 200 | Sticky Headers |
| `z-modal-backdrop` | 300 | Modal-Backdrop |
| `z-modal` | 400 | Modale Dialoge |
| `z-toast` | 500 | Toast-Notifications |
| `z-tooltip` | 600 | Tooltips |

## Breakpoints

| Token | Wert | Gerät |
|:------|:-----|:------|
| `bp-1` | 360px | Standard Phone |
| `bp-2` | 414px | Large Phone |
| `bp-3` | 768px | Tablet Portrait |
| `bp-4` | 1024px | Tablet Landscape |
| `bp-5` | 1200px | Desktop |
| `bp-6` | 1440px | Large Desktop |

## Accessibility Guards

- ✅ `prefers-reduced-motion: reduce` — alle Animationen deaktiviert
- ✅ `prefers-contrast: more` — Shadows werden zu soliden Borders
- ✅ `prefers-reduced-transparency: reduce` — Blur/Noise deaktiviert
- ✅ `forced-colors: active` — Windows High Contrast Mode
- ✅ `@media print` — Navigation/Footer/Widgets ausgeblendet
- ✅ Focus-Indicator: WCAG AAA Double-Ring (weiß + Markenfarbe)
- ✅ Touch-Devices: Hover-only Effekte deaktiviert

## Regeln

1. **Keine Magic Numbers** — alle Werte über Tokens
2. **Keine Arbitrary Values** in Tailwind wenn Token existiert
3. **Keine z-index Werte** außerhalb der definierten Skala
4. **Keine Pixel-Werte** außerhalb des 4px-Grids (Ausnahme: 1px Borders)
