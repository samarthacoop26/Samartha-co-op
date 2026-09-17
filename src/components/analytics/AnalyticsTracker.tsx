"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView, trackScrollDepth } from "@/lib/analytics";

function TrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const reportedMilestones = useRef<Set<number>>(new Set());

  // 1. Track Page View on initial load and route changes
  useEffect(() => {
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    // Small delay to allow Next.js to update document.title
    const timer = setTimeout(() => {
      trackPageView(url, document.title);
    }, 150);

    // Reset scroll milestones for the new page
    reportedMilestones.current = new Set();

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // 2. Track Scroll Depth (25%, 50%, 75%, 90%, 100%)
  useEffect(() => {
    const milestones = [25, 50, 75, 90, 100];
    let ticking = false;

    const checkScrollDepth = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) return;

      const currentPercent = Math.min(
        100,
        Math.round((scrollY / scrollHeight) * 100)
      );

      for (const milestone of milestones) {
        if (
          currentPercent >= milestone &&
          !reportedMilestones.current.has(milestone)
        ) {
          reportedMilestones.current.add(milestone);
          trackScrollDepth(milestone, pathname);
        }
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScrollDepth();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Also perform initial check after load in case page is loaded scrolled
    const initialCheckTimer = setTimeout(checkScrollDepth, 600);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(initialCheckTimer);
    };
  }, [pathname]);

  return null;
}

export function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <TrackerInner />
    </Suspense>
  );
}
