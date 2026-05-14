# Reviews Grid + Related Products + Footer Spec

## Overview
- **Target files:**
  - `src/components/ReviewsGrid.tsx`
  - `src/components/RelatedProducts.tsx`
  - `src/components/Footer.tsx`

## 1. ReviewsGrid.tsx (server component)

Static representative replica of the Bustem review widget.

Section: bg `#FCF7ED`, py-16, px-6, max-w-7xl mx-auto.

### Header summary
- Centered: 5 orange stars (#FFB74A) + "4.8" big number (32px ES Rebond Grotesque Bold) + below: "Based on 14,881 reviews" (Fraunces 14px muted).

### Grid
- mt-10. grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4.
- 12 photo-review cards. Each card has:
  - White bg, rounded-2xl, p-4, border 1px #efe7d4.
  - Top: 1:1 aspect image, rounded-xl object-cover (use product or thumbs images we have).
  - Below image: row with name (ES Rebond Grotesque Semibold 14px ink) + small verified badge (use VerifiedBadge icon 14px, pink color).
  - Below: date (Fraunces 13px muted).
  - 5 mini stars (StarFilled #FFB74A 14px each).
  - Review body text (Fraunces 14px ink line-height 1.5) — 4-5 lines, line-clamp-5.
- Provide 12 review entries. Reuse downloaded images. Sample data (define inline):
  1. `Jennifer D.` — verified — `5/11/2026` — img `/images/IMG_3322.jpg` — text: "Love it, very quiet and discrete. Hits the spot!! Great for use on your own or with your partner."
  2. `Brigitte P.` — verified — `4/23/2026` — img `/images/IMG_3323.jpg` — text: "Absolutely amazing!!! Buy it...this one won't be gathering dust in a drawer 😅😅"
  3. `Angela S.` — verified — `5/14/2026` — img `/images/IMG_3324.jpg` — text: "Wow... it was absolutely awesome!! I have not dated for a while and had some health issues. The Lemon was very successful. I highly recommend!"
  4. `Lo T.` — verified — `4/19/2026` — img `/images/IMG_3325.jpg` — text: "Lem was my very first toy. I was skeptical on the reviews, but once I tried it, I got addicted in less than minutes. I love it so much!"
  5. `Katy` — verified — `4/12/2026` — img `/images/IMG_3326.jpg` — text: "First of all, the packaging is freaking adorable. But also? The actual product is everything they say it is. I've tried one suction toy before and was disappointed."
  6. `Christine D.` — verified — `5/4/2026` — img `/images/Untitled_Capture0007.jpg` — text: "So amazing! Started on level 3 and it was so much."
  7. `Jason M.` — verified — `4/23/2026` — img `/images/Untitled_Capture0776_2_4a5f299c-2c95-4dba-9f28-ab76844a5f11.webp` — text: "Wife loves it, not much more to say. As good and maybe slightly better than the Rose in performance. Way better with charger type. Will last a few sessions give or take!"
  8. `Emily E.` — verified — `4/16/2026` — img `/images/Untitled_Capture0203.jpg` — text: "OMG! My favourite vibe ever. Takes you up and down multiple times before you reach your climax. A waterproof one!"
  9. `Sylwia B.` — verified — `4/7/2026` — img `/images/LOL1_eb49dfb5-0b1b-438d-b41e-dd27c75f2120.png` — text: "This toy has been a delightful surprise! I've used it on my clitoris of course but also have found it to be really good on my nipples."
  10. `Marie W.` — verified — `4/30/2026` — img `/images/LOL_2.png` — text: "Not holding back!! You can literally use this during dinner at the Inlaws if you wanted to, it's that quiet, although you may want to refrain from doing that, because wowzers, this thing has a kick!! Recommend highly!!"
  11. `Bee B.` — verified — `5/5/2026` — img `/images/OH1.png` — text: "As a menopausal woman I found vibrators dulled sensation. This little device gave me multiple orgasms and increased sensation. More than I have felt in years. Thank you."
  12. `Ann W.` — verified — `5/12/2026` — img `/images/OH_2.png` — text: "My LEM has replaced all air pulsation toys in my bedside drawer! Although I wasn't too pleased with the first two settings, level three and above have proved very successful."

### Show More button
- mt-10 text center: outlined pink pill button "Show more reviews", border 1px #FF30CC ink text, px-8 py-3 rounded-full ES Rebond Grotesque Semibold 14px. No state on click — purely decorative.

## 2. RelatedProducts.tsx (server component)

Section: bg `#FCF7ED`, py-20 px-6, max-w-6xl mx-auto.

### Heading
- "You may also like" — ES Rebond Grotesque Semibold, 40px desktop / 32px mobile, ink color, mb-10.

### Card grid
- grid grid-cols-1 md:grid-cols-3 gap-6.

### 3 cards
Each card:
- Outer: relative, rounded-3xl overflow-hidden, group, hoverable.
- Top: square image area with yellow/lemon bg `#F2E76B`. Use the product image at center (object-contain).
- Below: white area inside same card OR text below card.
- Save badge: absolute top-left, rounded-full bg `#E4F260` lime, ink text "Save $X.XX" ES Rebond Grotesque Semibold 12px px-3 py-1.

### Card content
1. **Lolly Mini Wand**
   - image: `/images/BerriTappingClitoralMassager1.png`
   - hover image: `/images/Product.webp`
   - description: "A versatile mini wand for steady vibrations that hit every right spot."
   - sale: $69.00 USD
   - regular: $139.00 USD
   - save: $70.00
2. **Avo Clitoral Massager**
   - image: `/images/Untitled_Capture0776_2_4a5f299c-2c95-4dba-9f28-ab76844a5f11.webp`
   - hover image: `/images/Untitled_Capture0203.jpg`
   - description: "A turbocharged clit suction with unmatched sensations for deep, powerful stimulation."
   - sale: $99.00 USD
   - regular: $199.00 USD
   - save: $100.00
3. **Oh-Oh-Oh Triple Bundle**
   - image: `/images/OH1.png`
   - hover image: `/images/OH_2.png`
   - description: "The ultimate triple threat featuring air-suction, rumbly vibrations, and a sleek bullet to hit every right spot."
   - sale: $199.00 USD
   - regular: $399.00 USD
   - save: $200.00

### Card text styling
- Title: ES Rebond Grotesque Semibold 22px ink, mt-4.
- Description: Fraunces 15px ink mt-2 line-height 1.5.
- Price row: ES Rebond Grotesque, sale $X.XX pink #FF30CC weight 700 18px, regular $Y.YY strikethrough muted 14px. mt-3.

## 3. Footer.tsx (server component)

Outer: bg `#FFFFFF` white, padding py-16 px-6 (max-w-7xl mx-auto inside).

### Top grid (5 columns on desktop)
- grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10.

#### Column 1 — Brand + signup
- Nancy logo (img `/images/Nancy_Logo_Pink.png`, height 48px).
- Big heading mt-6: "Stories & surprises straight to your inbox 💌" — ES Rebond Grotesque Semibold, 26px, ink, line-height 1.2.
- Sub: "Be the first to enjoy product launches, sweet discounts, and insider treats." Fraunces 14px ink/muted.
- Email input row mt-4: white input with bottom border 1px ink, placeholder "Email address" + pink circular send button (right-circle 40×40 bg #FF30CC, white ArrowRight icon).
- mt-6 social icons row, 4 icons (Facebook, Instagram, Tiktok, LinkedIn), each 24px ink color, gap-4.

#### Column 2 — About
- Heading "About" ES Rebond Grotesque Semibold 18px ink.
- Body mt-3 Fraunces 14px ink line-height 1.6:
  `At Nancy, we're committed to breaking the taboo and creating a safe and welcoming space for everyone to explore their sexual curiosities.`
- mt-4 address (Fraunces 14px ink):
  ```
  Care & Bloom Limited,
  2F, Hilltop Plaza,
  49 Hollywood Rd,
  Central,
  Hong Kong.
  ```

#### Column 3 — Get in touch
- Heading "Get in touch" ES Rebond Grotesque Semibold 18px ink.
- mt-3: `Care: care@hellonancy.com` (Fraunces 14px ink, the email may be a mailto link)
- mt-4: `Partnerships: marketing@hellonancy.com`

#### Column 4 — Resources
- Heading "Resources" ES Rebond Grotesque Semibold 18px ink.
- Links column mt-3, Fraunces 14px ink, space-y-3:
  - Guides
  - Lem Comparison
  - Wall of Came

#### Column 5 — Policies
- Heading "Policies".
- Links: Contact us / Privacy policy / Terms of service / Help Center.

### Bottom bar (mt-16 border-t pt-6)
- flex justify-between flex-wrap.
- LEFT: `© 2026, Hello Nancy | All rights reserved` (Fraunces 13px ink muted).
- RIGHT: 2 selectors `🇺🇸 United States (USD $) ▼` + `English ▼`.

### Below: payment icons row
- 8 little payment-method logos: American Express, Apple Pay, Bancontact, Google Pay, Maestro, Mastercard, Shop Pay, Union Pay, Visa. Use small text labels in rounded-md gray pills as a fallback if no SVG. (Just simple rounded rectangles with bg #eee and small text — visually similar.)

### Below: Bustem badge
- mt-6 small flex row: pink circle logo (use a small placeholder span) + text "IP Protected by Bustem™" + small sub "Brand Verified | Fraud Protected | Enforcement". Fraunces 12px ink muted.

## Notes
- All three components are server components.
- Use icons: FacebookIcon, InstagramIcon, TiktokIcon, LinkedInIcon, ArrowRight, ChevronDown, StarFilled, VerifiedBadge.
- Verify `npx tsc --noEmit` passes.
