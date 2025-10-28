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
        <div className="relative">
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-24 md:h-28 md:w-28 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-24 md:h-28 md:w-28 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
