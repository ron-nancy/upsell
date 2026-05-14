# Hero Product Section Spec

## Overview
- **Target file:** `src/components/HeroProduct.tsx`
- **Screenshot:** the first full-page screenshot
- **Interaction model:** click-driven (gallery prev/next, persona pills, detail tabs)

## DOM Structure
Two-column grid on desktop (≥1000px):
- LEFT (~56%): **Image gallery** (square aspect 1:1) with prev/next arrows + thumbnail strip below
- RIGHT (~44%): **Product info column** with rating, title, price, AS SEEN IN logos, feature pills, description, code box, CTA buttons, customer-says block, detail tabs, trust icons

Section bg: `#FCF7ED` cream. Max width ~1280px, mx-auto, px-6, py-10.

## LEFT — Image Gallery

- Main image area: square, rounded-2xl overflow-hidden, bg `#F7E16B` (yellow lemon BG).
- Default image is `/images/WhatsAppImage2023-11-18at14.19.19_2acc31e8.webp` (yellow lemon on lemons).
- Gallery has 8 slides total:
  1. `/images/WhatsAppImage2023-11-18at14.19.19_2acc31e8.webp` (yellow lem on lemons)
  2. `/images/Untitled_Capture0776_2_4a5f299c-2c95-4dba-9f28-ab76844a5f11.webp` (pink hand holding peach)
  3. `/images/IMG_3322.jpg` (yellow lem with lemons)
  4. `/images/IMG_3323.jpg` (pink scene)
  5. `/images/IMG_3325.jpg`
  6. `/images/IMG_3326.jpg`
  7. `/images/IMG_3324.jpg`
- Prev/next arrow buttons: round white pill 40px, dark-ink chevrons, positioned absolute left/right edges centered. Box-shadow shadow-md. Use `ChevronLeft`/`ChevronRight` icons.
- Pagination dots row below main image (8 dots), active dot pink #FF30CC, others muted gray.
- Thumbnail strip below: 7-8 thumbs in a horizontal scroll (no-scrollbar), each 80×80 rounded-lg, the active one with pink ring `ring-2 ring-pink-500`.
- A zoom-in icon button at bottom-right of main image (`ZoomIn` icon).

## RIGHT — Product Info

