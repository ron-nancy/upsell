import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Lem Bundle Upsells — Hello Nancy",
  description:
    "Five tailored Lem-bundle special offers — one for every kind of buyer. Pick the persona that fits and unlock up to 40% off.",
};

const personas = [
  {
    n: 1,
    href: "/",
    title: "The Bestie Gifter",
    sub: "One for me. One for her. The friendship gift that keeps coming up at brunch.",
    accent: "💛",
    image: "/images/WhatsAppImage2023-11-18at14.19.19_2acc31e8.webp",
  },
  {
    n: 2,
    href: "/2/",
    title: "The Hen-Party Squad MOH",
    sub: "Three Lems in three pink boxes — the bachelorette gift everybody screenshots.",
    accent: "👰",
    image: "/images/IMG_3324.jpg",
  },
  {
    n: 3,
    href: "/3/",
    title: "The Frequent-Flyer Multi-Lifer",
    sub: "Lem at home, Lem in the suitcase, Lem at theirs. Stop pack-and-unpacking.",
    accent: "✈️",
    image: "/images/IMG_3325.jpg",
  },
  {
    n: 4,
    href: "/4/",
    title: "The Long-Distance Lover",
    sub: "His Lem. Her Lem. Same time zone, different continents.",
    accent: "💕",
    image: "/images/IMG_3322.jpg",
  },
  {
    n: 5,
    href: "/5/",
    title: "The Self-Care Maximalist",
    sub: "Bedside, bathroom, weekender. Three rooms, zero compromises.",
    accent: "🛁",
    image: "/images/IMG_3326.jpg",
  },
];

export default function UpsellHubPage() {
  return (
    <div className="bg-[#FCF7ED] min-h-screen font-body text-[#1A1A1A]">
      <div className="bg-[#E4F260] text-[#1A1A1A] py-3 px-4 text-center">
        <p className="font-display font-semibold text-[14px] md:text-[15px]">
          ✓ Your order and payment were successful! Expect an email confirmation in 10 minutes
        </p>
      </div>
      <section className="py-12 px-4 max-w-5xl mx-auto text-center">
        <h1 className="font-display font-semibold text-[32px] md:text-[48px] text-[#1A1A1A] leading-[1.05] tracking-[-0.02em]">
          Pick the <span className="text-[#FF30CC]">Lem Bundle</span> that fits your life
        </h1>
        <p className="font-body text-[16px] text-[#6b6357] mt-4 max-w-2xl mx-auto leading-[1.55]">
          Five tailored special offers — one for every kind of Lem fan. Save up to 40% on bundles of 2 or 3. Pick the persona that fits and we&apos;ll do the math for you.
        </p>
      </section>

      <section className="px-4 pb-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {personas.map((p) => (
          <Link
            key={p.n}
            href={p.href}
            className="group bg-white rounded-3xl border border-[#e6dcc8] overflow-hidden hover:border-[#FF30CC]/60 hover:shadow-lg transition-all"
          >
            <div className="aspect-[16/9] bg-[#F2E76B] overflow-hidden">
              <img
                src={asset(p.image)}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-display font-bold text-[10px] tracking-[0.15em] uppercase text-[#FF30CC]">
                  Persona #{p.n}
                </span>
                <span className="text-base">{p.accent}</span>
              </div>
              <h2 className="font-display font-semibold text-[22px] md:text-[24px] text-[#1A1A1A] tracking-tight leading-tight">
                {p.title}
              </h2>
              <p className="font-body text-[15px] text-[#1A1A1A] leading-[1.55] mt-2">
                {p.sub}
              </p>
              <span className="inline-block mt-4 font-display font-semibold text-[13px] text-[#FF30CC] group-hover:underline">
                See the offer →
              </span>
            </div>
          </Link>
        ))}
      </section>

      <footer className="bg-white border-t border-[#e6dcc8] py-6 px-4 text-center">
        <p className="font-display text-[13px] text-[#1A1A1A]">
          © 2026 Hello Nancy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
