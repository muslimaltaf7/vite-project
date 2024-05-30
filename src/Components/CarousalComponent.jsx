import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../index.css";

const CarouselComponent = ({
  slidesData,
  dots,
  infinite,
  speed,
  slidesToShow,
  slidesToScroll,
  responsiveSettings,
}) => {
  // Custom next arrow component
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="custom-arrow right-[-40px] hidden md:block"
        onClick={onClick}
      >
        <button className="bg-gray-400 hover:bg-blue-600 rounded-full p-2">
          <FaChevronRight className="text-white text-2xl" />
        </button>
      </div>
    );
  };

  // Custom previous arrow component
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="custom-arrow left-[-40px] hidden md:block"
        onClick={onClick}
      >
        <button className="bg-gray-400 hover:bg-blue-600 rounded-full p-2">
          <FaChevronLeft className="text-white text-2xl" />
        </button>
      </div>
    );
  };

  // Slider settings
  const settings = {
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    appendDots: (dots) => (
      <div className=" carousel-container custom-dots">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
    ),
    responsive: responsiveSettings,
  };

  return (
    <div className="carousel-container py-8 px-4 md:px-8 lg:px-16 bg-gray-100">
      {/* Carousel title */}
      <h2 className="text-[24px] md:text-[36px] font-semibold font-poppins text-center mb-6 mt-8 text-blue-950">
        Let’s make this your success story.
      </h2>
      {/* Slider component */}
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="carousel-slide p-4">
            <div className="relative rounded-lg overflow-hidden bg-gray-200 mx-4 md:mx-2">
              <img
                className="w-full h-16 object-cover rounded-t-md transition-transform duration-300 transform group-hover:scale-105"
                src={slide.image}
                alt={slide.title}
              />
            </div>
            <div className="carousel-content text-start mt-4">
              {/* Slide title */}
              <h3 className="carousel-title text-start text-md md:text-lg font-medium text-gray-800">
                {slide.title}
              </h3>
              {/* Slide description */}
              <p className="carousel-description text-sm md:text-base font-medium text-start text-gray-600 my-2">
                {slide.description}
              </p>
              {/* Read more link */}
              <a
                className="carousel-read-more text-red-600 flex w-full items-center text-start hover:underline"
                href={slide.link}
              >
                Read More{" "}
                <FaChevronRight className="ml-2 h-5 hidden md:inline" />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
