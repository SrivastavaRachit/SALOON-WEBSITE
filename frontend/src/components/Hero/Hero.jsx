import React from 'react';

const Hero = () => {
    
    return (
        <div className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70" style={{ backgroundImage: `url('https://yourimageurl.com')` }}></div>

            {/* Main Content */}
            <div className="relative z-10 text-center mt-16 md:mt-20 px-4">
                <h1 className="text-3xl md:text-5xl font-bold">
                    Always Make Room for a <span className="text-pink-400">Little</span> <br />
                    <span className="text-pink-400">Beauty</span> in Your Life
                </h1>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                    <button className="bg-pink-400 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-pink-500 transition duration-300">
                        Book Appointment
                    </button>
                    <button className="border-2 border-pink-400 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-pink-500 transition duration-300">
                        Service Menu
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-0 w-full px-4 md:px-8 py-4 flex flex-col 
            md:flex-row md:justify-between space-y-2 md:space-y-0 text-xs md:text-sm bg-opacity-60">
                <div className="space-y-1 md:space-y-2 text-center md:text-left">
                    <h3 className="font-bold">Contact</h3>
                    <p>T: 070 9485 7568</p>
                    <p>info@beautysalon.com</p>
                </div>
                <div className="space-y-1 md:space-y-2 text-center md:text-left">
                    <h3 className="font-bold">Hours</h3>
                    <p>Mon to Fri: 7:30 am - 1:00 am</p>
                    <p>Sat: 9:00 am - 1:00 am</p>
                    <p>Sun: 9:00 am - 11:30 pm</p>
                </div>
                <div className="space-y-1 md:space-y-2 text-center md:text-left">
                    <h3 className="font-bold">Location</h3>
                    <p>85 Royal Mint Street, London, E1 8LG</p>
                    <p>United Kingdom</p>
                </div>
            </footer>
        </div>
    );
};

export default Hero;
