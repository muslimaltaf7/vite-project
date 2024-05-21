import React from 'react';
import LottieAnimation from './LottieAnimation';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
  <div className="text-center md:text-left space-y-4">
  <h4 className="text-[#0066FC] font-bold text-[24px] font-poppins " ><strong>Content Syndication</strong></h4>
    <h1 className="text-[50px] font-bold text-[#05195F] leading-relaxed">
      Get leads that <br></br> convert with content <br />syndication.
    </h1>
    <p className="text-lg text-[21px] text-[#444444] tracking-wider">
    Content Syndication delivers high-quality opt-in leads for your <br />campaigns.
    </p>
    <button className="bg-[#CC0047] font-bold text-[20px] text-white py-2 px-12 rounded-full">
      Get Started
    </button>
  </div>
  <div className="kb-lottie-container kb-lottie-container29703_40b962-53">
    <LottieAnimation/>
  </div>
</div>


  );
};

export default Hero;
