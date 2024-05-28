import React, { useState } from "react";
import IdeasCard from "./IdeasCard";
import Cta from "./CTA";

const Ideas = ({ heading }) => {
  const [selectedCard, setSelectedCard] = useState("ICP");

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const cardsData = [
    {
      key: "ICP",
      title: "Define your ICP",
      description:
        "Give us a few details, and we’ll ensure laser focus on only your most promising prospects.",
    },
    {
      key: "campaign",
      title: "Design your campaign",
      description:
        "You confirm the number of leads, budget, and other essential criteria. We’ll get it all set up.",
    },
    {
      key: "content",
      title: "Distribute your content",
      description:
        "You provide your best content. We’ll make sure it gets to the right people on the right channels.",
    },
    {
      key: "leads",
      title: "Get your leads",
      description:
        "We deliver opt-in leads ready for your nurture programs. You give yourself a big high five.",
    },
  ];

  const renderContent = (key) => {
    switch (key) {
      case "ICP":
        return (
          <>
            <img
              src="https://demandscience.com/wp-content/uploads/2023/02/define-your-icp.svg"
              alt=""
              className="mx-auto w-[450px] pt-10"
            />
            <p className="text-[18px] font-inter tracking-wider leading-relaxed pt-[100px] text-left text-gray-500 pb-2">
              We layer your customer profile with multiple types of intent data
              to get a more complete picture of who to target. Tap into your
              specific market with us!
            </p>
            <p className="text-[18px] font-inter tracking-wider leading-relaxed text-left text-gray-500 pb-2">
              DemandScience has built a global audience of in-market B2B
              technology buyers with enriched firmographic, demographic, and
              technographic data.
            </p>
          </>
        );
      case "campaign":
        return (
          <>
            <img
              src="https://demandscience.com/wp-content/uploads/2023/02/design-your-campaign.svg"
              alt=""
              className="mx-auto w-[450px]"
            />
            <p className="text-[18px] font-inter tracking-wider leading-relaxed pt-[80px] text-left text-gray-500 pb-2">
              Our team will collaborate with you to create a tailored campaign
              strategy that aligns with your goals and objectives. We'll then
              execute the campaign across various channels to maximize its reach
              and effectiveness.
            </p>
            <p className="text-[18px] font-inter tracking-wider leading-relaxed text-left text-gray-500 pb-2">
              With our expertise in digital marketing, we ensure your campaign
              delivers results and generates high-quality leads for your
              business.
            </p>
          </>
        );
      case "content":
        return (
          <>
            <img
              src="https://demandscience.com/wp-content/uploads/2023/02/serve-your-content.svg"
              alt=""
              className="mx-auto w-[450px]"
            />
            <p className="text-[18px] font-inter tracking-wider leading-relaxed pt-[58px] text-left text-gray-500 pb-2">
              Our content distribution platform allows you to reach your target
              audience through multiple channels, including social media, email
              marketing, and content syndication.
            </p>
            <p className="text-[18px] font-inter tracking-wider leading-relaxed text-left text-gray-500 pb-2">
              We'll work with you to optimize your content for each channel and
              ensure maximum engagement and conversion rates.
            </p>
          </>
        );
      case "leads":
        return (
          <>
            <img
              src="https://demandscience.com/wp-content/uploads/2023/02/get-your-leads.svg"
              alt=""
              className="mx-auto w-[450px]"
            />
            <p className="text-[18px] font-inter tracking-wider leading-relaxed pt-[58px] text-left text-gray-500 pb-2">
              Our lead generation service provides you with high-quality,
              targeted leads that are ready to convert.
            </p>
            <p className="text-[18px] font-inter tracking-wider leading-relaxed text-left text-gray-500 pb-2">
              We use advanced targeting techniques to identify and reach your
              ideal audience, ensuring maximum ROI for your campaigns.
            </p>
            <p className="text-[18px] font-inter tracking-wider leading-relaxed text-left text-gray-500 pb-2">
              With our lead generation solutions, you can focus on nurturing and
              converting leads, while we take care of finding and qualifying
              them for you.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-8 sm:w-[75%] mx-auto px-[3px]">
      <h2 className="text-center font-poppins text-[#05195F] text-[38px] font-semibold mb-8">
        {heading}
      </h2>
      <p className="text-center font-inter text-[#403F3F] text-[18px] mb-6">
        Content Syndication turns your best content into your best leads ever.
      </p>
      <div className="flex justify-center mb-8">
        <Cta title="Get Started"/>
      </div>
      <div className="grid sm:grid-cols-2">
        <div className="col-span-1">
          {cardsData.map((card) => (
            <React.Fragment key={card.key}>
              <IdeasCard
                title={card.title}
                description={card.description}
                selected={selectedCard === card.key}
                onClick={() => handleCardClick(card.key)}
              />
              {selectedCard === card.key && (
                <div className="block sm:hidden my-4">
                  <div className="bg-white p-6 rounded-lg">
                    {renderContent(card.key)}
                  </div>
                </div>
              )}
              <div className="my-4" />
            </React.Fragment>
          ))}
        </div>
        <div className="hidden sm:block col-span-1">
          <div className="bg-white p-6 rounded-lg">
            {renderContent(selectedCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
