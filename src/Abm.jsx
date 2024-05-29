import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Card from "./Components/card";
import Ideas from "./Components/Ideas";
import Carousel from "./Components/Carousel";
import Intro from "./Components/Intro";
import Accordion from "./Components/Accordion";
import Tool from "./Components/Tool";
import AnimatedTool from "./Components/AnimatedTool";
import Footer from "./Components/Footer"
import ABMTitle from "./Components/AbmComponents/ABMTitle";
import ABMStrategy from "./Components/AbmComponents/ABMStrategy";
import Title from "./Components/AbmComponents/Title";

const Abm = () => {
  const cardData = [
    {
      title: "Prioritize accounts",
      imageSrc:
        "https://demandscience.com/wp-content/uploads/2023/02/prioritize-accounts1-1.svg",
      altText: "Prioritize accounts",
      subtitle: "Identify and target your best accounts with intent data and Confirmed Connect™ .",
      titleColor: "#05195F",
    },
    {
      title: "Expand your reach",
      imageSrc:
        "https://demandscience.com/wp-content/uploads/2023/02/expand-your-reach1-1.svg",
      altText: "Expand your reach",
      subtitle: "Serve your ads to your ideal prospects with our identity-based approach.",
      titleColor: "#05195F",
    },
    {
      title: "Close deals faster",
      imageSrc:
        "https://demandscience.com/wp-content/uploads/2023/02/earn-big-roi1-1.svg",
      altText: "Close deals faster",
      subtitle:"Accelerate consideration and boost brand visibility between sales touchpoints.",
      titleColor: "#05195F",
      span: "md:col-span-2 lg:col-span-1",
    },
  ];

  const accordionItems = [
    {
      title: "What is DemandScience ABM Display",
      content:
        "DemandScience’s Account-Based Marketing (ABM) Display advertising service intelligently targets your high-priority accounts. The ABM advertising platform is intentionally designed for B2B, to help marketers reach the right businesses and the right buyers at the right time. It helps identify your best-fit accounts, activate ABM advertising engagement, and accelerate your pipeline. ",
    },
    {
      title: "Where are my ads served?",
      content:
        "All ad campaigns are served on our brand-safe advertising platform. We have access to all major inventory sources across multiple exchanges including; Google Exchange, Rubicon, PubMatic, Open X, Xandr, and 33across. This allows us to deliver across thousands of content sites such as Business Insider, Forbes, Digital Trends, Wired, Washington Post, Yahoo News, Fox News, CNN.com, Weather.com, and so many more. While we seek to deliver ads on B2B content sites, we do not only serve on B2B sites. Our focus is on finding the buying committee where they choose to be online and delivering impressions at the account level, so you can measure your ad campaign’s influence in driving engagement across the account.",
    },
    {
      title: "How is DemandScience ABM Display different from competitors?",
      content:
        "Our ABM ad campaigns leverage our unique data sets. The current platform you work with may not have their own first-party audience or their own intent data. ",
    },
    {
      title: "Why use display from ABM?",
      content:
        "Display advertising is a useful supplement to your account-based marketing program, enabling you to target meaningful offers to decision makers and influencers at your ideal organizations. ",
    },
   
  ];

  const image1 = "/images/all-the-support-you-need.svg";
  const image2 = "/images/capture-qualified-leads.svg";
  return (
    <>
      <NavBar />
      <div>
      <Hero
        heading="ABM Display"
        subheading="Move leads forward with ABM Display."
        description="Accelerate your growth with targeted ads to the accounts you really want."
        imageUrl="/abm-4.svg"
      />
      </div>
     
      <div className="flex flex-col justify-center items-center pt-24 pb-5 px-2">
        <h1
          className="text-[36px] font-semibold  text-center font-poppins"
          style={{ color: "#05195F" }}
        >
          {/* Campaigns that fill the entire funnel. */}
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-white rounded-lg p-2 sm:px-36 3xl:px-96 ">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`flex justify-center ${card.span ? card.span : ""}`}
            >
              <Card
                title={card.title}
                imageSrc={card.imageSrc}
                altText={card.altText}
                subtitle={card.subtitle}
                titleColor={card.titleColor}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pt-[80px]">
      <Title />
      </div>
      
      <div className="py-2 bg-gray-100">
        <Intro
          title="We’ve got your back every step of  the way."
          description="Your dedicated Customer Experience Manager keeps open lines of communication for every campaign. That’s way more support than you’ll get from other high-intent lead vendors."
          image={image1}
        />
      </div>
      <ABMStrategy />
      <Accordion heading="ABM Display FAQ" items={accordionItems} />
     
     
      <Footer />
    </>
  );
};

export default Abm;
