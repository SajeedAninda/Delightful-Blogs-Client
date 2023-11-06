import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    let [wishlistData, setWishlistData] = useState([]);
    let { signedUser } = useAuth();
    let loggedUserEmail = signedUser?.email;
    console.log(wishlistData);


    useEffect(() => {
        axios.get(`http://localhost:5000/wishlist?email=${loggedUserEmail}`)
            .then(response => {
                setWishlistData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [signedUser]);

    let handleDelete = (id) => {
        axios.delete(`http://localhost:5000/wishlist/${id}`)
            .then(response => {
                console.log('Delete request successful', response.data);
                if (response.data.deletedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Deleted From Wishlist!',
                        'success'
                    )
                }
            })
            .catch(error => {
                console.error('Error deleting data', error);
            });
        let remainingWishListData = wishlistData.filter(list => list._id !== id);
        setWishlistData(remainingWishListData);
    }

    return (
        <div className='bg-[#fcf4e9]'>
            <div className='w-[90%] h-full mx-auto flex flex-col justify-center items-center gap-10 py-12'>
                {
                    wishlistData.length === 0 ?
                        <div className=" flex justify-center items-center">
                            <h1 className="text-[#1b1f20] text-5xl py-12 font-bold">No Blogs in Wishlist</h1>
                        </div>
                        :
                        (
                            wishlistData.map((list) => (
                                <div className=" place-items-center" key={list._id}>
                                    <div className="bg-[#fcf4e9] rounded-md shadow-lg mb-12 py-5 h-fit w-fit">
                                        <div className="md:flex md:flex-col px-4 leading-none max-w-4xl">
                                            <div className='flex flex-col md:flex-row gap-6'>
                                                <div className="flex-none grow">
                                                    <img
                                                        src={list.photoUrl}
                                                        alt="pic"
                                                        className="h-72 w-80 object-cover rounded-md shadow-2xl transform -translate-y-4 border-4 border-[#1b1f20]"
                                                    />
                                                </div>

                                                <div className="flex-col text-[#1b1f20]">
                                                    <p className="px-4 text-2xl font-bold grow">{list.title}</p>
                                                    <hr className="hr-text" data-content="" />
                                                    <div className="text-md flex justify-between px-4 my-2 grow">
                                                        <h3 className='py-2 px-3 text-center rounded-md w-fit text-[#1b1f20] border-2 border-[#1b1f20] font-semibold bg-[#fcf4e9]'>{(list.categoryName).toUpperCase()}</h3>
                                                    </div>
                                                    <p className="px-4 my-4 text-sm text-left grow">{list.shortDescription}</p>
                                                    <div className="text-md font-bold flex gap-3 grow">
                                                        <button
                                                            onClick={() => handleDelete(list._id)}
                                                            type="button"
                                                            className="border border-[#1b1f20] text-[#1b1f20] rounded-md px-5 py-3 mt-4 transition duration-300 ease select-none hover:text-white hover:bg-[#1b1f20] focus:outline-none focus:shadow-outline"
                                                        >
                                                            Delete From list
                                                        </button>

                                                        <Link to={`blogDetails/${list.previousId}`}>
                                                            <button
                                                                type="button"
                                                                className="border border-[#1b1f20] text-[#1b1f20] rounded-md px-5 py-3 mt-4 transition duration-300 ease select-none hover:text-white hover:bg-[#1b1f20] focus:outline-none focus:shadow-outline"
                                                            >
                                                                Details
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                }


            </div>
        </div>
    );
};

export default Wishlist;
