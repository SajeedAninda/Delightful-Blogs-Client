import React from 'react';
import Banner from '../Banner/Banner';
import Newsletter from '../NewsLetter/Newsletter';
import Testimonial from '../Testimonial/Testimonial';
import Faq from '../FAQ/Faq';
import RecentBlogs from '../RecentBlogs/RecentBlogs';

const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <Newsletter></Newsletter>
            <Testimonial></Testimonial>
            <Faq></Faq>
        </>
    );
};

export default Homepage;