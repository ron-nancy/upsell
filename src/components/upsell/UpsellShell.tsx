"use client";

import { useState } from "react";
import {
  CheckIcon,
  StarFilled,
  VerifiedBadge,
  ChevronDown,
} from "@/components/icons";
import { asset } from "@/lib/asset";

/* ----------------------------- Types ----------------------------- */

export type Pack = {
  qty: number;
  label: string;
  sale: number;
  regular: number;
  discount: number;
  badge?: string;
};

export type Feature = { title: string; body: string };
export type Review = { name: string; rating: number; quote: string };
export type Icon = { label: string; emoji: string };
export type Faq = { q: string; a: string };

export type UpsellConfig = {
  step: number; // 1, 2, 3, 4, 5
  total: number; // 5
  persona: string; // short label, e.g. "Hen-Party Squad"

  hero: {
    heading: string; // can include the word "Lem Bundle" — wrap in pink
    pinkPhrase: string; // the phrase to color pink (must be a substring of heading)
    subhead: string;
    lead: string;
    image: string;
    imageBadge?: string;
  };

  tldr: {
    icon: string; // emoji
    body: string; // ~80 words
  };

  features: Feature[];
  reviewsIntro: string; // ~25 words
  reviewsHeading: string;
  reviews: Review[];
  careIcons: Icon[];

  whyBundle: {
    heading: string;
    body: string; // ~200 words
    image: string;
  };

  stat: {
    figure: string; // e.g. "80%"
    heading: string;
    body: string; // ~150 words
  };

  gift: {
    heading: string;
    body: string; // ~200 words
    image: string;
  };

  faqHeading: string;
  faqIntro: string;
  faqs: Faq[];

  shipsWith: Icon[];

  closingHeading: string;
  closingBody: string; // ~100 words

  packs: Pack[];
  defaultQty: number;
};

/* ----------------------------- Helpers ----------------------------- */

function HeroHeading({ text, pink }: { text: string; pink: string }) {
  if (!text.includes(pink)) {
    return <span>{text}</span>;
  }
  const [before, after] = text.split(pink);
  return (
    <>
      {before}
      <span className="text-[#FF30CC]">{pink}</span>
      {after}
    </>
  );
}

/* ----------------------------- Pieces ----------------------------- */

function OrderProgress({ step, total, persona }: { step: number; total: number; persona: string }) {
  const pct = Math.round(((step - 0.5) / total) * 100);
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <p className="font-display font-semibold text-[20px] md:text-[22px] text-[#1A1A1A] text-center tracking-tight">
        Don&apos;t miss out on this special deal before time runs out!
      </p>
      <div className="mt-4 w-full flex items-center text-[13px] font-display font-semibold text-[#1A1A1A]">
        <span className="text-[#6b6357]">Your Order</span>
        <div className="flex-1 mx-3 h-1.5 rounded-full bg-[#e6dcc8] overflow-hidden">
          <div className="h-full bg-[#FF30CC]" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-[#FF30CC] whitespace-nowrap">
          Special Offers {step} / {total}
        </span>
        <div className="flex-1 mx-3 h-1.5 rounded-full bg-[#e6dcc8]" />
        <span className="text-[#6b6357]">Done 🍋</span>
      </div>
      <p className="mt-3 font-body text-[13px] text-[#6b6357]">
        Curated for: <span className="text-[#1A1A1A] font-display font-semibold">{persona}</span>
      </p>
    </div>
  );
}

function TldrCard({ icon, body }: { icon: string; body: string }) {
  return (
    <div className="mt-8 max-w-3xl mx-auto bg-[#F2E76B] rounded-3xl border border-[#1A1A1A]/10 p-5 md:p-6 flex items-start gap-4">
      <span className="text-3xl shrink-0" aria-hidden>
        {icon}
      </span>
      <div>
        <p className="font-display font-bold text-[12px] tracking-[0.18em] uppercase text-[#FF30CC]">
          TL;DR
        </p>
        <p className="font-body text-[16px] md:text-[18px] text-[#1A1A1A] leading-[1.55] mt-1">
          {body}
        </p>
      </div>
    </div>
  );
}

