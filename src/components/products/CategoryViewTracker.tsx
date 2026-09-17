"use client";

import { useEffect } from "react";
import { trackCategoryView } from "@/lib/analytics";

interface CategoryViewTrackerProps {
  id: string;
  name: string;
  categoryNumber?: string;
  productCount?: number;
}

export function CategoryViewTracker({
  id,
  name,
  categoryNumber,
  productCount,
}: CategoryViewTrackerProps) {
  useEffect(() => {
    trackCategoryView({
      id,
      name,
      categoryNumber,
      productCount,
    });
  }, [id, name, categoryNumber, productCount]);

  return null;
}
