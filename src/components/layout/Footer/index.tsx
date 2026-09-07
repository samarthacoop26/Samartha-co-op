"use client";

import React from 'react';
import { Phone, Mail, ChevronRight, MapPin, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { CONTACT_CONFIG } from '@/data/contactConfig';

const SocialIcon = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => (
  <Link 
    href={href} 
    aria-label={label}
    className="w-9 h-9 rounded-full border border-gray-700 hover:border-[#FF6B00] flex items-center justify-center text-gray-400 hover:bg-[#FF6B00] hover:text-white transition-all duration-300"
  >
    {icon}
  </Link>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const NavLink = ({ text, href }: { text: string, href: string }) => (
  <Link 
    href={href} 
    className="flex items-center gap-2 text-gray-300 hover:text-[#FF6B00] transition-colors duration-200 text-sm font-medium py-1"
  >
    <ChevronRight size={14} className="text-[#FF6B00]" />
    {text}
  </Link>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { sales, quotations } = CONTACT_CONFIG.departments;

  return (
    <footer className="relative bg-[#0A1628] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          
          {/* Column 1: Company Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex flex-col">
              <div className="flex items-center gap-2.5">
                <svg width="22" height="26" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L0 28H6L12 14L18 28H24L12 0Z" fill="#FF6B00" />
                  <path d="M6 28H10L14 18H10L6 28Z" fill="white" />
                </svg>
                <span className="text-white text-xl font-bold tracking-tight">Samarth FRP Solutions</span>
              </div>
              <span className="text-gray-400 text-[10px] uppercase tracking-[0.18em] font-semibold mt-1">
                Industrial & Municipal Composites
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Specialized engineering, manufacturing, and pan-India supply of high-performance FRP products for infrastructure, defence, railway, and industrial sectors.
            </p>

            <div className="flex gap-3 pt-1">
              <SocialIcon icon={<LinkedinIcon />} href="#" label="LinkedIn" />
              <SocialIcon icon={<TwitterIcon />} href="#" label="Twitter" />
              <SocialIcon icon={<FacebookIcon />} href="#" label="Facebook" />
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <div className="space-y-2">
              <NavLink text="Home" href="/" />
              <NavLink text="FRP Products" href="/#products" />
              <NavLink text="Industries" href="/#industries" />
              <NavLink text="Why Us" href="/#why-us" />
              <NavLink text="Certificates" href="/certificates" />
              <NavLink text="Contact Us" href="/contact" />
            </div>
          </div>

          {/* Column 3: Legal & Compliance */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Legal & Policy
            </h4>
            <div className="space-y-2">
              <NavLink text="Privacy Policy" href="/privacy-policy" />
              <NavLink text="Terms of Use" href="/terms-and-conditions" />
              <NavLink text="Disclaimer" href="/disclaimer" />
            </div>
            <div className="pt-2 text-[11px] text-gray-400 space-y-1">
              <p className="font-semibold text-gray-300">GST: {CONTACT_CONFIG.gstin}</p>
              <p className="text-gray-400">MSME: {CONTACT_CONFIG.msmeRegNo}</p>
            </div>
          </div>

          {/* Column 4: Contact & Sales */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Inquiries
            </h4>
            
            <div className="space-y-3.5 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Works & Head Office:</span>
                  <span className="text-gray-400 text-xs">
                    {CONTACT_CONFIG.locations[0].addressLine1}, {CONTACT_CONFIG.locations[0].cityStateZip}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#FF6B00] shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block">Sales & Tech:</span>
                  <a href={`tel:${sales.phone}`} className="font-medium text-white hover:text-[#FF6B00] transition-colors">
                    {sales.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#FF6B00] shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block">Formal Quotes:</span>
                  <a href={`mailto:${quotations.email}`} className="font-medium text-white hover:text-[#FF6B00] transition-colors">
                    {quotations.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} {CONTACT_CONFIG.registeredName}. All rights reserved.
            </p>
          </div>

          {/* Legal Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="text-[#FF6B00]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
