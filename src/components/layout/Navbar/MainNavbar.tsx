import Link from 'next/link';
import { Menu, ChevronDown, ArrowRight } from 'lucide-react';

export function MainNavbar() {
  return (
    <div className="flex items-center justify-between py-5 px-6 md:px-12 bg-[#222]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L0 28H6L12 14L18 28H24L12 0Z" fill="#F59E0B" />
          <path d="M6 28H10L14 18H10L6 28Z" fill="white" />
        </svg>
        <span className="text-white text-2xl font-bold tracking-wide">Aventra</span>
      </Link>

      {/* Nav Links */}
      <nav className="hidden lg:flex items-center gap-8">
        <Link href="#" className="flex items-center gap-1 text-white font-medium hover:text-amber-500 transition-colors">
          Home <ChevronDown className="w-4 h-4" />
        </Link>
        <Link href="#" className="text-white font-medium hover:text-amber-500 transition-colors">
          Services
        </Link>
        <Link href="#" className="text-white font-medium hover:text-amber-500 transition-colors">
          About
        </Link>
        <Link href="#" className="text-white font-medium hover:text-amber-500 transition-colors">
          Projects
        </Link>
        <Link href="#" className="text-white font-medium hover:text-amber-500 transition-colors">
          Pricing Plan
        </Link>
        <Link href="#" className="text-white font-medium hover:text-amber-500 transition-colors">
          Blog
        </Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4 md:gap-6">
        <Link 
          href="/quote"
          className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#111] px-7 py-3 font-bold text-sm uppercase tracking-widest transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:shadow-[0_4px_20px_-4px_rgba(245,158,11,0.5)] group"
        >
          <span>Get a Quote</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <button className="text-white hover:text-amber-500 transition-colors lg:hidden" aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
