import React, { useState } from "react";

const Accordion = ({ heading, items }) => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-full bg-[#F8F8F8] flex justify-center py-8">
          <div
            className="w-full max-w-4xl p-4 mb-4"
            style={{
              paddingTop: "var(--wp--preset--spacing--70)",
              paddingBottom: "var(--wp--preset--spacing--70)",
            }}
          >
            <h2 className="text-center text-3xl font-semibold text-[34px] text-[#05195F] my-8 font-poppins tracking-wide">
              {heading}
            </h2>
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="border-t border-[#ACACAC]">
        <button
          className="flex justify-between items-center w-full py-4 px-4 text-left text-[21px] text-[#444444] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={isOpen ? "font-semibold" : ""}>{title}</span>
          <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#05195F]">
            <i
              className={`text-xs text-white fa ${
                isOpen ? "fa-minus" : "fa-plus"
              }`}
            ></i>
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 text-[18px] tracking-wider ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-700">{content}</div>
        </div>
      </div>
    </>
  );
};

export default Accordion;


