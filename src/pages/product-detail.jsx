import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProduct } from '../service/query/useGetSingleProduct'
import HomeSearch from '../components/home-search'
import { Button } from '../utils/utils'
import { MdArrowBackIos } from "react-icons/md";
import { GoDotFill } from 'react-icons/go'
import { FaArrowRight, FaUserCircle, FaPhoneAlt, FaRegFolderOpen } from "react-icons/fa";
import Locat from '../assets/location.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { addLike, removeLike } from '../redux/slices/like-slice'
import { IoEyeOutline } from "react-icons/io5";
import { MdEmojiFlags } from "react-icons/md";
import Cards from '../components/cards'

const ProductDetail = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetSingleProduct(id)
    const likedProducts = useSelector((state) => state.like.data)
    const dispatch = useDispatch()
    console.log(id);
    return (
        <div className='w-full bg-quaternary'>
            <div className="container py-6">
                <HomeSearch />
                <div className="flex gap-10 items-center">
                    <Button onClick={() => window.history.back()} className={"flex items-center text-lg font-semibold"}><MdArrowBackIos /> Orqaga</Button>
                    <div className='flex items-center gap-1 '>
                        <p className='text-[#464646]'>Barcha elonlar</p>
                        <GoDotFill className='w-3 mt-1 h-3 text-[#464646]' />
                        <p>{data?.category.toUpperCase()}</p>
                    </div>
                </div>
                <div className="flex w-full my-6 gap-6">
                    <div className="w-2/3 ">
                        <img className='rounded-xl h-[500px]' src={data?.image} alt="" />
                    </div>
                    <div className="w-1/3 ">
                        <div className='bg-white rounded-xl py-6 px-4'>
                            <h3 className='text-xl font-semibold'>Foydalanuvchi</h3>
                            <div className='flex gap-4 my-4'>
                                <FaUserCircle className='w-10 h-10 mt-2 cursor-pointer' />
                                <div>
                                    <strong>{data?.fullname}</strong>
                                    <p>Ro’yxatdan o’tgan sanasi 2024</p>
                                    <p className='text-secondary'>{data?.location}</p>
                                    <Button className={"flex items-center gap-2"}>Barcha elonlar <FaArrowRight className='w-4 mt-[3px] h-3' /></Button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl p-4 mt-8'>
                            <div className='flex gap-4 my-4'>
                                <img src={Locat} alt="" />
                                <div>
                                    <strong>{data?.location}</strong>
                                    <p>Mirzo ulug’bek tumani</p>
                                    <p className='text-secondary'>Sizdan 9 km uzoqlikda</p>
                                </div>
                            </div>
                            <img className='rounded-lg' src="https://s3-alpha-sig.figma.com/img/d2f5/7a34/f0cae4146ee31d7a1d2a367d968069cc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jjb79XPwnEtU~skvSVHxDLIwYyY8QqILjV3jQkUoJG5VsV8aWrY31Pocc5Mz7dLV5VTDi7ZKPsaXZbFWDXS5tVScAJZJg40CjRb2zEW1nWLOFoWrFQKWJqb0I1tw84MsDOOxCqbbP1OnnHx~9uRc96uAYTvzwINAdlXJ2UuIVHShi0zcB8Lfr7q~DJ3Pg7uUD71XZ6ORn3YfOI4lVC-e0bJR0X3GwYVu2ZHs5RMEfx2~SFzyrXnvUEAoll5D1KOtZcLTVCI~PKKdIpSGwm2GPBaE79UE5BrZfrpUOAWeFm~nPUv99NjdgFPCr-Ldci857I4P-bOvHEYpCE6CRmnWTg__" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex w-full gap-6">
                    <div className="w-2/3">
                        <div className='bg-white rounded-xl py-6 px-4'>
                            <div className="flex justify-between">
                                <p>Joylashtirildi bugun 21:22</p>
                                <div>
                                    {likedProducts?.findIndex((likeproduct) => likeproduct.id === data?.id) !==
                                        -1 ? (
                                        <AiFillHeart
                                            className="text-red text-2xl cursor-pointer"
                                            onClick={() => dispatch(removeLike(data))}
                                        />
                                    ) : (
                                        <AiOutlineHeart
                                            className="text-secondary text-2xl cursor-pointer"
                                            onClick={() => dispatch(addLike(data))}
                                        />
                                    )}
                                </div>
                            </div>
                            <h2 className='text-[24px] my-4 font-semibold'>{data?.title}</h2>
                            <p className='text-secondary'><span className='text-red text-[28px]'>{data?.price} </span> Kelishiladi</p>
                            <h3 className='text-xl  my-3'>Tavsif</h3>
                            <p className='pb-6 border-b-[2px] border-b-[#979C9E]'>{data?.desc}</p>
                            <div className="flex justify-between py-4">
                                <p>ID: {data?.id}</p>
                                <div className="flex items-center gap-2">
                                    <IoEyeOutline className='w-5 h-5' />
                                    <p>Ko&#39;rishlar: 187</p>
                                </div>
                                <Button className={"flex items-center gap-2 text-red"}><MdEmojiFlags className='w-5 h-5' /> Shikoyat qilish</Button>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl p-4 mt-8'>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-4 my-4'>
                                    <FaUserCircle className='w-10 h-10 mt-2 cursor-pointer' />
                                    <div>
                                        <strong>{data?.fullname}</strong>
                                        <p className='text-secondary'>{data?.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <FaPhoneAlt />
                                        <strong className='text-primary text-[18px]'>xxx xxx xxx</strong>
                                    </div>
                                    <Button className={"border text-[16px] text-primary border-primary px-6 py-1"}>Ko&#39;rsatish</Button>
                                </div>
                            </div>
                            <div>
                                <textarea className='w-full h-[200px] border rounded-xl  bg-quaternary p-4' name="" id="" ></textarea>
                            </div>
                            <div className="flex justify-between my-4">
                                <Button className={"flex items-center gap-1 text-[16px] text-primary border-primary px-6 py-1"}><FaRegFolderOpen /> Fayl biriktish</Button>
                                <Button className={" text-[14px] text-white border-primary bg-primary px-6 py-2 rounded-md"}>Yuborish</Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <img className='rounded-xl max-h-[850px] w-full object-cover' src="https://s3-alpha-sig.figma.com/img/ac17/37ca/cd6c6dac0be27682bd8badb94a5b3919?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZR6JwzEjlLGpKqPAgHpKDcDPXrLo2sJYm1wsSUSTjOrIYmQC5FBDOxDu0Hawxnt532S08zCuqCV0XwLzpPSYxOlJLnojPiojLtv6Z5~tGLuxOX7sTZYybupcTnUOlAxGmkOTrArCqOCUjHXIOyp1W0HjFaUAVkj-4P-xbWGzvPQERFaashcgD7Y8N3ONTERJWBGKzLiBYrrAl~jpIojqUAG7UZJR4rsFy0ZmW9jOjMr0zBAXSLTChUtkUnNXvTP-rYZjvJb~xjkV3ilAfSRer1s9YM9GvpxeAI0-LABYyOHPopaEWcm7-MYGMOEM9vkZg8mgjRcHyOlXI8wtkzuGvA__" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail