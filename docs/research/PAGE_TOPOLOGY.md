# Page Topology — hellonancy.com/products/lem

Top-to-bottom layout (desktop, ~1440px viewport). Total document height ≈ 11,200px.

## Z-stack overlays (always present)
- **Cookie consent** — fixed bottom, z=2147483647 (skip from clone)
- **Spin-the-wheel popup** — modal, appears on load (we'll skip this in the clone)
- **Sticky bottom Add-to-cart bar** — appears after scrolling past the inline ADD TO CART button (~600px scroll). Small horizontal bar: product thumbnail + name + price + button. Stays anchored bottom-right(ish) on desktop, full-width on mobile.

## Sticky stack at top
1. **Pink announce bar** (0–44px, static) — 3 icons + small white text: "Free shipping | Discreet packaging | 30-day guarantee". Pink/magenta background.
2. **Lime sale bar** (44–98px, sticky z=1001) — large script text "Mother's Day Sale ✨ Final minutes to save up to 50% off on last few items ✨ No coupon needed." on lime-green background.
3. **Header** (98–201px, sticky z=999) — hamburger (left), Nancy script logo centered, USD-flag selector + English selector + cart icon (right). Soft pink bg `#F3DCE2`.

## Main flow

| # | Working name | Top–Bottom (px) | Notes / interaction |
|---|---|---|---|
| 1 | **Hero / Product** | 201–1859 | 2-column. LEFT: 600×600 image gallery (carousel with prev/next arrows, dot pagination, thumbnail strip below). RIGHT: rating row, H1, save line, price + compare-at-price, shipping disclaimer, "AS SEEN IN" + 5 press logos (Guardian/Vice/Tatler/NBC/CBS), 4 feature pill cards (12 unique intensities / Quiet & discreet / Medical-grade silicone / Waterproof USB-C & magnetic), description paragraph, "code LEM25" coupon box, ADD TO CART pink pill, Buy with Shop button, More payment options link, persona-pill row of customer-says quotes (First-Timers/Experienced Users/Couples/Privacy Seekers), tabbed details (Doctor Review / How to Use / Specifications / Intensity Levels / Discreetness / Couples Play), 3 trust-icon row (Discreet shipping / 30-day guarantee / Limited stock). Multiple click-driven tabs. |
| 2 | **Warning banner** | 1859–2087 | Pink/magenta rounded box. Lime "Only Available Here" badge + warning paragraph with link. |
| 3 | **Yellow feature bar** | 2087–2505 | Lemon-yellow full-width band. 4 circular white icon tiles + pink labels in a row: "12 unique patterns / Waterproof / Discreet shipping / Easy to use". |
| 4 | **What the Experts Say** | 2505–3252 | Pink heading, subtitle. Single doctor-testimonial card with photo of Dr. Angela Wright + quote + name + credentials. |
| 5 | **Join 700,000+ Women** | 3252–4533 | Header: 5 stars + "4.7 stars" small + big heading "Join 700,000+ Women / Who Decided to Come First". Click-driven persona tab pills (Powerful & Effective / Cute Design / Discreet / Air Pulse Technology). 3-column review grid with quote + reviewer name. Carousel dots below indicating multiple slides. |
| 6 | **UGC video grid** | (within #5/6) | 4 portrait-orientation video cards with play buttons, person holding the product, quote underneath ("Ohhhh Lem…" / "It makes throbbing…" / "It is beautiful…" / "She looks innocent… but"). |
| 7 | **US vs Them comparison** | 4533–5495 | Pink heading "US vs Them" + subtitle "Not overhyped or overpriced. Just the best vibes one can get." Two-tab toggle (vs Other Suction Toys / vs Traditional Vibrators). Then a comparison TABLE: header row (LEM by Nancy / Satisfyer / Womanizer / Lelo / Rose Toy) with LEM column highlighted pink. Body rows: Trustpilot Score / Discreet Design / Beginner-Friendly / Noise Level / Cute Name / Discreet Packaging / Free Shipping + Mystery Gift — each with a colored verdict per column (yellow lemon emoji for LEM wins, "X" or "Neutral" for others). Below: "Experience the Lem difference with our 30-day satisfaction guarantee" + ADD TO CART button. |
| 8 | **FAQ** | 5495–6267 | Pink heading "FAQ's" + subtitle. Series of accordion rows: "What is your shipping policy? / What is the warranty period for products? / Can I return products? / What if I am not satisfied with a product? / Is your packaging discreet?" — each with a chevron toggle. |
| 9 | **Product Reviews grid (Bustem-hosted)** | 6267–9694 | Long photo-rich review widget. 4-column grid of customer photo + name + verified + date + 5 stars + review text. Some entries are videos with play icons. "Show more reviews" button at bottom. (This is a third-party widget — we'll build a static representative grid.) |
| 10 | **You may also like (Related products)** | 9694–10394 | 3-up product card carousel showing related products (Lolly Mini Wand visible). Each card: product image on yellow square + product name + short tagline + price/compare-at-price. |
| 11 | **Footer** | 10394–11136 | 5-column layout. Col 1: Nancy logo + "Stories & surprises straight to your inbox 💌" + email input with pink send button + 4 social icons (FB/IG/TikTok/LinkedIn). Col 2: About paragraph + Hong Kong address. Col 3: Get in touch (care email + partnership email). Col 4: Resources (Guides / Lem Comparison / Wall of Came). Col 5: Policies (Contact us / Privacy policy / Terms of service / Help Center). Below: copyright + country/language dropdown + payment-method icon strip + Bustem™ IP badge. |

## Interaction model (per section)

| Section | Interaction model |
|---|---|
| Top bars + header | Static + sticky position |
| Hero image gallery | Click-driven (prev/next arrows, thumbnails, dots) |
| Customer Says quote row | Click-driven persona pills swap visible quote |
| Tabbed details | Click-driven tab switching with content swap |
| Sticky add-to-cart | Scroll-driven appearance (slides in after threshold) |
| Yellow feature bar | Static |
| Experts say | Static |
| Join 700K reviews | Click-driven persona tabs swap reviews |
| UGC video cards | Click to play video in modal/inline |
| US vs Them | Click-driven 2-tab toggle on top swaps comparison set |
| FAQ | Click-driven accordion (one row open at a time) |
| Product Reviews grid | Static grid + lightbox video on click (we'll keep as static grid) |
| Related products | Carousel — auto-scrolls or arrow-driven |
| Footer | Static |
