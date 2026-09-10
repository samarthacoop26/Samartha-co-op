"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function BoatFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are Samarth Corporation FRP boats unsinkable in case of swamping or breach?",
      answer:
        "Yes. All our rescue craft, patrol boats, and passenger vessels are engineered with positive flotation. The underfloor cavities, gunwales, and double-bottom compartments are injected with high-density, closed-cell polyurethane (PU) marine foam. Even if the hull sustains severe damage or is filled to the brim with water, the boat maintains positive buoyancy and remains fully upright.",
    },
    {
      question: "What marine certifications, standards, and survey approvals are supported?",
      answer:
        "Our FRP vessels are fabricated in accordance with Indian Register of Shipping (IRS) guidelines, Mercantile Marine Department (MMD) rules, and ISO 12217 small craft stability and buoyancy standards. For government and municipal tenders, we facilitate third-party inspections and pre-dispatch sea trials with authorized naval surveyors.",
    },
    {
      question: "Can you supply the boat with factory-fitted outboard engines and steering?",
      answer:
        "Yes, we provide turnkey delivery. We are authorized to rig and supply complete propulsion packages including Yamaha, Mercury, Suzuki, or Honda 4-stroke outboard motors, calibrated hydraulic steering systems, remote throttle consoles, dual-battery electrical systems, and stainless steel propeller assemblies.",
    },
    {
      question: "How are the boats transported and delivered across different states in India?",
      answer:
        "We manufacture and supply heavy-duty custom road transport boat trailers equipped with winches, rollers, and submersible waterproof LED tail lamps. For long-distance logistics across India, boats are securely cradled, shrink-wrapped, and transported on dedicated flatbed trucks directly to your specified port, dam site, or facility.",
    },
    {
      question: "Can we customize the hull color, seating layout, and canopy design for our agency?",
      answer:
        "Absolutely. Every boat can be customized with specific marine gelcoat color schemes (e.g., high-visibility disaster orange, navy patrol blue, forest green, or resort pearl white), agency logos, custom seating arrangements (jockey seats, bench seats, or luxury cushioned upholstery), and rigid FRP hardtops or collapsible bimini canopies.",
    },
    {
      question: "What is the warranty and expected service life of an FRP composite boat?",
      answer:
        "Our FRP composite hulls offer a design life exceeding 30 years with virtually zero maintenance (no rot, no rust, and no marine borer decay). We provide a standard 5-Year Structural Hull Warranty against laminate defects and osmotic blistering, along with complete OEM warranties on all fitted engines and electronics.",
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
            FRP Boats &amp; Marine Craft Technical FAQs
          </h2>
          <p className="type-subheading text-gray-600 text-xs sm:text-sm mt-2">
            Got questions regarding naval standards, sea trials, engine selection, or tender specifications?
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
