import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import img from '../../assets/Hexagon logo.png';

import FooterImg from '../../assets/footercurve.png'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="bg-peach pt-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="relative flex items-center justify-center">
                            <div className="w-48 h-48 flex items-center justify-center">
                                <NavLink to='/'>
                                <h3 className="text-2xl text-bold md:text-3xl text-gray-800 font-bold z-10" style={{ fontFamily: 'Zeyada' }}>S A L O N</h3>

                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Center - Navigation Links */}
                    <div className="mt-10 md:mt-0 flex flex-col text-center space-y-3 text-gray-800 md:text-left">
                        <NavLink to='/' className="font-semibold hover:text-dark cursor-pointer">Home</NavLink>
                        <NavLink to='/about' className="font-semibold hover:text-dark cursor-pointer">About Us</NavLink>
                        <NavLink to='/service' className="font-semibold hover:text-dark cursor-pointer">Service Menu</NavLink>
                        <NavLink to='/our-story' className="font-semibold hover:text-dark cursor-pointer">Our Story</NavLink>
                    </div>

                    {/* Right side - Contact Us */}
                    <div className="mt-10 md:mt-0 text-center md:text-right">
                        <NavLink to='/contact' className="font-bold text-lg text-gray-800">Contact Us</NavLink>
                        <p className="text-gray-600 mt-2">
                            Don’t miss promotions, follow us <br />
                            for the latest news
                        </p>
                        <div className="flex justify-center md:justify-end space-x-6 mt-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="text-2xl text-gray-600 hover:text-blue-400 transition 
                                duration-300 cursor-pointer" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-2xl text-gray-600 hover:text-red-500 transition 
                                duration-300 cursor-pointer" />
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                {/* Footer Bottom Text */}
                <div className="py-5 bg-black text-center text-gray-300 text-sm">
                     MakeUp Saloon | 2024 All rights reserved
                    <br />
                    <p className="text-gray-300 text-sm mt-2 flex items-center justify-center">
          <img
            src={img} // Update the path if needed
            alt="Hexagon Digital Services Logo"
            className="h-6 mr-2"
          />
          Powered by{" "}
          <a
            href="https://hexagondigitalservices.com"
            className="text-white underline hover:text-purple-300 transition-colors ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hexagon Digital Services
          </a>
        </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
