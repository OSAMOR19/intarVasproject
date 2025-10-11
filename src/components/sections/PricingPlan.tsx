import React from "react";
import {
  Check,
  Award,
  Shield,
  TrendingUp,
  Calendar,
  Phone,
} from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic Level",
      icon: <Award className="w-6 h-6" />,
      price: "5,000",
      period: "/month",
      description: "Best for small businesses",
      userRange: "(min. 4 users)",
      popular: false,
      features: [
        { text: "Basic Cloud PBX functionality", included: true },
        { text: "Sales tools, per PBX", included: false },
        { text: "Call Center, per PBX", included: false },
        { text: "Call Statistics, per PBX", included: false },
        { text: "Auto-dialing option, per PBX", included: false },
        {
          text: "Call recording with one-month storage, per PBX",
          included: false,
        },
        { text: "CRM Integration / API, per PBX", included: false },
        { text: "Integration with Microsoft Teams", included: false },
        { text: "External IP-PBX Connector, per PBX", included: false },
      ],
    },
    {
      name: "Medium Enterprises",
      icon: <Shield className="w-6 h-6" />,
      price: "132,800",
      period: "/month",
      description: "Best for businesses with",
      userRange: "4-50 users",
      popular: true,
      features: [
        { text: "Basic Cloud PBX functionality", included: true },
        { text: "Sales tools, per PBX", included: true },
        { text: "Call Center, per PBX", included: true },
        { text: "Call Statistics, per PBX", included: true },
        { text: "Auto-dialing option, per PBX", included: true },
        {
          text: "Call recording with one-month storage, per PBX",
          included: true,
        },
        { text: "CRM Integration / API, per PBX", included: true },
        { text: "Integration with Microsoft Teams", included: true },
        { text: "External IP-PBX Connector, per PBX", included: true },
      ],
    },
    {
      name: "Large Enterprise",
      icon: <TrendingUp className="w-6 h-6" />,
      price: "115,300",
      period: "/month",
      description: "Best for businesses with",
      userRange: "50+ users",
      popular: false,
      features: [
        { text: "Basic Cloud PBX functionality", included: true },
        { text: "Sales tools, per PBX", included: true },
        { text: "Call Center, per PBX", included: true },
        { text: "Call Statistics, per PBX", included: true },
        { text: "Auto-dialing option, per PBX", included: true },
        {
          text: "Call recording with one-month storage, per PBX",
          included: true,
        },
        { text: "CRM Integration / API, per PBX", included: true },
        { text: "Integration with Microsoft Teams", included: true },
        { text: "External IP-PBX Connector, per PBX", included: true },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Flexible Plans for{" "}
            <span className="text-gray-400">Every Business</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the right package for your business needs — Start with a
            7-day free trial, no credit card required
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-blue-500 shadow-lg scale-105"
                  : "border border-gray-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-[#007DFE] text-white text-center py-2 font-medium text-sm flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Popular
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">₦ {plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {plan.description}{" "}
                    <span className="font-semibold">{plan.userRange}</span>
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors mb-8 ${
                    plan.popular
                      ? "bg-[#007DFE] text-white hover:brightness-110"
                      : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  Get Started
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex-shrink-0 ${
                          feature.included ? "text-gray-800" : "text-gray-300"
                        }`}
                      >
                        <Check className="w-5 h-5" strokeWidth={2.5} />
                      </div>
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>free trial on any package</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>free 2000 airtime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
