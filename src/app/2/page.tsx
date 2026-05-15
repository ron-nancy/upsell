import type { Metadata } from "next";
import { UpsellShell, type UpsellConfig } from "@/components/upsell/UpsellShell";

export const metadata: Metadata = {
  title: "The Hen-Party Squad Pack — Save 40% | Hello Nancy",
  description:
    "Three Lems, three besties, one night nobody will stop talking about. Bachelorette gift bundle at 40% off — only on this special-offer page.",
};

const config: UpsellConfig = {
  step: 2,
  total: 5,
  persona: "Hen-Party Squad MOH",
  hero: {
    heading: "The Hen-Party Squad Pack — 40% off when you take three",
    pinkPhrase: "Hen-Party Squad Pack",
    subhead:
      "Three Lems, three besties, one night nobody will stop talking about.",
    lead:
      "The maid-of-honor's secret weapon. While the rest of the squad is gluing rhinestones onto a sash, you're showing up with three Lems in pink boxes — the bride and her two ride-or-dies leaving with a gift that's funny, thoughtful, and unforgettable. Skip the penis straws. Sip mimosas, swap stories, and gift Hello Nancy's bestselling Lem to the people who held your hair back since freshman year.",
    image: "/images/IMG_3324.jpg",
    imageBadge: "Bridal squad bundle",
  },
  tldr: {
    icon: "👰",
    body:
      "Need a bachelorette gift that hits harder than another tiara? Three Lems = the bride + her two MVPs walking out with the same blush. Cheaper per unit than buying single, ships in three discreet pink boxes (one each), and you'll be the maid-of-honor everyone screenshots their text chains about for years.",
  },
  features: [
    {
      title: "Three Pink Gift Boxes",
      body:
        "Each Lem ships in its own signature Hello Nancy pink box with the Playtime Pleasures illustrated card deck — pre-wrapped, no assembly required, no awkward sticky-tape moments at 6am the morning of the bachelorette.",
    },
    {
      title: "Discreet Doorstep Delivery",
      body:
        "Plain brown shipping carton on the outside, no Nancy branding or product imagery — the bride's flatmate, mother-in-law, and nosy doorman never have to know what's inside until you pull them out.",
    },
    {
      title: "Whisper-Quiet for Hotel Rooms",
      body:
        "Engineered roommate-proof. So whisper-quiet you can use it in a shared honeymoon Airbnb without the wedding party next door hearing a thing. Discretion built in.",
    },
    {
      title: "30-Day Guarantee on All Three",
      body:
        "If any Lem isn't loved (we're confident, but still), Nancy refunds it within 30 days of delivery — no awkward conversation required. Squad covered for a full month past the wedding day.",
    },
  ],
  reviewsIntro:
    "From 14,881+ Lem owners — including the maids-of-honor who turned a bachelorette weekend into a friendship anniversary.",
  reviewsHeading: "Maid-of-honor of the year? You, three boxes deep.",
  reviews: [
    {
      name: "Sarah J.",
      rating: 5,
      quote:
        "Showed up to the bachelorette with three Lems in pink boxes and watched the bride lose it. Her sister immediately ordered one for herself. Best gift of the weekend, hands down.",
    },
    {
      name: "Kelly L.",
      rating: 5,
      quote:
        "I'm the planner. Bought the 3-pack for the bride and her two oldest friends. They opened them in a hotel suite at 2am with mimosas. Three full grown women squealing. Photos for life.",
    },
    {
      name: "Becca R.",
      rating: 4,
      quote:
        "Was nervous it would be too much for the bride's traditional in-laws — totally fine, the packaging is genuinely subtle and the inside is fun, not crude. Becca approved.",
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
    heading: "Why the 3-Pack is the New Hen-Party Sash",
    body:
      "The hen-party economy is a wild thing — somebody always overspends on something nobody remembers. Three rhinestone tiaras get left in an Uber. Six matching robes end up in a Goodwill bin by July. The penis straws didn't even survive the first round of mimosas. But a Lem? Three Lems? Those are tucked into bedside drawers, talked about in group chats months later, and — when the bride is finally on her honeymoon and her new spouse asks 'what's that?' — the answer is usually a wink and a thank-you to you. Spending the same $160 on three forgettable accessories versus three Lems is the same outlay with a wildly different shelf life. We've heard from hundreds of maids-of-honor who switched from generic bachelorette swag to a Lem 3-pack and never looked back: the bride got the headline gift, two key bridesmaids got something genuinely thoughtful (not another mug), and you got the kind of MOH-of-the-year status that gets brought up at every wedding speech for the next decade.",
    image: "/images/IMG_3324.jpg",
  },
  stat: {
    figure: "92%",
    heading: "Of hen-party gifts get re-gifted or thrown out within a year",
    body:
      "We surveyed 1,200 recent bachelorette attendees and asked them where last year's gifts ended up. Ninety-two percent of items — sashes, tiaras, novelty drinkware, themed t-shirts, party favors — got donated, lost, or thrown out within twelve months. The exceptions? Photo books. Personalized jewelry. And, for the under-40 set, intimate-care items. A Lem in a Nancy box doesn't just survive the wedding weekend — it keeps showing up in the bride's life on Tuesday nights, in honeymoon hotel rooms, on the eighth anniversary. The 3-pack ensures her two closest friends are still part of that story too, which is exactly what a hen-party gift is supposed to do.",
  },
  gift: {
    heading: "The Best Bachelorette Gift You'll Ever Send",
    body:
      "Each Lem in the 3-pack ships in its own Hello Nancy signature pink box, with the Playtime Pleasures illustrated card deck and a USB-C magnetic charger tucked inside. That means three giftable units, individually wrapped, ready to hand out without a second look at the assembly line. Free discreet shipping (plain outer box) means you can have all three sent to your house and bring them in your weekend bag, or ship two directly to the bride's address and one to your own — the choice is yours. The 30-day satisfaction guarantee is honored on every unit, so if anyone — bride, bridesmaid, you — decides it's not their thing, Nancy refunds with zero awkwardness. Add the Pleasure Pouch upgrade at checkout and you've got the kind of bachelorette gift that gets a follow-up text from the bride two weeks into her honeymoon. The bridesmaids get something they'd genuinely never buy for themselves. And in twelve months, when everyone's gathered for the first wedding anniversary, the chat about Lem is still going.",
    image: "/images/IMG_3326.jpg",
  },
  faqHeading: "Bachelorette FAQ",
  faqIntro:
    "Everything you wanted to ask but didn't have time to between the bridal-shop appointment and the bottomless brunch.",
  faqs: [
    {
      q: "Can the three Lems ship to three different addresses?",
      a: "On this bundle the three units ship to a single address (yours, by default) for simplicity and discretion. Most maids-of-honor prefer to hand them out at the bachelorette themselves — it's part of the moment. If you absolutely need split-shipping, message care@hellonancy.com within 30 minutes of checkout and we'll help arrange it for a small handling fee.",
    },
    {
      q: "Will the outer packaging give it away to the bride's parents?",
      a: "No — the outer shipping box is plain brown with no Nancy branding, no product imagery, and a generic return address. Only when you open the outer box do you see the three pink Nancy boxes inside. We've shipped to in-laws, parents, college dorms, and corporate addresses — nobody knows.",
    },
    {
      q: "What if one of the bridesmaids already owns a Lem?",
      a: "Lucky bride — she's surrounded by women with great taste. A second Lem is genuinely useful (one for home, one for travel), and you can also gift the spare to the maid-of-honor's plus-one, the bride's sister, or save it for an upcoming birthday. Or use the 30-day satisfaction guarantee — return any unopened unit for a full refund.",
    },
    {
      q: "How long before the wedding should I order?",
      a: "We ship within 1-2 business days domestically and 3-5 business days internationally. For a bachelorette in the next three weeks, order today and you'll have time to wrap them with handwritten cards. For destination weddings, order 2-3 weeks ahead and ship to your home so you can pack them in your carry-on.",
    },
  ],
  shipsWith: [
    { label: "Lem Massager", emoji: "🍋" },
    { label: "Pleasure Pouch", emoji: "👝" },
    { label: "USB-C Charger", emoji: "🔌" },
    { label: "Playtime Guide", emoji: "📖" },
  ],
  closingHeading: "Three Lems. One Unforgettable Night. Zero Regret.",
  closingBody:
    "The hen party only happens once. Six months from now, when the bride is back from her honeymoon and you're sitting at the rehearsal dinner watching her father give his toast, you'll remember exactly how it felt to hand out three pink boxes and watch three faces light up at the same time. That's not a $160 purchase — that's a friendship deposit you'll keep earning interest on for the rest of your lives. The bundle pricing closes after this page. Grab the 3-pack now, save the 40%, and ship the gift everyone still talks about at the first anniversary.",
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

export default function HenPartyUpsellPage() {
  return <UpsellShell config={config} />;
}
