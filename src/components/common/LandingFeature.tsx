import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mic,
  BarChart3,
  Mail,
  PhoneForwarded,
  TrendingUp,
} from "lucide-react";
import puzzleicon from "@/assets/correctpuzlleicon.svg"
import callicon from  "@/assets/callrecordicon.svg"
import analyticsicon from  "@/assets/analysicreporticon.svg"
import voicemailicon from "@/assets/voicetoemailicon.svg"
import callfowardicon from "@/assets/callfowardingicon.svg"
import scalabilityicon from "@/assets/seamlessscalabilityicon.svg"
import bulksmsicon from "@/assets/bulksmsicon.svg"
import ussd from "@/assets/ussdservicesicon.svg"
import a2p from "@/assets/a2pmessagingicon.svg"
import twowayicon from "@/assets/twowaymessagingicon.svg"
import realtimeicon from "@/assets/realtimedeliveryicon.svg"
import customsid from "@/assets/customSIDicon.svg"
import headseticon from "@/assets/headphoneicon.svg"
import smartcrm from "@/assets/smartcrmicon.svg"
import ticketingicon from "@/assets/ticketingautomationicon.svg"
import securityicon from "@/assets/securityicon.svg"
import customworkflowicon from "@/assets/customworkflows.svg"
import aianalytics from "@/assets/aianalyticsicon.svg"
import vanityicon from "@/assets/memorablevanity.svg"
import tollfreeicon from "@/assets/tollfreeicon.svg" 
import enhancedcutomericon from "@/assets/enhancedtrusticon.svg"
import callrouting from "@/assets/callroutingicon.svg"
import scalable from "@/assets/scalableicon.svg"
import customer from "@/assets/customeraccessibilityicon.svg"

import bulksngimage from "@/assets/bulkmessagingphoneimage.svg"
import allinone from "@/assets/allinoneimage.svg"
import phoneimage from "@/assets/0700phone.svg"



