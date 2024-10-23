import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Custom handler to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Manually close menu when a link is clicked
    const closeMenuOnLinkClick = () => {
        setIsOpen(false);
    };

    const isHomePage = location.pathname === '/';

    return (
        <nav className={`absolute top-0 left-0 w-full py-4 px-6 md:px-12 flex justify-between items-center z-10 ${isHomePage ? 'bg-transparent' : 'bg-peach'} border-b border-white`}>
            {/* Logo */}
            <div className={`text-lg md:text-xl font-roboto-mono tracking-wider ${isHomePage ? 'text-white' : 'text-black'}`}>
                <NavLink to="/" onClick={closeMenuOnLinkClick}>
                    S A L O N
                </NavLink>
            </div>

            {/* Desktop Navigation */}
            <ul className={`hidden md:flex space-x-8 ${isHomePage ? 'text-white' : 'text-black'}`}>
                {/* Manually defining each nav item */}
                <li className="relative">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${isHomePage ? 'hover:text-coral' : 'hover:text-dark'} ${isActive ? 'text-dark' : ''}`
                        }
                        onClick={closeMenuOnLinkClick}>
                        Home
                    </NavLink>
                </li>
                <li className="relative">
                    <NavLink
                        to="/book"
                        className={({ isActive }) =>
                            `${isHomePage ? 'hover:text-coral' : 'hover:text-dark'} ${isActive ? 'text-black' : ''}`
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
                            `${isHomePage ? 'hover:text-coral' : 'hover:text-dark'} ${isActive ? 'text-black' : ''}`
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
                            `${isHomePage ? 'hover:text-coral' : 'hover:text-dark'} ${isActive ? 'text-black' : ''}`
                        }
                        onClick={closeMenuOnLinkClick}
                    >
                        Our Story
                    </NavLink>
                </li>
            </ul>

            {/* Contact Us Button for Desktop */}
            <button className={`hidden md:block ${isHomePage ? 'bg-peach text-black' : 'bg-black text-white'} font-bold px-4 py-2 rounded-lg hover:bg-coral transition duration-300`}>
                <NavLink to='/contact'>
                    Contact Us
                </NavLink>
            </button>

            {/* Mobile Menu Toggle */}
            <div className={`${isHomePage ? 'text-white' : 'text-black'} md:hidden cursor-pointer`} onClick={toggleMenu}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <ul className={`absolute top-full left-0 w-full ${isHomePage ? 'bg-peach' : 'bg-peach'} shadow-md py-4 flex flex-col items-center space-y-4 text-sm font-medium md:hidden ${isHomePage ? 'text-white' : 'text-black'}`}>
                    <li className={`${isHomePage ? 'hover:text-coral' : 'hover:text-dark'}`}>
                        <NavLink
                            to="/"
                            className={`${isHomePage ? 'hover:text-coral' : 'hover:text-dark'}`}
                            onClick={closeMenuOnLinkClick}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={`${isHomePage ? 'hover:text-coral' : 'hover:text-dark'}`}>
                        <NavLink
                            to="/book"
                            className={`${isHomePage ? 'hover:text-coral' : 'hover:text-dark'}`}
                            onClick={closeMenuOnLinkClick}
                        >
                            Book Online
                        </NavLink>
                    </li>
                    <li className={`${isHomePage ? 'hover:text-coral' : 'hover:text-dark'}`}>
                        <NavLink
                            to="/service"
                            className={`${isHomePage ? 'hover:text-coral' : 'hover:text-dark'}`}
                            onClick={closeMenuOnLinkClick}
                        >
                            Service Menu
                        </NavLink>
                    </li>
                    <li className={`${isHomePage ? 'hover:text-coral' : 'hover:text-dark'}`}>
                        <NavLink
                            to="/our-story"
                            className={`${isHomePage ? 'hover:text-coral' : 'hover:text-dark'}`}
                            onClick={closeMenuOnLinkClick}
                        >
                            Our Story
                        </NavLink>
                    </li>
                    <button
                        className={`bg-black text-white px-4 py-2 rounded-full hover:bg-coral transition duration-300`}
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