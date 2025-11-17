"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PricingPlan as PricingPlans } from "@/components/sections";
import AllInSolutionCard from "@/components/card/AllInSolution";
import PbxFooter from "@/components/common/pbxFooter";
import { Testimonials as TestimonialsSection } from "@/components/sections";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


export default function PBX() {
  const trustRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const stickyLeftRef = useRef<HTMLDivElement>(null);
  const scrollingRightRef = useRef<HTMLDivElement>(null);
  
  const [titleText, setTitleText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTrustVisible, setIsTrustVisible] = useState(false);
  const [showTrustCards, setShowTrustCards] = useState(false);
  const [isLaptopSectionVisible, setIsLaptopSectionVisible] = useState(false);

  const fullTitle = "IntarvAS PBX";
  const fullDescription =
    "Run your business on a smarter, cloud-based PBX that connects teams, customers, and partners with ease.";
  const descriptionText = "With IntarvAS PBX, you get enterprise-grade call management without the cost of on-site hardware. Create extensions for your team, route calls intelligently, and manage everything from a simple dashboard.";
  const descriptionWords = descriptionText.split(" ");

  useEffect(() => {
    // Typewriter effect for title
    let titleIndex = 0;
    const titleInterval = setInterval(() => {
      if (titleIndex <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, titleIndex));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        // Start description typing after title is complete
        setTimeout(() => {
          setIsTypingComplete(true);
        }, 500);
      }
    }, 100); // Faster typing for title

    return () => {
      clearInterval(titleInterval);
    };
  }, []);

  useEffect(() => {
    // Scroll-based color transition animation focused on description section
    const handleScroll = () => {
      const descriptionSection = document.getElementById("description-section");
      if (!descriptionSection) return;
      
      const rect = descriptionSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on when the section comes into view
      // Start animation when section is 50% visible, complete when fully scrolled past
      const startPoint = windowHeight * 0.5; // Start when section is 50% visible
      const endPoint = -rect.height; // Complete when section is fully scrolled past
      
      const progress = Math.max(0, Math.min(1, (startPoint - rect.top) / (startPoint - endPoint)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // GSAP ScrollTrigger for sticky left column in features section
  useEffect(() => {
    if (!featuresRef.current || !stickyLeftRef.current || !scrollingRightRef.current) return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id === "pbx-features-sticky") {
        trigger.kill();
      }
    });

    // Create the pin effect
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: "pbx-features-sticky",
        trigger: featuresRef.current,
        start: "top 80px", // Start pinning when section hits 80px from top (below header)
        end: () => {
          // Pin until the right column finishes scrolling
          const rightHeight = scrollingRightRef.current?.offsetHeight || 0;
          const leftHeight = stickyLeftRef.current?.offsetHeight || 0;
          return `+=${rightHeight - leftHeight - 150}`; // Unpin 150px before the end to prevent overlap
        },
        pin: stickyLeftRef.current,
        pinSpacing: false,
        markers: false, // Set to true for debugging
        scrub: false,
      });
    }, featuresRef.current);

    return () => {
      ctx.revert(); // Clean up GSAP context
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id === "pbx-features-sticky") {
          trigger.kill();
        }
      });
    };
  }, []);

  // Trust section animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTrustVisible(true);
            // Stagger card animations
            setTimeout(() => setShowTrustCards(true), 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = trustRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  // Laptop section animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLaptopSectionVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const laptopSection = document.getElementById("laptop-section");
    if (laptopSection) {
      observer.observe(laptopSection);
    }

    return () => {
      const elem = document.getElementById("laptop-section");
      if (elem) {
        observer.unobserve(elem);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-background pt-32 pb-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-inter font-[600] tracking-tight md:text-[64px] animate-fade-in-up">
            IntarvAS PBX
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-in-up delay-300">
            Run your business on a smarter, cloud-based PBX that connects teams,
            customers, and partners with ease.
          </p>
          <div className="mt-8 animate-fade-in-up delay-500">
            <Link href="/contact">
              <Button
                variant="hero"
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="container mx-auto px-4 py-12 relative">
        <div className="mx-auto max-w-5xl">
          <div className="relative group">
            {/* Subtle glow effect behind image */}
            <div className="absolute inset-0 bg-gray-200/30 rounded-[32px] blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            {/* Animated image */}
          <img
            src={"/images/pbxHeroImg.png"}
            alt="IntarVAS PBX analytics dashboard showing call history and statistics"
              className="w-full rounded-[32px] relative z-10 transform transition-all duration-700 hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-lg"
          />
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section
        id="description-section"
        className="bg-muted/30 py-36 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/3 rounded-full blur-2xl animate-bounce delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className="transition-all duration-1000 opacity-100 transform translate-y-0"
          >
            <p className="mx-auto font-inter text-[35px] font-[600] max-w-4xl text-center text-1.1xl leading-[1.2] hover:scale-105 transition-all duration-500 cursor-default">
              {descriptionWords.map((word, index) => {
                // Calculate color progress for each word based on scroll position
                // Use a multiplier to ensure we reach the end of the text
                const wordProgress = Math.max(0, Math.min(1, (scrollProgress * descriptionWords.length * 1.2) - index));
                
                // Color transition from grey (#858D9D) to dark (#001933)
                const greyR = 133, greyG = 141, greyB = 157;
                const darkR = 0, darkG = 25, darkB = 51;
                
                const currentR = Math.round(greyR + (darkR - greyR) * wordProgress);
                const currentG = Math.round(greyG + (darkG - greyG) * wordProgress);
                const currentB = Math.round(greyB + (darkB - greyB) * wordProgress);
                
                return (
                  <span
                    key={index}
                    className="inline-block transition-colors duration-300"
                    style={{
                      color: `rgb(${currentR}, ${currentG}, ${currentB})`
                    }}
                  >
                    {word}&nbsp;
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </section>

      <section ref={featuresRef} id="cards-section" className="bg-[#F6F6F6] pt-20 pb-32">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
          {/* Left Column - Description (Sticky) */}
          <div ref={stickyLeftRef} className="max-w-lg h-fit">
            <div className="inline-block mb-4">
              <span
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                style={{ border: "2px solid #C6E2FF" }}
              >
                Features
              </span>
            </div>
            <h3 className="font-inter text-[38px] font-[600] leading-[1.2]">
              A phone number with all the business features you need.
            </h3>
            <p className="text-[#858D9D] mb-3 mt-4">
              These critical features are essential for any business, regardless of size.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="hero" size="lg" className="hover:scale-105 transition-transform duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Scrolling Cards */}
          <div ref={scrollingRightRef} className="flex flex-col gap-10">
            <div 
              className="flex items-center justify-center"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out forwards 0s`
              }}
            >
              <AllInSolutionCard
                icon={
                  <img
                    src={"/icon/voicemail.svg"}
                    alt="call recording"
                    width={24}
                    height={24}
                    style={{ objectFit: "contain" }}
                  />
                }
                title="Call Recording"
                description="Securely record and store customer conversations, ensuring accountability, training opportunities, and compliance with industry standards."
                img={"/images/callrecording.png"}
              />
            </div>

            <div 
              className="flex items-center justify-center"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out forwards 0.1s`
              }}
            >
              <AllInSolutionCard
                icon={
                  <img
                    src={"/icon/chart.svg"}
                    alt="Analytics"
                    width={24}
                    height={24}
                    style={{ objectFit: "contain" }}
                  />
                }
                title="Analytics"
                description="Track call volumes, duration, and performance in real time with clear dashboards that help you make smarter business decisions."
                img={"/images/analytics.png"}
              />
            </div>

            <div 
              className="flex items-center justify-center"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out forwards 0.2s`
              }}
            >
              <AllInSolutionCard
                icon={
                  <img
                    src={"/icon/extensionicon.svg"}
                    alt="Extensions"
                    width={24}
                    height={24}
                    style={{ objectFit: "contain" }}
                  />
                }
                title="Extensions"
                description="Give every team member a professional business line with unique extensions, whether they're in the office or working remotely."
                img={"/images/extimage.svg"}
              />
            </div>

            <div 
              className="flex items-center justify-center"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out forwards 0.3s`
              }}
            >
              <AllInSolutionCard
                icon={
                  <img
                    src={"/icon/scalability.svg"}
                    alt="Scalability"
                    width={24}
                    height={24}
                    style={{ objectFit: "contain" }}
                  />
                }
                title="Scalability"
                description="Start small and expand seamlessly. Add or remove lines as your business grows, without costly hardware or downtime."
                img={"/images/sclimage.svg"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section
        ref={trustRef}
        className="bg-black text-white pt-40 pb-40 px-8 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Headline */}
          <div
            className={`text-left mb-16 transition-all duration-1000 ${
              isTrustVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-gray-400">
                We trust our PBX so much, we built it for our own business and
                still use it every day.
              </span>{" "}
              Join over <span className="text-blue-400 font-bold">2,000+</span>{" "}
              business owners who do the same.
            </h2>
          </div>

          <div
            id="laptop-section"
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              showTrustCards
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            {/* Feature List */}
            <div className={`bg-[#0C0C0C] rounded-3xl p-8 space-y-8 h-[400px] flex flex-col justify-center hover:scale-105 transition-all duration-1000 ${
              isLaptopSectionVisible 
                ? "opacity-100 transform translate-x-0" 
                : "opacity-0 transform -translate-x-20"
            }`}>
              {/* Feature 1 */}
              <div className="flex relative items-center gap-4 group">
                {/* Icon */}
                <div className="bg-[#1F2228] w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-[#2A2D35]">
                  <img
                    src="/correctpuzlleicon.svg"
                    alt="Extensions"
                    width={26}
                    height={26}
                    className="text-white"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-lg transition-all duration-300 hover:text-white">
                    <span className="text-blue-500 font-medium transition-all duration-300 hover:text-blue-400">
                      Assign Extensions
                    </span>
                    <span className="text-gray-300 ml-2 transition-all duration-300 hover:text-gray-200">
                      to your team instantly
                    </span>
                  </h3>
                </div>

                {/* Connector Line */}
                <div
                  className="absolute top-[-7px] left-[39px] mt-16 w-0.5 h-8 border-l-2 border-dashed border-blue-500 animate-pulse-slow"
                  style={{ marginLeft: "-16px" }}
                ></div>
              </div>

              {/* Feature 2 */}
              <div className="flex relative items-center gap-4 group">
                {/* Icon */}
                <div className="bg-[#1F2228] w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-[#2A2D35]">
                  <img
                    src="/callrecordicon.svg"
                    alt="Call Recording"
                    width={25}
                    height={23}
                    className="text-white"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-lg transition-all duration-300 hover:text-white">
                    <span className="text-blue-500 font-medium transition-all duration-300 hover:text-blue-400">
                      Call Recording
                    </span>
                    <span className="text-gray-300 ml-2 transition-all duration-300 hover:text-gray-200">
                      for compliance and quality checks
                    </span>
                  </h3>
                </div>

                {/* Connector Line */}
                <div
                  className="absolute top-[-7px] left-[39px] mt-16 w-0.5 h-8 border-l-2 border-dashed border-blue-500 animate-pulse-slow"
                  style={{ marginLeft: "-16px" }}
                ></div>
              </div>

              {/* Feature 3 */}
              <div className="flex relative items-center gap-4 group">
                {/* Icon */}
                <div className="bg-[#1F2228] w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-[#2A2D35]">
                  <img
                    src="/analysicreporticon.svg"
                    alt="Analytics"
                    width={24}
                    height={22}
                    className="text-white"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-lg transition-all duration-300 hover:text-white">
                    <span className="text-blue-500 font-medium transition-all duration-300 hover:text-blue-400">
                      Analytics & Reporting
                    </span>
                    <span className="text-gray-300 ml-2 transition-all duration-300 hover:text-gray-200">
                      dashboards
                    </span>
                  </h3>
                </div>

                {/* Connector Line */}
                <div
                  className="absolute top-[-7px] left-[39px] mt-16 w-0.5 h-8 border-l-2 border-dashed border-blue-500 animate-pulse-slow"
                  style={{ marginLeft: "-16px" }}
                ></div>
              </div>

              {/* Feature 4 */}
              <div className="flex relative items-center gap-4 group">
                {/* Icon */}
                <div className="bg-[#1F2228] w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-[#2A2D35]">
                  <img
                    src="/addplus.svg"
                    alt="Call Forwarding"
                    width={26}
                    height={26}
                    className="text-white"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-lg transition-all duration-300 hover:text-white">
                    <span className="text-blue-500 font-medium transition-all duration-300 hover:text-blue-400">
                      Call Forwarding & Routing
                    </span>
                    <span className="text-gray-300 ml-2 transition-all duration-300 hover:text-gray-200">
                      flexibility
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Dashboard Screenshot */}
            <div className={`relative transition-all duration-1000 ${
              isLaptopSectionVisible 
                ? "opacity-100 transform translate-x-0" 
                : "opacity-0 transform translate-x-20"
            }`}>
              <div className="bg-[#0C0C0C] rounded-3xl p-8 flex justify-center items-center h-[400px] hover:scale-105 transition-transform duration-300">
                <img
                  src="/laptopimg.svg"
                  alt="PBX Dashboard"
                  className="w-[500px] h-full object-contain transition-all duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingPlans />
      <TestimonialsSection />
      <PbxFooter />

      {/* CSS for card animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
