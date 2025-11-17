"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import foranimation1 from "@/assets/phoneforanimation.svg";
import foranimation2 from "@/assets/dashboardforanimation.svg";
import heroImage from "@/assets/Heroimage.svg";




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
  imageSrc = heroImage,
  imageAlt = "Telecom analytics and smartphone dashboard",
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showPhoneAnimation, setShowPhoneAnimation] = useState(false);
  const [showDashboardAnimation, setShowDashboardAnimation] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const whiteoutActive = showPhoneAnimation || showDashboardAnimation;

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
    // setShowDashboardAnimation(true);
    // setTimeout(() => setShowPhoneAnimation(true), 300);
  };

  const handleImageLeave = () => {
    // setShowPhoneAnimation(false);
    // setShowDashboardAnimation(false);
  };

  return (
    <section
      ref={sectionRef}
      className="max-h-screen pt-18 lg:pt-16 overflow-hidden relative "
      style={{
        backgroundImage: "url(/images/herosectionbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Whiteout overlay to hide background during animations */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-500 pointer-events-none z-10 ${
          whiteoutActive ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Static Background Elements - No Animation */}

      <div
        className={` grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 min-h-screen pt-12 md:py-0 xl:pt-16 transition-opacity duration-500 ${
          showPhoneAnimation || showDashboardAnimation
            ? "opacity-0"
            : "opacity-100"
        }`}
      >
        {/* Content */}
        <div className="flex flex-col pt-10 md:pt-24 lg:pt-36 2xl:pt-56 justify-start space-y-4 px-4 md:px-0 md:pl-[40px] 2xl:pl-[170px]">
          <h1
            className={`2xl:max-w-2xl lg:max-w-xl md:max-w-lg text-[32px] sm:text-[40px] md:text-[44px] xl:text-[52px] 2xl:text-[64px] font-inter text-white font-[800] tracking-tight leading-[1.2] transition-all duration-1000 ${
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
          className="px-4 md:px-0 cursor-pointer flex justify-end items-end"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="2xl:w-[60vw] object-contain "
            loading="eager"
          />
        </div>
      </div>

      {/* Removed blue backdrop for dashboard */}

      {/* Animated Images - Dashboard (Behind) - Covers only hero section from bottom-right */}
      <div
        className={`absolute inset-0 p-8 md:p-12 lg:p-16 pointer-events-none transition-all duration-1000 ease-out z-20 ${
          showDashboardAnimation
            ? "translate-x-0 translate-y-0 opacity-100"
            : "translate-x-[50%] translate-y-[50%] opacity-0"
        }`}
        style={{
          transformOrigin: "bottom right",
        }}
      >
        <img
          src={foranimation2}
          alt="Dashboard Animation"
          className={`w-full h-full object-cover rounded-2xl transition-all duration-500 ${
            showPhoneAnimation ? "scale-70 opacity-75" : "scale-100 opacity-100"
          }`}
        />
      </div>

      {/* Removed blue backdrop for phone */}

      {/* Animated Images - Phone (On Top) - Positioned left on desktop, center on mobile */}
      <div
        className={`absolute inset-0 p-8 md:p-12 lg:p-16 pointer-events-none transition-all duration-1000 ease-out z-30 flex items-center justify-center lg:justify-start ${
          showPhoneAnimation
            ? "translate-x-0 translate-y-0 opacity-100"
            : "translate-x-[50%] translate-y-[50%] opacity-0"
        }`}
        style={{
          transformOrigin: "bottom right",
        }}
      >
        <img
          src={foranimation1}
          alt="Phone Animation"
          className={`h-full w-auto object-contain transition-all duration-500 drop-shadow-xl ${
            showPhoneAnimation
              ? "max-w-[98%] lg:max-w-[78%]"
              : "max-w-[70%] lg:max-w-[60%]"
          }`}
        />
      </div>
    </section>
  );
};

export default HeroSection;
