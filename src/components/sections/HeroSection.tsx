import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import foranimation1 from "@/assets/phoneforanimation.svg";
import foranimation2 from "@/assets/dashboardforanimation.svg";


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
  subtitle = "Special Numbers, Call Centres, Bulk Messaging & Digital Solutions all tailored for modern Nigerian brands.",
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
  const [showPhoneAnimation, setShowPhoneAnimation] = useState(false);
  const [showDashboardAnimation, setShowDashboardAnimation] = useState(false);
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

  // Handle hover trigger for animations
  const handleImageHover = () => {
    setShowDashboardAnimation(true);
    setTimeout(() => setShowPhoneAnimation(true), 300);
  };

  const handleImageLeave = () => {
    setShowPhoneAnimation(false);
    setShowDashboardAnimation(false);
  };

  return (
    <section
      ref={sectionRef}
      className="max-h-screen pt-18 lg:pt-16 overflow-hidden relative"
      style={{
        backgroundImage: "url(/images/herosectionbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Static Background Elements - No Animation */}

      <div 
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 lg:py-0 transition-opacity duration-500 ${
          showPhoneAnimation || showDashboardAnimation ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Content */}
        <div className="flex flex-col pt-20 lg:pt-0 justify-center space-y-4 px-4 md:px-0 lg:pl-[150px]">
          <h1
            className={`max-w-lg text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-inter text-white font-[800] tracking-tight leading-[1.2] transition-all duration-1000 ${
              showTitle
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            {title}
          </h1>
          <p
            className={` text-[20px] text-[#C2C6CE] max-w-xl transition-all duration-1000 ${
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
        <div 
          className="px-4 md:px-0 cursor-pointer"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        >
          <img src={imageSrc} alt={imageAlt} className="" loading="eager" />
        </div>
      </div>

      {/* Blue Background Backdrop for Dashboard */}
      <div
        className={`absolute inset-0 m-8 md:m-12 lg:m-16 rounded-3xl pointer-events-none transition-all duration-1000 ease-out z-20 ${
          showDashboardAnimation
            ? "translate-x-0 translate-y-0 opacity-100"
            : "translate-x-[50%] translate-y-[50%] opacity-0"
        }`}
        style={{
          transformOrigin: "bottom right",
          backgroundColor: "rgba(0, 100, 203, 0.15)"
        }}
      />

      {/* Animated Images - Dashboard (Behind) - Covers only hero section from bottom-right */}
      <div
        className={`absolute inset-0 p-8 md:p-12 lg:p-16 pointer-events-none transition-all duration-1000 ease-out z-20 ${
          showDashboardAnimation
            ? "translate-x-0 translate-y-0 opacity-100"
            : "translate-x-[50%] translate-y-[50%] opacity-0"
        }`}
        style={{
          transformOrigin: "bottom right"
        }}
      >
        <img
          src={foranimation2}
          alt="Dashboard Animation"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Blue Background Backdrop for Phone */}
      <div
        className={`absolute inset-0 m-8 md:m-12 lg:m-16 rounded-3xl pointer-events-none transition-all duration-1000 ease-out z-30 ${
          showPhoneAnimation
            ? "translate-x-0 translate-y-0 opacity-100"
            : "translate-x-[50%] translate-y-[50%] opacity-0"
        }`}
        style={{
          transformOrigin: "bottom right",
          backgroundColor: "rgba(0, 100, 203, 0.15)"
        }}
      />

      {/* Animated Images - Phone (On Top) - Positioned left on desktop, center on mobile */}
      <div
        className={`absolute inset-0 p-8 md:p-12 lg:p-16 pointer-events-none transition-all duration-1000 ease-out z-30 flex items-center justify-center lg:justify-start ${
          showPhoneAnimation
            ? "translate-x-0 translate-y-0 opacity-100"
            : "translate-x-[50%] translate-y-[50%] opacity-0"
        }`}
        style={{
          transformOrigin: "bottom right"
        }}
      >
        <img
          src={foranimation1}
          alt="Phone Animation"
          className="h-full w-auto object-contain max-w-[50%] lg:max-w-[40%]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
