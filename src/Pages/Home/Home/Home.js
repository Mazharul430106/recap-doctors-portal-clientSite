import React from 'react';
import Appointment from '../../Appointment/Appointment/Appointment';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;