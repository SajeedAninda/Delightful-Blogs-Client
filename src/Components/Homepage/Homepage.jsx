import React from 'react';
import Banner from '../Banner/Banner';
import Newsletter from '../NewsLetter/Newsletter';
import Footer from '../Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';

const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <Newsletter></Newsletter>
            <Testimonial></Testimonial>
        </>
    );
};

export default Homepage;