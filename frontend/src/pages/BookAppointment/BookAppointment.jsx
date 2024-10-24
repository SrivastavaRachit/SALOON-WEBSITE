import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import img from '../../assets/b1.jpg';
import React, { useEffect, useState } from 'react';
import { BsSendCheckFill } from "react-icons/bs";
import Calendar from '../../components/Calendar/Calendar';

const BookAppointment = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isBooked, setIsBooked] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'hair',
    });

    const stepTitles = ['Service Selection', 'Date & Time', 'Your Information'];
    const adminWhatsAppNumber = '917651897865';

    const handleContinue = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
        else {
            const { name, phone, email } = userInfo;
            if (!name || !phone || !email || !selectedDate) {
                alert("Please fill in all the required fields before proceeding.");
                return;
            }
            setIsBooked(true);
            sendWhatsAppMessage();
        }
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const sendWhatsAppMessage = () => {
        const { name, phone, email, service } = userInfo;
        const serviceDetails = {
            hair: { name: 'Hair', price: 'Rs 1500' },
            makeup: { name: 'Makeup', price: 'Rs 3000' },
            pedicure: { name: 'Manicure & Pedicure', price: 'Rs 2000' },
        };

        const selectedService = serviceDetails[service];
        const formattedDate = selectedDate ? selectedDate.toDateString() : 'No date selected';
        const message = `*Appointment Details*:\n- *Name*: ${name}\n- *Phone*: ${phone}\n- *Email*: ${email}\n- *Service*: ${selectedService.name} - ${selectedService.price}\n- *Date*: ${formattedDate}`;
        console.log("Selected Date:", formattedDate);

        const url = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const handleInputChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar className="text-black border-black" />
            <section className="bg-white min-h-screen py-16 flex flex-col items-center">
                <Banner
                    title="Book Appointment"
                    description="Discover our range of top-quality salon services that bring out the best in you."
                    image={img}
                />

                <div className="container flex justify-center mt-12">
                    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl w-full max-w-6xl">
                        {/* Left Sidebar - Steps */}
                        <div className="w-full md:w-1/3 bg-pink-50 p-6 rounded-t-lg md:rounded-l-lg shadow-md">
                            {stepTitles.map((title, index) => (
                                <button
                                    key={index}
                                    className={`block text-lg py-4 px-6 mb-4 rounded-lg text-left font-semibold transition ${
                                        currentStep === index + 1
                                            ? 'bg-black text-white'
                                            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                                    }`}
                                    onClick={() => setCurrentStep(index + 1)}
                                >
                                    {title}
                                </button>
                            ))}
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full md:w-2/3 p-8 bg-white shadow-lg rounded-b-lg md:rounded-r-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
                            {!isBooked ? (
                                <>
                                    {currentStep === 1 && (
                                        <div>
                                            <h2 className="text-2xl font-bold mb-4">Select a Service</h2>
                                            <select
                                                name="service"
                                                className="border border-gray-300 rounded-lg p-2 w-full"
                                                value={userInfo.service}
                                                onChange={handleInputChange}
                                            >
                                                <option value="hair">Hair - Rs 1500</option>
                                                <option value="makeup">Makeup - Rs 3000</option>
                                                <option value="pedicure">Manicure & Pedicure - Rs 2000</option>
                                            </select>
                                        </div>
                                    )}

                                    {currentStep === 2 && (
                                        <Calendar onDateSelect={handleDateSelect} />
                                    )}

                                    {currentStep === 3 && (
                                        <div>
                                            <h2 className="text-2xl font-bold mb-4">Your Information</h2>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                value={userInfo.name}
                                                onChange={handleInputChange}
                                                className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={userInfo.email}
                                                onChange={handleInputChange}
                                                className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                                            />
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={userInfo.phone}
                                                onChange={handleInputChange}
                                                className="border border-gray-300 rounded-lg p-2 w-full"
                                            />
                                        </div>
                                    )}

                                    <div className="border-t mt-10 pt-4">
                                        <div className="flex justify-between">
                                            <button
                                                onClick={handleBack}
                                                disabled={currentStep === 1}
                                                className="bg-gray-300 text-gray-600 py-2 px-6 rounded-lg font-bold hover:bg-gray-400"
                                            >
                                                Back
                                            </button>
                                            <button
                                                onClick={handleContinue}
                                                className="bg-black text-white py-2 px-6 rounded-lg font-bold hover:bg-gray-800"
                                            >
                                                {currentStep === 3 ? 'Finish' : 'Continue'}
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center">
                                    <BsSendCheckFill className="text-6xl text-coral mb-4" />
                                   <h2 className="text-2xl font-bold">WE HAVE RECIEVED YOUR MESSAGE!</h2>
                                    <p>Please be on time we will be wating for you.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BookAppointment;
