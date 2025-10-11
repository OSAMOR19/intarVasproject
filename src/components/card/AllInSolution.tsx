import React from "react";

const AllInSolutionCard = ({ icon, title, description, img }) => {
  return (
    <div className="md:w-[619px] min-h-[415px] bg-white border rounded-lg">
      <div className=" flex flex-col justify-between space-y-4 p-8 h-full ">
        <div className="flex flex-col items-start space-y-1">
          <span className="bg-[#DEEEFF] p-2 rounded">{icon}</span>
          <h3 className="font-inter font-semibold text-[24px]">{title}</h3>
          <p className="text-[16px] text-[#667085]">{description}</p>
        </div>
        <div className="block w-full overflow-hidden rounded-lg">
          <img src={img} alt={title} className="w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default AllInSolutionCard;
