import React from 'react';
import Appointment from '../../Appointment/Appointment/Appointment';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;