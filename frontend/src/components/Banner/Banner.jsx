import React from 'react';

const Banner = ({ title, description, image }) => {
    return (
        <section className="relative w-full flex items-center justify-between py-16 px-6 lg:px-12 bg-gradient-to-r from-blush to-peach">
            {/* Left Side - Title and Description */}
            <div className="flex flex-col space-y-4 max-w-lg text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">{title}</h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{description}</p>
            </div>

            {/* Right Side - Image */}
            <div className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            </div>
        </section>
    );
};

export default Banner;