import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(2);
  const [activeTab, setActiveTab] = useState("pbx");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const pbxFeatures = [
    {
      icon: <img src={puzzleicon} alt="Virtual Extensions" style={{ width: "26px", height: "26px" }} />,
      title: "Virtual Extensions",
      subtitle: "for scalable teams.",
    },
    {
      icon: <img src={callicon} alt="Call Recording" style={{ width: "25px", height: "23px" }} />,
      title: "Call Recording",
      subtitle: "for compliance and quality checks.",
    },
    {
      icon: <img src={analyticsicon} alt="Analytics & Reporting" style={{ width: "24px", height: "22px" }} />,
      title: "Analytics & Reporting",
      subtitle: "dashboards",
    },
    {
      icon: <img src={voicemailicon} alt="Voicemail-to-Email" style={{ width: "24px", height: "24px" }} />,
      title: "Voicemail-to-Email",
      subtitle: "for better accessibility.",
    },
    {
      icon: <img src={callfowardicon} alt="Call Forwarding & Routing" style={{ width: "26px", height: "26px" }} />,
      title: "Call Forwarding & Routing",
      subtitle: "flexibility.",
    },
    {
      icon: <img src={scalabilityicon} alt="Seamless Scalability" style={{ width: "18px", height: "18px" }} />,
      title: "Seamless Scalability",
      subtitle: "for growing businesses.",
    },
  ];

  const bulkMessagingFeatures = [
    {
      icon: <img src={bulksmsicon} alt="Bulk SMS" style={{ width: "24px", height: "24px" }} />,
      title: "Bulk SMS delivery",
      subtitle: "at scale.",
    },
    {
      icon: <img src={ussd} alt="USSD Services" style={{ width: "24px", height: "24px" }} />,
      title: "USSD Services",
      subtitle: "for customer interaction.",
    },
    {
      icon: <img src={a2p} alt="A2P Messaging" style={{ width: "24px", height: "24px" }} />,
      title: "A2P Messaging APIs",
      subtitle: "for integration.",
    },
    {
      icon: <img src={twowayicon} alt="Two-way Messaging" style={{ width: "24px", height: "24px" }} />,
      title: "Two-way Messaging",
      subtitle: "with customers.",
    },
    {
      icon: <img src={realtimeicon} alt="Real-Time Delivery" style={{ width: "24px", height: "24px" }} />,
      title: "Real-Time Delivery Reports",
      subtitle: "with metrics.",
    },
    {
      icon: <img src={customsid} alt="Custom Sender IDs" style={{ width: "24px", height: "24px" }} />,
      title: "Custom Sender IDs",
      subtitle: "for brand identity.",
    },
  ];

  const allInOneFeatures = [
    {
      icon: <img src={headseticon} alt="Unified Support" style={{ width: "24px", height: "24px" }} />,
      title: "Unified Omnichannel Support",
      subtitle: "(voice, chat, email, social).",
    },
    {
      icon: <img src={smartcrm} alt="Smart CRM" style={{ width: "24px", height: "24px" }} />,
      title: "Smart CRM",
      subtitle: "with customer history and insights.",
    },
    {
      icon: <img src={ticketingicon} alt="Ticketing & Automation" style={{ width: "24px", height: "24px" }} />,
      title: "Ticketing & Automation",
      subtitle: "for faster resolutions.",
    },
    {
      icon: <img src={securityicon} alt="Security & Compliance" style={{ width: "24px", height: "24px" }} />,
      title: "Security & Compliance",
      subtitle: "built for enterprise standards.",
    },
    {
      icon: <img src={customworkflowicon} alt="Custom Workflows" style={{ width: "24px", height: "24px" }} />,
      title: "Custom workflows",
      subtitle: "to match your business processes.",
    },
    {
      icon: <img src={aianalytics} alt="AI Analytics" style={{ width: "24px", height: "24px" }} />,
      title: "AI-powered Analytics",
      subtitle: "for smarter decision making.",
    },
  ];

  const numbersFeatures = [
    {
      icon: <img src={vanityicon} alt="Vanity Numbers" style={{ width: "24px", height: "24px" }} />,
      title: "Memorable Vanity Numbers (0700)",
      subtitle: "for branding.",
    },
    {
      icon: <img src={tollfreeicon} alt="Toll-Free Numbers" style={{ width: "24px", height: "24px" }} />,
      title: "Toll-Free Numbers (0800)",
      subtitle: "for nationwide reach.",
    },
    {
      icon: <img src={enhancedcutomericon} alt="Enhanced Trust" style={{ width: "24px", height: "24px" }} />,
      title: "Enhanced Customer Trust",
      subtitle: "with professional presence.",
    },
    {
      icon: <img src={callrouting} alt="Call Routing" style={{ width: "24px", height: "24px" }} />,
      title: "Call Routing Options",
      subtitle: "for flexibility.",
    },
    {
      icon: <img src={scalable} alt="Scalable" style={{ width: "24px", height: "24px" }} />,
      title: "Scalable",
      subtitle: "for SMEs & Large Corporates.",
    },
    {
      icon: <img src={customer} alt="Customer Accessibility" style={{ width: "24px", height: "24px" }} />,
      title: "Improved Customer Accessibility",
      subtitle: "anywhere in Nigeria.",
    },
  ];

  const getCurrentFeatures = () => {
    switch (activeTab) {
      case "pbx":
        return pbxFeatures;
      case "messaging":
        return bulkMessagingFeatures;
      case "allinone":
        return allInOneFeatures;
      case "numbers":
        return numbersFeatures;
      default:
        return pbxFeatures;
    }
  };

  const getCurrentImage = () => {
    switch (activeTab) {
      case "pbx":
        return "images/phone.png";
      case "messaging":
        return bulksngimage;
      case "allinone":
        return allinone;
      case "numbers":
        return phoneimage;
      default:
        return "images/phone.png";
    }
  };

  const getImageSize = () => {
    switch (activeTab) {
      case "pbx":
        return "w-[400px] h-full";
      case "messaging":
        return "w-[400px] h-full";
      case "allinone":
        return "w-[500px] h-full";
      case "numbers":
        return "w-[400px] h-full";
      default:
        return "w-[400px] h-full";
    }
  };

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <div ref={sectionRef} className="min-h-screen bg-black text-white px-8 py-20 relative overflow-hidden">

      {/* Header Navigation */}
      <div className={`flex flex-wrap md:flex-nowrap items-center justify-center gap-8 mb-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      }`}>
        <button 
          className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
            activeTab === "pbx" ? "bg-[#007DFE] text-white" : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("pbx")}
        >
          IntarVAS PBX
        </button>
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
          Bulk Messaging
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
      <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
      }`}>
        {/* Left Side - Features List */}
        <div className={`bg-[#0C0C0C] rounded-3xl p-8 space-y-8 h-[600px] flex flex-col justify-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-12'
        }`}>
          {getCurrentFeatures().map((feature, index) => (
            <div 
              key={`${activeTab}-${index}`} 
              className="flex relative items-center gap-4 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`bg-[#1F2228] w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-[#2A2D35]`}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-0.7xl transition-all duration-300 hover:text-white">
                  <span className="text-blue-500 font-medium transition-all duration-300 hover:text-blue-400">
                    {feature.title}
                  </span>
                  <span className="text-gray-300 ml-2 transition-all duration-300 hover:text-gray-200">{feature.subtitle}</span>
                </h3>
              </div>

              {/* Connector Line */}
              {index < getCurrentFeatures().length - 1 && (
                <div
                  className="absolute top-[-7px] left-[39px] mt-16 w-0.5 h-8 border-l-2 border-dashed border-blue-500 animate-pulse-slow"
                  style={{ marginLeft: "-16px" }}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Dynamic Image */}
        <div className={`bg-[#0C0C0C] rounded-3xl p-8 flex justify-center items-center h-[600px] transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-12'
        }`}>
          <img
            key={activeTab}
            src={getCurrentImage()}
            alt={`${activeTab} Content`}
            className={`${getImageSize()} object-contain transition-all duration-500 ease-in-out animate-fade-in-right hover:scale-105`}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
