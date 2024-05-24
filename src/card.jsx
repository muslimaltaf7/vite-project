import React from 'react';

const Card = ({ title, imageSrc, altText, subtitle, titleColor }) => {
  const titleStyle = {
    color: titleColor || '#05195F', // Default title color if not provided
  };

  return (
    <div className="bg-[#F8F8F8] shadow-md rounded-lg flex flex-col items-center w-80 h-100">
      <img src={imageSrc} alt={altText} className="w-40 h-54 object-cover pt-6" />
      <div className="p-6 text-center">
        <h2 className="text-[30px] font-poppins font-semibold py-[3px] text-blue-950" style={titleStyle}>
          {title}
        </h2>
        <p className="text-gray-500 text-lg font-inter">
          {subtitle}
        </p>
      </div>
    </div>
  );
};



export default Card;

