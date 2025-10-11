import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const AllInOneCTA = () => {
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
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-[3rem] p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div>
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold">
                  One plan. All Features. No Limits
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Get the{" "}
                <span className="italic font-light">All in one solution.</span>
                <br />
                Everything you need, in a single package
              </h2>

              {/* Divider */}
              <div className="border-t border-blue-700 mb-8"></div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mb-8">
                {/* Column 1 */}
                <div className="space-y-4">
                  {column1.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-white text-base">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  {column2.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-white text-base">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                  {column3.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-white text-base">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Pricing & CTA */}
            <div className="flex flex-col items-end justify-between h-full">
              {/* Pricing */}
              <div className="text-right mb-8">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  ₦ 30,000<span className="text-2xl font-normal">/month</span>
                </div>
                <p className="text-blue-200 text-lg italic">
                  Flat pricing. Unlimited features.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="w-full max-w-sm space-y-4">
                <Button variant="hero" className="w-full py-4 rounded-xl text-lg">
                  Get Started
                </Button>
                <a 
                  href="https://wiki.ccaas.intarvas.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors block text-center"
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
