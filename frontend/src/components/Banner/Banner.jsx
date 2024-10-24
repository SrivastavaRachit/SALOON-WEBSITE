import React from 'react';

const Banner = ({ title, description, image }) => {
    return (
        <section className="relative w-full flex flex-col md:flex-row items-center 
        justify-between bg-gradient-to-r from-blush to-peach">
            {/* Title and Description */}
            <div className="flex flex-col w-full md:w-1/2 px-10 py-10 text-left">
                <h1 className="text-3xl md:text-5xl mb-10 font-bold text-gray-900">{title}</h1>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed">{description}</p>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-auto"
                />
            </div>
        </section>
    );
};

export default Banner;