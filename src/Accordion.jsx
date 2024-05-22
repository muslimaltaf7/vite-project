import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-[#ACACAC]">
      <button
        className="flex justify-between items-center w-full py-4 px-4 text-left text-[21px] text-[#444444] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={isOpen ? 'font-semibold' : ''}>{title}</span>
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#05195F]">
          <i className={`text-xs text-white fa ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 text-[18px] tracking-wider ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="p-4 text-gray-700">
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full bg-[#F8F8F8] flex justify-center py-8">
        <div className="w-full max-w-4xl p-4 mb-4" style={{ paddingTop: 'var(--wp--preset--spacing--70)', paddingBottom: 'var(--wp--preset--spacing--70)' }}>
          <h2 className="text-center text-3xl font-semibold text-[34px] text-[#05195F] my-8 font-poppins tracking-wide">Content Syndication FAQ</h2>
          <AccordionItem
            title="How does content syndication work?"
            content="Content syndication refers to the strategic republishing of content to expose it to a much larger audience in order to educate, engage, and qualify new leads. In a practical sense, that means your chosen piece of content, let’s say an ebook, is shared with the segment of our audience that matches your criteria. If viewers of that site, or members of that list are interested, they visit a landing page, fill out a form, and receive your content offer. You then receive a list of leads that you can nurture."
          />
          <AccordionItem
            title="What are the main advantages of content syndication?"
            content="With content syndication, you can use existing content to attract in-market buyers in your chosen ICP. This helps you stretch the ROI of your content marketing efforts, and attract new leads at the top of the funnel."
          />
          <AccordionItem
            title="What makes your content syndication campaigns unique?"
            content="All of our syndication campaigns are built on the foundation of our intent engine, and powered by the Live Data Factory. This not only gives you access to the most accurate contact records, but helps us use intent data to serve your campaigns to the highest-quality leads possible."
          />
          <AccordionItem
            title="How does intent data impact a campaign?"
            content="Using our intent engine, we can identify companies and buyers already showing interest across various topics. This enables us to serve the right content, to the right buyers, at the right time, helping to generate the highest quality leads possible."
          />
          <AccordionItem
            title="What are the value props of Content Syndication?"
            content="Content Syndication is one of the most effective ways to grow your opted-in database. Its specialty is feeding the top of the funnel with high-quality leads ready for further nurture. We guarantee your CPL and number of leads upfront, and have a lead replacement policy if they fail to meet your ICP."
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;