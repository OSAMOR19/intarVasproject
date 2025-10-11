import React from "react";
import { Network, DollarSign, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesShowcase = () => {
  const services = [
    {
      icon: <Network className="w-8 h-8 text-blue-500" />,
      title: "IntarVAS PBX",
      description:
        "We provide cloud PBX (Private Branch Exchange) solutions designed to help telecom operators and large organizations modernize their voice services.",
      mockupType: "summary",
      img: "/images/one.png",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      title: "All in one solution",
      description:
        "A unified platform combining calling, messaging, and CRM tools for both customer service and outbound sales.",
      mockupType: "history",
      img: "/images/two.png",
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      title: "Vanity and Toll-free numbers",
      description:
        "Providing businesses with valuable means of communication that not only benefits the customer but also drives business success.",
      mockupType: "call",
      img: "/images/three.png",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: "Bulk Messaging",
      description:
        "Our messaging solution encompasses a comprehensive suite of messaging services, catering to both person-to-person (P2P) and Application-to-Person (A2P) communication needs.",
      mockupType: "messages",
      img: "/images/four.png",
    },
  ];

  return (
    <section className="bg-[#F6F6F6] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
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
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
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
                <img
                  src={service.img}
                  alt={`${service.title} Mockup`}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
