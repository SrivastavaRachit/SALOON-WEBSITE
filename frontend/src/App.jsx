import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// PAGES
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import BookAppointment from './pages/BookAppointment/BookAppointment';

// COMPONENTS


const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/book-online" element={<BookAppointment />} />
      </Routes>
    
  );
};

export default App;
