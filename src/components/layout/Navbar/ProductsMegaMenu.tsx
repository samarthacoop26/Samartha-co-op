"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Grid,
  CircleDot,
  Boxes,
  DoorOpen,
  Cpu,
  Shield,
  Workflow,
  Building,
  Signpost,
  ShieldAlert,
  ArrowRight,
  Layers,
} from "lucide-react";

interface ProductsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface ProductItem {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  badge?: {
    text: string;
    variant: "green" | "orange" | "blue";
  };
}

interface ProductSection {
  header: string;
  items: ProductItem[];
}

export function ProductsMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: ProductsDropdownProps) {
  // 3 Primary Product Category Columns (10 Core Sectors)
  const productSections: ProductSection[] = [
    {
      header: "Structural & Access",
      items: [
        {
          title: "Gratings & Walkways",
          description: "High load-bearing FRP molded & pultruded systems.",
          href: "/products/gratings-walkways-platforms",
          icon: <Grid className="w-4 h-4 text-[#FF6B00]" />,
          badge: { text: "Heavy Duty", variant: "orange" },
        },
        {
          title: "Manhole & Trench Covers",
          description: "Composite covers tested up to 40T/60T load.",
          href: "/products/manhole-drain-cable-covers",
          icon: <CircleDot className="w-4 h-4 text-[#FF6B00]" />,
        },
        {
          title: "Tanks & Chemical Storage",
          description: "Dual-laminate chemical tanks & high-pressure piping.",
          href: "/products/tanks-piping-chemical-storage",
          icon: <Boxes className="w-4 h-4 text-[#FF6B00]" />,
        },
        {
          title: "Handrails & Safety Ladders",
          description: "OSHA-compliant guard rails & cage ladders.",
          href: "/products/handrails-ladders-safety",
          icon: <Shield className="w-4 h-4 text-[#FF6B00]" />,
        },
      ],
    },
    {
      header: "Electrical & Enclosures",
      items: [
        {
          title: "Electrical Enclosures",
          description: "Dielectric junction boxes & transformer kiosks.",
          href: "/products/electrical-enclosures-control-boxes",
          icon: <Cpu className="w-4 h-4 text-[#FF6B00]" />,
        },
        {
          title: "Doors, Windows & Panels",
          description: "Fire-retardant composite architectural doors & panels.",
          href: "/products/doors-windows-panels",
          icon: <DoorOpen className="w-4 h-4 text-[#FF6B00]" />,
        },
        {
          title: "Cable Management Systems",
          description: "Corrosion-proof perforated & ladder FRP trays.",
          href: "/products/cable-management-systems",
          icon: <Workflow className="w-4 h-4 text-[#FF6B00]" />,
        },
      ],
    },
    {
      header: "Defence & Civic Infra",
      items: [
        {
          title: "Defence Equipment & Gear",
          description: "Mil-spec missile boxes, ammo containers & radomes.",
          href: "/products/defence-equipment-protective-gear",
          icon: <ShieldAlert className="w-4 h-4 text-[#FF6B00]" />,
          badge: { text: "Defence", variant: "green" },
        },
        {
          title: "Civic & Public Infra",
          description: "Bus shelters, modular cabins & street canopies.",
          href: "/products/civic-furniture-public-infra",
          icon: <Building className="w-4 h-4 text-[#FF6B00]" />,
        },
        {
          title: "Industrial Signage",
          description: "UV-resistant composite hazard & highway boards.",
          href: "/products/signage",
          icon: <Signpost className="w-4 h-4 text-[#FF6B00]" />,
        },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 4, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 3, scale: 0.995 }}
          transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[94vw] max-w-[780px] z-50 cursor-default"
        >
          {/* Main White Minimalist Card Container */}
          <div className="relative bg-white border border-gray-200/90 rounded-xl shadow-[0_16px_40px_-12px_rgba(16,24,40,0.14),0_1px_3px_0_rgba(16,24,40,0.06)] overflow-hidden">
            
            {/* Top Micro-Accent Line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-90 z-10" />

            {/* Main Content Grid: 3 Main Category Columns */}
            <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 bg-white">
              {productSections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-1">
                  {/* Column Header */}
                  <div className="px-1.5 pb-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    {section.header}
                  </div>

                  {/* Column Items */}
                  <div className="space-y-0.5">
                    {section.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-start gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {/* Left Line Icon */}
                        <div className="shrink-0 mt-0.5 p-1 rounded-md bg-orange-50/80 group-hover:bg-orange-100/90 transition-colors">
                          {item.icon}
                        </div>

                        {/* Text Block */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[13px] font-semibold text-gray-900 group-hover:text-[#FF6B00] transition-colors leading-tight">
                              {item.title}
                            </span>
                            
                            {/* Pill Badge */}
                            {item.badge && (
                              <span
                                className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-semibold leading-none border ${
                                  item.badge.variant === "green"
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-200/70"
                                    : item.badge.variant === "orange"
                                    ? "bg-orange-50 text-[#FF6B00] border-orange-200/70"
                                    : "bg-blue-50 text-blue-700 border-blue-200/70"
                                }`}
                              >
                                {item.badge.text}
                              </span>
                            )}
                          </div>

                          <p className="text-[11px] text-gray-500 font-normal leading-snug mt-0.5 line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Overview Bar */}
            <div className="bg-slate-50 border-t border-slate-100 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Layers className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span className="font-medium">10 Categories &bull; 90+ Standard &amp; Custom Composite Products</span>
              </div>
              <Link
                href="/products"
                onClick={onClose}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#FF6B00] hover:text-[#e66000] transition-colors"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
