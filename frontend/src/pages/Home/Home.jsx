import React, { useEffect } from 'react'

import Hero from '../../components/Hero/Hero'
import ServiceHero from '../../components/ServiceHero/ServiceHero'
import OurStory from '../../components/OurStory/OurStory'
import AsSeen from '../../components/AsSeen/AsSeen'
import ContactTime from '../../components/ContactTime/ContactTime'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import FollowUs from '../../components/FollowUs/FollowUs'
import Instagram from '../../components/Instagram/Instagram'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        
    }, []);

    return (
        <>
            <div className="overflow-x-hidden">
                <Navbar />
                    <Hero />
                    <ServiceHero />
                    <OurStory />
                    <AsSeen />
                    <FollowUs />
                    <Instagram />
                    <ContactTime />
                <Footer />
            </div>
        </>
    )
}

export default Home
