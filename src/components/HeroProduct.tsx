"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, StarFilled, ZoomIn } from "@/components/icons";
import { asset } from "@/lib/asset";

const SLIDES: { src: string; alt: string }[] = [
  {
    src: "/images/WhatsAppImage2023-11-18at14.19.19_2acc31e8.webp",
    alt: "Lem clitoral massager — yellow lemon on lemons",
  },
  { src: "/images/IMG_3322.jpg", alt: "Lem clitoral massager — lifestyle" },
  {
    src: "/images/Untitled_Capture0776_2_4a5f299c-2c95-4dba-9f28-ab76844a5f11.webp",
    alt: "Lem clitoral massager — product detail",
  },
  { src: "/images/IMG_3323.jpg", alt: "Lem clitoral massager — packaging" },
  { src: "/images/IMG_3325.jpg", alt: "Lem clitoral massager — close-up" },
  { src: "/images/IMG_3326.jpg", alt: "Lem clitoral massager — in hand" },
  { src: "/images/IMG_3324.jpg", alt: "Lem clitoral massager — full kit" },
];

type PersonaKey = "First-Timers" | "Experienced Users" | "Couples" | "Privacy Seekers";

const PERSONAS: { key: PersonaKey; quote: string; byline: string }[] = [
  {
    key: "First-Timers",
    quote:
      "“This little sucker packs a punch!! I am fairly new to the world of clitoral stimulators, but was blown away by how quickly I was able to orgasm with this new toy!”",
    byline: "— Jenni, 22",
  },
  {
    key: "Experienced Users",
    quote:
      "“Holy mother of God! I can't put this little sucker down. I am getting multiple orgasms with this little guy, and last night, I actually squirted! I didn't even think that was a real thing…but I'm here to tell you, IT IS!”",
    byline: "— Kathryn, 30",
  },
  {
    key: "Couples",
    quote:
      "“Outstanding product. My wife loves it. I love it for her. Our mutual satisfaction in our sex life has improved with Nancy. We had a great sex life before, this is the next step up for couples.”",
    byline: "— Bradley, 32",
  },
  {
    key: "Privacy Seekers",
    quote:
      "“Discreet enough that your kids won't know what they're playing with, and your mother-in-law won't know what they're playing with either. Worth every penny!”",
    byline: "— Ashley, 35",
  },
];

type TabKey =
  | "Doctor Review"
  | "How to Use"
  | "Specifications"
  | "Intensity Levels"
  | "Discreetness"
  | "Couples Play";

const TABS: TabKey[] = [
  "Doctor Review",
  "How to Use",
  "Specifications",
  "Intensity Levels",
  "Discreetness",
  "Couples Play",
];

const FEATURE_PILLS: { emoji: string; label: string }[] = [
  { emoji: "🌀", label: "12 unique intensities and patterns" },
  { emoji: "🤫", label: "Quiet and discreet (Shhh!)" },
  { emoji: "💛", label: "Medical-grade silicone" },
  { emoji: "💦", label: "Waterproof (USB-C & Magnetic Compatible)" },
];

const PRESS_LOGOS: { src: string; alt: string; height: string }[] = [
  { src: "/images/The_Guardian_2018_svg.png", alt: "The Guardian", height: "h-6" },
  {
    src: "/images/vice-logo_6cc50991-ceed-4fc6-8e84-7bf8b7252af9.svg",
    alt: "Vice",
    height: "h-5",
  },
  { src: "/images/tatler-logo.png", alt: "Tatler", height: "h-5" },
  { src: "/images/nbc-logo.svg", alt: "NBC", height: "h-6" },
  { src: "/images/cbs-logo.svg", alt: "CBS", height: "h-5" },
];

const TRUST_ITEMS: { icon: string; label: string }[] = [
  { icon: "/images/airplane.svg", label: "Discreet shipping" },
  { icon: "/images/security_2.svg", label: "30-day satisfaction guarantee" },
  { icon: "/images/Status.png", label: "Limited stock" },
];

