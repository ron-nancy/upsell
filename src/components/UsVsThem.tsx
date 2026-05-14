"use client";

import { useState } from "react";
import { XIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type Tab = "suction" | "vibrators";

const cellBase = "p-3 text-center text-[14px] border-r border-[#e6dcc8] last:border-r-0";
const lemColBg = "bg-[#FFE0F5]";
const altRowBg = "bg-[#fbf5e0]";

function LemonWin() {
  return <span className="text-xl" aria-label="yes">🍋</span>;
}

function LossDash() {
  return (
    <span className="inline-flex items-center justify-center text-[#9a9082]" aria-label="no">
      <XIcon className="w-4 h-4" />
    </span>
  );
}

function SuctionTable() {
  return (
    <div className="mt-10 rounded-3xl overflow-hidden border border-[#e6dcc8]">
      <div className="bg-[#E4F260] text-[#1A1A1A] text-center py-3 font-body text-[16px]">
        Verified comparison based on real customer reviews and product specifications.
      </div>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-6 min-w-[760px]">
          {/* Header row */}
          <div className={cn(cellBase, "bg-white")} />
          <div
            className={cn(
              "border-r border-[#e6dcc8] last:border-r-0",
              "bg-[#FF30CC] text-white font-display font-bold uppercase text-sm py-3 text-center",
            )}
          >
            LEM by Nancy
          </div>
          <div className="bg-white text-[#1a1a1a] font-display font-bold uppercase text-sm py-3 text-center border-r border-[#e6dcc8]">
            SATISFYER
          </div>
          <div className="bg-white text-[#1a1a1a] font-display font-bold uppercase text-sm py-3 text-center border-r border-[#e6dcc8]">
            WOMANIZER
          </div>
          <div className="bg-white text-[#1a1a1a] font-display font-bold uppercase text-sm py-3 text-center border-r border-[#e6dcc8]">
            LELO
          </div>
          <div className="bg-white text-[#1a1a1a] font-display font-bold uppercase text-sm py-3 text-center">
            ROSE TOY
          </div>

          {/* Row 1: Trustpilot Score (white) */}
          <div className={cn(cellBase, "bg-white text-left font-body")}>Trustpilot Score</div>
          <div className={cn(cellBase, lemColBg)}>
            <strong className="text-[#FF30CC]">4.7</strong>
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <div>1.9</div>
            <div className="text-xs text-[#F83A3A]">(Poor)</div>
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <div>3.2</div>
            <div className="text-xs text-[#9a9082]">(Average)</div>
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <div>3.7</div>
            <div className="text-xs text-[#9a9082]">(Average)</div>
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <div>Inconsistent</div>
            <div className="text-xs text-[#9a9082]">(N/A)</div>
          </div>

          {/* Row 2: Discreet Design (alt) */}
          <div className={cn(cellBase, altRowBg, "text-left font-body")}>Discreet Design</div>
          <div className={cn(cellBase, lemColBg)}>
            <LemonWin />
          </div>
          <div className={cn(cellBase, altRowBg)}>
            <LossDash />
          </div>
          <div className={cn(cellBase, altRowBg)}>
            <LossDash />
          </div>
          <div className={cn(cellBase, altRowBg)}>
            <LossDash />
          </div>
          <div className={cn(cellBase, altRowBg)}>
            <LossDash />
          </div>

          {/* Row 3: Beginner-Friendly */}
          <div className={cn(cellBase, "bg-white text-left font-body")}>Beginner-Friendly</div>
          <div className={cn(cellBase, lemColBg)}>
            <LemonWin />
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <LossDash />
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <LossDash />
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <LossDash />
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <LossDash />
          </div>

          {/* Row 4: Noise Level (alt) */}
          <div className={cn(cellBase, altRowBg, "text-left font-body")}>Noise Level</div>
          <div className={cn(cellBase, lemColBg)}>
            <strong>Whisper-Quiet</strong>
            <br />
            <span className="text-xs">(Roommate-Proof)</span>
          </div>
          <div className={cn(cellBase, altRowBg)}>Quiet</div>
          <div className={cn(cellBase, altRowBg)}>Quiet</div>
          <div className={cn(cellBase, altRowBg)}>Quiet</div>
          <div className={cn(cellBase, altRowBg)}>
            <strong className="text-[#F83A3A]">Loud</strong>
          </div>

          {/* Row 5: Cute Name */}
          <div className={cn(cellBase, "bg-white text-left font-body")}>Cute Name</div>
          <div className={cn(cellBase, lemColBg)}>
            <LemonWin />
          </div>
          <div className={cn(cellBase, "bg-white")}>Terrible Name</div>
          <div className={cn(cellBase, "bg-white")}>Terrible Name</div>
          <div className={cn(cellBase, "bg-white")}>Neutral</div>
          <div className={cn(cellBase, "bg-white")}>Neutral</div>

          {/* Row 6: Discreet Packaging (alt) */}
          <div className={cn(cellBase, altRowBg, "text-left font-body")}>Discreet Packaging</div>
          <div className={cn(cellBase, lemColBg)}>
            <LemonWin />
          </div>
          <div className={cn(cellBase, altRowBg)}>
            <LossDash />
          </div>
          <div className={cn(cellBase, altRowBg)}>
            <LossDash />
          </div>
          <div className={cn(cellBase, altRowBg)}>
            <LossDash />
          </div>
          <div className={cn(cellBase, altRowBg)}>
            <LossDash />
          </div>

          {/* Row 7: Free Shipping + Mystery Gift */}
          <div className={cn(cellBase, "bg-white text-left font-body")}>
            Free Shipping + Mystery Gift
          </div>
          <div className={cn(cellBase, lemColBg)}>
            <LemonWin />
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <LossDash />
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <LossDash />
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <LossDash />
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <LossDash />
          </div>
        </div>
      </div>
    </div>
  );
}

function VibratorsTable() {
  return (
    <div className="mt-10 rounded-3xl overflow-hidden border border-[#e6dcc8]">
      <div className="bg-[#E4F260] text-[#1A1A1A] text-center py-3 font-body text-[16px]">
        Verified comparison based on real customer reviews and product specifications.
      </div>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] min-w-[600px]">
          {/* Header */}
          <div className="bg-white border-r border-[#e6dcc8]" />
          <div className="bg-[#FF30CC] text-white font-display font-bold uppercase text-sm py-3 text-center border-r border-[#e6dcc8]">
            LEM BY NANCY
          </div>
          <div className="bg-white text-[#1a1a1a] font-display font-bold uppercase text-sm py-3 text-center">
            TRADITIONAL VIBRATORS
          </div>

          {/* Row 1: Stimulation (white) */}
          <div className={cn(cellBase, "bg-white text-left font-body")}>Stimulation</div>
          <div className={cn(cellBase, lemColBg)}>Air Pulse Technology</div>
          <div className={cn(cellBase, "bg-white")}>Vibration Only</div>

          {/* Row 2: Noise Level (alt) */}
          <div className={cn(cellBase, altRowBg, "text-left font-body")}>Noise Level</div>
          <div className={cn(cellBase, lemColBg)}>
            <strong>Whisper-Quiet</strong> (Roommate-Proof)
          </div>
          <div className={cn(cellBase, altRowBg)}>
            <strong className="text-[#F83A3A]">Loud &amp; Buzzy</strong>
          </div>

          {/* Row 3: Discreet Design */}
          <div className={cn(cellBase, "bg-white text-left font-body")}>Discreet Design</div>
          <div className={cn(cellBase, lemColBg)}>
            <LemonWin />
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <LossDash />
          </div>

          {/* Row 4: Beginner-Friendly (alt) */}
          <div className={cn(cellBase, altRowBg, "text-left font-body")}>Beginner-Friendly</div>
          <div className={cn(cellBase, lemColBg)}>
            <LemonWin />
          </div>
          <div className={cn(cellBase, altRowBg)}>
            <LossDash />
          </div>

          {/* Row 5: Discreet Packaging */}
          <div className={cn(cellBase, "bg-white text-left font-body")}>Discreet Packaging</div>
          <div className={cn(cellBase, lemColBg)}>
            <LemonWin />
          </div>
          <div className={cn(cellBase, "bg-white")}>
            <LossDash />
          </div>

          {/* Row 6: Orgasm Quality (alt) */}
          <div className={cn(cellBase, altRowBg, "text-left font-body")}>Orgasm Quality</div>
          <div className={cn(cellBase, lemColBg)}>Deeper, more intense orgasms</div>
          <div className={cn(cellBase, altRowBg)}>Less targeted</div>

          {/* Row 7: Sensation Type */}
          <div className={cn(cellBase, "bg-white text-left font-body")}>Sensation Type</div>
          <div className={cn(cellBase, lemColBg)}>Touch-Free Air Pulses</div>
          <div className={cn(cellBase, "bg-white")}>Direct Contact Vibration</div>
        </div>
      </div>
    </div>
  );
}

