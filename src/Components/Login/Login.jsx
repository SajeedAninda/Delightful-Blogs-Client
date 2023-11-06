import React from 'react';
import lottieLogin from "../../assets/Login/login.json"
import Lottie from "lottie-react";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
    let { login, googleLogin, gitLogin } = useAuth();
    let navigate = useNavigate();

    let handleLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        login(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                Swal.fire(
                    'Good job!',
                    'Login Successful!',
                    'success'
                )
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
                navigate('/');
            })
            .catch((error) => {
                let errorCode = error.code;
                if (errorCode === "auth/invalid-login-credentials") {
                    return Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Invalid Email or Password!'
                    })
                }
            });
    }

    let handleGithub = () => {
        gitLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire(
                    'Good job!',
                    'Login Successful!',
                    'success'
                )
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
                navigate(location?.state ? location.state : '/');
            }).catch((error) => {
                console.log(error);
            });
    }

    let handleGoogle = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire(
                    'Good job!',
                    'Login Successful!',
                    'success'
                )
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
                navigate('/');
            }).catch((error) => {
                console.log(error);
            });
    }




    return (
        <div className='bg-[#fcf4e9]'>
            <div className='w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-center'>
                <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-[#1b1f2098] to-[#1b1f20] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-bold text-[#1b1f20]">Login With Your Email & Password</h1>
                                </div>
                                <form onSubmit={handleLogin}>
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
                                                <button type='submit' className="bg-[#1b1f20] font-bold text-white rounded-md px-5 py-2">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>




                            <div>
                                <div className="bg-white rounded-t-lg">
                                    <p className="text-center text-sm text-[#1b1f20] font-semibold">Or Sign in with</p>
                                    <div>
                                        <div className="flex items-center justify-center space-x-4 mt-3">
                                            <button
                                                onClick={handleGithub}
                                                className="flex items-center py-3 px-6 text-sm uppercase rounded bg-white hover:bg-gray-100 text-[#033430] border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16"
                                                    className="w-8 h-8 mr-3"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                                    ></path>
                                                </svg>
                                                Github
                                            </button>
                                            <button
                                                onClick={handleGoogle}
                                                className="flex items-center py-3 px-6 text-sm uppercase rounded bg-white hover:bg-gray-100 text-[#033430] border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-8 h-8 mr-3"
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        fill="#fbc02d"
                                                        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                                                    />
                                                    <path
                                                        fill="#e53935"
                                                        d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                                                    />
                                                    <path
                                                        fill="#4caf50"
                                                        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                                                    />
                                                    <path
                                                        fill="#1565c0"
                                                        d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                                                    />
                                                </svg>
                                                Google
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center mt-4 font-medium'>
                                <h2>Don't have an Account? <Link className='font-bold hover:underline' to={"/register"}>Register</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Lottie animationData={lottieLogin} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Login;