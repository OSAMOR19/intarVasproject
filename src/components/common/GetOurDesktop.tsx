import React from "react";
import { Check, Award, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const DeskphonesPricing = () => {
  const plans = [
    {
      badge: "Value",
      icon: <Award className="w-4 h-4" />,
      price: "89,999",
      features: [
        { text: "One Yealry or Toll-free number", included: true },
        { text: "Eligible for one IVR", included: true },
        { text: "Pro Desk phone", included: true },
        { text: "One year free subscription", included: true },
        { text: "Subscription after first year ₦ 25,000/year", included: true },
        {
          text: "Free OLO for all internally connected phones",
          included: true,
        },
      ],
    },
    {
      badge: "Premium",
      icon: <Crown className="w-4 h-4" />,
      price: "119,999",
      features: [
        { text: "One Yealry or Toll-free number", included: true },
        { text: "Eligible for one IVR", included: true },
        { text: "Ultra Premium Desk phone", included: true },
        { text: "One year free subscription", included: true },
        { text: "Subscription after first year ₦ 20,000/year", included: true },
        {
          text: "Free Installation (only applicable in Lagos)",
          included: true,
        },
        {
          text: "Free OLO for all internally connected phones",
          included: true,
        },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-8  flex items-center">
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center justify-between">
          {/* Left Side - Text Content */}
          <div className="text-white col-span-4">
            <h1 className="text-5xl font-inter lg:text-6xl font-bold mb-6">
              Get our
              <br />
              Deskphones
            </h1>
            <p className="text-blue-200 text-[14px] font-inter leading-relaxed max-w-md">
              Equip your team with enterprise-grade desk phones designed for
              seamless call quality, durability, and IP/PBX/SIP integration.
            </p>
          </div>

          {/* Right Side - Pricing Cards */}
          <div className="col-span-8 grid grid-cols-1 md:grid-cols-2 justify-center">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white w-[380px] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
              >
                {/* Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    {plan.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-600">
                    {plan.badge}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900">
                    ₦ {plan.price}
                  </div>
                </div>

                {/* Buy Now Button */}
                <Button variant="hero" className="w-full py-3 mb-6">
                  Buy Now
                </Button>

                {/* Features List */}
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check
                          className={`w-5 h-5 ${
                            feature.included ? "text-gray-700" : "text-gray-300"
                          }`}
                          strokeWidth={2.5}
                        />
                      </div>
                      <span
                        className={`text-sm leading-relaxed ${
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-blue-200 text-sm">Terms and conditions apply</p>
        </div>
      </div>
    </section>
  );
};

export default DeskphonesPricing;
