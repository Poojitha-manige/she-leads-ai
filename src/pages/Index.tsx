import { HeroSection } from "@/components/HeroSection";
import { LearningCategories } from "@/components/LearningCategories";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProgressDashboard } from "@/components/ProgressDashboard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LearningCategories />
      <FeatureGrid />
      <ProgressDashboard />
    </div>
  );
};

export default Index;