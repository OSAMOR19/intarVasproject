import React from "react";
import { Button } from "../ui/button";

const PbxFooter = () => {
  return (
    <section className="md:h-[80vh] p-20 md:p-36">
      <div className="container justify-between md:flex h-fit items-center">
        <div className="h-fit hidden md:block relative">
          <div className="md:w-[556px] md:h-[496px] bg-[#F6F6F6] overflow-visible rounded-[30px]"></div>

          <img
            src="/images/pbx_img.png"
            alt="PBX Illustration"
            width={250}
            className="absolute bottom-0 left-28 z-30"
          />
        </div>
        <div className="max-w-lg">
          <h2 className="md:text-[48px] font-inter leading-[1.1] font-[800] mb-2">
            Your PBX, everywhere you work
          </h2>
          <p>
            Access guides and APIs to set up, manage, and scale your virtual PBX
            across any device
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero">User Guides</Button>
            <Button variant="outline">API Docs</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PbxFooter;