function ProductCard({
  packs,
  selected,
  onSelect,
  image,
  imageBadge,
}: {
  packs: Pack[];
  selected: number;
  onSelect: (qty: number) => void;
  image: string;
  imageBadge?: string;
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#e6dcc8] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F2E76B]">
        <img
          src={asset(image)}
          alt="Lem clitoral massager"
          className="w-full h-full object-cover"
        />
        {imageBadge && (
          <span className="absolute top-4 left-4 bg-[#FF30CC] text-white font-display font-bold text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
            {imageBadge}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {packs.map((p) => {
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
        <button className="mt-3 w-full bg-transparent border border-[#1A1A1A]/30 hover:bg-[#1A1A1A]/5 transition-colors text-[#1A1A1A] font-display font-semibold text-[15px] py-3.5 rounded-full">
          No Thanks
        </button>
      </div>
    </div>
  );
}

function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
      {features.map((f) => (
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

function ReviewBlock({
  intro,
  heading,
  reviews,
}: {
  intro: string;
  heading: string;
  reviews: Review[];
}) {
  return (
    <section className="bg-[#FCF7ED] py-12 px-4">
      <p className="text-center font-body text-[14px] text-[#6b6357] max-w-2xl mx-auto">
        {intro}
      </p>
      <h2 className="font-display font-semibold text-[28px] md:text-[36px] text-[#1A1A1A] text-center mt-2 max-w-3xl mx-auto leading-tight tracking-tight">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-6xl mx-auto">
        {reviews.map((r) => (
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

function CareIconsRow({ items }: { items: Icon[] }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-3 md:grid-cols-5 gap-6">
      {items.map((c) => (
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
      <button className="w-full bg-transparent border border-[#1A1A1A]/30 hover:bg-[#1A1A1A]/5 transition-colors text-[#1A1A1A] font-display font-semibold text-[15px] py-3.5 rounded-full">
        No Thanks
      </button>
    </div>
  );
}

function FaqList({ heading, intro, faqs }: { heading: string; intro: string; faqs: Faq[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="bg-[#FCF7ED] py-16 px-4">
      <h2 className="font-display font-semibold text-[28px] md:text-[36px] text-center text-[#FF30CC] tracking-tight">
        {heading}
      </h2>
      <p className="font-body text-[15px] text-[#1A1A1A] text-center mt-3 max-w-2xl mx-auto leading-[1.5]">
        {intro}
      </p>
      <div className="mt-8 max-w-3xl mx-auto bg-white rounded-3xl border border-[#f3dce2]">
        {faqs.map((f, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={f.q}
              className={`border-b border-[#f3dce2] last:border-b-0`}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full px-5 md:px-6 py-5 flex justify-between items-center text-left gap-4"
              >
                <span
                  className={`font-display font-semibold text-[16px] md:text-[18px] tracking-tight ${
                    isOpen ? "text-[#FF30CC]" : "text-[#1A1A1A]"
                  }`}
                >
                  {f.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 text-[#FF30CC] flex-shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 md:px-6 pb-5 font-body text-[15px] text-[#1A1A1A] leading-[1.6]">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ----------------------------- Shell ----------------------------- */

export function UpsellShell({ config }: { config: UpsellConfig }) {
  const [selected, setSelected] = useState(config.defaultQty);

  return (
    <div className="bg-[#FCF7ED] min-h-screen font-body text-[#1A1A1A]">
      <div className="bg-[#E4F260] text-[#1A1A1A] py-3 px-4 text-center">
        <p className="font-display font-semibold text-[14px] md:text-[15px]">
          ✓ Your order and payment were successful! Expect an email confirmation in 10 minutes
        </p>
      </div>

      <div className="py-6 px-4">
        <OrderProgress step={config.step} total={config.total} persona={config.persona} />
      </div>

      <section className="py-6 px-4 max-w-5xl mx-auto">
        <h1 className="font-display font-semibold text-[32px] md:text-[48px] text-center text-[#1A1A1A] leading-[1.05] tracking-[-0.02em]">
          <HeroHeading text={config.hero.heading} pink={config.hero.pinkPhrase} />
        </h1>
        <h2 className="font-display font-semibold text-[20px] md:text-[24px] text-center text-[#1A1A1A] mt-4 leading-tight max-w-3xl mx-auto">
          {config.hero.subhead}
        </h2>
        <p className="font-body text-[15px] md:text-[16px] text-center text-[#6b6357] mt-3 max-w-2xl mx-auto leading-[1.55]">
          {config.hero.lead}
        </p>

        <TldrCard icon={config.tldr.icon} body={config.tldr.body} />

        <div className="mt-10">
          <ProductCard
            packs={config.packs}
            selected={selected}
            onSelect={setSelected}
            image={config.hero.image}
            imageBadge={config.hero.imageBadge}
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-[#FCF7ED]">
        <div className="max-w-5xl mx-auto">
          <FeatureGrid features={config.features} />
        </div>
      </section>

      <ReviewBlock
        intro={config.reviewsIntro}
        heading={config.reviewsHeading}
        reviews={config.reviews}
      />

      <CareIconsRow items={config.careIcons} />

      <section className="py-10 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src={asset(config.whyBundle.image)}
            alt="Lem bundle"
            className="w-full aspect-[4/3] object-cover rounded-2xl"
          />
          <div>
            <h3 className="font-display font-semibold text-[26px] md:text-[30px] text-[#1A1A1A] leading-tight tracking-tight">
              {config.whyBundle.heading}
            </h3>
            <p className="font-body text-[15px] md:text-[16px] text-[#1A1A1A] leading-[1.6] mt-3">
              {config.whyBundle.body}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-[#FCF7ED]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square md:aspect-auto md:h-72 rounded-2xl bg-[#F2E76B] flex items-center justify-center">
            <span className="font-display font-bold text-[80px] md:text-[110px] text-[#FF30CC] leading-none">
              {config.stat.figure}
            </span>
          </div>
          <div>
            <h3 className="font-display font-semibold text-[26px] md:text-[30px] text-[#1A1A1A] leading-tight tracking-tight">
              {config.stat.heading}
            </h3>
            <p className="font-body text-[15px] md:text-[16px] text-[#1A1A1A] leading-[1.6] mt-3">
              {config.stat.body}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-display font-semibold text-[26px] md:text-[30px] text-[#1A1A1A] leading-tight tracking-tight">
              {config.gift.heading}
            </h3>
            <p className="font-body text-[15px] md:text-[16px] text-[#1A1A1A] leading-[1.6] mt-3">
              {config.gift.body}
            </p>
          </div>
          <img
            src={asset(config.gift.image)}
            alt="Lem gift bundle"
            className="order-1 md:order-2 w-full aspect-[4/3] object-cover rounded-2xl"
          />
        </div>
      </section>

      <CTAButtons />

      <FaqList heading={config.faqHeading} intro={config.faqIntro} faqs={config.faqs} />

      <section className="py-12 px-4">
        <h2 className="font-display font-semibold text-[28px] md:text-[36px] text-center text-[#1A1A1A] tracking-tight">
          Every Lem Ships With
        </h2>
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {config.shipsWith.map((n) => (
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

      <section className="py-10 px-4 max-w-3xl mx-auto text-center">
        <h2 className="font-display font-semibold text-[26px] md:text-[32px] text-[#1A1A1A] tracking-tight leading-tight">
          {config.closingHeading}
        </h2>
        <p className="font-body text-[15px] md:text-[16px] text-[#1A1A1A] leading-[1.6] mt-4">
          {config.closingBody}
        </p>
      </section>

      <section className="py-6 px-4 max-w-5xl mx-auto">
        <ProductCard
          packs={config.packs}
          selected={selected}
          onSelect={setSelected}
          image={config.hero.image}
          imageBadge={config.hero.imageBadge}
        />
      </section>

      <section className="py-10 px-4 bg-[#FCF7ED]">
        <div className="max-w-5xl mx-auto">
          <FeatureGrid features={config.features} />
        </div>
      </section>

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
