import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import icon1 from "@/assets/networkicon.svg";
import icon2 from "@/assets/linkicon.svg";
import icon3 from "@/assets/vanityiconn.svg";
import icon4 from "@/assets/bulkmessaging.svg";

const ServicesShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger card animations
            setTimeout(() => setVisibleCards([0]), 200);
            setTimeout(() => setVisibleCards([0, 1]), 400);
            setTimeout(() => setVisibleCards([0, 1, 2]), 600);
            setTimeout(() => setVisibleCards([0, 1, 2, 3]), 800);
            
            // Stagger phone image animations (after cards appear)
            setTimeout(() => setVisibleImages([0]), 600);
            setTimeout(() => setVisibleImages([0, 1]), 700);
            setTimeout(() => setVisibleImages([0, 1, 2]), 800);
            setTimeout(() => setVisibleImages([0, 1, 2, 3]), 900);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("services-showcase-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  const services = [
    {
      icon: <img src={icon1} alt="Network" className="w-8 h-8" />,
      title: "IntarvAS PBX",
      description:
        "We provide cloud PBX (Private Branch Exchange) solutions designed to help telecom operators and large organizations modernize their voice services.",
      mockupType: "summary",
      img: "/images/one.png",
    },
    {
      icon: <img src={icon2} alt="All in one solution" className="w-8 h-8" />,
      title: "All in one solution",
      description:
        "A unified platform combining calling, messaging, and CRM tools for both customer service and outbound sales.",
      mockupType: "history",
      img: "/images/two.png",
    },
    {
      icon: <img src={icon3} alt="Vanity numbers" className="w-8 h-8" />,
      title: "Vanity and Toll-free numbers",
      description:
        "Providing businesses with valuable means of communication that not only benefits the customer but also drives business success.",
      mockupType: "call",
      img: "/images/three.png",
    },
    {
      icon: <img src={icon4} alt="Bulk Messaging" className="w-8 h-8" />,
      title: "Bulk Messaging",
      description:
        "Our messaging solution encompasses a comprehensive suite of messaging services, catering to both person-to-person (P2P) and Application-to-Person (A2P) communication needs.",
      mockupType: "messages",
      img: "/images/four.png",
    },
  ];

  return (
    <section id="services-showcase-section" className="bg-[#F6F6F6] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${
          isVisible 
            ? "opacity-100 transform translate-y-0" 
            : "opacity-0 transform translate-y-8"
        }`}>
          <div className="mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Our services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Where We Thrive
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-md">
            Discover reliable telecom tools built for Nigerian businesses and
            government agencies.
          </p>
          <Button variant="hero" className="px-6 py-3">
            Learn More
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-1000 ${
                visibleCards.includes(index)
                  ? "opacity-100 transform translate-y-0 scale-100"
                  : "opacity-0 transform translate-y-8 scale-95"
              }`}
            >
              {/* Service Header */}
              <div className=" p-9">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button variant="hero" className="px-6 py-2 text-sm">
                  Learn More
                </Button>
              </div>

              {/* Phone Mockup */}
              <div className="relative px-9">
                <div className={`transition-all duration-1000 delay-300 ${
                  visibleImages.includes(index)
                    ? "opacity-100 transform translate-y-0 scale-100"
                    : "opacity-0 transform translate-y-8 scale-95"
                }`}>
                  <img
                    src={service.img}
                    alt={`${service.title} Mockup`}
                    className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
