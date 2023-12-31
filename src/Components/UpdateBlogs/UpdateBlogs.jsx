import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const UpdateBlogs = () => {
    let blogsData = useLoaderData();
    let navigate = useNavigate();

    let handleCategory = (e) => {
        setCategory(e.target.value);
    }
    let { _id, title, photoUrl, shortDescription, longDescription, categoryName } = blogsData;
    let [category, setCategory] = useState(categoryName);

    let handleUpdate = (e) => {
        e.preventDefault();
        let title = e.target.title.value;
        let categoryName = category;
        let photoUrl = e.target.photo.value;
        let shortDescription = e.target.shortDescription.value;
        let longDescription = e.target.longDescription.value;
        let updateData = { title, categoryName, photoUrl, shortDescription, longDescription };


        axios.patch(`https://delightful-blogs-server.vercel.app/updateBlog/${_id}`, updateData, { withCredentials: true }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                console.log(response.data);
                if (response.data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Blog Updated Successfully!',
                        'success'
                    )
                    navigate(`/allBlogs/blogDetails/${_id}`)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            <div class="min-h-screen p-6 bg-white flex items-center justify-center">
                <div class="w-[90%] mx-auto">
                    <div>
                        <h2 class="font-bold text-2xl text-[#1b1f20]">Update Blog</h2>
                        <p class="text-[#1b1f20] font-semibold mb-3">Empower Your Voice: Share Your Story, Insights, and Creativity</p>

                        <div class="bg-[#fcf4e9] rounded shadow-xl p-4 px-4 md:p-8 mb-6">
                            <div class="grid gap-6 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div class="text-gray-600">
                                    <p class="font-medium text-lg w-[80%] text-[#1b1f20]">Welcome to our Blog Update Page. Refine your thoughts! Please provide a Title, Image URL, Select a Category, Write down a short description and also a long description of your Blog while updating. Then proceed to click the Update button to update your Blog.</p>
                                </div>

                                <div class="lg:col-span-2">
                                    <form onSubmit={handleUpdate} class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div class="md:col-span-3">
                                            <label for="title" className='text-base font-medium text-[#1b1f20]'>Blog Title</label>
                                            <input defaultValue={title} type="text" name="title" id="title" class="h-10 border-2 mt-1 rounded px-4 w-full bg-white" required />
                                        </div>

                                        <div onChange={handleCategory} value={category} name="category" class="relative h-10 w-fit min-w-[200px] mt-6">
                                            <select defaultValue={categoryName} class="peer h-full w-full rounded-[7px] border border-[#1b1f20] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-[#1b1f20]  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1b1f20] placeholder-shown:border-t-[#1b1f20]  empty:!bg-red-500 focus:border-2 focus:border-[#1b1f20] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                                <option value="travel">Travel</option>
                                                <option value="food">Food</option>
                                                <option value="health">Health</option>
                                                <option value="technology">Technology</option>
                                                <option value="lifestyle">Lifestyle</option>
                                                <option value="fashion">Fashion</option>
                                                <option value="education">Education</option>
                                            </select>
                                            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-sm font-medium leading-tight text-[#1b1f20] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1b1f20]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1b1f20] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#1b1f20]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#1b1f20] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#1b1f20] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#1b1f20] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1b1f20] ">
                                                Select a Category
                                            </label>
                                        </div>

                                        <div class="md:col-span-5">
                                            <label className='text-base font-medium text-[#1b1f20]' for="photo">Image URL</label>
                                            <input defaultValue={photoUrl} type="text" name="photo" id="photo" class="h-10 border-2 mt-1 rounded px-4 w-full bg-white" required />
                                        </div>

                                        <div class="md:col-span-5">
                                            <label className='text-base font-medium text-[#1b1f20]' for="shortDescription">Short Description</label>
                                            <input defaultValue={shortDescription} type="text" name="shortDescription" id="shortDescription" class="h-10 border-2 mt-1 rounded px-4 w-full bg-white" required />
                                        </div>

                                        <div class="md:col-span-5">
                                            <label for="longDescription" className='text-base font-medium text-[#1b1f20]'>Long Description</label>
                                            <textarea defaultValue={longDescription} className='mt-1 border-2 h-32 rounded w-full' name="longDescription" id="longDescription" required></textarea>
                                        </div>

                                        <motion.button whileHover={{ scale: 1.1 }} type='submit' class="md:col-span-5 border-2 border-[#1b1f20] py-2 font-bold bg-[#1b1f20] text-[#fcf4e9] rounded-lg text-lg hover:bg-[#fcf4e9] hover:text-[#1b1f20]">
                                            Update
                                        </motion.button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlogs;