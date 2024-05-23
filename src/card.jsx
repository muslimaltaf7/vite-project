import React from 'react';

const Card = () => {
  const Card = ({ title, imageSrc, altText, subtitle, titleColor }) => {
    const titleStyle = {
      color: titleColor || '#05195F', // Default title color if not provided
    };

    return (
      <div className="bg-[#F8F8F8] shadow-md rounded-lg flex flex-col items-center w-80 h-100">
        <img src={imageSrc} alt={altText} className="w-40 h-54 object-cover pt-6" />
        <div className="p-6 text-center">
          <h2 className="text-[30px] font-poppins font-semibold py-[3px] text-blue-950" style={titleStyle}>
            {title}
          </h2>
          <p className="text-gray-500 text-lg font-inter">
            {subtitle}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center py-24">
      <h1 className="text-[36px] font-semibold mb-11 text-center font-poppins" style={{ color: '#05195F' }}>
        Campaigns that fill the entire funnel.
      </h1>
      <div className="w-full flex flex-col justify-center items-center bg-white rounded-lg p-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Accurate ICP"
            imageSrc="https://demandscience.com/wp-content/uploads/2023/03/accurate-icp-1.png"
            altText="Accurate ICP"
            subtitle="Reach your target audience withfour layers of intent data."
            titleColor="#05195F"
          />
          <Card
            title="Increased ROI"
            imageSrc="https://demandscience.com/wp-content/uploads/2023/02/increased-roi-1.png"
            altText="Increased ROI"
            subtitle="Get up to 12x ROI compared to the competition."
            titleColor="#05195F"
          />
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

export default Card;

