"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { CONTACT_CONFIG } from "@/data/contactConfig";

const SocialLink = ({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) => (
  <Link
    href={href}
    aria-label={label}
    className="w-8 h-8 rounded-lg bg-slate-800/50 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#FF6B00] hover:bg-[#FF6B00]/10 transition-all duration-200"
  >
    {icon}
  </Link>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { sales } = CONTACT_CONFIG.departments;

  return (
    <footer className="relative bg-[#060D17] text-white border-t border-slate-800/80 overflow-hidden">
      {/* Subtle Ambient Top Glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[120px] bg-[#FF6B00]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 sm:pt-16 pb-12">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/70">
          
          {/* Column 1: Brand & Heritage (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-flex flex-col group">
              <div className="flex items-center gap-2.5">
                <svg
                  width="22"
                  height="26"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:scale-105"
                >
                  <path d="M12 0L0 28H6L12 14L18 28H24L12 0Z" fill="#FF6B00" />
                  <path d="M6 28H10L14 18H10L6 28Z" fill="white" />
                </svg>
                <span className="text-white text-xl font-extrabold tracking-tight">
                  Samarth Corporation
                </span>
              </div>
              <span className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold mt-1 ml-[32px]">
                PP &amp; FRP Engineering Solutions
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed max-w-sm font-normal">
              Specialized engineering, custom fabrication, site erection, and turnkey maintenance of high-performance thermoplastic &amp; composite equipment across India.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <SocialLink icon={<LinkedinIcon />} href="#" label="LinkedIn" />
              <SocialLink icon={<TwitterIcon />} href="#" label="Twitter" />
              <SocialLink icon={<FacebookIcon />} href="#" label="Facebook" />
            </div>
          </div>

          {/* Column 2: Minimal Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
              <span>Navigation</span>
            </div>

            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/about#what-we-manufacture" },
                { label: "Certifications", href: "/certificates" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-xs sm:text-[13px] text-slate-300 hover:text-white transition-colors duration-150"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#FF6B00] group-hover:w-2 transition-all duration-200" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Locations & Direct Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
              <span>Facilities &amp; Contacts</span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              {CONTACT_CONFIG.locations.map((loc) => (
                <div
                  key={loc.id}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-slate-200 text-[11.5px]">
                          {loc.shortLabel || loc.name}
                        </span>
                        <a
                          href={loc.googleMapsDirectionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-bold text-[#FF6B00] hover:underline inline-flex items-center gap-0.5"
                          title={`Directions to ${loc.name} on Google Maps`}
                        >
                          Directions <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                      <p className="text-slate-400 text-[11px] leading-snug mt-1">
                        {loc.addressLine1}, {loc.addressLine2}, {loc.cityStateZip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Direct Communications */}
              <div className="pt-1 space-y-2">
                <div className="flex items-center gap-2.5 text-xs">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a
                      href="tel:+919930862729"
                      className="text-slate-200 hover:text-[#FF6B00] font-medium transition-colors"
                    >
                      +91 99308 62729
                    </a>
                    <span className="text-slate-600">•</span>
                    <a
                      href="tel:+919930240239"
                      className="text-slate-200 hover:text-[#FF6B00] font-medium transition-colors"
                    >
                      +91 99302 40239
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-xs">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a
                    href={`mailto:${sales.email}`}
                    className="text-slate-200 hover:text-[#FF6B00] font-medium transition-colors"
                  >
                    {sales.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {CONTACT_CONFIG.registeredName}. All rights reserved.
          </p>

          {/* Legal Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 text-xs text-slate-400 font-medium">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/disclaimer"
              className="hover:text-white transition-colors"
            >
              Disclaimer
            </Link>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            type="button"
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 text-slate-400 hover:text-white transition-all cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span className="text-[11px] font-semibold">Top</span>
            <ArrowUp className="w-3 h-3 text-[#FF6B00] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
