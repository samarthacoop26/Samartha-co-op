"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, HTMLMotionProps, Variants, Variant } from "framer-motion";

export type AnimationDirection = "up" | "down" | "left" | "right" | "fade" | "scale" | "blur";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  amount?: number | "some" | "all";
}

const getVariants = (direction: AnimationDirection, distance: number): Variants => {
  const hidden: Variant = { opacity: 0 };
  const visible: Variant = { opacity: 1 };

  switch (direction) {
    case "up":
      hidden.y = distance;
      hidden.filter = "blur(4px)";
      visible.y = 0;
      visible.filter = "blur(0px)";
      break;
    case "down":
      hidden.y = -distance;
      hidden.filter = "blur(4px)";
      visible.y = 0;
      visible.filter = "blur(0px)";
      break;
    case "left":
      hidden.x = distance;
      hidden.filter = "blur(4px)";
      visible.x = 0;
      visible.filter = "blur(0px)";
      break;
    case "right":
      hidden.x = -distance;
      hidden.filter = "blur(4px)";
      visible.x = 0;
      visible.filter = "blur(0px)";
      break;
    case "scale":
      hidden.scale = 0.94;
      hidden.y = 15;
      hidden.filter = "blur(4px)";
      visible.scale = 1;
      visible.y = 0;
      visible.filter = "blur(0px)";
      break;
    case "blur":
      hidden.filter = "blur(8px)";
      hidden.scale = 0.98;
      visible.filter = "blur(0px)";
      visible.scale = 1;
      break;
    case "fade":
    default:
      hidden.y = 10;
      visible.y = 0;
      break;
  }

  return {
    hidden,
    visible: {
      ...visible,
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 30,
  once = true,
  className = "",
  amount = 0.15,
  ...rest
}: ScrollRevealProps) {
  const variants = getVariants(direction, distance);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "-40px 0px" }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ── Staggered Parent Container ── */
interface StaggerGroupProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
}

export function StaggerGroup({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.05,
  className = "",
  once = true,
  ...rest
}: StaggerGroupProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={containerVariants}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ── Staggered Child Item ── */
interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  direction?: AnimationDirection;
  distance?: number;
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
  distance = 24,
  ...rest
}: StaggerItemProps) {
  const variants = getVariants(direction, distance);

  return (
    <motion.div variants={variants} className={className} {...rest}>
      {children}
    </motion.div>
  );
}

/* ── Global Auto-Scroll Observer for all standard pages & elements ── */
export function GlobalScrollAnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Select elements to auto-animate on scroll
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08,
    };

    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll(
        "section:not(.no-auto-reveal), .reveal-on-scroll, [data-reveal]"
      );

      elements.forEach((el) => {
        if (!el.classList.contains("no-auto-reveal")) {
          el.classList.add("reveal-on-scroll");
          // If already in initial viewport, reveal quickly
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
            el.classList.add("is-visible");
          } else {
            observer.observe(el);
          }
        }
      });
    };

    // Initial run + slight delay for dynamic hydration
    observeElements();
    const timer = setTimeout(observeElements, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
