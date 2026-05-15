"use client";

import { useState } from "react";
import {
  CheckIcon,
  StarFilled,
  VerifiedBadge,
} from "@/components/icons";
import { asset } from "@/lib/asset";
import { CountdownBar } from "@/components/upsell/CountdownBar";

const NEXT_HREF = "/2/";
const NEXT_LABEL = "No Thanks — show me a different offer";

type Pack = {
  qty: number;
  label: string;
  sale: number;
  regular: number;
  discount: number; // percent
  badge?: string;
};

// Lem retail = $89 single. 2-bundle 30% off = $89*2*0.7 = $124.60 (vs $178). 3-bundle 40% off = $89*3*0.6 = $160.20 (vs $267).
const PACKS: Pack[] = [
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
];

const FEATURES = [
  {
    title: "12 Unique Intensities",
    body: "Every Lem packs the same 12 patterns and intensities — perfect for sharing across rooms, partners, or moods.",
  },
  {
    title: "Whisper-Quiet (Shhh!)",
    body: "Roommate-proof and dorm-proof. Toss one in a guest room, keep one bedside — no one will hear a thing.",
  },
  {
    title: "Medical-Grade Silicone",
    body: "Body-safe, hypoallergenic and easy to clean. Every Lem in your bundle is built to last for years.",
  },
  {
    title: "Waterproof + USB-C",
    body: "Splash-, bath- and travel-proof. Each Lem ships with its own USB-C magnetic charger and Pleasure Pouch.",
  },
];

const REVIEWS = [
  {
    name: "Arnold R.",
    rating: 5,
    quote:
      "Bought two — one for me, one as a hen-night gift. Best wedding gift I've ever given, and the bride agreed.",
  },
  {
    name: "Christopher R.",
    rating: 4,
    quote:
      "Three Lems means one in the bedroom, one in the bathroom, one in the suitcase. Worth every penny — the 40% off seals it.",
  },
  {
    name: "Marge J.",
    rating: 5,
    quote:
      "Doubled up so I'd never have to wait for a charge. Smartest add-on I've ever made at checkout 🍋🍋.",
  },
];

const CARE_ICONS = [
  { label: "Free Shipping", emoji: "📦" },
  { label: "Mystery Gift", emoji: "🎁" },
  { label: "Discreet Packaging", emoji: "🤫" },
  { label: "30-Day Guarantee", emoji: "🛡️" },
  { label: "1-Yr Warranty", emoji: "✨" },
];

const FROM_NATURE = [
  { label: "Lem Massager", emoji: "🍋" },
  { label: "Pleasure Pouch", emoji: "👝" },
  { label: "USB-C Charger", emoji: "🔌" },
  { label: "Playtime Guide", emoji: "📖" },
];

function OrderProgress() {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <p className="font-display font-semibold text-[20px] md:text-[22px] text-[#1A1A1A] text-center tracking-tight">
        Don&apos;t miss out on this special deal before time runs out!
      </p>
      <div className="mt-4 w-full flex items-center text-[13px] font-display font-semibold text-[#1A1A1A]">
        <span className="text-[#6b6357]">Your Order</span>
        <div className="flex-1 mx-3 h-1.5 rounded-full bg-[#e6dcc8] overflow-hidden">
          <div className="h-full w-1/2 bg-[#FF30CC]" />
        </div>
        <span className="text-[#FF30CC]">Special Offers 1 / 5</span>
        <div className="flex-1 mx-3 h-1.5 rounded-full bg-[#e6dcc8]" />
        <span className="text-[#6b6357]">Done 🍋</span>
      </div>
    </div>
  );
}

