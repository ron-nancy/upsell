# Design Tokens — hellonancy.com / Lem Product Page

Extracted via `getComputedStyle()` on the live site.

## Colors (RGB triplets the live site uses; converted to hex)

| Token | RGB | Hex | Notes |
|---|---|---|---|
| `--background-primary` | 252 247 237 | `#FCF7ED` | Page cream background |
| `--text-primary` | 26 26 26 | `#1A1A1A` | Body text near-black |
| `--header-background` | 243 220 226 | `#F3DCE2` | Soft pink (current header) |
| `--header-text` | 255 48 204 | `#FF30CC` | Hot pink (Nancy brand) |
| `--on-sale-text` | 255 48 204 | `#FF30CC` | Hot pink sale color |
| `--on-sale-badge-background` | 255 48 204 | `#FF30CC` | Hot pink badge |
| `--button-background-primary` | 26 26 26 | `#1A1A1A` | Dark CTA |
| `--button-text-primary` | 255 255 255 | `#FFFFFF` | White on dark |
| `--button-background-secondary` | 240 196 23 | `#F0C417` | Yellow secondary CTA |
| `--button-text-secondary` | 26 26 26 | `#1A1A1A` | Dark text on yellow |
| `--star-color` | 255 183 74 | `#FFB74A` | Orange-yellow stars |
| `--success-text` | 0 163 65 | `#00A341` | Green |
| `--success-background` | 224 244 232 | `#E0F4E8` | Pale green |
| `--warning-text` | 255 183 74 | `#FFB74A` | Orange |
| `--warning-background` | 255 246 233 | `#FFF6E9` | Pale yellow |
| `--error-text` | 248 58 58 | `#F83A3A` | Red |
| `--primary-badge-background` | 128 60 238 | `#803CEE` | Purple |
| `--footer-background` | 255 255 255 | `#FFFFFF` | White |
| `--footer-text` | 26 26 26 | `#1A1A1A` | Near-black |
| `--accent` | 26 26 26 | `#1A1A1A` | Near-black |
| Announce-bar pink (top) | — | `#FF30CC`-ish | Same as brand pink |
| Sale banner green-yellow | — | `~#E4F260` | Lime green |
| Feature bar yellow | — | `~#F2E76B` | Pale lemon |
| Warning banner pink | — | `~#E8499C` | Hot magenta |

The page is dominated by **cream (#FCF7ED) + hot-pink (#FF30CC) + lemon yellow + lime accents**.

## Typography

### Font families (custom self-hosted on Shopify CDN)
- **Fraunces** (Regular, Bold) — serif, used for body/paragraphs.
  - URL: `https://hellonancy.com/cdn/shop/files/Fraunces-Regular.woff`
  - URL: `https://hellonancy.com/cdn/shop/files/Fraunces-Bold.woff`
- **ES Rebond Grotesque** (Light, Regular, Semibold, Bold) — sans-serif geometric, used for **headings, buttons, UI labels**.
  - URL: `https://hellonancy.com/cdn/shop/files/ESRebondGrotesque-Regular.woff`
  - URL: `https://hellonancy.com/cdn/shop/files/ESRebondGrotesque-Semibold.woff`
  - URL: `https://hellonancy.com/cdn/shop/files/ESRebondGrotesque-Bold.woff`

The **Nancy logo wordmark** is a separate handwritten/script lockup served as an SVG/PNG (`Nancy_Logo_Pink.png`).

### Computed font usage on key elements
| Element | Family | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| body | Fraunces-Regular | 16px | 400 | 25.6px (1.6) | normal |
| h1 (product title) | ESRebondGrotesque-Semibold | 40px | 400 | 44px | -0.8px |
| h2 (section heads) | ESRebondGrotesque-Semibold | 26px | 400 | 29.9px | normal |
| h3 | ESRebondGrotesque-Bold | 16px | 400 | 24px | normal |

Heading H1 token: `--text-h1: 3rem` (48px) but actual product H1 was 40px due to scoping.

## Size scale (Tailwind-equivalent)
- `--text-xs: 0.75rem`
- `--text-sm: 0.875rem`
- `--text-base: 1.0rem`
- `--text-lg: 1.25rem`
- `--text-h6: 1.125rem`
- `--text-h5: 1.25rem`
- `--text-h4: 1.625rem`
- `--text-h3: 2rem`
- `--text-h2: 2.5rem`
- `--text-h1: 3rem`

## Layout

- **Header height:** `103px` total nav (logo area)
- Top stack: announce bar (44px) + sale bar (54px, sticky z=1001) + header (103px, sticky z=999)
- Body BG: `#FCF7ED` cream
- Main content max-width: ~1280px center column

## Misc

- Box shadow tokens: `--shadow-md: 0 5px 30px rgb(26 26 26 / 0.1)`
- Section block spacing: `--section-inner-max-spacing-block: 4rem`
- No Lenis or smooth-scroll library detected (`hasLenis: false`).
- Stack: Shopify + Bustem fraud-protect + Klaviyo
- Document height ~11,200px (very long product page)
