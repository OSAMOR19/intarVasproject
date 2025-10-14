import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const ProvenResultsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<(string | number)[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      value: "99.9%",
      title: "Uninterrupted connectivity",
      description:
        "Our cloud-powered infrastructure ensures your communications run smoothly without interruptions.",
    },
    {
      value: "1M+",
      title: "Messages delivered daily",
      description:
        "Our system allows us to be able to handle up to 1M + messages daily, Handling large-scale communications with fast, secure, and reliable messaging solutions",
    },
    {
      value: "3+",
      title: "Years Experience",
      description:
        "Proven success in delivering scalable and innovative communication services across Nigeria.",
      hasUnderline: true,
    },
    {
      value: "50+",
      title: "Businesses served",
      description:
        "We empower hundreds of Nigerian businesses and government agencies with reliable telecom solutions.",
    },
  ];

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

  // Animate numbers when visible
  useEffect(() => {
    if (isVisible) {
      const targets = [99.9, 1000000, 3, 50]; // Target values for animation
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4); // Easing function

        setAnimatedStats(
          targets.map((target) => {
            if (target === 99.9) {
              return parseFloat((target * easeOutQuart).toFixed(1));
            } else if (target === 1000000) {
              const animatedValue = target * easeOutQuart;
              if (animatedValue >= 1000000) return "1M+";
              if (animatedValue >= 1000) return `${Math.floor(animatedValue / 1000)}K+`;
              return `${Math.floor(animatedValue)}+`;
            } else {
              return Math.floor(target * easeOutQuart);
            }
          })
        );

        if (step >= steps) {
          clearInterval(timer);
          // Set final values
          setAnimatedStats([99.9, "1M+", 3, 50]);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Static Background Elements - No Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl bg-[#1E1E1E] rounded-3xl shadow-2xl p-12 lg:p-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Main Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-left opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
          }`}>
            <div className={`transition-all duration-700 delay-200 ${
              isVisible ? 'animate-bounce-in opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}>
              <button className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-600/30 transition-all duration-300 hover:scale-105">
                Why Us?
              </button>
            </div>

            <div className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}>
              <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                Proven Results.
                <br />
                Measurable Impact
              </h1>
            </div>

            <div className={`transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}>
              <p className="text-gray-300 text-lg leading-relaxed">
                Trusted by businesses and government agencies across Nigeria.
              </p>
            </div>

            <div className={`transition-all duration-700 delay-800 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}>
              <Button variant="hero" className="px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Side - Statistics Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-right opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
          }`}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`space-y-3 transition-all duration-700 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
              >
                <div 
                  className="text-5xl lg:text-6xl font-extrabold transition-all duration-500 hover:scale-110"
                  style={{
                    background: 'linear-gradient(90deg, #208DFE 0%, #FFF 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {isVisible ? (
                    <>
                      {index === 0 && `${animatedStats[0]}%`}
                      {index === 1 && animatedStats[1]}
                      {index === 2 && `${animatedStats[2]}+`}
                      {index === 3 && `${animatedStats[3]}+`}
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-200 transition-all duration-300 hover:text-white">
                  {stat.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed transition-all duration-300 hover:text-gray-300">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvenResultsSection;
