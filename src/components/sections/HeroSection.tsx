import { Button } from "@/components/ui/button";
import herobg from "@/assets/herosectionbg.svg"

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
    <section className="relative pt-32 md:h-[100vh] overflow-hidden" style={{ backgroundImage: 'url(/images/herosectionbg.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container h-full mx-auto grid gap-10 px-4 md:py-20 md:grid-cols-2 md:items-center relative z-10">
        {/* Content */}
        <div className="flex flex-col items-start justify-center space-y-6">
          <h1 className="max-w-lg text-[32px] font-inter text-white font-[800] tracking-tight md:text-[48px] animate-fade-in-up">
            {title}
          </h1>
          <p className="mt-4 text-[18px] text-[#C2C6CE] max-w-lg text-muted-foreground animate-fade-in-up delay-300">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md animate-fade-in-up delay-500">
            <Button 
              variant="outline" 
              size="default" 
              onClick={onSecondaryClick} 
              className="bg-white text-[#001933] border-[#001933] hover:bg-gray-50"
            >
              {secondaryButtonText}
            </Button>
            <Button 
              variant="hero" 
              size="default" 
              onClick={onPrimaryClick}
            >
              {primaryButtonText}
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center md:justify-end">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="md:absolute bottom-0 right-0 mx-auto md:w-[500px] rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

