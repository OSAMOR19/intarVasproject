import React, { useEffect, useRef, useState } from "react";
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
  const hero2Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasPlayed = useRef(false);
  const canStartAnimation = useRef(!isFirstPageLoad);
  const [allowScroll, setAllowScroll] = useState(false);

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

      if (hero2Ref.current && sectionRef.current) {
        let scrollStep = 0; 
        const maxSteps = 2; 
        let isAnimating = false;
        let lastScrollTime = 0;
        const scrollDelay = 600; 

        const handleWheel = (e: WheelEvent) => {
          if (!sectionRef.current || !hero2Ref.current) return;

          const rect = sectionRef.current.getBoundingClientRect();
          const isInSection =
            rect.top <= 0 && rect.bottom >= window.innerHeight;
          const now = Date.now();

          if (isInSection && e.deltaY > 0) {
            if (scrollStep < maxSteps) {
              e.preventDefault();

              if (!isAnimating && now - lastScrollTime > scrollDelay) {
                isAnimating = true;
                lastScrollTime = now;
                scrollStep++;

                const scaleValues = [1, 1.8, 2.5];
                const xValues = ["0%", "5%", "10%"];
                const yValues = ["0%", "-3%", "-5%"];
                const opacityValues = [1, 1, 1]; 

                gsap.to(hero2Ref.current, {
                  scale: scaleValues[scrollStep],
                  x: xValues[scrollStep],
                  y: yValues[scrollStep],
                  opacity: opacityValues[scrollStep],
                  duration: 0.6,
                  ease: "power2.out",
                  onComplete: () => {
                    isAnimating = false;
                    if (scrollStep >= maxSteps) {
                      setAllowScroll(true);
                    }
                  },
                });
              }
            }
          }

          if (isInSection && e.deltaY < 0 && scrollStep > 0) {
            if (scrollStep <= maxSteps) {
              e.preventDefault();

              if (!isAnimating && now - lastScrollTime > scrollDelay) {
                isAnimating = true;
                lastScrollTime = now;
                scrollStep--;
                setAllowScroll(false);

                const scaleValues = [1, 1.8, 2.5];
                const xValues = ["0%", "5%", "10%"];
                const yValues = ["0%", "-3%", "-5%"];
                const opacityValues = [1, 1, 1];

                gsap.to(hero2Ref.current, {
                  scale: scaleValues[scrollStep],
                  x: xValues[scrollStep],
                  y: yValues[scrollStep],
                  opacity: opacityValues[scrollStep],
                  duration: 0.6,
                  ease: "power2.out",
                  onComplete: () => {
                    isAnimating = false;
                  },
                });
              }
            }
          }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
          window.removeEventListener("wheel", handleWheel);
        };
      }

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
      className="lg:max-h-screen pt-18 lg:pt-16 overflow-hidden relative"
      style={{
        backgroundImage: "url(/images/herosectionbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between flex-col lg:flex-row gap-6 lg:gap-0 min-h-screen pt-12 md:py-0 xl:pt-16">
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

        {/* mobile image */}
        <div
          ref={imageRef}
          className="px-4 md:px-0 flex justify-end items-end lg:hidden"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="2xl:w-[60vw] object-contain"
            loading="eager"
          />
        </div>

        {/* desktop Image */}
        <div
          ref={imageRef}
          className="px-4 md:px-0 hidden lg:flex lg:justify-end lg:items-end relative"
        >
          <div className="">
            <img
              src="/images/hero-1.png"
              alt="logo"
              className="2xl:w-[60vw] object-contain z-40 -mb-20"
              loading="eager"
            />
          </div>

          {/* Hero-2 with expansion animation */}
          <div
            ref={hero2Ref}
            className="z-40 w-[500px] h-[40%] bottom-0 lg:absolute -right-20 origin-center"
          >
            <img
              src="/images/hero-2.png"
              alt="logo"
              className="object-contain w-full h-full"
              loading="eager"
            />
          </div>

          <div className="">
            <img
              src="/images/hero-1.png"
              alt="logo"
              className="2xl:w-[60vw] object-contain -mb-20"
              loading="eager"
            />
          </div>
          <div className="z-20 lg:absolute -left-2 bottom-72">
            <img
              src="/images/hero-3.png"
              alt="logo"
              className="2xl:w-[60vw] object-contain"
              loading="eager"
            />
          </div>
          <img
            src="/images/hero-4.png"
            alt="logo"
            className="2xl:w-[60vw] object-contain z-20 lg:absolute bottom-32"
            loading="eager"
          />
          <div className="w-[600px] h-[60%] object-contain lg:absolute bottom-0 right-0">
            <img
              src="/images/blue-1.png"
              alt="logo"
              className=""
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
