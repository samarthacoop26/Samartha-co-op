"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  FileText,
  AlertCircle,
  Clock,
  ArrowRight,
  Building2,
  HelpCircle,
} from "lucide-react";
import { CONTACT_CONFIG } from "@/data/contactConfig";

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageShellProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  readTime: string;
  badge: string;
  sections: LegalSection[];
}

export function LegalPageShell({
  title,
  subtitle,
  lastUpdated,
  readTime,
  badge,
  sections,
}: LegalPageShellProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id || ""
  );

  // Synchronize active section with scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Check if at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (isAtBottom && sections.length > 0) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      // Find current active section based on scroll offset
      const scrollOffset = window.scrollY + 130;
      let currentId = sections[0]?.id || "";

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollOffset >= top) {
            currentId = sections[i].id;
          }
        }
      }

      setActiveSection(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Smooth scroll handler for TOC clicks
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(id);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const legalNavTabs = [
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
      icon: <ShieldCheck size={15} />,
      isActive: pathname === "/privacy-policy",
    },
    {
      label: "Terms & Conditions",
      href: "/terms-and-conditions",
      icon: <FileText size={15} />,
      isActive:
        pathname === "/terms-and-conditions" || pathname === "/terms",
    },
    {
      label: "Disclaimer",
      href: "/disclaimer",
      icon: <AlertCircle size={15} />,
      isActive: pathname === "/disclaimer",
    },
  ];

  return (
    <div className="w-full bg-[#FAFBFD] text-[#0A1628] font-sans antialiased min-h-screen">
      {/* ═══ 1. INDUSTRIAL HERO HEADER ═══ */}
      <section className="relative w-full bg-[#0A1628] overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20 border-b border-gray-800 print:hidden">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(#FF6B00 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1628]/80 to-[#0A1628]" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/5 border border-white/10 rounded-full mb-4 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span className="text-[11px] font-bold tracking-widest text-gray-300 uppercase">
              {badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Meta Info Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-400 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#FF6B00]" />
              <span>Last Updated: <strong className="text-gray-200">{lastUpdated}</strong></span>
            </div>
            <span className="hidden sm:inline text-gray-600">•</span>
            <div className="flex items-center gap-1.5">
              <span>Estimated Reading Time: <strong className="text-gray-200">{readTime}</strong></span>
            </div>
            <span className="hidden sm:inline text-gray-600">•</span>
            <div className="flex items-center gap-1.5">
              <span>Jurisdiction: <strong className="text-gray-200">India</strong></span>
            </div>
          </div>
        </div>

        {/* Slanted Breadcrumb Bar */}
        <div className="absolute bottom-0 right-0 z-20 hidden sm:block">
          <div
            className="bg-[#FF6B00] text-[#0A1628] font-bold text-xs py-2 px-8 flex items-center gap-2 shadow-lg"
            style={{
              clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="opacity-60">/</span>
            <span className="text-[#0A1628] font-semibold">Legal</span>
          </div>
        </div>
      </section>

      {/* ═══ 2. MINIMALIST POLICY SWITCHER TABS ═══ */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/90 shadow-sm print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex items-center justify-center overflow-x-auto py-2.5">
          <nav className="flex items-center justify-center gap-2 sm:gap-3 shrink-0">
            {legalNavTabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  tab.isActive
                    ? "bg-[#0A1628] text-white shadow-sm"
                    : "text-gray-600 hover:text-[#0A1628] hover:bg-gray-100/80"
                }`}
              >
                <span className={tab.isActive ? "text-[#FF6B00]" : "text-gray-400"}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ═══ 3. MAIN LEGAL CONTENT ═══ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── LEFT: Sticky Synchronized Table of Contents (Desktop) ── */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-20 print:hidden space-y-6">
            <div className="bg-white border border-gray-200/90 rounded-2xl p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3.5 flex items-center gap-2 px-1">
                <FileText size={14} className="text-[#FF6B00]" />
                <span>Document Contents</span>
              </h3>
              <nav className="space-y-0.5 text-xs">
                {sections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className={`flex items-start gap-2.5 py-2 px-3 rounded-lg transition-all duration-150 border-l-2 ${
                        isActive
                          ? "bg-orange-50/70 border-[#FF6B00] text-[#FF6B00] font-bold shadow-xs"
                          : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium"
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] font-bold shrink-0 mt-0.5 ${
                          isActive ? "text-[#FF6B00]" : "text-gray-400"
                        }`}
                      >
                        {sec.number}
                      </span>
                      <span className="line-clamp-2 leading-snug">{sec.title}</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Need assistance box */}
            <div className="bg-[#0A1628] text-white rounded-2xl p-5 shadow-sm border border-gray-800">
              <div className="flex items-center gap-2 text-[#FF6B00] mb-2">
                <HelpCircle size={17} />
                <h4 className="text-sm font-bold text-white">Have Questions?</h4>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Our compliance and customer support team is available to clarify any terms or data inquiries.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 w-full bg-[#FF6B00] hover:bg-[#e66000] text-white py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Contact Support</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </aside>

          {/* ── RIGHT: Policy Content Body ── */}
          <article className="lg:col-span-8 space-y-8 sm:space-y-10">
            {/* Document Header Summary Card */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)]">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Official Entity
                  </span>
                  <h2 className="text-base font-bold text-[#0A1628]">
                    {CONTACT_CONFIG.registeredName}
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                    GSTIN
                  </span>
                  <span className="text-xs font-mono font-semibold text-gray-700">
                    {CONTACT_CONFIG.gstin}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                This document is published in accordance with the provisions of applicable Indian laws including the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023. By accessing or using this website, you acknowledge that you have read and understood these provisions.
              </p>
            </div>

            {/* Render Each Section */}
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)] transition-all"
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 text-[#FF6B00] font-mono text-xs font-bold shrink-0">
                    {section.number}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0A1628] tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="text-sm sm:text-[15px] text-gray-700 leading-relaxed space-y-3.5 prose prose-orange max-w-none">
                  {section.content}
                </div>
              </section>
            ))}

            {/* Compliance & Contact Footer Banner */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)]">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#0A1628] text-[#FF6B00] flex items-center justify-center shrink-0">
                  <Building2 size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A1628]">
                    Official Correspondence & Grievances
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    For privacy inquiries, rights requests, or legal notices, please write to our compliance desk:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-gray-100">
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">Registered Office Address:</p>
                  <p className="text-gray-600 leading-relaxed">
                    {CONTACT_CONFIG.locations[0].addressLine1},<br />
                    {CONTACT_CONFIG.locations[0].addressLine2},<br />
                    {CONTACT_CONFIG.locations[0].cityStateZip}, India
                  </p>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-gray-900 block">Email:</span>
                    <a
                      href={`mailto:${CONTACT_CONFIG.departments.sales.email}`}
                      className="text-[#FF6B00] hover:underline font-medium"
                    >
                      {CONTACT_CONFIG.departments.sales.email}
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block">Phone:</span>
                    <a
                      href={`tel:${CONTACT_CONFIG.departments.sales.phone}`}
                      className="text-gray-700 hover:text-[#FF6B00] font-medium"
                    >
                      {CONTACT_CONFIG.departments.sales.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </main>
    </div>
  );
}

