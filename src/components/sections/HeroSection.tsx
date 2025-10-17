import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
}

const HeroSection = ({
  title = "Smart Telecom Solutions for Modern Businesses",
  subtitle = "Special numbers, contact centre PBX, and bulk messaging — all tailored for fast‑growing Nigerian brands.",
  primaryButtonText = "Request Demo",
  secondaryButtonText = "Explore Services",
  onPrimaryClick,
  onSecondaryClick,
  imageSrc = "images/Illustration.png",
  imageAlt = "Telecom analytics and smartphone dashboard"
}: HeroSectionProps) => {

  return (
    <section className="auto pt-18 lg:pt-16 lg:h-[95vh] overflow-hidden" style={{ backgroundImage: 'url(/images/herosectionbg.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Static Background Elements - No Animation */}
      

      <div className="container h-full mx-auto grid gap-10 px-4 lg:px-0 pt-20 lg:pt-0 lg:py-4 lg:grid-cols-2 lg:items-center relative z-10">
        {/* Content */}
        <div className="flex flex-col items-start pt-20 lg:pt-0 justify-center space-y-8 lg:pl-4">
          <h1 className="max-w-lg text-[48px] sm:text-[56px] lg:text-[54px] font-inter text-white font-[800] tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-[18px] text-[#C2C6CE] max-w-lg text-muted-foreground">
            {subtitle}
          </p>
           <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md w-full sm:w-auto">
             <Button 
               variant="outline" 
               size="default" 
               onClick={onSecondaryClick} 
               className="bg-white text-[#001933] border-[#001933] hover:bg-gray-50 w-full sm:flex-none"
             >
               {secondaryButtonText}
             </Button>
             <Button 
               variant="hero" 
               size="default" 
               onClick={onPrimaryClick}
               className="w-full sm:flex-none"
             >
               {primaryButtonText}
             </Button>
           </div>
        </div>

        {/* Image */}
        <div className="flex items-end justify-end md:justify-end h-full">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="md:absolute md:top-12 md:right-0 md:w-[585px] md:translate-x-0 rounded-xl object-contain"
              style={{ right: '-122px', height: '100%' }}
              loading="eager"
            />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

