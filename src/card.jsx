
import React from 'react';

const Card = () => {
  const titleStyle = {
    color: '#05195F',
  };

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 my-8 px-3">
        <div className="bg-[#F8F8F8] shadow-md rounded-lg flex flex-col items-center">
          {/* Adjusting the size of the image container */}
          <div className="w-full h-64">
            <img src="https://demandscience.com/wp-content/uploads/2023/03/accurate-icp-1.png" alt="Accurate ICP" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-4xl font-bold mb-4 text-blue-950" style={{ color: '#05195F' }}>Accurate ICP</h2>
            <p className="text-black text-lg">
              Reach your target audience with four <br />
              layers of intent data.
            </p>
          </div>
        </div>

        <div className="bg-[#F8F8F8] shadow-md rounded-lg flex flex-col items-center">
          <img src="https://demandscience.com/wp-content/uploads/2023/02/guaranteed-cpl-1-1.png" alt="Guaranteed CPL" className="w-54 h-64 object-cover" />
           <div className="p-6 text-center">
             <h2 className="text-4xl font-bold mb-4 text-blue-950" style={{ color: '#05195F' }}>Guaranteed CPL</h2>
             <p className="text-black text-lg">
               Know your cost per lead ahead of time <br />               so you can maximize your budget.
             </p>           </div>
         </div>

         <div className="bg-[#F8F8F8] shadow-md rounded-lg flex flex-col items-center">
           <img src="https://demandscience.com/wp-content/uploads/2023/02/increased-roi-1.png" alt="Increased ROI" className="w-54 h-64 object-cover" />
           <div className="p-6 text-center">
             <h2 className="text-4xl font-bold mb-4 text-blue-950" style={{ color: '#05195F' }}>Increased ROI</h2>
             <p className="text-black text-lg">               Get up to 12x ROI compared to the <br />
               competition.
             </p>
           </div>
         </div>
      </div>
    </div>
  );
};

export default Card;

