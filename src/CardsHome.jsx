import React from "react";
import Card from "./Card";

const CardsHome = () => {
  const products = [
    {
      href: "/products/pure-syndication",
      imgSrc:
        "https://demandscience.com/wp-content/uploads/2023/02/content-syndication-1.svg",
      title: "PureSyndication",
      description: "Use the content you have to get the leads that you want.",
    },
    {
      href: "/products/pure-push",
      imgSrc:
        "https://demandscience.com/wp-content/uploads/2023/03/pure-push.svg",
      title: "PurePush",
      description:
        "Connect with highly-qualified leads who are closer to purchase.",
    },
    {
      href: "/products/abm-display",
      imgSrc:
        "https://demandscience.com/wp-content/uploads/2023/02/abm-display-advertising-1.svg",
      title: "ABM Display",
      description:
        "Get the right ads to in-market buyers at your dream accounts.",
    },
    {
      href: "/products/account-intelligence",
      imgSrc:
        "https://demandscience.com/wp-content/uploads/2023/02/prospect-data-1.svg",
      title: "Account Intelligence",
      description:
        "Transform your marketing with precision insights and targeting.",
    },
  ];

  return (
    <div className="container w-full mx-auto p-4">
      <div className="container w-full mx-auto p-4">
        <div className="text-center w-full">
          <h2
            className="text-3xl text-[#05195F] font-semibold font-poppins tracking-wider leading-10"
            id="h-optimized-roi-unrivaled-results-demand-generation-solutions-that-deliver"
          >
            Optimized ROI, Unrivaled Results. Demand Generation<br/> Solutions that
            Deliver.
          </h2>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <Card/>
      </div>
    </div>
  );
};

export default CardsHome;
