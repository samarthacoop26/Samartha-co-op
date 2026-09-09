"use client";

import React from "react";

interface ClientLogo {
  id: string;
  name: string;
  svg: React.ReactNode;
}

const clientLogos: ClientLogo[] = [
  {
    id: "logo-1",
    name: "Apex Engineering",
    svg: (
      <svg className="h-8 sm:h-9 md:h-10 w-auto" viewBox="0 0 190 40" fill="currentColor">
        <path d="M14 4L3 25H25L14 4ZM14 11L19.5 22H8.5L14 11Z" />
        <path d="M14 27L9 36H19L14 27Z" opacity="0.55" />
        <text x="36" y="27" fontSize="19" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.6">APEX CORP</text>
      </svg>
    ),
  },
  {
    id: "logo-2",
    name: "Valkyrie Infra",
    svg: (
      <svg className="h-8 sm:h-9 md:h-10 w-auto" viewBox="0 0 205 40" fill="currentColor">
        <path d="M4 6L14 34H22L32 6H23L18 22L13 6H4Z" />
        <path d="M12 6L18 20L24 6H12Z" opacity="0.5" />
        <text x="42" y="27" fontSize="19" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.6">VALKYRIE</text>
      </svg>
    ),
  },
  {
    id: "logo-3",
    name: "Nexus Heavy",
    svg: (
      <svg className="h-8 sm:h-9 md:h-10 w-auto" viewBox="0 0 200 40" fill="currentColor">
        <rect x="4" y="6" width="26" height="26" rx="5" />
        <circle cx="17" cy="19" r="5.5" fill="#FAFAFC" />
        <text x="38" y="27" fontSize="19" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.6">NEXUS IND</text>
      </svg>
    ),
  },
  {
    id: "logo-4",
    name: "Strata Petro",
    svg: (
      <svg className="h-8 sm:h-9 md:h-10 w-auto" viewBox="0 0 185 40" fill="currentColor">
        <circle cx="16" cy="19" r="13.5" />
        <circle cx="16" cy="19" r="6.5" fill="#FAFAFC" />
        <text x="38" y="27" fontSize="19" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.6">STRATA</text>
      </svg>
    ),
  },
  {
    id: "logo-5",
    name: "Vertex Energy",
    svg: (
      <svg className="h-8 sm:h-9 md:h-10 w-auto" viewBox="0 0 190 40" fill="currentColor">
        <polygon points="16,4 30,15 30,28 16,35 2,28 2,15" />
        <polygon points="16,9 24,16 24,25 16,30 8,25 8,16" fill="#FAFAFC" />
        <text x="38" y="27" fontSize="19" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.6">VERTEX</text>
      </svg>
    ),
  },
  {
    id: "logo-6",
    name: "Titan Structures",
    svg: (
      <svg className="h-8 sm:h-9 md:h-10 w-auto" viewBox="0 0 180 40" fill="currentColor">
        <path d="M4 6H28V12H18V32H13V12H4V6Z" />
        <text x="36" y="27" fontSize="19" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.6">TITAN</text>
      </svg>
    ),
  },
  {
    id: "logo-7",
    name: "Aura Dynamics",
    svg: (
      <svg className="h-8 sm:h-9 md:h-10 w-auto" viewBox="0 0 200 40" fill="currentColor">
        <path d="M4 20C4 11.16 11.16 4 20 4V10.5C14.75 10.5 10.5 14.75 10.5 20H4Z" />
        <path d="M26 20C26 28.84 18.84 36 10 36V29.5C15.25 29.5 19.5 25.25 19.5 20H26Z" />
        <text x="38" y="27" fontSize="19" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.6">AURA SYS</text>
      </svg>
    ),
  },
  {
    id: "logo-8",
    name: "Novacorp Global",
    svg: (
      <svg className="h-8 sm:h-9 md:h-10 w-auto" viewBox="0 0 210 40" fill="currentColor">
        <rect x="4" y="6" width="11" height="11" rx="2" />
        <rect x="18" y="6" width="11" height="11" rx="2" opacity="0.5" />
        <rect x="4" y="20" width="11" height="11" rx="2" opacity="0.5" />
        <rect x="18" y="20" width="11" height="11" rx="2" />
        <text x="38" y="27" fontSize="19" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.6">NOVACORP</text>
      </svg>
    ),
  },
];

export function ClientMarquee() {
  // Repeating array for continuous seamless infinite animation
  const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="relative w-full bg-[#FAFAFC] pt-8 sm:pt-10 pb-14 sm:pb-16 border-b border-gray-200/80 overflow-hidden">
      
      {/* Crisp, Balanced Trust Label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <p className="type-eyebrow text-gray-500">
          Trusted by leading public sector undertakings, railways &amp; industrial enterprises
        </p>
      </div>

      {/* Marquee Track with Smooth Edge Fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left Edge Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 lg:w-44 bg-gradient-to-r from-[#FAFAFC] via-[#FAFAFC]/90 to-transparent z-10" />

        {/* Right Edge Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 lg:w-44 bg-gradient-to-l from-[#FAFAFC] via-[#FAFAFC]/90 to-transparent z-10" />

        {/* Infinite CSS Animation Track */}
        <div className="animate-marquee flex items-center gap-14 sm:gap-18 lg:gap-22 py-2">
          {marqueeItems.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200 shrink-0 flex items-center cursor-pointer"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
