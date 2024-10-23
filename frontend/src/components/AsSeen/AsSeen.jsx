import React from 'react';
import Loop from '../../components/Loop/Loop';

import BGCURVE from '../../assets/curveBG.jpg';

const AsSeen = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 w-full h-full bg-no-repeat bg-cover z-0"
                style={{
                    backgroundImage: `url(${BGCURVE})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            
            {/* Dark overlay for contrast */}
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-8">
                <Loop/>
                <h2 className="text-lg sm:text-xl md:text-3xl mt-10 font-bold text-white">As Seen On</h2>
                <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white italic mb-6">
                    "The place with its constant excellence, soul, and style"
                </p>
                <button className="px-4 py-2 font-semibold text-white border border-white rounded-xl hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default AsSeen;
