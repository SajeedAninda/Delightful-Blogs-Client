import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import errorLottie from "../../assets/Error/errorLottie.json"
import { motion } from 'framer-motion';

const ErrorPage = () => {
    let error = useRouteError();
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#fcf4e9]">
            <div className="flex items-center justify-center w-[90% mx-auto]">
                <div>
                    <Lottie animationData={errorLottie} loop={true} />
                </div>
                <div className='space-y-3 flex flex-col items-center'>
                    <p className="text-3xl font-bold text-[#1b1f20]">Oops! Page not found</p>
                    <p className="text-[#1b1f20] w-[60%]">
                        The page that you are looking for might not exist or removed. Please try later.
                    </p>
                    <p>
                        <i className='font-bold text-[#1b1f20]'>Error Message: {error.statusText || error.message}</i>
                    </p>
                    <div>
                        <Link to={"/"}>
                            <motion.button whileHover={{ scale: 1.1 }}className="px-5 py-3 font-bold rounded-lg text-[#fcf4e9]  bg-[#1b1f20] hover:text-[#1b1f20] hover:bg-[#fcf4e9] border-2 border-[#1b1f20]">
                                Go Back to Homepage
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;