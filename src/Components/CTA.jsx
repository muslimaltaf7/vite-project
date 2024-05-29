import React, { useState } from "react";
 
const Cta = ({ title, icon, hoverIcon, bgColor, textColor }) => {
  const [isHovered, setIsHovered] = useState(false);
 
  return (
    <button
    className="bg-[#CC0047] font-semibold text-[18px] md:text-xl text-white py-2 px-8 md:px-10 rounded-full w-full sm:w-fit flex items-center justify-center border border-red-500"
      style={{ backgroundColor: bgColor, color: textColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
      <span className="ml-2">
        {isHovered ? hoverIcon : icon}
      </span>
    </button>
  );
};
 
export default Cta;