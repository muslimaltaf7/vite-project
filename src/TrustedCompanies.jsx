

import React from 'react';
import './index.css';

const TrustedCompanies = () => {
  const companyImageLinks = [
    'https://demandscience.com/wp-content/uploads/2023/02/google.svg',
    'https://demandscience.com/wp-content/uploads/2023/02/logmein.svg',
    'https://demandscience.com/wp-content/uploads/2023/02/ms.svg',
    'https://demandscience.com/wp-content/uploads/2023/02/cisco.svg',
    'https://demandscience.com/wp-content/uploads/2023/02/adobe.svg',
    'https://demandscience.com/wp-content/uploads/2023/02/aws.svg',
    'https://demandscience.com/wp-content/uploads/2023/02/google.svg',
    'https://demandscience.com/wp-content/uploads/2023/02/logmein.svg',
    'https://demandscience.com/wp-content/uploads/2023/02/ms.svg',
    'https://demandscience.com/wp-content/uploads/2023/02/cisco.svg',
    'https://demandscience.com/wp-content/uploads/2023/02/adobe.svg',
    'https://demandscience.com/wp-content/uploads/2023/02/aws.svg',
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold m-20 text-center font-poppins text-blue-900">
        Trusted by companies from startups to corporations
      </h1>
      <div className="marquee-container">
        <div className="marquee-content">
          {companyImageLinks.map((imageLink, index) => (
            <img
              key={index}
              src={imageLink}
              alt="Company Logo"
              className="marquee-item"
            />
          ))}
          {companyImageLinks.map((imageLink, index) => (
            <img
              key={`${index}-duplicate`}
              src={imageLink}
              alt="Company Logo"
              className="marquee-item"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
