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
  statusBadge?: string;
  items: string[];
  href: string;
}

export const ALL_PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "manhole-drain-cable-covers",
    categoryNumber: "01",
    categoryTitle: "Manhole, Drain & Cable Trench Covers",
    shortDescription: "Heavy duty composite access solutions tested up to 40T/60T load ratings.",
    iconName: "CircleDot",
    statusBadge: "Heavy Duty Infra",
    items: [
      "Manhole Covers",
      "Drain Covers",
      "Cable Trench Covers",
      "Cable Duct Covers",
      "Utility Covers",
    ],
    href: "/products/manhole-drain-cable-covers",
  },
  {
    id: "gratings-walkways-platforms",
    categoryNumber: "02",
    categoryTitle: "Gratings, Walkways & Platforms",
    shortDescription: "High load-bearing, corrosion-resistant FRP molded and pultruded walkway systems.",
    iconName: "Grid",
    statusBadge: "Structural Access",
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
    href: "/products/gratings-walkways-platforms",
  },
  {
    id: "tanks-piping-chemical-storage",
    categoryNumber: "03",
    categoryTitle: "Tanks, Piping & Chemical Storage",
    shortDescription: "Chemical storage vessels, dual-laminate tanks and high-pressure thermoplastic piping.",
    iconName: "Boxes",
    statusBadge: "Process Equipment",
    items: [
      "Water Storage Tanks",
      "Chemical Tanks",
      "Septic Tanks",
      "Grease Traps",
      "Chemical Resistant Containers",
      "High Pressure Tubes",
      "Cylinders",
    ],
    href: "/products/tanks-piping-chemical-storage",
  },
  {
    id: "doors-windows-panels",
    categoryNumber: "04",
    categoryTitle: "Doors, Windows & Panels",
    shortDescription: "Fire-retardant, moisture-proof composite architectural doors and transport body panels.",
    iconName: "DoorOpen",
    statusBadge: "Architectural & Transit",
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
    href: "/products/doors-windows-panels",
  },
  {
    id: "electrical-enclosures-control-boxes",
    categoryNumber: "05",
    categoryTitle: "Electrical Enclosures & Control Boxes",
    shortDescription: "Dielectric, non-conductive weather-proof kiosks and junction enclosures.",
    iconName: "Cpu",
    statusBadge: "Electrical & Power",
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
    href: "/products/electrical-enclosures-control-boxes",
  },
  {
    id: "handrails-ladders-safety",
    categoryNumber: "06",
    categoryTitle: "Handrails, Ladders & Safety Structures",
    shortDescription: "OSHA-compliant safety guard rails, cage ladders and non-conductive fencing.",
    iconName: "Shield",
    statusBadge: "Safety & Compliance",
    items: [
      "Handrails",
      "Safety Railings",
      "Ladders",
      "Railings",
      "Fencing",
      "Transformer Fencing",
    ],
    href: "/products/handrails-ladders-safety",
  },
  {
    id: "cable-management-systems",
    categoryNumber: "07",
    categoryTitle: "Cable Management Systems",
    shortDescription: "Corrosion-proof FRP perforated and ladder type cable trays and routing supports.",
    iconName: "Workflow",
    statusBadge: "Cable Support",
    items: [
      "Cable Trays",
      "Cable Covers",
      "Cable Routing Supports",
    ],
    href: "/products/cable-management-systems",
  },
  {
    id: "civic-furniture-public-infra",
    categoryNumber: "08",
    categoryTitle: "Civic Furniture & Public Infrastructure",
    shortDescription: "Bespoke composite urban structures, cabins, modular toilets and canopies.",
    iconName: "Building",
    statusBadge: "Smart City & Civic",
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
    href: "/products/civic-furniture-public-infra",
  },
  {
    id: "signage",
    categoryNumber: "09",
    categoryTitle: "Signage",
    shortDescription: "UV-resistant and weatherproof industrial and highway composite sign boards.",
    iconName: "Signpost",
    statusBadge: "Traffic & Industrial",
    items: [
      "Sign Boards",
      "Name Boards",
      "Direction Boards",
      "Traffic Sign Boards",
      "Advertisement Boards",
    ],
    href: "/products/signage",
  },
  {
    id: "defence-equipment-protective-gear",
    categoryNumber: "10",
    categoryTitle: "Defence Equipment & Protective Gear",
    shortDescription: "Military-spec containers, ammunition cases, radomes and lightweight UAV components.",
    iconName: "ShieldAlert",
    statusBadge: "Defence Grade (MIL-SPEC)",
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
    href: "/products/defence-equipment-protective-gear",
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
  { id: "all-products", title: "View All 10 Categories", href: "/products" },
  { id: "cad-rfq", title: "Request Custom CAD Fabrication", href: "/contact" },
  { id: "certificates", title: "MSME & GST Registrations", href: "/certificates" },
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
