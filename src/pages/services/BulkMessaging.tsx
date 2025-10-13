import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import bulkMessaging from "@/assets/bulk-messaging.jpg";
import { Link } from "react-router-dom";
import MessagingPlatformSection from "@/components/common/messaging";
import FAQAccordion from "@/components/common/FAQ";
import CustomQuoteBanner from "@/components/common/tailoredPricing";

export default function BulkMessaging() {
  return (
    <main className="relative">
      {/* Coming Soon Overlay */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-12 max-w-md mx-4 text-center shadow-2xl">
          <div className="mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Coming Soon</h2>
            <p className="text-gray-600">
              We're working hard to bring you an amazing bulk messaging experience. Stay tuned!
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-700 font-medium">Expected Launch</p>
              <p className="text-lg font-bold text-blue-600">Q4 2025</p>
            </div>
            <p className="text-xs text-gray-500">
              Contact us for early access and updates
            </p>
            <div className="flex gap-3 pt-2">
              <Link to="/" className="flex-1">
                <Button variant="outline" className="w-full">
                  Go Back Home
                </Button>
              </Link>
              <Link to="/contact" className="flex-1">
                <Button variant="hero" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
