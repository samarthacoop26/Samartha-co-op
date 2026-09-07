export interface CertificateItem {
  id: string;
  title: string;
  label: string; // Text on the bottom yellow banner
  category: "iso" | "client" | "statutory";
  categoryName: string;
  badge: string;
  issueDate: string;
  validity: string;
  issuingBodyOrClient: string;
  registrationOrRefNo: string;
  standardOrScope: string;
  description: string;
  clientLocation?: string;
  poNumber?: string;
  summaryQuote?: string;
  documentType: "ISO Certificate" | "Client Appreciation Letter" | "Performance Certificate" | "Statutory Registration";
  keyProductsSupplied?: string[];
  documentContent: {
    header: string;
    subHeader: string;
    toWhom?: string;
    bodyParagraphs: string[];
    signatory: {
      name: string;
      designation: string;
      department?: string;
      organization: string;
    };
  };
}

export const CERTIFICATES_DATA: CertificateItem[] = [
  // ─── 1. TOP TIER: ISO CERTIFICATIONS (From Reference Image) ───
  {
    id: "iso-9001-2015",
    title: "ISO 9001:2015 Quality Management System",
    label: "ISO 9001:2015",
    category: "iso",
    categoryName: "ISO Certifications",
    badge: "Quality Management (QMS)",
    issueDate: "15-Dec-2020",
    validity: "Active & Valid through Nov-2026",
    issuingBodyOrClient: "Accreditation Board for Quality Certification / JAS-ANZ / IAF",
    registrationOrRefNo: "QMS-IND-2023/8842",
    standardOrScope: "ISO 9001:2015 Standards for Quality Assurance & Process Control",
    description:
      "Certified Quality Management System covering end-to-end design, tooling, moulding, testing, and supply of FRP/GRP composite products.",
    documentType: "ISO Certificate",
    documentContent: {
      header: "CERTIFICATE OF REGISTRATION",
      subHeader: "QUALITY MANAGEMENT SYSTEM - ISO 9001:2015",
      toWhom: "THIS IS TO CERTIFY THAT",
      bodyParagraphs: [
        "The Quality Management System of SAMARTH FRP SOLUTIONS / INDUSTRIES has been independently assessed and found to conform to the requirements of ISO 9001:2015.",
        "Scope of Certification: Design, Engineering, Manufacturing, Quality Inspection, Testing, and Supply of FRP/GRP Manhole Covers, Moulded Gratings, Chemical Storage Vessels, Pultruded Structural Profiles, Scrubbers, and Custom Composite Industrial Fabrications.",
        "This certification remains valid subject to satisfactory completion of annual surveillance audits.",
      ],
      signatory: {
        name: "Dr. A. K. Sundaram",
        designation: "Lead Auditor & Director of Certification",
        department: "Accreditation Bureau of Quality Registrars",
        organization: "International Certification Authority",
      },
    },
  },
  {
    id: "iso-14001-2015",
    title: "ISO 14001:2015 Environmental Management System",
    label: "ISO 14001:2015",
    category: "iso",
    categoryName: "ISO Certifications",
    badge: "Environmental Management (EMS)",
    issueDate: "18-Jan-2021",
    validity: "Active & Valid through Jan-2027",
    issuingBodyOrClient: "Bureau of Environmental & Industrial Compliance",
    registrationOrRefNo: "EMS-IND-2024/6619",
    standardOrScope: "ISO 14001:2015 Environmental Standards & Sustainable Manufacturing",
    description:
      "Eco-compliant manufacturing protocols guaranteeing zero hazardous liquid effluent discharge, optimized resin curing, and closed-loop filtration.",
    documentType: "ISO Certificate",
    documentContent: {
      header: "CERTIFICATE OF CONFORMITY",
      subHeader: "ENVIRONMENTAL MANAGEMENT SYSTEM - ISO 14001:2015",
      toWhom: "THIS IS TO CERTIFY THAT",
      bodyParagraphs: [
        "SAMARTH FRP SOLUTIONS / INDUSTRIES operates an Environmental Management System which complies with the requirements of ISO 14001:2015 for green manufacturing and minimal environmental impact.",
        "Scope of Operations: Eco-friendly fabrication and precision processing of High-Performance Fiber Reinforced Polymer Composites with sustainable waste-minimization and carbon-conscious factory protocols.",
        "Surveillance audit verified satisfactory compliance with all statutory environmental emission thresholds and green industrial guidelines.",
      ],
      signatory: {
        name: "Elena Rostova",
        designation: "Senior Certification Officer",
        department: "Environmental Audit Division",
        organization: "Global Sustainability Certification Services",
      },
    },
  },
  {
    id: "iso-45001-2018",
    title: "ISO 45001:2018 Occupational Health & Safety",
    label: "ISO 45001:2018",
    category: "iso",
    categoryName: "ISO Certifications",
    badge: "Occupational Health & Safety (OHSMS)",
    issueDate: "22-Mar-2021",
    validity: "Active & Valid through Mar-2027",
    issuingBodyOrClient: "Occupational Safety Standards Accreditation Board",
    registrationOrRefNo: "OHSMS-IND-2024/9183",
    standardOrScope: "ISO 45001:2018 Industrial Workplace & Worker Safety Standards",
    description:
      "Comprehensive workplace safety and hygiene compliance, ensuring zero lost-time injury, advanced PPE protocols, and air-exchange shop floors.",
    documentType: "ISO Certificate",
    documentContent: {
      header: "CERTIFICATE OF REGISTRATION",
      subHeader: "OCCUPATIONAL HEALTH & SAFETY MANAGEMENT SYSTEM - ISO 45001:2018",
      toWhom: "THIS IS TO CERTIFY THAT",
      bodyParagraphs: [
        "The Occupational Health & Safety Management System of SAMARTH FRP SOLUTIONS / INDUSTRIES has been assessed and registered as complying with the requirements of ISO 45001:2018.",
        "Scope: Safe operational procedures, hazardous vapor extraction, automated resin batch handling, and ergonomic fabrication lines for heavy industrial composite assemblies.",
        "The registered organization is committed to providing safe and healthy working conditions for the prevention of work-related injury and ill health.",
      ],
      signatory: {
        name: "Vikramjit Banerjee",
        designation: "Chief Safety Assessor",
        department: "Occupational Health & Safety Registry",
        organization: "Safety & Quality Audit Bureau",
      },
    },
  },

  // ─── 2. CLIENT APPRECIATION & PERFORMANCE LETTERS (From Reference Image) ───
  {
    id: "dummy-1",
    title: "Dummy 1 - Performance & Inspection Certificate",
    label: "Dummy 1",
    category: "client",
    categoryName: "Client Appreciation Letters",
    badge: "PSU Chemical Industry",
    issueDate: "03-08-2019",
    validity: "Official Performance Record",
    issuingBodyOrClient: "Dummy 1 Industrial Corporation Ltd",
    registrationOrRefNo: "DM1/P&A/ENG-FRP/2019/332",
    poNumber: "DM1/PR/6714/2018",
    standardOrScope: "Supply, Testing & Commissioning of Heavy-Duty FRP Acid-Proof Gratings & Ducting",
    clientLocation: "Industrial Zone, Sector 4",
    summaryQuote: "The supplied FRP components have withstood highly corrosive chemical environments without any degradation.",
    description:
      "Performance evaluation and satisfactory supply certificate from Dummy 1 for continuous service in harsh chemical plant atmosphere.",
    documentType: "Client Appreciation Letter",
    keyProductsSupplied: ["FRP Gratings", "Vinyl Ester Acid Ducting", "Walkway Handrails"],
    documentContent: {
      header: "DUMMY 1 INDUSTRIAL CORPORATION LIMITED",
      subHeader: "(A GOVERNMENT UNDERTAKING ENTERPRISE) • INDUSTRIAL ZONE",
      toWhom: "TO WHOMSOEVER IT MAY CONCERN",
      bodyParagraphs: [
        "This is to certify that M/s Samarth FRP Solutions has successfully manufactured, supplied, and load-tested FRP Corrosion-Resistant Gratings and Ductwork for our chemical processing sections under Purchase Order No. DM1/PR/6714/2018.",
        "The supply was completed strictly as per our technical drawings, IS/BS test standards, and schedule. The products were subjected to our third-party inspection and hydraulic load validation, passing all criteria.",
        "The installed FRP structures have been operating under intense chemical exposure and show remarkable mechanical integrity and zero signs of corrosion. We appreciate their engineering quality and prompt execution.",
      ],
      signatory: {
        name: "A. G. Pillai",
        designation: "Asst. General Manager (Materials & Projects)",
        department: "Projects & Mechanical Maintenance Dept",
        organization: "Dummy 1 Industrial Corporation Ltd",
      },
    },
  },
  {
    id: "dummy-2",
    title: "Dummy 2 - Equipment Supply & Appreciation Certificate",
    label: "Dummy 2",
    category: "client",
    categoryName: "Client Appreciation Letters",
    badge: "Heavy Steel & Metallurgy",
    issueDate: "28-02-2018",
    validity: "Official Performance Record",
    issuingBodyOrClient: "Dummy 2 Manufacturing & Steel Limited",
    registrationOrRefNo: "DM2/PUNO/FRP/EPA/4500215835",
    poNumber: "PONO: DM2-STEEL/EPA/4500215835",
    standardOrScope: "Fabrication & Erection of Acid Fume Exhaust Chimney & FRP Pickling Line Tank Covers",
    clientLocation: "Plant Facility, Heavy Industrial Zone",
    summaryQuote: "The Acid Fume Chimney has been in continuous operation at our facility with excellent performance.",
    description:
      "Formal certificate of appreciation from Dummy 2 confirming flawless continuous operation of heavy acid fume extraction chimney and composite scrubbers.",
    documentType: "Performance Certificate",
    keyProductsSupplied: ["FRP Acid Fume Chimney (3 Nos)", "Pickling Tank Covers", "Scrubber Exhaust Stack"],
    documentContent: {
      header: "DUMMY 2 MANUFACTURING & STEEL LIMITED",
      subHeader: "CENTRAL PROCUREMENT & ENGINEERING SERVICES • STEEL DIVISION",
      toWhom: "TO WHOMSOEVER IT MAY CONCERN",
      bodyParagraphs: [
        "This is to certify that M/s Samarth FRP Solutions has supplied 3 Nos. of heavy-duty 'Acid Fume Exhaust Chimneys' and Pickling Line FRP Covers as per our Purchase Order No: PONO: DM2-STEEL/EPA/4500215835 Dated 28/12/2017.",
        "The said Chimneys and composite structures have been installed at our 'Galvanizing & Pickling Plant' site on 09 April, 2018 and are giving excellent performance till date under severe acidic thermal conditions.",
        "We are fully satisfied with their workmanship, timely commissioning, and engineering support. We wish them continued success in their future industrial endeavors.",
      ],
      signatory: {
        name: "Sunil Deshmukh",
        designation: "Head of Mechanical Procurement & Projects",
        department: "Central Engineering Procurement Cell",
        organization: "Dummy 2 Manufacturing & Steel Limited",
      },
    },
  },
  {
    id: "dummy-3",
    title: "Dummy 3 - Satisfactory Equipment Performance Note",
    label: "Dummy 3",
    category: "client",
    categoryName: "Client Appreciation Letters",
    badge: "Industrial Equipment & Turnkey EPC",
    issueDate: "17-08-2018",
    validity: "Official Performance Record",
    issuingBodyOrClient: "Dummy 3 Equip Sales & Engineering (P) Ltd",
    registrationOrRefNo: "DM3/PROJ/FRP-TK/2018/84",
    poNumber: "DM3/PO-F/10579",
    standardOrScope: "Supply & Hydrostatic Validation of 12 KL FRP Horizontal Acid Storage Tank",
    clientLocation: "Engineering Zone, Industrial Hub",
    summaryQuote: "The 12 KL FRP Acid Tank was installed without hassle and delivers reliable leak-proof containment.",
    description:
      "Performance and commissioning note from Dummy 3 for custom 12,000 Litre chemical storage vessels engineered with dual-laminate barrier.",
    documentType: "Client Appreciation Letter",
    keyProductsSupplied: ["12 KL Horizontal Acid Storage Tank", "FRP Nozzle Assemblies", "Level Sensor Ports"],
    documentContent: {
      header: "DUMMY 3 EQUIP SALES & ENGINEERING (P) LTD",
      subHeader: "ENGINEERING, INDUSTRIAL TURNKEY CONTRACTS & HEAVY EQUIPMENT",
      toWhom: "TO WHOMSOEVER IT MAY CONCERN",
      bodyParagraphs: [
        "This is to certify that M/s Samarth FRP Solutions has engineered and supplied 1 No. 'Horizontal Acid Storage Tank' of 12 KL Capacity in FRP (Vinyl Ester Resin) with our Purchase Order No: DM3/PO-F/10579 Dated 04.05.2018.",
        "The unit has been successfully installed and commissioned at our client's chemical plant site in August 2018 and is giving excellent performance till date without any leakage or structural weakness.",
        "We appreciate the high build quality, adherence to ASTM D3299 fabrication standards, and professional project management demonstrated by their team.",
      ],
      signatory: {
        name: "Nikhil Kanhere",
        designation: "Director - Purchase & Engineering",
        department: "Procurement & Quality Control",
        organization: "Dummy 3 Equip Sales & Engineering (P) Ltd",
      },
    },
  },
  {
    id: "dummy-4",
    title: "Dummy 4 - Ammonia Gas Scrubbing System Performance",
    label: "Dummy 4",
    category: "client",
    categoryName: "Client Appreciation Letters",
    badge: "Biochemical & Pharmaceutical",
    issueDate: "11-04-2019",
    validity: "Official Performance Record",
    issuingBodyOrClient: "Dummy 4 BioChem Private Limited",
    registrationOrRefNo: "DM4/ENG/2019-CERT/019",
    poNumber: "DM4/PUR/18-19/0421",
    standardOrScope: "Design, Fabrication & Installation of 5000 CFM Ammonia Gas Wet Scrubbing System",
    clientLocation: "Pharma & Chemical MIDC Zone",
    summaryQuote: "The complete scrubbing system has exceeded our emission abatement benchmarks with zero operational downtime.",
    description:
      "Appreciation-cum-performance certificate from Dummy 4 for turn-key FRP packed bed gas scrubber and composite ducting.",
    documentType: "Performance Certificate",
    keyProductsSupplied: ["Ammonia Gas Scrubber 5000 CFM", "Centrifugal FRP Blower", "Chemical Dosing Tank"],
    documentContent: {
      header: "DUMMY 4 BIOCHEM PRIVATE LIMITED",
      subHeader: "SPECIALTY BIO-CHEMICALS & ACTIVE PHARMA INTERMEDIATES",
      toWhom: "APPRECIATION-CUM-PERFORMANCE CERTIFICATE",
      bodyParagraphs: [
        "This is to certify that M/s Samarth FRP Solutions has supplied a complete 'Ammonia Gas Scrubbing System'. The scope includes Thermal Design, Mechanical Sizing, Fabrication, and Installation of Ammonia Gas Scrubbing Tower with FRP internals and mist eliminators.",
        "They have supplied & installed scrubbing system in 2018 and system is running trouble-free till date. Emission levels monitored by State Pollution Control Board have consistently remained well within permissible limits.",
        "We are satisfied with the system supplied by Samarth FRP and appreciate the performance of the Scrubbing system and after-sales service.",
      ],
      signatory: {
        name: "Dr. Rajesh K. Varma",
        designation: "Vice President - Operations & Plant Engineering",
        department: "Chemical Process & Safety Directorate",
        organization: "Dummy 4 BioChem Private Limited",
      },
    },
  },

  // ─── 3. STATUTORY & GOVERNMENT ACCREDITATIONS ───
  {
    id: "msme-udyam-registered",
    title: "MSME / Udyam Registration - Govt of India",
    label: "MSME / Udyam Registered",
    category: "statutory",
    categoryName: "Statutory & Approvals",
    badge: "Ministry of MSME",
    issueDate: "12-Aug-2020",
    validity: "Permanent Government Registration",
    issuingBodyOrClient: "Ministry of Micro, Small and Medium Enterprises, Government of India",
    registrationOrRefNo: "UDYAM-MH-12-0048291",
    standardOrScope: "NIC Code 2220: Manufacture of Plastics & Fiber Reinforced Polymer Products",
    description:
      "Official enterprise recognition by the Government of India for advanced manufacturing of composite polymer products for municipal, defence, and industrial infrastructure.",
    documentType: "Statutory Registration",
    documentContent: {
      header: "UDYAM REGISTRATION CERTIFICATE",
      subHeader: "MINISTRY OF MICRO, SMALL AND MEDIUM ENTERPRISES • GOVERNMENT OF INDIA",
      toWhom: "OFFICIAL GOVERNMENT REGISTRATION RECORD",
      bodyParagraphs: [
        "This is to certify that SAMARTH FRP SOLUTIONS has been officially verified and registered under Udyam Registration No. UDYAM-MH-12-0048291.",
        "Enterprise Type: Manufacturing Entity in High-Strength Fiber Reinforced Polymer Gratings, Enclosures, Manhole Assemblies, and Industrial Chemical Containment Systems.",
        "The manufacturing facility conforms to National Industrial Classification (NIC 22209) and qualifies for preferential procurement across Central & State Government tenders.",
      ],
      signatory: {
        name: "National Portal Directorate",
        designation: "Competent Registration Authority",
        department: "Udyam Enterprise Registry",
        organization: "Ministry of MSME, Govt. of India",
      },
    },
  },
  {
    id: "bis-standards-compliance",
    title: "Bureau of Indian Standards (BIS) IS 6746 / IS 1726 & EN 124 Standard Compliance",
    label: "BIS & EN 124 Standard Compliance",
    category: "statutory",
    categoryName: "Statutory & Approvals",
    badge: "Structural & Resins Standard",
    issueDate: "05-Jan-2022",
    validity: "Periodic Laboratory Compliance",
    issuingBodyOrClient: "Bureau of Indian Standards & NABL Accredited Testing Laboratory",
    registrationOrRefNo: "BIS-CMP-ENG-5520",
    standardOrScope: "IS 6746: Unsaturated Polyester Resins | BS EN 124: Class A15 to F900 Load Ratings",
    description:
      "Standard compliance certificate certifying that all structural composite members and manhole covers fulfill IS 6746 resin matrix and BS EN 124 load class ratings.",
    documentType: "Statutory Registration",
    documentContent: {
      header: "TEST COMPLIANCE & ACCREDITATION REPORT",
      subHeader: "BUREAU OF INDIAN STANDARDS & BS EN 124 STRUCTURAL VALIDATION",
      toWhom: "TECHNICAL SPECIFICATION COMPLIANCE RECORD",
      bodyParagraphs: [
        "This document certifies that product lines fabricated by Samarth FRP Solutions conform to IS 6746 specifications for structural grade unsaturated polyester & vinyl ester resins.",
        "Load Deflection & Proof Testing: FRP Solid Top and Recessed Manhole Covers comply with BS EN 124 / IS 1726 load classes from Class A15 (1.5 Tonne) up to Class D400 (40 Tonne) and Class F900 (90 Tonne airport runway test).",
        "Material Test Certificates (MTC) with raw batch tensile strength (ASTM D638), flexural modulus (ASTM D790), and Barcol Hardness (ASTM D2583) are archived for every production lot.",
      ],
      signatory: {
        name: "Er. Mahendra Joshi",
        designation: "Chief Materials Testing Engineer",
        department: "Polymer & Mechanical Test Laboratory",
        organization: "NABL Certified Testing Center",
      },
    },
  },
  {
    id: "rdso-pwd-vendor",
    title: "RDSO / Public Works Department Approved Vendor Registration",
    label: "RDSO / PWD Vendor Enlistment",
    category: "statutory",
    categoryName: "Statutory & Approvals",
    badge: "Govt Infrastructure Enlistment",
    issueDate: "14-Nov-2021",
    validity: "Valid through Mar-2027",
    issuingBodyOrClient: "Public Works Department & Railway Infrastructure Procurement Cell",
    registrationOrRefNo: "PWD/CE/VR/FRP-2022/194",
    standardOrScope: "Approved Enlistment for Composite Manhole Covers, Drain Gratings, and Railway Components",
    description:
      "Enlisted approved supplier for state highway projects, smart city road drainage, and maintenance-free railway platform composite utilities.",
    documentType: "Statutory Registration",
    documentContent: {
      header: "OFFICE OF THE CHIEF ENGINEER • PUBLIC WORKS DEPARTMENT",
      subHeader: "APPROVED VENDOR ENLISTMENT FOR COMPOSITE CIVIC UTILITIES",
      toWhom: "ENLISTMENT NOTIFICATION",
      bodyParagraphs: [
        "Samarth FRP Solutions has been enlisted as an Approved Manufacturer & Vendor for supplying Heavy-Duty FRP/GRP Manhole Covers, Chamber Covers, Trench Gratings, and Precast Drain Gratings across PWD & Municipal infrastructure projects.",
        "Inspection of the manufacturing workshop, load testing test bench, and resin blending facilities verified compliance with PWD Technical Schedule Clause 4.8.",
        "Products supplied under this registration carry 5-year anti-corrosion and load performance warranties.",
      ],
      signatory: {
        name: "R. C. Mane",
        designation: "Superintending Engineer (Procurement & Quality)",
        department: "Infrastructure Material Enlistment Division",
        organization: "Public Works Department",
      },
    },
  },
];
