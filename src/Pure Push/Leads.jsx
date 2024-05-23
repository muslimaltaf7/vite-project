import React from 'react';
import Lottie from "./Lottie";

const Leads = () => {
  return (
    <div>     
      <h1 className="text-[#05195F] text-center text-4xl font-semibold font-poppins md py-12">
        Choose the level of leads that fit your goals.
      </h1>
      <div className="grid lg:grid-cols-1 w-[75%] xl:grid-cols-2 mx-auto font-poppins py-10">
        <div className="md:text-left order-last xl:order-first flex flex-col gap-4">
          <div>
            <h4 className="text-[#05195F] text-2xl md:text-4xl font-poppins font-bold">
              <strong>HQL</strong>
            </h4>
            <p className="text-[18px] text-[#444444] tracking-wider font-inter leading-relaxed py-5">
              Accelerate toward your business goals with PurePush Highly Qualified Leads (HQL). Not only are these leads qualified by ICP and intent, they are further verified to have a need and a timeframe that fits with your parameters for a great lead.
            </p>
          </div>
          <div>
            <h4 className="text-[#05195F] text-2xl md:text-4xl font-poppins font-bold">
              <strong>HQL+</strong>
            </h4>
            <p className="text-[18px] text-[#444444] tracking-wider font-inter leading-relaxed py-5">
              Get HQL+ when you need to add another layer of qualification to ensure the person you’re talking to is not only showing buying signals, but also has the right budget and authority to do business with you now.
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
