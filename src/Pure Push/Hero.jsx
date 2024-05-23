import React from 'react'
import LottiePlayer from "./LottiePlayer";

const PurePush = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white rounded-lg p-4">
    <div className="grid lg:grid-cols-2 md:grid-cols-1 w-[75%] mx-auto font-poppins py-10">
    <div className=" md:text-left flex flex-col gap-4 col-span-1">
      <h4 className="text-[#0066FC] text-2xl md:text-2xl font-poppins ">
        <strong>PurePush</strong>
      </h4>
      <h1 className="text-[46px] text-[#05195F] font-semibold md:leading-relaxed tracking-wide" >
      Turn your leads into <br /> buyers, faster.
      </h1>
      <p className="text-[18px] text-[#444444] tracking-wider font-inter leading-loose">
      PurePush provides you with mid and bottom funnel prospects who are closer to the close.
      </p>
      <button className="bg-[#CC0047] font-semibold text-[18px] md:text-xl text-white py-2 px-8 md:px-10 rounded-full w-fit">
        Get Started
      </button>
    </div>

    <div className="w-full md:w-auto ">
      <LottiePlayer />
    </div>
  </div>
  </div>
  )
}

export default PurePush
