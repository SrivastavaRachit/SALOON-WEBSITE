import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import bgInsta from '../../assets/bgInsta.jpg';
import Contactme from '../../components/Contactme/Contactme'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar className="text-black border-black" />
            <section className="min-h-screen pt-16 border-b border-black flex flex-col items-center">
                <Banner
                    title="Contact Us"
                    description="Get in touch with us for any inquiries or assistance. Our team is here to 
                    help you with all your needs and ensure a seamless experience."
                    image={bgInsta}
                />
                <Contactme />
            </section>
            <Footer />
        </>
    )
}

export default Contact