import type { Metadata } from "next";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { ProductCategories } from "@/components/home/ProductCategories";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { IndustriesServed } from "@/components/home/IndustriesServed";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SITE_URL, getWebSiteSchema } from "@/lib/seoData";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "FRP Manufacturer India | FRP Engineering Solutions Dombivli",
  description:
    "MSME & GST registered FRP manufacturer in Dombivli & Taloja. Turnkey FRP tanks, scrubbers, blowers, M.S. lining, and piping projects supplied across India.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "FRP Manufacturer India | FRP Engineering Solutions Dombivli",
    description:
      "MSME & GST registered FRP manufacturer in Dombivli & Taloja. Turnkey FRP tanks, scrubbers, blowers, M.S. lining, and piping projects supplied across India.",
    url: SITE_URL,
    type: "website",
    locale: "en_IN",
    siteName: "Samarth Corporation",
    images: [
      {
        url: "/images/about/plant-facility.jpg",
        width: 1200,
        height: 630,
        alt: "Samarth Corporation - Industrial FRP Manufacturer India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FRP Manufacturer India | FRP Engineering Solutions Dombivli",
    description:
      "MSME & GST registered FRP manufacturer in Dombivli & Taloja. Turnkey FRP tanks, scrubbers, blowers, M.S. lining, and piping projects supplied across India.",
    images: ["/images/about/plant-facility.jpg"],
  },
};

export default function Home() {
  return (
    <div className="w-full bg-white dark:bg-black">
      <JsonLd id="website-schema" data={getWebSiteSchema()} />
      <HeroSlider />
      <ClientMarquee />
      <ProductCategories />
      <WhyChooseUs />
      <IndustriesServed />
      <CertificationsSection />
      <FinalCTA />
    </div>
  );
}
