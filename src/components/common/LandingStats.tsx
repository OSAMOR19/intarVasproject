import React from "react";
import { Button } from "@/components/ui/button";

const ProvenResultsSection = () => {
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
        "Large-scale communications with fast, secure, and reliable messaging solutions",
    },
    {
      value: "10+",
      title: "Years Experience",
      description:
        "Proven success in delivering scalable and innovative communication services across Nigeria.",
      hasUnderline: true,
    },
    {
      value: "500+",
      title: "Businesses served",
      description:
        "We empower hundreds of Nigerian businesses and government agencies with reliable telecom solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-float delay-2000"></div>
      </div>

      <div className="w-full max-w-7xl bg-[#1E1E1E] rounded-3xl shadow-2xl p-12 lg:p-16 relative z-10 animate-zoom-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Main Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="animate-bounce-in">
              <button className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-600/30 transition-colors">
                Why Us?
              </button>
            </div>

            <div className="animate-fade-in-up delay-300">
              <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                Proven Results.
                <br />
                Measurable Impact
              </h1>
            </div>

            <div className="animate-fade-in-up delay-500">
              <p className="text-gray-300 text-lg leading-relaxed">
                Trusted by businesses and government agencies across Nigeria.
              </p>
            </div>

            <div className="animate-fade-in-up delay-700">
              <Button variant="hero" className="px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Side - Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-fade-in-right">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="space-y-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div 
                  className="text-5xl lg:text-6xl font-bold"
                  style={{
                    background: 'linear-gradient(90deg, #208DFE 0%, #FFF 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold text-gray-200">
                  {stat.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
