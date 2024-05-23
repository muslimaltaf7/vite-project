
import React from 'react';
 
const Card = () => {
  const titleStyle = {
    color: '#05195F',
  };
 
  return (
    <div className="flex flex-col justify-center items-center py-12">
        <h1 className="text-center text-[36px] font-semibold font-poppins" style={titleStyle}>
        Get leads that are prepped and <br /> ready for you.
        </h1>

        <p className="text-center text-[18px] text-[#444444] font-inter leading-relaxed py-4">
        PurePush asks the questions to identify more qualified leads with a higher <br />probability of making a purchase.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  <div className=" bg-[#F8F8F8] rounded-md shadow-sm px-6 py-10">
    <div className="text-center">
      <img className="mx-auto w-3/4" src="https://demandscience.com/wp-content/uploads/2023/02/right-person2-1.svg" alt="Right person"/>
      <h3 className=" text-3xl font-semibold text-[#05195F] leading-relaxed">Right person</h3>
      <div className="product-suite-description mt-2">
      <p className="w-full md:w-72 mx-auto text-[#707070] leading-relaxed tracking-wider font-inter text-[18px] ">Target way beyond ICP to get to people with authority and budget to do business.</p>
      </div>
    </div>
  </div>

  <div className="bg-[#F8F8F8] rounded-md shadow-sm px-6 py-10">
    <div className=" text-center">
      <img className="mx-auto w-3/4" src="https://demandscience.com/wp-content/uploads/2023/02/right-data2-1.svg" alt="Right data"/>
      <h3 className="text-3xl font-semibold text-[#05195F] leading-relaxed">Right data</h3>
      <div className="product-suite-description mt-2">
        <p className='w-full md:w-72 mx-auto text-[#707070] leading-relaxed font-inter text-[18px] '>Enrich your CRM in real time with accurate, high-quality data.</p>
      </div>
    </div>
  </div>

  <div className=" p-4 bg-[#F8F8F8] rounded-md shadow-sm px-6 py-10">
    <div className="text-center">
      <img className="mx-auto w-3/4" src="https://demandscience.com/wp-content/uploads/2023/02/right-time2-1.svg" alt="Right time"/>
      <h3 className="text-3xl font-semibold text-[#05195F] leading-relaxed">Right time</h3>
      <div className="w-full md:w-72 mx-auto text-[#707070] leading-relaxed  font-inter text-[18px]">
        <p>Meet the customer with a need for your product or service now, not <br />later.</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};
 
export default Card;
