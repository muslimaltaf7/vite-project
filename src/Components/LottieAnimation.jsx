import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";

const LottieAnimation = ({ imageurl = null }) => {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (imageurl) {
      const fetchAnimationData = async () => {
        try {
          const response = await fetch(imageurl);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setAnimationData(data);
        } catch (error) {
          console.error("Error fetching animation data:", error);
          setError(error);
        }
      };

      fetchAnimationData();
    }
  }, [imageurl]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (!imageurl) {
    return null; // Render nothing if imageurl is not provided
  }

  return (
    <div>
      {error ? (
        <p>Error loading animation: {error.message}</p>
      ) : animationData ? (
        <Lottie
          options={defaultOptions}
          height="100%"
          width="100%"
        />
      ) : (
        <p>Loading animation...</p>
      )}
    </div>
  );
};

export default LottieAnimation;
