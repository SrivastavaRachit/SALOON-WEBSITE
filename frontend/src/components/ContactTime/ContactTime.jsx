// ContactTime.jsx
import React from 'react';
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../../assets/time.json';
import animationData2 from '../../assets/contact.json';
import animationData3 from '../../assets/location.json';

// ServiceItem Component
const ServiceItem = ({ icon, title }) => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20">{icon}</div>
    <h3 className="mt-2 text-lg font-semibold text-black">{title}</h3>
  </div>
);

const ContactTime = () => {
  return (
    <div className="w-full flex justify-center items-center py-10 bg-white">
      <div className="w-full max-w-screen-lg flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-6 px-4">
        {/* Contact Section */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-peach p-4 rounded-full mb-3">
            <ServiceItem
              icon={<Lottie animationData={animationData2} loop={true} />}
              
            />
          </div>
          <h3 className="text-lg font-bold tracking-wider text-black">CONTACT</h3>
          <p className="text-gray-700 mt-2">T: 070 9485 7568</p>
          <p className="text-gray-700">info@beautysalon.com</p>
        </div>

        {/* Dotted Line */}
        <div className="hidden md:block border-l border-dotted border-gray-300 h-24"></div>

        {/* Hours Section */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-peach p-4 rounded-full mb-3">
            <ServiceItem
              icon={<Lottie animationData={animationData} loop={true} />}
            
            />
          </div>
          <h3 className="text-lg font-bold tracking-wider text-black">HOURS</h3>
          <p className="text-gray-700 mt-2">Mon to Fri: 7:30 am – 1:00 am</p>
          <p className="text-gray-700">Sat: 9:00 am – 1:00 am</p>
          <p className="text-gray-700">Sun: 9:00 am – 11:30 pm</p>
        </div>

        {/* Dotted Line */}
        <div className="hidden md:block border-l border-dotted border-gray-300 h-24"></div>

        {/* Location Section */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-peach p-4 rounded-full mb-3">
            <ServiceItem
              icon={<Lottie animationData={animationData3} loop={true} />}
             
            />
          </div>
          <h3 className="text-lg font-bold tracking-wider text-black">LOCATION</h3>
          <p className="text-gray-700 mt-2">85 Royal Mint Street</p>
          <p className="text-gray-700">London, E1 8LG</p>
          <p className="text-gray-700">United Kingdom</p>
        </div>
      </div>
    </div>
  );
};

export default ContactTime;
