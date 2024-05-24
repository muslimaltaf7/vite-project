import React, { useState } from "react";
import ProductInformation from "./ProductInformation";
import PartnerSupport from "./PartnerSupport"
import EmployeeVerification from "./EmployeeVerification";

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("Product Information");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    
    <div className="grid lg:grid-cols-2 w-[77%] mx-auto font-poppins py-14 gap-10">
      <div className="md:text-left flex flex-col gap-6 py-24">
        <h1 className="text-[46px] text-[#05195F] font-semibold md:leading-relaxed tracking-wide">
          Get in touch about <br /> our products
        </h1>
        <p className="text-[18px] text-[#444444] tracking-wider font-inter leading-relaxed">
          A quick chat with us is the first step to getting you leads and
          driving ROI for your business.
        </p>
        <img
          src="/images/all-the-support-you-need.svg"
          alt="Support"
          className="mx-auto w-[550px]"
        />
      </div>
      <div className="flex bg-[#F8F8F8] items-center justify-center mb-4 rounded-xl border-2 border-black py-10">
        <div className=" sm:px-10 px-2 font-inter w-full">
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#05195F] ">
            How can we help you?
          </h2>
          <form>
            <div className="mb-4">
              <select
                className="w-full border-b border-b-black py-2 pr-8 font-bold leading-tight focus:border-gray-500 text-lg bg-transparent "
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="Product Information">Product Information</option>
                <option value="Become a Partner">Become a Partner</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Employee Verification">Employee Verification</option>
              </select>
            </div>
            <FormFields option={selectedOption} /> {/* Place FormFields component outside of the form */}
          </form>
        </div>
      </div>
    </div>
  );
};

const FormFields = ({ option }) => {
  switch (option) {
    case "Product Information":
      return (
        <>
          <ProductInformation/>
        </>
      );
    case "Become a Partner":
      return (
        <>
          <PartnerSupport/>
        </>
      );
    case "Technical Support":
      return (
        <>
         <PartnerSupport/>
        </>
      );
    case "Employee Verification":
      return (
        <>
       <EmployeeVerification/>
        </>
      );
    default:
      return null;
  }
};

export default Contact;
