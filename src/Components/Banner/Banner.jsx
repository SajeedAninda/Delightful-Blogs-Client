import React from 'react';
import Lottie from "lottie-react";
import bannerLottie from "../../assets/Banner/bannerLottie.json"

const Banner = () => {
    return (
        <div className='bg-[#fcf4e9]'>
            <div className='w-[90%] h-fit py-16 mx-auto flex flex-col md:flex-row items-center justify-between'>
                <div className='flex-1 space-y-2'>
                    <h2 className='text-[#1b1f20] font-bold text-2xl md:text-3xl lg:text-4xl'>Delightful Blogs</h2>
                    <h1 className='text-[#1b1f20] font-bold text-4xl md:text-5xl lg:text-6xl'>Connecting Hearts and Minds Through the Art of Blogging</h1>
                </div>

                <div className='flex-1'>
                    <Lottie animationData={bannerLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Banner;