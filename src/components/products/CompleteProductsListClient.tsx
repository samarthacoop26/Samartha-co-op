"use client";

import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Share2,
  Copy,
  Check,
  ArrowRight,
  PackageSearch,
  ChevronDown,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { trackCtaClick, trackProductQuoteClick } from "@/lib/analytics";
import { CONTACT_CONFIG } from "@/data/contactConfig";

export interface CompleteProductRow {
  name: string;
  slug: string;
  href: string;
  serial: string; // 3-digit serial e.g. "001"
}

export interface CompleteCategoryGroup {
  id: string;
  slug: string;
  categoryNumber: string;
  categoryTitle: string;
  shortTitle: string;
  href: string;
  products: CompleteProductRow[];
}

interface CompleteProductsListClientProps {
  categories: CompleteCategoryGroup[];
  totalCategories: number;
  totalProducts: number;
}

export function CompleteProductsListClient({
  categories,
  totalCategories,
  totalProducts,
}: CompleteProductsListClientProps) {
  const { openQuoteModal } = useQuoteModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>(
    categories[0]?.slug || ""
  );
  const [copied, setCopied] = useState(false);

  // Subscribe to Web Share API support safely without cascading renders
  const canShare = useSyncExternalStore(
    () => () => {},
    () => typeof navigator !== "undefined" && typeof navigator.share === "function",
    () => false
  );

  const searchInputRef = useRef<HTMLInputElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Filter categories and products based on live search
  const { filteredCategories, matchingProductsCount } = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      return {
        filteredCategories: categories,
        matchingProductsCount: totalProducts,
      };
    }

    let matchCount = 0;
    const result: CompleteCategoryGroup[] = [];

    for (const cat of categories) {
      const matchingItems = cat.products.filter((p) =>
        p.name.toLowerCase().includes(q)
      );
      if (matchingItems.length > 0) {
        matchCount += matchingItems.length;
        result.push({
          ...cat,
          products: matchingItems,
        });
      }
    }

    return {
      filteredCategories: result,
      matchingProductsCount: matchCount,
    };
  }, [categories, searchQuery, totalProducts]);

  // Setup IntersectionObserver for jump-nav active highlight
  useEffect(() => {
    if (typeof window === "undefined" || filteredCategories.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible section with highest intersection ratio or closest to top
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by bounding top
          visibleEntries.sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - 140) -
              Math.abs(b.boundingClientRect.top - 140)
          );
          setActiveCategorySlug(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      }
    );

    filteredCategories.forEach((cat) => {
      const el = document.getElementById(cat.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredCategories]);

  // Handle Share
  const handleShare = async () => {
    const currentUrl =
      typeof window !== "undefined"
        ? window.location.href
        : "https://www.samarthcorporation.co/frp-products-list";

    const shareData = {
      title: "Complete FRP Product List — Samarth Corporation",
      text: `Every product Samarth Corporation manufactures: ${totalProducts} products across ${totalCategories} divisions.`,
      url: currentUrl,
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        trackCtaClick("Native Share", "ProductList");
      } catch {
        // User cancelled or share failed silently
      }
    }
  };

  // Handle Copy Link
  const handleCopyLink = async () => {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : "https://www.samarthcorporation.co/frp-products-list";
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const input = document.createElement("input");
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      trackCtaClick("Copy Link", "ProductList");
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  // Smooth scroll to category
  const handleJumpToCategory = (
    e: React.MouseEvent<HTMLAnchorElement> | null,
    slug: string
  ) => {
    if (e) e.preventDefault();
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveCategorySlug(slug);
      window.history.replaceState(null, "", `#${slug}`);
    }
  };

  // Clear search query
  const handleClearSearch = () => {
    setSearchQuery("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Trigger enquiry quote modal pre-filling product details
  const handleEnquire = (
    e: React.MouseEvent,
    productName: string,
    catTitle: string,
    catNumber: string
  ) => {
    e.preventDefault();
    e.stopPropagation();

    trackProductQuoteClick({
      id: productName,
      name: productName,
      categoryName: catTitle,
      source: "product_section",
    });

    openQuoteModal({
      productName: productName,
      title: `RFQ: ${productName}`,
      message: `I would like to request technical specifications, CAD drawings, pricing, and manufacturing lead time for ${productName} under Category ${catNumber} (${catTitle}).`,
    });
  };

  return (
    <div className="w-full bg-[#FAFBFD] text-[#0A1628]">
      {/* ═══════════════════════════════════════════════════════════════
          ACTION TOOLBAR (Share, Copy Link)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-200/90 py-3 sm:py-3.5 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Left Quick Note */}
            <div className="flex items-center gap-2 text-xs text-gray-500 font-sans">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span className="font-semibold text-gray-800">Direct Shareable Catalog</span>
              <span className="hidden sm:inline text-gray-400">•</span>
              <span className="hidden sm:inline">Send full range directly to clients or contractors</span>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Native Share Button (if supported) */}
              {canShare && (
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors duration-150 cursor-pointer"
                  title="Share link"
                >
                  <Share2 className="w-3.5 h-3.5 text-slate-600" />
                  <span>Share</span>
                </button>
              )}

              {/* Copy Link Button */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors duration-150 cursor-pointer min-w-[95px] justify-center"
                title="Copy shareable URL to clipboard"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="inline-flex items-center gap-1 text-[#FF6B00] font-bold"
                    >
                      <Check className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>Copied!</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="inline-flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Link</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STICKY TOOLBAR (Live Search & Category Jump-Nav Pills)
          Sticks right below the site navbar
          ═══════════════════════════════════════════════════════════════ */}
      <div className="sticky top-[64px] sm:top-[70px] md:top-[76px] z-30 bg-[#0A1628]/98 backdrop-blur-md border-b border-slate-700/80 shadow-lg py-3 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2.5">
          {/* Search Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Live Search Input with Accessible Label */}
            <div className="relative flex-1 max-w-xl">
              <label htmlFor="product-search-input" className="sr-only">
                Search products by name
              </label>
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  ref={searchInputRef}
                  id="product-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${totalProducts} products across ${totalCategories} divisions...`}
                  className="w-full pl-9 pr-9 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="absolute right-3 p-0.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Clear search query"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Dropdown Selector */}
            <div className="relative min-w-[200px] sm:min-w-[240px]">
              <select
                value={activeCategorySlug}
                onChange={(e) => handleJumpToCategory(null, e.target.value)}
                className="w-full appearance-none pl-3.5 pr-8 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors cursor-pointer"
                aria-label="Jump to Product Category"
              >
                <option value="" disabled>
                  Jump to Category...
                </option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.slug} className="bg-slate-900 text-white">
                    {cat.categoryNumber}. {cat.shortTitle || cat.categoryTitle} ({cat.products.length})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Live Count Indicator */}
            <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
              <span className="type-footer text-xs font-mono-accent text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/70">
                Showing{" "}
                <span className="font-bold text-[#FF6B00]">
                  {matchingProductsCount}
                </span>{" "}
                of {totalProducts} products
              </span>
            </div>
          </div>

          {/* Jump-Nav Pills Row (Horizontally scrollable on mobile) */}
          <nav
            ref={navContainerRef}
            aria-label="Product Division Jump Links"
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5"
          >
            {categories.map((cat) => {
              const isActive = activeCategorySlug === cat.slug;
              const isFilteredOut =
                searchQuery.trim().length > 0 &&
                !filteredCategories.some((fc) => fc.slug === cat.slug);

              if (isFilteredOut) return null;

              return (
                <a
                  key={cat.id}
                  href={`#${cat.slug}`}
                  onClick={(e) => handleJumpToCategory(e, cat.slug)}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold transition-all duration-150 select-none border ${
                    isActive
                      ? "bg-[#FF6B00] border-[#FF6B00] text-white shadow-xs"
                      : "bg-slate-900/80 border-slate-700/70 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800"
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-80">
                    {cat.categoryNumber}
                  </span>
                  <span>{cat.shortTitle}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MAIN CONTENT AREA (Print Header + Category Sections)
          ═══════════════════════════════════════════════════════════════ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-24 sm:pb-20">
        
        {/* ═══ PRINT-ONLY HEADER ═══ */}
        <div className="hidden print:block pb-5 mb-6 border-b-2 border-slate-950">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
                {CONTACT_CONFIG.companyName}
              </h1>
              <p className="text-sm font-bold text-slate-900 mt-1">
                Complete FRP Product Directory &bull; {totalProducts} Products across {totalCategories} Divisions
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Industrial Composites, Dual-Laminates, Access Gratings, Architectural Panels, Defence, Boats &amp; Pools
              </p>
            </div>
            <div className="text-right text-xs text-slate-800 space-y-0.5">
              <div className="font-bold text-slate-950">www.samarthcorporation.co</div>
              <div>{CONTACT_CONFIG.contacts.vishal.phoneDisplay}</div>
              <div>{CONTACT_CONFIG.email}</div>
            </div>
          </div>
        </div>

        {/* ═══ EMPTY SEARCH STATE ═══ */}
        {filteredCategories.length === 0 && (
          <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 text-center max-w-xl mx-auto my-12 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center mx-auto text-[#FF6B00] mb-4">
              <PackageSearch className="w-6 h-6" />
            </div>
            <h3 className="type-h3 text-gray-900 mb-2">
              No products found matching &ldquo;{searchQuery}&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
              We fabricate bespoke, custom-engineered PP and FRP composite assemblies to your specific CAD drawings, resin matrices, and dimensional requirements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleClearSearch}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
              >
                Clear Search
              </button>
              <button
                type="button"
                onClick={() =>
                  openQuoteModal({
                    title: "Custom FRP Equipment Inquiry",
                    message: `Inquiry regarding custom fabrication for: "${searchQuery}"`,
                  })
                }
                className="px-4 py-2 rounded-xl bg-[#FF6B00] hover:bg-[#e66000] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        )}

        {/* ═══ CATEGORY GROUPS ═══ */}
        <div className="space-y-8 sm:space-y-10">
          {filteredCategories.map((cat) => (
            <section
              key={cat.id}
              id={cat.slug}
              className="scroll-mt-36 sm:scroll-mt-40 bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden break-inside-avoid print:border-slate-300 print:shadow-none print:rounded-none"
            >
              {/* Category Header Bar */}
              <div className="bg-slate-50/80 border-b border-gray-200/90 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 print:bg-slate-100 print:border-slate-400">
                <div className="flex items-center gap-3">
                  <span className="type-eyebrow text-[#FF6B00] font-bold px-2 py-0.5 bg-orange-50 border border-orange-200/70 rounded-md print:border-slate-400 print:text-slate-900">
                    CATEGORY {cat.categoryNumber}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-[#0A1628] tracking-tight">
                    {cat.categoryTitle}
                  </h2>
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                    {cat.products.length}
                  </span>
                </div>

                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1628] hover:text-[#FF6B00] transition-colors self-start sm:self-center shrink-0 group print:hidden"
                >
                  <span>View Division Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Semantic Multi-column Product List */}
              <div className="p-4 sm:p-6">
                <ul
                  role="list"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 print:grid-cols-2 print:gap-1.5"
                >
                  {cat.products.map((product) => (
                    <li
                      key={product.serial}
                      className="group relative flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-50/60 hover:bg-orange-50/50 border border-slate-200/70 hover:border-[#FF6B00]/40 transition-all duration-150 print:bg-white print:border-slate-200 print:p-1.5"
                    >
                      {/* Product Main Link (Left) */}
                      <Link
                        href={product.href}
                        className="flex items-center gap-2.5 min-w-0 flex-1 select-text"
                      >
                        {/* Serial Number (001-115) */}
                        <span className="font-mono text-[11px] font-bold text-slate-400 group-hover:text-[#FF6B00] shrink-0 transition-colors">
                          {product.serial}
                        </span>

                        {/* Product Title */}
                        <span className="text-xs sm:text-[13px] font-semibold text-slate-800 group-hover:text-[#0A1628] transition-colors leading-snug line-clamp-2">
                          {product.name}
                        </span>
                      </Link>

                      {/* Enquire Quick Action (Step 5) */}
                      <button
                        type="button"
                        onClick={(e) =>
                          handleEnquire(
                            e,
                            product.name,
                            cat.categoryTitle,
                            cat.categoryNumber
                          )
                        }
                        className="shrink-0 px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-600 hover:text-[#FF6B00] hover:border-[#FF6B00]/50 hover:bg-orange-50 text-[10.5px] font-semibold opacity-100 lg:opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-150 cursor-pointer shadow-2xs print:hidden"
                        title={`Enquire for ${product.name}`}
                      >
                        <span>Enquire</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* ═══ PRINT-ONLY FOOTER BLOCK ═══ */}
        <div className="hidden print:block pt-6 mt-10 border-t-2 border-slate-950 text-xs text-slate-900 break-inside-avoid">
          <div className="grid grid-cols-2 gap-6 pb-4 border-b border-slate-300">
            <div>
              <div className="font-bold text-slate-950 uppercase mb-1">
                {CONTACT_CONFIG.locations[0].shortLabel || CONTACT_CONFIG.locations[0].name}
              </div>
              <div>{CONTACT_CONFIG.locations[0].addressLine1}, {CONTACT_CONFIG.locations[0].addressLine2}</div>
              <div>{CONTACT_CONFIG.locations[0].cityStateZip}, India</div>
              <div className="mt-1">Tel: {CONTACT_CONFIG.contacts.vishal.phoneDisplay}</div>
            </div>
            <div>
              <div className="font-bold text-slate-950 uppercase mb-1">
                {CONTACT_CONFIG.locations[1].shortLabel || CONTACT_CONFIG.locations[1].name}
              </div>
              <div>{CONTACT_CONFIG.locations[1].addressLine1}, {CONTACT_CONFIG.locations[1].addressLine2}</div>
              <div>{CONTACT_CONFIG.locations[1].cityStateZip}, India</div>
              <div className="mt-1">Email: {CONTACT_CONFIG.email}</div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-3 text-[11px] text-slate-700">
            <div>
              <span className="font-bold">GSTIN:</span> {CONTACT_CONFIG.gstin} &bull; <span className="font-bold">MSME UDYAM:</span> {CONTACT_CONFIG.msmeRegNo}
            </div>
            <div>
              Official Technical Catalog &bull; {CONTACT_CONFIG.website}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
