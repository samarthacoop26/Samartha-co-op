import { HeroSlider } from "@/components/home/HeroSlider";
import { ProductCategories } from "@/components/home/ProductCategories";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <HeroSlider />
      <ProductCategories />
      <FinalCTA />
    </main>
  );
}

