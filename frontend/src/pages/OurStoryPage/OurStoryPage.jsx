import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import img from '../../assets/b4.jpg'
import OurStory1 from '../../components/OurStory/OurStory'
import OurStory3 from '../../components/OurStory3/OurStory3'
import Contact from '../../components/ContactTime/ContactTime'

import OurStory from '../../components/Our StoryPart1/OurStoryP1'

const OurStoryPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar className="text-black border-black" />
            <section className="min-h-screen pt-16 border-b border-black flex flex-col items-center">
                <Banner
                    title="Our Story"
                    description="Explore our exceptional salon services, meticulously crafted to enhance your natural
                        beauty and provide a rejuvenating experience. From hair styling to skincare, our expert team is 
                        dedicated to delivering personalized care that leaves you feeling refreshed and confident." image={img}
                />
                <OurStory />
                <OurStory1 isSubheading={true} style={{ fontFamily: 'Zeyada' }} />
                <OurStory3 />
                <Contact />

            </section>
            <Footer />
        </>
    )
}

export default OurStoryPage