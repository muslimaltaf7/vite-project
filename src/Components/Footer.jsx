import React from "react";
 
const Footer = () => {
  return (
    <div className="flex flex-1 flex-col mt-36 sm:space-x-10 flex-wrap md:flex-row w-full lg:flex-row sm:flex-row bg-cover min-h-[907.88px] bg-no-repeat bg-center  bg-[url('images/footer-bg.webp')] py-24 px-10 text-white">
      <div className="flex flex-col mb-8 md:mb-0 md:mr-8">
        <img
          src="https://demandscience.com/wp-content/uploads/2023/02/demand-science-logo-white-1.svg"
          alt="Demand Science Logo"
          width="193"
        />
        <p className="relative font-semibold text-lg mt-10 xl:w-[300px]">
          Join our monthly newsletter for resources that make your job easier.
        </p>
        <form
          className="mt-6"
          id="newsletter-subscribe"
          acceptCharset="UTF-8"
          method="post"
          action="https://b2bleadgen.demandscience.com/l/811663/2022-04-05/29ht79"
        >
          <input
            type="hidden"
            name="811663_117950pi_811663_117950"
            id="811663_117950pi_811663_117950"
            value=""
          />
          <input
            type="hidden"
            name="811663_117953pi_811663_117953"
            id="811663_117953pi_811663_117953"
            value=""
          />
          <input
            type="hidden"
            name="811663_117956pi_811663_117956"
            id="811663_117956pi_811663_117956"
            value=""
          />
          <input
            type="hidden"
            name="811663_117959pi_811663_117959"
            id="811663_117959pi_811663_117959"
            value=""
          />
          <input
            type="hidden"
            name="811663_117962pi_811663_117962"
            id="811663_117962pi_811663_117962"
            value=""
          />
          <input
            type="hidden"
            name="811663_117965pi_811663_117965"
            id="811663_117965pi_811663_117965"
            value=""
          />
          <div className="flex items-center lg:w-fit xl:w-fit md:w-full bg-gray-200 border border-gray-300 rounded-full p-2 mt-4">
            <input
              type="email"
              className="flex-grow bg-transparent outline-none text-black px-4 "
              name="811663_117947pi_811663_117947"
              id="811663_117947pi_811663_117947"
              placeholder="Enter business email"
              pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.*)(?!hotmail.com)(?!ymail.com)(?!aol.com)(?!free.fr)(?!msn.com)(?!live.*)(?!outlook.com)(?!inbox.com)(?!icloud.com)(?!mail.com)(?!att.net)(?!hotmail.*)(?!aim.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}"
              required
            />
            <button
              type="submit"
              className="btn-redorange px-6 py-2  rounded-full text-white bg-[#CC0047] hover:bg-[#CC0047]"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex space-x-10 px-5 mt-8 md:mt-8">
          <a
            href="https://www.facebook.com/DemandScience/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://demandscience.com/wp-content/uploads/2023/02/facebook-icon.svg"
              alt="Facebook"
              width="32"
            />
          </a>
          <a
            href="https://twitter.com/demandscience"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://demandscience.com/wp-content/uploads/2023/02/twitter-icon.svg"
              alt="Twitter"
              width="32"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/demandscience-com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://demandscience.com/wp-content/uploads/2023/02/linkedin-icon.svg"
              alt="LinkedIn"
              width="32"
            />
          </a>
        </div>
      </div>
      <div className="lg:flex flex-row sm:grid lg:space-x-10 text-lg lg:flex-row md:flex-col sm:flex-col flex-1 xl:justify-around justify-between md:mr-8 text-white">
        <div className="mb-8 md:mb-0">
          <p className="font-sans text-sm font-bold">PRODUCTS</p>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="/products/content-syndication/"
                  className="hover:underline"
                >
                  Content Syndication
                </a>
              </li>
              <li>
                <a href="/products/pure-push/" className="hover:underline">
                  PurePush
                </a>
              </li>
              <li>
                <a href="/products/abm-display/" className="hover:underline">
                  ABM Display
                </a>
              </li>
              <li>
                <a
                  href="/products/account-intelligence"
                  className="hover:underline"
                >
                  Account Intelligence
                </a>
              </li>
            </ul>
          </nav>
        </div>
 
        <div className="mb-8 text-lg md:mb-0 text-white">
          <p className="font-bold text-sm font-sans">OUR DATA</p>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <a href="/data" className="hover:underline">
                  Data
                </a>
              </li>
            </ul>
          </nav>
          <p className="font-bold text-sm mt-8 font-sans">WHO WE SERVE</p>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="https://demandscience.com/solutions/marketing/"
                  className="hover:underline"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="https://demandscience.com/solutions/sales/"
                  className="hover:underline"
                >
                  Sales
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="lg:flex flex-row sm:grid lg:space-x-10 text-lg lg:flex-row md:flex-col sm:flex-col flex-1 xl:justify-around justify-between md:mr-8 text-white">
        <div className="mb-8 md:mb-0">
          <p className="font-bold font-sans text-sm">RESOURCES</p>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="/resources"
                  className="hover:underline"
                >
                  Resource Center
                </a>
              </li>
              <li>
                <a href="/resources/case-studies/" className="hover:underline">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/resources/blog/" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
 
        <div className="mb-8 text-lg md:mb-0 text-white">
          <p className="font-bold font-sans text-sm">COMPANY</p>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <a href="https://demandscience.com/about/" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="https://demandscience.com/careers/" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="https://demandscience.com/press-releases/" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="https://demandscience.com/contact/" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-full">
          <hr className="border-5 border-gray-200" />
        <div class="flex w-full flex-col md:flex-col lg:flex-row xl:flex-row sm:space-y-5 md:space-y-5 sm:flex-col lg:space-y-0 py-10">
          <div class="flex sm:justify-center xl:justify-start w-full">
            <p class="text-white text-sm">
              ©2024 DemandScience US, LLC All Rights Reserved
            </p>
          </div>
 
          <div class="flex sm:justify-center xl:justify-end w-full">
            <p class="text-white text-sm">
              <a
                href="https://demandscience.com/privacy-policy-ccpa/"
                class="hover:underline"
              >
                Do Not Sell My Information
              </a>{" "}
              |
              <a
                href="https://demandscience.com/privacy-policy/"
                class="hover:underline"
              >
                Privacy Policy
              </a>{" "}
              |
              <a
                href="https://demandscience.com/terms-of-use/"
                class="hover:underline"
              >
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Footer;