import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Footer from "./Components/Footer";
import MQL from "./Components/Home/MQL.jsx";
import LiveDataFactory from "./Components/Home/LiveDataFactory.jsx";
import Testimonials from "./Components/Home/Testiomonials.jsx";
import Card from "./Components/card.jsx";
import HomeNav from "./Components/Home/HomeNav.jsx";
import ABMStrategy from "./Components/AbmComponents/ABMStrategy.jsx";
import Cta from "./Components/CTA.jsx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const cardData = [
  {
    title: "PureSyndication",
    imageSrc: "https://demandscience.com/wp-content/uploads/2023/02/content-syndication-1.svg",
    altText: "PureSyndication",
    subtitle: "Use the content you have to get the leads that you want.",
    titleColor: "#05195F",
    Buttontext: "See How",
    Icon: <MdOutlineKeyboardArrowRight/>,
  },
  {
    title: "PurePush",
    imageSrc: "https://demandscience.com/wp-content/uploads/2023/03/pure-push.svg",
    altText: "PurePush",
    subtitle: "Connect with highly-qualified leads who are closer to purchase.",
    titleColor: "#05195F",
    Buttontext: "See How",
    Icon: <MdOutlineKeyboardArrowRight/>,
  },
  {
    title: "ABM Display",
    imageSrc: "https://demandscience.com/wp-content/uploads/2023/02/abm-display-advertising-1.svg",
    altText: "ABM Display",
    subtitle: "Get the right ads to in-market buyers at your dream accounts..",
    titleColor: "#05195F",
    Buttontext: "See How",
    Icon: <MdOutlineKeyboardArrowRight/>,
  },
  {
    title: "Account Intelligence",
    imageSrc: "https://demandscience.com/wp-content/uploads/2023/02/prospect-data-1.svg",
    altText: "Account Intelligence",
    subtitle: "Transform your marketing with precision insights and targeting.",
    titleColor: "#05195F",
    Buttontext: "See How",
    Icon: <MdOutlineKeyboardArrowRight/>,
  },
];

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
          <HomeNav
            dropdowns={dropdowns}
            toggleDropdown={toggleDropdown}
            closeDropdowns={closeDropdowns}
            toggleMobileMenu={toggleMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
          />
          <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
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
              <div
                className="mt-8 w-full text-wrap px-4 sm:px-8 text-center"
                {...handlers}
              >
                <div className="whitespace-nowrap transition-transform duration-500 ease-in-out overflow-hidden">
                  <div className="block px-4 py-4">
                    <p className="text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl p-0 m-0 tracking-widest font-inter">
                      {messages[currentIndex]}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 py-6 hover:scale-105 transition-transform duration-300">
                <a
                  className="px-6 py-2 sm:px-8 sm:py-3 font-bold text-lg sm:text-xl bg-[#CC0047] text-white rounded-full"
                  href="https://demandscience.com/products/"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
            
        <div className="pt-24 pb-5 px-2 sm:w-[70%] mx-auto">
          <h1
            className="text-[36px] font-semibold text-center font-poppins"
            style={{ color: "#05195F" }}
          >
            Optimized ROI, Unrivaled Results. Demand Generation Solutions that Deliver.
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center bg-white rounded-lg p-2 sm:p-4">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:px-36">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`flex justify-center ${card.span ? card.span : ""} ${index === 3 ? 'md:col-start-2' : ''}`}
              >
                <Card
                  title={card.title}
                  imageSrc={card.imageSrc}
                  altText={card.altText}
                  subtitle={card.subtitle}
                  titleColor={card.titleColor}
                  Buttontext={card.Buttontext}
                  Icon={card.Icon}
                />
              </div>
            ))}
          </div>
        </div>

        <MQL />
        <LiveDataFactory />
        <Testimonials />
        <div>
      <ABMStrategy
       heading="Everything you need to know about high‑performing campaigns."  ButtonComponent={() => <Cta title="Like what you see? View more"
       hoverIcon={<i className="fa fa-chevron-right"></i>}
       bgColor= "#FFFFFF"
       textColor= "#CC0047"
         />}
     
      />
    </div>
        <Footer />
      </div>
    </>
  );
}
export default Home;