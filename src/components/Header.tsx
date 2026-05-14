import { MenuIcon, CartIcon, ChevronDown } from "@/components/icons";
import { asset } from "@/lib/asset";

export function Header() {
  return (
    <header
      className="sticky z-40 w-full bg-[#F3DCE2]"
      style={{ top: 54, minHeight: 103 }}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        {/* LEFT: hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          className="flex items-center justify-center text-[#FF30CC]"
        >
          <MenuIcon width={28} height={28} />
        </button>

        {/* CENTER: logo */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/Nancy_Logo_Pink.png")}
            alt="Nancy"
            width={180}
            height={56}
            className="h-10 md:h-[52px] w-auto"
          />
        </div>

        {/* RIGHT: locale + cart */}
        <div className="font-display flex items-center gap-5 text-[16px] font-medium text-[#FF30CC]">
          <button
            type="button"
            aria-label="Select currency"
            className="hidden md:inline-flex items-center gap-1"
          >
            <span aria-hidden="true">🇺🇸</span>
            <span>USD</span>
            <ChevronDown width={14} height={14} />
          </button>
          <button
            type="button"
            aria-label="Select language"
            className="hidden md:inline-flex items-center gap-1"
          >
            <span>English</span>
            <ChevronDown width={14} height={14} />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            className="flex items-center justify-center text-[#FF30CC]"
          >
            <CartIcon width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
