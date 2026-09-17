export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-H161YSRBN9";

// Global Window augmentation for gtag
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Safe dispatch of GA4 gtag commands
 */
export function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === "function") {
    // @ts-expect-error dynamic arguments forwarding
    window.gtag(...args);
  } else {
    window.dataLayer.push(args);
  }
}

/**
 * Generic typed GA4 event sender
 */
export function trackEvent(
  action: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  const eventData = {
    send_to: GA_MEASUREMENT_ID,
    ...params,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", action, eventData);
  } else {
    // Standard Google Tag fallback: push arguments to dataLayer
    // It will be processed automatically once gtag.js is loaded
    window.dataLayer.push(["event", action, eventData]);
  }

  if (process.env.NODE_ENV === "development") {
    console.log(`[GA4 Event]: ${action}`, eventData);
  }
}

/**
 * Track SPA Route change / Page View
 */
export function trackPageView(url: string, title?: string) {
  trackEvent("page_view", {
    page_location: typeof window !== "undefined" ? window.location.href : url,
    page_path: url,
    page_title: title || (typeof document !== "undefined" ? document.title : ""),
  });
}

/**
 * Track Scroll Depth Milestones (25%, 50%, 75%, 90%, 100%)
 */
export function trackScrollDepth(percent: number, path: string) {
  trackEvent("scroll", {
    percent_scrolled: percent,
    page_path: path,
    event_category: "Engagement",
    event_label: `Scrolled ${percent}% on ${path}`,
  });
}

/**
 * Track CTA Button Clicks
 */
export function trackCtaClick(
  ctaName: string,
  location: string,
  target?: string
) {
  trackEvent("cta_click", {
    cta_name: ctaName,
    cta_location: location,
    target_destination: target || "",
    event_category: "CTA",
  });
}

/**
 * Track Modal RFQ Form lifecycle
 */
export function trackModalForm(
  step: "open" | "start" | "submit_success" | "submit_error" | "close",
  details: {
    productName?: string;
    triggerSource?: string;
    errorMessage?: string;
    fullName?: string;
    email?: string;
    phone?: string;
  } = {}
) {
  trackEvent(`rfq_modal_${step}`, {
    form_name: "Quote Modal RFQ",
    product_requested: details.productName || "General Inquiry",
    trigger_source: details.triggerSource || "Website CTA",
    error_message: details.errorMessage,
    event_category: "Lead Generation",
  });

  // Track standard GA4 recommended event on submission success
  if (step === "submit_success") {
    trackEvent("generate_lead", {
      currency: "INR",
      value: 1,
      lead_type: "RFQ Modal",
      product_name: details.productName || "General Inquiry",
    });
  }
}

/**
 * Track Contact Page Form lifecycle
 */
export function trackContactForm(
  step: "start" | "submit_success" | "submit_error",
  details: {
    companyName?: string;
    errorMessage?: string;
  } = {}
) {
  trackEvent(`contact_form_${step}`, {
    form_name: "Contact Page Form",
    company_name: details.companyName || "Not Provided",
    error_message: details.errorMessage,
    event_category: "Lead Generation",
  });

  // Track standard GA4 recommended event on submission success
  if (step === "submit_success") {
    trackEvent("generate_lead", {
      currency: "INR",
      value: 1,
      lead_type: "Contact Page Inquiry",
      company_name: details.companyName,
    });
  }
}

/**
 * Track Category & Product Interactions
 */
export function trackCategoryView(category: {
  id: string;
  name: string;
  categoryNumber?: string;
  productCount?: number;
}) {
  trackEvent("view_item_list", {
    item_list_id: category.id,
    item_list_name: category.name,
    category_number: category.categoryNumber,
    items_count: category.productCount,
    event_category: "Ecommerce / Catalog",
  });
}

export function trackCategoryCardClick(category: {
  id: string;
  name: string;
  destination: string;
}) {
  trackEvent("select_category", {
    item_list_id: category.id,
    item_list_name: category.name,
    target_destination: category.destination,
    event_category: "Catalog Navigation",
  });
}

export function trackProductQuoteClick(product: {
  id: string;
  name: string;
  categoryName?: string;
  source: "product_card" | "product_section" | "boat_grid" | "pool_grid";
}) {
  trackEvent("select_item", {
    item_id: product.id,
    item_name: product.name,
    item_category: product.categoryName || "FRP Products",
    click_source: product.source,
    event_category: "Catalog Interaction",
  });

  trackEvent("product_quote_click", {
    product_id: product.id,
    product_name: product.name,
    category_name: product.categoryName,
    click_source: product.source,
  });
}

export function trackProductGallerySwitch(productName: string, imageIndex: number) {
  trackEvent("product_gallery_switch", {
    product_name: productName,
    image_index: imageIndex,
    event_category: "Catalog Interaction",
  });
}

/**
 * Track External Contact & Communications (WhatsApp, Phone, Email, Google Maps)
 */
export function trackDirectContact(
  channel: "whatsapp" | "phone" | "email" | "maps",
  details: {
    location: string;
    value?: string;
    inquiryTopic?: string;
  }
) {
  trackEvent("contact", {
    method: channel,
    contact_location: details.location,
    contact_value: details.value || "",
    inquiry_topic: details.inquiryTopic || "",
    event_category: "Direct Contact",
  });
}

/**
 * Track Brochure and Document Downloads
 */
export function trackBrochureDownload(source: string, fileName: string = "samarth-brochure.pdf") {
  trackEvent("file_download", {
    file_name: fileName,
    file_extension: "pdf",
    download_source: source,
    event_category: "Resource Download",
  });
}

/**
 * Track Catalog Search
 */
export function trackCatalogSearch(query: string, resultsCount: number) {
  if (!query.trim()) return;
  trackEvent("search", {
    search_term: query.trim(),
    results_count: resultsCount,
    event_category: "Site Search",
  });
}
