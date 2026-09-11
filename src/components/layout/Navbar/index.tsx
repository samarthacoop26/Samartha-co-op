"use client";

import { useState, useEffect } from 'react';
import { Topbar } from './Topbar';
import { MainNavbar } from './MainNavbar';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to capture any initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'p-0' : 'p-0 sm:p-4 lg:p-8'
      }`}
    >
      {/* Container with drop-shadow filter so the polygon chamfer casts a rich, realistic shadow */}
      <div 
        className={`relative w-full mx-auto filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? 'max-w-full' : 'max-w-7xl'
        }`}
      >
        {/* Layer 1: Crisp outer border matching the iconic chamfered polygon */}
        <div 
          className="absolute inset-0 bg-slate-700/60 pointer-events-none transition-all duration-300"
          style={{
            clipPath: isScrolled
              ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
              : 'polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))'
          }}
        />

        {/* Layer 2: Main dark navy background with 1px inset to reveal the crisp chamfer border */}
        <div 
          className="absolute inset-[1px] bg-[#0A1628]/95 backdrop-blur-md pointer-events-none transition-all duration-300"
          style={{
            clipPath: isScrolled
              ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
              : 'polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))'
          }}
        />

        {/* Navbar Content Layer - kept unclipped so dropdowns and overlays render cleanly */}
        <div className="relative z-10">
          <div
            className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled
                ? 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
                : 'max-h-16 opacity-100 translate-y-0'
            }`}
          >
            <Topbar />
          </div>
          
          <MainNavbar />
        </div>
      </div>
    </header>
  );
}
