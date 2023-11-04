import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/Logo/logo.png"

const Navbar = () => {
    return (
        <div className='bg-[#1b1f20] h-fit '>
            <div className='w-[90%] py-2 mx-auto flex justify-between items-center'>

                <div className='flex-1 flex justify-start'>
                    <img className='w-[85px]' src={logo} alt="" />
                </div>


                <div className="links flex gap-2 justify-between items-center flex-2">
                    <NavLink
                        to={"/"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-lg text-[#fcf4e9] rounded-md" : "text-lg p-2 text-[#fcf4e9]"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to={"/addBlogs"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-lg text-[#fcf4e9] rounded-md" : "text-lg p-2 text-[#fcf4e9]"
                        }
                    >
                        Add Blogs
                    </NavLink>

                    <NavLink
                        to={"/allBlogs"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-lg text-[#fcf4e9] rounded-md" : "text-lg p-2 text-[#fcf4e9]"
                        }
                    >
                        All Blogs
                    </NavLink>

                    <NavLink
                        to={"/featuredBlogs"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-lg text-[#fcf4e9] rounded-md" : "text-lg p-2 text-[#fcf4e9]"
                        }
                    >
                        Featured Blogs
                    </NavLink>

                    <NavLink
                        to={"/wishlist"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-lg text-[#fcf4e9] rounded-md" : "text-lg p-2 text-[#fcf4e9]"
                        }
                    >
                        Wishlist
                    </NavLink>

                </div>


                <div className='flex gap-2 flex-1 justify-end'>
                    <Link to={"/login"}>
                        <button className='bg-[#fcf4e9] text-[#1b1f20] py-2 px-4 rounded-md font-bold border border-[#1b1f20] hover:bg-[#1b1f20] hover:text-[#fcf4e9] hover:border hover:border-[#fcf4e9]'>
                            Login
                        </button>
                    </Link>

                    <Link to={"/register"}>
                        <button className='bg-[#fcf4e9] text-[#1b1f20] py-2 px-4 rounded-md font-bold border border-[#1b1f20] hover:bg-[#1b1f20] hover:text-[#fcf4e9] hover:border hover:border-[#fcf4e9]'>
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;