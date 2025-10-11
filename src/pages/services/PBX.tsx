import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import pbxAnalytics from "@/assets/pbx-analytics.jpg";
import { Link } from "react-router-dom";
import { PricingPlan as PricingPlans } from "@/components/sections";
import AllInSolutionCard from "@/components/card/AllInSolution";
import PbxFooter from "@/components/common/pbxFooter";
import { Testimonials as TestimonialsSection } from "@/components/sections";

export default function PBX() {
  return (
    <main>
      <Helmet>
        <title>IntarVAS PBX — Cloud Contact Centre</title>
        <meta
          name="description"
          content="Run your business on a smarter, cloud-based PBX that connects teams, customers, and partners with ease."
        />
        <link rel="canonical" href="/services/pbx" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-background pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-inter font-[600] tracking-tight md:text-[64px]">
            IntarvAS PBX
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Run your business on a smarter, cloud-based PBX that connects teams,
            customers, and partners with ease.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button
                className="bg-gradient-to-t to-[#FFFFFF] from-[#3B82F6]"
                size="lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <img
            src={"/images/pbxHeroImg.png"}
            alt="IntarVAS PBX analytics dashboard showing call history and statistics"
            className="w-full rounded-[32px]"
          />
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-muted/30 py-36">
        <div className="container mx-auto px-4">
          <p className="mx-auto font-inter text-[38px] font-[600] text-[#858D9D] max-w-4xl text-center text-lg leading-[1.2] text-muted-foreground">
            With IntarvAS PBX, you get enterprise-grade call management without
            the cost of on-site hardware. Create extensions for your team, route
            calls intelligently, and manage everything from a simple dashboard.
          </p>
        </div>
      </section>

      <section className="bg-[#F6F6F6] py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="max-w-lg">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                Features
              </span>
            </div>
            <h3 className="font-inter text-[38px] font-[600] leading-[1.2]">
              A phone number with all the business features you need.
            </h3>
            <p className="text-[#858D9D] mb-3">
              These critical features are essential for any business, regardless
              of size.
            </p>
            <Button
              className="bg-gradient-to-t to-[#FFFFFF] from-[#3B82F6]"
              size="lg"
            >
              Learn More
            </Button>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <AllInSolutionCard
              icon={<img src={"/icon/voicemail.svg"} alt="Bulk Messaging" />}
              title="Call Recording"
              description="Securely record and store customer conversations, ensuring accountability, training opportunities, and compliance with industry standards."
              img={"/images/image3.png"}
            />
            <AllInSolutionCard
              icon={<img src={"/icon/chart.svg"} alt="Bulk Messaging" />}
              title="Analytics"
              description="Track call volumes, duration, and performance in real time with clear dashboards that help you make smarter business decisions. "
              img={"/images/image4.png"}
            />
          </div>
        </div>
      </section>

      <PricingPlans />
      <TestimonialsSection />
      <PbxFooter />
    </main>
  );
}
