import { CONTACT_CONFIG } from "@/data/contactConfig";
import { ProductCategoryDetail } from "@/data/productsData";

export const SITE_URL = "https://www.samarthcorporation.co";

/**
 * Organization Schema for Samarth Corporation
 * Strictly uses confirmed business details: UDYAM & GSTIN credentials, real addresses & phones.
 * NOTE: AggregateRating/Review schema is strictly excluded as no verified public ratings exist.
 */
export function getOrganizationSchema() {
  const regOffice = CONTACT_CONFIG.locations[0];
  const workshop = CONTACT_CONFIG.locations[1];

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: CONTACT_CONFIG.companyName,
    legalName: CONTACT_CONFIG.registeredName,
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/logo.png`,
    image: `${SITE_URL}/images/about/plant-facility.jpg`,
    description:
      "Manufacturer and turnkey supplier of PP & FRP tanks, scrubbers, blowers, M.S. lining, thermoplastic pipelines, and composite engineering solutions across India.",
    email: CONTACT_CONFIG.email,
    telephone: CONTACT_CONFIG.contacts.vishal.phone,
    taxID: CONTACT_CONFIG.gstin,
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Ministry of MSME Udyam Registration",
        credentialCategory: "Government Accreditation",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Ministry of Micro, Small and Medium Enterprises, Government of India",
        },
        identifier: CONTACT_CONFIG.msmeRegNo,
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Goods and Services Tax Identification Number (GSTIN)",
        credentialCategory: "Tax Registration",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Goods and Services Tax Network (GSTN), Ministry of Finance, Govt of India",
        },
        identifier: CONTACT_CONFIG.gstin,
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${regOffice.addressLine1}, ${regOffice.addressLine2}`,
      addressLocality: "Dombivli (East)",
      addressRegion: "Maharashtra",
      postalCode: "421203",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CONTACT_CONFIG.departments.sales.phone,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "mr"],
      },
      {
        "@type": "ContactPoint",
        telephone: CONTACT_CONFIG.departments.quotations.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "mr"],
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    location: [
      {
        "@type": "Place",
        name: "Samarth Corporation Registered Office",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${regOffice.addressLine1}, ${regOffice.addressLine2}`,
          addressLocality: "Dombivli (East)",
          addressRegion: "Maharashtra",
          postalCode: "421203",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: regOffice.coordinates.lat,
          longitude: regOffice.coordinates.lng,
        },
      },
      {
        "@type": "Place",
        name: "Samarth Corporation Manufacturing Workshop",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${workshop.addressLine1}, ${workshop.addressLine2}`,
          addressLocality: "Navi Mumbai, Dist. Raigad",
          addressRegion: "Maharashtra",
          postalCode: "410208",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: workshop.coordinates.lat,
          longitude: workshop.coordinates.lng,
        },
      },
    ],
  };
}

/**
 * Dual LocalBusiness / ManufacturingBusiness Schemas for local SEO
 * 1. Registered Office (Dombivli Phase-I)
 * 2. Workshop & Manufacturing Works (MIDC Taloja)
 */
export function getLocalBusinessSchemas() {
  const regOffice = CONTACT_CONFIG.locations[0];
  const workshop = CONTACT_CONFIG.locations[1];

  return [
    {
      "@context": "https://schema.org",
      "@type": "ManufacturingBusiness",
      "@id": `${SITE_URL}/#registered-office`,
      name: `${CONTACT_CONFIG.companyName} - Registered Office`,
      url: SITE_URL,
      logo: `${SITE_URL}/images/brand/logo.png`,
      image: `${SITE_URL}/images/about/plant-facility.jpg`,
      telephone: regOffice.phone?.split("/")[0].trim() || CONTACT_CONFIG.contacts.vishal.phone,
      email: regOffice.email || CONTACT_CONFIG.email,
      priceRange: "$$",
      parentOrganization: {
        "@id": `${SITE_URL}/#organization`,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: `${regOffice.addressLine1}, ${regOffice.addressLine2}`,
        addressLocality: "Dombivli (East)",
        addressRegion: "Maharashtra",
        postalCode: "421203",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: regOffice.coordinates.lat,
        longitude: regOffice.coordinates.lng,
      },
      hasMap: regOffice.googleMapsDirectionsUrl,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:30",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ManufacturingBusiness",
      "@id": `${SITE_URL}/#workshop-taloja`,
      name: `${CONTACT_CONFIG.companyName} - Workshop & Manufacturing Works`,
      url: SITE_URL,
      logo: `${SITE_URL}/images/brand/logo.png`,
      image: `${SITE_URL}/images/about/plant-facility.jpg`,
      telephone: workshop.phone?.split("/")[0].trim() || CONTACT_CONFIG.contacts.vishal.phone,
      email: workshop.email || CONTACT_CONFIG.secondaryEmail,
      priceRange: "$$",
      parentOrganization: {
        "@id": `${SITE_URL}/#organization`,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: `${workshop.addressLine1}, ${workshop.addressLine2}`,
        addressLocality: "Navi Mumbai, Dist. Raigad",
        addressRegion: "Maharashtra",
        postalCode: "410208",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: workshop.coordinates.lat,
        longitude: workshop.coordinates.lng,
      },
      hasMap: workshop.googleMapsDirectionsUrl,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:30",
          closes: "19:00",
        },
      ],
    },
  ];
}

