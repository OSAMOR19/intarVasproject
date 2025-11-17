"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const MessagingPlatformSection = () => {
  const [activeFeature, setActiveFeature] = useState(3);

  const features = [
    {
      title: "Bulk Campaigns",
      description:
        "Reach thousands (or millions) with marketing messages and promotions in a few clicks.",
      imgSrc: "/images/bulk1.png",
      text: "Flash offer! Get 18% off on items, today only. shop now.",
      overlayPosition: { bottom: "25%", right: "10%", transform: "none" },
      mobilePosition: { bottom: "20%", right: "8%", transform: "none" },
    },
    {
      title: "OTP Messaging",
      description:
        "Send one-time passwords, verification codes and alerts instantly with high deliverability.",
      imgSrc: "/images/bulk2.png",
      text: "Your login code is 452817. Do not share this code with anyone",
      overlayPosition: { bottom: "28%", right: "12%", transform: "none" },
      mobilePosition: { bottom: "22%", right: "10%", transform: "none" },
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track message delivery, failure diagnostics and campaign performance in real time.",
      imgSrc: "/images/bulk3.png",
      text: "Connected: Contatces synced automatically ",
      overlayPosition: { bottom: "30%", right: "10%", transform: "none" },
      mobilePosition: { bottom: "25%", right: "8%", transform: "none" },
    },
    {
      title: "Compliance & Regulatory",
      description:
        "Fully compliant with NCC rules, spam filters and opt-in/out policies.",
      imgSrc: "/images/bulk4.png",
      text: "This message is fully DND-compliant and follows NCC regulations",
      overlayPosition: { bottom: "26%", right: "10%", transform: "none" },
      mobilePosition: { bottom: "21%", right: "8%", transform: "none" },
    },
    {
      title: "API & Integration",
      description:
        "Easily integrate messaging into your apps for automation and scheduling.",
      imgSrc: "/images/bulk5.png",
      text: "Connect to us via API, send messages auto-trigger when leads are updated",
      overlayPosition: { bottom: "29%", right: "11%", transform: "none" },
      mobilePosition: { bottom: "23%", right: "9%", transform: "none" },
    },
    {
      title: "Cost Efficiency",
      description:
        "Competitive pricing for large volumes, with scalable infrastructure to handle growth.",
      imgSrc: "/images/bulk6.png",
      text: "Save up to 35% on messaging costs with optimized delivery routes",
      overlayPosition: { bottom: "27%", right: "10%", transform: "none" },
      mobilePosition: { bottom: "22%", right: "8%", transform: "none" },
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen py-16 px-8">
      <div className="max-w-[85rem] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-[38px] font-light leading-tight max-w-full ">
            <span className="opacity-50">
              Our platform is designed to help organizations
            </span>
            <br />
            <span className="">
              connect with thousands of people at once, while
            </span>
            <br />
            <span className="">
              ensuring every message is reliable and trackable.
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                      : "bg-[#14161B] hover:bg-gray-900/50 border-l-2 border-transparent"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-[12px] md:text-[16px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                {/* Mobile Image - Shows below each feature when active */}
                <div className="lg:hidden mt-4 relative">
                  <div
                    className={`rounded-3xl shadow-2xl transition-all duration-300 ${
                      activeFeature === index
                        ? "opacity-100 max-h-[500px] transform translate-y-0"
                        : "opacity-0 max-h-0 transform -translate-y-4 pointer-events-none"
                    }`}
                  >
                    <img
                      src={feature.imgSrc}
                      alt={feature.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* Compliance Badge Overlay for Mobile - Positioned on phone */}
                  {activeFeature === index && (
                    <div 
                      className="absolute bg-gradient-to-br from-[#FFFFFF00]/0 to-[#FFFFFF40]/25 p-1.5 rounded-2xl border-2 z-10"
                      style={{
                        bottom: feature.mobilePosition.bottom,
                        right: feature.mobilePosition.right,
                        transform: feature.mobilePosition.transform,
                        width: "auto",
                        maxWidth: "85%",
                      }}
                    >
                      <div className="bg-white rounded-xl py-1.5 px-2.5 shadow-lg flex items-center gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-800 text-[7px] font-inter font-semibold leading-normal break-words" style={{ wordSpacing: "0.5em", letterSpacing: "0.02em" }}>
                            {feature.text.split(" ").map((word, i, arr) => (
                              <React.Fragment key={i}>
                                {word}
                                {i < arr.length - 1 && <span style={{ marginLeft: "0.5em" }} />}
                              </React.Fragment>
                            ))}
                          </p>
                        </div>
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                      </div>
                    </div>
                  )}
                  {/* Decorative Elements for Mobile */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image with Overlay (Desktop Only) */}
          <div className="hidden lg:block relative">
            <div className="rounded-3xl shadow-2xl">
              <img
                src={`${features[activeFeature].imgSrc}`}
                alt="Person using messaging platform"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Desktop Overlay - Positioned on phone in image */}
            <div 
              className="absolute bg-gradient-to-br from-[#FFFFFF00]/0 to-[#FFFFFF40]/25 p-1.5 md:p-3 rounded-2xl border-2 z-10"
              style={{
                bottom: features[activeFeature].overlayPosition.bottom,
                right: features[activeFeature].overlayPosition.right,
                transform: features[activeFeature].overlayPosition.transform,
                width: "auto",
                maxWidth: "none",
              }}
            >
              <div className="bg-white rounded-xl py-1.5 px-2.5 md:py-2 md:px-3 shadow-lg flex items-center gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-gray-800 text-[9px] md:text-xs font-inter font-semibold leading-normal break-words" style={{ wordSpacing: "0.5em", letterSpacing: "0.02em" }}>
                    {features[activeFeature].text.split(" ").map((word, i, arr) => (
                      <React.Fragment key={i}>
                        {word}
                        {i < arr.length - 1 && <span style={{ marginLeft: "0.5em" }} />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
              </div>
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

export default MessagingPlatformSection;
