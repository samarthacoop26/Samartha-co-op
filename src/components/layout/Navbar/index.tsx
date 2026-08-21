"use client";

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Topbar } from './Topbar';
import { MainNavbar } from './MainNavbar';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Update scrolled state based on distance from top
    if (latest > 40) {
      setIsScrolled(true);
      setIsHidden(false);
    } else {
      setIsScrolled(false);
      setIsHidden(false);
    }
  });

  // Buttery smooth ease transition for all animations
  const smoothTransition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

  return (
    <motion.header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-700 ${
        isScrolled ? 'p-0' : 'p-0 sm:p-4 lg:p-8'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      initial={false}
      animate={{
        y: isHidden ? '-100%' : '0%',
      }}
      transition={smoothTransition}
    >
      {/* Wrapper to add the slanted bottom-left edge and handle layout transitions */}
      <motion.div 
        className="w-full mx-auto shadow-2xl bg-[#222222] overflow-hidden"
        initial={false}
        animate={{
          maxWidth: isScrolled ? '100%' : '1280px', // 1280px is max-w-7xl
        }}
        transition={smoothTransition}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))'
        }}
      >
        <motion.div
          initial={false}
          animate={{
            height: isScrolled ? 0 : 'auto',
            opacity: isScrolled ? 0 : 1,
            translateY: isScrolled ? -20 : 0
          }}
          transition={smoothTransition}
        >
          <Topbar />
        </motion.div>
        
        <MainNavbar />
      </motion.div>
    </motion.header>
  );
}
