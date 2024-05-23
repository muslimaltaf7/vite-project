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

const ABMAccordion = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full bg-[#F8F8F8] flex justify-center py-8">
        <div className="w-full max-w-4xl p-4 mb-4" style={{ paddingTop: 'var(--wp--preset--spacing--70)', paddingBottom: 'var(--wp--preset--spacing--70)' }}>
          <h2 className="text-center text-3xl font-semibold text-[34px] text-[#05195F] my-8 font-poppins tracking-wide">ABM Display FAQ</h2>
          <AccordionItem
            title="What is DemandScience ABM Display?"
            content="DemandScience’s Account-Based Marketing (ABM) Display advertising service intelligently targets your high-priority accounts. The ABM advertising platform is intentionally designed for B2B, to help marketers reach the right businesses and the right buyers at the right time. It helps identify your best-fit accounts, activate ABM advertising engagement, and accelerate your pipeline. "
          />
          <AccordionItem
            title="Where are my ads served?"
            content="All ad campaigns are served on our brand-safe advertising platform. We have access to all major inventory sources across multiple exchanges including; Google Exchange, Rubicon, PubMatic, Open X, Xandr, and 33across. This allows us to deliver across thousands of content sites such as Business Insider, Forbes, Digital Trends, Wired, Washington Post, Yahoo News, Fox News, CNN.com, Weather.com, and so many more. While we seek to deliver ads on B2B content sites, we do not only serve on B2B sites. Our focus is on finding the buying committee where they choose to be online and delivering impressions at the account level, so you can measure your ad campaign’s influence in driving engagement across the account."
          />
          <AccordionItem
            title="How is DemandScience ABM Display different from competitors?"
            content="Our ABM ad campaigns leverage our unique data sets. The current platform you work with may not have their own first-party audience or their own intent data."
          />
          <AccordionItem
            title="Why use display for ABM?"
            content="Display advertising is a useful supplement to your account-based marketing program, enabling you to target meaningful offers to decision makers and influencers at your ideal organizations."
          />
          
        </div>
      </div>
    </div>
  );
};

export default ABMAccordion;