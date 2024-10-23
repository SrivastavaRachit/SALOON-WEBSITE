import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../../assets/cut (1).json';
import animationData2 from '../../assets/Individual.json';
import animationData3 from '../../assets/Heart.json';
import animationData4 from '../../assets/Female Avatar (1).json';
import animationData5 from '../../assets/Eye.json';
import animationData6 from '../../assets/Community.json';

const ServicesPage = ({ activeService, heading, description, services, bgColor }) => {
    const navigate = useNavigate();

    const serviceCategories = [
        { name: 'Hair', animation: animationData },
        { name: 'Makeup', animation: animationData4 },
        { name: 'Manicure Pedicure', animation: animationData3 },
        { name: 'Skincare', animation: animationData2 },
        { name: 'Facial', animation: animationData5 },
        { name: 'Waxing', animation: animationData6 }
    ];

    return (
        <div className={`${bgColor} min-h-screen flex w-full`}>
            {/* Sidebar with Lottie icons */}
            <div className="w-1/4 bg-transparent flex flex-col items-center py-10 space-y-8">
                {serviceCategories.map((category, index) => (
                    <div key={index} className="text-center flex flex-col items-center justify-center">
                        <div className="mb-2">
                            <Lottie 
                                animationData={category.animation} 
                                loop={true} 
                                style={{ 
                                    width: '60px', 
                                    height: '60px', 
                                    display: 'flex',
                                    justifyContent: 'center', 
                                    alignItems: 'center' 
                                }} 
                            />
                        </div>
                        <p className={`text-lg font-semibold ${activeService === category.name.toLowerCase() ? 'underline underline-offset-8' : ''}`}>
                            {category.name}
                        </p>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="w-3/4 px-10 py-10 flex flex-col items-end mt-28">
                <div className="w-full text-center">
                    <h1 className="text-4xl font-bold mb-8">{heading}</h1>
                    <h2 className="text-xl font-semibold mb-12">{description}</h2>

                    <div className="grid grid-cols-2 gap-6 mt-28">
                        {services.map((service, index) => (
                            <div key={index} className="border-b border-dark border-dashed pb-4 mb-4">
                                <h3 className="text-sm font-bold">{service.name}</h3>
                                <p className="text-xs text-gray-500">{service.description}</p>
                                <span className="block text-sm font-semibold text-gray-700">Rs {service.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Book Appointment Button */}
                <div className="w-full flex justify-center mt-10">
                    <button
                        className="py-3 px-6 rounded-md font-bold bg-peach text-black border border-black 
                        transition duration-300 hover:bg-black hover:text-white"
                        onClick={() => navigate('/book')}
                    >
                        Book an Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
