
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
            <div
                className="absolute top-1/2 transform -translate-y-1/2 right-[-40px] z-10 cursor-pointer"
                onClick={onClick}
            >
                <button className="rounded-full bg-gray-400 hover:bg-blue-600 p-2 focus:outline-none">
                    <FaChevronRight className="text-2xl text-gray-100" />
                </button>
            </div>
        );
    };

    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 transform -translate-y-1/2 left-[-40px] z-10 cursor-pointer"
                onClick={onClick}
            >
                <button className="rounded-full bg-gray-400 hover:bg-blue-600 p-2 focus:outline-none">
                    <FaChevronLeft className="text-2xl text-gray-100" />
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
        appendDots: dots => (
            <div className="bg-[#F8F8F8] py-4">
                <ul className="slick-dots">{dots}</ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slidesData = [
        {
                        image: 'https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550_circleci-1.svg',
                        title: 'PureSyndication and PureABM accelerate CircleCI sales cycle',
                        description: 'Uncovering Leads Within a Niche DevOps World “DemandScience has allowed us to expand our top of...',
                        link: '#'
                    },
                    {
                        image: 'https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550_mx_cs-1.svg',
                        title: 'MX Technologies PureABM Case Study',
                        description: 'MX Partners with DemandScience to Generate Demand from Target Accounts “The team at DemandScience has set...',
                        link: '#'
                    },
                    {
                        image: 'https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550-%E2%80%93-unbranded-puresyn-1.svg',
                        title: 'Guaranteed Lead Volume with PureSyndication',
                        description: 'Improve Lead Quality to Augment the Marketing Pipeline to Reach Revenue Goals “DemandScience has made a...',
                        link: '#'
                    },
                    {
                        image: 'https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550_smg_cs-1.svg',
                        title: 'Breaking into New Markets with PureSyndication',
                        description: 'How SMG Broke into New Markets with Content Syndication "Given our niche industry, it is not...',
                        link: '#'
                    },
                    {
                        image: 'https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550_prolifiq-1.svg',
                        title: 'Scalable Content Syndication for Market Penetration',
                        description: 'Scalable Content Syndication for A Digital-first Market Penetration Initiative "DemandScience helped us accelerate and grow by...',
                        link: '#'
                    },
                    {
                        image: 'https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550-%E2%80%93-spanning-1.svg',
                        title: 'Spanning PureSyndication with Intent',
                        description: 'Spanning Launches Content Syndication with Intent and Doubles Scale of Demand Generation Program "DemandScience leads have...',
                        link: '#'
                    },
                    {
                        image: 'https://demandscience.com/wp-content/uploads/2023/02/quit-genius-cs.jpg',
                        title: 'How Quit Genius Generated $4 MIllion of Pipeline\nwith PureSyndication',
                        description: 'How Quit Genius Generated $4 Million of Pipeline with PureSyndication Quit Genius is the worlds first...',
                        link: '#'
                    },
                    {
                        image: 'https://demandscience.com/wp-content/uploads/2023/02/mfg_cs.jpg',
                        title: 'How Media Futures Group Unlocked New Markets\nwith PureSyndication',
                        description: 'How Media Futures Group Unlocked New Markets with PureSyndication "DemandScience has allowed us to expand our...',
                        link: '#'
                    },
    ];

    return (
        <div className="w-full px-6 md:px-10 lg:px-16 relative">
            <h2 className="text-3xl font-semibold font-poppins text-center mb-6 mt-8" style={{ color: '#05195F' }}>Let’s make this your success story.</h2>
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="p-2">
                        <div className="relative rounded-lg overflow-hidden">
                            <img
                                className="w-full h-52 object-cover rounded-t-md transition-transform duration-300 transform group-hover:scale-105"
                                src={slide.image}
                                alt={slide.title}
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-poppins font-semibold mt-4" style={{ color: '#05195F' }}>{slide.title}</h3>
                            <p className="text-sm font-inter text-gray-800 mb-4">{slide.description}</p>
                            <a className="text-red-600 hover:underline text-sm font-inter flex items-center justify-center" href={slide.link}>
                                Read More <FaChevronRight className="ml-2" />
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarouselComponent;
