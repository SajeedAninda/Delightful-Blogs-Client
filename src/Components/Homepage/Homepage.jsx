import React from 'react';
import Banner from '../Banner/Banner';
import Newsletter from '../NewsLetter/Newsletter';
import Footer from '../Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';
import Faq from '../FAQ/Faq';

const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <Newsletter></Newsletter>
            <Testimonial></Testimonial>
            <Faq></Faq>
        </>
    );
};

export default Homepage;