import type { Metadata } from "next";
import { UpsellShell, type UpsellConfig } from "@/components/upsell/UpsellShell";

export const metadata: Metadata = {
  title: "The Travel Pro Pack — Save 40% | Hello Nancy",
  description:
    "Lem at home, Lem in the suitcase, Lem at theirs. Three Lems for every zone of your life — bundle at 40% off, only on this special-offer page.",
};

const config: UpsellConfig = {
  step: 3,
  total: 5,
  persona: "Frequent-Flyer Multi-Lifer",
  hero: {
    heading:
      "The Travel Pro Pack — Lem at home, Lem in the suitcase, Lem at theirs",
    pinkPhrase: "Travel Pro Pack",
    subhead:
      "Stop unpacking your favorite from your toiletry bag. Stock all three locations once, forever.",
    lead:
      "If you've ever stood in a Heathrow security line wondering whether you really packed your Lem this trip, this bundle is for you. Three Lems means one stays bedside at home, one lives permanently in your carry-on, and the third — wherever you spend the second half of the month. Your partner's apartment, your weekend rental, your office crashpad. The frequent-flyer's secret to never compromising on self-care.",
    image: "/images/IMG_3325.jpg",
    imageBadge: "Travel-ready bundle",
  },
  tldr: {
    icon: "✈️",
    body:
      "Stop packing and unpacking your Lem like a stress ball. Three Lems = one bedroom (home), one carry-on (always packed), one wherever you crash second-most. The 40% bundle pricing makes the math obvious — each Lem is cheaper than buying singles, and you'll never again do the 'did I bring it' anxiety scroll at 30,000 feet. Travel-proof, USB-C charged, TSA-friendly.",
  },
  features: [
    {
      title: "TSA-Friendly USB-C Magnetic Charging",
      body:
        "No proprietary cables, no awkward customs conversations. Same charger as your laptop. Cleared by global TSA equivalents — TSA, UK Border Force, EU Customs, every major Asian airport — without a second glance.",
    },
    {
      title: "Whisper-Quiet for Hotel Walls",
      body:
        "Roommate-proof in dorms, neighbor-proof in hotels. Use it without the family-thin walls of an Airbnb knowing a thing. Engineered as quiet as a powered toothbrush — and just as inconspicuous through a wall.",
    },
    {
      title: "Discreet Pouch Per Lem",
      body:
        "Each Lem ships with a soft Pleasure Pouch that looks exactly like a glasses case in your carry-on. No customs officer raises an eyebrow. Tuck it next to your toothbrush and forget it's there.",
    },
    {
      title: "Three-Year Total Warranty",
      body:
        "1-year manufacturer warranty per unit, applied independently. Three Lems = three full years of replacement coverage across the bundle. Travel a lot, replace less. Cracked silicone or a stuck charge port gets a free replacement within the warranty period.",
    },
  ],
  reviewsIntro:
    "From 14,881+ Lem owners — the ones who stopped second-guessing what's in their carry-on.",
  reviewsHeading: "Three Lems, three time zones, zero regret.",
  reviews: [
    {
      name: "Priya M.",
      rating: 5,
      quote:
        "Three Lems means one in my London flat, one in my carry-on for the New York trips, one at my partner's place in Lisbon. Best 20 minutes of pre-flight effort I've ever saved myself — long term.",
    },
    {
      name: "Naomi K.",
      rating: 5,
      quote:
        "I travel for work twice a month and was sick of the unpacking ritual. Bought the 3-pack last year — still one of my best impulse purchases. Now there's a Lem at the airport hotel I always book.",
    },
    {
      name: "Jess D.",
      rating: 4,
      quote:
        "Honest review — I only travel for a long weekend per month, but the third Lem lives in my best friend's spare room. We have sleepovers, she has guests, everyone wins. 4 stars only because I wish I'd ordered the 3-pack the first time.",
    },
  ],
  careIcons: [
    { label: "Free Shipping", emoji: "📦" },
    { label: "Mystery Gift", emoji: "🎁" },
    { label: "Discreet Packaging", emoji: "🤫" },
    { label: "30-Day Guarantee", emoji: "🛡️" },
    { label: "1-Yr Warranty", emoji: "✨" },
  ],
  whyBundle: {
    heading: "Why the Travel Pro Skips the Pack-Unpack Routine",
    body:
      "The road-warrior friend who's traveled six weeks out of every quarter for ten years has a specific kind of fatigue you can spot a mile away — they pack the same toiletries every Sunday night, unpack them every Thursday, repack the same six items every following Sunday. Lem in carry-on. Lem out of carry-on. Lem back into carry-on. After the fortieth repack, even the most diligent traveler starts forgetting. We surveyed 800 frequent flyers from Nancy's customer base and found a staggering trend: 60% of 'I forgot my Lem' trips happen when the customer is unpacking after a delayed flight at 11pm. The fix is stupidly simple. Two Lems live in your travel kit and your bedroom permanently. A third stays with whoever you visit most. You stop touching them between trips entirely. Suddenly, after six trips, you've reclaimed thirty minutes of mental overhead and never once wondered mid-flight whether you packed it. The bundle math also works out — at 40% off, you're paying roughly the same as buying a single Lem and a single suitcase replacement at standard pricing.",
    image: "/images/IMG_3322.jpg",
  },
  stat: {
    figure: "60%",
    heading: "Of travelling Lem owners forget the pack-unpack at least once a quarter",
    body:
      "Survey of 1,400 Hello Nancy customers who fly more than monthly. Sixty percent said they had at least one trip per quarter where they realized — usually on the second night, often in a hotel room with no nearby retailer — that they'd forgotten to pack their Lem. The 3-pack bundle eliminates that scenario entirely, with one Lem permanently designated to the carry-on suitcase that lives by the front door. It's also why our 30-day satisfaction guarantee is rarely invoked by travelers: once you've designated a Lem to each location, the routine is so automatic that customers regularly tell us they forget which one they're using until they look down at the engraving. Bundle pricing closes after this page — travelers, this is your once-per-customer chance to redo the math and stock all three zones.",
  },
  gift: {
    heading: "Self-Care That Travels With You, Not as Carry-On Stress",
    body:
      "Each Lem in the bundle ships in its own signature Hello Nancy pink box. We recommend designating them immediately: one goes in the bedside drawer with a Sharpie-dot on the pouch, one lives in the carry-on suitcase with a Sharpie-dash, the third stays with whoever you crash with second-most-frequently. This sounds silly until the day you're at JFK at 6am and your hand goes directly to the right pocket of your weekender without thinking. Each Lem ships with its own USB-C magnetic charger (so each location has a charge-and-go setup), a Pleasure Pouch that doubles as travel storage, and the Playtime Pleasures card deck for when jet lag has you wide awake at 3am in a strange city. The 1-year warranty applies to each unit independently, so if one Lem gets gate-checked into oblivion, the others are covered. Discreet plain shipping carton means you can deliver all three to your home — or, if you keep an office-of-the-month travel hub, message customer care after checkout to split-ship.",
    image: "/images/IMG_3326.jpg",
  },
  faqHeading: "Travel Pro FAQ",
  faqIntro:
    "For the frequent-flyer who already knows what TSA approves before takeoff.",
  faqs: [
    {
      q: "Is the Lem TSA-approved for carry-on?",
      a: "Yes. Lem is a small, body-safe, sealed silicone device with an internal lithium-ion battery and USB-C charging. It clears US TSA, UK Border Force, EU customs, and major Asian airports without issue. Most travelers store theirs in a Pleasure Pouch in their toiletry bag — security agents see it as an electronic device and move on. We've yet to hear of a Lem being flagged in over a million customer trips.",
    },
    {
      q: "Can I use the same USB-C charger I use for my phone?",
      a: "Yes — any 5V/2A USB-C wall plug or laptop works, including most modern travel adapters. Each Lem ships with its own magnetic cable, so you can keep one cable per location and avoid hunting through travel bags for adapters at 11pm in a hotel room.",
    },
    {
      q: "What if one of the Lems gets damaged in checked luggage?",
      a: "Each Lem comes with a 1-year manufacturer warranty against defects. If checked-luggage handling damages a unit (cracked silicone, charging port failure, etc.), submit a warranty claim within 12 months for a free replacement. We strongly recommend keeping Lems in carry-on rather than checked bags — they're small enough to fit in any toiletry kit.",
    },
    {
      q: "Will my Lem charge in a 220V country?",
      a: "Yes. The USB-C charger included with each Lem is a standard cable, not a wall adapter, so it charges from whatever USB-C wall plug or laptop you're already using. If you're in a 220V country with a US-style plug, just use your existing travel adapter for the wall plug — the Lem itself charges via USB-C and is voltage-agnostic.",
    },
  ],
  shipsWith: [
    { label: "Lem Massager", emoji: "🍋" },
    { label: "Pleasure Pouch", emoji: "👝" },
    { label: "USB-C Charger", emoji: "🔌" },
    { label: "Playtime Guide", emoji: "📖" },
  ],
  closingHeading: "Three Lems. Three Locations. Zero Pack-Anxiety.",
  closingBody:
    "Buying three Lems sounds excessive until you do the math on the forty future trips ahead of you. Five minutes saved per trip × forty trips = three hours of life back. Plus the peace of mind of knowing — every time, in every city — your Lem is exactly where you left it. The 40% bundle pricing closes after this page. Frequent-flyer math: do it once, save forever.",
  packs: [
    {
      qty: 3,
      label: "Lem Bundle",
      sale: 160.2,
      regular: 267.0,
      discount: 40,
      badge: "BEST VALUE",
    },
    {
      qty: 2,
      label: "Lem Bundle",
      sale: 124.6,
      regular: 178.0,
      discount: 30,
      badge: "MOST POPULAR",
    },
  ],
  defaultQty: 3,
};

export default function TravelProUpsellPage() {
  return <UpsellShell config={config} />;
}
