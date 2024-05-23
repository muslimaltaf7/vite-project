import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';

function LottiePlayer() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch('https://lottie.host/d39761af-8d64-4de4-acf0-bf5ece21e075/NzfEXq2sOe.json');
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Error fetching animation data:', error);
      }
    };

    fetchAnimationData();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      {animationData ? (
          <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <p>Loading animation...</p>
      )}
    </div>
  );
}

export default LottiePlayer;
