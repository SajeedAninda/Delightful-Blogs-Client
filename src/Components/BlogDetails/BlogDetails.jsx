import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LongDescription from './LongDescription';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const BlogDetails = () => {
    let [comments, setComments] = useState([]);
    let blogData = useLoaderData();
    let { _id, title, photoUrl, shortDescription, longDescription, categoryName, userPhoto, userEmail, author_name } = blogData;
    let { signedUser } = useAuth();
    let currentUserEmail = signedUser?.email;
    let commentUserName = signedUser?.displayName;
    let commentUserPhoto = signedUser?.photoURL;
    let commentedBlogId = _id;

    let handleComment = (e) => {
        e.preventDefault();
        let commentText = e.target.commentsArea.value;
        let commentsData = { commentText, commentUserName, commentUserPhoto, commentedBlogId };

        axios.post("http://localhost:5000/comments", commentsData)
            .then(response => {
                console.log(response.data);
                if (response.data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Comment Posted!",
                        icon: "success"
                    });
                    e.target.commentsArea.value = "";
                }
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/comments?blogId=${_id}`)
            .then(response => {
                console.log(setComments(response.data));

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [handleComment])


    return (
        <div className='bg-[#fcf4e9]'>
            <div className='w-[90%] mx-auto py-16 flex flex-col space-y-6'>
                <h1 className='text-5xl text-[#1b1f20] font-bold'>{title}</h1>
                <img className='w-full object-cover rounded-lg' src={photoUrl} alt="" />
                <h3 className='text-2xl text-[#1b1f20] font-bold'>{shortDescription}</h3>
                <div className='flex gap-2 justify-start items-center space-x-3'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-[70px] rounded-full' src={userPhoto} alt="" />
                        <h3 className='text-xl text-[#1b1f20] font-medium'><span className='font-bold'>Author:</span> {author_name}</h3>
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
                                <Link to={`/updateBlog/${_id}`}>
                                    <button className='py-2 px-4 text-center rounded-md w-fit text-[#fcf4e9] border-2 border-[#1b1f20] font-bold bg-[#1b1f20] hover:text-[#1b1f20] hover:bg-[#fcf4e9]'>Update Blog</button>
                                </Link>
                            </div>
                            :
                            ""
                    }
                </div>
                <LongDescription longDescription={longDescription} />


                {
                    currentUserEmail === userEmail ?
                        <div className='w-2/4 py-8 rounded-md bg-red-200'>
                            <h2 className='px-4 text-lg text-[#1b1f20]'>Users can't comment on their own Blogs</h2>
                        </div>

                        :

                        <div>
                            <div><h2 className='text-3xl text-[#1b1f20] font-bold'>Comments</h2></div>
                            <form onSubmit={handleComment} className='w-[50%]'>
                                <div>
                                    <textarea className='mt-2 border-2 h-32 rounded w-full' name="commentsArea" id="commentsArea" required></textarea>
                                </div>
                                <div className='flex justify-between mt-2 mb-4'>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-[40px] rounded-full' src={signedUser?.photoURL} alt="" />
                                        <p className='text-[#1b1f20]'>Commenting as {signedUser?.displayName}</p>
                                    </div>
                                    <button type='submit' className='py-2 px-4 text-center rounded-md w-fit text-[#fcf4e9] border-2 border-[#1b1f20] font-bold bg-[#1b1f20] hover:text-[#1b1f20] hover:bg-[#fcf4e9]'>Submit Comment</button>
                                </div>
                            </form>
                        </div>
                }
                {
                    comments.map(comment =>
                        <div className='w-2/4 py-8 px-4 mt-4 rounded-md bg-red-200 flex items-center justify-start'>
                            <div className='w-[10%]'>
                                <img className='w-[60px] rounded-full' src={comment.commentUserPhoto} alt="" />
                            </div>
                            <div className='flex flex-col w-[90%]'>
                                <p className='px-4 text-[#1b1f20] font-bold'>{comment.commentUserName}</p>
                                <h2 className='px-4 text-lg text-[#1b1f20]'>{comment.commentText}</h2>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default BlogDetails;
