import React from 'react';
import LottieAnimation from './LottieAnimation';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center space-y-8 md:space-y-0 md:space-x-8 mt-14 px-4 md:px-16 lg:px-16 sm:px-16">
      <div className=" md:text-left space-y-4  lg:w-2/5 xl:w-1/3">
        <h4 className="text-[#0066FC] font-bold text-xl md:text-2xl font-poppins ">
          <strong>Content Syndication</strong>
        </h4>
        <h1 className="text-5xl font-bold text-[#05195F] leading-snug md:leading-relaxed">
          Get leads that <br /> convert with content syndication.
        </h1>
        <p className="text-lg md:text-xl text-[#444444] tracking-wide md:tracking-wider sm:text-base">
          Content Syndication delivers high-quality opt-in leads for your campaigns.
        </p>
        <button className="bg-[#CC0047] font-bold text-lg md:text-xl text-white py-2 px-8 md:px-12 rounded-full">
          Get Started
        </button>
      </div>
     
        <div className="max-w-full">
          <LottieAnimation />
        </div>
      
    </div>
  );
};

export default Hero;
