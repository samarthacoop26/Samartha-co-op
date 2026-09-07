export interface LocationInfo {
  id: string;
  type: "office" | "factory";
  name: string;
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
  msmeRegNo: string;
  isoCert: string;
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
      email: string;
      supportEmail: string;
    };
  };
  locations: LocationInfo[];
}

export const CONTACT_CONFIG: ContactData = {
  companyName: "Samarth FRP Solutions",
  registeredName: "Samarth Composites Private Limited",
  tagline: "Industrial & Municipal Composite Engineering",
  gstin: "27AABCS1429B1Z8", // Client placeholder with realistic format
  msmeRegNo: "UDYAM-MH-33-0029148",
  isoCert: "ISO 9001:2015 Certified",
  workingHours: {
    days: "Monday – Saturday",
    timing: "9:00 AM – 6:00 PM IST",
    timezone: "IST (UTC+5:30)",
    startHour: 9,
    endHour: 18,
    workDays: [1, 2, 3, 4, 5, 6], // Mon-Sat
  },
  responseCommitment: "We typically respond within 24 hours.",
  departments: {
    sales: {
      title: "Sales & Technical Inquiries",
      description: "Direct line to our senior applications engineers for load ratings, technical feasibility, and customized composite formulations.",
      phone: "+917700093966",
      phoneDisplay: "+91 77000 93966",
      whatsapp: "917700093966",
      whatsappDisplay: "+91 77000 93966",
      email: "sales@samarthcomposites.com",
    },
    quotations: {
      title: "Formal Quotations & Documentation",
      description: "Submit tenders, project BOQs, CAD drawings, and request GST-compliant formal commercial offers.",
      email: "info@samarthcomposites.com",
      supportEmail: "tenders@samarthcomposites.com",
    },
  },
  locations: [
    {
      id: "head-office",
      type: "office",
      name: "Corporate & Registered Office",
      badge: "Head Office",
      addressLine1: "Plot No. 42/B, Industrial Area Phase II",
      addressLine2: "Near MIDC Industrial Corridor",
      cityStateZip: "Pune, Maharashtra 411026",
      country: "India",
      coordinates: { lat: 18.5204, lng: 73.8567 },
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0436043878!2d73.79292694119934!3d18.524616453676878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709712345678!5m2!1sen!2sin",
      googleMapsDirectionsUrl: "https://maps.google.com/?q=Pune,+Maharashtra,+India",
      phone: "+91 77000 93966",
      email: "info@samarthcomposites.com",
      operatingHours: "Mon–Sat, 9:00 AM – 6:00 PM IST",
    },
    {
      id: "manufacturing-unit",
      type: "factory",
      name: "Advanced FRP Manufacturing Plant",
      badge: "Manufacturing Facility",
      addressLine1: "Works: Sector 14, GIDC/MIDC Heavy Engineering Zone",
      addressLine2: "Expressway Highway Junction",
      cityStateZip: "Chakan Industrial Area, Pune 410501",
      country: "India",
      coordinates: { lat: 18.7606, lng: 73.8617 },
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.896791055745!2d73.8595!3d18.7606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2cbb79a7bc755%3A0x6b87641320ef4576!2sChakan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709712399999!5m2!1sen!2sin",
      googleMapsDirectionsUrl: "https://maps.google.com/?q=Chakan+Industrial+Area,+Pune,+Maharashtra",
      phone: "+91 77000 93966",
      email: "works@samarthcomposites.com",
      operatingHours: "Mon–Sat, 8:30 AM – 6:30 PM IST (Heavy Dispatch Unit)",
    },
  ],
};

export const INQUIRY_TYPES = [
  { value: "product_quote", label: "Product Quote / BOQ Pricing" },
  { value: "technical_specs", label: "Technical Specs & Load Ratings" },
  { value: "bulk_dispatch", label: "Bulk / Dispatch Pan-India Inquiry" },
  { value: "custom_fabrication", label: "Custom Composite Fabrication / Defence / Rail" },
  { value: "installation_maintenance", label: "Installation & Maintenance Consultation" },
  { value: "other", label: "Other / General Engineering Inquiry" },
] as const;

export const PRODUCT_CATEGORIES = [
  { value: "frp_manhole_covers", label: "FRP Manhole Covers & Frames (A15 to F900)" },
  { value: "frp_gratings", label: "FRP Molded & Pultruded Gratings / Trench Covers" },
  { value: "frp_tanks", label: "FRP Chemical Storage Tanks & Bio-Digesters" },
  { value: "frp_enclosures", label: "FRP Electrical Enclosures & Junction Boxes" },
  { value: "defence_railway", label: "Defence, Railway & Aviation Specialized FRP" },
  { value: "custom_moulding", label: "Custom FRP Compression Moulded Components" },
  { value: "multiple_full_boq", label: "Multiple Products / Complete Project BOQ" },
] as const;
