"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/icons";
import { cn } from "@/lib/utils";

type QA = {
  question: string;
  answer: string;
};

const FAQS: QA[] = [
  {
    question: "What is your shipping policy?",
    answer:
      "We offer free standard shipping on all orders within the US. International orders typically ship within 3-5 business days and arrive within 7-14 days depending on your location.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes! We ship to over 30 countries worldwide. International shipping rates are calculated at checkout based on your destination.",
  },
  {
    question: "What is the warranty period for products?",
    answer:
      "All Nancy products come with a 1-year manufacturer warranty covering defects in materials and workmanship.",
  },
  {
    question: "Can I return products?",
    answer:
      "Yes — we offer a 30-day satisfaction guarantee. If you're not happy, return your product within 30 days for a full refund. For hygiene reasons, the product must be unused and in original packaging.",
  },
  {
    question: "What if I am not satisfied with a product?",
    answer:
      "Reach out to our care team at care@hellonancy.com within 30 days. We'll make it right with a replacement or a refund — your call.",
  },
  {
    question: "Is your packaging discreet?",
    answer:
      "Absolutely. Every order ships in a plain, unbranded box with a generic return label. No one will know what's inside but you.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FCF7ED] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display font-semibold text-[40px] lg:text-[56px] text-[#FF30CC] text-center leading-tight">
          FAQ&apos;s
        </h2>
        <p className="font-body text-[16px] text-[#1a1a1a] text-center mt-3">
          Curious to learn more? We&apos;ve got you covered. Head to our{" "}
          <a className="underline">Nancy Help Center</a> for everything you need to know.
        </p>

        <div className="mt-10 bg-white rounded-3xl border border-[#f3dce2] divide-y divide-[#f3dce2]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                >
                  <span
                    className={cn(
                      "font-display font-semibold text-[18px]",
                      isOpen ? "text-[#FF30CC]" : "text-[#1a1a1a]",
                    )}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-200 text-[#FF30CC]",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                {isOpen ? (
                  <div className="px-6 pb-5 font-body text-[16px] text-[#1a1a1a] leading-[1.6]">
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
