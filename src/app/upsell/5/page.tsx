import type { Metadata } from "next";
import { UpsellShell, type UpsellConfig } from "@/components/upsell/UpsellShell";

export const metadata: Metadata = {
  title: "The Self-Care Stash Pack — Save 40% | Hello Nancy",
  description:
    "Bedside, bathroom, weekender. Three Lems for the self-care maximalist who refuses to fetch. 40% off — only on this special-offer page.",
};

const config: UpsellConfig = {
  step: 5,
  total: 5,
  persona: "Self-Care Maximalist",
  hero: {
    heading:
      "The Self-Care Stash Pack — Bedside, bathroom, weekender. Never go without.",
    pinkPhrase: "Self-Care Stash Pack",
    subhead:
      "If you own three robes and four candles, this is the bundle for you.",
    lead:
      "You're the friend with the labeled shelves of bath salts. The one with a separate pouch for travel skincare. The one who treats Sunday-night self-care like a religion. You don't compromise on quality, and you certainly don't fetch a vibrator from another room when you've already lit the candles and run the bath. Three Lems means one for every zone — bedroom, bathroom, weekender. 40% off seals it.",
    image: "/images/IMG_3326.jpg",
    imageBadge: "Stash-the-house bundle",
  },
  tldr: {
    icon: "🛁",
    body:
      "You already own three of every 'favorite' — your favorite mug, your favorite robe, your favorite candle. Why is your Lem the one product you've been making walk between rooms? Three Lems = bedroom + bathroom (yes, it's waterproof) + weekender bag. 40% bundle pricing per unit. Each in its own pink box, ready to be placed wherever you most regret not having it. Self-care, completed.",
  },
  features: [
    {
      title: "Waterproof for the Bathtub",
      body:
        "Submersible up to 1 meter for 30 minutes (IPX7-rated). Splash-proof, bath-soak compatible, shower-friendly. Drop one in the bathroom — yes, bath-time officially included. Dries instantly with a soft towel.",
    },
    {
      title: "Weekender-Bag Ready",
      body:
        "With the included Pleasure Pouch, your third Lem lives permanently in your weekend bag — no last-minute panic-packing at 9pm on Friday. Just zip the bag and go, every time.",
    },
    {
      title: "Bedside Charging Hub",
      body:
        "USB-C magnetic charger per Lem means each room can have a charge-and-forget routine. Never the dead-battery surprise at 10pm on a Tuesday. Each location stays self-sufficient.",
    },
    {
      title: "Twelve Patterns, Three Locations",
      body:
        "You'll find that 'favorite intensity' #4 hits differently in the bathtub vs. the bedroom vs. the hotel room. Three locations, three vibes, same Lem. Discovery is part of the system.",
    },
  ],
  reviewsIntro:
    "From 14,881+ Lem owners — the ones who refuse to fetch self-care from another room.",
  reviewsHeading: "Three Lems. Three Rooms. Zero Compromises.",
  reviews: [
    {
      name: "Anita J.",
      rating: 5,
      quote:
        "I have a candle for every room. I have a robe for every season. Why was I making my Lem walk between rooms? Bought the 3-pack a year ago — one stays bedside, one lives in the bathroom (waterproof, no joke), one is permanently in my weekend bag. Best self-care decision.",
    },
    {
      name: "Mira K.",
      rating: 5,
      quote:
        "Bought it as a 'treat-yourself' on a Sunday and immediately upgraded my entire bedside-bathtub-travel routine. Each Lem stays in its zone. I forget which room I left them in because they're always there. Highest praise.",
    },
    {
      name: "Olivia C.",
      rating: 4,
      quote:
        "Honest take — three is a lot. I started with two (bedroom + bathroom) and added the third (travel) six months later. If I'd been smarter I'd have done all three on day one at 40% off. Don't make my mistake.",
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
    heading: "Why Self-Care Maximalists Refuse to Fetch",
    body:
      "There's a specific kind of person who has labeled drawers in their bathroom, three different moisturizers in their bedside table, and a candle on every horizontal surface — and that person already understands that location-specific self-care is not a luxury, it's a system. Self-care works when it's friction-free. If your Lem lives in a drawer in your bedroom and you're in the bathtub at 10pm, the fetch is the problem — not the soak. Same in the morning when you're staring at your weekend bag wondering whether to add the bedside Lem in or just go without. The 3-pack solves this with brute force: one in every relevant zone. Sunday-night bath ritual? Lem is already in the bathroom drawer. Hotel room on Tuesday? Lem is already in the carry-on. Bedroom-with-a-candle-on-Wednesday? Bedside Lem is plugged in. The friction collapses, and the entire experience becomes more frequent, more relaxed, and more genuinely restorative. We've seen the data — customers who own multiple Lems use them 2.4× more often than customers who own a single Lem and have to fetch. The 40% bundle pricing is just the financial green-light to do what your self-care maximalist instincts already wanted.",
    image: "/images/IMG_3322.jpg",
  },
  stat: {
    figure: "2.4×",
    heading: "More frequent use among multi-Lem owners vs. single owners",
    body:
      "Internal usage data from over 10,000 returning customers (anonymized, opt-in) shows that customers who own two or more Lems use them 2.4× as often per week as customers who own a single Lem. The reason is friction: the fetch tax of moving a Lem between rooms or remembering to pack one for a trip causes about half of single-Lem owners to skip a session they would otherwise have had. Owning three eliminates the fetch entirely. Multi-room placement also leads to discovery — customers consistently report finding new 'favorite intensities' by trying the same Lem in the bath vs. the bedroom vs. a hotel room. The 3-pack at 40% off is the cleanest way to dramatically increase your relaxation budget without changing your routine.",
  },
  gift: {
    heading: "Self-Care That's Already Where You'll Need It",
    body:
      "Each Lem in the 3-pack ships in its own Hello Nancy pink box with the Playtime Pleasures illustrated card deck, a USB-C magnetic charger, and a soft Pleasure Pouch. Most self-care maximalists immediately designate their three units: bedroom gets the Lem in the bedside drawer (charger plugged in permanently), bathroom gets the Lem stored in a waterproof case under the sink, and weekender gets the Lem zipped into the Pleasure Pouch and packed permanently in the carry-on bag. Setup takes about ten minutes. Once placed, you never think about it again — and yet the impact on your weekly self-care cadence is dramatic. The 30-day satisfaction guarantee covers all three units; the 1-year warranty applies to each unit independently. Discreet plain shipping carton means even if you live in a co-op with a shared mail room, nobody knows. Add the upgrade Pleasure Pouches at checkout if you want a softer travel case for the third unit. Three Lems is not over-buying — it's correctly provisioning for the way you already live.",
    image: "/images/IMG_3324.jpg",
  },
  faqHeading: "Self-Care Maximalist FAQ",
  faqIntro:
    "For the person who already owns three of every favorite — why should the Lem be different?",
  faqs: [
    {
      q: "Is the Lem actually waterproof enough for bath use?",
      a: "Yes. The Lem is rated IPX7 — fully submersible up to 1 meter for 30 minutes. It's tested for bath, shower, and even pool use (though we don't recommend leaving it unattended in any body of water for hygiene reasons). Most bath users keep one Lem permanently in a small waterproof pouch under the sink and charge it weekly. The silicone exterior dries instantly with a soft towel.",
    },
    {
      q: "Won't owning three be more than I'd ever use?",
      a: "Our usage data says the opposite — multi-Lem owners use their Lems 2.4× more often than single-Lem owners. The friction of fetching, the worry about forgetting to pack, and the dead-battery problem all compound. Owning three actually means the average Lem gets used less frequently per unit (lighter wear-and-tear on each device), and yet your weekly self-care cadence increases dramatically.",
    },
    {
      q: "Can I store one in a bathroom long-term without damage?",
      a: "Yes. Lem is humidity-resistant and the USB-C port is sealed against moisture when not actively charging. We recommend storing the bathroom Lem inside a Pleasure Pouch or small ceramic dish to keep dust off, and charging it every 1-2 weeks. Customers have kept Lems in bathrooms for 3+ years without issue.",
    },
    {
      q: "What if I move apartments? Do I have to start over?",
      a: "Not at all. The three Lems are fully portable — pack them in the moving box, redesignate them in your new apartment's bedroom/bathroom/weekender, and you're back to the same routine within 10 minutes. Some customers add a fourth Lem when they upgrade to a larger home (e.g., a guest bathroom or a separate weekend retreat). The bundle pricing applies on this one-time-offer page; future purchases are at standard pricing.",
    },
  ],
  shipsWith: [
    { label: "Lem Massager", emoji: "🍋" },
    { label: "Pleasure Pouch", emoji: "👝" },
    { label: "USB-C Charger", emoji: "🔌" },
    { label: "Playtime Guide", emoji: "📖" },
  ],
  closingHeading: "Three Lems. Three Rooms. Zero Compromises.",
  closingBody:
    "Self-care that requires a fetch is self-care that doesn't happen on the bad days. The 3-pack is built for the version of you who refuses to compromise on convenience, who already labels her self-care drawers, who treats Sunday night like a spa. Spend once. Place three. Never fetch again. The 40% bundle pricing closes after this page — when else are you going to give yourself this permission?",
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

export default function SelfCareUpsellPage() {
  return <UpsellShell config={config} />;
}
