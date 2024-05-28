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

const ContentSyndication = () => {
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
      title: "How does content syndication work?",
      content:
        "Content syndication refers to the strategic republishing of content to expose it to a much larger audience in order to educate, engage, and qualify new leads. In a practical sense, that means your chosen piece of content, let’s say an ebook, is shared with the segment of our audience that matches your criteria. If viewers of that site, or members of that list are interested, they visit a landing page, fill out a form, and receive your content offer. You then receive a list of leads that you can nurture.",
    },
    {
      title: "What are the main advantages of content syndication?",
      content:
        "With content syndication, you can use existing content to attract in-market buyers in your chosen ICP. This helps you stretch the ROI of your content marketing efforts, and attract new leads at the top of the funnel.",
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
      <Hero
        heading="Content Syndication"
        subheading="Get leads that convert with content syndication."
        description="Content Syndication delivers high-quality opt-in leads for your campaigns."
      />
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
      <div className="py-8 px-4">
        <Ideas heading="Fill the funnel with your ideal buyers." />
      </div>
      <Carousel />
      <div className="py-12">
        <Intro
          title="We’ve got your back every step of  the way."
          description="Your dedicated Customer Experience Manager keeps open lines of communication for every campaign. That’s way more support than you’ll get from other high-intent lead vendors."
          image={image1}
        />
      </div>
      <Accordion heading="Content Syndication FAQ" items={accordionItems} />
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

export default ContentSyndication;