function BestiesTLDR() {
  return (
    <div className="mt-8 max-w-3xl mx-auto bg-[#F2E76B] rounded-3xl border border-[#1A1A1A]/10 p-5 md:p-6 flex items-start gap-4">
      <span className="text-3xl shrink-0" aria-hidden>
        💛
      </span>
      <div>
        <p className="font-display font-bold text-[12px] tracking-[0.18em] uppercase text-[#FF30CC]">
          TL;DR
        </p>
        <p className="font-body text-[16px] md:text-[18px] text-[#1A1A1A] leading-[1.5] mt-1">
          A Lem for each of your besties. Hands-down the most-talked-about
          birthday, hen-night and divorce-party gift of the year — bundle the
          extras now and your besties will be texting heart-eyes for weeks.
          🍋💌
        </p>
      </div>
    </div>
  );
}

function ProductCard({
  selected,
  onSelect,
}: {
  selected: number;
  onSelect: (qty: number) => void;
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#e6dcc8] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Lem product image — single hero shot, no other products */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F2E76B]">
        <img
          src={asset("/images/WhatsAppImage2023-11-18at14.19.19_2acc31e8.webp")}
          alt="Lem clitoral massager"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-[#FF30CC] text-white font-display font-bold text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
          One-time offer
        </span>
      </div>

      {/* Quantity selector */}
      <div className="flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PACKS.map((p) => {
            const isSelected = selected === p.qty;
            return (
              <button
                key={p.qty}
                type="button"
                onClick={() => onSelect(p.qty)}
                className={`relative text-left rounded-2xl border-2 p-5 pr-12 pt-6 transition-colors ${
                  isSelected
                    ? "border-[#FF30CC] bg-[#FFF0FA]"
                    : "border-[#e6dcc8] bg-white hover:border-[#FF30CC]/60"
                }`}
              >
                {p.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF30CC] text-white font-display font-bold text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                    {p.badge}
                  </span>
                )}
                <span
                  aria-hidden
                  className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected
                      ? "border-[#FF30CC] bg-[#FF30CC]"
                      : "border-[#bdb4a3] bg-white"
                  }`}
                >
                  {isSelected && <CheckIcon className="w-3 h-3 text-white" />}
                </span>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#F2E76B] flex items-center justify-center text-3xl">
                    🍋
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-[18px] leading-tight text-[#1A1A1A] tracking-tight">
                      {p.qty}× {p.label}
                    </p>
                    <p className="font-display font-bold text-[10px] tracking-[0.15em] uppercase text-[#FF30CC] mt-1">
                      {p.discount}% off
                    </p>
                  </div>
                </div>
                <p className="mt-4 flex items-baseline gap-2 flex-wrap">
                  <span className="font-display font-bold text-[20px] text-[#FF30CC]">
                    ${p.sale.toFixed(2)}
                  </span>
                  <span className="font-display line-through text-[13px] text-[#6b6357]">
                    ${p.regular.toFixed(2)}
                  </span>
                </p>
              </button>
            );
          })}
        </div>
        <p className="text-center mt-3 font-body text-[13px] text-[#6b6357]">
          Estimated Tax — calculated at checkout
        </p>
        <button className="mt-3 w-full bg-[#FF30CC] hover:bg-[#e62cb8] transition-colors text-white font-display font-bold text-[16px] uppercase tracking-wide py-4 rounded-full">
          Yes, Add This To My Order
        </button>
        <a
          href={NEXT_HREF}
          className="mt-3 w-full block text-center bg-transparent border border-[#1A1A1A]/30 hover:bg-[#1A1A1A]/5 transition-colors text-[#1A1A1A] font-display font-semibold text-[15px] py-3.5 rounded-full"
        >
          {NEXT_LABEL}
        </a>
      </div>
    </div>
  );
}

function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
      {FEATURES.map((f) => (
        <div key={f.title} className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full bg-[#FFE0F5] flex-shrink-0 flex items-center justify-center text-[#FF30CC]">
            <CheckIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-[17px] text-[#1A1A1A] tracking-tight">
              {f.title}
            </h3>
            <p className="font-body text-[15px] text-[#1A1A1A] leading-[1.55] mt-1">
              {f.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ReviewBlock() {
  return (
    <section className="bg-[#FCF7ED] py-12 px-4">
      <p className="text-center font-body text-[14px] text-[#6b6357]">
        More than <span className="text-[#1A1A1A] font-display font-semibold">14,881+</span> customers
      </p>
      <h2 className="font-display font-semibold text-[28px] md:text-[36px] text-[#1A1A1A] text-center mt-2 max-w-3xl mx-auto leading-tight tracking-tight">
        There&apos;s no better feeling than making our besties happy
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-6xl mx-auto">
        {REVIEWS.map((r) => (
          <div
            key={r.name}
            className="bg-white rounded-2xl p-5 border border-[#efe7d4]"
          >
            <p className="font-body italic text-[15px] text-[#1A1A1A] leading-[1.55]">
              &ldquo;{r.quote}&rdquo;
            </p>
            <p className="font-display font-semibold text-[14px] text-[#1A1A1A] mt-4">
              — {r.name}
            </p>
            <p className="flex items-center gap-1 mt-1">
              <VerifiedBadge className="w-3.5 h-3.5 text-[#FF30CC]" />
              <span className="font-display text-[12px] text-[#FF30CC] font-semibold">
                Verified Customer
              </span>
            </p>
            <div className="flex gap-0.5 mt-1">
              {Array.from({ length: r.rating }).map((_, i) => (
                <StarFilled key={i} className="w-3.5 h-3.5 text-[#FFB74A]" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CareIconsRow() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-3 md:grid-cols-5 gap-6">
      {CARE_ICONS.map((c) => (
        <div key={c.label} className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-white border border-[#1A1A1A]/5 shadow-sm flex items-center justify-center text-2xl">
            {c.emoji}
          </div>
          <p className="font-display font-semibold text-[13px] text-[#1A1A1A] mt-2">
            {c.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function CTAButtons() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-3">
      <button className="w-full bg-[#FF30CC] hover:bg-[#e62cb8] transition-colors text-white font-display font-bold text-[16px] uppercase tracking-wide py-4 rounded-full">
        Yes, Add This To My Order
      </button>
      <a
        href={NEXT_HREF}
        className="w-full block text-center bg-transparent border border-[#1A1A1A]/30 hover:bg-[#1A1A1A]/5 transition-colors text-[#1A1A1A] font-display font-semibold text-[15px] py-3.5 rounded-full"
      >
        {NEXT_LABEL}
      </a>
    </div>
  );
}

export default function UpsellPage() {
  const [selected, setSelected] = useState(2); // 2-bundle is "MOST POPULAR" default

  return (
    <div className="bg-[#FCF7ED] min-h-screen font-body text-[#1A1A1A]">
      <CountdownBar step={1} />
      {/* Success bar — uses brand lime (matches sale-bar treatment on the live site) */}
      <div className="bg-[#E4F260] text-[#1A1A1A] py-3 px-4 text-center">
        <p className="font-display font-semibold text-[14px] md:text-[15px]">
          ✓ Your order and payment were successful! Expect an email confirmation in 10 minutes
        </p>
      </div>

      <div className="py-6 px-4">
        <OrderProgress />
      </div>

      {/* Hero offer */}
      <section className="py-6 px-4 max-w-5xl mx-auto">
        <h1 className="font-display font-semibold text-[32px] md:text-[48px] text-center text-[#1A1A1A] leading-[1.05] tracking-[-0.02em]">
          Add a <span className="text-[#FF30CC]">Lem Bundle</span> and save up to 40% OFF
        </h1>
        <h2 className="font-display font-semibold text-[20px] md:text-[24px] text-center text-[#1A1A1A] mt-4 leading-tight max-w-2xl mx-auto">
          One for home, one for travel, one for a bestie — the more Lems, the more savings
        </h2>
        <p className="font-body text-[15px] md:text-[16px] text-center text-[#6b6357] mt-3 max-w-xl mx-auto leading-[1.5]">
          Every Lem ships with its own Pleasure Pouch, USB-C magnetic charger and Playtime Pleasures guide. Take advantage of this one-time bundle pricing before checkout closes.
        </p>

        <BestiesTLDR />

        <div className="mt-10">
          <ProductCard selected={selected} onSelect={setSelected} />
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-10 px-4 bg-[#FCF7ED]">
        <div className="max-w-5xl mx-auto">
          <FeatureGrid />
        </div>
      </section>

      {/* Reviews */}
      <ReviewBlock />

      {/* Care icons */}
      <CareIconsRow />

      {/* Why buy more */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src={asset("/images/IMG_3324.jpg")}
            alt="Lem bundle"
            className="w-full aspect-[4/3] object-cover rounded-2xl"
          />
          <div>
            <h3 className="font-display font-semibold text-[26px] md:text-[30px] text-[#1A1A1A] leading-tight tracking-tight">
              One Lem Is Never Enough
            </h3>
            <p className="font-body text-[15px] text-[#1A1A1A] leading-[1.6] mt-3">
              The most-loved gift our customers buy alongside their own Lem? Another Lem. One for home, one for the suitcase, one for the friend who keeps asking what all the fuss is about — bundle pricing is your one-time chance to stock the drawer.
            </p>
          </div>
        </div>
      </section>

      {/* 80% stat */}
      <section className="py-10 px-4 bg-[#FCF7ED]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square md:aspect-auto md:h-72 rounded-2xl bg-[#F2E76B] flex items-center justify-center">
            <span className="font-display font-bold text-[80px] md:text-[110px] text-[#FF30CC] leading-none">
              80%
            </span>
          </div>
          <div>
            <h3 className="font-display font-semibold text-[26px] md:text-[30px] text-[#1A1A1A] leading-tight tracking-tight">
              Of Nancy Customers Want a Second Lem
            </h3>
            <p className="font-body text-[15px] text-[#1A1A1A] leading-[1.6] mt-3">
              In our post-purchase survey, 4 in 5 customers said they wished they&apos;d bought a backup at the same time — for travel, gifting, or just so one is always charged. This is your one chance to grab the bundle at this discount.
            </p>
          </div>
        </div>
      </section>

      {/* Gift / bedside */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-display font-semibold text-[26px] md:text-[30px] text-[#1A1A1A] leading-tight tracking-tight">
              The Best Gift You&apos;ll Ever Send
            </h3>
            <p className="font-body text-[15px] text-[#1A1A1A] leading-[1.6] mt-3">
              Each Lem ships in our signature pink box with a Pleasure Pouch and Playtime Pleasures guide — bridal showers, birthdays, divorce parties, just-because Tuesdays. Free discreet shipping, mystery gift, and a 30-day satisfaction guarantee on every Lem.
            </p>
          </div>
          <img
            src={asset("/images/IMG_3326.jpg")}
            alt="Lem gift bundle"
            className="order-1 md:order-2 w-full aspect-[4/3] object-cover rounded-2xl"
          />
        </div>
      </section>

      <CTAButtons />

      {/* Each Lem includes */}
      <section className="py-12 px-4">
        <h2 className="font-display font-semibold text-[28px] md:text-[36px] text-center text-[#1A1A1A] tracking-tight">
          Every Lem Ships With
        </h2>
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {FROM_NATURE.map((n) => (
            <div key={n.label} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white border border-[#e6dcc8] flex items-center justify-center text-3xl shadow-sm">
                {n.emoji}
              </div>
              <p className="font-display font-semibold text-[13px] text-[#1A1A1A] mt-3">
                {n.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Repeat product card */}
      <section className="py-6 px-4 max-w-5xl mx-auto">
        <ProductCard selected={selected} onSelect={setSelected} />
      </section>

      {/* Repeat feature grid */}
      <section className="py-10 px-4 bg-[#FCF7ED]">
        <div className="max-w-5xl mx-auto">
          <FeatureGrid />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e6dcc8] py-6 px-4 text-center">
        <p className="font-display text-[13px] text-[#1A1A1A]">
          © 2026 Hello Nancy. All rights reserved.
        </p>
        <p className="text-[11px] text-[#6b6357] font-body mt-2">
          *bundle pricing applies only on this special-offer page.
        </p>
      </footer>
    </div>
  );
}
