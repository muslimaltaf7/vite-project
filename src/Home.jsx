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
    <NavBar/>
    <div className="min-h-screen">
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="https://demandscience.com/wp-content/uploads/2023/10/futuristic-background.mp4"
        ></video>
        <div className="relative flex flex-col items-center justify-center h-full cursor-pointer bg-black bg-opacity-50">
          <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold">
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
