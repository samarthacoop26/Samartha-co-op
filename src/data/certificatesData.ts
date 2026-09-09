export interface CertificateItem {
  id: string;
  title: string;
  label: string; // Text on the bottom yellow banner
  category: "statutory" | "client";
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
  documentType: "Statutory Registration" | "Client Appreciation Letter" | "Performance Certificate";
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
  // ─── 1. STATUTORY & GOVERNMENT ACCREDITATIONS ───
  {
    id: "msme-udyam-registered",
    title: "MSME / Udyam Registration - Govt of India",
    label: "MSME / Udyam Registered",
    category: "statutory",
    categoryName: "Statutory & Enterprise Registrations",
    badge: "Ministry of MSME",
    issueDate: "12-Aug-2020",
    validity: "Permanent Government Registration",
    issuingBodyOrClient: "Ministry of Micro, Small and Medium Enterprises, Government of India",
    registrationOrRefNo: "UDYAM-MH-33-0265642",
    standardOrScope: "NIC Code 2220: Manufacture of Plastics & Fiber Reinforced Polymer Products",
    description:
      "Official enterprise recognition by the Government of India for advanced manufacturing of PP & FRP composite polymer products, linings, tanks, and chemical equipment.",
    documentType: "Statutory Registration",
    documentContent: {
      header: "UDYAM REGISTRATION CERTIFICATE",
      subHeader: "MINISTRY OF MICRO, SMALL AND MEDIUM ENTERPRISES • GOVERNMENT OF INDIA",
      toWhom: "OFFICIAL GOVERNMENT REGISTRATION RECORD",
      bodyParagraphs: [
        "This is to certify that SAMARTH CORPORATION has been officially verified and registered under Udyam Registration No. UDYAM-MH-33-0265642.",
        "Enterprise Type: Manufacturing Entity in PP & FRP Tanks, Blowers, Scrubbers, M.S. FRP Lining, Thermoplastic Pipelines, and Custom Chemical Process Equipment.",
        "The manufacturing workshop at MIDC Taloja, Raigad conforms to National Industrial Classification (NIC 22209) and qualifies for preferential procurement across Government and private industrial tenders.",
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
    id: "gst-registered-entity",
    title: "GST Registration Certificate - Govt of India",
    label: "GST Registered Entity",
    category: "statutory",
    categoryName: "Statutory & Enterprise Registrations",
    badge: "Ministry of Finance",
    issueDate: "18-Nov-2022",
    validity: "Active & Verified Taxpayer Status",
    issuingBodyOrClient: "Goods and Services Tax Network (GSTN), Ministry of Finance, Govt. of India",
    registrationOrRefNo: "27AEVFS9451A1ZK",
    standardOrScope: "Central Goods and Services Tax Act, 2017 - Principal Place: Dombivli & MIDC Taloja",
    description:
      "Official tax compliance and enterprise registration certificate authorizing commercial manufacture, pan-India interstate supply, and GST tax-invoiced industrial contracts.",
    documentType: "Statutory Registration",
    documentContent: {
      header: "GOVERNMENT OF INDIA",
      subHeader: "REGISTRATION CERTIFICATE • GOODS AND SERVICES TAX",
      toWhom: "TAX COMPLIANCE & LEGAL ENTITY RECORD",
      bodyParagraphs: [
        "This is to certify that SAMARTH CORPORATION has been verified and registered under the Goods and Services Tax Act, 2017 with Legal Tax Identification GSTIN: 27AEVFS9451A1ZK.",
        "Constitution of Business: Sole Proprietorship / Manufacturing Enterprise with active manufacturing works at MIDC Taloja, Raigad and registered office at Dombivli (W), Maharashtra.",
        "The taxpayer is verified and in active standing for executing commercial tenders, issuing GST-compliant tax invoices, e-way bills, and turnkey engineering supplies across India.",
      ],
      signatory: {
        name: "State Tax Officer / Superintendent",
        designation: "Proper Officer & Jurisdictional Authority",
        department: "Central & State GST Directorate",
        organization: "Ministry of Finance, Govt. of India",
      },
    },
  },

  // ─── 2. CLIENT APPRECIATION & PERFORMANCE LETTERS ───
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
];
