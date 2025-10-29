import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import foranimation1 from "@/assets/phoneforanimation.svg";
import foranimation2 from "@/assets/dashboardforanimation.svg";
import foranimation3 from "@/assets/businesscard.svg";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
}

const HeroSection = ({
  title = "Smart Telecom Solutions for Modern Businesses",
  subtitle = "Special numbers, contact centre PBX, and bulk messaging — all tailored for fast‑growing Nigerian brands.",
  primaryButtonText = "Request Demo",
  secondaryButtonText = "Explore Services",
  onPrimaryClick,
  onSecondaryClick,
  imageSrc = "images/Illustration.png",
  imageAlt = "Telecom analytics and smartphone dashboard",
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger animations
            setTimeout(() => setShowTitle(true), 200);
            setTimeout(() => setShowSubtitle(true), 400);
            setTimeout(() => setShowButtons(true), 600);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="auto pt-18 lg:pt-16 lg:h-[95vh] overflow-hidden"
      style={{
        backgroundImage: "url(/images/herosectionbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Static Background Elements - No Animation */}

      <div className="container h-full mx-auto grid gap-10 px-4 lg:px-0 pt-20 lg:pt-0 lg:py-4 lg:grid-cols-2 lg:items-center relative z-10">
        {/* Content */}
        <div className="flex flex-col items-start pt-20 lg:pt-0 justify-center space-y-8 lg:pl-4">
          <h1
            className={`max-w-lg text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-inter text-white font-[800] tracking-tight transition-all duration-1000 ${
              showTitle
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-4 text-[18px] text-[#C2C6CE] max-w-lg text-muted-foreground transition-all duration-1000 ${
              showSubtitle
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            {subtitle}
          </p>
          <div
            className={`mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:max-w-none transition-all duration-1000 ${
              showButtons
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <Button
              variant="outline"
              size="default"
              onClick={onSecondaryClick}
              className="bg-white text-[#001933] border-[#001933] hover:bg-gray-50 w-full sm:w-auto sm:px-6"
            >
              <Link to={"/about#services-showcase-section"}>
                {secondaryButtonText}
              </Link>
            </Button>
            <Button
              variant="hero"
              size="default"
              onClick={onPrimaryClick}
              className="w-full sm:w-auto sm:px-6"
            >
              <Link to="/contact">{primaryButtonText}</Link>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="flex items-end justify-end ">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="md:absolute md:bottom-0 md:right-0 md:w-[585px] md:translate-x-0 rounded-xl   bg-bottom"
            style={{ right: "-122px", height: "100%" }}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
