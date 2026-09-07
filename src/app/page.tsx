import { HeroSlider } from "@/components/home/HeroSlider";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { ProductCategories } from "@/components/home/ProductCategories";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { IndustriesServed } from "@/components/home/IndustriesServed";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="w-full bg-white dark:bg-black">
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

