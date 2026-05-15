import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "One quick question — and we'll show you the right Lem bundle | Hello Nancy",
  description:
    "Pick the answer that fits you and we'll match you to a personalized bundle offer (up to 40% off).",
};

const options = [
  {
    n: 1,
    href: "/",
    title: "A friend or sister",
    sub: "Birthdays, Galentine's, just-because. The bestie gift everyone screenshots.",
    accent: "💛",
    image: "/images/WhatsAppImage2023-11-18at14.19.19_2acc31e8.webp",
  },
  {
    n: 2,
    href: "/2/",
    title: "A bachelorette / bridal squad",
    sub: "Bride + her two ride-or-dies. Three pink boxes, one unforgettable night.",
    accent: "👰",
    image: "/images/IMG_3324.jpg",
  },
  {
    n: 3,
    href: "/3/",
    title: "Me — but I travel a lot",
    sub: "Lem at home, Lem in the suitcase, Lem at theirs. Never compromise.",
    accent: "✈️",
    image: "/images/IMG_3325.jpg",
  },
  {
    n: 4,
    href: "/4/",
    title: "My long-distance partner",
    sub: "His Lem. Her Lem. Same time zone, different continents.",
    accent: "💕",
    image: "/images/IMG_3322.jpg",
  },
  {
    n: 5,
    href: "/5/",
    title: "Me — for every room of my life",
    sub: "Bedside, bathroom, weekender. Self-care without the fetch.",
    accent: "🛁",
    image: "/images/IMG_3326.jpg",
  },
];

export default function StartQuizPage() {
  return (
    <div className="bg-[#FCF7ED] min-h-screen font-body text-[#1A1A1A]">
      <div className="bg-[#E4F260] text-[#1A1A1A] py-3 px-4 text-center">
        <p className="font-display font-semibold text-[14px] md:text-[15px]">
          ✓ Your order and payment were successful! Expect an email confirmation in 10 minutes
        </p>
      </div>

      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <p className="font-display font-bold text-[12px] tracking-[0.2em] uppercase text-[#FF30CC]">
          One quick question
        </p>
        <h1 className="font-display font-semibold text-[32px] md:text-[44px] text-[#1A1A1A] leading-[1.05] tracking-[-0.02em] mt-3">
          Who&apos;s getting this <span className="text-[#FF30CC]">Lem</span>?
        </h1>
        <p className="font-body text-[16px] text-[#6b6357] mt-4 max-w-2xl mx-auto leading-[1.55]">
          Pick the answer that fits you best and we&apos;ll match you to a one-time bundle offer — up to 40% off. Takes one tap.
        </p>
      </section>

      <section className="px-4 pb-16 max-w-3xl mx-auto grid grid-cols-1 gap-4">
        {options.map((o) => (
          <Link
            key={o.n}
            href={o.href}
            className="group bg-white rounded-3xl border border-[#e6dcc8] overflow-hidden hover:border-[#FF30CC] hover:shadow-md transition-all flex items-center gap-4 p-4"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-[#F2E76B] flex-shrink-0">
              <img
                src={asset(o.image)}
                alt={o.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xl" aria-hidden>{o.accent}</span>
                <h2 className="font-display font-semibold text-[18px] md:text-[20px] text-[#1A1A1A] tracking-tight leading-tight">
                  {o.title}
                </h2>
              </div>
              <p className="font-body text-[14px] md:text-[15px] text-[#6b6357] leading-[1.5] mt-1.5">
                {o.sub}
              </p>
            </div>
            <span
              aria-hidden
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-[#FF30CC] text-white text-lg font-display font-bold flex-shrink-0 group-hover:translate-x-1 transition-transform"
            >
              →
            </span>
          </Link>
        ))}
      </section>

      <section className="pb-16 px-4 max-w-2xl mx-auto text-center">
        <p className="font-body text-[14px] text-[#6b6357]">
          Not sure?{" "}
          <Link href="/" className="text-[#FF30CC] underline font-display font-semibold">
            Start with the bestie bundle
          </Link>{" "}
          — it&apos;s our most popular pick.
        </p>
      </section>

      <footer className="bg-white border-t border-[#e6dcc8] py-6 px-4 text-center">
        <p className="font-display text-[13px] text-[#1A1A1A]">
          © 2026 Hello Nancy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
