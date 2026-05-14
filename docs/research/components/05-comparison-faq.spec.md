# US vs Them Comparison + FAQ Spec

## Overview
- **Target files:**
  - `src/components/UsVsThem.tsx`
  - `src/components/FAQ.tsx`
- **Interaction model:**
  - UsVsThem: click-driven 2-tab toggle swaps comparison table
  - FAQ: click-driven accordion (one row open at a time)

## 1. UsVsThem.tsx (client component)

Section: bg `#FCF7ED` cream, py-20 px-6, max-w-6xl mx-auto.

### Header (centered)
- Heading "US vs Them" — ES Rebond Grotesque Semibold, 56px desktop / 40px mobile, hot pink `#FF30CC`.
- Subtitle: "Not overhyped or overpriced. Just the best vibes one can get." — Fraunces 18px ink mt-2.

### Tab toggle (centered)
- mt-8. Inline-flex container, white bg with subtle border, rounded-full p-1.
- Two buttons:
  - `vs Other Suction Toys` (active default)
  - `vs Traditional Vibrators`
- Active: bg `#FF30CC` pink, white text, rounded-full, ES Rebond Grotesque Semibold 14px, px-5 py-2.
- Inactive: transparent bg, ink text.

### Tab A: vs Other Suction Toys
A 5-column table.
- Top yellow strip (lime green #E4F260): "Verified comparison based on real customer reviews and product specifications." — Fraunces 16px ink center, full width, py-3 rounded-t-2xl.
- Table headers: empty | LEM by Nancy | SATISFYER | WOMANIZER | LELO | ROSE TOY
- LEM column has pink-tinted background `#FFE0F5` (very light pink).
- Header cells: ES Rebond Grotesque Bold 14px uppercase, ink. LEM header is white text on pink bg `#FF30CC` (rounded-t inside).
- Body rows:
  | Row | LEM | SATISFYER | WOMANIZER | LELO | ROSE TOY |
  |---|---|---|---|---|---|
  | Trustpilot Score | **4.7** (pink) | 1.9 (red small "Poor") | 3.2 ("Average") | 3.7 ("Average") | Inconsistent ("(N/A)") |
  | Discreet Design | ✓ (lemon emoji 🍋 yellow) | ✗ | ✗ | ✗ | ✗ |
  | Beginner-Friendly | ✓ 🍋 | ✗ | ✗ | ✗ | ✗ |
  | Noise Level | **Whisper-Quiet** (Roommate-Proof) | Quiet | Quiet | Quiet | **Loud** (red) |
  | Cute Name | ✓ 🍋 | "Terrible Name" | "Terrible Name" | "Neutral" | "Neutral" |
  | Discreet Packaging | ✓ 🍋 | ✗ | ✗ | ✗ | ✗ |
  | Free Shipping + Mystery Gift | ✓ 🍋 | ✗ | ✗ | ✗ | ✗ |
- Each cell padding p-3, ink text 14px, center-aligned.
- LEM cells: bg pink-tinted, text ink (use `<strong>` for emphasized values pink color).
- ✓ wins are shown as a lemon emoji `🍋` (16px). ✗ losses are shown as a small empty/x icon (could be `XIcon` 14px in muted color).

### Tab B: vs Traditional Vibrators
A 3-column table (label, Air Pulse Technology = LEM, TRADITIONAL VIBRATORS).
- Headers: empty | LEM by Nancy (pink bg col) | TRADITIONAL VIBRATORS
- Rows:
  | Stimulation | Air Pulse Technology | Vibration Only |
  | Noise Level | Whisper-Quiet (Roommate-Proof) | Loud & Buzzy |
  | Discreet Design | ✓ 🍋 | ✗ |
  | Beginner-Friendly | ✓ 🍋 | ✗ |
  | Discreet Packaging | ✓ 🍋 | ✗ |
  | Orgasm Quality | Deeper, more intense orgasms | Less targeted |
  | Sensation Type | Touch-Free Air Pulses | Direct Contact Vibration |

### CTA below table
- mt-10 text-center.
- Small text: "Experience the Lem difference with our 30-day satisfaction guarantee" — Fraunces 16px ink.
- mt-4 ADD TO CART button — same pink pill button style: `ADD TO CART - $89`. Bg `#FF30CC` white text rounded-full px-10 py-4 ES Rebond Grotesque Bold uppercase 16px.

## 2. FAQ.tsx (client component)

Section: bg `#FCF7ED` cream, py-20 px-6, max-w-4xl mx-auto.

### Header (centered)
- Heading "FAQ's" — ES Rebond Grotesque Semibold, 56px desktop / 40px mobile, hot pink `#FF30CC`.
- Subtitle (Fraunces 16px ink, mt-2): `Curious to learn more? We've got you covered. Head to our <a class="underline">Nancy Help Center</a> for everything you need to know.`

### Accordion (mt-10)
- White bg, rounded-3xl, border `1px solid #f3dce2`, divide-y.
- Each row: button full-width, px-6 py-5, flex justify-between items-center.
  - Question: ES Rebond Grotesque Semibold 18px, ink. On active, color pink #FF30CC.
  - Chevron icon (ChevronDown) on the right, rotates 180° when open. Color pink.
- Below the question, expanded content has px-6 pb-5: Fraunces 16px ink line-height 1.6.
- Only one row open at a time. Click an open row to close it.

### 6 Q&As
1. **What is your shipping policy?** — `We offer free standard shipping on all orders within the US. International orders typically ship within 3-5 business days and arrive within 7-14 days depending on your location.`
2. **Do you ship internationally?** — `Yes! We ship to over 30 countries worldwide. International shipping rates are calculated at checkout based on your destination.`
3. **What is the warranty period for products?** — `All Nancy products come with a 1-year manufacturer warranty covering defects in materials and workmanship.`
4. **Can I return products?** — `Yes — we offer a 30-day satisfaction guarantee. If you're not happy, return your product within 30 days for a full refund. For hygiene reasons, the product must be unused and in original packaging.`
5. **What if I am not satisfied with a product?** — `Reach out to our care team at care@hellonancy.com within 30 days. We'll make it right with a replacement or a refund — your call.`
6. **Is your packaging discreet?** — `Absolutely. Every order ships in a plain, unbranded box with a generic return label. No one will know what's inside but you.`

## Notes
- Both client components, use `useState` for active tab / open row.
- Verify `npx tsc --noEmit` passes.
