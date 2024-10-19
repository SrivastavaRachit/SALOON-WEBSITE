import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
const BookAppointment = () => {
    return (
        <> <Navbar/>
            <section>
            <Banner 
                title="Our Services"
                description="Discover our range of top-quality salon services that bring out the best in you."
                image={servicesImage}
            />

            </section>
            <Footer/>
        </>
    )
}

export default BookAppointment