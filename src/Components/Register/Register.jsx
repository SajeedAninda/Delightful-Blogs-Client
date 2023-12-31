import React from 'react';
import lottieRegister from "../../assets/Register/Register.json"
import Lottie from "lottie-react";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { getAuth, updateProfile } from 'firebase/auth';
import { app } from '../Authentication/firebase.config';
import { motion } from 'framer-motion';
let auth = getAuth(app);

let Register = () => {
    let { register, logOut } = useAuth();
    let navigate = useNavigate();

    let handleRegister = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let imgURL = e.target.imgURL.value;

        if (password.length < 6) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters long.'
            });
        }

        if (!/[A-Z]/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must contain at least one capital letter.'
            });
        }

        if (!/\d/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must contain at least one numeric character.'
            });
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must contain at least one special character.'
            });
        }

        register(email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: imgURL
                }).then(() => {
                    logOut()
                        .then(() => {
                            console.log("After Sign Up Logged out user to login again");
                            Swal.fire(
                                'Registration Successful!',
                                'Please login with your email and password.',
                                'success'
                            );
                            navigate('/login');
                        }).catch((error) => {
                            console.error("Error logging out:", error);
                        });
                }).catch((error) => {
                    console.error("Error updating profile:", error);
                });
            })
            .catch((error) => {
                let errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'This email is already in use.'
                    });
                } else {
                    console.error("Registration error:", error);
                }
            });
    }




    return (
        <div className='bg-[#fcf4e9]'>
            <div className='w-[90%] mx-auto flex flex-col md:flex-row-reverse justify-between items-center'>
                <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-[#1b1f2098] to-[#1b1f20] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-bold text-[#1b1f20]">Please Register With Your Info</h1>
                                </div>
                                <form onSubmit={handleRegister}>
                                    <div className="divide-y divide-gray-200">
                                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <div className="relative">
                                                <input id="email" name="email" type="text" required className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                                <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                            </div>
                                            <div className="relative">
                                                <input id="password" name="password" type="password" required className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                                <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                            </div>


                                            <div className="relative">
                                                <input id="name" name="name" type="text" required className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Full Name" />
                                                <label for="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Full Name </label>
                                            </div>

                                            <div className="relative">
                                                <input id="imgURL" name="imgURL" type="text" required className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Image URL" />
                                                <label for="imgURL" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Image URL </label>
                                            </div>
                                            <div className="relative">
                                                <motion.button whileHover={{ scale: 1.1 }} type='submit' className="bg-[#1b1f20] font-bold text-white rounded-md px-5 py-2">Register</motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className='text-center mt-4 font-medium'>
                                <h2>Already have an Account? <Link className='font-bold hover:underline' to={"/login"}>Login</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Lottie animationData={lottieRegister} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Register;