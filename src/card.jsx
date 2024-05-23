
import React from 'react';
 
const Card = () => {
  const titleStyle = {
    color: '#05195F',
  };
 
  return (
    <div className="flex flex-col justify-center items-center py-24">
        <h1 className="text-[36px] font-semibold mb-11 text-center font-poppins" style={titleStyle}>
          Campaigns that fill the entire funnel.
        </h1>
      <div className="w-full flex flex-col justify-center items-center bg-white rounded-lg p-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#F8F8F8] shadow-md rounded-lg flex flex-col items-center">
            <img src="https://demandscience.com/wp-content/uploads/2023/03/accurate-icp-1.png" alt="Accurate ICP" className="w-40 h-54 object-cover pt-11" />
            <div className="p-6 text-center">
              <h2 className="text-[30px] font-poppins font-semibold py-[3px] text-blue-950" style={{ color: '#05195F' }}>Accurate ICP</h2>
              <p className="text-gray-500 text-[18px] font-inter">
                Reach your target audience with four <br />
                layers of intent data.
              </p>
            </div>
          </div>
          <div className="bg-[#F8F8F8] shadow-md rounded-lg flex flex-col items-center">
            <img src="https://demandscience.com/wp-content/uploads/2023/02/increased-roi-1.png" alt="Increased ROI" className="w-40 h-54 object-cover pt-11" />
            <div className="p-6 text-center">
              <h2 className="text-[30px] font-poppins font-semibold mb-4 text-blue-950" style={{ color: '#05195F' }}>Increased ROI</h2>
              <p className="text-gray-500 text-lg font-inter">
                Get up to 12x ROI compared to the <br />
                competition.
              </p>
            </div>
          </div>

          <div className="bg-[#F8F8F8] shadow-md rounded-lg flex flex-col items-center md:col-span-2 lg:col-span-1 md:mx-auto">
            <img src="https://demandscience.com/wp-content/uploads/2023/02/guaranteed-cpl-1-1.png" alt="Guaranteed CPL" className="w-40 h-54 object-cover pt-11" />
            <div className="p-6 text-center">
              <h2 className="text-[30px] font-semibold mb-4 text-blue-950 font-poppins" style={{ color: '#05195F' }}>Guaranteed CPL</h2>
              <p className="text-gray-500 text-lg font-inter">
                Know your cost per lead ahead of time <br />
                so you can maximize your budget.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
 
export default Card;
