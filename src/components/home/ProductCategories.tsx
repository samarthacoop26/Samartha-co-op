"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProductCategory {
  id: string;
  categoryNumber: string;
  title: string;
  subheading: string;
  image: string;
  link: string;
  badge: string;
}

const productCategories: ProductCategory[] = [
  {
    id: "industrial-projects",
    categoryNumber: "01",
    title: "Industrial Projects & Turnkey Systems",
    subheading: "Custom-built chemical scrubbers, exhaust blowers, pipelines, process tanks and plant erection across India.",
    image: "/images/about/blowers-scrubbers.jpg",
    link: "/products/industrial-projects",
    badge: "Turnkey Execution",
  },
  {
    id: "tanks-piping-chemical-storage",
    categoryNumber: "04",
    title: "Tanks & Chemical Piping",
    subheading: "Chemical-resistant storage tanks and pipeline systems for process plants, power stations and industrial facilities.",
    image: "/images/about/pp-frp-tanks.jpg",
    link: "/products/tanks-piping-chemical-storage",
    badge: "Dual Laminate",
  },
  {
    id: "gratings-walkways-platforms",
    categoryNumber: "03",
    title: "Gratings & Walkway Systems",
    subheading: "Slip-resistant, load-rated FRP gratings, walkways and platforms built for industrial and infrastructure use.",
    image: "/images/about/gratings-walkway.jpg",
    link: "/products/gratings-walkways-platforms",
    badge: "Load Rated",
  },
  {
    id: "manhole-drain-cable-covers",
    categoryNumber: "02",
    title: "Manhole & Trench Covers",
    subheading: "Corrosion-free, tamper-resistant covers engineered for municipal, Smart City and civic infrastructure projects.",
    image: "/images/about/manhole-covers.jpg",
    link: "/products/manhole-drain-cable-covers",
    badge: "Anti-Theft / 40T-60T",
  },
  {
    id: "doors-windows-panels",
    categoryNumber: "05",
    title: "Doors, Windows & Enclosures",
    subheading: "Weatherproof doors, windows and electrical enclosures engineered for demanding industrial and public infrastructure.",
    image: "/images/about/tray-custom-fabrication.jpg",
    link: "/products/doors-windows-panels",
    badge: "IP65 Weatherproof",
  },
  {
    id: "defence-equipment-protective-gear",
    categoryNumber: "11",
    title: "Defence & Railway Components",
    subheading: "Precision-engineered FRP components built to specification for defence, railway and metro applications.",
    image: "/images/about/defence-railway.jpg",
    link: "/products/defence-equipment-protective-gear",
    badge: "Defence Grade",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export function ProductCategories() {
  return (
    <section className="relative w-full bg-white pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subheading */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <h2 className="type-h2 text-[#0A1628]">
            Our FRP Product Range
          </h2>
          <p className="mt-4 sm:mt-5 type-subheading text-gray-600">
            Engineered composite solutions manufactured to specification for government, defence, railway, and industrial applications. Built for compliance, tested for performance.
          </p>
        </div>

        {/* Minimalist & Premium Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-9"
        >
          {productCategories.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/90 hover:border-gray-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(10,22,40,0.12)] transition-all duration-500 hover:-translate-y-1.5"
            >
              <Link href={product.link} className="flex flex-col h-full">
                {/* Photo Container with Next.js Image */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                    <span className="type-eyebrow text-white text-[11px]">
                      Cat {product.categoryNumber}
                    </span>
                  </div>

                  {/* Badge Tag */}
                  <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full type-spec text-[11px] text-gray-800 shadow-xs font-semibold">
                    <span>{product.badge}</span>
                  </div>
                </div>

                {/* Tapered Orange Accent Line */}
                <div className="relative w-full h-[4.5px] flex items-center justify-center overflow-hidden bg-transparent">
                  <div className="w-full h-full transform origin-center scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <svg
                      viewBox="0 0 100 4"
                      preserveAspectRatio="none"
                      className="w-full h-full block"
                    >
                      <defs>
                        <linearGradient
                          id={`orange-taper-${product.id}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0" />
                          <stop offset="18%" stopColor="#FF6B00" stopOpacity="0.75" />
                          <stop offset="50%" stopColor="#FF6B00" stopOpacity="1" />
                          <stop offset="82%" stopColor="#FF6B00" stopOpacity="0.75" />
                          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,2 Q 50,-0.8 100,2 Q 50,4.8 0,2 Z"
                        fill={`url(#orange-taper-${product.id})`}
                      />
                    </svg>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-grow p-6 sm:p-7 justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="type-h3 text-[#0A1628] group-hover:text-[#FF6B00] transition-colors duration-300">
                        {product.title}
                      </h3>

                      {/* Animated Dual-Sliding Arrow Button */}
                      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-50 border border-gray-200 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00] flex items-center justify-center overflow-hidden transition-all duration-300 shadow-sm shrink-0 mt-0.5">
                        {/* Outgoing Arrow */}
                        <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-5 group-hover:-translate-y-5" />
                        {/* Incoming Arrow */}
                        <ArrowUpRight className="w-4 h-4 text-white absolute transition-all duration-300 transform -translate-x-5 translate-y-5 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                      </div>
                    </div>

                    <p className="type-body text-gray-600">
                      {product.subheading}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All 11 Categories CTA Strip */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 bg-[#0A1628] hover:bg-[#FF6B00] text-white type-btn px-8 py-4 rounded-xl transition-all duration-300 shadow-md group"
          >
            <span>Explore All 11 Product Categories &amp; 110+ Products</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF6B00] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

