"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import MessagingPlatformSection from "./messaging";

const MessagingPlatformSectionNumber = () => {
  const [activeFeature, setActiveFeature] = useState(2);

  const features = [
    {
      title: "Memorable Numbers",
      description:
        "Make it easy for customers to remember your business. With our numbers, your brand stays top of mind and instantly recognizable.",
      imgSrc: "/images/number01.png",
    },
    {
      title: "Professional Image",
      description:
        "Project credibility and trust with numbers associated with established organizations, benefit from perception of professionalism",
      imgSrc: "/images/number02.png",
    },
    {
      title: "Flexible Management",
      description:
        "Route calls to different departments, teams or location using one central number. Ensure every customer reaches the right person",
      imgSrc: "/images/number03.png",
    },
    {
      title: "Nationwide Accessibility",
      description:
        "Give your customers a single number they can call from anywhere in Nigeria. No matter the region, you remain accessible and consistent.",
      imgSrc: "/images/number04.png",
    },
    {
      title: "Scalable",
      description:
        "As your business expands, our numbers scale with you. Supporting advanced telecom features.",
      imgSrc: "/images/number05.png",
    },
    {
      title: "Cost-effective Communication",
      description:
        "Customers call freely, with a low-cost option for businesses to manage engagement affordaly.",
      imgSrc: "/images/number06.png",
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen py-16 px-8">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-4xl font-inter lg:text-[38px] font-[500] leading-tight max-w-full ">
            <span className="text-[#D1D4DA]/50">
              Our number solution gives your business a <br />
              <span className="text-white ">
                <span className="text-[#D1D4DA]/50">professional edge.</span>{" "}
                Easy to remember, nationwide <br />
                accessibility, designed to strengthen connections.
              </span>
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className=" max-w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index}>
                <div
                  onMouseEnter={() => setActiveFeature(index)}
                  onClick={() => setActiveFeature(index)}
                  className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeFeature === index
                      ? "bg-gray-900 border-l-2 border-blue-500"
                      : "bg-[#14161B] border-l-2 border-transparent hover:bg-gray-900/50"
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-[14px] md:text-[16px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                {/* Mobile Image - Shows below each feature when active */}
                <div className="lg:hidden mt-4 relative">
                  <div
                    className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
                      activeFeature === index
                        ? "opacity-100 max-h-[500px] transform translate-y-0"
                        : "opacity-0 max-h-0 transform -translate-y-4 pointer-events-none"
                    }`}
                  >
                    <img
                      src={feature.imgSrc}
                      alt={feature.title}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  {/* Decorative Elements for Mobile */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image with Overlay (Desktop Only) */}
          <div className="hidden lg:block relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={`${features[activeFeature].imgSrc}`}
                alt="Person using messaging platform"
                className="w-full h-auto object-contain"
                loading="lazy"
                width={200}
                height={200}
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagingPlatformSectionNumber;
