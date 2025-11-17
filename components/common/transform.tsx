"use client";

import React, { useState, useEffect, useRef } from "react";

const Transform = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const targetValues = [18, 100, 29, 52];
  const labels = [
    "Increase in sales",
    "Compliance monitoring",
    "Increase in CSAT", 
    "Lower AHT"
  ];

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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;
      
      targetValues.forEach((target, index) => {
        let currentStep = 0;
        const increment = target / steps;
        
        const timer = setInterval(() => {
          currentStep++;
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(Math.round(increment * currentStep), target);
            return newCounts;
          });
          
          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, stepDuration);
      });
    }
  }, [isVisible]);
  return (
    <div ref={sectionRef} className="bg-black text-white py-20 px-4 relative ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-32">
        <p className="font-inter text-[38px] md:text-[38px] font-[500]  leading-[1.2] mb-[30px]">
          Transform your call centre.{" "}
          <span className="opacity-70">
            With IntarvAS, you can reduce escalations, improve business
            outcomes, and elevate the customer experience.
          </span>
        </p>
        <div className="flex flex-wrap gap-9 max-w-md">
          {targetValues.map((target, index) => (
            <span key={index} className="px-3 flex flex-col items-start border-l-4 border-white">
              <span className="font-inter text-[48px] font-[700]">
                {counts[index]}{index === 3 ? 's' : '%'}
              </span>
              <span className="font-inter text-[18px]">
                {labels[index]}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div>
        <img
          src="/images/TransformIllustration.png"
          alt="Transform your call center"
          className="absolute bottom-0 right-0 w-[300px] md:w-[400px] h-auto animate-pulse hover:scale-105 transition-all duration-1000"
          style={{
            animation: 'breathe 3s ease-in-out infinite'
          }}
        />
      </div>
    </div>
  );
};

export default Transform;
