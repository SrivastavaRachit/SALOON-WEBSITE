import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import OurStory from '../../components/OurStory/OurStory'

const OurStoryPage = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>

            <div>
                <OurStory/>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default OurStoryPage