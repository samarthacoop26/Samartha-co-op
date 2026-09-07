"use client";

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, type Transition } from 'framer-motion';
import { Topbar } from './Topbar';
import { MainNavbar } from './MainNavbar';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Buttery smooth transition for navbar layout and animations
  const smoothTransition: Transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'p-0' : 'p-0 sm:p-4 lg:p-8'
      }`}
    >
      {/* Container with drop-shadow filter so the polygon chamfer casts a rich, realistic shadow */}
      <motion.div 
        className="relative w-full mx-auto filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
        initial={false}
        animate={{
          maxWidth: isScrolled ? '100%' : '1280px', // 1280px is max-w-7xl
        }}
        transition={smoothTransition}
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
          <motion.div
            initial={false}
            animate={{
              height: isScrolled ? 0 : 'auto',
              opacity: isScrolled ? 0 : 1,
              translateY: isScrolled ? -20 : 0
            }}
            transition={smoothTransition}
            className={isScrolled ? 'overflow-hidden pointer-events-none' : 'overflow-hidden'}
          >
            <Topbar />
          </motion.div>
          
          <MainNavbar />
        </div>
      </motion.div>
    </header>
  );
}
