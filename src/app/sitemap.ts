import type { MetadataRoute } from "next";
import { PRODUCT_CATALOG } from "@/data/productsData";

const BASE_URL = "https://www.samarthcorporation.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // 1. Dynamic category routes from PRODUCT_CATALOG (excluding customHref redirects)
  const categoryRoutes: MetadataRoute.Sitemap = PRODUCT_CATALOG
    .filter((cat) => !cat.customHref)
    .map((cat) => ({
      url: `${BASE_URL}/products/${cat.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    // Core Homepage
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Products Overview
    {
      url: `${BASE_URL}/products`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // 11 Industrial Product Categories
    ...categoryRoutes,

    // Specialized Product Divisions
    {
      url: `${BASE_URL}/frp-boats`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/frp-swimming-pool`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Primary Informational & Contact Pages
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/brochure`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Legal & Regulatory Pages
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
