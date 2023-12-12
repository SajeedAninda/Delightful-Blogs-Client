import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/Logo/logo.png"
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import { motion } from 'framer-motion';

const Navbar = () => {
    let { signedUser, loading, logOut } = useAuth();
    let handleLogout = () => {
        logOut()
            .then(() => {
                axios.post("https://delightful-blogs-server.vercel.app/logout", signedUser?.email, { withCredentials: true })
                    .res(console.log(res.data));
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className='bg-[#1b1f20] h-fit '>
            <div className='w-[90%] py-4 lg:py-2 mx-auto flex flex-col lg:flex-row gap-2 md:gap-0 justify-between items-center'>

                <div className='flex-1 flex justify-start'>
                    <img className='w-[85px]' src={logo} alt="" />
                </div>


                <div className="links flex gap-2 justify-between items-center flex-2">
                    <NavLink
                        to={"/"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:text-[#fcf4e9a1]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:text-[#fcf4e9a1]"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to={"/addBlogs"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:text-[#fcf4e9a1]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:text-[#fcf4e9a1]"
                        }
                    >
                        Add Blogs
                    </NavLink>

                    <NavLink
                        to={"/allBlogs"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:text-[#fcf4e9a1]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:text-[#fcf4e9a1]"
                        }
                    >
                        All Blogs
                    </NavLink>

                    <NavLink
                        to={"/featuredBlogs"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:text-[#fcf4e9a1]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:text-[#fcf4e9a1]"
                        }
                    >
                        Featured Blogs
                    </NavLink>

                    <NavLink
                        to={"/myBlogs"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:text-[#fcf4e9a1]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:text-[#fcf4e9a1]"
                        }
                    >
                        My Blogs
                    </NavLink>

                    <NavLink
                        to={"/wishlist"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:text-[#fcf4e9a1]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:text-[#fcf4e9a1]"
                        }
                    >
                        Wishlist
                    </NavLink>

                </div>


                <div className=' flex-1'>
                    {
                        signedUser ?
                            <div className='flex justify-end items-center gap-3'>
                                <div>
                                    <img className='w-[30px] md:w-[50px] rounded-full' src={`${signedUser.photoURL}`} />
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <motion.button whileHover={{ scale: 1.1 }} onClick={handleLogout} className='bg-[#fcf4e9] text-[#1b1f20] font-bold border-2 border-[#1b1f20] px-4 py-2 rounded-lg hover:bg-[#1b1f20] hover:text-[#fcf4e9] hover:border-2 hover:border-[#fcf4e9]'>Logout</motion.button>
                                </div>
                            </div>
                            :
                            <div className='flex gap-2 justify-end'>
                                <Link to={"/login"}>
                                    <motion.button whileHover={{ scale: 1.1 }} className='bg-[#fcf4e9] text-[#1b1f20] py-2 px-4 rounded-md font-bold border-2 border-[#1b1f20] hover:bg-[#1b1f20] hover:text-[#fcf4e9] hover:border-2 hover:border-[#fcf4e9]'>
                                        Login
                                    </motion.button>
                                </Link>

                                <Link to={"/register"}>
                                    <motion.button whileHover={{ scale: 1.1 }}className='bg-[#fcf4e9] text-[#1b1f20] py-2 px-4 rounded-md font-bold border-2 border-[#1b1f20] hover:bg-[#1b1f20] hover:text-[#fcf4e9] hover:border-2 hover:border-[#fcf4e9]'>
                                        Register
                                    </motion.button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;