"use client";

import React from "react";
import Link from "next/link";
import { CONTACT_CONFIG } from "@/data/contactConfig";

export function AboutHero() {
  return (
    <section className="relative w-full bg-[#0A1628] overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24 border-b border-gray-800">
      {/* Background Image with Dark Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/about/plant-facility.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/70 via-transparent to-[#0A1628]/80" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full mb-3 shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
          <span className="text-[11px] font-bold tracking-widest text-white uppercase drop-shadow-sm">
            Company Profile
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          About {CONTACT_CONFIG.companyName}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          Engineering high-performance PP &amp; FRP solutions, linings, chemical tanks, and turnkey projects for India&apos;s industrial and infrastructure sectors.
        </p>
      </div>

      {/* Slanted Breadcrumb Bar Pinned to Bottom-Right */}
      <div className="absolute bottom-0 right-0 z-20">
        <div
          className="bg-[#FF6B00] text-[#0A1628] font-bold text-xs sm:text-sm py-2.5 px-8 sm:px-12 flex items-center gap-2 shadow-lg"
          style={{
            clipPath: "polygon(28px 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="opacity-60">/</span>
          <span className="text-[#0A1628]">About Us</span>
        </div>
      </div>
    </section>
  );
}
