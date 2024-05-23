import React from 'react';
import Lottie from 'react-lottie-player';
import animationDesktop from '../public/animationdesktop.json';
import animationMobile from '../public/animationmobile.json'; // Update the path accordingly

const LiveDataFactory = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-poppins font-semibold tracking-wider mb-8">
          Our Live Data Factory produces your best, most accurate<br/> contacts.
        </h2>
        <div className="hidden md:block">
          <Lottie
            loop
            animationData={animationDesktop}
            play
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="block md:hidden">
          <Lottie
            loop
            animationData={animationMobile}
            play
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="h-12"></div>
      </div>
    </div>
  );
};

export default LiveDataFactory;
