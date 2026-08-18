"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Topbar } from './Topbar';
import { MainNavbar } from './MainNavbar';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    
    // Check on initial load
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'p-0' : 'p-0 sm:p-4 lg:p-8'
      }`}
    >
      {/* Wrapper to add the slanted bottom-left edge and handle layout transitions */}
      <motion.div 
        className="w-full mx-auto shadow-2xl bg-[#222222] overflow-hidden"
        initial={false}
        animate={{
          maxWidth: isScrolled ? '100%' : '1280px', // 1280px is max-w-7xl
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Topbar />
        </motion.div>
        
        <MainNavbar />
      </motion.div>
    </header>
  );
}
