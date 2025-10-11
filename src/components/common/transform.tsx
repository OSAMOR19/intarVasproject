import React from "react";

const Transform = () => {
  return (
    <div className="bg-black text-white py-20 px-4 relative ">
      <div className="max-w-7xl mx-[200px] flex flex-col gap-32">
        <p className="font-inter text-[30px] md:text-[48px] font-[800]  leading-[1.2] mb-[30px]">
          Transform your call centre.{" "}
          <span className="opacity-70">
            With IntarvAS, you can reduce escalations, improve business
            outcomes, and elevate the customer experience.
          </span>
        </p>
        <div className="flex flex-wrap gap-9 max-w-md">
          <span className="px-3 flex flex-col items-start  border-l-4 border-white">
            <span className="font-inter text-[48px] font-[700]">18%</span>
            <span className="font-inter text-[18px]">Increase in sales</span>
          </span>
          <span className="px-3 flex flex-col items-start  border-l-4 border-white">
            <span className="font-inter text-[48px] font-[700]">18%</span>
            <span className="font-inter text-[18px]">Increase in sales</span>
          </span>
          <span className="px-3 flex flex-col items-start  border-l-4 border-white">
            <span className="font-inter text-[48px] font-[700]">18%</span>
            <span className="font-inter text-[18px]">Increase in sales</span>
          </span>
          <span className="px-3 flex flex-col items-start  border-l-4 border-white">
            <span className="font-inter text-[48px] font-[700]">18%</span>
            <span className="font-inter text-[18px]">Increase in sales</span>
          </span>
        </div>
      </div>

      <div>
        <img
          src="/images/TransformIllustration.png"
          alt="Transform your call center"
          className="absolute bottom-0 right-0 w-[400px] h-auto"
        />
      </div>
    </div>
  );
};

export default Transform;
