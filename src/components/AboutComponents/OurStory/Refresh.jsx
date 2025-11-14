import React from "react";
import { assets } from "../../../assets/assets";
import Filteration from "./Filteration";

const Refresh = () => {
  return (
    <>
    <div className="w-full bg-[#145cab] flex flex-col md:flex-row justify-evenly items-center px-6 md:px-20 py-10 md:py-0 mb-2">
      {/* Left Side */}
      <div className="flex flex-col md:flex-row items-center text-center md:text-left md:w-1/2 space-y-4 md:space-y-0">
        <img
          src={assets.drop}
          alt="water-drop"
          className="w-[90px] md:w-[120px] mb-4 md:mb-0 md:mr-5"
        />
        <h2 className="text-white text-2xl md:text-4xl font-bold leading-snug">
          A Sip Of Refreshment,<br />A Taste Of Richness.
        </h2>
      </div>

      {/* Right Side */}
      <div className="mt-6 md:mt-0 md:w-auto">
        <img
          src={assets.man}
          alt="person"
          className="w-[300px] md:w-[300px] object-contain"
        />
      </div>
    </div>
    <Filteration/>
          </>
  );
};

export default Refresh;
