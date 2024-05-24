




import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const OfficeLocations = () => {
    return (
        <div className="flex flex-col items-center py-12 px-4 bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-blue-950 mb-8">Our Offices</h1>
            <div className="w-full max-w-5xl">
                <img
                    src="https://demandscience.com/wp-content/uploads/2023/02/ds-office-2-1536x573.jpg"
                    alt="Office Image"
                    className="w-full h-auto rounded-lg shadow-md mb-32"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center mb-2">
                        <FontAwesomeIcon
                                icon={faLocationDot}
                                className=" h-9 p-2 mr-2"
                                style={{ padding: '10px' }}
                            />
                            <h2 className="text-3xl font-semibold text-blue-950 font-poppins">US Headquarters</h2>
                        </div>
                        <p className="text-blue-900 pb-4 font-inter text-lg">+1 (857) 770-1744</p>
                        <p className="text-blue-900 pb-4 font-inter text-lg">222 Rosewood Drive<br />Danvers, MA 01923</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center mb-2">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className=" h-9 p-2 mr-2"
                                style={{ padding: '10px' }}
                            />
                            <h2 className="text-3xl font-semibold text-blue-950 font-poppins">US Sales</h2>
                        </div>
                        <p className="text-blue-900 pb-4 font-inter text-lg">(312) 872-8093</p>
                        <p className="text-blue-900 pb-4 font-inter text-lg">1815 S Meyers Rd<br />Suite 950, Oakbrook Terrace, IL 60181</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center mb-2">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className=" h-9 p-2 mr-2"
                                style={{ padding: '10px' }}
                            />
                            <h2 className="text-3xl font-semibold text-blue-950 font-poppins">UK Headquarters</h2>
                        </div>
                        <p className="text-blue-900 pb-4 font-inter text-lg ">+44 20 8123 2220</p>
                        <p className="text-blue-900 pb-4 font-inter text-lg"> 26th Floor,125 Old Broad Street,<br />London, EC2N 1AR</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center mb-2">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className=" h-9 p-2 mr-2"
                                style={{ padding: '10px' }}
                            />
                            <h2 className="text-3xl font-semibold text-blue-950 font-poppins">APAC Sales</h2>
                        </div>
                        <p className="text-blue-900 pb-4 font-inter text-lg">+1 (857) 770-1744</p>
                        <p className="text-blue-900 pb-4 font-inter text-lg">L23, Salesforce Tower 180 George St.<br />Sydney NSW 2000, Australia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeLocations;
