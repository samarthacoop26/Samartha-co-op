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

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

export function Topbar() {
  return (
    <div className="flex items-center justify-between py-3 px-6 md:px-12 border-b border-gray-700/50 bg-[#222]">
      <div className="flex items-center gap-6 text-xs text-gray-400">
        <div className="flex items-center gap-2 transition-colors hover:text-white cursor-pointer">
          <Mail className="w-4 h-4 text-amber-500" />
          <span>info@example.com</span>
        </div>
        <div className="flex items-center gap-2 transition-colors hover:text-white cursor-pointer">
          <Phone className="w-4 h-4 text-amber-500" />
          <span>+123 456 7890</span>
        </div>
        <div className="flex items-center gap-2 transition-colors hover:text-white cursor-pointer border-l border-gray-700 pl-6 ml-2 hidden lg:flex">
          <Globe className="w-4 h-4 text-amber-500" />
          <span><strong className="font-semibold text-white">ADDRESS:</strong> 20c Factory Street, Newyork, NY 10205</span>
        </div>
      </div>
      
      <div className="flex items-center gap-5">
        <Link href="#" className="text-amber-500 hover:text-amber-400 transition-colors">
          <FacebookIcon className="w-4 h-4" />
        </Link>
        <Link href="#" className="text-amber-500 hover:text-amber-400 transition-colors">
          <TwitterIcon className="w-4 h-4" />
        </Link>
        <Link href="#" className="text-amber-500 hover:text-amber-400 transition-colors">
          <LinkedinIcon className="w-4 h-4" />
        </Link>
        <Link href="#" className="text-amber-500 hover:text-amber-400 transition-colors">
          <YoutubeIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
