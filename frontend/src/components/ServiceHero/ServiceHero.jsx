import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported from react-router-dom
import Lottie from 'lottie-react';
import animationData from '../../assets/cut (1).json';
import animationData2 from '../../assets/Individual.json';
import animationData3 from '../../assets/Heart.json';
import animationData4 from '../../assets/Female Avatar (1).json';
import animationData5 from '../../assets/Eye.json';
import animationData6 from '../../assets/Community.json';

const ServiceHero = () => {
    return (
        <>
            <div className="flex items-center justify-center pt-8 bg-white px-4 sm:px-6 lg:px-8">
                <div className="text-center w-full max-w-screen-2xl mx-auto p-6 sm:p-8 lg:p-12 rounded-lg">
                    <h2 className="text-xl sm:text-2xl pb-10 lg:text-5xl font-bold text-brown-900 mb-4 lg:mb-6 font-sans " style={{ fontFamily: 'Zeyada' }}>
                        Service Menu
                    </h2>

                    {/* Icon Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10">
                        <ServiceItem icon={<Lottie animationData={animationData} loop={true} />} title="Hair" />
                        <ServiceItem icon={<Lottie animationData={animationData2} loop={true} />} title="Skincare" />
                        <ServiceItem icon={<Lottie animationData={animationData3} loop={true} />} title="Manicure Pedicure" />
                        <ServiceItem icon={<Lottie animationData={animationData4} loop={true} />} title="Makeup" />
                        <ServiceItem icon={<Lottie animationData={animationData5} loop={true} />} title="Facial" />
                        <ServiceItem icon={<Lottie animationData={animationData6} loop={true} />} title="Waxing" />
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                        Get your nails done for a great mood. Simple pleasures can make your week, not just your day.
                    </p>

                    <button className="bg-coral hover:bg-peach text-black font-bold py-2 px-4 lg:px-6 rounded-lg
                            text-sm sm:text-base lg:text-lg">
                        <Link to='/service'>View Service Menu</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

// ServiceItem component for icons and titles
const ServiceItem = ({ icon, title }) => (
    <div className="flex flex-col items-center">
        <div className="w-16 sm:w-20 lg:w-24">{icon}</div>
        <span className="mt-2 text-xs sm:text-sm md:text-base text-gray-700 text-center">
            {title}
        </span>
    </div>
);

export default ServiceHero;