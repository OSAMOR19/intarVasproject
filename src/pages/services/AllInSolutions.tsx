import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import bulkMessaging from "@/assets/bulk-messaging.jpg";
import { Link } from "react-router-dom";
import AllInSolutionCard from "@/components/card/AllInSolution";
import Transform from "@/components/common/transform";
import BusinessCom from "@/components/common/BusinessCom";
import { Testimonials as TestimonialsSection } from "@/components/sections";
import AllInOneCTA from "@/components/common/AllInCTA";

export default function AllInSolutions() {
  return (
    <main>
      <Helmet>
        <title>All-in-One Solutions — IntarVAS</title>
        <meta
          name="description"
          content="Explore our comprehensive suite of telecom solutions designed for modern businesses."
        />
        <link rel="canonical" href="/services/bulk-messaging" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-background pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-inter font-semibold tracking-tight md:text-[64px] mb-3">
            All in one solution
          </h1>
          <p className="mx-auto font-inter mt-4 max-w-xl text-lg text-muted-foreground">
            Our All-in-One CRM & Omnichannel Suite helps you manage voice, chat,
            email, and social from a single, powerful platform.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="container mx-auto px-4 py-12">
        <div className=" max-full">
          <img
            src={"/images/allinsoluheroimg.png"}
            alt="Bulk messaging platform with colorful message illustrations"
            className="w-full rounded-[32px]"
          />
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-muted/30 py-36">
        <div className="container mx-auto px-4">
          <p className="mx-auto max-w-4xl text-center text-[38px] font-inter font-[600] leading-relaxed text-muted-foreground">
            Nigerian businesses and government agencies need simplicity and
            speed. Our CRM solution centralizes customer communication, so your
            team saves time, improves response rates, and never loses track of a
            customer.
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
              Simplifying personalized conversations.
            </h3>
            <p className="text-[#858D9D] mb-3">
              Drive business results with our meaningful customer conversations.
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
              icon={<img src={"/icon/CRM.svg"} alt="Bulk Messaging" />}
              title="Smart CRM"
              description="Personalize every customer interaction with a smart, unified CRM that keeps your history organized."
              img={"/images/image1.png"}
            />
            <AllInSolutionCard
              icon={<img src={"/icon/tick.svg"} alt="Bulk Messaging" />}
              title="Security & Compliance"
              description="We use enterprise-grade encryption, guarantee 99.9% uptime, and are fully compliant with telecom standards."
              img={"/images/image2.png"}
            />
          </div>
        </div>
      </section>

      <Transform />
      <AllInOneCTA />
      <TestimonialsSection />
      <BusinessCom />
    </main>
  );
}
