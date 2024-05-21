import React from 'react';

const Card = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="bg-[#F8F8F8] shadow-md rounded-lg flex flex-col items-center h-96">
      <img src={imageSrc} alt={title} className="w-54 h-64 object-cover" />
      <div className="p-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-950" style={{ color: '#05195F' }}>{title}</h2>
        <p className="text-black text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
