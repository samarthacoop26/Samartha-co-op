export interface ProductSubItem {
  id: string;
  name: string;
  href: string;
  isPopular?: boolean;
}

export interface ProductCategory {
  id: string;
  categoryNumber: string;
  categoryTitle: string;
  shortDescription: string;
  iconName: string;
  statusBadge?: string; // e.g. "Hold - Pending Confirmation", "Defence Grade", "Core Manufacturing"
  items: string[];
  href: string;
}

export const ALL_PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "gratings-walkways-platforms",
    categoryNumber: "01",
    categoryTitle: "Gratings, Walkways & Platforms",
    shortDescription: "High load-bearing, corrosion-resistant FRP molded and pultruded walkway systems.",
    iconName: "Grid",
    statusBadge: "Core Scope",
    items: [
      "FRP Gratings",
      "Walkways",
      "Footbridge Deck Panels",
      "Platforms",
      "Stair Treads",
      "Platform Gratings",
      "Maintenance Walkways",
      "Maintenance Platforms",
      "Anti-slip Panels",
      "Decking",
    ],
    href: "/about#what-we-manufacture",
  },
  {
    id: "manhole-drain-cable-covers",
    categoryNumber: "02",
    categoryTitle: "Manhole, Drain & Cable Trench Covers",
    shortDescription: "Heavy duty composite access solutions tested up to 40T/60T load ratings.",
    iconName: "CircleDot",
    statusBadge: "Core Scope",
    items: [
      "Manhole Covers",
      "Drain Covers",
      "Cable Trench Covers",
      "Cable Duct Covers",
      "Utility Covers",
    ],
    href: "/about#what-we-manufacture",
  },
  {
    id: "tanks-piping-chemical-storage",
    categoryNumber: "03",
    categoryTitle: "Tanks, Piping & Chemical Storage",
    shortDescription: "Chemical storage vessels, dual-laminate tanks and high-pressure thermoplastic piping.",
    iconName: "Boxes",
    statusBadge: "Core Scope",
    items: [
      "Water Storage Tanks",
      "Chemical Tanks",
      "Septic Tanks",
      "Grease Traps",
      "Chemical Resistant Containers",
      "High Pressure Tubes",
      "Cylinders",
    ],
    href: "/about#what-we-manufacture",
  },
  {
    id: "doors-windows-panels",
    categoryNumber: "04",
    categoryTitle: "Doors, Windows & Panels",
    shortDescription: "Fire-retardant, moisture-proof composite architectural doors and transport body panels.",
    iconName: "DoorOpen",
    statusBadge: "Fabrication",
    items: [
      "Doors",
      "Windows",
      "Toilet Doors",
      "Bathroom Doors",
      "Coach Doors",
      "Driver Cabin Doors",
      "Body Panels",
      "Roof Panels",
      "Ceiling Panels",
      "Side Panels",
      "Nose Cone",
      "Flooring",
    ],
    href: "/about#what-we-manufacture",
  },
  {
    id: "electrical-enclosures-control-boxes",
    categoryNumber: "05",
    categoryTitle: "Electrical Enclosures & Control Boxes",
    shortDescription: "Dielectric, non-conductive weather-proof kiosks and junction enclosures.",
    iconName: "Cpu",
    statusBadge: "Industrial",
    items: [
      "Electrical Kiosks",
      "Transformer Covers",
      "Meter Boxes",
      "Junction Boxes",
      "Control Panels",
      "Street Light Pole Boxes",
      "Terminal Boards",
      "Electrical Insulation Parts",
      "Equipment Cabinets",
      "Locomotive Covers",
      "Battery Boxes",
      "Communication Equipment Boxes",
    ],
    href: "/about#what-we-manufacture",
  },
  {
    id: "handrails-ladders-safety",
    categoryNumber: "06",
    categoryTitle: "Handrails, Ladders & Safety Structures",
    shortDescription: "OSHA-compliant safety guard rails, cage ladders and non-conductive fencing.",
    iconName: "Shield",
    statusBadge: "Safety",
    items: [
      "Handrails",
      "Safety Railings",
      "Ladders",
      "Railings",
      "Fencing",
      "Transformer Fencing",
    ],
    href: "/about#what-we-manufacture",
  },
  {
    id: "cable-management-systems",
    categoryNumber: "07",
    categoryTitle: "Cable Management Systems",
    shortDescription: "Corrosion-proof FRP perforated and ladder type cable trays and routing supports.",
    iconName: "Workflow",
    statusBadge: "Industrial",
    items: [
      "Cable Trays",
      "Cable Covers",
      "Cable Routing Supports",
    ],
    href: "/about#what-we-manufacture",
  },
  {
    id: "civic-furniture-public-infra",
    categoryNumber: "08",
    categoryTitle: "Civic Furniture & Public Infrastructure",
    shortDescription: "Bespoke composite urban structures, cabins, modular toilets and canopies.",
    iconName: "Building",
    statusBadge: "Hold — Pending Client Confirmation",
    items: [
      "Dustbins",
      "Benches",
      "Bus Stop Shelters",
      "Tree Guards",
      "Garden Furniture",
      "Public Toilets",
      "Toilet Modules",
      "Wash Basin Units",
      "Security Cabins",
      "Portable Cabins",
      "Compound Wall Panels",
      "Roof Sheets",
      "Domes",
      "Skylights",
      "Canopies",
      "Decorative Structures",
    ],
    href: "/about#what-we-manufacture",
  },
  {
    id: "signage",
    categoryNumber: "09",
    categoryTitle: "Signage",
    shortDescription: "UV-resistant and weatherproof industrial and highway composite sign boards.",
    iconName: "Signpost",
    statusBadge: "Hold — Pending Client Confirmation",
    items: [
      "Sign Boards",
      "Name Boards",
      "Direction Boards",
      "Traffic Sign Boards",
      "Advertisement Boards",
    ],
    href: "/about#what-we-manufacture",
  },
  {
    id: "defence-equipment-protective-gear",
    categoryNumber: "10",
    categoryTitle: "Defence Equipment & Protective Gear",
    shortDescription: "Military-spec containers, ammunition cases, radomes and lightweight UAV components.",
    iconName: "ShieldAlert",
    statusBadge: "Defence Grade",
    items: [
      "Missile Transport Boxes",
      "Missile Storage Containers",
      "Grenade Boxes",
      "Ammunition Boxes",
      "Weapon Cases",
      "Radar Covers",
      "Radome",
      "Antenna Covers",
      "Portable Shelters",
      "Field Cabins",
      "Vehicle Body Panels",
      "Drone Body",
      "UAV Parts",
      "Helmet Components",
      "Protective Covers",
    ],
    href: "/about#what-we-manufacture",
  },
];

// Legacy backward compatibility export
export const INDUSTRIAL_PRODUCT_COLUMNS = ALL_PRODUCT_CATEGORIES.slice(0, 3).map((cat) => ({
  categoryTitle: cat.categoryTitle,
  categoryNumber: cat.categoryNumber,
  items: cat.items.slice(0, 3).map((item, idx) => ({
    id: `${cat.id}-${idx}`,
    title: item,
    description: cat.shortDescription,
    href: cat.href,
    iconName: cat.iconName,
  })),
}));

export const QUICK_RESOURCE_LINKS = [
  { id: "all-products", title: "View All 10 Categories", href: "/about#what-we-manufacture" },
  { id: "cad-rfq", title: "Request Custom CAD Fabrication", href: "/contact" },
  { id: "certificates", title: "ISO 9001:2015 Certifications", href: "/certificates" },
];

export const PRODUCT_CATEGORIES_DATA = ALL_PRODUCT_CATEGORIES.flatMap((c) =>
  c.items.map((item, idx) => ({
    id: `${c.id}-${idx}`,
    title: item,
    description: c.shortDescription,
    href: c.href,
    iconName: c.iconName,
  }))
);

