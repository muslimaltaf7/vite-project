import React, { useState } from "react";

function Ideas() {
  const [selectedCard, setSelectedCard] = useState("ICP");

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="py-8 sm:w-[75%] mx-auto px-[3px]">
      <h2 className="text-center font-poppins text-[#05195F] text-[38px] font-semibold mb-8">
        Fill the funnel with your ideal buyers.
      </h2>
      <p className="text-center font-inter text-[#403F3F] text-[18px] mb-6">
        Content Syndication turns your best content into your best leads ever.
      </p>
      <div className="flex justify-center mb-8">
        <a
          href="https://demandscience.com/contact/"
          className="bg-[#CC0047] text-white font-bold text-xl py-3 px-11 rounded-3xl mb-9 duration-300 hover:scale-105 ease-in-out"
        >
          Get Started
        </a>
      </div>
      <div className="grid sm:grid-cols-2">
        <div className="col-span-1  ">
          <div
            className={`bg-white p-6 shadow-md rounded-lg cursor-pointer hover:bg-gray-200 transition-shadow duration-300 ${
              selectedCard === "ICP"
                ? "border-blue-500 border-4 bg-blue-200"
                : ""
            }`}
            onClick={() => handleCardClick("ICP")}
          >
            <h3 className="text-[30px] font-poppins font-bold text-left text-[#05195f]">Define your ICP</h3>
            <p className="text-left text-[18px] font-inter py-2 text-[#444]">
              Give us a few details, and we’ll ensure laser focus on only your
              most promising prospects.
            </p>
          </div>
          <div className="my-4" />
          <div
            className={`bg-white p-6 shadow-md rounded-lg cursor-pointer hover:bg-gray-200 transition-shadow duration-300 ${
              selectedCard === "campaign"
                ? "border-blue-500 border-4 bg-blue-200"
                : ""
            }`}
            onClick={() => handleCardClick("campaign")}
          >
            <h3 className="text-[30px] font-poppins font-bold text-left text-[#05195f]">
              Design your campaign
            </h3>
            <p className="text-left text-[18px] font-inter py-2 text-[#444]">
              You confirm the number of leads, budget, and other essential
              criteria. We’ll get it all set up.
            </p>
          </div>
          <div className="my-4" />
          <div
            className={`bg-white p-6 shadow-md rounded-lg cursor-pointer hover:bg-gray-200 transition-shadow duration-300 ${
              selectedCard === "content"
                ? "border-blue-500 border-4 bg-blue-200"
                : ""
            }`}
            onClick={() => handleCardClick("content")}
          >
            <h3 className="text-[30px] font-poppins font-bold text-left text-[#05195f]">
              Distribute your content
            </h3>
            <p className="text-left text-[18px] font-inter py-2 text-[#444]">
              You provide your best content. We’ll make sure it gets to the
              right people on the right channels.
            </p>
          </div>
          <div className="my-4" />
          <div
            className={`bg-white p-6 shadow-md rounded-lg cursor-pointer hover:bg-gray-200 transition-shadow duration-300 ${
              selectedCard === "leads"
                ? "border-blue-500 border-4 bg-blue-200"
                : ""
            }`}
            onClick={() => handleCardClick("leads")}
          >
            <h3 className="text-[30px] font-poppins font-bold text-left text-[#05195f]">Get your leads</h3>
            <p className="text-left text-[18px] font-inter py-2 text-[#444]">
              We deliver opt-in leads ready for your nurture programs. You give
              yourself a big high five.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white p-6  rounded-lg">
            {selectedCard && (
              <>
                <div className="mt-4 text-center">
                  {selectedCard === "ICP" && (
                    <>
                      <img
                        src="https://demandscience.com/wp-content/uploads/2023/02/define-your-icp.svg"
                        alt=""
                        className="mx-auto w-[450px] pt-10"
                      />
                      <p className="text-[18px] font-inter tracking-wider leading-relaxed pt-[100px] text-left text-gray-500 pb-2">
                        We layer your customer profile with  multiple
                        types of intent data to get a more complete
                        picture of who to target. Tap into your specific market
                        with us!
                      </p>
                      <p className="text-[18px] font-inter  tracking-wider leading-relaxed  text-left text-gray-500 pb-2">
                        DemandScience has built a global audience of in-market
                        B2B technology buyers with enriched firmographic,
                        demographic, and technographic data.
                      </p>
                    </>
                  )}
                  {selectedCard === "campaign" && (
                    <>
                      <img
                        src="https://demandscience.com/wp-content/uploads/2023/02/design-your-campaign.svg"
                        alt=""
                        className="mx-auto w-[450px] "
                      />
                      <p className="text-[18px] font-inter  tracking-wider leading-relaxed pt-[80px] text-left text-gray-500 pb-2">
                        Our team will collaborate with you to create a <br />{" "}
                        tailored campaign strategy that aligns with your goals{" "}
                        <br /> and objectives. We'll then execute the campaign
                        across various <br />
                        channels to maximize its reach and effectiveness.
                      </p>
                      <p className="text-[18px] font-inter  tracking-wider leading-relaxed text-left text-gray-500 pb-2">
                        With our expertise in digital marketing, we ensure your
                        campaign delivers results and generates high-quality
                        leads for your business.
                      </p>
                    </>
                  )}
                  {selectedCard === "content" && (
                    <>
                      <img
                        src="https://demandscience.com/wp-content/uploads/2023/02/serve-your-content.svg"
                        alt=""
                        className="mx-auto w-[450px]"
                      />
                      <p className="text-[18px] font-inter  tracking-wider leading-relaxed pt-[58px] text-left text-gray-500 pb-2">
                        Our content distribution platform allows you to <br />
                        reach your target audience through multiple channels,{" "}
                        <br />
                        including social media, email marketing, and content
                        syndication.
                      </p>
                      <p className="text-[18px] font-inter  tracking-wider leading-relaxed text-left text-gray-500 pb-2">
                        We'll work with you to optimize your content <br />
                        for each channel and ensure maximum engagement and
                        conversion rates.
                      </p>
                    </>
                  )}
                  {selectedCard === "leads" && (
                    <>
                      <img
                        src="https://demandscience.com/wp-content/uploads/2023/02/get-your-leads.svg"
                        alt=""
                        className="mx-auto w-[450px]"
                      />
                      <p className="text-[18px] font-inter  tracking-wider leading-relaxed pt-[58px] text-left text-gray-500 pb-2">
                        Our lead generation service provides you with
                        high-quality, targeted leads that are ready to convert.
                      </p>
                      <p className="text-[18px] font-inter  tracking-wider leading-relaxed text-left text-gray-500 pb-2">
                        We use advanced targeting techniques to identify and
                        reach your ideal audience, ensuring maximum ROI for your
                        campaigns.
                      </p>
                      <p className="text-[18px] font-inter  tracking-wider leading-relaxed text-left text-gray-500 pb-2">
                        With our lead generation solutions, you can focus on
                        nurturing and converting leads, while we take care of
                        finding and qualifying them for you.
                      </p>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ideas;
