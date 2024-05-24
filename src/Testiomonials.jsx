import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-2 p-4  md:p-10 justify-items-center py-12 w-[70%] mx-auto gap-36">
            <div className="flex flex-col items-center md:items-start gap-4">
                <div className="grid grid-cols-3 justify-center items-center mb-6  gap-4">
                    <img src="https://demandscience.com/wp-content/uploads/2024/04/leadcapture_momentumleader_leader.svg" alt="" className="w-24 h-24 md:w-48 md:h-48" />
                    <img src="https://demandscience.com/wp-content/uploads/2024/04/account-basedadvertising_easiesttodobusinesswith_enterprise_easeofdoingbusinesswith.svg" alt="" className="w-24 h-24 md:w-48 md:h-48 mx-2" />
                    <img src="https://demandscience.com/wp-content/uploads/2024/04/leadintelligence_bestestimatedroi_small-business_roi.svg" alt="" className="w-24 h-24 md:w-48 md:h-48" />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-semibold font-poppins">Don’t take our word for it.</h2>
                    <p className="mt-4 text-sm md:text-base">DemandScience solutions score high on review sites and with our customers!</p>
                </div>
                <div className="grid grid-cols-3 w-full gap-2 md:gap-4 mt-6">
                    <img src="https://demandscience.com/wp-content/uploads/2023/02/group-381.svg" alt="" className="w-18 md:w-18" />
                    <img src="https://demandscience.com/wp-content/uploads/2023/02/group-380.svg" alt="" className="w-18 md:w-18" />
                    <img src="https://demandscience.com/wp-content/uploads/2023/02/group-48099298.svg" alt="" className="w-18 md:w-18" />
                    <img src="https://demandscience.com/wp-content/uploads/2023/02/group-384.svg" alt="" className="w-18 md:w-18" />
                    <img src="https://demandscience.com/wp-content/uploads/2023/02/group-386.svg" alt="" className="w-18 md:w-18" />
                    <img src="https://demandscience.com/wp-content/uploads/2023/02/group-385.svg" alt="" className="w-18 md:w-18" />
                </div>
            </div>

            <div className="bg-blue-700 rounded-lg shadow-lg w-full md:w-[600px] p-6 md:p-10">
                <img src="https://demandscience.com/wp-content/uploads/2023/02/vector-529-1.svg" alt="" className="w-16 md:w-24 mb-4 mx-auto" />
                <div className="bg-blue-700 rounded-lg shadow-lg p-6 md:p-10 flex flex-col items-center justify-center">
                    <Slider {...settings} className="w-full">
                        <div className="testimonial-slide h-auto flex flex-col items-center justify-center text-center">
                            <h3 className="text-white text-lg md:text-2xl font-semibold mb-4">
                                “We can rely on consistent leads at a set CPL from DemandScience. It’s easy to get a program started.”
                            </h3>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 items-center">
                                <img src="https://demandscience.com/wp-content/uploads/2023/02/jennifer-j1.png" alt="" className="w-16 h-16 md:w-24 md:h-24 rounded-full mb-2" />
                                <div className="text-white text-sm md:text-lg text-center md:text-left">
                                    <p>Jennifer J., <br />Demand Generation, <br />Mid-Market</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-slide h-auto flex flex-col items-center justify-center text-center">
                            <h3 className="text-white text-lg md:text-2xl font-semibold mb-4">
                                “I’ve been doing B2B marketing for 15+ years and I’ve worked with a number of different lead gen providers. I’ve had good experiences and bad experiences, but I’d say that DemandScience is a top-notch provider for content syndication.”
                            </h3>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 items-center">
                                <img src="https://demandscience.com/wp-content/uploads/2023/02/chad-egelhoff.jpg" alt="" className="w-16 h-16 md:w-24 md:h-24 rounded-full mb-2" />
                                <div className="text-white text-sm md:text-lg text-center md:text-left">
                                    <p>Chad Egelhoff, <br />Director of Demand Generation</p>
                                    <img src="https://demandscience.com/wp-content/uploads/2023/02/60802902177cf1e5cfa9ca7c_quitgenius-logo-white.svg" alt="" className="w-16 md:w-20 mt-2 mx-auto md:mx-0" />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-slide h-auto flex flex-col items-center justify-center text-center">
                            <h3 className="text-white text-lg md:text-2xl font-semibold mb-4">
                                “A reliable partner for lead gen. Lead accuracy (relative to audience criteria), good value, good client service, and they stick to timings.”
                            </h3>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 items-center">
                                <img src="https://demandscience.com/wp-content/uploads/2023/02/nick-h1.jpg" alt="" className="w-16 h-16 md:w-24 md:h-24 rounded-full mb-2" />
                                <div className="text-white text-sm md:text-lg text-center md:text-left">
                                    <p>Nick H., <br />Performance Account Director, <br />Mid-Market</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-slide h-auto flex flex-col items-center justify-center text-center">
                            <h3 className="text-white text-lg md:text-2xl font-semibold mb-4">
                                “DemandScience Content Syndication Services are the Bomb! DemandScience was used as one of our primary digital lead engines. The solution addressed many of our issues to drive mostly top and middle funnel leads and overall web traffic.”
                            </h3>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 items-center">
                                <img src="https://demandscience.com/wp-content/uploads/2023/02/jack-johnson.jpg" alt="" className="w-16 h-16 md:w-24 md:h-24 rounded-full mb-2" />
                                <div className="text-white text-sm md:text-lg text-center md:text-left">
                                    <p>Jack Johnson, <br />Head of Field Marketing and Operations</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-slide h-auto flex flex-col items-center justify-center text-center">
                            <h3 className="text-white text-lg md:text-2xl font-semibold mb-4">
                                “Service and leads always on track. We use them for Demand Generation campaigns in EMEA. It delivers good CPL and so far good lead quality.”
                            </h3>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 items-center">
                                <img src="https://demandscience.com/wp-content/uploads/2023/02/veronica-arteaga.jpg" alt="" className="w-16 h-16 md:w-24 md:h-24 rounded-full mb-2" />
                                <div className="text-white text-sm md:text-lg text-center md:text-left">
                                    <p>Veronica Arteaga, <br />Planning Director</p>
                                    <img src="https://demandscience.com/wp-content/uploads/2023/02/mfg.png" alt="" className="w-8 md:w-12 mt-2 mx-auto md:mx-0" />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
