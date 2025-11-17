"use client";

import React, { useEffect, useState } from "react";

const VisionMissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger the vision and mission animations
            setTimeout(() => setIsVisionVisible(true), 300);
            setTimeout(() => setIsMissionVisible(true), 600);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("vision-mission-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  return (
    <section id="vision-mission-section" className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${
            isVisionVisible 
              ? "opacity-100 transform translate-x-0" 
              : "opacity-0 transform -translate-x-20"
          }`}>
            <div className="mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                Our Vision
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-blue-400">Our vision</span> is to make
              business
              <br />
              communication seamless, scalable,
              <br />
              and reliable across Nigeria
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Intarvas envisions a future of innovative communication, striving
              for distinction and personalized connections. Rooted in wisdom,
              our commitment transforms challenges into opportunities, aiming to
              be a beacon of connectivity and a catalyst for a connected
              tomorrow.
            </p>
          </div>

          {/* Right - Image */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 ${
            isVisionVisible 
              ? "opacity-100 transform translate-x-0" 
              : "opacity-0 transform translate-x-20"
          }`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-blue-100 rounded-3xl opacity-50"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=700&fit=crop"
                  alt="Vision - Professional woman"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className={`transition-all duration-1000 ${
            isMissionVisible 
              ? "opacity-100 transform translate-x-0" 
              : "opacity-0 transform -translate-x-20"
          }`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-blue-100 rounded-3xl opacity-50"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                  alt="Mission - Team meeting"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className={`transition-all duration-1000 ${
            isMissionVisible 
              ? "opacity-100 transform translate-x-0" 
              : "opacity-0 transform translate-x-20"
          }`}>
            <div className="mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                Our Mission
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gray-400">Our mission</span> is to connect
              <br />
              businesses and customers with
              <br />
              reliable, scalable telecom solutions.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              As a premier provider of telecom and digital solutions, IntarVAS
              has spent years empowering businesses with exceptional
              telecommunications expertise. We're dedicated to delivering
              cutting-edge services that help companies thrive in the digital
              world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
