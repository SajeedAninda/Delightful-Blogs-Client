import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsBookmarkStar } from 'react-icons/bs';


const RecentBlogs = () => {
    let [recentBlogsData, setRecentBlogsData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/blogsByDate")
            .then(res => setRecentBlogsData(res.data));
    }, [])
    return (
        <div className='bg-[#fcf4e9] py-12'>
            <div className='w-[90%] mx-auto'>
                <div>
                    <h1 className='text-center text-4xl font-bold pb-12 text-[#1b1f20]'>Our Recent Blogs</h1>
                </div>
                <div className='grid grid-cols-3 gap-14'>
                    {
                        recentBlogsData.map(blogData =>
                            <div key={blogData._id} className='flex flex-col gap-3'>
                                <div className='rounded-lg grow relative'>
                                    <img className='w-full h-[400px] object-cover rounded-lg' src={blogData.photoUrl} alt="" />
                                </div>

                                <div className='grow inline-block rounded-lg'>
                                    <h3 className='p-2 text-center rounded-md w-fit text-[#1b1f20] border-2 border-[#1b1f20] font-bold bg-[#fcf4e9]'>{blogData.categoryName}</h3>
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
            </div>
        </div>
    );
};

export default RecentBlogs;