import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
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

const AllBlogs = () => {
    let [blogsData, setBlogsData] = useState([]);
    let [loading, setLoading] = useState(true);
    let [search, setSearch] = useState("");
    let [categoryFilter, setCategoryFilter] = useState("");
    let { signedUser } = useAuth();
    let currentUserEmail = signedUser?.email;


    const handleChange = (e) => {
        setCategoryFilter(e.target.value);
    };

    let handleSearch = (e) => {
        e.preventDefault();
        let searchQuery = e.target.searchField.value;
        setSearch(searchQuery || "");
    }

    useEffect(() => {
        setLoading(true);

        axios.get(`https://delightful-blogs-server.vercel.app/blogs?title=${search}&categoryName=${categoryFilter}`)
            .then((res) => {
                setBlogsData(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [search, categoryFilter]);

    let handleAddToWishlist = (id) => {
        if (!signedUser) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Login to add to Wishlist!'
            })
        }

        let specificBlog = blogsData.find(blog => blog._id === id);
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
            })
            .catch(error => {
                console.error('Error posting data', error);
            });
    }

    let blogsCount = blogsData.length;
    let blogsCountArr = [...Array(blogsCount).keys()];

    return (
        <div className='bg-[#fcf4e9] py-12'>
            <div className='w-[90%] mx-auto'>
                <div className=' pb-6 text-center gap-2 flex flex-col justify-center items-center relative'>
                    <h1 className='text-center text-4xl font-bold text-[#1b1f20]'>All Blogs</h1>
                    <p className='w-[60%]'>Discover a diverse collection of thought-provoking blogs, from expert insights to inspiring stories, and stay informed and entertained with our extensive range of topics and articles</p>
                    <form onSubmit={handleSearch} className='w-full flex justify-center gap-2 mt-2'>
                        <input name="searchField" className="py-2 border-2 border-[#1b1f20] px-2 rounded-md placeholder:text-[#1b1f20] w-[50%] md:w-[30%]" type="text" placeholder='Search by title' />
                        <motion.button whileHover={{ scale: 1.1 }} type='submit' className='bg-[#1b1f20] border-2 border-[#1b1f20] px-3 rounded-lg font-bold flex gap-2 items-center text-white py-2 hover:bg-[#fcf4e9] hover:text-[#1b1f20]'>Search</motion.button>
                    </form>
                    <div className='mt-3'>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Category"
                                    value={categoryFilter}
                                    onChange={handleChange}
                                    sx={{
                                        '& .MuiSelect-root': {
                                            backgroundColor: '#1b1f20',
                                        },
                                        '& .MuiSelect-icon': {
                                            color: '#1b1f20',
                                        },
                                    }}
                                >
                                    <MenuItem value="">All</MenuItem>
                                    <MenuItem value="travel">Travel</MenuItem>
                                    <MenuItem value="food">Food</MenuItem>
                                    <MenuItem value="health">Health</MenuItem>
                                    <MenuItem value="technology">Technology</MenuItem>
                                    <MenuItem value="lifestyle">Lifestyle</MenuItem>
                                    <MenuItem value="fashion">Fashion</MenuItem>
                                    <MenuItem value="education">Education</MenuItem>

                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                {
                    loading ?
                        <div>
                            {
                                !blogsCount ?
                                    (
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
                                            <Skeleton variant="rectangular" height={600} />
                                            <Skeleton variant="rectangular" height={600} />
                                            <Skeleton variant="rectangular" height={600} />
                                            <Skeleton variant="rectangular" height={600} />
                                            <Skeleton variant="rectangular" height={600} />
                                            <Skeleton variant="rectangular" height={600} />
                                        </div>
                                    )
                                    :
                                    (
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
                                            {blogsCountArr.map(count => <Skeleton variant="rectangular" height={600} />)}
                                        </div>
                                    )
                            }
                        </div>
                        :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
                            {
                                blogsData?.map(blogData =>
                                    <div key={blogData._id} className='flex flex-col gap-3' data-aos="flip-up">
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
                                                    Add Wishlist
                                                    <BsBookmarkStar></BsBookmarkStar>
                                                </motion.button>
                                            </Link>
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