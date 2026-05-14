# Experts Say + Join 700K + UGC Grid Spec

## Overview
- **Target files:**
  - `src/components/ExpertsSay.tsx`
  - `src/components/JoinWomen.tsx`
  - `src/components/UGCGrid.tsx`
- **Interaction model:**
  - ExpertsSay: static
  - JoinWomen: click-driven persona tabs swap reviews
  - UGCGrid: click on video tile plays video inline

## 1. ExpertsSay.tsx

Section: bg `#FCF7ED` cream, max-w-6xl mx-auto, px-6, py-20, text-center.

### Heading
- "What the Experts Say" — ES Rebond Grotesque Semibold, **40px (text-h2)** on desktop, 32px mobile, color `#FF30CC` hot pink.
- Subtitle below: "Trusted by medical professionals and sexual health experts" — Fraunces, 18px, ink color, mt-2.

### Doctor card
- mt-12. Centered card. Bg white, rounded-3xl, p-8 md:p-12, max-w-4xl mx-auto.
- Layout: 2-col grid on desktop, stack on mobile. LEFT (image), RIGHT (text).
- LEFT (image): `/images/Image_Dr._Angela_Wright.png` (or `/images/Dr._Angela_Wright.png`), rounded-2xl, w-full square.
- RIGHT:
  - Italic quote (Fraunces italic OR Fraunces regular 22px line-height 1.4):
    `"As a doctor who focuses on sexual health, I frequently recommend the Lem as a high quality, beginner friendly suction toy. It's particularly useful for women who sometimes find they become less responsive to vibration after menopause or cancer."`
  - Divider: 1px solid #e6dcc8, my-6.
  - Name: `Dr. Angela Wright` — ES Rebond Grotesque Bold, 20px, hot pink #FF30CC.
  - Credentials: `GP, Clinical Sexologist, and BMS Registered Menopause Specialist` — Fraunces, 14px, muted #6b6357, mt-1.

## 2. JoinWomen.tsx

Section: bg `#FCF7ED` cream, py-20, px-6, max-w-6xl mx-auto.

### Header (centered)
- 5 stars (StarFilled icons, color #FFB74A, 20px each) + small text "4.7 stars" (Fraunces 14px, ink, ml-2)
- Big heading two-line:
  - Line 1: "Join 700,000+ Women" — ES Rebond Grotesque Semibold, 56px on desktop, 40px mobile, hot pink #FF30CC.
  - Line 2: "Who Decided to Come First" — same style, but ink color #1A1A1A.
  - Use `<h2>` with `<span>` for the colored portion. Tight letter-spacing -0.02em.

### Persona tab pills
- mt-8. Horizontal scroll (no-scrollbar) on mobile, centered row on desktop. gap-3.
- Tabs (state default: first one active):
  - `Powerful & Effective` (active default — pink fill #FF30CC, white text)
  - `Cute Design`
  - `Discreet`
  - `Air Pulse Technology`
  - `Couples Approved`
  - `Beginner-Friendly`
- Pill style: rounded-full, px-5 py-3, border 1px ink, ES Rebond Grotesque Semibold 14px. Inactive: transparent bg, ink text. Active: pink bg white text, no border.

### Review grid (3-col)
- mt-12. grid 3-col desktop, 1-col mobile, gap-6.
- Each review card: bg white, rounded-3xl, p-6, height ~360px desktop.
  - Quote text (Fraunces 16px, ink, line-height 1.6).
  - At bottom, a divider line 1px ink, then byline `— Kathryn R.` ES Rebond Grotesque Semibold 14px ink.
- Default reviews (Powerful & Effective):
  1. `"Holy mother of God! I can't put this little sucker down. I am getting multiple orgasms with this little guy, and last night, I actually squirted! I didn't even think that was a real thing…but I'm here to tell you, IT IS!"` — `— Kathryn R.`
  2. `"I don't even need the highest speeds — the lower ones are plenty, creating sensations that build beautifully and last long after. Lem has turned what used to be a routine moment into something electric, emotional, and deeply bonding."` — `— Pebbs W.`
  3. `"It is amazing and super powerful, omg I can not get past #3 setting. It is sooo good!"` — `— Melissa E.`
- For other persona tabs, you can re-use the same 3 reviews (this is acceptable for the clone — content is hard to verify per tab).

### Carousel dots
- mt-8 center: 2 small dots, active pink, inactive gray (purely decorative).

## 3. UGCGrid.tsx

Section: bg `#FCF7ED` cream, max-w-6xl mx-auto, px-6, py-10. **Follows directly below JoinWomen — same vertical flow.**

### Layout
- grid grid-cols-2 md:grid-cols-4 gap-4.
- 4 vertical (portrait, aspect 9/16) video tiles, each rounded-2xl overflow-hidden, relative.

### Each video tile
- `<video poster="..." />` with the corresponding poster from `/images/thumbs/*` and src `/videos/ugc-N.mp4`. Set `loop muted playsInline`. Add a centered ▶ play button (use `PlayCircle` icon, 64px, color white, on click toggle play).
- Caption below tile in italic Fraunces 14px ink, mt-3.

### 4 tiles (poster + src + caption)
1. poster `/images/thumbs/6cd173a0016e45f4bf6645fd64a5ded9.thumbnail.0000000000.jpg` src `/videos/ugc-1.mp4` caption `"Ohhhh Lem, oh Lem, oh Lem..."`
2. poster `/images/thumbs/b8df15e3934740d5b8fdc822673792c7.thumbnail.0000000000.jpg` src `/videos/ugc-2.mp4` caption `"It makes throbbing motions..."`
3. poster `/images/thumbs/898e92513a664b10a191cac737e4e6de.thumbnail.0000000000.jpg` src `/videos/ugc-3.mp4` caption `"It is beautiful, it is wonderful"`
4. poster `/images/thumbs/c6131e25558f4852ba469c24dc5d32b2.thumbnail.0000000000.jpg` src `/videos/ugc-4.mp4` caption `"She looks innocent… but she's about to get zesty."` and add a pink badge in the top-left corner of the tile: `She looks innocent` (rounded-full, bg `#FF30CC` text white, px-3 py-1 text-xs).

### Click behavior
- When you click on play button, the video plays (call play()) and the play button hides. Clicking again (on the playing video) shows the play button overlay again.

## Notes for builder
- All three components live in the same file group. ExpertsSay and UGCGrid are server components. JoinWomen is a client component (`"use client"`) for tab state.
- Use icons from `@/components/icons`: StarFilled, PlayCircle.
- Verify `npx tsc --noEmit` passes.
