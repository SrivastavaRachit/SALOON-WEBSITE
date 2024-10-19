import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Custom handler to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Manually close menu when a link is clicked
    const closeMenuOnLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="absolute top-0 left-0 w-full py-4 px-6 md:px-12 flex justify-between items-center z-10 bg-transparent border-b border-white">
            {/* Logo */}
            <div className="text-lg md:text-xl font-roboto-mono tracking-wider text-white">
                <NavLink to="/" onClick={closeMenuOnLinkClick}>
                    S A L O N
                </NavLink>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8 text-white">
                {/* Manually defining each nav item */}
                <li className="relative">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `hover:text-peach ${isActive ? 'text-peach' : ''}`
                        }
                        onClick={closeMenuOnLinkClick}>
                        Home
                    </NavLink>
                </li>
                <li className="relative">
                    <NavLink
                        to="/book"
                        className={({ isActive }) =>
                            `hover:text-peach ${isActive ? 'text-peach' : ''}`
                        }
                        onClick={closeMenuOnLinkClick}
                    >
                        Book Online
                    </NavLink>
                </li>
                <li className="relative">
                    <NavLink
                        to="/service"
                        className={({ isActive }) =>
                            `hover:text-peach ${isActive ? 'text-peach' : ''}`
                        }
                        onClick={closeMenuOnLinkClick}
                    >
                        Service Menu
                    </NavLink>
                </li>
                <li className="relative">
                    <NavLink
                        to="/our-story"
                        className={({ isActive }) =>
                            `hover:text-peach ${isActive ? 'text-peach' : ''}`
                        }
                        onClick={closeMenuOnLinkClick}
                    >
                        Our Story
                    </NavLink>
                </li>
            </ul>

            {/* Contact Us Button for Desktop */}
            <button className="hidden md:block bg-peach font-bold text-black px-4 py-2 
            rounded-lg hover:bg-coral transition duration-300">
                <NavLink to='/contact'>
                    Contact Us
                </NavLink>
            </button>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <ul className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 text-sm font-medium md:hidden">
                    <li className="hover:text-peach">
                        <NavLink
                            to="/"
                            className="hover:text-peach"
                            onClick={closeMenuOnLinkClick}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="hover:text-peach">
                        <NavLink
                            to="/book"
                            className="hover:text-peach"
                            onClick={closeMenuOnLinkClick}
                        >
                            Book Online
                        </NavLink>
                    </li>
                    <li className="hover:text-peach">
                        <NavLink
                            to="/service"
                            className="hover:text-peach"
                            onClick={closeMenuOnLinkClick}
                        >
                            Service Menu
                        </NavLink>
                    </li>
                    <li className="hover:text-peach">
                        <NavLink
                            to="/our-story"
                            className="hover:text-peach"
                            onClick={closeMenuOnLinkClick}
                        >
                            Our Story
                        </NavLink>
                    </li>
                    <button
                        className="bg-peach text-white px-4 py-2 rounded-full hover:bg-coral transition duration-300"
                        onClick={toggleMenu}>
                        <NavLink to='/contact'>
                            Contact Us
                        </NavLink>
                    </button>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
