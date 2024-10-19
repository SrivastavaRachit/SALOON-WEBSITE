import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import FooterImg from '../../assets/footercurve.png'
import { NavLink } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <footer className="bg-peach pt-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">

                    {/* Left side - Salon Logo and Tagline */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="relative flex items-center justify-center">
                            <div className="w-48 h-48 flex items-center justify-center">
                                <NavLink to='/'>
                                    <img src={FooterImg} alt="" />
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
                            <FaFacebookF className="text-2xl text-gray-600 hover:text-dark transition duration-300 cursor-pointer" />
                            <FaInstagram className="text-2xl text-gray-600 hover:text-dark transition duration-300 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <hr />
                {/* Footer Bottom Text */}
                <div className=" pt-10 bg-dark text-center text-white text-sm">
                    2024 Salon All rights reserved.
                </div>
            </footer>
        </>

    );
};

export default Footer;
