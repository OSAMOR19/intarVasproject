import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import vanityNumbers from "@/assets/vanity-numbers.jpg";
import { Link } from "react-router-dom";
import MessagingPlatformSection from "@/components/common/messaging";
import FAQAccordion from "@/components/common/FAQ";
import CustomQuoteBanner from "@/components/common/tailoredPricing";
import DeskphonesPricing from "@/components/common/GetOurDesktop";

export default function Numbers() {
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
              We're working hard to bring you an amazing vanity numbers experience. Stay tuned!
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
        <title>0700 & 0800 Numbers — Vanity and Toll‑free</title>
        <meta
          name="description"
          content="Give your business a professional edge with numbers that customers can trust and recall easily."
        />
        <link rel="canonical" href="/services/numbers" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-background py-20 mb-10 h-screen">
        <div className="container mx-auto px-4 h-full">
          <div className="grid gap-12 md:grid-cols-12 md:items-center h-full">
            <div className="col-span-5">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Vanity and Toll-free numbers
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Give your business a professional edge with numbers that
                customers can trust and recall easily
              </p>
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg">Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className="col-span-7 animate-enter grid grid-cols-2 gap-4 py-12 h-full ">
              <div>
                <img
                  src={"/images/number1.png"}
                  alt="Illustration showing a person working on a laptop with various telecom icons around them"
                  className="w-full h-full object-fill"
                  style={{
                    objectPosition: "top",
                    objectFit: "cover",
                    borderRadius: "24px",
                  }}
                />
              </div>

              <div className="flex flex-col justify-between gap-4">
                <img
                  src={"/images/number2.png"}
                  alt="Illustration showing a person working on a laptop with various telecom icons around them"
                  className="w-full h-full object-fill"
                  style={{
                    objectPosition: "top",
                    objectFit: "cover",
                    borderRadius: "24px",
                  }}
                />
                <img
                  src={"/images/number3.png"}
                  alt="Illustration showing a person working on a laptop with various telecom icons around them"
                  className="w-full h-full object-fill"
                  style={{
                    objectPosition: "top",
                    objectFit: "cover",
                    borderRadius: "24px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-muted/30 py-32">
        <div className="container mx-auto px-4">
          <p className="mx-auto max-w-4xl font-inter text-center font-[600] text-[38px] leading-relaxed text-muted-foreground">
            Get a memorable 0700 vanity number to make your brand unforgettable.
            Then, add an 0800 toll-free number to let customers call you for
            free. Together, these numbers increase engagement and drive business
            growth.
          </p>
        </div>
      </section>

      <MessagingPlatformSection />
      <DeskphonesPricing />
      <CustomQuoteBanner />
      <FAQAccordion />
    </main>
  );
}
