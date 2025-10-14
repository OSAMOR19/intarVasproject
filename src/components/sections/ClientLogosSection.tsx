import React from "react";

interface ClientLogosSectionProps {
  title?: string;
}

const ClientLogosSection = ({
  title = "Innovators worldwide trust us"
}: ClientLogosSectionProps) => {
  // Array of client logos - you can replace these with actual logo paths
  const logos = [
    { src: "/images/innovators.png", alt: "Client Logo 1" },
    { src: "/images/innovators.png", alt: "Client Logo 2" },
    { src: "/images/innovators.png", alt: "Client Logo 3" },
    { src: "/images/innovators.png", alt: "Client Logo 4" },
    { src: "/images/innovators.png", alt: "Client Logo 5" },
    { src: "/images/innovators.png", alt: "Client Logo 6" },
    { src: "/images/innovators.png", alt: "Client Logo 7" },
    { src: "/images/innovators.png", alt: "Client Logo 8" },
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
                  className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
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
                  className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
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

