
import React from 'react';

const ABMTitle = ({ sections }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-7  px-4">
      <div className="w-full max-w-screen-lg">
        {sections.map((section, index) => (
          // <div className="flex flex-col" key={index}>
          <div
          className={`flex flex-col ${section.bottomSpace ? 'mb-32' : ''}`}
          key={index}
        >
            <h2 className="text-[28px] font-semibold font-poppins text-center text-gray-700">
              {section.title}
            </h2>
            {section.showLine && <div className="h-1 bg-blue-500 my-8"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ABMTitle;





