import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsBookmarkStar } from 'react-icons/bs';

const AllBlogs = () => {
    let [blogsData, setBlogsData] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);

        axios.get("http://localhost:5000/blogs")
            .then((res) => {
                setBlogsData(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);


    return (
        <div className='bg-[#fcf4e9] py-12'>
            <div className='w-[90%] mx-auto'>
                <div className=' pb-12 text-center gap-2 flex flex-col justify-center items-center'>
                    <h1 className='text-center text-4xl font-bold text-[#1b1f20]'>All Blogs</h1>
                    <p className='w-[60%]'>Discover a diverse collection of thought-provoking blogs, from expert insights to inspiring stories, and stay informed and entertained with our extensive range of topics and articles</p>
                </div>
                {
                    loading ?
                        <div className='flex justify-center h-screen items-center'>
                            <span>Loading....</span>
                        </div>
                        :
                        <div className='grid grid-cols-3 gap-14'>
                            {
                                blogsData.map(blogData =>
                                    <div key={blogData._id} className='flex flex-col gap-3'>
                                        <div className='rounded-lg grow relative'>
                                            <img className='w-full h-[400px] object-cover rounded-lg' src={blogData.photoUrl} alt="" />
                                        </div>

                                        <div className='grow inline-block rounded-lg'>
                                            <h3 className='py-2 px-3 text-center rounded-md w-fit text-[#1b1f20] border-2 border-[#1b1f20] font-bold bg-[#fcf4e9]'>{blogData.categoryName}</h3>
                                        </div>
                                        <h2 className='text-xl grow text-[#1b1f20] font-bold text-left'>{blogData.title}</h2>
                                        <p className='grow'>{blogData.shortDescription}</p>

                                        <div className='grow flex gap-3 mt-2'>
                                            <button className='bg-[#1b1f20] border-2 border-[#1b1f20] px-3 rounded-lg font-bold flex gap-2 items-center text-white py-2 hover:bg-[#fcf4e9] hover:text-[#1b1f20]'>
                                                Details
                                                <AiOutlineArrowRight></AiOutlineArrowRight>
                                            </button>

                                            <button className='bg-[#1b1f20]  border-2 border-[#1b1f20] rounded-lg font-bold flex gap-2 items-center text-white px-3 py-2 hover:bg-[#fcf4e9] hover:text-[#1b1f20]'>
                                                Add Wishlist
                                                <BsBookmarkStar></BsBookmarkStar>
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AllBlogs;