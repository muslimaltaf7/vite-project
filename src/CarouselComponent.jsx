


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './index.css';

const CarouselComponent = () => {
    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow right-[-40px]" onClick={onClick}>
                <button className="bg-gray-400 hover:bg-blue-600 rounded-full p-2">
                    <FaChevronRight className="text-white text-2xl" />
                </button>
            </div>
        );
    };

    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow left-[-40px]" onClick={onClick}>
                <button className="bg-gray-400 hover:bg-blue-600 rounded-full p-2">
                    <FaChevronLeft className="text-white text-2xl" />
                </button>
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        appendDots: (dots) => (
            <div className="custom-dots">
                <ul className="flex justify-center space-x-2">
                    {dots}
                </ul>
            </div>
        ),
        customPaging: (i) => (
            <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slidesData = [
        {
            image: "https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550_circleci-1.svg",
            title: "PureSyndication and PureABM\naccelerate CircleCI sales cycle",
            description: 'Uncovering Leads Within a Niche DevOps World "DemandScience has allowed us to expand our top of...',
            link: "#",
        },
        {
            image: "https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550_mx_cs-1.svg",
            title: "MX Technologies PureABM\nCase Study",
            description: 'MX Partners with DemandScience to Generate Demand from Target Accounts "The team at DemandScience has set...',
            link: "#",
        },
        {
            image: "https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550-–-unbranded-puresyn-1.svg",
            title: "Guaranteed Lead Volume\nwith PureSyndication",
            description: 'Improve Lead Quality to Augment the Marketing Pipeline to Reach Revenue Goals "DemandScience has made a...',
            link: "#",
        },
        {
            image: "https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550_smg_cs-1.svg",
            title: "Breaking into New Markets\nwith PureSyndication",
            description: 'How SMG Broke into New Markets with Content Syndication "Given our niche industry, it is not....',
            link: "#",
        },
        {
            image: "https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550_prolifiq-1.svg",
            title: "Scalable Content Syndication\nfor Market Penetration",
            description: 'Scalable Content Syndication for A Digital-first Market Penetration Initiative "DemandScience helped us accelerate and grow by...',
            link: "#",
        },
        {
            image: "https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550-–-spanning-1.svg",
            title: "Spanning PureSyndication\nwith Intent",
            description: 'Spanning Launches Content Syndication with Intent and Doubles Scale of Demand Generation Program "DemandScience leads have...',
            link: "#",
        },
        {
            image: "https://demandscience.com/wp-content/uploads/2023/02/quit-genius-cs.jpg",
            title: "How Quit Genius Generated\n$4 Million of Pipeline\nwith PureSyndication",
            description: "How Quit Genius Generated $4 Million of Pipeline with PureSyndication Quit Genius is the worlds first...",
            link: "#",
        },
        {
            image: "https://demandscience.com/wp-content/uploads/2023/02/mfg_cs.jpg",
            title: "How Media Futures Group\nUnlocked New Markets\nwith PureSyndication",
            description: 'How Media Futures Group Unlocked New Markets with PureSyndication "DemandScience has allowed us to expand our...',
            link: "#",
        },
    ];

    return (
        <div className="carousel-container py-8 px-4 md:px-8 lg:px-16 bg-gray-100">
            <h2 className="text-[36px] font-semibold font-poppins text-center mb-6 mt-8 text-blue-950">Let’s make this your success story.</h2>
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="carousel-slide p-4">
                        <div className="relative rounded-lg overflow-hidden bg-gray-200">
                            <img
                                className="w-full h-52 object-cover rounded-t-md transition-transform duration-300 transform group-hover:scale-105"
                                src={slide.image}
                                alt={slide.title}
                            />
                        </div>
                        <div className="carousel-content text-center mt-4">
                            <h3 className="carousel-title text-lg font-medium text-gray-800">{slide.title}</h3>
                            <p className="carousel-description font-medium text-gray-600 my-2">{slide.description}</p>
                            <a className="carousel-read-more text-red-600 inline-flex items-center hover:underline" href={slide.link}>
                                Read More <FaChevronRight className="ml-2 h-5" />
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarouselComponent;