/**
 * WebSite schema with search action
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: CONTACT_CONFIG.companyName,
    alternateName: "Samarth FRP Solutions",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

/**
 * BreadcrumbList Schema generator
 */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * Product Schema for each of the 11 Category pages
 */
export function getProductCategorySchema(category: ProductCategoryDetail) {
  const categoryUrl = `${SITE_URL}/products/${category.slug}`;
  const firstImage = category.products[0]?.images?.[0] || "/images/contact-hero.jpg";
  const absoluteImageUrl = firstImage.startsWith("http") ? firstImage : `${SITE_URL}${firstImage}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${categoryUrl}#product`,
    name: category.categoryTitle,
    description: category.heroDescription || category.shortDescription,
    category: "Fiberglass Reinforced Plastic (FRP) Composites",
    image: absoluteImageUrl,
    url: categoryUrl,
    brand: {
      "@type": "Brand",
      name: CONTACT_CONFIG.companyName,
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      price: "0",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: categoryUrl,
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  };
}

/**
 * Unique keyword-mapped SEO titles and descriptions for all 11 category pages
 * Adheres strictly to 55-60 character titles and 150-160 character descriptions
 */
export const CATEGORY_SEO_MAP: Record<
  string,
  { title: string; description: string }
> = {
  "industrial-projects": {
    title: "Industrial FRP Projects Manufacturer India | Turnkey Systems",
    description:
      "Turnkey industrial FRP projects by Samarth Corporation. Custom chemical scrubbers, blowers, exhaust ducting, process tanks & plant site erection across India.",
  },
  "manhole-drain-cable-covers": {
    title: "FRP Manhole & Trench Cover Manufacturer India | 40T-60T",
    description:
      "Heavy-duty FRP manhole, drain & trench cover manufacturer in India. Anti-theft composite covers tested up to 60T for municipal roads, smart cities & utilities.",
  },
  "gratings-walkways-platforms": {
    title: "FRP Gratings & Walkway Manufacturer India | Slip Resistant",
    description:
      "High-strength molded & pultruded FRP gratings, industrial walkways, platforms and stair treads manufactured in India by Samarth Corporation for chemical plants.",
  },
  "tanks-piping-chemical-storage": {
    title: "FRP Chemical Tank & Piping Manufacturer India | PP-FRP",
    description:
      "Heavy-duty PP/FRP dual-laminate chemical storage tanks, acid reaction vessels, and thermoplastic pipeline systems manufactured for chemical & industrial plants.",
  },
  "doors-windows-panels": {
    title: "FRP Doors & Window Manufacturer India | Heavy Duty Panels",
    description:
      "Industrial FRP doors, fire-retardant panels, and weatherproof window frames manufactured in India for chemical plants, railway coaches, and civic infrastructure.",
  },
  "electrical-enclosures-control-boxes": {
    title: "FRP Electrical Enclosure Manufacturer India | IP65 IP66",
    description:
      "Weatherproof IP65 & IP66 flame-retardant FRP junction boxes, distribution pillars, and electrical control enclosures manufactured in India for harsh industries.",
  },
  "handrails-ladders-safety": {
    title: "FRP Handrails & Ladder Manufacturer India | Non-Conductive",
    description:
      "OSHA-compliant non-conductive FRP handrails, cage ladders, and safety platforms manufactured in India by Samarth Corporation for chemical, power & marine plants.",
  },
  "cable-management-systems": {
    title: "FRP Cable Tray Manufacturer India | Ladder & Perforated",
    description:
      "Corrosion-proof pultruded FRP cable trays, ladder type trays, and channel supports manufactured in India by Samarth Corporation for refineries and power plants.",
  },
  "civic-furniture-public-infra": {
    title: "FRP Civic Furniture & Public Infra Manufacturer in India",
    description:
      "Weatherproof FRP public infra: security cabins, modular toilets, tree grates, and civic benches manufactured in India for smart city & municipal projects.",
  },
  "signage": {
    title: "Industrial FRP Signage Board Manufacturer India | UV Safe",
    description:
      "Heavy-duty UV-stabilized FRP safety signs, highway retro-reflective sign boards, and industrial hazard signage manufactured in India by Samarth Corporation.",
  },
  "defence-equipment-protective-gear": {
    title: "FRP Defence Equipment Manufacturer India | Tactical Gear",
    description:
      "Defence-grade ballistic riot shields, radar domes, and tactical composite enclosures custom fabricated in India by Samarth Corporation for defence & aerospace.",
  },
};

/**
 * FAQPage Schema for pages with real FAQ content (FRP Boats & FRP Swimming Pools)
 */
export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}


