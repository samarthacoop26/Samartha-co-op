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
} from "lucide-react";
import {
  INDUSTRIAL_PRODUCT_COLUMNS,
  QUICK_RESOURCE_LINKS,
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
      return <Boxes className="w-5 h-5" />;
    case "Wind":
      return <Wind className="w-5 h-5" />;
    case "Layers":
      return <Layers className="w-5 h-5" />;
    case "Pipette":
      return <Pipette className="w-5 h-5" />;
    case "Workflow":
      return <Workflow className="w-5 h-5" />;
    case "Wrench":
      return <Wrench className="w-5 h-5" />;
    case "Shield":
      return <Shield className="w-5 h-5" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-5 h-5" />;
    case "PackageCheck":
      return <PackageCheck className="w-5 h-5" />;
    default:
      return <Sparkles className="w-5 h-5" />;
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
          initial={{ opacity: 0, y: 6, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.99 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[92vw] max-w-[940px] z-50 cursor-default"
        >
          {/* Main Clean Dropdown Panel */}
          <div className="relative bg-[#0A1628]/98 border border-slate-700/70 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
              
              {/* Left Section: 3 Minimal Product Columns */}
              <div className="lg:col-span-8 p-6 lg:p-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {INDUSTRIAL_PRODUCT_COLUMNS.map((column, colIdx) => (
                  <div key={colIdx} className="space-y-3">
                    {/* Category Label */}
                    <div className="text-xs font-semibold text-slate-400">
                      {column.categoryTitle}
                    </div>

                    {/* Items List */}
                    <div className="space-y-1">
                      {column.items.map((item: ProductMenuItem) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={onClose}
                          className="group flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-slate-800/50 text-slate-300 hover:text-white transition-colors duration-150"
                        >
                          {/* Minimal Outline Icon */}
                          <div className="text-slate-400 group-hover:text-[#FF6B00] transition-colors shrink-0 mt-0.5">
                            {getProductIcon(item.iconName)}
                          </div>
                          
                          {/* Title & 1-line Subtitle */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[13.5px] font-semibold text-slate-100 group-hover:text-white transition-colors leading-tight">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="text-[10px] font-medium px-2 py-0.2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[12px] text-slate-400 group-hover:text-slate-300 leading-normal mt-0.5 transition-colors">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Section: Clean 'Get started' Sidebar */}
              <div className="lg:col-span-4 bg-[#070F1C]/80 p-6 lg:p-7">
                <div className="text-xs font-semibold text-slate-400 mb-3.5">
                  Get started
                </div>

                <div className="space-y-2">
                  {QUICK_RESOURCE_LINKS.map((link) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={onClose}
                      className="block text-[13px] text-slate-300 hover:text-white transition-colors duration-150 py-1 font-normal"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


