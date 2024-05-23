
import React from 'react';
import CountUp from 'react-countup'; 

const MQL = () => {
  return (
    <div className="container mx-auto px-4 py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <div>
          <img src="\images\imageweb-1.webp" alt="Deliver MQLs" className="w-full " />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className="text-4xl text-[#05195F] font-poppins font-semibold mb-6 tracking-wider">Deliver the MQLs that <br/> convert faster.</h2>
          <div className=" text-[#05195F]  flex flex-col space-x-8 md:flex-row items-center justify-between md:justify-between">
            <div className=" text-center  border-r border-gray-300 last:border-r-0 px-4 mb-4 md:mb-0">
              <CountUp end={3} suffix="x" duration={0.6} className="text-5xl font-bold" />
              <div className="mt-2 text-xl font-semibold">
                MQL<br />Volume
              </div>
            </div>
            <div className="text-center border-r border-gray-300 last:border-r-0 px-4 mb-4 md:mb-0">
              <CountUp end={12} suffix="x" duration={0.4} className="text-5xl font-bold" />
              <div className="mt-2 text-xl font-semibold">
                Campaign<br />ROI
              </div>
            </div>
            <div className="text-center px-4">
              <CountUp end={77} suffix="%" duration={0.6} className="text-5xl font-bold" />
              <div className="mt-2 text-xl font-semibold">
                MQL to SQL<br />Conversion
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MQL;
