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

const Abm = () => {
  const cardData = [
    {
      title: "Accurate ICP",
      imageSrc:
        "https://demandscience.com/wp-content/uploads/2023/03/accurate-icp-1.png",
      altText: "Accurate ICP",
      subtitle: "Reach your target audience with four layers of intent data.",
      titleColor: "#05195F",
    },
    {
      title: "Increased ROI",
      imageSrc:
        "https://demandscience.com/wp-content/uploads/2023/02/increased-roi-1.png",
      altText: "Increased ROI",
      subtitle: "Get up to 12x ROI compared to the competition.",
      titleColor: "#05195F",
    },
    {
      title: "Guaranteed CPL",
      imageSrc:
        "https://demandscience.com/wp-content/uploads/2023/02/guaranteed-cpl-1-1.png",
      altText: "Guaranteed CPL",
      subtitle:
        "Know your cost per lead ahead of time so you can maximize your budget.",
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
      title: "What makes your content syndication campaigns unique?",
      content:
        "All of our syndication campaigns are built on the foundation of our intent engine, and powered by the Live Data Factory. This not only gives you access to the most accurate contact records, but helps us use intent data to serve your campaigns to the highest-quality leads possible.",
    },
    {
      title: "How does intent data impact a campaign?",
      content:
        "Using our intent engine, we can identify companies and buyers already showing interest across various topics. This enables us to serve the right content, to the right buyers, at the right time, helping to generate the highest quality leads possible.",
    },
    {
      title: "What are the value props of Content Syndication?",
      content:
        "Content Syndication is one of the most effective ways to grow your opted-in database. Its specialty is feeding the top of the funnel with high-quality leads ready for further nurture. We guarantee your CPL and number of leads upfront, and have a lead replacement policy if they fail to meet your ICP.",
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
          Campaigns that fill the entire funnel.
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-white rounded-lg p-2 sm:p-4">
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
      <ABMTitle />
      </div>
      <Carousel />
      <div className="py-12">
        <Intro
          title="We’ve got your back every step of  the way."
          description="Your dedicated Customer Experience Manager keeps open lines of communication for every campaign. That’s way more support than you’ll get from other high-intent lead vendors."
          image={image1}
        />
      </div>
      <ABMStrategy />
      <Accordion heading="ABM Display FAQ" items={accordionItems} />
      <div className="w-full sm:px-36 p-4" >
        <Tool
          title="Capture qualified leads that keep on coming."
          description="Our Quickstart Guide explains the benefits of using content syndication and how to choose the right partner (wink-wink)."
          image={image2}
        />
      </div>
      <div className="w-full sm:px-36 p-4">
        <AnimatedTool
          title="Let’s do the math on content syndication ROI."
          description="Use our online calculator to explore the ROI potential of syndicating your content."
        />
      </div>
      <Footer />
    </>
  );
};

export default Abm;
