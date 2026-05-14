export function SaleBar() {
  return (
    <div
      className="sticky top-0 z-50 w-full bg-[#E4F260] text-[#1A1A1A]"
      style={{ minHeight: 54 }}
      role="region"
      aria-label="Sale announcement"
    >
      <div className="overflow-x-auto md:overflow-visible py-4 px-6 text-center font-body text-[14px] md:text-[18px] font-normal whitespace-nowrap md:whitespace-normal">
        Mother&apos;s Day Sale {"✨"} Final minutes to save up to 50% off on last few items {"✨"} No coupon needed.
      </div>
    </div>
  );
}
