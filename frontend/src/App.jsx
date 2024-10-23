import React from 'react';
import { Route, Routes } from 'react-router-dom';

// PAGES
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import BookAppointment from './pages/BookAppointment/BookAppointment';
import Services from './pages/Services/Services';
import OurStoryPage from './pages/OurStoryPage/OurStoryPage';


// COMPONENTS
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/book" element={<BookAppointment />} />
      <Route path='/service' element={<Services />} />
      <Route path='/our-story' element={<OurStoryPage />} />
    </Routes>
  );
};

export default App;
