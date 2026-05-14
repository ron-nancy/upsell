function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function WarningBanner() {
  return (
    <section className="py-6 px-6 max-w-7xl mx-auto">
      <div className="bg-[#E8499C] rounded-3xl p-6 md:p-8 text-white grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#E4F260] text-[#1A1A1A] rounded-full px-4 py-2 font-display font-semibold text-base">
            <ShieldIcon className="w-[18px] h-[18px]" />
            Only Available Here
          </div>
        </div>
        <div>
          <p className="font-display font-bold text-[18px] leading-snug">
            Nancy products are exclusively designed, manufactured, and fulfilled through{" "}
            <a href="https://www.hellonancy.com" className="underline">
              www.hellonancy.com
            </a>
          </p>
          <p className="font-body text-[15px] leading-[1.5] mt-3">
            Beware of fraudulent websites or counterfeit items; these may expose you to credit card scams or toys that are hazardous for intimate use. No refunds or reimbursements will be provided for orders placed through unauthorized sellers.
          </p>
        </div>
      </div>
    </section>
  );
}
