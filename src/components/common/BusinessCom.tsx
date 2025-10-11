import React from "react";
import { Button } from "../ui/button";

const BusinessCom = () => {
  return (
    <div className="bg-[#0064CB] relative">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/BG.svg"
        alt="Business Communication"
      />

      <div className="flex flex-col items-center text-center py-16 px-4 relative z-10 max-w-7xl mx-auto">
        <h2 className="font-inter text-[24px] md:text-[48px] text-white font-[700] max-w-md md:max-w-2xl mx-auto leading-[1.2] text-center pt-20">
          Ready to Transform Your Business Communication?
        </h2>
        <p className="mt-4 text-white max-w-md text-center">
          Take the next step toward smarter, more reliable customer
          interactions.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="outline" asChild>
            <a href="https://wiki.ccaas.intarvas.com" target="_blank" rel="noopener noreferrer">Explore Services</a>
          </Button>
          <Button variant="hero" asChild>
            <a href="https://api.ccaas.intarvas.com" target="_blank" rel="noopener noreferrer">Request Demo</a>
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <img
          className="w-full h-auto"
          src="/images/CommDashboard.png"
          alt="Business Communication Illustration"
        />
      </div>
    </div>
  );
};

export default BusinessCom;
