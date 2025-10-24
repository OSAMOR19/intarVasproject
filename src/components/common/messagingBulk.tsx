import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import MessagingPlatformSection from "./messaging";

const MessagingPlatformSectionNumber = () => {
  const [activeFeature, setActiveFeature] = useState(3);

  const features = [
    {
      title: "Memorable Numbers",
      description:
        "Make it easy for customers to remember your business. With our numbers, your brand stays top of mind and instantly recognizable.",
    },
    {
      title: "Professional Image",
      description:
        "Project credibility and trust with numbers associated with established organizations, benefit from perception of professionalism",
    },
    {
      title: "Flexible Management",
      description:
        "Route calls to different departments, teams or location using one central number. Ensure every customer reaches the right person",
    },
    {
      title: "Nationwide Accessibility",
      description:
        "Give your customers a single number they can call from anywhere in Nigeria. No matter the region, you remain accessible and consistent.",
    },
    {
      title: "Scalable",
      description:
        "As your business expands, our numbers scale with you. Supporting advanced telecom features.",
    },
    {
      title: "Cost-effective Communication",
      description:
        "Customers call freely, with a low-cost option for businesses to manage engagement affordaly.",
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen py-16 px-8">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-4xl font-inter lg:text-[38px] font-[500] leading-tight max-w-full ">
            <span className="text-[#D1D4DA]/50">
              Our number solution gives your business a <br />
              <span className="text-white ">
                <span className="text-[#D1D4DA]/50">professional edge.</span>{" "}
                Easy to remember, nationwide <br />
                accessibility, designed to strengthen connections.
              </span>
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className=" max-w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeFeature === index
                    ? "bg-gray-900 border-l-2 border-blue-500"
                    : "bg-[#14161B] border-l-2 border-transparent hover:bg-gray-900/50"
                }`}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-[14px] md:text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side - Image with Overlay */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/man_number.png"
                alt="Person using messaging platform"
                className="w-full h-auto object-cover"
              />

              {/* Compliance Badge Overlay */}
              {/* <div className="absolute lg:bottom-[20rem] lg:left-[calc(-20%-4rem)] ">
                <div className="bg-white rounded-2xl p-4 shadow-lg flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-gray-800 text-sm font-medium">
                      This message is fully DND-compliant and follows NCC
                      regulations
                    </p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                </div>
              </div> */}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagingPlatformSectionNumber;
