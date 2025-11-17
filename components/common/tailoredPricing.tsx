"use client";

import React from "react";

const CustomQuoteBanner = () => {
  return (
    <section className="bg-gray-100 py-28 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#0064CB]/95 rounded-[30px]  shadow-xl overflow-hidden">
          <img
            className="absolute bg-transparent w-full h-full object-fill"
            src="/images/TestingIllustration.svg"
            alt="illustration of business people discussing pricing options"
          />
          {/* Content */}
          <div className="relative p-12 text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#E5F2FF] backdrop-blur-sm text-[#007DFE] rounded-full text-sm font-medium border border-[#C6E2FF]">
                Tailored Pricing
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[24px] font-inter font-[900] lg:text-[38px] text-white mb-4 leading-[1.2]">
              Every business is
              <br />
              different
            </h2>

            {/* Subtitle */}
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get a custom quote based on your call volume and preferred
              features
            </p>

            {/* CTA Button */}
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomQuoteBanner;
