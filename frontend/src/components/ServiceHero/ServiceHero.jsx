import React from 'react';

const ServiceHero = () => {
    return (
        <>
            <div className="flex items-center justify-center pt-8 bg-white px-4 sm:px-6 lg:px-8">
                <div className="text-center w-full max-w-screen-2xl mx-auto p-6 sm:p-8 lg:p-12 rounded-lg">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brown-900 mb-4 lg:mb-6">Service Menu</h2>
                    <div className="flex flex-wrap justify-center gap-56 sm:gap-6 lg:gap-24 mb-6 sm:mb-8">
                        <ServiceItem icon={<ScissorsIcon />} title="Hair" />
                        <ServiceItem icon={<MakeupIcon />} title="Makeup" />
                        <ServiceItem icon={<ManicureIcon />} title="Manicure Pedicure" />
                        <ServiceItem icon={<SkincareIcon />} title="Skincare" />
                        <ServiceItem icon={<FacialIcon />} title="Facial" />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                        Get your nails done for a great mood. Simple pleasures can make your week, not just your day.
                    </p>
                    <button className="bg-pink-600 hover:bg-pink-400 text-white font-bold py-2 px-4 lg:px-6 rounded-full text-sm sm:text-base lg:text-lg">
                        View Service Menu
                    </button>
                </div>
            </div>
        </>
    );
};

const ServiceItem = ({ icon, title }) => (
    <div className="flex flex-col items-center w-20 sm:w-24 md:w-32">
        {icon}
        <span className="mt-2 text-xs sm:text-sm md:text-base text-gray-700">{title}</span>
    </div>
);

const ScissorsIcon = () => (
    <svg className="w-6 sm:w-8 md:w-10 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4L8.12 15.88M14 8l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const MakeupIcon = () => (
    <svg className="w-6 sm:w-8 md:w-10 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3 5h-6l3-5zm-4 6h8l1 10H7L8 8zm4 14c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z" />
    </svg>
);

const ManicureIcon = () => (
    <svg className="w-6 sm:w-8 md:w-10 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 12v7h-3v-7h3zm-5 0v7h-3v-7h3zm-5 0v7H6v-7h3zm-3-2h14v-2H6v2z" />
    </svg>
);

const SkincareIcon = () => (
    <svg className="w-6 sm:w-8 md:w-10 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6h-4v6h-4v-6H6z" />
    </svg>
);

const FacialIcon = () => (
    <svg className="w-6 sm:w-8 md:w-10 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="8" r="3" />
        <path d="M12 15c-2.33 0-7 1.17-7 3.5V20h14v-1.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
);

export default ServiceHero;
