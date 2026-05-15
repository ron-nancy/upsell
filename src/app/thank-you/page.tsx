import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Order confirmed — see you soon 🍋 | Hello Nancy",
  description:
    "Your Hello Nancy order is on its way. Discreet shipping, mystery gift included, 30-day guarantee.",
};

export default function ThankYouPage() {
  return (
    <div className="bg-[#FCF7ED] min-h-screen font-body text-[#1A1A1A]">
      <div className="bg-[#00A341] text-white py-3 px-4 text-center">
        <p className="font-display font-semibold text-[14px] md:text-[15px]">
          ✓ Your order is confirmed and on its way
        </p>
      </div>

      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F2E76B] text-5xl mx-auto">
          🍋
        </span>
        <h1 className="font-display font-semibold text-[32px] md:text-[48px] text-[#1A1A1A] leading-[1.05] tracking-[-0.02em] mt-6">
          Thanks for ordering — your <span className="text-[#FF30CC]">Lem</span> is on its way!
        </h1>
        <p className="font-body text-[16px] text-[#6b6357] mt-4 max-w-2xl mx-auto leading-[1.55]">
          Check your inbox for confirmation. We ship in 1-2 business days in a plain brown box with a mystery gift inside. Every order is backed by a 30-day satisfaction guarantee.
        </p>

        <div className="mt-10 max-w-md mx-auto bg-white rounded-3xl border border-[#e6dcc8] p-6 text-left">
          <p className="font-display font-bold text-[12px] tracking-[0.18em] uppercase text-[#FF30CC]">
            What happens next
          </p>
          <ul className="mt-3 space-y-3 font-body text-[15px] text-[#1A1A1A] leading-[1.55]">
            <li className="flex gap-2">
              <span className="text-[#FF30CC] font-display font-bold">1.</span>
              <span>You&apos;ll get an email confirmation in the next 10 minutes.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#FF30CC] font-display font-bold">2.</span>
              <span>We pack your Lem in its pink box with the Pleasure Pouch and Playtime Pleasures guide.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#FF30CC] font-display font-bold">3.</span>
              <span>It ships in plain packaging within 1-2 business days. You&apos;ll get a tracking link as soon as it&apos;s in transit.</span>
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <Link
            href="/start/"
            className="inline-block bg-[#FF30CC] hover:bg-[#e62cb8] transition-colors text-white font-display font-bold text-[15px] uppercase tracking-wide py-3.5 px-8 rounded-full"
          >
            ← Back to the bundle offers
          </Link>
        </div>
      </section>

      <section className="pb-16 px-4 max-w-3xl mx-auto">
        <div className="bg-[#F2E76B] rounded-3xl p-6 md:p-8 flex items-start gap-4">
          <img
            src={asset("/images/WhatsAppImage2023-11-18at14.19.19_2acc31e8.webp")}
            alt="Lem"
            className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
          />
          <div>
            <p className="font-display font-bold text-[12px] tracking-[0.18em] uppercase text-[#FF30CC]">
              Stay zesty
            </p>
            <p className="font-display font-semibold text-[18px] md:text-[20px] text-[#1A1A1A] tracking-tight mt-1 leading-tight">
              Tag #helloNancy on Instagram for a shot at our weekly UGC giveaway.
            </p>
            <p className="font-body text-[14px] text-[#1A1A1A] mt-2 leading-[1.5]">
              Each Friday we pick one customer post — bath, bedside, or out in the wild — and ship them a free Pleasure Pouch upgrade.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-[#e6dcc8] py-6 px-4 text-center">
        <p className="font-display text-[13px] text-[#1A1A1A]">
          © 2026 Hello Nancy. All rights reserved.
        </p>
        <p className="text-[11px] text-[#6b6357] font-body mt-2">
          Need help? Email{" "}
          <a href="mailto:care@hellonancy.com" className="underline">care@hellonancy.com</a>
        </p>
      </footer>
    </div>
  );
}
