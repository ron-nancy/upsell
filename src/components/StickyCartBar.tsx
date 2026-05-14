"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

export function StickyCartBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      role="region"
      aria-label="Add to cart"
      aria-hidden={!visible}
      className="fixed bottom-4 right-4 left-4 md:left-auto md:w-[360px] rounded-full bg-white shadow-[0_5px_30px_rgba(26,26,26,0.1)] p-2 pl-3"
      style={{
        zIndex: 60,
        transform: visible ? "translateY(0)" : "translateY(120%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.4s ease, opacity 0.3s",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/WhatsAppImage2023-11-18at14.19.19_2acc31e8.webp")}
          alt="Lem Clitoral Massager"
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex min-w-0 flex-col leading-tight">
          <span className="font-display text-[15px] font-semibold text-[#1a1a1a] truncate">
            Lem Clitoral Massager
          </span>
          <span className="flex items-baseline gap-2">
            <span className="font-display text-[14px] font-bold text-[#FF30CC]">
              $89.00 USD
            </span>
            <span className="font-display text-[13px] text-[#6b6357] line-through">
              $159.00 USD
            </span>
          </span>
        </div>
        <button
          type="button"
          className="font-display ml-auto rounded-full bg-[#FF30CC] px-5 py-3 text-[13px] font-bold uppercase text-white whitespace-nowrap"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
