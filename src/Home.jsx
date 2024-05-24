import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import CardsHome from "./CardsHome";
import Footer from "./Footer";
import MQL from "./MQL";
import LiveDataFactory from "./FactoryFlow";
import Testimonials from "./Testiomonials";
import CampaignInfo from "./CampaignInfo";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function Home() {
  const messages = [
    "Unlock your B2B Success with science-based B2B marketing.",
    "Fuel your growth with data-driven, AI-powered B2B solutions.",
    "Your success, Our commitment. Proudly, the trusted partner in B2B Demand Generation.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dropdowns, setDropdowns] = useState({
    products: false,
    ourData: false,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const closeDropdowns = () => {
    setDropdowns({
      products: false,
      ourData: false,
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((currentIndex + 1) % messages.length),
    onSwipedRight: () =>
      setCurrentIndex((currentIndex - 1 + messages.length) % messages.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <div className="min-h-screen">
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
          <nav className="p-4 z-20 mt-3 absolute top-0 text-white w-full">
            <div className="container px-12 mx-auto flex justify-between gap-4 items-center">
              <div className="text-white text-2xl flex-1">
                <a href="/">
                  <img
                    src="https://demandscience.com/wp-content/uploads/2023/02/demand-science-logo-2.svg"
                    alt="Demand Science Logo"
                  />
                </a>
              </div>
              <div className="lg:flex hidden justify-center flex-grow gap-6">
                <div className="relative ml-4">
                  <a
                    href="/"
                    className="text-lg focus:outline-none flex items-center font-medium"
                  >
                    Home
                  </a>
                </div>
                <div className="relative ml-4">
                  <button
                    onMouseOver={() => toggleDropdown("products")}
                    className="text-lg focus:outline-none flex items-center gap-1 font-medium"
                  >
                    Products <MdKeyboardArrowDown />
                  </button>
                  {dropdowns.products && (
                    <div
                      className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg"
                      onMouseLeave={() => closeDropdowns()}
                    >
                      <a
                        href="/contentsyndication"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Content Syndication
                      </a>
                      <a
                        href="/purepush"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Pure Push
                      </a>
                      <a
                        href="abmpage"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        ABM Display
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Product 4
                      </a>
                    </div>
                  )}
                </div>
                <div className="relative ml-4">
                  <button
                    onMouseOver={() => toggleDropdown("ourData")}
                    className="text-lg focus:outline-none flex items-center gap-1 font-medium"
                  >
                    Our Data <MdKeyboardArrowDown />
                  </button>
                  {dropdowns.ourData && (
                    <div
                      className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg"
                      onMouseLeave={() => closeDropdowns()}
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Data 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Data 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Data 3
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Data 4
                      </a>
                    </div>
                  )}
                </div>

                <div className="relative ml-4">
                  <button className="text-lg focus:outline-none flex items-center font-medium">
                    About Us
                  </button>
                </div>
              </div>
              <button className="bg-white hidden lg:block hover:bg-[#CC0047] hover:text-white text-[#CC0047] text-lg py-[4px] px-6 rounded-full focus:outline-none mr-4 border border-[#CC0047]">
                Let&apos;s Talk
              </button>
              <FaBars
                className="block cursor-pointer lg:hidden text-2xl"
                onClick={toggleMobileMenu}
              />
            </div>
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-white shadow-lg mt-2 rounded-lg">
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Home
                </a>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("products")}
                    className="text-lg focus:outline-none flex items-center text-gray-800 hover:bg-gray-200 font-normal w-full text-left px-4 py-2"
                  >
                    Products <MdKeyboardArrowDown />
                  </button>
                  {dropdowns.products && (
                    <div className="bg-white py-2 w-full rounded-lg shadow-lg">
                      <a
                        href="/contentsyndication"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Content Syndication
                      </a>
                      <a
                        href="/purepush"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Pure Push
                      </a>
                      <a
                        href="abmpage"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        ABM Display
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Product 4
                      </a>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("ourData")}
                    className="text-lg focus:outline-none flex items-center font-normal text-gray-800 hover:bg-gray-200 w-full text-left px-4 py-2"
                  >
                    Our Data <MdKeyboardArrowDown />
                  </button>
                  {dropdowns.ourData && (
                    <div
                      className="bg-white py-2 w-full rounded-lg shadow-lg"
                      onMouseLeave={() => closeDropdowns()}
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Data 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Data 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Data 3
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Data 4
                      </a>
                    </div>
                  )}
                </div>
                <a
                  href="/aboutus"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  About Us
                </a>
                <button className="bg-[#CC0047] text-white text-lg py-2 px-6 rounded-full focus:outline-none mx-4 my-4 w-[calc(100%-2rem)]">
                  Let&apos;s Talk
                </button>
              </div>
            )}
          </nav>
          <video
            className="absolute inset-0 w-full h-full object-cover object-top"
            autoPlay
            muted
            loop
            playsInline
            src="https://demandscience.com/wp-content/uploads/2023/10/futuristic-background.mp4"
          ></video>
          <div className="relative flex flex-col items-center justify-center h-full cursor-pointer bg-black bg-opacity-50">
            <h1 className="text-center text-white p-0 m-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold">
              Supercharge Your Pipeline.
            </h1>

            <div className="mt-8 w-full px-4 sm:px-8 text-center" {...handlers}>
              <div className="whitespace-nowrap transition-transform duration-500 ease-in-out">
                <div className="inline-block px-4 py-4">
                  <p className="text-center text-white text-base sm:text-lg p-0 m-0  md:text-lg lg:text-1xl xl:text-2xl tracking-widest font-inter">
                    {messages[currentIndex]}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 py-6 hover:scale-105">
              <a
                className="px-6 py-2 sm:px-8 sm:py-3 font-bold text-lg sm:text-xl bg-[#CC0047] text-white rounded-full"
                href="https://demandscience.com/products/"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <CardsHome />
        <MQL />
        <LiveDataFactory />
        <Testimonials />
        <CampaignInfo />
        <Footer />
      </div>
    </>
  );
}

export default Home;
