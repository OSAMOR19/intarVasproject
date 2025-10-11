import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import bulkMessaging from "@/assets/bulk-messaging.jpg";
import { Link } from "react-router-dom";
import MessagingPlatformSection from "@/components/common/messaging";
import FAQAccordion from "@/components/common/FAQ";
import CustomQuoteBanner from "@/components/common/tailoredPricing";

export default function BulkMessaging() {
  return (
    <main>
      <Helmet>
        <title>Bulk Messaging — Reliable A2P Platform</title>
        <meta
          name="description"
          content="Our secure and scalable messaging platform enables you to connect with customers instantly, no matter their location."
        />
        <link rel="canonical" href="/services/bulk-messaging" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-background pt-32 pb-12 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-inter font-[600] tracking-tight md:text-[64px] mb-3">
            Bulk Messaging
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[#53514E] font-inter text-[18px] text-muted-foreground">
            Our secure and scalable messaging platform enables you to connect
            with customers instantly, no matter their location.
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
        <div className="mx-auto max-w-full">
          <img
            src={"/images/bulkMessagingHeroImg.png"}
            alt="Bulk messaging platform with colorful message illustrations"
            className="w-full rounded-2xl "
          />
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-muted/30 py-36">
        <div className="container mx-auto px-4">
          <p className="mx-auto max-w-4xl font-inter text-[38px] font-[600] text-[#858D9D] text-center text-lg leading-[1.2] text-muted-foreground">
            As a licensed VAS Aggregator, IntarVAS provides an A2P bulk
            messaging platform that's reliable, compliant, and far-reaching. We
            serve enterprises, fintech, government, NGOs, and retail, handling
            everything from transactional alerts and promotional campaigns to
            OTP verification.
          </p>
        </div>
      </section>

      <MessagingPlatformSection />
      <CustomQuoteBanner />
      <FAQAccordion />
    </main>
  );
}
