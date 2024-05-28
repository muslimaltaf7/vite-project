import React from "react";
import LottieAnimation from "./LottieAnimation";
import Cta from "./CTA";

const Animatedtool = ({ title, description }) => {
  return (
    <div className="grid lg:grid-cols-2 w-full py-12 place-items-center gap-2 lg:gap-0">
      <div className="w-full">
        <LottieAnimation imageurl="https://lottie.host/05c80f31-613b-4cf8-8021-a737bf99f1c1/4X2fWr6aBb.json" />
      </div>
      <div className="w-full flex flex-col justify-between gap-4 py-4">
        <h2 className="text-[38px] font-poppins font-bold text-blue-900">
          {title}
        </h2>
        <p className="text-[18px] font-inter tracking-wider leading-relaxed text-gray-700">
          {description}
        </p>
        <Cta title="Download Now" />
      </div>
    </div>
  );
};

export default Animatedtool;
