import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import FooterImg from '../../assets/footercurve.png'

const Footer = () => {

    return (
        <>
            <footer className="bg-pink-50 py-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">

                    {/* Left side - Salon Logo and Tagline */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="relative flex items-center justify-center">
                            <div className="w-48 h-48 flex items-center justify-center">
                                <img src={FooterImg} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Center - Navigation Links */}
                    <div className="mt-10 md:mt-0 text-center space-y-3 text-gray-800">
                        <p className="font-semibold hover:text-orange-300 cursor-pointer">Home</p>
                        <p className="font-semibold hover:text-orange-300 cursor-pointer">About Us</p>
                        <p className="font-semibold hover:text-orange-300 cursor-pointer">Service Menu</p>
                        <p className="font-semibold hover:text-orange-300 cursor-pointer">Our Story</p>
                    </div>

                    {/* Right side - Contact Us */}
                    <div className="mt-10 md:mt-0 text-center md:text-right">
                        <h4 className="font-bold text-lg text-gray-800">Contact Us</h4>
                        <p className="text-gray-600 mt-2">
                            Don’t miss promotions, follow us <br />
                            for the latest news
                        </p>
                        <div className="flex justify-center md:justify-end space-x-6 mt-4">
                            <FaFacebookF className="text-2xl text-gray-600 hover:text-orange-300 transition duration-300 cursor-pointer" />
                            <FaInstagram className="text-2xl text-gray-600 hover:text-orange-300 transition duration-300 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <hr />
                {/* Footer Bottom Text */}
                <div className="mt-10 text-center text-gray-600 text-sm">
                    2024 Salon All rights reserved.
                </div>
            </footer>
        </>

    );
};

export default Footer;
