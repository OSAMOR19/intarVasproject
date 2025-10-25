import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  HeroSection,
  ClientLogosSection,
  SecuritySection,
} from "@/components/sections";
import FeaturesSection from "@/components/common/LandingFeature";
import ProvenResultsSection from "@/components/common/LandingStats";
import { Testimonials as TestimonialsSection } from "@/components/sections";
import BusinessCom from "@/components/common/BusinessCom";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>IntarVAS — Smart Telecom Solutions</title>
        <meta
          name="description"
          content="Cloud PBX, bulk messaging, and vanity numbers built for Nigerian businesses."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <HeroSection />

      <ClientLogosSection />

      <FeaturesSection />

      <ProvenResultsSection />

      <SecuritySection />

      <TestimonialsSection />

      <BusinessCom />
    </main>
  );
};

export default Index;
