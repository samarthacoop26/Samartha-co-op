"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function BoatFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are these FRP boats unsinkable?",
      answer:
        "Yes. The hulls are built with high-density polyurethane foam flotation chambers, so the boat stays safely afloat and upright even if flooded with water.",
    },
    {
      question: "Can you supply the boat with outboard engines?",
      answer:
        "Yes. We deliver turnkey boats fitted with your choice of outboard motors (Yamaha, Mercury, Suzuki, etc.) along with steering controls.",
    },
    {
      question: "Can we customize the color, seating, and canopy?",
      answer:
        "Yes. We offer custom hull colors, agency logos, flexible seating arrangements, and hardtop or folding canopy options.",
    },
    {
      question: "How are the boats transported and delivered across India?",
      answer:
        "We deliver boats safely on dedicated road trailers or flatbed trucks directly to your port, lake, dam, or facility anywhere across India.",
    },
    {
      question: "Do you support government tenders and certifications?",
      answer:
        "Yes. Our boats comply with IRS and ISO marine standards, and we provide third-party inspections and sea-trial certificates for tenders.",
    },
    {
      question: "What is the lifespan and warranty?",
      answer:
        "FRP boats do not rust, rot, or corrode and last 30+ years. We provide a 5-year structural hull warranty along with standard engine warranties.",
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
            FRP Boats &amp; Marine FAQs
          </h2>
          <p className="type-subheading text-gray-600 text-xs sm:text-sm mt-2">
            Quick answers to common questions about our boats, engines, delivery, and customization.
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
