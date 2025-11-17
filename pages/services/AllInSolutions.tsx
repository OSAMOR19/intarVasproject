"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AllInSolutionCard from "@/components/card/AllInSolution";
import Transform from "@/components/common/transform";
import BusinessCom from "@/components/common/BusinessCom";
import { Testimonials as TestimonialsSection } from "@/components/sections";
import AllInOneCTA from "@/components/common/AllInCTA";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AllInSolutions() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [hasAnimatedDescription, setHasAnimatedDescription] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const allInSolutionData = [
    {
      icon: "/icon/CRM.svg",
      title: "Smart CRM",
      name: "crm",
      description:
        "Personalize every customer interaction with a smart, unified CRM that keeps your history organized.",
      image: "/images/image1.png",
    },
    {
      icon: "/icon/tick.svg",
      title: "Security & Compliance",
      name: "security",
      description:
        "We use enterprise-grade encryption, guarantee 99.9% uptime, and are fully compliant with telecom standards.",
      image: "/images/image2.png",
    },
    {
      icon: "/icon/ticket.svg",
      title: "Ticketing & Automation",
      name: "ticketing",
      description:
        "Automate repetitive tasks and streamline your support process with our advanced ticketing system.",
      image: "/images/ticketingimg.svg",
    },
    {
      icon: "/icon/headset.svg",
      title: "Omnichannel Support",
      name: "omnichannel",
      description:
        "Provide seamless support across voice, chat, email, and social media from a single platform.",
      image: "/images/omniimg.svg",
    },
  ];

  const descriptionText =
    "Nigerian  businesses and government agencies need simplicity and speed. Our CRM solution centralizes customer communication, so your team saves time, improves response rates, and never loses track of a customer.";
  const descriptionWords = descriptionText.split(" ");

  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const stickyLeftRef = useRef<HTMLDivElement>(null);
  const scrollingRightRef = useRef<HTMLDivElement>(null);

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
    // Hero section animation
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

    // Description section animation
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

    // Features section animation
    const featuresObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFeaturesVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (featuresRef.current) {
      featuresObserver.observe(featuresRef.current);
    }

    // Scroll snapping logic for cards
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const updateActiveCard = () => {
        const scrollTop = scrollContainer.scrollTop;
        const cardHeight = scrollContainer.scrollHeight / 2; // 2 cards
        const newActiveCard = Math.round(scrollTop / cardHeight);
        setActiveCard(Math.min(newActiveCard, 1)); // Max 1 since we have 2 cards (0-indexed)
      };

      scrollContainer.addEventListener("scroll", updateActiveCard);
      updateActiveCard(); // Initial call

      return () => {
        scrollContainer.removeEventListener("scroll", updateActiveCard);
        if (heroRef.current) heroObserver.unobserve(heroRef.current);
        if (imageRef.current) imageObserver.unobserve(imageRef.current);
        if (descriptionRef.current)
          descriptionObserver.unobserve(descriptionRef.current);
        if (featuresRef.current)
          featuresObserver.unobserve(featuresRef.current);
      };
    }

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
      if (descriptionRef.current)
        descriptionObserver.unobserve(descriptionRef.current);
      if (featuresRef.current) featuresObserver.unobserve(featuresRef.current);
    };
  }, [hasAnimatedDescription]);

  // GSAP ScrollTrigger for sticky left column
  useEffect(() => {
    if (!featuresRef.current || !stickyLeftRef.current || !scrollingRightRef.current) return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id === "features-sticky") {
        trigger.kill();
      }
    });

    // Create the pin effect
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: "features-sticky",
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
        if (trigger.vars.id === "features-sticky") {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="bg-background pt-32 pb-12 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isHeroVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <h1 className="text-4xl font-inter font-semibold tracking-tight md:text-[64px] mb-3">
              All in one solution
            </h1>
            <p className="mx-auto font-inter mt-4 max-w-xl text-lg text-muted-foreground">
              Our All-in-One CRM & Omnichannel Suite helps you manage voice,
              chat, email, and social from a single, powerful platform.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  Contact Us
                </Button>
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
            src={"/images/allinsoluheroimg.png"}
            alt="Bulk messaging platform with colorful message illustrations"
            className="w-full rounded-[32px] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Description Section */}
      <section
        ref={descriptionRef}
        id="description-section"
        className="bg-muted/30 py-36 relative overflow-hidden"
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
            <p className="mx-auto font-inter text-[38px] font-[600] max-w-4xl text-center leading-[1.2] hover:scale-105 transition-all duration-500 cursor-default">
              {descriptionWords.map((word, index) => {
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
                    {word}
                    {index < descriptionWords.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section ref={featuresRef} className="bg-[#F6F6F6] pt-20 pb-32 relative">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 min-h-[600px] px-4">
          {/* LEFT STICKY */}
          <div
            ref={stickyLeftRef}
            className={`max-w-lg h-fit transition-opacity duration-700`}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                Features
              </span>
            </div>
            <h3 className="font-inter text-[38px] font-[600] leading-[1.2]">
              Simplifying personalized <br /> conversations.
            </h3>
            <p className="text-[#858D9D] mb-3 mt-4">
              Drive business results with our meaningful customer conversations.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button size="lg" className="hover:scale-105 transition-transform duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div ref={scrollingRightRef} className="flex flex-col gap-10">
            {allInSolutionData.map((item, index) => (
              <div 
                key={item.name} 
                className="flex items-center justify-center"
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out forwards ${index * 0.1}s`
                }}
              >
                <AllInSolutionCard
                  icon={<img src={item.icon} alt={item.title} />}
                  title={item.title}
                  description={item.description}
                  img={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Transform />
      <AllInOneCTA />
      <TestimonialsSection />
      <BusinessCom 
        dashboardImage="/images/allinonedashboard.svg" 
        backgroundFrame="/images/bgframe.svg"
      />

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
