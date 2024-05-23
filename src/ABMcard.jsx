
import React from 'react';
 
const ABMCard = () => {
  const titleStyle = {
    color: '#05195F',
  };
 
  return (
    <div className="flex flex-col justify-center items-center py-24">
       
      <div className="w-full flex flex-col justify-center items-center bg-white rounded-lg p-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#F8F8F8] shadow-md rounded-lg flex flex-col items-center">
            <img src="https://demandscience.com/wp-content/uploads/2023/02/prioritize-accounts1-1.svg" alt="Prioritize accounts" className="w-40 h-54 object-cover pt-11" />
            <div className="p-6 text-center">
              <h2 className="text-[30px] font-poppins font-semibold py-[3px] text-blue-950" style={{ color: '#05195F' }}>Prioritize accounts</h2>
              <p className="text-gray-500 text-[18px] font-inter">
              Identify and target your best <br /> accounts with intent data and<br />
                Confirmed Connect™ .
              </p>
            </div>
          </div>
          <div className="bg-[#F8F8F8] shadow-md rounded-lg flex flex-col items-center">
            <img src="https://demandscience.com/wp-content/uploads/2023/02/expand-your-reach1-1.svg" alt="Expand your reach" className="w-40 h-54 object-cover pt-11" />
            <div className="p-6 text-center">
              <h2 className="text-[30px] font-poppins font-semibold mb-4 text-blue-950" style={{ color: '#05195F' }}>Expand your reach</h2>
              <p className="text-gray-500 text-lg font-inter">
              Serve your ads to your ideal  <br />
               prospects with our identity-based <br />
              approach.
              </p>
            </div>
          </div>

          <div className="bg-[#F8F8F8] shadow-md rounded-lg flex flex-col items-center md:col-span-2 lg:col-span-1 md:mx-auto">
            <img src="https://demandscience.com/wp-content/uploads/2023/02/earn-big-roi1-1.svg" alt="Close deals faster" className="w-40 h-54 object-cover pt-11" />
            <div className="p-6 text-center">
              <h2 className="text-[30px] font-semibold mb-4 text-blue-950 font-poppins" style={{ color: '#05195F' }}>Close deals faster</h2>
              <p className="text-gray-500 text-lg font-inter">
              Accelerate consideration and   <br />
             boost visibility between sales <br />
               touchpoints.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
 
export default ABMCard;
