import React from "react";

interface ClientLogosSectionProps {
  title?: string;
}

const ClientLogosSection = ({
  title = "Innovators worldwide trust us",
}: ClientLogosSectionProps) => {
  // Array of client logos - updated with actual client logos from images folder
  const logos = [
    { src: "/images/airtel.svg", alt: "Airtel" },
    { src: "/images/fcmb.svg", alt: "FCMB" },
    { src: "/images/mafab.svg", alt: "Mafab" },
    { src: "/images/lotus.svg", alt: "Lotus" },
    { src: "/images/aero-logo.svg", alt: "Aero" },
    { src: "/images/ICN.svg", alt: "ICN" },
    { src: "/images/Klayed.svg", alt: "Klayed" },
    { src: "/images/MiGO-Mobile-Black-Logo.svg", alt: "MiGO Mobile" },
    { src: "/images/Monieswitch.svg", alt: "Monieswitch" },
    { src: "/images/NMRC-Logo.svg", alt: "NMRC" },
    { src: "/images/Paycelar.svg", alt: "Paycelar" },
    { src: "/images/Renmoney.svg", alt: "Renmoney" },
    { src: "/images/The lux Auto.svg", alt: "The Lux Auto" },
    { src: "/images/WGC.svg", alt: "WGC" },
    { src: "/images/capital metriq.svg", alt: "Capital Metriq" },
    {
      src: "/images/christian association of nigeria.svg",
      alt: "Christian Association of Nigeria",
    },
    { src: "/images/logo-rapidbts.svg", alt: "RapidBTS" },
    { src: "/images/rubies-logo.svg", alt: "Rubies" },
    { src: "/images/sendtruly.svg", alt: "SendTruly" },
    { src: "/images/travna-logo.svg", alt: "Travna" },
    { src: "/images/xrnet-logo.svg", alt: "XRNet" },
    { src: "/images/Partner Logos/PNGs/SUNTRUST-LOGO.png", alt: "Suntrust" },
    { src: "/images/Partner Logos/PNGs/ruut_csm-.png", alt: "Ruut CSM" },
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
                className="group relative flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center w-[100px] h-[60px] md:w-[120px] md:h-[70px] cursor-pointer"
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
                className="group relative flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center w-[100px] h-[60px] md:w-[120px] md:h-[70px] cursor-pointer"
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
