"use client";

import React from "react";

interface ClientLogosSectionProps {
  title?: string;
}

const ClientLogosSection = ({
  title = "Innovators worldwide trust us",
}: ClientLogosSectionProps) => {
  // Array of client logos - updated with actual client logos from images folder
  const logos = [
    { src: "/images/airtel.svg", alt: "Airtel", large: false },
    { src: "/images/fcmb.svg", alt: "FCMB", large: false },
    { src: "/images/mafab.svg", alt: "Mafab", large: false },
    { src: "/images/lotus.svg", alt: "Lotus", large: false },
    { src: "/images/aero-logo.svg", alt: "Aero", large: false },
    { src: "/images/ICN.svg", alt: "ICN", large: true },
    { src: "/images/Klayed.svg", alt: "Klayed", large: false },
    { src: "/images/MiGO-Mobile-Black-Logo.svg", alt: "MiGO Mobile", large: false },
    { src: "/images/Monieswitch.svg", alt: "Monieswitch", large: false },
    { src: "/images/NMRC-Logo.svg", alt: "NMRC", large: false },
    { src: "/images/Paycelar.svg", alt: "Paycelar", large: false },
    { src: "/images/Renmoney.svg", alt: "Renmoney", large: false },
    { src: "/images/bazeuniversityhospitallogo.svg", alt: "Baze University Hospital", large: false },
    { src: "/images/globacomlogo.svg", alt: "Globacom", large: false },
    { src: "/images/TelkoMS.svg", alt: "TelkoMS", large: true },
    { src: "/images/WGC.svg", alt: "WGC", large: true },
    { src: "/images/capital metriq.svg", alt: "Capital Metriq", large: false },
    {
      src: "/images/christian association of nigeria.svg",
      alt: "Christian Association of Nigeria",
      large: false,
    },
    { src: "/images/logo-rapidbts.svg", alt: "RapidBTS", large: false },
    { src: "/images/rubies-logo.svg", alt: "Rubies", large: false },
    { src: "/images/sendtruly.svg", alt: "SendTruly", large: true },
    { src: "/images/travna-logo.svg", alt: "Travna", large: false },
    { src: "/images/xrnet-logo.svg", alt: "XRNet", large: true },
    { src: "/images/Partner Logos/PNGs/SUNTRUST-LOGO.png", alt: "Suntrust", large: false },
    { src: "/images/Partner Logos/PNGs/ruut_csm-.png", alt: "Ruut CSM", large: false },
  ];

  return (
    <section className="border-y bg-muted/30 py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground animate-fade-in-up">
          {title}
        </p>

        {/* Animated Scrolling Logos */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-logo-scroll will-change-transform">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className={`group relative flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center cursor-pointer ${
                  logo.large
                    ? "w-[140px] h-[80px] md:w-[160px] md:h-[90px]"
                    : "w-[100px] h-[60px] md:w-[120px] md:h-[70px]"
                }`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  loading="lazy"
                />
                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[100] shadow-lg">
                  {logo.alt}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className={`group relative flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center cursor-pointer ${
                  logo.large
                    ? "w-[140px] h-[80px] md:w-[160px] md:h-[90px]"
                    : "w-[100px] h-[60px] md:w-[120px] md:h-[70px]"
                }`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  loading="lazy"
                />
                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[100] shadow-lg">
                  {logo.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
