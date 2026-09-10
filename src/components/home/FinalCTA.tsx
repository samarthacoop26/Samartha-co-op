"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Download, FileText } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export function FinalCTA() {
  const { openQuoteModal } = useQuoteModal();
  const handleDownloadBrochure = () => {
    // Open printable / downloadable brochure or trigger download
    window.open("/contact", "_self");
  };

  return (
    <section className="relative w-full bg-[#111827] text-white py-16 md:py-20 overflow-hidden">
      {/* Industrial Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/about/plant-facility.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/90 to-[#0A1628]/80" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-[#FF8C33] mb-3 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span className="type-eyebrow">Direct Factory Supply &amp; Turnkey Erection</span>
            </div>
            <h2 className="type-h2 text-white">
              Looking for a Reliable PP &amp; FRP Solution for Your Project?
            </h2>
            <p className="mt-3 type-subheading text-gray-300">
              Connect with our senior technical engineers today for custom tank sizing, M.S. lining estimates, thermoplastic piping BOQs, and expert manufacturing support across India.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            <button
              type="button"
              onClick={() => openQuoteModal({ title: "Request a Project Quote" })}
              className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white type-btn px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-200 group text-center cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/samarth-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 type-btn px-7 py-4 rounded-xl backdrop-blur-md transition-all duration-200 group text-center cursor-pointer"
              title="Download & View Samarth Corporation Product Brochure (PDF)"
            >
              <Download className="w-4 h-4 text-[#FF6B00] group-hover:translate-y-0.5 transition-transform" />
              <span>DOWNLOAD BROCHURE</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
