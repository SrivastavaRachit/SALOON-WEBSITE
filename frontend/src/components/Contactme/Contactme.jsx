import React, { useState, useEffect } from 'react';
import { RiHeartsFill } from "react-icons/ri";
import img from '../../assets/i1.jpg';
import img2 from '../../assets/i5.jpg';
import gsap from 'gsap';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [scrollZoom, setScrollZoom] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.phone) formErrors.phone = 'Phone number is required';
        if (!formData.message) formErrors.message = 'Message is required';
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setSubmitted(true);
            setErrors({});
            console.log('Form Submitted:', formData);
        } else {
            setErrors(formErrors);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrollZoom(true);
            } else {
                setScrollZoom(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const imgRef1 = React.useRef(null);
    const imgRef2 = React.useRef(null);

   

    return (
        <div className="min-h-screen relative w-full items-center justify-center bg-blush p-8">
            {/* Contact Us Section */}
            <div className="flex flex-col lg:flex-row items-center">
                {/* Left Image */}
                <div className="w-full lg:w-1/2 p-4">
                    <img
                        ref={imgRef1}
                        src={img}
                        alt="Product 1"
                        className={`rounded-lg w-full h-full object-cover transition-transform duration-1000 ${scrollZoom ? 'scale-110' : ''} mb-8 lg:mb-0`}
                    />
                </div>
                {/* Right Contact Form */}
                <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg ml-10 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                                placeholder="Name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Phone number</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                                placeholder="Phone number"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                                placeholder="Email Address"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                                placeholder="Subject"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded h-28"
                                placeholder="Message"
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-peach text-black py-2 px-4 rounded-lg font-bold hover:bg-black hover:text-white transition duration-300"
                        >
                            Send Message
                        </button>

                        {submitted && <p className="mt-4 text-green-500">Message sent successfully!</p>}
                    </form>
                </div>
            </div>

            {/* Join Our Team Section */}
            <div className="flex flex-col lg:flex-row-reverse items-center mt-8">
                {/* Right Image */}
                <div className="w-full lg:w-1/2 p-4">
                    <img
                        ref={imgRef2}
                        src={img2}
                        alt="Product 2"
                        className="rounded-lg w-full h-full object-cover transition-transform duration-1000 scale-90"
                    />
                </div>
                {/* Left Join Content */}
                <div className="w-full lg:w-1/2 text-center bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center">
                        <RiHeartsFill className="text-peach text-3xl mb-2" />
                        <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
                    </div>
                    <p className="text-lg mb-2">Please send us an email telling us a bit about yourself</p>
                    <button type="submit" className=" bg-peach text-black py-2 px-4  inline-block rounded-lg font-bold hover:bg-black hover:text-white transition duration-300">
                        salon@gmail.com
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;