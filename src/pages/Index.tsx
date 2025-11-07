import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ImpactSection from "@/components/ImpactSection";
import DataVisualization from "@/components/DataVisualization";
import SolutionsSection from "@/components/SolutionsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <ImpactSection />
      <DataVisualization />
      <SolutionsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
