import React, { useState } from "react";
import {
  Phone,
  Mic,
  BarChart3,
  Mail,
  PhoneForwarded,
  TrendingUp,
} from "lucide-react";
import puzzleicon from "@/assets/puzzleicon.svg"
import callicon from  "@/assets/callicon.svg"
import analyticsicon from  "@/assets/analyticsicon.svg"
import voicemailicon from "@/assets/voicemailicon.svg"
import callfowardicon from "@/assets/callfowardingicon.svg"
import scalabilityicon from "@/assets/scalabilityicon.svg"


import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(2);
  const [activeTab, setActiveTab] = useState("pbx");

  const features = [
    {
      icon: <img src={puzzleicon} alt="Virtual Extensions" className="w-7 h-7" />,
      title: "Virtual Extensions",
      subtitle: "for scalable teams.",
    },
    {
      icon: <img src={callicon} alt="Call Recording" className="w-7 h-7" />,
      title: "Call Recording",
      subtitle: "for compliance and quality checks.",
    },
    {
      icon: <img src={analyticsicon} alt="Analytics & Reporting" className="w-7 h-7" />,
      title: "Analytics & Reporting",
      subtitle: "dashboards",
    },
    {
      icon: <img src={voicemailicon} alt="Voicemail-to-Email" className="w-7 h-7" />,
      title: "Voicemail-to-Email",
      subtitle: "for better accessibility.",
    },
    {
      icon: <img src={callfowardicon} alt="Call Forwarding & Routing" className="w-7 h-7" />,
      title: "Call Forwarding & Routing",
      subtitle: "flexibility.",
    },
    {
      icon: <img src={scalabilityicon} alt="Seamless Scalability" className="w-7 h-7" />,
      title: "Seamless Scalability",
      subtitle: "for growing businesses.",
    },
  ];

  const mockChartData = [
    {
      day: "Mon",
      height: 60,
      colors: ["bg-blue-400", "bg-green-400", "bg-pink-400"],
    },
    {
      day: "Tue",
      height: 70,
      colors: ["bg-blue-400", "bg-green-400", "bg-pink-400"],
    },
    {
      day: "Wed",
      height: 85,
      colors: ["bg-blue-400", "bg-green-400", "bg-pink-400"],
    },
    {
      day: "Thu",
      height: 75,
      colors: ["bg-blue-400", "bg-green-400", "bg-pink-400"],
    },
    {
      day: "Fri",
      height: 95,
      colors: ["bg-blue-400", "bg-green-400", "bg-pink-400"],
    },
    { day: "Sat", height: 80, colors: ["bg-pink-400", "bg-green-400"] },
    { day: "Sun", height: 65, colors: ["bg-green-400", "bg-pink-400"] },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-20 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-float delay-3000"></div>
      </div>

      {/* Header Navigation */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 mb-20 animate-fade-in-up">
        <Button 
          variant={activeTab === "pbx" ? "hero" : "ghost"} 
          className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
            activeTab === "pbx" ? "" : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("pbx")}
        >
          IntarVAS PBX
        </Button>
        <button 
          className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
            activeTab === "allinone" ? "bg-[#007DFE] text-white" : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("allinone")}
        >
          All in one solution
        </button>
        <button 
          className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
            activeTab === "messaging" ? "bg-[#007DFE] text-white" : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("messaging")}
        >
          Buk Messaging
        </button>
        <button 
          className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
            activeTab === "numbers" ? "bg-[#007DFE] text-white" : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("numbers")}
        >
          0700 & 0800
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Features List */}
        <div className="bg-[#0C0C0C] rounded-3xl p-8 space-y-8 h-[600px] flex flex-col justify-center animate-fade-in-left">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex relative items-start gap-4 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`bg-[#1F2228] p-3 rounded-lg flex-shrink-0`}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-xl">
                  <span className="text-blue-500 font-medium">
                    {feature.title}
                  </span>
                  <span className="text-gray-300 ml-2">{feature.subtitle}</span>
                </h3>
              </div>

              {/* Connector Line */}
              {index < features.length - 1 && (
                <div
                  className="absolute top-[-7px] left-[39px] mt-16 w-0.5 h-8 border-l-2 border-dashed border-blue-500 animate-pulse-slow"
                  style={{ marginLeft: "-16px" }}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Phone Mockup */}
        <div className="bg-[#0C0C0C] rounded-3xl p-8 flex justify-center items-center h-[600px] animate-fade-in-right">
          <img
            src="images/phone.png"
            alt="Phone Content"
            className="w-[250px] h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
