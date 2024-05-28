import React from "react";
import Card from "./card";

const CardComponent = () => {
  return (
    
      <div className="w-full flex flex-col justify-center items-center bg-white rounded-lg p-4">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Accurate ICP"
            imageSrc="https://demandscience.com/wp-content/uploads/2023/03/accurate-icp-1.png"
            altText="Accurate ICP"
            subtitle="Reach your target audience with four layers of intent data."
            titleColor="#05195F"
          />
          <Card
            title="Increased ROI"
            imageSrc="https://demandscience.com/wp-content/uploads/2023/02/increased-roi-1.png"
            altText="Increased ROI"
            subtitle="Get up to 12x ROI compared to the competition."
            titleColor="#05195F"
          />
          <div className="flex justify-center md:col-span-2 lg:col-span-1">
            <Card
              title="Guaranteed CPL"
              imageSrc="https://demandscience.com/wp-content/uploads/2023/02/guaranteed-cpl-1-1.png"
              altText="Guaranteed CPL"
              subtitle="Know your cost per lead ahead of time so you can maximize your budget."
              titleColor="#05195F"
            />
          </div>
        </div>
      </div>
    
  );
};

export default CardComponent;
