import React from 'react'

import Hero from '../../components/Hero/Hero'
import ServiceHero from '../../components/ServiceHero/ServiceHero'
import OurStory from '../../components/OurStory/OurStory'
import AsSeen from '../../components/AsSeen/AsSeen'
import ContactTime from '../../components/ContactTime/ContactTime'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
    return (
        <>
            <div>
                <Navbar/>
                <Hero />
                <ServiceHero />
                <OurStory />
                <AsSeen/>
                <ContactTime />
                <Footer/>
            </div>
        </>
    )
}

export default Home