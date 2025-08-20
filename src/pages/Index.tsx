import { HeroSection } from "@/components/HeroSection";
import { CelebrationGrid } from "@/components/CelebrationGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CelebrationGrid />
      <Footer />
    </div>
  );
};

export default Index;