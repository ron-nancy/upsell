# Top Bars + Header + Sticky Cart Spec

## Overview
- **Target files:**
  - `src/components/AnnounceBar.tsx`
  - `src/components/SaleBar.tsx`
  - `src/components/Header.tsx`
  - `src/components/StickyCartBar.tsx`
- **Screenshots:** the hero screenshots, top of page
- **Interaction model:**
  - Announce bar: static
  - Sale bar + header: `position: sticky` so they stay pinned as page scrolls
  - Sticky cart: scroll-driven — appears after `window.scrollY > 700`, fades/slides in

## DOM Hierarchy & Computed Styles

### AnnounceBar (very top)
- 44px tall, full width, hot-pink (#FF30CC) bg, **white text**
- 3 inline items separated by even gap: icon + label
- Items: `🚚 Free shipping`, `📦 Discreet packaging`, `🛡 30-day guarantee`
- Use `TruckIcon`, `PackageIcon`, `ShieldIcon` from `@/components/icons` at 18×18, color white
- Font: ES Rebond Grotesque, 14px, weight 500, color white
- Layout: flex, center, gap-8, py-3, hidden on mobile (or wrap items)

### SaleBar
- 54px tall, full width, **lime green #E4F260** bg, **black ink #1A1A1A text**
- Single centered line: `Mother's Day Sale ✨ Final minutes to save up to 50% off on last few items ✨ No coupon needed.`
- Font: **Fraunces** (serif), 18px, italic? — actually NOT italic, regular weight. The ✨ are pink sparkles (use a pink star icon).
- `position: sticky; top: 0; z-index: 50;`
- Padding: py-4
- On small screens: text scrolls horizontally as a marquee, on desktop it's centered

### Header
- 103px tall, full width, **soft pink #F3DCE2** bg
- Layout: 3-column grid
  - LEFT: Hamburger menu icon, 28×28, hot pink (#FF30CC)
  - CENTER: Nancy logo — use `<img src="/images/Nancy_Logo_Pink.png" />`, height ~52px, centered (this is the handwritten script wordmark in hot pink)
  - RIGHT: 3 items: 🇺🇸 USD ▼ | English ▼ | 🛒 cart icon
- All right items: ES Rebond Grotesque, 16px, weight 500, color hot pink, chevron-down 14px
- `position: sticky; top: 54px; z-index: 40;` (sits below sale bar)
- Hover on icons: opacity 0.8 with transition 0.2s

### StickyCartBar
- Pill-shaped rounded card (border-radius 999px), fixed bottom-right (desktop) / bottom-full-width (mobile)
- Width: ~360px on desktop, full-width minus 16px on mobile
- White bg, shadow `0 5px 30px rgba(26,26,26,0.1)`, border-radius 999px
- Padding: p-2 pl-3
- Contents row (gap-3, align center):
  - 56×56 product thumbnail (rounded-full), `/images/WhatsAppImage2023-11-18at14.19.19_2acc31e8.webp`
  - Stacked text: title "Lem Clitoral Massager" (ES Rebond Grotesque, 15px, semibold, color #1a1a1a). Below: price line — `$89.00 USD` (red? no, pink #FF30CC, weight 700) + `$159.00 USD` (strikethrough, muted)
  - Pink CTA button: "Add to cart", bg #FF30CC, text white, font ES Rebond Grotesque uppercase 14px weight 600, rounded-full, px-6 py-3
- Visible when scrollY > 600. Use `useEffect` + scroll listener.
- Animation: `transform: translateY(120%)` initially, `translateY(0)` when visible, `transition: transform 0.4s ease`
- `position: fixed; bottom: 16px; right: 16px; z-index: 60;`

## Text Content (verbatim)
- AnnounceBar: "Free shipping", "Discreet packaging", "30-day guarantee"
- SaleBar: "Mother's Day Sale ✨ Final minutes to save up to 50% off on last few items ✨ No coupon needed."
- StickyCartBar: title "Lem Clitoral Massager", sale "$89.00 USD", regular "$159.00 USD", button "Add to cart"

## Assets
- `/images/Nancy_Logo_Pink.png` (Nancy script wordmark)
- `/images/WhatsAppImage2023-11-18at14.19.19_2acc31e8.webp` (product thumbnail for sticky bar)
- US flag emoji is fine via emoji
- Icons: TruckIcon, PackageIcon, ShieldIcon, MenuIcon, ChevronDown, CartIcon from `@/components/icons`

## Responsive
- Desktop (≥1024px): all three top-bar items visible
- Tablet (768-1023): announce bar items wrap or scroll; header collapses cart-right
- Mobile (<768): hamburger left, logo center, cart right only; announce-bar may show 1 item or hide
- StickyCartBar: bottom-right pill desktop, bottom full-width sheet mobile
