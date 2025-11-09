import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PricingPlan as PricingPlans } from "@/components/sections";
import AllInSolutionCard from "@/components/card/AllInSolution";
import PbxFooter from "@/components/common/pbxFooter";
import { Testimonials as TestimonialsSection } from "@/components/sections";
import { useEffect, useRef, useState } from "react";

import puzzleicon from "@/assets/correctpuzlleicon.svg";
import callicon from "@/assets/callrecordicon.svg";
import analyticsicon from "@/assets/analysicreporticon.svg";
import voicemailicon from "@/assets/voicetoemailicon.svg";
import callfowardicon from "@/assets/addplus.svg";
import laptop from "@/assets/laptopimg.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function PBX() {
  const [titleText, setTitleText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTrustVisible, setIsTrustVisible] = useState(false);
  const [showTrustCards, setShowTrustCards] = useState(false);
  const [isLaptopSectionVisible, setIsLaptopSectionVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const fullTitle = "IntarvAS PBX";
  const descriptionText =
    "With IntarvAS PBX, you get enterprise-grade call management without the cost of on-site hardware. Create extensions for your team, route calls intelligently, and manage everything from a simple dashboard.";
  const descriptionWords = descriptionText.split(" ");

  const trustRef = useRef<HTMLDivElement>(null);
  const pinnedWrapperRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const featureCards = [
    {
      icon: "/icon/voicemail.svg",
      title: "Call Recording",
      description:
        "Securely record and store customer conversations, ensuring accountability, training opportunities, and compliance with industry standards.",
      img: "/images/callrecording.png",
    },
    {
      icon: "/icon/chart.svg",
      title: "Analytics",
      description:
        "Track call volumes, duration, and performance in real time with clear dashboards that help you make smarter business decisions.",
      img: "/images/analytics.png",
    },
    {
      icon: "/icon/extensionicon.svg",
      title: "Extensions",
      description:
        "Give every team member a professional business line with unique extensions, whether they’re in the office or working remotely.",
      img: "/images/extimage.svg",
    },
    {
      icon: "/icon/scalability.svg",
      title: "Scalability",
      description:
        "Start small and expand seamlessly. Add or remove lines as your business grows, without costly hardware or downtime.",
      img: "/images/sclimage.svg",
    },
  ];

  useEffect(() => {
    let idx = 0;
    const iv = setInterval(() => {
      if (idx <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, idx));
        idx++;
      } else {
        clearInterval(iv);
        setTimeout(() => setIsTypingComplete(true), 500);
      }
    }, 100);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const handle = () => {
      const el = document.getElementById("description-section");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const start = winH * 0.5;
      const end = -rect.height;
      const prog = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      setScrollProgress(prog);
    };
    window.addEventListener("scroll", handle);
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsTrustVisible(true);
          setTimeout(() => setShowTrustCards(true), 300);
        }
      },
      { threshold: 0.2 }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    trustRef.current && obs.observe(trustRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsLaptopSectionVisible(true),
      { threshold: 0.3 }
    );
    const sec = document.getElementById("laptop-section");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    sec && obs.observe(sec);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isDesktop || !pinnedWrapperRef.current || !cardsContainerRef.current)
      return;

    const wrapper = pinnedWrapperRef.current;
    const container = cardsContainerRef.current;

    const firstCard = wrapper.querySelector(".feature-card");
    if (!firstCard) return;
    const cardH = firstCard.getBoundingClientRect().height;
    const gap = 40; 
    const singleTravel = cardH + gap;
    const totalTravel = singleTravel * (featureCards.length - 1);

    const pin = ScrollTrigger.create({
      trigger: wrapper,
      start: "top 60px",
      end: `+=${totalTravel}`,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
      onUpdate: (self) => {
        gsap.set(container, { y: -self.progress * totalTravel });
      },
    });

    return () => pin.kill();
  }, [isDesktop, featureCards.length]);

  return (
    <main>
      <Helmet>
        <title>IntarVAS PBX — Cloud Contact Centre</title>
        <meta
          name="description"
          content="Run your business on a smarter, cloud-based PBX that connects teams, customers, and partners with ease."
        />
        <link rel="canonical" href="/services/pbx" />
      </Helmet>

      <section className="bg-background pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-inter font-[600] tracking-tight md:text-[64px] animate-fade-in-up">
            {titleText}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-in-up delay-300">
            Run your business on a smarter, cloud-based PBX that connects teams,
            customers, and partners with ease.
          </p>
          <div className="mt-8 animate-fade-in-up delay-500">
            <Link to="/contact">
              <Button
                variant="hero"
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="relative group">
            <div className="absolute inset-0 bg-gray-200/30 rounded-[32px] blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <img
              src="/images/pbxHeroImg.png"
              alt="IntarVAS PBX analytics dashboard"
              className="w-full rounded-[32px] relative z-10 transform transition-all duration-700 hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-lg"
            />
          </div>
        </div>
      </section>

      <section
        id="description-section"
        className="bg-muted/30 py-36 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/3 rounded-full blur-2xl animate-bounce delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <p className="mx-auto font-inter text-[35px] font-[600] max-w-4xl text-center leading-[1.2] hover:scale-105 transition-all duration-500 cursor-default">
            {descriptionWords.map((word, i) => {
              const prog = Math.max(
                0,
                Math.min(1, scrollProgress * descriptionWords.length * 1.2 - i)
              );
              const grey = { r: 133, g: 141, b: 157 };
              const dark = { r: 0, g: 25, b: 51 };
              const cur = {
                r: Math.round(grey.r + (dark.r - grey.r) * prog),
                g: Math.round(grey.g + (dark.g - grey.g) * prog),
                b: Math.round(grey.b + (dark.b - grey.b) * prog),
              };
              return (
                <span
                  key={i}
                  className="inline-block transition-colors duration-300"
                  style={{ color: `rgb(${cur.r},${cur.g},${cur.b})` }}
                >
                  {word}&nbsp;
                </span>
              );
            })}
          </p>
        </div>
      </section>

      <section ref={pinnedWrapperRef} className="bg-[#F6F6F6] py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[600px]">
            <div
              className={`${isDesktop ? "sticky top-[120px]" : ""} max-w-lg`}
            >
              <div className="inline-block mb-4">
                <span
                  className="px-4 pb-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                  style={{ border: "2px solid #C6E2FF" }}
                >
                  Features
                </span>
              </div>
              <h3 className="font-inter text-[38px] font-[600] leading-[1.2]">
                A phone number with all the business features you need.
              </h3>
              <p className="text-[#858D9D] mb-3">
                These critical features are essential for any business,
                regardless of size.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>

            <div ref={cardsContainerRef} className="flex flex-col gap-10">
              {featureCards.map((c, idx) => (
                <div
                  key={idx}
                  className="feature-card flex items-center justify-center"
                >
                  <AllInSolutionCard
                    icon={
                      <img
                        src={c.icon}
                        alt={c.title}
                        width={24}
                        height={24}
                        style={{ objectFit: "contain" }}
                      />
                    }
                    title={c.title}
                    description={c.description}
                    img={c.img}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={trustRef}
        className="bg-black text-white pt-40 pb-40 px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-left mb-16 transition-all duration-1000 ${
              isTrustVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-gray-400">
                We trust our PBX so much, we built it for our own business and
                still use it every day.
              </span>{" "}
              Join over <span className="text-blue-400 font-bold">2,000+</span>{" "}
              business owners who do the same.
            </h2>
          </div>

          <div
            id="laptop-section"
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              showTrustCards
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className={`bg-[#0C0C0C] rounded-3xl p-8 space-y-8 h-[400px] flex flex-col justify-center hover:scale-105 transition-all duration-1000 ${
                isLaptopSectionVisible
                  ? "opacity-100 -translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <div className="flex relative items-center gap-4 group">
                <div className="bg-[#1F2228] w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-[#2A2D35]">
                  <img
                    src={puzzleicon}
                    alt="Extensions"
                    width={26}
                    height={26}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg transition-all duration-300 hover:text-white">
                    <span className="text-blue-500 font-medium transition-all duration-300 hover:text-blue-400">
                      Assign Extensions
                    </span>
                    <span className="text-gray-300 ml-2 transition-all duration-300 hover:text-gray-200">
                      to your team instantly
                    </span>
                  </h3>
                </div>
                <div
                  className="absolute top-[-7px] left-[39px] mt-16 w-0.5 h-8 border-l-2 border-dashed border-blue-500 animate-pulse-slow"
                  style={{ marginLeft: "-16px" }}
                ></div>
              </div>

              <div className="flex relative items-center gap-4 group">
                <div className="bg-[#1F2228] w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-[#2A2D35]">
                  <img
                    src={callicon}
                    alt="Call Recording"
                    width={25}
                    height={23}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg transition-all duration-300 hover:text-white">
                    <span className="text-blue-500 font-medium transition-all duration-300 hover:text-blue-400">
                      Call Recording
                    </span>
                    <span className="text-gray-300 ml-2 transition-all duration-300 hover:text-gray-200">
                      for compliance and quality checks
                    </span>
                  </h3>
                </div>
                <div
                  className="absolute top-[-7px] left-[39px] mt-16 w-0.5 h-8 border-l-2 border-dashed border-blue-500 animate-pulse-slow"
                  style={{ marginLeft: "-16px" }}
                ></div>
              </div>

              <div className="flex relative items-center gap-4 group">
                <div className="bg-[#1F2228] w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-[#2A2D35]">
                  <img
                    src={analyticsicon}
                    alt="Analytics"
                    width={24}
                    height={22}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg transition-all duration-300 hover:text-white">
                    <span className="text-blue-500 font-medium transition-all duration-300 hover:text-blue-400">
                      Analytics & Reporting
                    </span>
                    <span className="text-gray-300 ml-2 transition-all duration-300 hover:text-gray-200">
                      dashboards
                    </span>
                  </h3>
                </div>
                <div
                  className="absolute top-[-7px] left-[39px] mt-16 w-0.5 h-8 border-l-2 border-dashed border-blue-500 animate-pulse-slow"
                  style={{ marginLeft: "-16px" }}
                ></div>
              </div>

              {/* Feature 4 */}
              <div className="flex relative items-center gap-4 group">
                <div className="bg-[#1F2228] w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-[#2A2D35]">
                  <img
                    src={callfowardicon}
                    alt="Call Forwarding"
                    width={26}
                    height={26}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg transition-all duration-300 hover:text-white">
                    <span className="text-blue-500 font-medium transition-all duration-300 hover:text-blue-400">
                      Call Forwarding & Routing
                    </span>
                    <span className="text-gray-300 ml-2 transition-all duration-300 hover:text-gray-200">
                      flexibility
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 ${
                isLaptopSectionVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <div className="bg-[#0C0C0C] rounded-3xl p-8 flex justify-center items-center h-[400px] hover:scale-105 transition-transform duration-300">
                <img
                  src={laptop}
                  alt="PBX Dashboard"
                  className="w-[500px] h-full object-contain transition-all duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingPlans />
      <TestimonialsSection />
      <PbxFooter />
    </main>
  );
}
