import { Mail, Phone, Globe } from 'lucide-react';
import Link from 'next/link';

// Simple, minimal inline SVGs for social brands
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export function Topbar() {
  return (
    <div className="flex items-center justify-between py-2.5 px-6 md:px-12 border-b border-gray-700/50 bg-[#222] text-xs text-gray-300">
      <div className="flex items-center gap-6">
        <a href="mailto:info@samarthcomposites.com" className="flex items-center gap-2 transition-colors hover:text-[#FF6B00]">
          <Mail className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>info@samarthcomposites.com</span>
        </a>
        <a href="tel:+917700093966" className="flex items-center gap-2 transition-colors hover:text-[#FF6B00]">
          <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>+91 77000 93966</span>
        </a>
        <div className="flex items-center gap-2 border-l border-gray-700 pl-6 hidden xl:flex text-gray-400">
          <Globe className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span><strong className="font-semibold text-gray-200">PLANT:</strong> Chakan MIDC Heavy Engineering Zone, Pune</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-gray-400">
        <Link
          href="/certificates"
          className="text-[11px] font-semibold tracking-wider text-gray-400 hover:text-[#FF6B00] transition-colors uppercase hidden sm:inline"
        >
          ISO 9001:2015 Certified
        </Link>
        <span className="text-gray-600 hidden sm:inline">|</span>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B00] transition-colors" aria-label="LinkedIn">
          <LinkedinIcon className="w-3.5 h-3.5" />
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B00] transition-colors" aria-label="Twitter">
          <TwitterIcon className="w-3.5 h-3.5" />
        </Link>
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B00] transition-colors" aria-label="Facebook">
          <FacebookIcon className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
