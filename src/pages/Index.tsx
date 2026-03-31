import SiteHeader from "@/components/SiteHeader";
import HeroBanner from "@/components/HeroBanner";
import CategoryBar from "@/components/CategoryBar";
import HowItWorks from "@/components/HowItWorks";
import TireSearchSection from "@/components/TireSearchSection";
import TireDecisionGuide from "@/components/TireDecisionGuide";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import BrandsSection from "@/components/BrandsSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroBanner />
        <CategoryBar />
        <TireSearchSection />
        <HowItWorks />
        <TireDecisionGuide />
        <FeaturesCarousel />
        <BrandsSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
