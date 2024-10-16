import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing React Icons

import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the hamburger menu
    const toggleMenu = (event) => {
        event.stopPropagation(); // Prevent the click event from closing the menu
        setIsOpen(!isOpen);
    };

    // Close the menu if clicking outside of the navbar when mobile menu is open
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.custom-navbar')) {
                setIsOpen(false); // Close the menu if clicked outside
            }
        };

        if (isOpen) {
            window.addEventListener('click', handleClickOutside);
        } else {
            window.removeEventListener('click', handleClickOutside);
        }

        return () => window.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    return (
        <nav className="absolute top-0 left-0 w-full py-4 px-4 md:px-8 flex justify-between custom-navbar
            items-center z-10 bg-opacity-60 bg-pink-800 shadow-md">
            {/* Logo */}
            <div className="text-lg md:text-xl font-bold">
                <Link to='/'>
                    SALON
                </Link>
            </div>

            {/* Menu for larger screens */}
            <ul className="hidden md:flex space-x-4 md:space-x-8 text-sm md:text-base font-medium">
                <li className="hover:text-pink-400 cursor-pointer">
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li className="hover:text-pink-400 cursor-pointer">
                    <Link to='/book'>
                        Book Your Appointment
                    </Link>
                </li>
                <li className="hover:text-pink-400 cursor-pointer">
                    <Link to=''>
                        Service Menu
                    </Link>
                </li>
                <li className="hover:text-pink-400 cursor-pointer">
                    <Link to='/about'>
                        Our Story
                    </Link>
                </li>
            </ul>

            {/* Contact Us Button */}
            <button className="hidden md:block bg-pink-400 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-pink-500 transition duration-300">
                <Link to='/contact'>
                    Contact Us
                </Link>
            </button>

            {/* Hamburger Icon for mobile */}
            <div className="md:hidden text-pink-400 cursor-pointer" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 text-sm font-medium md:hidden">
                    <li className="hover:text-pink-400 cursor-pointer" onClick={toggleMenu}>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="hover:text-pink-400 cursor-pointer" onClick={toggleMenu}>
                        <Link to='/book'>
                            Book Your Appointment
                        </Link>
                    </li>
                    <li className="hover:text-pink-400 cursor-pointer" onClick={toggleMenu}>
                        <Link to=''>
                            Service Menu
                        </Link>
                    </li>
                    <li className="hover:text-pink-400 cursor-pointer" onClick={toggleMenu}>
                        <Link to='/about'>
                            Our Story
                        </Link>
                    </li>
                    <button className="bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-500 transition duration-300" onClick={toggleMenu}>
                        <Link to='/contact'>
                            Contact Us
                        </Link>
                    </button>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;