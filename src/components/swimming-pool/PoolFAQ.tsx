"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function PoolFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can an FRP swimming pool really be installed on a building rooftop or terrace?",
      answer:
        "Yes! Because monolithic FRP composite shells are significantly lighter than concrete pools, their dead-load on building columns and floor slabs is minimal. When filled with water, the weight is evenly distributed across the slab without localized point stress. Our structural engineering team calculates the load per square foot and provides structural sign-off for your architect.",
    },
    {
      question: "How does the installation take only 3 to 7 days compared to months for concrete?",
      answer:
        "Traditional concrete pools require on-site shuttering, steel rebar tying, guniting/concreting, a 28-day water curing period, waterproofing plastering, and tile laying. In contrast, an FRP pool shell is 100% factory manufactured, cured, and hydro-tested before arriving at your site. Once the excavation/bed is ready, the shell is lowered by crane, plumbed to the filtration plant, backfilled, and filled with water in just 3 to 7 days.",
    },
    {
      question: "Why do FRP pools consume 70% less chlorine and chemicals than tiled pools?",
      answer:
        "Concrete plaster and cement tile grouting are highly porous, harboring microscopic algae roots and calcium deposits that require heavy chlorination and acid washing to remove. Our marine-grade ISO-NPG gelcoat surface is 100% non-porous and ultra-smooth. Algae cannot embed or root on the surface, drastically lowering chemical demand and keeping the water crystal clear with minimal maintenance.",
    },
    {
      question: "What happens if there is ground settlement, seismic activity, or black cotton soil?",
      answer:
        "Concrete is rigid and brittle; any ground settlement, seismic vibration, or expansive clay (black cotton soil) movement causes concrete to crack and leak. FRP composite shells possess high flexural elasticity and tensile strength. The shell flexes elastically with ground movement and returns to its shape without developing any structural cracks or leaks.",
    },
    {
      question: "What filtration, water treatment, and lighting packages are included?",
      answer:
        "We provide a complete turnkey package including a heavy-duty sand filter with multiport valve, self-priming recirculation pump, IP68 underwater LED multi-colour lights with remote control, skimmer boxes, and return inlets. Optional upgrades include eco-friendly salt chlorinators, titanium pool heat pumps, and endless-swimming counter-current swim jets.",
    },
    {
      question: "What is the warranty and expected lifespan of an FRP swimming pool?",
      answer:
        "Samarth Corporation composite pool shells are engineered with a 30+ year lifespan. Every shell is backed by a 15-Year Structural Shell Warranty against laminate failure, osmotic blistering, and water leakage, along with standard manufacturer warranties on all filtration pumps, LED lighting, and valves.",
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
            FRP Swimming Pool Technical FAQs
          </h2>
          <p className="type-subheading text-gray-600 text-xs sm:text-sm mt-2">
            Everything you need to know about rooftop loads, installation timelines, maintenance, and warranties.
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
