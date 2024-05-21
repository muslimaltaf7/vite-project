import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

function LottieAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch('https://lottie.host/05c80f31-613b-4cf8-8021-a737bf99f1c1/4X2fWr6aBb.json');
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
    <div >
      {animationData ? (
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400} 
        />
      ) : (
        <p>Loading animation...</p>
      )}
    </div>
  );
}

export default LottieAnimation;
