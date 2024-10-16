import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import OurStory from '../../components/OurStory/OurStory'
import Footer from '../../components/Footer/Footer'

const AboutUs = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            
            <div>
                <OurStory />
            </div>
            
            <div>
                <Footer />
            </div>
        </>
    )
}

export default AboutUs