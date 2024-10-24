import React, { useEffect } from "react";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import img from '../../assets/Hexagon logo.png';
import { NavLink } from "react-router-dom";
import img1 from '../../assets/logo.png'


const Footer = () => {

    useEffect(() => {
        // Scroll to top when the Home component is loaded
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <footer className="bg-peach pt-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    {/* Logo and Brand Name */}
                    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <div className="relative flex items-center justify-center">
                            <div className="w-32 h-32 flex items-center justify-center md:w-48 md:h-48">
                                <NavLink to='/'>
                                    <h3 className="text-3xl md:text-4xl text-gray-800 font-bold z-10" style={{ fontFamily: 'Zeyada', display: 'inline-block' }}>
    S A L O N
</h3>
<img
    src={img1} 
    className="w-48 filter hue-rotate-270 saturate-150 inline-block"
/>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Center - Navigation Links */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 mb-6 md:mb-0">
                        <NavLink to='/' className="font-semibold text-gray-800 hover:text-dark transition duration-300" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                        <NavLink to='/book' className="font-semibold text-gray-800 hover:text-dark transition duration-300">Book Online</NavLink>
                        <NavLink to='/service' className="font-semibold text-gray-800 hover:text-dark transition duration-300">Service Menu</NavLink>
                        <NavLink to='/our-story' className="font-semibold text-gray-800 hover:text-dark transition duration-300">Our Story</NavLink>
                    </div>

                    {/* Right side - Contact Us */}
                    <div className="text-center md:text-right">
                        <NavLink to='/contact' className="font-bold text-lg text-black">Contact Us</NavLink>
                        <p className="text-gray-500 mt-2">
                            Don’t miss promotions, follow us <br />
                            for the latest news
                        </p>
                        <div className="flex justify-center md:justify-end space-x-6 mt-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <SlSocialFacebook className="text-2xl text-black hover:text-blue-400 transition duration-300 cursor-pointer" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <SlSocialInstagram className="text-2xl text-black hover:text-red-500 transition duration-300 cursor-pointer" />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-4 border-black" />

                {/* Footer Bottom Text */}
                <div className="py-5 bg-peach text-center text-black text-sm">
                    MakeUp Saloon | 2024 All rights reserved
                    <br />
                    <p className="mt-2 flex flex-col md:flex-row items-center justify-center">
                        <img
                            src={img}
                            alt="Hexagon Digital Services Logo"
                            className="h-6 mb-2 md:mb-0 md:mr-2"
                        />
                        Powered by{" "}
                        <a
                            href="https://hexagondigitalservices.com"
                            className="text-purplish underline hover:text-purple-300 transition-colors ml-1"
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
