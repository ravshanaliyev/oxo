import React from 'react'
import { loadState } from '../config/load-state'
import { FaFacebook, FaYoutube, FaTiktok, FaTelegram, FaInstagram } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Button } from '../utils/utils';
import { Link } from 'react-router-dom';
import { useGetAllProducts } from '../service/query/useGetAllProducts';
import { useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const Profile = () => {
    const { user } = loadState("user")
    const { data, isLoading } = useGetAllProducts()
    const likedProducts = useSelector((state) => state.like.data)
    return (
        <div className='w-full bg-quaternary py-6'>
            <div className="container">
                <div className='bg-white p-4 rounded-xl flex justify-between items-center'>
                    <div>
                        <div className='flex gap-6 items-center'>
                            <img className='w-[120px] h-[120px] rounded-full object-cover' src={user?.image} alt="" />
                            <div className='flex flex-col gap-1'>
                                <h3 className='text-2xl flex items-center gap-2 font-bold'>{user?.fullname} <MdVerified className='w-6 h-6' /></h3>
                                <p>{user?.email}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6 mt-4'>
                            <div className='flex gap-3 item-center'>
                                <FaFacebook className='w-8 h-8 text-[#1877F2] cursor-pointer' />
                                <FaYoutube className='w-8 h-8 text-[#FF0302] cursor-pointer' />
                                <FaTiktok className='w-6 mt-1 h-6 text-[#000] cursor-pointer' />
                                <FaTelegram className='w-8 h-8 text-[#2AABEE] cursor-pointer' />
                                <FaInstagram className='w-8 h-8 text-[#000] cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Button className='py-[10px] px-[24px] bg-white text-primary rounded-lg border-primary border hover:text-white hover:bg-primary transition'>Sozlamalar</Button>
                        <Link to={"/create-product"}>
                            <Button className='py-[10px] px-[24px] bg-primary text-white rounded-lg border-primary border hover:text-primary hover:bg-white transition'>E&#39;lon qo&#39;shish</Button>
                        </Link>
                    </div>
                </div>
                <p className='text-xl font-bold my-6'>E&#39;lonlar</p>
                <div className='grid grid-cols-5 gap-6'>
                    {
                        data?.filter((item) => item.email === user?.email).map((product) => (
                            <div key={product.id} className="w-[210px] border bg-white rounded-lg">
                                <Link to={`/product-detail/${product.id}`}>
                                    <img className='rounded-t-lg h-[150px] w-full object-cover' src={product.image} alt="" />
                                </Link>
                                <div className='p-3'>
                                    <p>{product.title.length > 40 ? product.title.slice(0, 40) + "..." : product.title}</p>
                                    <p className='my-2 text-red text-lg'>{product.price}</p>
                                    <div className='flex justify-between'>
                                        <p className='text-secondary'>{product.location}</p>
                                        <div className='flex gap-2'>
                                            <div>
                                                {likedProducts?.findIndex((likeproduct) => likeproduct.id === product.id) !==
                                                    -1 ? (
                                                    <AiFillHeart
                                                        className="text-red text-2xl cursor-pointer"
                                                        onClick={() => dispatch(removeLike(product))}
                                                    />
                                                ) : (
                                                    <AiOutlineHeart
                                                        className="text-secondary text-2xl cursor-pointer"
                                                        onClick={() => dispatch(addLike(product))}
                                                    />
                                                )}
                                            </div>
                                            <Button className="text-secondary text-xl"><FaEdit /></Button>
                                            <Button className="text-red text-xl"><RiDeleteBinLine /></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile                                