import React from 'react';
import LottieAnimation from './LottieAnimation';

const SyndicationSection = () => {
  return (
    <div className="w-[80%] mx-auto ">
      {/* First Section */}
      <div className="grid lg:grid-cols-2 w-full place-items-center py-12">
        <div className="w-full flex flex-col gap-8">
          <h2 className="text-[38px] font-poppins font-bold text-blue-900">
            Capture qualified leads that<br className="hidden md:block"/> keep on coming.
          </h2>
          <p className="text-[18px] font-inter tracking-wider leading-relaxed text-gray-700 ">
            Our Quickstart Guide explains the benefits of using content<br className="hidden md:block"/> syndication and how to choose the right partner (wink-wink).
          </p>
          <button className="bg-[#CC0047] w-fit font-semibold font-inter text-[18px] text-white px-[36px] py-[11px] rounded-full">
            Download now
          </button>
        </div>
        <div className="w-full flex justify-center">
          <img src="/images/capture-qualified-leads.svg" alt="Hands on a laptop" className='h-[500px] w-[700]' />
        </div>
      </div>

      {/* Second Section */}
      <div className="grid lg:grid-cols-2 w-full py-12 place-items-center">
        <div className="w-full">
          <LottieAnimation />
        </div>
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-[38px] font-poppins font-bold text-blue-900">
            Let's do the math on content syndication ROI.
          </h2>
          <p className="text-[18px] font-inter tracking-wider leading-relaxed text-gray-700">
            Use our online calculator to explore the ROI potential of syndicating your content.
          </p>
          <button className="bg-[#CC0047] w-fit font-semibold font-inter text-[18px] text-white px-[36px] py-[11px] rounded-full">
            Calculate now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SyndicationSection;
