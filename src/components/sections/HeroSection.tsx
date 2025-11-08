import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "@/assets/Heroimage.svg";

gsap.registerPlugin(ScrollTrigger);

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

// Global flag to track if this is the first ever load
let isFirstPageLoad = true;

const HeroSection = ({
  title = "Smart Telecom Solutions for Modern Businesses",
  subtitle = "Special Numbers, Call Centres, Bulk Messaging & Digital Solutions all tailored for modern Nigerian brands.",
  primaryButtonText = "Request Demo",
  secondaryButtonText = "Explore Services",
  onPrimaryClick,
  onSecondaryClick,
  imageSrc = heroImage,
  imageAlt = "Telecom analytics and smartphone dashboard",
}: HeroSectionProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasPlayed = useRef(false);
  const canStartAnimation = useRef(!isFirstPageLoad);

  useEffect(() => {
    if (isFirstPageLoad) {
      const handleLoadingComplete = () => {
        canStartAnimation.current = true;
        isFirstPageLoad = false;
        setupAnimation();
      };

      window.addEventListener("logo-animation-complete", handleLoadingComplete);

      return () => {
        window.removeEventListener(
          "logo-animation-complete",
          handleLoadingComplete
        );
      };
    } else {
      setupAnimation();
    }
  }, []);

  const setupAnimation = () => {
    if (!canStartAnimation.current) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          buttonsRef.current,
          imageRef.current,
        ],
        { opacity: 0, visibility: "hidden" }
      );

      gsap.set(titleRef.current, { y: 30 });
      gsap.set(subtitleRef.current, { y: 20 });
      gsap.set(buttonsRef.current, { y: 20, scale: 0.8 });
      gsap.set(imageRef.current, { y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          onEnter: () => {
            if (!hasPlayed.current) {
              hasPlayed.current = true;
            }
            tl.play();
          },
          onEnterBack: () => tl.play(),
          onLeave: () => tl.reverse(),
          onLeaveBack: () => tl.reverse(),
        },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        visibility: "visible",
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      })
        .to(
          imageRef.current,
          {
            opacity: 1,
            visibility: "visible",
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            visibility: "visible",
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            visibility: "visible",
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );

      // Force play if already in view on load
      const checkIfInView = () => {
        if (!sectionRef.current || hasPlayed.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;

        if (isInView) {
          hasPlayed.current = true;
          ScrollTrigger.refresh();
          setTimeout(() => tl.play(), 100);
        }
      };

      const timer = setTimeout(checkIfInView, 100);
      window.addEventListener("load", checkIfInView);

      const scrollHandler = () => checkIfInView();
      window.addEventListener("scroll", scrollHandler);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("load", checkIfInView);
        window.removeEventListener("scroll", scrollHandler);
      };
    }, sectionRef);

    return () => ctx.revert();
  };

  return (
    <section
      ref={sectionRef}
      className="max-h-screen pt-18 lg:pt-16 overflow-hidden relative"
      style={{
        backgroundImage: "url(/images/herosectionbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 min-h-screen pt-12 md:py-0 xl:pt-16">
        {/* Content */}
        <div className="flex flex-col pt-10 md:pt-24 lg:pt-36 2xl:pt-56 justify-start space-y-4 px-4 md:px-0 md:pl-[40px] 2xl:pl-[170px]">
          <h1
            ref={titleRef}
            className="2xl:max-w-2xl lg:max-w-xl md:max-w-lg text-[32px] sm:text-[40px] md:text-[44px] xl:text-[52px] 2xl:text-[64px] font-inter text-white font-[800] tracking-tight leading-[1.2]"
          >
            {title}
          </h1>
          <p ref={subtitleRef} className="text-[20px] text-[#C2C6CE] max-w-xl">
            {subtitle}
          </p>
          <div
            ref={buttonsRef}
            className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="default"
              onClick={onSecondaryClick}
              className="bg-white text-[#001933] border-[#001933] hover:bg-gray-50 w-full sm:w-auto sm:px-6"
            >
              <Link to="/about#services-showcase-section">
                {secondaryButtonText}
              </Link>
            </Button>
            <Button
              variant="hero"
              size="default"
              onClick={onPrimaryClick}
              className="w-full sm:w-auto sm:px-6"
            >
              <Link to="/contact">{primaryButtonText}</Link>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div ref={imageRef} className="px-4 md:px-0 flex justify-end items-end">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="2xl:w-[60vw] object-contain"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
