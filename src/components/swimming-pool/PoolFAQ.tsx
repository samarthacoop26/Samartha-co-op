"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function PoolFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can an FRP pool be installed on a rooftop or terrace?",
      answer:
        "Yes. FRP pools are much lighter than concrete pools, making them safe and suitable for rooftops, terraces, and backyards with even weight distribution.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Usually just 3 to 7 days. Because the pool shell is pre-built and tested at our factory, it arrives ready to be placed, plumbed, and filled with water.",
    },
    {
      question: "Is maintenance easier than a traditional concrete pool?",
      answer:
        "Yes. The smooth, non-porous gelcoat surface prevents algae growth and needs far fewer chemicals, making daily upkeep simple and affordable.",
    },
    {
      question: "Will the pool crack if the ground or soil shifts?",
      answer:
        "No. FRP composite is strong yet flexible, so it easily withstands minor soil settlement and ground movement without cracking or leaking.",
    },
    {
      question: "What filtration and accessories are included?",
      answer:
        "Every setup includes a filtration pump, sand filter, skimmer box, return nozzles, and waterproof LED lighting.",
    },
    {
      question: "What is the lifespan and warranty?",
      answer:
        "Our FRP pools have a lifespan of 30+ years and come with a 15-year structural warranty against cracks and leaks.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-[#FF6B00] rounded-lg text-xs font-bold font-mono-accent uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="type-h2 text-2xl sm:text-3xl font-bold text-[#0A1628] tracking-tight">
            FRP Swimming Pool FAQs
          </h2>
          <p className="type-subheading text-gray-600 text-xs sm:text-sm mt-2">
            Quick answers to common questions about installation, maintenance, and durability.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50/80 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A1628] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-[#FF6B00] text-white rotate-180" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
