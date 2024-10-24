import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null); // Reference to the menu
    const buttonRef = useRef(null); // Reference to the toggle button

    // Custom handler to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden'; // Lock scrolling
    };

    // Manually close menu when a link is clicked
    const closeMenuOnLinkClick = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto'; // Enable scrolling
    };

    const isHomePage = location.pathname === '/';

    useEffect(() => {
        // Scroll to top when the Home component is loaded
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Close the menu if clicked outside
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
                document.body.style.overflow = 'auto'; // Reset scrolling
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav
            className={`absolute top-0 left-0 w-full py-4 px-6 md:px-12 flex justify-between items-center z-20 
            ${isHomePage ? 'bg-transparent' : 'bg-peach'} border-b border-white`}
        >
            {/* Logo */}
            <div
                className={`text-lg md:text-xl font-roboto-mono tracking-wider 
                ${isHomePage ? 'text-white' : 'text-black'}`}
            >
                <NavLink to="/" onClick={closeMenuOnLinkClick}>
                    S A L O N
                </NavLink>
            </div>

            {/* Desktop Navigation */}
            <ul
                className={`hidden md:flex space-x-8 
                ${isHomePage ? 'text-white' : 'text-black'}`}
            >
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${isHomePage ? 'hover:text-coral' : 'hover:text-dark'} ${isActive ? 'text-dark' : ''}`
                        }
                        onClick={closeMenuOnLinkClick}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
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
                <li>
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
                <li>
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
            <button
                className={`hidden md:block 
                ${isHomePage ? 'bg-peach text-black' : 'bg-black text-white'} 
                font-bold px-4 py-2 rounded-lg hover:bg-coral transition duration-300`}
            >
                <NavLink to="/contact">Contact Us</NavLink>
            </button>

            {/* Mobile Menu Toggle */}
            <div
                ref={buttonRef}
                className={`md:hidden cursor-pointer 
                ${isHomePage ? 'text-white' : 'text-black'}`}
                onClick={toggleMenu}
            >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <ul
                    ref={menuRef}
                    className={`absolute top-full left-0 w-full 
                    ${isHomePage ? 'bg-peach' : 'bg-peach'} 
                    shadow-md py-4 flex flex-col items-center space-y-4 text-sm font-medium md:hidden`}
                >
                    <li>
                        <NavLink to="/" onClick={closeMenuOnLinkClick}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/book" onClick={closeMenuOnLinkClick}>
                            Book Online
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service" onClick={closeMenuOnLinkClick}>
                            Service Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/our-story" onClick={closeMenuOnLinkClick}>
                            Our Story
                        </NavLink>
                    </li>
                    <button
                        className="bg-black text-white px-4 py-2 rounded-full hover:bg-coral transition duration-300"
                        onClick={toggleMenu}
                    >
                        <NavLink to="/contact">Contact Us</NavLink>
                    </button>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
