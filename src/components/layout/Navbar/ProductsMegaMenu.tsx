"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Boxes,
  Wind,
  Layers,
  Pipette,
  Workflow,
  Wrench,
  Shield,
  ShieldCheck,
  PackageCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import {
  INDUSTRIAL_PRODUCT_COLUMNS,
  ProductMenuItem,
} from "@/data/productsNavData";

interface ProductsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function getProductIcon(name: string) {
  switch (name) {
    case "Boxes":
      return <Boxes className="w-4 h-4" />;
    case "Wind":
      return <Wind className="w-4 h-4" />;
    case "Layers":
      return <Layers className="w-4 h-4" />;
    case "Pipette":
      return <Pipette className="w-4 h-4" />;
    case "Workflow":
      return <Workflow className="w-4 h-4" />;
    case "Wrench":
      return <Wrench className="w-4 h-4" />;
    case "Shield":
      return <Shield className="w-4 h-4" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-4 h-4" />;
    case "PackageCheck":
      return <PackageCheck className="w-4 h-4" />;
    default:
      return <Sparkles className="w-4 h-4" />;
  }
}

export function ProductsMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: ProductsDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.99 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[92vw] max-w-[800px] z-50 cursor-default"
        >
          {/* Main Clean Minimal Dropdown Panel */}
          <div className="relative bg-[#0A1628]/98 border border-slate-700/80 rounded-2xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-2xl overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-80" />

            {/* 3-Column Minimal Grid */}
            <div className="p-6 lg:p-7 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {INDUSTRIAL_PRODUCT_COLUMNS.map((column, colIdx) => (
                <div key={colIdx} className="space-y-3.5">
                  {/* Category Header Label */}
                  <div className="flex items-center gap-2 pb-1 border-b border-slate-800/80">
                    <span className="text-[10.5px] font-mono font-bold text-[#FF6B00] bg-[#FF6B00]/10 px-1.5 py-0.5 rounded">
                      {column.categoryNumber || `0${colIdx + 1}`}
                    </span>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      {column.categoryTitle}
                    </span>
                  </div>

                  {/* Category Items List */}
                  <div className="space-y-1.5">
                    {column.items.map((item: ProductMenuItem) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/60 text-slate-300 hover:text-white transition-all duration-150"
                      >
                        {/* Icon Container with subtle glow on hover */}
                        <div className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/70 group-hover:border-[#FF6B00]/40 group-hover:bg-[#FF6B00]/10 flex items-center justify-center text-slate-400 group-hover:text-[#FF6B00] transition-all duration-200 shrink-0 mt-0.5 shadow-sm">
                          {getProductIcon(item.iconName)}
                        </div>

                        {/* Text: Title & 1-line Subtitle */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[13px] font-semibold text-slate-100 group-hover:text-[#FF6B00] transition-colors leading-tight">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="text-[9.5px] font-semibold px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11.5px] text-slate-400 group-hover:text-slate-300 leading-snug mt-0.5 transition-colors">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Subtle Bar */}
            <div className="px-6 py-3 bg-[#070F1C]/80 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="text-xs text-slate-400 font-medium">
                Custom tooling, resins &amp; client CAD drawing fabrication available.
              </span>
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#ff8833] transition-colors"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


