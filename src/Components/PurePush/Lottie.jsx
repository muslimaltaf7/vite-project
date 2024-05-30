import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";

const LottieComponent = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(
          "https://lottie.host/d96b1b6f-92f3-4c4c-ab26-dd9b9a0e2c60/E7s0lDeKl6.json"
        );
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error fetching animation data:", error);
      }
    };

    fetchAnimationData();
  }, []);

  useEffect(() => {
    if (animationData) {
      const waitForLottieInteractive = setInterval(() => {
        let lottiePlayer = document.getElementById(
          "kb-lottie-player26533_fa5bd2-75"
        );
        if (typeof LottieInteractivity !== "undefined") {
          lottiePlayer.addEventListener("ready", () => {
            LottieInteractivity.create({
              player: lottiePlayer.getLottie(),
              mode: "scroll",
              actions: [
                {
                  visibility: [0, 1.0],
                  type: "play",
                },
              ],
            });
          });
          clearInterval(waitForLottieInteractive);
        }
      }, 125);

      return () => clearInterval(waitForLottieInteractive);
    }
  }, [animationData]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      {animationData ? (
        <Lottie options={defaultOptions} height="60%" width="55%" />
      ) : (
        <p>Loading animation...</p>
      )}
    </div>
  );
};

export default LottieComponent;
