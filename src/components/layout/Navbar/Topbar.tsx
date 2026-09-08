import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { CONTACT_CONFIG } from '@/data/contactConfig';

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
  const workshop = CONTACT_CONFIG.locations[1];
  const regdOffice = CONTACT_CONFIG.locations[0];

  return (
    <div className="flex items-center justify-between py-2 px-4 sm:px-6 md:px-10 border-b border-gray-700/50 bg-[#1E2229] text-xs text-gray-300">
      {/* Left side: Contact + Clickable Addresses */}
      <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
        <a 
          href={`mailto:${CONTACT_CONFIG.email}`} 
          className="flex items-center gap-1.5 transition-colors hover:text-[#FF6B00]"
          title={`Email us at ${CONTACT_CONFIG.email}`}
        >
          <Mail className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
          <span className="hidden xs:inline">{CONTACT_CONFIG.email}</span>
        </a>
        
        <a 
          href={`tel:${CONTACT_CONFIG.contacts.vishal.phone}`} 
          className="flex items-center gap-1.5 transition-colors hover:text-[#FF6B00]"
          title={`Call ${CONTACT_CONFIG.contacts.vishal.name} (${CONTACT_CONFIG.contacts.vishal.phoneDisplay})`}
        >
          <Phone className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
          <span>{CONTACT_CONFIG.contacts.vishal.phoneDisplay}</span>
        </a>

        {/* Clickable Addresses Section */}
        <div className="flex items-center gap-2 border-l border-gray-700 pl-4 sm:pl-6 hidden lg:flex text-gray-400">
          <MapPin className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 animate-pulse" />
          <div className="flex items-center gap-2 text-[11px]">
            {/* Workshop Link */}
            <a
              href={workshop.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 hover:text-[#FF6B00] transition-colors py-0.5"
              title="Open MIDC Taloja Workshop on Google Maps (Directions & Location)"
            >
              <strong className="font-semibold text-gray-200 group-hover:text-[#FF6B00] transition-colors">
                WORKSHOP:
              </strong>
              <span className="underline decoration-dotted decoration-gray-600 group-hover:decoration-[#FF6B00] underline-offset-2">
                MIDC Taloja, Raigad
              </span>
              <ExternalLink className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100 group-hover:text-[#FF6B00] transition-opacity" />
            </a>

            <span className="text-gray-600">|</span>

            {/* Regd Office Link */}
            <a
              href={regdOffice.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 hover:text-[#FF6B00] transition-colors py-0.5"
              title="Open Dombivli Registered Office on Google Maps (Directions & Location)"
            >
              <strong className="font-semibold text-gray-200 group-hover:text-[#FF6B00] transition-colors">
                REGD:
              </strong>
              <span className="underline decoration-dotted decoration-gray-600 group-hover:decoration-[#FF6B00] underline-offset-2">
                Dombivli (W), Thane
              </span>
              <ExternalLink className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100 group-hover:text-[#FF6B00] transition-opacity" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Right side: Socials (GST, UDYAM, and Operating Hours removed) */}
      <div className="flex items-center gap-4 text-gray-400">
        <div className="flex items-center gap-3">
          <Link 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-[#FF6B00] transition-colors" 
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </Link>
          <Link 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-[#FF6B00] transition-colors" 
            aria-label="Twitter"
            title="Twitter / X Profile"
          >
            <TwitterIcon className="w-3.5 h-3.5" />
          </Link>
          <Link 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-[#FF6B00] transition-colors" 
            aria-label="Facebook"
            title="Facebook Page"
          >
            <FacebookIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
