import React from "react";
import Lottie from "./Lottie";

const Leads = ({ Heading1, Heading2, description1, description2 }) => {
  return (
    <div>
      <h1 className="text-[#05195F] text-center text-4xl font-semibold font-poppins md py-12">
        Choose the level of leads that fit your goals.
      </h1>
      <div className="grid lg:grid-cols-1 w-[75%] xl:grid-cols-2 mx-auto font-poppins py-10">
        <div className="md:text-left order-last xl:order-first flex flex-col gap-4">
          <div>
            <h4 className="text-[#05195F] text-2xl md:text-4xl font-poppins font-bold">
              <strong>{Heading1}</strong>
            </h4>
            <p className="text-[18px] text-[#444444] tracking-wider font-inter leading-relaxed py-5">
              {description1}
            </p>
          </div>
          <div>
            <h4 className="text-[#05195F] text-2xl md:text-4xl font-poppins font-bold">
              <strong>{Heading2}</strong>
            </h4>
            <p className="text-[18px] text-[#444444] tracking-wider font-inter leading-relaxed py-5">
              {description2}
            </p>
          </div>
        </div>
        <div className="w-full md:w-auto  md:order-first lg:order-first ">
          <Lottie />
        </div>
      </div>
    </div>
  );
};

export default Leads;
