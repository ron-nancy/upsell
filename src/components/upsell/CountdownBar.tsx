"use client";

import { useEffect, useState } from "react";

/**
 * 5-minute offer countdown.
 * Deadline is stored in sessionStorage per persona-step so the timer
 * persists across reloads within the same session but starts fresh
 * on a new session.
 *
 * When the timer hits 0:00 the bar swaps to an "Offer expired" state.
 */
export function CountdownBar({
  step,
  durationSeconds = 300,
}: {
  step: number;
  durationSeconds?: number;
}) {
  const key = `lem-upsell-deadline-${step}`;
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    let deadline: number;
    const stored = typeof window !== "undefined" ? sessionStorage.getItem(key) : null;
    if (stored && Number(stored) > Date.now()) {
      deadline = Number(stored);
    } else {
      deadline = Date.now() + durationSeconds * 1000;
      try {
        sessionStorage.setItem(key, String(deadline));
      } catch {
        /* private mode etc — ignore */
      }
    }

    const tick = () => {
      const ms = deadline - Date.now();
      setRemaining(Math.max(0, Math.floor(ms / 1000)));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [key, durationSeconds]);

  if (remaining === null) {
    // SSR / first paint — render an invisible placeholder to keep layout stable
    return (
      <div
        className="bg-[#FF30CC] text-white py-2.5 px-4 text-center"
        aria-hidden
      >
        <p className="font-display font-semibold text-[13px] md:text-[14px] tracking-tight">
          &nbsp;
        </p>
      </div>
    );
  }

  if (remaining === 0) {
    return (
      <div className="bg-[#1A1A1A] text-white py-2.5 px-4 text-center">
        <p className="font-display font-semibold text-[13px] md:text-[14px] tracking-tight">
          ⏱️ This bundle offer has expired — the cart will return to standard pricing on refresh.
        </p>
      </div>
    );
  }

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-[#FF30CC] text-white py-2.5 px-4 text-center">
      <p className="font-display font-semibold text-[13px] md:text-[14px] tracking-tight">
        ⏱️ This bundle offer expires in{" "}
        <span className="font-mono tabular-nums">
          {pad(minutes)}:{pad(seconds)}
        </span>{" "}
        — pricing returns to standard after.
      </p>
    </div>
  );
}
