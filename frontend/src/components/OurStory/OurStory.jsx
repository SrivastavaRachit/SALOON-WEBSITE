import React from 'react';
import img from '../../assets/our-story.png';

const OurStory = () => {
    return (
        <>
            <section className="relative flex flex-col md:flex-row items-center justify-center bg-peach py-16 px-6 md:px-8 lg:px-12">
                {/* Floating Bubbles */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="relative w-full h-full z-0">
                        <div className="bubble bg-gold"></div>
                        <div className="bubble bubble-2 bg-gold"></div>
                        <div className="bubble bubble-3 bg-gold"></div>
                        <div className="bubble bubble-4 bg-gold"></div>
                        <div className="bubble bubble-5 bg-gold"></div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 z-10">
                    <div className="relative">
                        <div className="absolute inset-0 w-full h-full bg-coral opacity-50 transform rotate-6"></div>
                        <img
                            src={img}
                            alt="Woman smiling holding makeup brushes"
                            className="relative z-10 rounded-lg shadow-lg object-cover w-full max-w-xs sm:max-w-md lg:max-w-lg"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left px-4 sm:px-8 lg:px-12 z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
                    <p className="text-gray-700 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                        We started as a small beauty studio in the US. Our main idea was to create the best beauty studio in the
                        world. Can there be compromises in the best studio in the world? Our answer is always no. We care about
                        the best quality, hire the best specialists, and provide the best customer service. This approach has
                        allowed us to grow and create an awesome team passionate about everything we do.
                    </p>
                    <button className="px-6 py-3 border border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
                        Learn More
                    </button>
                </div>
            </section>
        </>
    );
};

export default OurStory;
