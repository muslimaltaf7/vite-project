import React from "react";
import Card from "./card";

const AbmCardComponent = () => {
  return (
    
      <div className="w-full flex flex-col justify-center items-center bg-white rounded-lg p-4">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Prioritize accounts"
            imageSrc="https://demandscience.com/wp-content/uploads/2023/02/prioritize-accounts1-1.svg"
            altText="Prioritize accounts"
            subtitle="Identify and target your best accounts with intent data and Confirmed Connect™ ."
            titleColor="#05195F"
          />
          <Card
            title="Expand your reach"
            imageSrc="https://demandscience.com/wp-content/uploads/2023/02/expand-your-reach1-1.svg"
            altText="Expand your reach"
            subtitle="Serve your ads to your ideal prospects with our identity-based approach."
            titleColor="#05195F"
          />
          <div className="flex justify-center md:col-span-2 lg:col-span-1">
            <Card
              title="Close deals faster"
              imageSrc="https://demandscience.com/wp-content/uploads/2023/02/earn-big-roi1-1.svg"
              altText="Close deals faster"
              subtitle="Accelerate consideration and boost brand visibility between sales touchpoints."
              titleColor="#05195F"
            />
          </div>
        </div>
      </div>
    
  );
};

export default AbmCardComponent;
