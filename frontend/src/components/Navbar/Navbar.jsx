import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState('');
    const location = useLocation(); // Track the current route

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = (navItem) => {
        setActiveNavItem(navItem);
    };

    const handleMouseLeave = () => {
        setActiveNavItem('');
    };

    const closeMenuOnLinkClick = () => {
        setIsOpen(false); // Close menu after clicking on a link
    };

    return (
        <nav className="absolute top-0 left-0 w-full py-4 px-6 md:px-12 flex justify-between items-center z-10 bg-transparent border-b border-white">
            {/* Logo */}
            <div className="text-lg md:text-xl font-roboto-mono tracking-wider text-white">
                <Link to="/" onClick={closeMenuOnLinkClick}>
                    S A L O N
                </Link>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8 text-white">
                {['Home', 'Book Online', 'Service Menu', 'Our Story'].map((item, index) => {
                    const path = `/${item.replace(/\s+/g, '-').toLowerCase()}`;
                    const isActive = location.pathname === path;

                    return (
                        <li
                            key={index}
                            className="relative cursor-pointer"
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                to={path}
                                className={`hover:text-peach ${isActive ? 'text-peach' : ''}`}
                                onClick={closeMenuOnLinkClick}
                            >
                                {item}
                            </Link>
                            <div
                                className={`absolute bottom-[-5px] left-0 h-[2px] transition-all duration-300 ease-out ${
                                    activeNavItem === item || isActive ? 'w-full bg-peach' : 'w-0'
                                }`}
                            />
                        </li>
                    );
                })}
            </ul>

            {/* Contact Us Button for Desktop */}
            <button className="hidden md:block bg-peach font-bold text-black px-4 py-2 rounded-lg hover:bg-coral transition duration-300">
                Contact Us
            </button>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <ul className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 text-sm font-medium md:hidden">
                    {['Home', 'Book Online', 'Service Menu', 'Our Story'].map((item, index) => {
                        const path = `/${item.replace(/\s+/g, '-').toLowerCase()}`;

                        return (
                            <li key={index} className="hover:text-peach cursor-pointer">
                                <Link to={path} onClick={closeMenuOnLinkClick}>
                                    {item}
                                </Link>
                            </li>
                        );
                    })}
                    <button
                        className="bg-peach text-white px-4 py-2 rounded-full hover:bg-coral transition duration-300"
                        onClick={toggleMenu}
                    >
                        Contact Us
                    </button>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
