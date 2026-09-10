export interface LocationInfo {
  id: string;
  type: "office" | "factory";
  name: string;
  shortLabel?: string;
  badge: string;
  addressLine1: string;
  addressLine2: string;
  cityStateZip: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  phone?: string;
  email?: string;
  operatingHours: string;
}

export interface ContactData {
  companyName: string;
  registeredName: string;
  tagline: string;
  gstin: string;
  pan: string;
  msmeRegNo: string;
  esicRegNo: string;
  pfRegNo: string;
  email: string;
  secondaryEmail: string;
  website: string;
  contacts: {
    vishal: {
      name: string;
      phone: string;
      phoneDisplay: string;
    };
  };
  serviceAreas: string[];
  workingHours: {
    days: string;
    timing: string;
    timezone: string;
    startHour: number; // 24hr format in IST
    endHour: number;
    workDays: number[]; // 1=Mon ... 6=Sat
  };
  responseCommitment: string;
  departments: {
    sales: {
      title: string;
      description: string;
      phone: string;
      phoneDisplay: string;
      whatsapp: string;
      whatsappDisplay: string;
      email: string;
    };
    quotations: {
      title: string;
      description: string;
      phone: string;
      phoneDisplay: string;
      email: string;
      supportEmail: string;
    };
  };
  locations: LocationInfo[];
}

export const CONTACT_CONFIG: ContactData = {
  companyName: "Samarth Corporation",
  registeredName: "Samarth Corporation",
  tagline: "Manufacturer of PP & FRP Engineering Solutions, Lining, Tanks, Blowers, Piping & Turnkey Projects",
  gstin: "27AEVFS9451A1ZK",
  pan: "AEVFS9451A",
  msmeRegNo: "UDYAM-MH-33-0265642",
  esicRegNo: "34000607500000606",
  pfRegNo: "THTHA2797602000",
  email: "samarthcorporation.mumbai@gmail.com",
  secondaryEmail: "samarthcorporation.india@gmail.com",
  website: "samarthcorporation.co.in",
  contacts: {
    vishal: {
      name: "Vishal Gadade",
      phone: "+919930862729",
      phoneDisplay: "+91 99308 62729",
    },
  },
  serviceAreas: [
    "MIDC Taloja",
    "Ambernath",
    "Dombivli Phase I & II",
    "Mahape",
    "Rabale (T.T.C. Industrial Area)",
    "Turbhe",
    "Rasayani",
    "Patalganga MIDC",
    "Pan-India",
  ],
  workingHours: {
    days: "Monday – Saturday",
    timing: "9:00 AM – 6:30 PM IST",
    timezone: "IST (UTC+5:30)",
    startHour: 9,
    endHour: 18.5,
    workDays: [1, 2, 3, 4, 5, 6], // Mon-Sat
  },
  responseCommitment: "We typically respond within 24 hours.",
  departments: {
    sales: {
      title: "Sales & Technical Inquiries (Vishal Gadade)",
      description: "Direct line for technical feasibility, PP/FRP tank sizing, scrubber erection, M.S. lining, and customized quotes.",
      phone: "+919930862729",
      phoneDisplay: "+91 99308 62729",
      whatsapp: "919930862729",
      whatsappDisplay: "+91 99308 62729",
      email: "samarthcorporation.mumbai@gmail.com",
    },
    quotations: {
      title: "Formal Quotations & Project Inquiries",
      description: "Submit tenders, project BOQs, drawings, and request GST-compliant formal commercial offers.",
      phone: "+919867339763",
      phoneDisplay: "+91 98673 39763",
      email: "samarthcorporation.india@gmail.com",
      supportEmail: "samarthcorporation.india@gmail.com",
    },
  },
  locations: [
    {
      id: "registered-office",
      type: "office",
      name: "Registered Office",
      shortLabel: "Registered Office (Dombivli)",
      badge: "Regd. Office",
      addressLine1: "421, 'Globe Estate Next', Plot No. A-12 & B-17",
      addressLine2: "MIDC Phase-I, Dombivli (East)",
      cityStateZip: "District Thane, Maharashtra – 421203",
      country: "India",
      coordinates: { lat: 19.220812, lng: 73.114956 },
      googleMapsEmbedUrl: "https://maps.google.com/maps?q=19.220812,73.114956&hl=en&z=16&output=embed",
      googleMapsDirectionsUrl: "https://maps.app.goo.gl/XK9LGy8LQt4X9C5M7?g_st=aw",
      phone: "+91 99308 62729 / +91 98673 39763",
      email: "samarthcorporation.mumbai@gmail.com",
      operatingHours: "Mon–Sat, 9:00 AM – 6:30 PM IST",
    },
    {
      id: "workshop-unit",
      type: "factory",
      name: "Workshop & Manufacturing Works",
      shortLabel: "Workshop (MIDC Taloja)",
      badge: "Workshop Unit",
      addressLine1: "4, Buva Sheth Bldg, Near Powerika Co.",
      addressLine2: "Pendhargaon, MIDC Taloja",
      cityStateZip: "Dist. Raigad, Navi Mumbai, Maharashtra 410208",
      country: "India",
      coordinates: { lat: 19.062094, lng: 73.106369 },
      googleMapsEmbedUrl: "https://maps.google.com/maps?q=19.062094,73.106369&hl=en&z=16&output=embed",
      googleMapsDirectionsUrl: "https://maps.app.goo.gl/KdaV7RYPhD7WL6aF9?g_st=aw",
      phone: "+91 99308 62729",
      email: "samarthcorporation.india@gmail.com",
      operatingHours: "Mon–Sat, 8:30 AM – 7:00 PM IST (Fabrication & Erection Unit)",
    },
  ],
};

export const INQUIRY_TYPES = [
  { value: "product_quote", label: "Product Quote / BOQ Pricing" },
  { value: "tank_scrubber_blower", label: "PP/FRP Tanks, Scrubbers & Blowers" },
  { value: "ms_frp_lining", label: "M.S. FRP Lining & Coating" },
  { value: "pipeline_etp", label: "PPH / PPRC / HDPE / PVDF Pipeline & ETP Erection" },
  { value: "sintex_tank_welding", label: "HDPE Sintex Tank & Nozzle Welding" },
  { value: "stockist_materials", label: "Pipes, Fittings, Valves, Sheets & FRP Raw Materials" },
  { value: "turnkey_project", label: "Turnkey Project Execution & Maintenance" },
  { value: "other", label: "Other / General Inquiry" },
] as const;

export const PRODUCT_CATEGORIES = [
  { value: "pp_frp_tanks", label: "PP FRP Tanks & Chemical Storage Systems" },
  { value: "blowers_scrubbers", label: "PP/FRP Blowers, Scrubbers & Ducting Erection" },
  { value: "ms_frp_lining", label: "M.S. FRP Lining & Industrial Protective Coating" },
  { value: "pipelines_etp", label: "PPRC, PPH, HDPE & PVDF Piping + ETP Erection" },
  { value: "sintex_tank_welding", label: "HDPE Sintex Tank & Nozzle Welding" },
  { value: "frp_gratings_covers", label: "FRP Gratings, Manhole Covers & Trench Covers" },
  { value: "custom_fabrication", label: "PP/FRP Trays & Custom Fabrication as per Drawing" },
  { value: "stockist_supply", label: "Stockist: Pipes, Fittings, Valves, Sheets & Raw Materials" },
] as const;
