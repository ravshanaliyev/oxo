import React from 'react'
import { loadState } from '../config/load-state'
import { FaFacebook, FaYoutube, FaTiktok, FaTelegram, FaInstagram } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Button } from '../utils/utils';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user } = loadState("user")
    return (
        <div className='w-full bg-quaternary py-6'>
            {/* <img className='w-full h-[300px]  object-center' src="https://s3-alpha-sig.figma.com/img/b30a/1dbd/4e575ae40261e28c7dea0bdc1946fb61?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CNUiRHadJsmUxSuMVXst16zafMTR0C~JpWE8kj2iG8nGAHPrtfV8GPSb5Vy4TA8y78ekpyqukcDptQxXwrLV0ZWrhl-Xkf2bdbHi8kg~zotEmVzmH~UqlUNF2Zcf6tOaC~Zc7nYebqc8PYr1IeoAJuxUkPoIycPLewFWswTSm47IPRRzA~c8P8VLGdA~xKoaEfQBRRrgrQOq728NXfEmBwMv0A7oVrXDWEgXvEENFIn51Ksg2U2HaSZs0EHBZLy4ceUNYjPysAMvj6usL3IAodeUdxtgsTzlsLyeS7w~qX9i9mDSIjLxf3khC0-7WB7P-NVtTDonrO0GkAeMDtAb4g__" alt="" />
            <div className='container relative bg-yellow-200'>
                <div className="absolute z-50 top-[-185px] left-0 flex items-center gap-6 ">
                    <img className='w-[160px] h-[160px] rounded-full object-cover  border-[10px] border-white' src={user?.image} alt="" />
                    <div className='flex flex-col gap-6'>
                        <h3 className='text-3xl text-white flex items-center gap-2 font-bold'>{user?.fullname} <MdVerified className='w-6 h-6' /></h3>
                        <div className='flex gap-3 item-center'>
                            <FaFacebook className='w-8 h-8 text-[#1877F2] cursor-pointer' />
                            <FaYoutube className='w-8 h-8 text-[#FF0302] cursor-pointer' />
                            <FaTiktok className='w-6 mt-1 h-6 text-[#000] cursor-pointer' />
                            <FaTelegram className='w-8 h-8 text-[#2AABEE] cursor-pointer' />
                            <FaInstagram className='w-8 h-8 text-[#000] cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='mt-[100px] '>
                    <div className="flex">
                        <p className='text-white text-xl font-bold'>E&#39;lonlar</p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, minima laboriosam repudiandae corporis voluptatum totam vero, natus exercitationem, hic laudantium iste. Laboriosam similique voluptatum culpa a possimus quaerat voluptates esse officiis repellendus facere iure sapiente, magni consequuntur fuga? Nihil tempore minus porro omnis reiciendis nobis dolor aliquid doloribus maxime fuga.
                    </div>
                </div>
            </div> */}
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
            </div>
        </div>
    )
}

export default Profile                                