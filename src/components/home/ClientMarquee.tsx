"use client";

import React from "react";
import Image from "next/image";

interface ClientLogo {
  id: string;
  name: string;
  shortName: string;
  logoPath: string;
}

const clientLogos: ClientLogo[] = [
  {
    id: "deepak-fertilisers",
    name: "Deepak Fertilisers and Petrochemicals Corporation Ltd.",
    shortName: "Deepak Fertilisers",
    logoPath: "/images/clients/client1.png",
  },
  {
    id: "galaxy-surfactants",
    name: "Galaxy Surfactants Limited",
    shortName: "Galaxy Surfactants",
    logoPath: "/images/clients/client2.png",
  },
  {
    id: "hindustan-platinum",
    name: "Hindustan Platinum Pvt. Ltd.",
    shortName: "Hindustan Platinum",
    logoPath: "/images/clients/client3.png",
  },
  {
    id: "glenmark",
    name: "Glenmark Pharmaceuticals Limited",
    shortName: "Glenmark Pharma",
    logoPath: "/images/clients/client4.png",
  },
  {
    id: "ig-petrochem",
    name: "IG Petrochemicals Limited (IGPL)",
    shortName: "IG Petrochemicals",
    logoPath: "/images/clients/client5.png",
  },
  {
    id: "chemspec",
    name: "Chemspec Chemicals Limited",
    shortName: "Chemspec Chemicals",
    logoPath: "/images/clients/client6.png",
  },
  {
    id: "viswaat-chemicals",
    name: "Viswaat Chemicals Limited",
    shortName: "Viswaat Chemicals",
    logoPath: "/images/clients/client7.png",
  },
  {
    id: "owens-corning",
    name: "Owens Corning India",
    shortName: "Owens Corning",
    logoPath: "/images/clients/client8.png",
  },
  {
    id: "apcotex",
    name: "Apcotex Industries Limited",
    shortName: "Apcotex Industries",
    logoPath: "/images/clients/client9.png",
  },
  {
    id: "johnson-matthey",
    name: "Johnson Matthey Chemicals India",
    shortName: "Johnson Matthey",
    logoPath: "/images/clients/client10.png",
  },
  {
    id: "nocil",
    name: "NOCIL Limited (Arvind Mafatlal Group)",
    shortName: "NOCIL Limited",
    logoPath: "/images/clients/client11.png",
  },
  {
    id: "godfrey-phillips",
    name: "Godfrey Phillips India Limited",
    shortName: "Godfrey Phillips",
    logoPath: "/images/clients/client12.png",
  },
];

export function ClientMarquee() {
  // Triple-duplicated array for flawless continuous loop on high-res ultra-wide monitors
  const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section 
      className="relative w-full bg-slate-50/60 py-6 sm:py-8 border-y border-gray-200/80 overflow-hidden select-none"
      aria-label="Our Esteemed Clients"
    >
      {/* Sleek Centered Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-5 text-center">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
          <h2 className="text-slate-900 uppercase tracking-widest text-xs sm:text-[13px] font-extrabold font-mono-accent m-0">
            TRUSTED BY INDUSTRY LEADERS ACROSS CHEMICALS, PHARMACEUTICALS &amp; HEAVY INFRASTRUCTURE
          </h2>
          <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
        </div>
      </div>

      {/* Marquee Track with Smooth Edge Gradient Fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent z-10" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-slate-50/90 via-slate-50/50 to-transparent z-10" />

        {/* Continuous Marquee Track - Tighter spacing, bigger logos */}
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 md:gap-10 py-1">
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              title={client.name}
              className="group relative shrink-0 flex items-center justify-center p-3 sm:p-4 rounded-xl bg-white border border-gray-200/80 hover:border-[#FF6B00]/60 shadow-2xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              {/* Efficient Crisp Logo Image Sizing (Capped to max 192px/384px retina, avoiding 3840px bloat) */}
              <div className="relative h-12 sm:h-14 md:h-16 w-36 sm:w-44 md:w-48 flex items-center justify-center">
                <Image
                  src={client.logoPath}
                  alt={`${client.name} — Samarth Corporation client`}
                  width={192}
                  height={64}
                  loading="lazy"
                  className="h-10 sm:h-12 md:h-14 w-auto max-w-[140px] sm:max-w-[170px] object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
