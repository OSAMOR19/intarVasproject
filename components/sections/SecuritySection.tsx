"use client";

import React, { useState, useEffect, useRef } from "react";

interface SecuritySectionProps {
  title?: string;
  certificationImageSrc?: string;
  certificationImageAlt?: string;
}

const SecuritySection = ({
  title = "Built on a foundation of security and compliance.",
  certificationImageSrc = "/images/CertLogos.png",
  certificationImageAlt = "Security certifications"
}: SecuritySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
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
    <section ref={sectionRef} className="max-w-2xl mx-auto my-20 text-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/3 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
      }`}>
        <h3 className="font-inter text-[35px] md:text-[48px] text-center font-[800] max-w-md md:max-w-4xl mx-auto leading-[1.2] mb-[30px] transition-all duration-700 hover:scale-105">
          {title}
        </h3>
      </div>
      
      <div className={`transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      }`}>
        <img 
          src={certificationImageSrc} 
          alt={certificationImageAlt}
          className="mx-auto transition-all duration-300 hover:opacity-80"
        />
      </div>
    </section>
  );
};

export default SecuritySection;
