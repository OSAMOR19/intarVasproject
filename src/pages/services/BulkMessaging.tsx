import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import bulkMessaging from "@/assets/bulk-messaging.jpg";
import { Link } from "react-router-dom";
import MessagingPlatformSection from "@/components/common/messaging";
import FAQAccordion from "@/components/common/FAQ";
import CustomQuoteBanner from "@/components/common/tailoredPricing";
import { useEffect, useRef, useState } from "react";

export default function BulkMessaging() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [hasAnimatedDescription, setHasAnimatedDescription] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-based color transition animation focused on description section
    const handleScroll = () => {
      const descriptionSection = document.getElementById(
        "number-description-section"
      );
      if (!descriptionSection) return;

      const rect = descriptionSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on when the section comes into view
      // Start animation when section is 50% visible, complete when fully scrolled past
      const startPoint = windowHeight * 0.5; // Start when section is 50% visible
      const endPoint = -rect.height; // Complete when section is fully scrolled past

      const progress = Math.max(
        0,
        Math.min(1, (startPoint - rect.top) / (startPoint - endPoint))
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeroVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    // Image section animation
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    // Description section animation with simple fade-in
    const descriptionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedDescription) {
            setIsDescriptionVisible(true);
            setHasAnimatedDescription(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (descriptionRef.current) {
      descriptionObserver.observe(descriptionRef.current);
    }

    // Scroll snapping logic for cards
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const updateActiveCard = () => {
        const scrollTop = scrollContainer.scrollTop;
        const cardHeight = scrollContainer.scrollHeight / 2; // 2 cards
        const newActiveCard = Math.round(scrollTop / cardHeight);
      };

      scrollContainer.addEventListener("scroll", updateActiveCard);
      updateActiveCard(); // Initial call

      return () => {
        scrollContainer.removeEventListener("scroll", updateActiveCard);
        if (heroRef.current) heroObserver.unobserve(heroRef.current);
        if (imageRef.current) imageObserver.unobserve(imageRef.current);
        if (descriptionRef.current)
          descriptionObserver.unobserve(descriptionRef.current);
      };
    }

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
      if (descriptionRef.current)
        descriptionObserver.unobserve(descriptionRef.current);
    };
  }, [hasAnimatedDescription]);
  return (
    <main className="relative">
      {/* Coming Soon Overlay */}
      {/* <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex items-center justify-center">
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
      </div> */}
      <Helmet>
        <title>Bulk Messaging — Reliable A2P Platform</title>
        <meta
          name="description"
          content="Our secure and scalable messaging platform enables you to connect with customers instantly, no matter their location."
        />
        <link rel="canonical" href="/services/bulk-messaging" />
      </Helmet>
      {/* Hero Section */}
      <section ref={heroRef} className="bg-background pt-32 pb-12 ">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 text-center">
          <div
            className={`transition-all duration-1000 ${
              isHeroVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
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
        </div>
      </section>
      {/* Image Section */}
      <section ref={imageRef} className="container mx-auto px-4 py-12">
        <div
          className={`max-full transition-all duration-1000 ${
            isImageVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <img
            src={"/images/bulkMessagingHeroImg.png"}
            alt="Bulk messaging platform with colorful message illustrations"
            className="w-full rounded-[32px] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>
      {/* Description Section */}
      <section
        ref={descriptionRef}
        id="number-description-section"
        className="bg-muted/30 py-20 md:py-36 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isDescriptionVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <p className="mx-auto font-inter md:text-[38px] max-w-md md:max-w-4xl font-[600] text-center text-lg leading-[1.2] text-muted-foreground">
              {(() => {
                const descriptionText =
                  "    As a licensed VAS Aggregator, IntarVAS provides an A2P bulk messaging platform that's reliable, compliant, and far-reaching. We serve enterprises, fintech, government, NGOs, and retail, handling everything from transactional alerts and promotional campaigns to OTP verification.";
                const descriptionWords = descriptionText.split(" ");

                return descriptionWords.map((word, index) => {
                  // Calculate color progress for each word based on scroll position
                  // Use a multiplier to ensure we reach the end of the text
                  const wordProgress = Math.max(
                    0,
                    Math.min(
                      1,
                      scrollProgress * descriptionWords.length * 1.2 - index
                    )
                  );

                  // Color transition from grey (#858D9D) to dark (#001933)
                  const greyR = 133,
                    greyG = 141,
                    greyB = 157;
                  const darkR = 0,
                    darkG = 25,
                    darkB = 51;

                  const currentR = Math.round(
                    greyR + (darkR - greyR) * wordProgress
                  );
                  const currentG = Math.round(
                    greyG + (darkG - greyG) * wordProgress
                  );
                  const currentB = Math.round(
                    greyB + (darkB - greyB) * wordProgress
                  );

                  return (
                    <span
                      key={index}
                      className="inline-block transition-colors duration-300"
                      style={{
                        color: `rgb(${currentR}, ${currentG}, ${currentB})`,
                      }}
                    >
                      {word}&nbsp;
                    </span>
                  );
                });
              })()}
            </p>
          </div>
        </div>
      </section>
      <MessagingPlatformSection />
      <CustomQuoteBanner />
      <FAQAccordion />
    </main>
  );
}
