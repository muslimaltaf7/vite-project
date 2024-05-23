import React from "react";

const ABMHero = () => {
  return (
    <div className="grid lg:grid-cols-2 mt-16 md:grid-cols-2 w-[75%] mx-auto font-poppins">
      <div className="md:text-left flex flex-col gap-4 col-span-1">
        <h4 className="text-[#0066FC] text-2xl md:text-2xl font-poppins ">
          <strong>ABM Display</strong>
        </h4>
        <h1 className="text-[46px] text-[#05195F] font-semibold md:leading-relaxed tracking-wide">
          Move leads forward with ABM Display.
        </h1>
        <p className="text-[18px] text-[#444444] tracking-wider font-inter leading-loose">
          Accelerate your growth with targeted ads to the accounts you really
          want.
        </p>
        <button className="bg-[#CC0047] font-semibold text-[18px] md:text-xl text-white py-2 px-8 md:px-10 rounded-full w-fit">
          Get Started
        </button>
      </div>

      <div className="w-full">
        <img src=".\public\abm-4.svg" alt="Hero Image" className="w-full" />
      </div>
    </div>
  );
};

export default ABMHero;
