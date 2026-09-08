export interface ProductMenuItem {
  id: string;
  title: string;
  description: string;
  href: string;
  iconName: string;
  badge?: string;
}

export interface ProductCategoryColumn {
  categoryTitle: string;
  categoryNumber?: string;
  items: ProductMenuItem[];
}

export interface QuickResourceLink {
  id: string;
  title: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export const INDUSTRIAL_PRODUCT_COLUMNS: ProductCategoryColumn[] = [
  {
    categoryTitle: "Tanks & Vessels",
    categoryNumber: "01",
    items: [
      {
        id: "pp-frp-tanks",
        title: "PP FRP Tanks & Vessels",
        description: "Chemical storage, dual-laminate & process tanks.",
        href: "/about#what-we-manufacture",
        iconName: "Boxes",
      },
      {
        id: "blowers-scrubbers",
        title: "Scrubbers & Blowers",
        description: "Wet scrubbers, exhaust blowers & chimneys.",
        href: "/about#what-we-manufacture",
        iconName: "Wind",
      },
      {
        id: "frp-ducting-hoods",
        title: "PP/FRP Ducting & Hoods",
        description: "Acid fume exhaust systems & pickup hoods.",
        href: "/about#what-we-manufacture",
        iconName: "Layers",
      },
    ],
  },
  {
    categoryTitle: "Piping & ETP",
    categoryNumber: "02",
    items: [
      {
        id: "thermoplastic-piping",
        title: "Thermoplastic Piping",
        description: "PPRC, PPH, HDPE & PVDF line fabrication.",
        href: "/about#what-we-manufacture",
        iconName: "Pipette",
      },
      {
        id: "etp-hdpe-pipelines",
        title: "ETP & STP Pipelines",
        description: "Effluent treatment piping & butt-fusion.",
        href: "/about#what-we-manufacture",
        iconName: "Workflow",
      },
      {
        id: "piping-maintenance",
        title: "Pipeline Maintenance",
        description: "Turnkey site erection & maintenance work.",
        href: "/about#what-we-manufacture",
        iconName: "Wrench",
      },
    ],
  },
  {
    categoryTitle: "Linings & Custom",
    categoryNumber: "03",
    items: [
      {
        id: "ms-frp-lining",
        title: "M.S. Tank FRP Lining",
        description: "Isophthalic & Vinyl Ester tank linings.",
        href: "/about#what-we-manufacture",
        iconName: "Shield",
      },
      {
        id: "concrete-pit-lining",
        title: "Concrete Pit & Floor Lining",
        description: "Acid-proof flooring & neutralization pits.",
        href: "/about#what-we-manufacture",
        iconName: "ShieldCheck",
      },
      {
        id: "custom-fabrication-drawings",
        title: "Custom CAD Fabrication",
        description: "Specialized trays, hoods & parts to drawings.",
        href: "/contact",
        iconName: "Sparkles",
        badge: "Custom",
      },
    ],
  },
];

export const QUICK_RESOURCE_LINKS: QuickResourceLink[] = [
  {
    id: "tech-specs",
    title: "Technical datasheets",
    href: "/about#what-we-manufacture",
  },
  {
    id: "chemical-compat",
    title: "Chemical compatibility",
    href: "/about#what-we-manufacture",
  },
  {
    id: "iso-certs",
    title: "ISO 9001:2015 certificates",
    href: "/certificates",
  },
  {
    id: "taloja-plant",
    title: "MIDC Taloja plant",
    href: "/about",
  },
  {
    id: "custom-rfq",
    title: "CAD drawing upload",
    href: "/contact",
  },
  {
    id: "contact-support",
    title: "Engineering hotline",
    href: "/contact",
  },
];

// Flat export for mobile menu and compatibility
export const PRODUCT_CATEGORIES_DATA = INDUSTRIAL_PRODUCT_COLUMNS.flatMap(
  (col) => col.items
);

