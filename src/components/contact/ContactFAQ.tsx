"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What CAD and engineering drawing formats do you accept for BOQs?",
    answer: "Our design and tooling department accepts standard CAD formats including 2D .DWG and .DXF, as well as 3D solid models (.STEP, .STP, .IGES, .SLDPRT). For commercial bidding, PDF drawings and Excel (.XLSX) BOQ sheets are also fully supported.",
  },
  {
    question: "Do you supply customized FRP load ratings according to IS 1726 and EN 124 standards?",
    answer: "Yes. All our FRP manhole covers and trench gratings can be engineered and load-tested from Class A15 (1.5 Ton pedestrian) up to Class F900 (90 Ton airport runway / heavy container terminal ratings) with certified third-party lab test reports.",
  },
  {
    question: "What is your typical turnaround time for commercial quotes & tender pricing?",
    answer: "Standard catalog items and standard-sized BOQs are priced within 4 to 12 business hours. Complex custom compression-moulded components or large composite chemical tanks requiring finite element analysis (FEA) typically receive formal quotes within 24 hours.",
  },
  {
    question: "Do you offer Pan-India delivery and direct-to-site project freight?",
    answer: "Yes, our logistics desk manages dedicated freight dispatch across all states and Union Territories in India, directly from our manufacturing plants in Maharashtra to industrial sites, metro rail stations, and municipal infrastructure projects.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-8 pb-4">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-1">
          <HelpCircle className="w-4 h-4" />
          <span>Procurement & Technical FAQ</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Quick clarity for procurement heads, site contractors, and consulting engineers.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 dark:text-white hover:text-[#FF6B00] dark:hover:text-[#FF6B00] transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#FF6B00]" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
