import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";

const BusinessCom = () => {
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
    <div ref={sectionRef} className="bg-[#0064CB] relative overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/BG.svg"
        alt="Business Communication"
      />

      <div className={`flex flex-col items-center text-center py-16 px-4 relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
      }`}>
        <h2 className={`font-inter text-[24px] md:text-[48px] text-white font-[700] max-w-md md:max-w-2xl mx-auto leading-[1.2] text-center pt-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          Ready to Transform Your Business Communication?
        </h2>
        <p className={`mt-4 text-white max-w-md text-center transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          Take the next step toward smarter, more reliable customer
          interactions.
        </p>

        <div className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <Button variant="outline" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <a href="https://wiki.ccaas.intarvas.com" target="_blank" rel="noopener noreferrer">Explore Services</a>
          </Button>
          <Button variant="hero" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <a href="https://api.ccaas.intarvas.com" target="_blank" rel="noopener noreferrer">Request Demo</a>
          </Button>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-4 transition-all duration-1000 delay-600 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
      }`}>
        <img
          className="w-full h-auto transition-all duration-500 hover:scale-105 hover:brightness-110"
          src="/images/CommDashboard.png"
          alt="Business Communication Illustration"
        />
      </div>
    </div>
  );
};

export default BusinessCom;
