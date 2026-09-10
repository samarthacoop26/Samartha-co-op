import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { CONTACT_CONFIG } from '@/data/contactConfig';

export function Topbar() {
  const workshop = CONTACT_CONFIG.locations[1];
  const regdOffice = CONTACT_CONFIG.locations[0];

  return (
    <div className="flex items-center justify-between py-1.5 sm:py-2 px-3 sm:px-6 md:px-10 border-b border-gray-700/50 bg-[#1E2229] text-xs text-gray-300 overflow-x-hidden">
      {/* Left side: Contact (Email & Phone) */}
      <div className="flex items-center gap-2.5 sm:gap-6 flex-wrap">
        {/* Official Email */}
        <a 
          href={`mailto:${CONTACT_CONFIG.email}`} 
          className="group flex items-center gap-1.5 text-gray-200 hover:text-[#FF6B00] transition-colors py-0.5 font-medium"
          title={`Email us at ${CONTACT_CONFIG.email}`}
        >
          <Mail className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 group-hover:scale-110 transition-transform" />
          <span className="font-mono-accent text-[10.5px] sm:text-xs tracking-tight truncate max-w-[155px] xs:max-w-[210px] sm:max-w-none">{CONTACT_CONFIG.email}</span>
        </a>
        
        {/* Phone */}
        <a 
          href={`tel:${CONTACT_CONFIG.contacts.vishal.phone}`} 
          className="group flex items-center gap-1.5 text-gray-300 hover:text-[#FF6B00] transition-colors py-0.5 font-medium"
          title={`Call ${CONTACT_CONFIG.contacts.vishal.name} (${CONTACT_CONFIG.contacts.vishal.phoneDisplay})`}
        >
          <Phone className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 group-hover:scale-110 transition-transform" />
          <span className="font-mono-accent text-[10.5px] sm:text-xs whitespace-nowrap">{CONTACT_CONFIG.contacts.vishal.phoneDisplay}</span>
        </a>
      </div>
      
      {/* Right side: Clickable Addresses */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Clickable Addresses Section */}
        <div className="flex items-center gap-2 hidden md:flex text-gray-300">
          <MapPin className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 animate-pulse" />
          <div className="flex items-center gap-2 text-[11px]">
            {/* Workshop Link */}
            <a
              href={workshop.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-gray-300 hover:text-[#FF6B00] transition-colors py-0.5 px-1.5 rounded hover:bg-white/5 cursor-pointer font-semibold"
              title="Open MIDC Taloja Workshop on Google Maps (Directions & Location)"
            >
              <span className="text-gray-200 group-hover:text-[#FF6B00] transition-colors">
                WORKSHOP
              </span>
              <ExternalLink className="w-3 h-3 text-[#FF6B00] opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>

            <span className="text-gray-600">|</span>

            {/* Regd Office Link */}
            <a
              href={regdOffice.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-gray-300 hover:text-[#FF6B00] transition-colors py-0.5 px-1.5 rounded hover:bg-white/5 cursor-pointer font-semibold"
              title="Open Dombivli East Registered Office on Google Maps (Directions & Location)"
            >
              <span className="text-gray-200 group-hover:text-[#FF6B00] transition-colors">
                REGD. OFFICE
              </span>
              <ExternalLink className="w-3 h-3 text-[#FF6B00] opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
