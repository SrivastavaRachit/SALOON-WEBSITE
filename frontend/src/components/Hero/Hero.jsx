import React from 'react';
import img from '../../assets/bg.jpg';
import { Link } from 'react-router-dom';

const Hero = ({ isDropdownOpen }) => {
    return (
        <div
            className={`relative w-full min-h-screen bg-brown-900 text-white flex flex-col items-center justify-between overflow-hidden transition-all duration-300 ${
                isDropdownOpen ? 'opacity-50 pointer-events-none' : 'opacity-100'
            }`}
        >
            {/* Background Image with Blur */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 backdrop-blur-xl"
                style={{ backgroundImage: `url(${img})` }}
            ></div>

            {/* Spacer to prevent overlap with navbar */}
            <div className="h-16 sm:h-28"></div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 py-8 flex flex-col items-center justify-center flex-grow">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                    Always Make Room for a{' '}
                    <span className="text-peach" style={{ fontFamily: 'Zeyada' }}>
                        Little
                    </span>{' '}
                    <br />
                    <span className="text-peach" style={{ fontFamily: 'Zeyada' }}>
                        Beauty
                    </span>{' '}
                    in Your Life
                </h1>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link to="/book">
                        <button className="bg-peach text-black font-bold px-4 py-3 rounded-lg hover:bg-coral transition duration-300 w-full sm:w-auto">
                            Book Appointment
                        </button>
                    </Link>
                    <Link to="/service">
                        <button className="border-2 border-peach font-bold text-peach px-4 py-3 rounded-lg hover:bg-coral hover:text-black transition duration-300 w-full sm:w-auto">
                            Service Menu
                        </button>
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full px-4 py-4 flex flex-col sm:flex-row items-center text-center sm:justify-between space-y-4 sm:space-y-0 bg-opacity-60 z-10">
                <div className="space-y-1 md:space-y-2">
                    <h3 className="font-roboto-mono text-xs sm:text-sm md:text-base">C O N T A C T</h3>
                    <p className="text-[10px] sm:text-xs">T: 070 9485 7568</p>
                    <p className="text-[10px] sm:text-xs">info@beautysalon.com</p>
                </div>

                <div className="space-y-1 md:space-y-2">
                    <h3 className="font-roboto-mono text-xs sm:text-sm md:text-base">H O U R S</h3>
                    <p className="text-[10px] sm:text-xs">Mon to Fri: 7:30 am - 1:00 am</p>
                    <p className="text-[10px] sm:text-xs">Sat: 9:00 am - 1:00 am</p>
                    <p className="text-[10px] sm:text-xs">Sun: 9:00 am - 11:30 pm</p>
                </div>

                <div className="space-y-1 md:space-y-2">
                    <h3 className="font-roboto-mono text-xs sm:text-sm md:text-base">L O C A T I O N</h3>
                    <p className="text-[10px] sm:text-xs">85 Royal Mint Street, London, E1 8LG</p>
                    <p className="text-[10px] sm:text-xs">United Kingdom</p>
                </div>
            </footer>
        </div>
    );
};

export default Hero;
