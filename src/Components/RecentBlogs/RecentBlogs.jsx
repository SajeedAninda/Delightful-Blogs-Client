import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsBookmarkStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Skeleton from '@mui/material/Skeleton';

const RecentBlogs = () => {
    let { signedUser } = useAuth();
    let currentUserEmail = signedUser?.email;

    let [recentBlogsData, setRecentBlogsData] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios.get("https://delightful-blogs-server.vercel.app/blogsByDate")
            .then(res => {
                setRecentBlogsData(res.data);
                setIsLoading(false);
            });
    }, []);

    let handleAddToWishlist = (id) => {
        if (!signedUser) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Login to add to Wishlist!'
            })
        }

        let specificBlog = recentBlogsData.find(blog => blog._id === id);
        let { _id, title, photoUrl, shortDescription, categoryName } = specificBlog;
        let previousId = _id;
        let blogItems = { title, photoUrl, shortDescription, categoryName, currentUserEmail, previousId };

        axios.post('https://delightful-blogs-server.vercel.app/wishlist', blogItems)
            .then(response => {
                console.log('Post request successful', response.data);
                if (response.data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Added to wishlist',
                        'success'
                    )
                }
                if (response.data.success == false) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Blog Already Exists in Wishlist!"
                    });
                }
            })
            .catch(error => {
                console.error('Error posting data', error);
            });
    }

    return (
        <div className='bg-[#fcf4e9] py-12'>
            <div className='w-[90%] mx-auto'>
                <div>
                    <h1 className='text-center text-4xl font-bold pb-12 text-[#1b1f20]'>Our Recent Blogs</h1>
                </div>

                {isLoading ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
                        <Skeleton variant="rectangular" height={600} />
                        <Skeleton variant="rectangular" height={600} />
                        <Skeleton variant="rectangular" height={600} />
                        <Skeleton variant="rectangular" height={600} />
                        <Skeleton variant="rectangular" height={600} />
                        <Skeleton variant="rectangular" height={600} />
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
                        {recentBlogsData.map(blogData => (
                            <div key={blogData._id} className='flex flex-col gap-3'>
                                <PhotoProvider>
                                    <div className='rounded-lg grow relative'>
                                        <PhotoView src={blogData.photoUrl}>
                                            <img className='w-full h-[400px] object-cover rounded-lg' src={blogData.photoUrl} alt="" />
                                        </PhotoView>
                                    </div>
                                </PhotoProvider>

                                <div className='grow inline-block rounded-lg'>
                                    <h3 className='py-2 px-3 text-center rounded-md w-fit text-[#1b1f20] border-2 border-[#1b1f20] font-semibold bg-[#fcf4e9]'>{(blogData.categoryName)?.toUpperCase()}</h3>
                                </div>
                                <h2 className='text-xl grow text-[#1b1f20] font-bold text-left'>{blogData.title}</h2>
                                <p className='grow'>{blogData.shortDescription}</p>

                                <div className='grow flex gap-3 mt-1'>
                                    <Link to={`blogDetails/${blogData._id}`}>
                                        <motion.button whileHover={{ scale: 1.1 }} className='bg-[#1b1f20] border-2 border-[#1b1f20] px-3 rounded-lg font-bold flex gap-2 items-center text-white py-2 hover:bg-[#fcf4e9] hover:text-[#1b1f20]'>
                                            Details
                                            <AiOutlineArrowRight></AiOutlineArrowRight>
                                        </motion.button>
                                    </Link>

                                    <Link>
                                        <motion.button whileHover={{ scale: 1.1 }} onClick={() => handleAddToWishlist(blogData._id)} className='bg-[#1b1f20]  border-2 border-[#1b1f20] rounded-lg font-bold flex gap-2 items-center text-white px-3 py-2 hover:bg-[#fcf4e9] hover:text-[#1b1f20]'>
                                            Add to Wishlist
                                            <BsBookmarkStar></BsBookmarkStar>
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecentBlogs;
