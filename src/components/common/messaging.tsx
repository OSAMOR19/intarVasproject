import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const MessagingPlatformSection = () => {
  const [activeFeature, setActiveFeature] = useState(3);

  const features = [
    {
      title: "Bulk Campaigns",
      description:
        "Reach thousands (or millions) with marketing messages and promotions in a few clicks.",
      imgSrc: "/images/bulk1.png",
      text: "Flash offer! Get 18% off on items, today only. shop now.",
    },
    {
      title: "OTP Messaging",
      description:
        "Send one-time passwords, verification codes and alerts instantly with high deliverability.",
      imgSrc: "/images/bulk2.png",
      text: "Your login code is 452817. Do not share this code with anyone",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track message delivery, failure diagnostics and campaign performance in real time.",
      imgSrc: "/images/bulk3.png",
      text: "Connected: Contatces synced automatically ",
    },
    {
      title: "Compliance & Regulatory",
      description:
        "Fully compliant with NCC rules, spam filters and opt-in/out policies.",
      imgSrc: "/images/bulk4.png",
      text: "This message is fully DND-compliant and follows NCC regulations",
    },
    {
      title: "API & Integration",
      description:
        "Easily integrate messaging into your apps for automation and scheduling.",
      imgSrc: "/images/bulk5.png",
      text: "Connect to us via API, send messages auto-trigger when leads are updated",
    },
    {
      title: "Cost Efficiency",
      description:
        "Competitive pricing for large volumes, with scalable infrastructure to handle growth.",
      imgSrc: "/images/bulk6.png",
      text: "Save up to 35% on messaging costs with optimized delivery routes",
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen py-16 px-8">
      <div className="max-w-[85rem] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-[38px] font-light leading-tight max-w-full ">
            <span className="opacity-50">
              Our platform is designed to help organizations
            </span>
            <br />
            <span className="">
              connect with thousands of people at once, while
            </span>
            <br />
            <span className="">
              ensuring every message is reliable and trackable.
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeFeature === index
                    ? "bg-gray-900 border-l-2 border-blue-500"
                    : "bg-[#14161B] hover:bg-gray-900/50 border-l-2 border-transparent"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-[12px] md:text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side - Image with Overlay */}
          <div className="relative">
            <div className="rounded-3xl shadow-2xl">
              <img
                src={`${features[activeFeature].imgSrc}`}
                alt="Person using messaging platform"
                className="w-full h-auto object-cover"
              />

              {/* Compliance Badge Overlay */}
            </div>
            <div className="absolute inline -top-10 left-20 lg:top-[16rem] lg:left-[calc(-20%-4rem)] bg-gradient-to-br from-[#FFFFFF00]/0 to-[#FFFFFF40]/25 p-2 md:p-5 rounded-3xl border-2 ">
              <div className="bg-white rounded-2xl py-2 px-3 md:p-4 shadow-lg flex items-center gap-3">
                <div className="flex-1">
                  <p className="text-gray-800 text-[10px] md:text-sm font-inter font-semibold">
                    {features[activeFeature].text}
                  </p>
                </div>
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              </div>
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

export default MessagingPlatformSection;
