# Behavior Bible — hellonancy.com Lem product page

Notes from a live scroll/click/hover sweep at desktop (1440-ish).

## Header behavior
- Sticky stacking: announce bar (non-sticky) + sale bar (sticky z=1001 below it) + main header (sticky z=999 below that).
- The sale bar and main header **both remain visible** as you scroll. The announce bar scrolls away.
- No height change / blur added to the header on scroll. The header doesn't shrink.

## Sticky add-to-cart bar
- A floating ATC bar appears in the lower-right after scrolling past the inline "ADD TO CART" button (approx. scrollY > 700-1000px).
- Content: small square product thumbnail + product title + price + compare-at-price + pink "Add to cart" pill button.
- Stays visible through the rest of the page including the footer.
- Slides in with opacity/translate transition (CSS).

## Image gallery (hero left)
- Click-driven prev/next arrows visible on hover/touch.
- Dot pagination beneath image.
- Thumbnail strip beneath the dots (7-8 thumbs); clicking a thumbnail navigates to that image.
- Some "thumbs" are video thumbnails with a small ▶ overlay — clicking opens the video.

## "WHAT CUSTOMERS SAY" pill row (hero right)
- Four pills: First-Timers (active default, pink fill) / Experienced Users / Couples / Privacy Seekers.
- Clicking a pill swaps the quote text & reviewer name above with the corresponding persona quote. Pill bg changes (active pink).
- Transition: simple opacity fade.

## Tabbed details strip (hero right)
- 6 tabs: Doctor Review (active default) / How to Use / Specifications / Intensity Levels / Discreetness / Couples Play.
- Active tab has pink underline + pink text; inactive tabs are gray.
- Click a tab → card below swaps in matching content (Doctor card uses doctor portrait + quote + credentials).

## Yellow features bar
- Static. Four white circular tiles with pink icons; pink label text below each.

## Experts Say
- Static. Doctor photo (large) on left, quote on right, credentials underline.

## Join 700,000+ Women
- Heading + persona tabs (Powerful & Effective is active default, pink fill).
- 3-column review grid swaps content per active persona tab.
- Below the 3 cards are 2 dots indicating multi-page carousel. Tested: clicking dot 2 loaded different reviews. Click-driven.

## UGC video grid (below reviews)
- 4 vertical (portrait) video tiles with ▶ overlay.
- Quote line under each tile.
- Click ▶ → opens an inline player or modal.

## US vs Them comparison
- Heading + subtitle, 2-tab pill toggle: vs Other Suction Toys (active default, pink) / vs Traditional Vibrators.
- The table changes per tab.
- Table is 5 columns × 7 rows. LEM column has pink-tinted background; other columns are light-cream.
- Row values are either text ("Whisper-Quiet", "Quiet", "Loud") or icons (yellow lemon = win, "X" or "✕" = lose, etc.).
- ATC button beneath the table.

## FAQ
- Vertical accordion list. Closed by default. Click a row → chevron rotates, content expands below with a height transition.
- One open at a time? Yes — opening a new row collapses the previous.

## Reviews grid (Bustem widget)
- Large 4-column masonry of customer photos + reviews.
- Some items are videos with ▶ play overlay.
- Mix of photo-only, video, and text-only review cards.
- "Show more reviews" button at bottom.

## Related products carousel
- Horizontal scroll/carousel of product cards (3-up visible).
- Cards: yellow square image area, product name, sub-tagline, price.

## Footer
- 5-column grid. Email signup pink-circle send button. Social icons row. Country flag dropdown + language dropdown. Payment method icon strip. Bustem IP-protect badge at very bottom.

## Hover states observed
- Buttons (ADD TO CART pink) — slightly lighter on hover.
- FAQ rows — subtle hover background.
- Persona pills — background fade on hover.
- Tab buttons — color shift on hover.

## Fonts
- No Lenis or smooth-scroll library — uses native browser scrolling.
- Custom fonts: Fraunces (body) + ES Rebond Grotesque (UI).
