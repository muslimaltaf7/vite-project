import React from 'react';
import LottieAnimation from './LottieAnimation';

const SyndicationSection = () => {
  return (
    <div className="flex flex-col items-center space-y-16 py-16 px-4">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-blue-900">
            Capture qualified leads that<br></br> keep on coming.
          </h2>
          <p className="flex flex-col text-md  text-gray-700">
            Our Quickstart Guide explains the benefits of using content<br></br> syndication and how to choose the right partner (wink-wink).
          </p>
          <button className="bg-[#CC0047] text-white py-2 px-6 rounded-full">
            Download now
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <img src="\public\images\capture-qualified-leads.svg" alt="Hands on a laptop" className="w-72" />
        </div>
      </div>

      {/* Second Section */}
      
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
      <LottieAnimation/>
        <div className="text-center md:text-left md:w-1/2 space-y-4">
            
          <h2 className="text-3xl font-bold text-blue-900">
            Let's do the math on content syndication ROI.
          </h2>
          <p className="text-lg text-gray-700">
            Use our online calculator to explore the ROI potential of syndicating your content.
          </p>
          <button className="bg-[#CC0047] text-white py-2 px-6 rounded-full">
            Calculate now
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default SyndicationSection;
