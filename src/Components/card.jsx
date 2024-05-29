import React from 'react';


const Card = ({ title, imageSrc, altText, subtitle, titleColor,Buttontext, Icon }) => {
  const titleStyle = {
    color: titleColor || '#05195F', // Default title color if not provided
  };

  return (
    <div className="bg-[#F8F8F8] rounded-lg flex flex-col items-center w-full  px-3 py-6 ">
      <img src={imageSrc} alt={altText} className="w-[112px] h-auto object-cover pt-6" />
      <div className=" text-center">
        <h2 className="text-[30px] font-poppins font-semibold py-[3px] text-blue-950" style={titleStyle}>
          {title}
        </h2>
        <p className="text-gray-500 text-lg font-inter">
          {subtitle}
        </p>
        <button className='text-[#F40356] font-bold flex w-full gap-1 justify-center items-end py-4'>{Buttontext} {Icon}</button>
      </div>
    </div>
  );
};



export default Card;

