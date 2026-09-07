"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Looking for a Reliable FRP Solution for Your Project?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              Get in touch with our technical team today for custom quotes, material specifications, and expert manufacturing support across India.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white font-bold text-sm sm:text-base px-8 py-4 rounded shadow-lg transition-colors"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}


