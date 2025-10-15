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
    <section className="auto pt-18 md:pt-16 md:h-[95vh] overflow-hidden" style={{ backgroundImage: 'url(/images/herosectionbg.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Static Background Elements - No Animation */}
      

      <div className="container h-full mx-auto grid gap-10 px-4 md:px-0 pt-20 md:pt-0 md:py-4 md:grid-cols-2 md:items-center relative z-10">
        {/* Content */}
        <div className="flex flex-col items-start pt-20 md:pt-0 justify-center space-y-8 md:pl-4">
          <h1 className="max-w-lg text-[46px] font-inter text-white font-[800] tracking-tight md:text-[54px]">
            {title}
          </h1>
          <p className="mt-4 text-[18px] text-[#C2C6CE] max-w-lg text-muted-foreground">
            {subtitle}
          </p>
           <div className="mt-8 flex flex-row gap-3 max-w-md w-full sm:w-auto">
             <Button 
               variant="outline" 
               size="default" 
               onClick={onSecondaryClick} 
               className="bg-white text-[#001933] border-[#001933] hover:bg-gray-50 flex-1 sm:flex-none"
             >
               {secondaryButtonText}
             </Button>
             <Button 
               variant="hero" 
               size="default" 
               onClick={onPrimaryClick}
               className="flex-1 sm:flex-none"
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

