import { Testimonials as TestimonialsSection, VisionStatement as VisionMissionSection, WeThriveComponent as ServicesShowcase } from "@/components/sections";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [showImages, setShowImages] = useState<number[]>([]);
  const [showTitleHighlight, setShowTitleHighlight] = useState(false);
  const [hasAnimatedHero, setHasAnimatedHero] = useState(false);
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false);
  const [hasAnimatedDescription, setHasAnimatedDescription] = useState(false);
  const [statsCounts, setStatsCounts] = useState({
    uptime: 0,
    messages: 0,
    years: 0,
    businesses: 0
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animation
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedHero) {
            setIsHeroVisible(true);
            setHasAnimatedHero(true);
            // Animate images one by one
            setTimeout(() => setShowImages([0]), 500);
            setTimeout(() => setShowImages([0, 1]), 1000);
            setTimeout(() => setShowImages([0, 1, 2]), 1500);
            // Animate title highlight
            setTimeout(() => setShowTitleHighlight(true), 2000);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    // Stats section animation with counting
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedStats) {
            setIsStatsVisible(true);
            setHasAnimatedStats(true);
            // Count up animations
            const countUp = (target: number, key: keyof typeof statsCounts, duration: number) => {
              const start = Date.now();
              const animate = () => {
                const elapsed = Date.now() - start;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(target * progress);
                setStatsCounts(prev => ({ ...prev, [key]: current }));
                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };
              animate();
            };
            
            setTimeout(() => countUp(99.9, 'uptime', 2000), 300);
            setTimeout(() => countUp(1000000, 'messages', 2000), 500);
            setTimeout(() => countUp(3, 'years', 1500), 700);
            setTimeout(() => countUp(50, 'businesses', 1500), 900);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    // Description section animation with simple fade-in
    const descriptionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedDescription) {
            setIsDescriptionVisible(true);
            setHasAnimatedDescription(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (descriptionRef.current) {
      descriptionObserver.observe(descriptionRef.current);
    }

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
      if (descriptionRef.current) descriptionObserver.unobserve(descriptionRef.current);
    };
  }, []);

  return (
    <main>
      <Helmet>
        <title>About IntarVAS Communications</title>
        <meta
          name="description"
          content="We build reliable telecom solutions: PBX, bulk messaging, and numbers for Nigerian businesses."
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <section ref={heroRef} className="relative bg-[#001933] pt-[50px] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 pt-20">
          <div className={`transition-all duration-1000 ${
            isHeroVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <h1 className="text-[32px] md:text-[64px] max-w-md md:max-w-xl mx-auto font-inter font-extrabold text-white text-center leading-[1.2] px-4 mb-2">
              About <span className={`bg-[#007DFE] rounded-md p-2 transition-all duration-1000 ${
                showTitleHighlight ? 'animate-pulse scale-110' : 'scale-100'
              }`}>IntarvAS</span>{" "}
              Communications
            </h1>
            <p className="text-white text-[16px] md:text-[18px] max-w-md mx-auto text-center">
              Reliable telecom solutions, built to power businesses and government
              agencies
            </p>
          </div>
        </div>
        <div className={`container grid grid-cols-2 gap-8 py-12 transition-all duration-1000 delay-300 ${
          isHeroVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <div className={`hover:scale-105 transition-all duration-1000 ${
            showImages.includes(0) ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
          }`}>
            <img
              src={"/images/left photo.png"}
              alt="Illustration showing a person working on a laptop with various telecom icons around them"
              className="w-auto object-contain"
            />
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div className={`hover:scale-105 transition-all duration-1000 ${
              showImages.includes(1) ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
            }`}>
              <img
                src={"/images/right_top.png"}
                alt="Illustration showing a person working on a laptop with various telecom icons around them"
                className="w-full"
              />
            </div>
            <div className={`hover:scale-105 transition-all duration-1000 ${
              showImages.includes(2) ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
            }`}>
              <img
                src={"/images/right_bottom.png"}
                alt="Illustration showing a person working on a laptop with various telecom icons around them"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={descriptionRef} className="bg-muted/30 py-20 md:py-36 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`transition-all duration-1000 ${
            isDescriptionVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <p className="mx-auto font-inter md:text-[38px] text-[#858D9D] max-w-md md:max-w-4xl font-[600] text-center text-lg leading-[1.2] text-muted-foreground">
              Based in Lagos, IntarvAS was built on a vision to simplify how Nigerian businesses communicate with their customers. Over the years, we've become trusted by enterprises, government agencies, and SMEs alike helping them build stronger connections with clients through reliable, scalable, and locally-tailored telecom solutions.
            </p>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="container flex flex-col md:flex-row gap-16 py-9 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className={`flex flex-col justify-evenly transition-all duration-1000 ${
          isStatsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <p className="text-[40px] inline-block bg-gradient-to-br to-[#0B59A9] from-[#53A2F2] bg-clip-text text-transparent font-inter font-[900]">
            {statsCounts.uptime}%
          </p>
          <h5 className="font-inter font-[700] text-[20px]">
            Uninterrupted connectivity
          </h5>
          <p>
            Our cloud-powered infrastructure ensures your communications run
            smoothly without interruptions.
          </p>
        </div>
        <div className={`transition-all duration-1000 delay-200 ${
          isStatsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <p className="text-[40px] inline-block bg-gradient-to-br to-[#0B59A9] from-[#53A2F2] bg-clip-text text-transparent font-inter font-[900]">
            {statsCounts.messages >= 1000000 ? '1M+' : `${Math.floor(statsCounts.messages / 1000)}K+`}
          </p>
          <h5 className="font-inter font-[700] text-[20px]">
            Messages delivered daily
          </h5>
          <p>
            Large-scale communications with fast, secure, and reliable messaging
            solutions
          </p>
        </div>
        <div className={`transition-all duration-1000 delay-400 ${
          isStatsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <p className="text-[40px] inline-block bg-gradient-to-br to-[#0B59A9] from-[#53A2F2] bg-clip-text text-transparent font-inter font-[900]">
            {statsCounts.years}+
          </p>
          <h5 className="font-inter font-[700] text-[20px]">
            Years Experience
          </h5>
          <p>
            Proven success in delivering scalable and innovative communication
            services across Nigeria.
          </p>
        </div>
        <div className={`transition-all duration-1000 delay-600 ${
          isStatsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <p className="text-[40px] inline-block bg-gradient-to-br to-[#0B59A9] from-[#53A2F2] bg-clip-text text-transparent font-inter font-[900]">
            {statsCounts.businesses}+
          </p>
          <h5 className="font-inter font-[700] text-[20px]">
            Businesses served
          </h5>
          <p>
            We empower hundreds of Nigerian businesses and government agencies
            with reliable telecom solutions.
          </p>
        </div>
      </section>

      <VisionMissionSection />

      <ServicesShowcase />

      <TestimonialsSection />
    </main>
  );
}