export function UsVsThem() {
  const [tab, setTab] = useState<Tab>("suction");

  return (
    <section className="bg-[#FCF7ED] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display font-semibold text-[40px] lg:text-[56px] text-[#FF30CC] text-center leading-tight">
          US vs Them
        </h2>
        <p className="font-body text-[18px] text-[#1a1a1a] text-center mt-3">
          Not overhyped or overpriced. Just the best vibes one can get.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex bg-white rounded-full p-1 border border-[#e6dcc8]">
            <button
              type="button"
              onClick={() => setTab("suction")}
              className={cn(
                "rounded-full px-5 py-2 font-display font-semibold text-[14px] transition-colors",
                tab === "suction"
                  ? "bg-[#FF30CC] text-white"
                  : "bg-transparent text-[#1a1a1a]",
              )}
            >
              vs Other Suction Toys
            </button>
            <button
              type="button"
              onClick={() => setTab("vibrators")}
              className={cn(
                "rounded-full px-5 py-2 font-display font-semibold text-[14px] transition-colors",
                tab === "vibrators"
                  ? "bg-[#FF30CC] text-white"
                  : "bg-transparent text-[#1a1a1a]",
              )}
            >
              vs Traditional Vibrators
            </button>
          </div>
        </div>

        {tab === "suction" ? <SuctionTable /> : <VibratorsTable />}

        <div className="mt-10 text-center">
          <p className="font-body text-[16px] text-[#1a1a1a]">
            Experience the Lem difference with our 30-day satisfaction guarantee
          </p>
          <button
            type="button"
            className="mt-4 bg-[#FF30CC] text-white font-display uppercase text-base font-bold py-4 px-10 rounded-full hover:bg-[#e62cb8] transition-colors"
          >
            ADD TO CART - $89
          </button>
        </div>
      </div>
    </section>
  );
}
