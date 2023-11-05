import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LongDescription from './LongDescription';
import useAuth from '../Hooks/useAuth';

const BlogDetails = () => {
    let blogData = useLoaderData();
    let { title, photoUrl, shortDescription, longDescription, categoryName, userPhoto, userEmail } = blogData;
    let { signedUser } = useAuth();
    let currentUserEmail = signedUser?.email;
    console.log(currentUserEmail, userEmail);

    return (
        <div className='bg-[#fcf4e9]'>
            <div className='w-[90%] mx-auto py-16 flex flex-col space-y-6'>
                <h1 className='text-5xl text-[#1b1f20] font-bold'>{title}</h1>
                <img className='w-full object-cover rounded-lg' src={photoUrl} alt="" />
                <h3 className='text-2xl text-[#1b1f20] font-bold'>{shortDescription}</h3>
                <div className='flex gap-2 justify-start items-center space-x-3'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-[70px] rounded-full' src={userPhoto} alt="" />
                        <h3 className='text-xl text-[#1b1f20] font-medium'><span className='font-bold'>Author Email:</span> {userEmail}</h3>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold text-[#1b1f20]'>||</h1>
                    </div>
                    <div className='rounded-lg'>
                        <h3 className='py-2 px-3 text-center rounded-md w-fit text-[#1b1f20] border-2 border-[#1b1f20] font-semibold bg-[#fcf4e9]'>{(categoryName).toUpperCase()}</h3>
                    </div>
                    {
                        currentUserEmail === userEmail ?
                            <div className='rounded-lg'>
                                <button className='py-2 px-4 text-center rounded-md w-fit text-[#fcf4e9] border-2 border-[#1b1f20] font-bold bg-[#1b1f20] hover:text-[#1b1f20] hover:bg-[#fcf4e9]'>Update Blog</button>
                            </div>
                            :
                            ""
                    }
                </div>
                <LongDescription longDescription={longDescription} />
            </div>
        </div>
    );
};

export default BlogDetails;
