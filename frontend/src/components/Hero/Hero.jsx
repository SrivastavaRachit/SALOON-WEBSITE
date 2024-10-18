import React from 'react';
import img from '../../assets/bg.jpg'

const Hero = () => {
    return (
        <div className="relative w-full min-h-screen bg-brown-900 text-white flex flex-col items-center justify-center">
            {/* Background Image with Blur */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 backdrop-blur-xl" 
                 style={{ backgroundImage: `url(${img})` }}>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center mt-16 md:mt-20 px-4">
                <h1 className="text-3xl md:text-5xl font-bold ">
                    Always Make Room for a <span className="text-peach font-indie-flower-regular">Little</span> <br />
                    <span className="text-peach font-indie-flower-regular">Beauty</span> in Your Life
                </h1>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                    <button className="bg-peach text-black font-bold  px-4 py-3 rounded-lg hover:bg-coral transition duration-300">
                        Book Appointment
                    </button>
                    <button className="border-2 border-peach font-bold text-peach px-8 py-3 rounded-lg hover:bg-coral hover:text-black transition duration-300">
                        Service Menu
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-0 w-full px-6 md:px-12 py-6 flex flex-col md:flex-row items-center text-center md:justify-between space-y-4 md:space-y-0 text-xs md:text-sm bg-opacity-60 text-white">
                <div className="space-y-1 md:space-y-2 pl-32 text-center ">
                    <h3 className="font-roboto-mono">C O N T A C T</h3>
                    <p>T: 070 9485 7568</p>
                    <p>info@beautysalon.com</p>
                </div>
                <div className="space-y-1 md:space-y-2 pl-16 text-center ">
                    <h3 className="font-roboto-mono">H O U R S</h3>
                    <p>Mon to Fri: 7:30 am - 1:00 am</p>
                    <p>Sat: 9:00 am - 1:00 am</p>
                    <p>Sun: 9:00 am - 11:30 pm</p>
                </div>
                <div className="space-y-1 md:space-y-2 pr-32 text-center ">
                    <h3 className="font-roboto-mono">L O C A T I O N</h3>
                    <p>85 Royal Mint Street, London, E1 8LG</p>
                    <p>United Kingdom</p>
                </div>
            </footer>
        </div>
    );
};

export default Hero;
