import { HeroSection } from "../components/home/HeroSection.jsx";
import { PromoStrip } from "../components/home/PromoStrip.jsx";
import { CategorySection } from "../components/home/CategorySection.jsx";
import { FeaturedProductsSection } from "../components/home/FeaturedProductsSection.jsx";
import { WhyMedicanSection } from "../components/home/WhyMedicanSection.jsx";
import { JournalSection } from "../components/home/JournalSection.jsx";
import { NewsletterSection } from "../components/home/NewsletterSection.jsx";

export function HomePage({ navigate, addToCart, setCategory, onViewProduct }) {
  return <>
    <HeroSection navigate={navigate} />
    <PromoStrip />
    <CategorySection navigate={navigate} setCategory={setCategory} />
    <FeaturedProductsSection {...{ addToCart, navigate, onViewProduct }} />
    <WhyMedicanSection />
    <JournalSection navigate={navigate} />
    <NewsletterSection />
  </>;
}
