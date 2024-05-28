import React from "react";
import LottieAnimation from "./LottieAnimation";
import Cta from "./CTA";

const Hero = ({ heading, subheading, description, animationurl, imageUrl }) => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 w-full sm:px-36 p-4 font-poppins py-10">
      <div className=" md:text-left flex flex-col gap-4 col-span-1">
        <h4 className="text-[#0066FC] text-2xl md:text-2xl font-poppins ">
          <strong>{heading}</strong>
        </h4>
        <h1 className="text-[46px] text-[#05195F] font-semibold md:leading-relaxed tracking-wide">
          {subheading}
        </h1>
        <p className="text-[18px] text-[#444444] tracking-wider font-inter leading-loose">
          {description}
        </p>
        <div className="w-full">
          <Cta title="Get Started" className="" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        {animationurl ? (
          <LottieAnimation imageurl={animationurl} />
        ) : (
          imageUrl && <img src={imageUrl} alt="Illustration" className="w-full h-auto" />
        )}
      </div>
    </div>
  );
};
 
export default Hero;
 