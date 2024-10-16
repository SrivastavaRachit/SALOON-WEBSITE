import React from 'react';



const OurStory = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-center bg-pink-100 py-16 px-6 md:px-8 lg:px-12">
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
                    <div className="relative">
                        <div className="absolute inset-0 w-full h-full bg-pink-200 opacity-50 transform rotate-6"></div>
                        <img
                            src="https://img.freepik.com/free-vector/young-hairdressers-man-professional-equipment-cartoon-vector_24797-1731.jpg?uid=R140710501&ga=GA1.1.1284074313.1728821547&semt=ais_hybrid"
                            alt="Woman smiling holding makeup brushes"
                            className="relative z-10 rounded-lg shadow-lg object-cover w-full max-w-xs sm:max-w-md lg:max-w-lg"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left px-4 sm:px-8 lg:px-12">
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
    