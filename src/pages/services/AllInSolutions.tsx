import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AllInSolutionCard from "@/components/card/AllInSolution";
import Transform from "@/components/common/transform";
import BusinessCom from "@/components/common/BusinessCom";
import { Testimonials as TestimonialsSection } from "@/components/sections";
import AllInOneCTA from "@/components/common/AllInCTA";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AllInSolutions() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [hasAnimatedDescription, setHasAnimatedDescription] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const allInSolutionData = [
    {
      icon: "/icon/CRM.svg",
      title: "Smart CRM",
      name: "crm",
      description:
        "Personalize every customer interaction with a smart, unified CRM that keeps your history organized.",
      image: "/images/image1.png",
    },
    {
      icon: "/icon/tick.svg",
      title: "Security & Compliance",
      name: "security",
      description:
        "We use enterprise-grade encryption, guarantee 99.9% uptime, and are fully compliant with telecom standards.",
      image: "/images/image2.png",
    },
    {
      icon: "/icon/ticket.svg",
      title: "Ticketing & Automation",
      name: "ticketing",
      description:
        "Automate repetitive tasks and streamline your support process with our advanced ticketing system.",
      image: "/images/ticketingimg.svg",
    },
    {
      icon: "/icon/headset.svg",
      title: "Omnichannel Support",
      name: "omnichannel",
      description:
        "Provide seamless support across voice, chat, email, and social media from a single platform.",
      image: "/images/omniimg.svg",
    },
  ];

  const descriptionText =
    "Nigerian businesses and government agencies need simplicity and speed. Our CRM solution centralizes customer communication, so your team saves time, improves response rates, and never loses track of a customer.";
  const descriptionWords = descriptionText.split(" ");

  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const pinnedWrapperRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Detect desktop (md and up)
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const descriptionSection = document.getElementById("description-section");
      if (!descriptionSection) return;

      const rect = descriptionSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startPoint = windowHeight * 0.5;
      const endPoint = -rect.height;

      const progress = Math.max(
        0,
        Math.min(1, (startPoint - rect.top) / (startPoint - endPoint))
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsHeroVisible(true),
      { threshold: 0.2 }
    );
    const imageObserver = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsImageVisible(true),
      { threshold: 0.2 }
    );
    const descriptionObserver = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !hasAnimatedDescription) {
          setIsDescriptionVisible(true);
          setHasAnimatedDescription(true);
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (descriptionRef.current)
      descriptionObserver.observe(descriptionRef.current);

    return () => {
      heroObserver.disconnect();
      imageObserver.disconnect();
      descriptionObserver.disconnect();
    };
  }, [hasAnimatedDescription]);

  useEffect(() => {
    if (!isDesktop || !pinnedWrapperRef.current || !cardsContainerRef.current)
      return;

    const wrapper = pinnedWrapperRef.current;
    const cardsContainer = cardsContainerRef.current;
    const firstCard = wrapper.querySelector(".flex.items-center");
    if (!firstCard) return;

    const cardHeight = firstCard.getBoundingClientRect().height;
    const gap = 40;
    const singleCardTravel = cardHeight + gap;
    const totalTravel = singleCardTravel * (allInSolutionData.length - 1);

    const pin = ScrollTrigger.create({
      trigger: wrapper,
      start: "top 120px",
      end: `+=${totalTravel}`,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
      onUpdate: (self) => {
        gsap.set(cardsContainer, { y: -self.progress * totalTravel });
      },
    });

    return () => pin.kill();
  }, [isDesktop, allInSolutionData.length]);

  return (
    <main>
      <Helmet>
        <title>All-in-One Solutions — IntarVAS</title>
        <meta
          name="description"
          content="Explore our comprehensive suite of telecom solutions."
        />
        <link rel="canonical" href="/services/all-in-solutions" />
      </Helmet>

      {/* Hero */}
      <section
        ref={heroRef}
        className="bg-background pt-32 pb-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isHeroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl font-inter font-semibold tracking-tight md:text-[64px] mb-3">
              All in one solution
            </h1>
            <p className="mx-auto font-inter mt-4 max-w-xl text-lg text-muted-foreground">
              Our All-in-One CRM & Omnichannel Suite helps you manage voice,
              chat, email, and social from a single platform.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section ref={imageRef} className="container mx-auto px-4 py-12">
        <div
          className={`transition-all duration-1000 ${
            isImageVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src="/images/allinsoluheroimg.png"
            alt="All-in-one platform"
            className="w-full rounded-[32px] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Description */}
      <section
        ref={descriptionRef}
        id="description-section"
        className="bg-muted/30 py-36 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isDescriptionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="mx-auto font-inter text-[38px] font-[600] max-w-4xl text-center leading-[1.2] cursor-default">
              {descriptionWords.map((word, index) => {
                const wordProgress = Math.max(
                  0,
                  Math.min(
                    1,
                    scrollProgress * descriptionWords.length * 1.2 - index
                  )
                );
                const greyR = 133,
                  greyG = 141,
                  greyB = 157;
                const darkR = 0,
                  darkG = 25,
                  darkB = 51;
                const currentR = Math.round(
                  greyR + (darkR - greyR) * wordProgress
                );
                const currentG = Math.round(
                  greyG + (darkG - greyG) * wordProgress
                );
                const currentB = Math.round(
                  greyB + (darkB - greyB) * wordProgress
                );
                return (
                  <span
                    key={index}
                    className="inline-block transition-colors duration-300"
                    style={{
                      color: `rgb(${currentR}, ${currentG}, ${currentB})`,
                    }}
                  >
                    {word}
                    {index < descriptionWords.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES — NORMAL ON MOBILE, PINNED ON DESKTOP */}
      <section ref={featuresRef} className="bg-[#F6F6F6] py-20 pt-32 relative">
        <div ref={pinnedWrapperRef} className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[600px]">
            {/* LEFT */}
            <div
              className={`${isDesktop ? "sticky top-[120px]" : ""} max-w-lg`}
            >
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  Features
                </span>
              </div>
              <h3 className="font-inter text-[38px] font-[600] leading-[1.2]">
                Simplifying personalized <br /> conversations.
              </h3>
              <p className="text-[#858D9D] mb-3">
                Drive business results with our meaningful customer
                conversations.
              </p>
              <Button size="lg">Learn More</Button>
            </div>

            {/* RIGHT */}
            <div ref={cardsContainerRef} className="flex flex-col gap-10">
              {allInSolutionData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-center"
                >
                  <AllInSolutionCard
                    icon={<img src={item.icon} alt={item.title} />}
                    title={item.title}
                    description={item.description}
                    img={item.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Transform />
      <AllInOneCTA />
      <TestimonialsSection />
      <BusinessCom
        dashboardImage="/images/allinonedashboard.svg"
        backgroundFrame="/images/bgframe.svg"
      />
    </main>
  );
}
