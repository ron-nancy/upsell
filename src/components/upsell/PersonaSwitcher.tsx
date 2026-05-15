import Link from "next/link";
import { asset } from "@/lib/asset";

type Persona = {
  step: number;
  href: string;
  title: string;
  blurb: string;
  emoji: string;
  image: string;
};

const PERSONAS: Persona[] = [
  {
    step: 1,
    href: "/",
    title: "The Bestie Gifter",
    blurb: "Friend / sister gift",
    emoji: "💛",
    image: "/images/WhatsAppImage2023-11-18at14.19.19_2acc31e8.webp",
  },
  {
    step: 2,
    href: "/2/",
    title: "Hen-Party Squad MOH",
    blurb: "Bridesmaid bundle",
    emoji: "👰",
    image: "/images/IMG_3324.jpg",
  },
  {
    step: 3,
    href: "/3/",
    title: "Frequent-Flyer Pack",
    blurb: "Travel & multi-home",
    emoji: "✈️",
    image: "/images/IMG_3325.jpg",
  },
  {
    step: 4,
    href: "/4/",
    title: "Long-Distance Lovers",
    blurb: "His + Her, miles apart",
    emoji: "💕",
    image: "/images/IMG_3322.jpg",
  },
  {
    step: 5,
    href: "/5/",
    title: "Self-Care Stash",
    blurb: "Bedside + bath + travel",
    emoji: "🛁",
    image: "/images/IMG_3326.jpg",
  },
];

/**
 * Bottom-of-page persona switcher.
 * Shows all 5 offers with the current one highlighted; lets the user
 * hop sideways to ANY other persona page without going back to /start/.
 */
export function PersonaSwitcher({ currentStep }: { currentStep: number }) {
  return (
    <section className="bg-white border-t border-[#e6dcc8] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="font-display font-bold text-[12px] tracking-[0.18em] uppercase text-[#FF30CC]">
            Browse all 5 bundle offers
          </p>
          <h2 className="font-display font-semibold text-[22px] md:text-[28px] text-[#1A1A1A] tracking-tight mt-2 leading-tight">
            Not the right offer? Hop to any of the others.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {PERSONAS.map((p) => {
            const isCurrent = p.step === currentStep;
            return (
              <Link
                key={p.step}
                href={p.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`group rounded-2xl overflow-hidden border-2 transition-all flex flex-col ${
                  isCurrent
                    ? "border-[#FF30CC] bg-[#FFF0FA] pointer-events-none"
                    : "border-[#e6dcc8] bg-white hover:border-[#FF30CC] hover:shadow-md"
                }`}
              >
                <div className="aspect-square bg-[#F2E76B] overflow-hidden">
                  <img
                    src={asset(p.image)}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 flex-1 flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base" aria-hidden>{p.emoji}</span>
                    <span className="font-display font-bold text-[10px] tracking-[0.15em] uppercase text-[#FF30CC]">
                      #{p.step}{isCurrent ? " — you are here" : ""}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-[14px] md:text-[15px] text-[#1A1A1A] tracking-tight leading-tight mt-1">
                    {p.title}
                  </h3>
                  <p className="font-body text-[12px] text-[#6b6357] leading-[1.4] mt-1">
                    {p.blurb}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/start/"
            className="inline-block font-display font-semibold text-[14px] text-[#1A1A1A] underline hover:text-[#FF30CC] transition-colors"
          >
            ← Back to the quiz
          </Link>
        </div>
      </div>
    </section>
  );
}
