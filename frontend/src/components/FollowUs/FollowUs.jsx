import React from 'react';
import { SlSocialFacebook,  SlSocialInstagram } from "react-icons/sl";

const FollowUs = () => {
    return (
        <section className="relative w-full py-16 bg-gradient-to-t from-blush to-peach">

            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 space-y-12 lg:space-y-0">
                {/* Left side - Circular logo */}
                <div className="flex flex-col items-center lg:items-start space-y-4">
                    <div className="w-40 h-40 lg:w-48 lg:h-48 flex items-center justify-center rounded-full border-4 border-purplish relative">
                        <span className="absolute inset-0 border-2 border-coral rounded-full"></span>
                        <h3 className="text-2xl font-bold lg:text-3xl text-gray-800 z-10" style={{ fontFamily: 'Zeyada' }}>S A L O N</h3>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="hidden lg:block w-1 h-48 bg-gradient-to-b from-coral to-coral mx-8"></div>

                {/* Right side - Follow Us */}
                <div className="flex flex-col items-center lg:items-start lg:mr-28 space-y-4 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-4xl font-zeyada font-bold text-gray-800" style={{ fontFamily: 'Zeyada' }}>Follow Us</h1>
                    <p className="text-sm lg:text-base text-gray-600">Don't miss promotions, follow us for the latest news</p>
                    <p className="text-sm lg:text-base text-gray-600">Follow us for the latest updates</p>

                    {/* Social Media Links */}
                    <div className="flex space-x-6 text-2xl text-gray-800">
                        <a
                            href="https://facebook.com"
                            className="hover:text-coral transition duration-300 ease-in-out"
                            aria-label="Facebook"
                        >
                                                            <SlSocialFacebook className="text-2xl text-black hover:text-blue-400 transition duration-300 cursor-pointer" />

                        </a>
                        <a
                            href="https://instagram.com"
                            className="hover:text-coral transition duration-300 ease-in-out"
                            aria-label="Instagram"
                        >
                                                            <SlSocialInstagram className="text-2xl text-black hover:text-red-500 transition duration-300 cursor-pointer" />

                        </a>
                    </div>
                </div>
            </div>

            {/* Vertical Social Media Buttons on the Right */}
            <div className="absolute right-0 top-1/4 hidden lg:flex flex-col space-y-20 text-black">
                <a
                    href="https://facebook.com"
                    className="bg-coral px-4 py-2 text-center rotate-90 transform hover:bg-peach transition duration-300 ease-in-out"
                    aria-label="Facebook"
                >
                    FACEBOOK
                </a>
                <a
                    href="https://instagram.com"
                    className="bg-peach px-4 py-2 text-center rotate-90 transform hover:bg-coral transition duration-300 ease-in-out"
                    aria-label="Instagram"
                >
                    INSTAGRAM
                </a>
            </div>
        </section>
    );
};

export default FollowUs;
