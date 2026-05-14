import {
  ArrowRight,
  ChevronDown,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TiktokIcon,
} from "@/components/icons";

const resourceLinks = ["Guides", "Lem Comparison", "Wall of Came"];
const policyLinks = [
  "Contact us",
  "Privacy policy",
  "Terms of service",
  "Help Center",
];
const paymentLabels = [
  "AMEX",
  "APPLE",
  "BANK",
  "GPAY",
  "MAES",
  "MC",
  "SHOP",
  "UPAY",
  "VISA",
];

export function Footer() {
  return (
    <footer className="bg-white py-16 px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 — Newsletter */}
          <div className="lg:col-span-2">
            <img
              src="/images/Nancy_Logo_Pink.png"
              alt="Nancy"
              className="h-12 w-auto"
            />
            <h3 className="font-display font-semibold text-[26px] text-[#1a1a1a] leading-tight mt-6">
              Stories & surprises straight to your inbox 💌
            </h3>
            <p className="font-body text-[14px] text-[#1a1a1a] mt-3">
              Be the first to enjoy product launches, sweet discounts, and
              insider treats.
            </p>
            <div className="relative border-b border-[#1a1a1a] py-3 mt-4">
              <input
                placeholder="Email address"
                className="font-body text-[15px] bg-transparent outline-none w-full pr-12"
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FF30CC] flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Facebook">
                <FacebookIcon className="w-6 h-6 text-[#1a1a1a]" />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon className="w-6 h-6 text-[#1a1a1a]" />
              </a>
              <a href="#" aria-label="TikTok">
                <TiktokIcon className="w-6 h-6 text-[#1a1a1a]" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LinkedInIcon className="w-6 h-6 text-[#1a1a1a]" />
              </a>
            </div>
          </div>

          {/* Column 2 — About */}
          <div>
            <h4 className="font-display font-semibold text-[18px] text-[#1a1a1a]">
              About
            </h4>
            <p className="font-body text-[14px] text-[#1a1a1a] leading-[1.6] mt-3">
              At Nancy, we&apos;re committed to breaking the taboo and creating
              a safe and welcoming space for everyone to explore their sexual
              curiosities.
            </p>
            <address className="font-body text-[14px] text-[#1a1a1a] leading-[1.6] mt-4 not-italic">
              Care &amp; Bloom Limited,
              <br />
              2F, Hilltop Plaza,
              <br />
              49 Hollywood Rd,
              <br />
              Central,
              <br />
              Hong Kong.
            </address>
          </div>

          {/* Column 3 — Get in touch */}
          <div>
            <h4 className="font-display font-semibold text-[18px] text-[#1a1a1a]">
              Get in touch
            </h4>
            <p className="font-body text-[14px] text-[#1a1a1a] leading-[1.6] mt-3">
              Care:{" "}
              <a href="mailto:care@hellonancy.com" className="underline">
                care@hellonancy.com
              </a>
            </p>
            <p className="font-body text-[14px] text-[#1a1a1a] leading-[1.6] mt-4">
              Partnerships:{" "}
              <a href="mailto:marketing@hellonancy.com" className="underline">
                marketing@hellonancy.com
              </a>
            </p>
          </div>

          {/* Column 4 — Resources */}
          <div>
            <h4 className="font-display font-semibold text-[18px] text-[#1a1a1a]">
              Resources
            </h4>
            <ul className="font-body text-[14px] text-[#1a1a1a] space-y-3 mt-3">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Policies */}
          <div>
            <h4 className="font-display font-semibold text-[18px] text-[#1a1a1a]">
              Policies
            </h4>
            <ul className="font-body text-[14px] text-[#1a1a1a] space-y-3 mt-3">
              {policyLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-[#e6dcc8]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-body text-[13px] text-[#6b6357]">
              © 2026, Hello Nancy | All rights reserved
            </p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="font-body text-[14px] text-[#1a1a1a] flex items-center gap-1"
              >
                <span aria-hidden="true">🇺🇸</span>
                United States (USD $)
                <ChevronDown className="w-3 h-3" />
              </button>
              <button
                type="button"
                className="font-body text-[14px] text-[#1a1a1a] flex items-center gap-1"
              >
                English
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Payment icons row */}
          <div className="flex flex-wrap gap-2 mt-6">
            {paymentLabels.map((label) => (
              <span
                key={label}
                className="inline-flex items-center justify-center w-12 h-7 bg-[#f0f0f0] text-[10px] font-display font-semibold rounded-md"
              >
                {label}
              </span>
            ))}
          </div>

          {/* Bustem badge */}
          <div className="flex items-center gap-2 mt-6">
            <span className="w-7 h-7 rounded-full bg-[#FF30CC] inline-flex items-center justify-center text-white text-xs font-display font-bold">
              N
            </span>
            <div>
              <p className="font-body text-[13px] text-[#1a1a1a]">
                IP Protected by Bustem™
              </p>
              <p className="font-body text-[11px] text-[#6b6357]">
                Brand Verified | Fraud Protected | Enforcement
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
