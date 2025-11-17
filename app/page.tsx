"use client";

import {
  HeroSection,
  ClientLogosSection,
  SecuritySection,
} from "@/components/sections";
import FeaturesSection from "@/components/common/LandingFeature";
import ProvenResultsSection from "@/components/common/LandingStats";
import { Testimonials as TestimonialsSection } from "@/components/sections";
import BusinessCom from "@/components/common/BusinessCom";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientLogosSection />
      <FeaturesSection />
      <ProvenResultsSection />
      <SecuritySection />
      <TestimonialsSection />
      <BusinessCom />
    </main>
  );
}

