import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import img from '../../assets/b5.png';
import Service from '../../components/Service/Service'; // Fixed import path
import ContactMe from '../../components/Contactme/Contactme'

const servicesData = [
   {
    category: 'Hair',
    heading: 'Hair Services',
    description: 'Get the latest trendy haircuts and styles from our professional stylists.',
    services: [
        { name: 'Steps Cutting', description: 'A graduated haircut in which the hair takes the form of cascading steps.', price: 1500 },
        { name: 'Layers Cutting', description: 'A layered haircut creates the appearance of length and volume.', price: 1500 },
        { name: 'Kids Cutting', description: 'A haircut on a child age 10 & under.', price: 1000 },
        { name: 'Korean Cutting', description: 'A Korean hairstyle for men with short, medium, and long hair.', price: 2000 },
    ],
},
{
    category: 'Skincare',
    heading: 'Skincare Services',
    description: 'Rejuvenate your skin with our premium skincare treatments.',
    services: [
        { name: 'Facial Treatment', description: 'A refreshing and deep-cleansing facial for all skin types.', price: 2000 },
        { name: 'Skin Brightening', description: 'Brighten and lighten your skin tone.', price: 2500 },
        { name: 'Acne Treatment', description: 'Effective treatment to reduce acne and prevent future breakouts.', price: 2200 },
        { name: 'Anti-Aging Treatment', description: 'Combat signs of aging with our specialized treatment.', price: 3000 },
    ],
},
{
    category: 'Manicure Pedicure',
    heading: 'Manicure & Pedicure',
    description: 'Pamper yourself with our luxurious manicure and pedicure treatments.',
    services: [
        { name: 'Classic Manicure', description: 'Traditional nail grooming with a touch of style.', price: 1200 },
        { name: 'Gel Pedicure', description: 'Long-lasting gel finish for your nails.', price: 1800 },
        { name: 'Spa Manicure', description: 'Relaxing manicure with exfoliation and massage.', price: 1500 },
        { name: 'French Pedicure', description: 'Elegant French style for your toenails.', price: 2000 },
    ],
},
{
    category: 'Makeup',
    heading: 'Makeup Services',
    description: 'Professional makeup for every occasion, be it weddings or casual events.',
    services: [
        { name: 'Party Makeup', description: 'Look stunning at your next event with our expert makeup services.', price: 3000 },
        { name: 'Bridal Makeup', description: 'Elegant and timeless makeup for your special day.', price: 5000 },
        { name: 'Photo Shoot Makeup', description: 'Flawless makeup for your photo sessions.', price: 3500 },
        { name: 'Casual Makeup', description: 'Natural and subtle makeup for everyday wear.', price: 2500 },
    ],
},
{
    category: 'Facial',
    heading: 'Facial Treatments',
    description: 'Choose from a range of facial treatments to nourish your skin.',
    services: [
        { name: 'Oxygen Facial', description: 'Infuses oxygen to improve skin health.', price: 2500 },
        { name: 'Anti-Aging Facial', description: 'Reduces fine lines and revitalizes skin.', price: 3000 },
        { name: 'Hydrating Facial', description: 'Deep hydration for dry and dull skin.', price: 2700 },
        { name: 'Detox Facial', description: 'Purifies and detoxifies the skin.', price: 2800 },
    ],
},
{
    category: 'Waxing',
    heading: 'Waxing Services',
    description: 'Get silky smooth skin with our waxing services.',
    services: [
        { name: 'Full Body Wax', description: 'Complete body waxing for smooth skin.', price: 3500 },
        { name: 'Bikini Wax', description: 'Professional bikini waxing for smooth and neat results.', price: 1500 },
        { name: 'Leg Wax', description: 'Smooth and hair-free legs.', price: 1800 },
        { name: 'Arm Wax', description: 'Silky smooth arms with our waxing service.', price: 1600 },
    ],
}
];

const Services = () => {
    return ( 
        <>
            <Navbar className="text-black border-black" />
            <section className="min-h-screen pt-16  border-b border-black  flex flex-col items-center">
                <Banner
                    title="Our Services"
                    description="Discover our range of top-quality salon services that bring out the best in you."
                    image={img}
                />

                {/* Render the services multiple times with different data */}
               {servicesData.map((service, index) => (
    <div key={index} className={`w-full ${index % 2 === 0 ? 'bg-white' : 'bg-peach'}`}>
        <Service
            activeService={service.category.toLowerCase()}
            heading={<span style={{ fontFamily: 'Zeyada' }}>{service.heading}</span>}
            description={service.description}
            services={service.services}
            buttonBgColor={service.buttonBgColor}
        />
       
    </div>
))}
                <ContactMe/>
            </section>
            <Footer />
        </>
    );
};

export default Services;