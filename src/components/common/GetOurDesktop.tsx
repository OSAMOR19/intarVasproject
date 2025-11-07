import React from "react";
import {
  Check,
  Award,
  Crown,
  CheckCircle,
  CheckCircle2,
  Star,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const DeskphonesPricing = () => {
  const plans = [
    {
      badge: "Value",
      icon: <Star size={20} />,
      price: "89,999",
      features: [
        { text: "One Yealry or Toll-free number", included: true },
        { text: "Eligible for one IVR", included: true },
        { text: "Pro Desk phone", included: true },
        { text: "One year free subscription", included: true },
        { text: "Subscription after first year ₦ 25,000/year", included: true },
        {
          text: "Free CUG for all internally connected phones",
          included: true,
        },
      ],
    },
    {
      badge: "Premium",
      icon: <Trophy size={20} />,
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
          text: "Free CUG for all internally connected phones",
          included: true,
        },
      ],
    },
  ];

  return (
    <section
      style={{
        backgroundImage: "url(/images/PriceSection.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-28 px-8 flex items-center"
    >
      <div className="md:container md:mx-auto w-full ">
        <div className=" flex md:items-center justify-between gap-12 flex-col lg:flex-row">
          {/* Left Side - Text Content */}
          <div className="text-white ">
            <h1 className="text-3xl md:text-5xl font-inter lg:text-6xl font-bold mb-2 md:mb-6">
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
          <div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white md:w-[380px] min-h-[561px] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
                >
                  {/* Badge */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      {plan.icon}
                    </div>
                    <span className="text-[16px] font-semibold text-gray-600">
                      {plan.badge}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-4xl font-inter font-[600] ">
                      ₦ {plan.price}
                    </div>
                  </div>

                  {/* Buy Now Button */}
                  <Button className="w-full py-3 mb-6 bg-gradient-to-t from-[#007DFE] to-[#FFFFFF] text-white text-sm font-semibold  hover:from-blue-700 hover:to-blue-600 border-1 rounded-[5px] from-100%">
                    Buy Now
                  </Button>

                  {/* Features List */}
                  <div className="space-y-3 flex flex-col justify-evenly gap-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <CheckCircle2
                            className={`w-5 h-5 ${
                              feature.included
                                ? "text-gray-700"
                                : "text-gray-300"
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
            <div className="text-center mt-12">
              <p className="text-blue-200 text-sm">
                Terms and conditions apply
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
      </div>
    </section>
  );
};

export default DeskphonesPricing;
