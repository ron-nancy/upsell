"use client";

import { useState } from "react";
import { StarFilled } from "@/components/icons";

const tabs = [
  "Powerful & Effective",
  "Cute Design",
  "Discreet",
  "Air Pulse Technology",
  "Couples Approved",
  "Beginner-Friendly",
] as const;

type Tab = (typeof tabs)[number];

const reviews = [
  {
    quote:
      "Holy mother of God! I can't put this little sucker down. I am getting multiple orgasms with this little guy, and last night, I actually squirted! I didn't even think that was a real thing…but I'm here to tell you, IT IS!",
    author: "— Kathryn R.",
  },
  {
    quote:
      "I don't even need the highest speeds — the lower ones are plenty, creating sensations that build beautifully and last long after. Lem has turned what used to be a routine moment into something electric, emotional, and deeply bonding.",
    author: "— Pebbs W.",
  },
  {
    quote:
      "It is amazing and super powerful, omg I can not get past #3 setting. It is sooo good!",
    author: "— Melissa E.",
  },
] as const;

export function JoinWomen() {
  const [activeTab, setActiveTab] = useState<Tab>("Powerful & Effective");

  return (
    <section className="bg-[#FCF7ED] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center gap-2">
          <StarFilled className="w-5 h-5 text-[#FFB74A]" />
          <StarFilled className="w-5 h-5 text-[#FFB74A]" />
          <StarFilled className="w-5 h-5 text-[#FFB74A]" />
          <StarFilled className="w-5 h-5 text-[#FFB74A]" />
          <StarFilled className="w-5 h-5 text-[#FFB74A]" />
          <span className="font-body text-sm text-[#1a1a1a] ml-2">4.7 stars</span>
        </div>

        <h2 className="mt-4 text-center font-display font-semibold text-[40px] lg:text-[56px] leading-[1.05] tracking-tight">
          <span className="text-[#FF30CC] block">Join 700,000+ Women</span>
          <span className="text-[#1A1A1A] block">Who Decided to Come First</span>
        </h2>

        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={
                  isActive
                    ? "rounded-full px-5 py-2.5 font-display font-semibold text-[14px] transition-colors bg-[#FF30CC] text-white border border-[#FF30CC]"
                    : "rounded-full px-5 py-2.5 font-display font-semibold text-[14px] transition-colors bg-transparent text-[#1a1a1a] border border-[#1a1a1a]"
                }
                aria-pressed={isActive}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-white rounded-3xl p-6 flex flex-col justify-between min-h-[280px]"
            >
              <p className="font-body text-[16px] leading-[1.6] text-[#1a1a1a]">
                {review.quote}
              </p>
              <div>
                <hr className="border-t border-[#1a1a1a] mt-6" />
                <p className="font-display font-semibold text-sm mt-3">
                  {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF30CC]" />
          <span className="w-2 h-2 rounded-full bg-[#d0c8b6]" />
        </div>
      </div>
    </section>
  );
}
