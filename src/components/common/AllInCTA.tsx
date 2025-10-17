import React, { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const AllInOneCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showLeftContent, setShowLeftContent] = useState(false);
  const [showRightContent, setShowRightContent] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger animations
            setTimeout(() => setShowLeftContent(true), 200);
            setTimeout(() => setShowRightContent(true), 400);
            setTimeout(() => setShowFeatures(true), 600);
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

  const features = [
    { name: "CRM", column: 1 },
    { name: "E-mail", column: 1 },
    { name: "WebChat", column: 1 },
    { name: "Instagram", column: 1 },
    { name: "Facebook", column: 2 },
    { name: "WhatsApp", column: 2 },
    { name: "Auto Dialer", column: 2 },
    { name: "Full API access", column: 2 },
    { name: "Voice (IVR, ACD)", column: 3 },
    { name: "Ticket Management", column: 3 },
    { name: "Campaign Management", column: 3 },
  ];

  const column1 = features.filter((f) => f.column === 1);
  const column2 = features.filter((f) => f.column === 2);
  const column3 = features.filter((f) => f.column === 3);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20 px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`rounded-[3rem] p-12 lg:p-16 shadow-2xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`} style={{ backgroundColor: '#004B98' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div className={`transition-all duration-1000 ${
              showLeftContent ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
            }`}>
              {/* Badge */}
              <div className="inline-block mb-6">
                <span
                  className="px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300"
                  style={{ border: '2px solid #007DFE', display: 'inline-block' }}
                >
                  One plan. All Features. No Limits
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight hover:scale-105 transition-transform duration-300">
                Get the{" "}
                <span className="italic font-light">All in one solution.</span>
                <br />
                Everything you need, in a single package
              </h2>

              {/* Divider */}
              <div className="border-t border-blue-700 mb-8 hover:border-blue-600 transition-colors duration-300"></div>

              {/* Features Grid */}
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mb-8 transition-all duration-1000 ${
                showFeatures ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}>
                {/* Column 1 */}
                <div className="space-y-4">
                  {column1.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                      <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                        <Check className="w-4 h-4 text-blue-600" strokeWidth={3} />
                      </div>
                      <span className="text-white text-base hover:text-blue-300 transition-colors duration-300">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  {column2.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                      <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                        <Check className="w-4 h-4 text-blue-600" strokeWidth={3} />
                      </div>
                      <span className="text-white text-base hover:text-blue-300 transition-colors duration-300">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                  {column3.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                      <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                        <Check className="w-4 h-4 text-blue-600" strokeWidth={3} />
                      </div>
                      <span className="text-white text-base hover:text-blue-300 transition-colors duration-300">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Pricing & CTA */}
            <div className={`flex flex-col items-end justify-between h-full transition-all duration-1000 ${
              showRightContent ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
            }`}>
              {/* Pricing */}
              <div className="text-right  mb-8">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2 hover:scale-105 transition-transform duration-300">
                  ₦ 30,000<span className="text-2xl font-normal">/user/month</span>
                </div>
                <p className="text-blue-200 text-lg italic hover:text-blue-100 transition-colors duration-300">
                  Flat pricing. Unlimited features.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="w-full max-w-sm space-y-4">
                <Button variant="hero" className="w-full h-[52px] rounded-md text-lg hover:scale-105 transition-transform duration-300">
                  Get Started
                </Button>
                <a 
                  href="https://wiki.ccaas.intarvas.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full h-[52px] bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllInOneCTA;