### Rating row
- 5 orange-yellow stars (color #FFB74A), filled. Use `StarFilled` icon 18×18.
- Text after stars: `4.8 (14,881 reviews)` — ES Rebond Grotesque, 16px, weight 500, ink color.

### Product Title
- `<h1>Lem Clitoral Massager</h1>` ES Rebond Grotesque Semibold, **48px (text-h1)**, line-height 1.1, letter-spacing -0.02em, ink color, mt-4.

### Save line
- "Save $70.00" — Fraunces 16px, ink color, mt-4.

### Price row
- `$89.00 USD` — ES Rebond Grotesque Bold, **32px**, ink color
- `$159.00 USD` — strikethrough, ES Rebond Grotesque, 16px, muted gray (#6b6357)
- Inline gap-3, items-baseline.

### Shipping line
- "No hidden tax or customs fees — what you see is what you pay. **Shipping calculated** at checkout."
- Fraunces 15px, muted color, the "Shipping calculated" portion is underlined ink text link.

### AS SEEN IN
- Small uppercase label "AS SEEN IN" — ES Rebond Grotesque, 13px, letter-spacing 0.15em, weight 600, color #1a1a1a, mt-6.
- Row of 5 grayscale logos with mt-2: 
  - `/images/The_Guardian_2018_svg.png`
  - `/images/vice-logo_6cc50991-ceed-4fc6-8e84-7bf8b7252af9.svg`
  - `/images/tatler-logo.png`
  - `/images/nbc-logo.svg`
  - `/images/cbs-logo.svg`
- Height ~26px each, opacity 0.9. Gap-8 between.

### Feature pills (4)
- Horizontal grid 4-col on desktop, 2-col on mobile, gap-3, mt-6.
- Each pill: rounded-2xl, cream-ish border `1px solid #e6dcc8`, p-4, text center.
- Content for each (icon + label):
  1. `🌀` "12 unique intensities and patterns"
  2. `🤫` "Quiet and discreet (Shhh!)"
  3. `💛` "Medical-grade silicone"
  4. `💦` "Waterproof (USB-C & Magnetic Compatible)"
- Icon at top (emoji or `nancy_graphic_intensity_*.svg` etc. — use emoji as primary): 24px size.
- Label: ES Rebond Grotesque, 14px, weight 500, line-height 1.3.

### Description paragraph
- mt-6.
- Fraunces 16px, line-height 1.6, ink color.
- Text: "Meet Lem - your zesty new playmate for intimate moments. This clitoral massager is perfect for those exploring air suction bliss for the first time, promising longer, more powerful and deeply satisfying orgasms. This happy little lemon combines pleasure with discretion. Featuring 12 unique intensities and patterns, Lem is an ideal choice for those looking for a fresh twist."

### Coupon box
- mt-6. Border `2px dashed #1A1A1A`, rounded-xl, p-3 text-center.
- Text: `Save 25% w/ code "LEM25"` — ES Rebond Grotesque Semibold, 16px, ink.

### ADD TO CART button
- mt-4. Full width pill. Bg `#FF30CC` hot pink. Text white. ES Rebond Grotesque uppercase 16px weight 700. py-4. rounded-full.
- Content: "ADD TO CART - $159 $89" (the $159 has line-through). Use the pattern: `ADD TO CART - <s class="opacity-70">$159</s> $89`
- Hover: bg darkens 5%.

### Buy with Shop button
- mt-2. Full-width pill. Bg `#5A31F4` (Shop Pay purple). Text white, font sans, 15px.
- Text: `Buy with shop` with lowercase 'shop' wordmark stylized.

### More payment options
- mt-2 text center small underlined link: "MORE PAYMENT OPTIONS"
- ES Rebond Grotesque, 12px, letter-spacing 0.15em, weight 600.

### WHAT CUSTOMERS SAY
- mt-8. Small uppercase label `WHAT CUSTOMERS SAY` — ES Rebond Grotesque 13px letter-spacing 0.15em weight 600, ink, text-center.
- Below, mt-4: italic quote block. Fraunces italic? Actually Fraunces regular, 18px, line-height 1.5, ink. Centered.
- Default state shows: `"This little sucker packs a punch!! I am fairly new to the world of clitoral stimulators, but was blown away by how quickly I was able to orgasm with this new toy!" — Jenni, 22`
- The "— Jenni, 22" is bold pink.
- Persona pill row below mt-4, gap-2 center:
  - `First-Timers` (active default — pink fill, white text)
  - `Experienced Users` (outline pink border, ink text)
  - `Couples`
  - `Privacy Seekers`
- Pills: rounded-full, px-4 py-2, border `1px solid #FF30CC`, ES Rebond Grotesque 14px weight 600.
- On click, swap visible quote.
- Quotes per persona:
  - First-Timers: `"This little sucker packs a punch!! I am fairly new to the world of clitoral stimulators, but was blown away by how quickly I was able to orgasm with this new toy!" — Jenni, 22`
  - Experienced Users: `"Holy mother of God! I can’t put this little sucker down. I am getting multiple orgasms with this little guy, and last night, I actually squirted! I didn’t even think that was a real thing…but I’m here to tell you, IT IS!" — Kathryn, 30`
  - Couples: `"Outstanding product. My wife loves it. I love it for her. Our mutual satisfaction in our sex life has improved with Nancy. We had a great sex life before, this is the next step up for couples." — Bradley, 32`
  - Privacy Seekers: `"Discreet enough that your kids won’t know what they’re playing with, and your mother-in-law won’t know what they’re playing with either. Worth every penny!" — Ashley, 35`

### Detail Tabs (6 tabs)
- mt-8 horizontal tab row, gap-1. Each tab a button:
  - `Doctor Review` (active default — pink underline 3px + pink ink text)
  - `How to Use`
  - `Specifications`
  - `Intensity Levels`
  - `Discreetness`
  - `Couples Play`
- Inactive tabs: rounded-xl border 1px gray, ink text, padding px-3 py-2, font ES Rebond Grotesque 14px weight 500.
- Active tab: bg-white border + pink underline.
- Below the row, a card panel (white bg, rounded-2xl, p-6, border 1px) showing active content:
  - **Doctor Review (default):** uses `/images/Image_Dr._Angela_Wright.png` (or `/images/Dr._Angela_Wright.png`) 80×80 rounded-full on left; right: italic quote in Fraunces 18px: `"As a doctor who focuses on sexual health, I frequently recommend the Lem as a high quality, beginner friendly suction toy. It's particularly useful for women who sometimes find they become less responsive to vibration after menopause or cancer."` Then a divider, then name `Dr. Angela Wright` (ES Rebond Grotesque Semibold pink, 16px) and credentials `GP, Clinical Sexologist, and BMS Registered Menopause Specialist` (Fraunces 14px muted).
  - For the other tabs: use simple placeholder text related to each.

### Trust icon row
- mt-6 grid-cols-3 gap-4 text-center.
- Three items:
  1. `/images/airplane.svg` 24×24 + "Discreet shipping"
  2. `/images/security_2.svg` 24×24 + "30-day satisfaction guarantee"
  3. `/images/Status.png` 24×24 + "Limited stock"
- Each label: ES Rebond Grotesque 13px weight 500, ink, mt-2.

## Computed Styles Summary

- Section padding: py-10 px-6
- Section bg: `#FCF7ED`
- Two-column gap (between gallery and info): `gap-12`
- Use `grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]` to match the ratios

## Responsive

- Desktop (≥1024px): 2 columns side-by-side
- Tablet/mobile (<1024px): stack — gallery first, then info column
- Feature pills: 4-col desktop, 2-col mobile
- Persona pills: wrap as needed
- Detail tabs: horizontal scroll on mobile

## Notes for builder
- The component should be a single client component (`"use client"`) since it has state for gallery index, persona pill, and detail tab.
- Don't reach out to external APIs — all data inline.
- Use `next/image` for product images with `width` and `height` props.
- Press logos are decorative — use plain `<img>` with width/height to avoid Next/Image config issues.
- Verify `npx tsc --noEmit` passes before finishing.
