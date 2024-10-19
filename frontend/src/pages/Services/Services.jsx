import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ServiceHero from '../../components/ServiceHero/ServiceHero'

const Services = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>

            <div>
                <ServiceHero/>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default Services