



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
        className=" absolute top-1/2 transform -translate-y-1/2 right-[-30px] z-10 cursor-pointer"
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
                className="absolute top-1/2 transform -translate-y-1/2 left-[-30px] z-10 cursor-pointer"
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
      image:
        "https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550_circleci-1.svg",
      title: "PureSyndication and PureABM\naccelerate CircleCI sales cycle",
      description: "Uncovering Leads Within a Niche\nDevOps World...",
      link: "#",
    },
    {
      image:
        "https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550_mx_cs-1.svg",
      title: "MX Technologies PureABM\nCase Study",
      description: "MX Partners with DemandScience\nto Generate Demand...",
      link: "#",
    },
    {
      image:
        "https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550-%E2%80%93-unbranded-puresyn-1.svg",
      title: "Guaranteed Lead Volume\nwith PureSyndication",
      description:
        'Improve Lead Quality to Augment\nthe Marketing Pipeline to Reach\nRevenue Goals "DemandScience has made a',
      link: "#",
    },
    {
      image:
        "https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550_smg_cs-1.svg",
      title: "Breaking into New Markets\nwith PureSyndication",
      description:
        'How SMG Broke into New Markets\nwith Content Syndication "Given our\nniche industry, it is not....',
      link: "#",
    },
    {
      image:
        "https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550_prolifiq-1.svg",
      title: "Scalable Content Syndication\nfor Market Penetration",
      description:
        'Scalable Content Syndication\nfor A Digital-first Market Penetration\nInitiative "DemandScience helped us\naccelerate and grow by...',
      link: "#",
    },
    {
      image:
        "https://demandscience.com/wp-content/uploads/2022/05/header-image_450x550-%E2%80%93-spanning-1.svg",
      title: "Spanning PureSyndication\nwith Intent",
      description:
        'Spanning Launches Content\nSyndication with Intent and Doubles\nScale of Demand Generation\nProgram "DemandScience leads have...',
      link: "#",
    },
    {
      image:
        "https://demandscience.com/wp-content/uploads/2023/02/quit-genius-cs.jpg",
      title:
        "How Quit Genius Generated\n$4 MIllion of Pipeline\nwith PureSyndication",
      description:
        "How Quit Genius Generated\n$4 Million of Pipeline with\nPureSyndication Quit Genius\nis the worlds first...",
      link: "#",
    },
    {
      image: "https://demandscience.com/wp-content/uploads/2023/02/mfg_cs.jpg",
      title:
        "How Media Futures Group\nUnlocked New Markets\nwith PureSyndication",
      description:
        'How Media Futures Group\nUnlocked New Markets with\nPureSyndication "DemandScience\nhas allowed us to expand our...',
      link: "#",
    },
  ];

    return (
        <div className="w-4/5 mx-auto relative">
            <h2 className="text-5xl font-bold text-center mb-6 mt-8" style={{ color: '#05195F' }}>Let’s make this your success story</h2>
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="p-2">
                        <div className="relative rounded-lg overflow-hidden group m-4">
                            <img
                                className="w-full h-64 object-cover rounded-t-md transition-transform duration-300 transform group-hover:scale-105"
                                src={slide.image}
                                alt={slide.title}
                            />
                        </div>
                        <div className="m-4 text-center">
                            <h3 className="text-3xl font-bold whitespace-pre-line m-2" style={{ color: '#05195F' }}>{slide.title}</h3>
                            <p className="text-xl whitespace-pre-line m-2">{slide.description}</p>
                            <a className="text-red-600 hover:underline text-lg " href={slide.link}>Read More</a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarouselComponent;
