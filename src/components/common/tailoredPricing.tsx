import React from "react";

const CustomQuoteBanner = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-12 shadow-xl overflow-hidden">
          {/* Corner Decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-white opacity-50"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-white opacity-50"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-white opacity-50"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-white opacity-50"></div>

          {/* Content */}
          <div className="relative text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                Priced fluently
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[24px] font-inter font-[800] lg:text-[38px] text-white mb-4">
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
