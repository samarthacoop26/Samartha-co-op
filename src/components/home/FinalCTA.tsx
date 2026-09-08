"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Download, FileText } from "lucide-react";

export function FinalCTA() {
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
          backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/90 to-[#0A1628]/80" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs font-bold text-[#FF8C33] uppercase tracking-wider mb-3 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span>Direct Factory Supply &amp; Turnkey Erection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Looking for a Reliable PP &amp; FRP Solution for Your Project?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-300 leading-relaxed">
              Connect with our senior technical engineers today for custom tank sizing, M.S. lining estimates, thermoplastic piping BOQs, and expert manufacturing support across India.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white font-bold text-sm sm:text-base px-8 py-4 rounded shadow-lg hover:shadow-orange-500/25 transition-all duration-200 group text-center"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/certificates"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm sm:text-base px-7 py-4 rounded backdrop-blur-md transition-all duration-200 group text-center cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#FF6B00] group-hover:translate-y-0.5 transition-transform" />
              <span>DOWNLOAD BROCHURE</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