export function HeroProduct() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [persona, setPersona] = useState<PersonaKey>("First-Timers");
  const [activeTab, setActiveTab] = useState<TabKey>("Doctor Review");

  const goPrev = () =>
    setGalleryIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => setGalleryIndex((i) => (i + 1) % SLIDES.length);

  const activePersona =
    PERSONAS.find((p) => p.key === persona) ?? PERSONAS[0];

  return (
    <section className="bg-[#FCF7ED]">
      <div className="mx-auto max-w-[1280px] px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* LEFT — Image Gallery */}
          <div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F7E16B]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(SLIDES[galleryIndex].src)}
                alt={SLIDES[galleryIndex].alt}
                className="h-full w-full object-cover"
              />

              <button
                type="button"
                aria-label="Previous image"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-[#1a1a1a]"
              >
                <ChevronLeft width={20} height={20} />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-[#1a1a1a]"
              >
                <ChevronRight width={20} height={20} />
              </button>

              <button
                type="button"
                aria-label="Zoom in"
                className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-[#1a1a1a]"
              >
                <ZoomIn width={24} height={24} />
              </button>
            </div>

            {/* Pagination dots */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setGalleryIndex(i)}
                  className={`h-2 w-2 rounded-full ${
                    i === galleryIndex ? "bg-[#FF30CC]" : "bg-[#ddd]"
                  }`}
                />
              ))}
            </div>

            {/* Thumbnail strip */}
            <div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Show image ${i + 1}`}
                  onClick={() => setGalleryIndex(i)}
                  className={`shrink-0 overflow-hidden rounded-lg ${
                    i === galleryIndex ? "ring-2 ring-[#FF30CC]" : ""
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(slide.src)}
                    alt={slide.alt}
                    width={80}
                    height={80}
                    className="h-20 w-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Product info */}
          <div>
            {/* Rating row */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarFilled
                    key={i}
                    width={18}
                    height={18}
                    className="text-[#FFB74A]"
                  />
                ))}
              </div>
              <span className="font-display text-base font-medium text-[#1a1a1a]">
                4.8 (14,881 reviews)
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[40px] lg:text-[48px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] mt-4">
              Lem Clitoral Massager
            </h1>

            {/* Save line */}
            <p className="font-body text-base text-[#1a1a1a] mt-4">Save $70.00</p>

            {/* Price row */}
            <div className="flex items-baseline mt-1">
              <span className="font-display text-[32px] font-bold text-[#1a1a1a]">
                $89.00 USD
              </span>
              <span className="line-through font-display text-base text-[#6b6357] ml-3">
                $159.00 USD
              </span>
            </div>

            {/* Shipping line */}
            <p className="font-body text-[15px] text-[#6b6357] mt-3">
              No hidden tax or customs fees — what you see is what you pay.{" "}
              <span className="underline">Shipping calculated</span> at checkout.
            </p>

            {/* AS SEEN IN */}
            <p className="font-display text-[13px] tracking-[0.15em] font-semibold uppercase text-[#1a1a1a] mt-6">
              As Seen In
            </p>
            <div className="mt-3 flex gap-6 items-center flex-wrap">
              {PRESS_LOGOS.map((logo) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={logo.src}
                  src={asset(logo.src)}
                  alt={logo.alt}
                  className={`${logo.height} w-auto object-contain`}
                />
              ))}
            </div>

            {/* Feature pills */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
              {FEATURE_PILLS.map((pill) => (
                <div
                  key={pill.label}
                  className="rounded-2xl border border-[#e6dcc8] p-3 text-center"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {pill.emoji}
                  </span>
                  <p className="font-display text-[14px] font-medium leading-tight mt-2 text-[#1a1a1a]">
                    {pill.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="font-body text-base leading-[1.6] text-[#1a1a1a] mt-6">
              Meet Lem - your zesty new playmate for intimate moments. This
              clitoral massager is perfect for those exploring air suction bliss
              for the first time, promising longer, more powerful and deeply
              satisfying orgasms. This happy little lemon combines pleasure with
              discretion. Featuring 12 unique intensities and patterns, Lem is an
              ideal choice for those looking for a fresh twist.
            </p>

            {/* Coupon box */}
            <div className="border-2 border-dashed border-[#1A1A1A] rounded-xl p-3 text-center mt-6">
              <span className="font-display font-semibold text-base text-[#1a1a1a]">
                Save 25% w/ code{" "}
                <span className="text-[#FF30CC]">&ldquo;LEM25&rdquo;</span>
              </span>
            </div>

            {/* ADD TO CART */}
            <button
              type="button"
              className="w-full bg-[#FF30CC] text-white font-display uppercase text-base font-bold py-4 rounded-full hover:bg-[#e62cb8] transition-colors mt-4"
            >
              ADD TO CART -{" "}
              <s className="opacity-70">$159</s> $89
            </button>

            {/* Buy with Shop */}
            <button
              type="button"
              className="w-full bg-[#5A31F4] text-white font-display text-[15px] py-3 rounded-full mt-2"
            >
              Buy with shop
            </button>

            {/* MORE PAYMENT OPTIONS */}
            <div className="text-center mt-2">
              <button
                type="button"
                className="font-display text-[12px] tracking-[0.15em] font-semibold uppercase underline text-[#1a1a1a]"
              >
                MORE PAYMENT OPTIONS
              </button>
            </div>

            {/* WHAT CUSTOMERS SAY */}
            <div className="mt-8 text-center">
              <p className="font-display text-[13px] tracking-[0.15em] font-semibold uppercase text-[#1a1a1a]">
                What Customers Say
              </p>
              <div className="mt-4">
                <p className="font-body italic text-[18px] leading-[1.5] text-[#1a1a1a]">
                  {activePersona.quote}
                </p>
                <p className="mt-2">
                  <span className="text-[#FF30CC] font-display font-bold">
                    {activePersona.byline}
                  </span>
                </p>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap justify-center">
                {PERSONAS.map((p) => {
                  const isActive = p.key === persona;
                  return (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => setPersona(p.key)}
                      className={`rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-[#FF30CC] text-white border border-[#FF30CC]"
                          : "bg-transparent text-[#1a1a1a] border border-[#FF30CC]"
                      }`}
                    >
                      {p.key}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detail tabs */}
            <div className="mt-8 flex flex-wrap gap-2">
              {TABS.map((tab) => {
                const isActive = tab === activeTab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={
                      isActive
                        ? "rounded-xl bg-white text-[#FF30CC] font-display text-sm font-medium px-3 py-2 border-b-[3px] border-[#FF30CC]"
                        : "rounded-xl border border-[#e6dcc8] bg-white text-[#1a1a1a] font-display text-sm font-medium px-3 py-2"
                    }
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#e6dcc8] mt-4">
              {activeTab === "Doctor Review" ? (
                <div className="flex gap-4 items-start">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset("/images/Image_Dr._Angela_Wright.png")}
                    alt="Dr. Angela Wright"
                    width={80}
                    height={80}
                    className="rounded-full shrink-0"
                  />
                  <div className="flex-1">
                    <p className="font-body italic text-[18px] leading-[1.5] text-[#1a1a1a]">
                      &ldquo;Lem is a thoughtfully designed clitoral massager that
                      offers a gentle introduction to air-suction stimulation.
                      Its medical-grade silicone, varied intensity settings, and
                      discreet form factor make it a strong choice for anyone
                      exploring pleasure-led wellness.&rdquo;
                    </p>
                    <div className="border-t border-[#e6dcc8] my-4" />
                    <p className="font-display font-semibold text-base text-[#FF30CC]">
                      Dr. Angela Wright
                    </p>
                    <p className="font-body text-sm text-[#6b6357]">
                      GP, Clinical Sexologist, and BMS Registered Menopause
                      Specialist
                    </p>
                  </div>
                </div>
              ) : (
                <p className="font-body text-base text-[#1a1a1a]">
                  More detail about {activeTab} coming soon.
                </p>
              )}
            </div>

            {/* Trust icon row */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {TRUST_ITEMS.map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(item.icon)}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <p className="font-display text-[13px] font-medium text-[#1a1a1a] mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
