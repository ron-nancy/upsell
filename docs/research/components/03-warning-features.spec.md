# Warning Banner + Yellow Features Bar Spec

## Overview
- **Target files:**
  - `src/components/WarningBanner.tsx`
  - `src/components/FeatureYellowBar.tsx`
- **Interaction model:** static for both

## WarningBanner.tsx

A pink/magenta rounded box centered, full-width container with max-w-7xl mx-auto px-6.

### Layout
- Outer: bg `#E8499C` hot magenta, rounded-3xl, padding: p-6 md:p-8.
- Inside: 2-column grid on desktop, 1-column stack on mobile.
  - LEFT (auto width on desktop): the "Only Available Here" badge — bg `#E4F260` lime, color `#1A1A1A` ink, rounded-full px-4 py-2, ES Rebond Grotesque Semibold 16px, inline-flex with small shield icon (use `ShieldIcon`, color ink, 18×18, mr-2).
  - RIGHT (text takes remaining space):
    - Bold first line (ES Rebond Grotesque Bold, 18px, white): `Nancy products are exclusively designed, manufactured, and fulfilled through <a class="underline">www.hellonancy.com</a>`
    - 2nd paragraph (Fraunces 15px, white, mt-2, line-height 1.5): `Beware of fraudulent websites or counterfeit items; these may expose you to credit card scams or toys that are hazardous for intimate use. No refunds or reimbursements will be provided for orders placed through unauthorized sellers.`

### Spacing
- Section wrapper: py-6.

## FeatureYellowBar.tsx

A lemon-yellow band full-width.

### Layout
- Outer: bg `#F2E76B` lemon yellow, full width (no max).
- Inner: max-w-7xl mx-auto py-16 px-6.
- Grid 4-col on desktop, 2-col on mobile, gap-8, items center.
- Each item: vertical stack center.
  - Top: 80×80 rounded-full bg white, centered icon image inside (40×40, color pink #FF30CC).
  - Bottom: label, ES Rebond Grotesque Semibold, 20px, color `#FF30CC` hot pink, mt-4 text-center.

### 4 items
1. icon: `/images/nancy_graphic_intensity_7ef01583-8685-48a9-b6de-fb7509a4e1e2.svg` — label: "12 unique patterns"
2. icon: `/images/noun-drop-1797148_3fb47920-9fbb-4cd1-aae6-60de946188a8.svg` — label: "Waterproof"
3. icon: `/images/Nancy_Graphic_icons-12.svg` — label: "Discreet shipping"
4. icon: `/images/rythm-diagram-1.svg` (heart/handshake) — label: "Easy to use"

If any of those SVGs aren't a heart/handshake/check, just put a heart/checkmark from `@/components/icons` — visual emoji like `❤️` is acceptable fallback. Render icons inside the white circle.

### Responsive
- Desktop ≥1024: 4-col single row.
- Tablet 768-1023: 2-col 2 rows.
- Mobile: 2-col 2 rows but icons smaller (60×60), label 16px.

## Notes
- Both components are pure server components — no client state.
- Verify `npx tsc --noEmit` passes.
