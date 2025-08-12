import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import KiboDifferenceSection from "@/components/KiboDifferenceSection";
import KiboAdvantageSection from "@/components/KiboAdvantageSection";
import ShopSection from "@/components/ShopSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <KiboDifferenceSection />
      <KiboAdvantageSection />
      <ShopSection />
      <Footer />
    </div>
  );
};

export default Index;
