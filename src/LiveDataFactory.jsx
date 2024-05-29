import React from 'react';
import Lottie from 'react-lottie-player';
import animationDataDesktop from '/public/animationdesktop.json';
import animationDataMobile from '/public/animationmobile.json';

const LiveDataFactory = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold mb-8">
          Our Live Data Factory produces your best, most accurate contacts.
        </h2>
        <div className="hidden md:block">
          <Lottie
            loop
            animationData={animationDataDesktop}
            play
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="block md:hidden">
          <Lottie
            loop
            animationData={animationDataMobile}
            play
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="h-12"></div>
      </div>
    </div>
  );
};

export default LiveDataFactory;
