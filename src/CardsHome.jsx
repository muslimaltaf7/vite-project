import React from "react";
import Card from "./Card";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
  let arrow = <MdOutlineKeyboardArrowRight className="text-xl" />

  return (
    <div className="container w-full mx-auto p-4">
      <div className="container w-full mx-auto p-4">
        <div className="text-center w-full">
          <h2
            className="text-3xl text-[#05195F] font-semibold font-poppins tracking-wider leading-10"
            id="h-optimized-roi-unrivaled-results-demand-generation-solutions-that-deliver"
          >
            Optimized ROI, Unrivaled Results. Demand Generation
            <br /> Solutions that Deliver.
          </h2>
        </div>
      </div>
      <div className="grid w-[70%] mx-auto lg:grid-cols-3 gap-x-24 gap-y-6">
        <Card
          title="PureSyndication"
          imageSrc="https://demandscience.com/wp-content/uploads/2023/02/content-syndication-1.svg"
          subtitle="Use the content you have to get the leads that you want."
          Buttontext="See How"
          Icon={arrow}
        />
        <Card
          title="PurePush"
          imageSrc="https://demandscience.com/wp-content/uploads/2023/03/pure-push.svg"
          subtitle="Connect with highly-qualified leads who are closer to purchase"
          Buttontext="See How"
          Icon={arrow}
        />

        <Card
          title="ABM Display"
          imageSrc="https://demandscience.com/wp-content/uploads/2023/02/abm-display-advertising-1.svg"
          subtitle="Get the right ads to in-market buyers at your dream accounts."
          Buttontext="See How"
          Icon={arrow}
        />
        <div></div>

        <Card
          title="Account Intelligence"
          imageSrc="https://demandscience.com/wp-content/uploads/2023/02/prospect-data-1.svg"
          subtitle="Transform your marketing with precision insights and targeting."
          Buttontext="See How"
          Icon={arrow}
        />
      </div>
    </div>
  );
};

export default CardsHome;
