import React from 'react'
import Logo from '../assets/x.svg'
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Button } from '../utils/utils';
import { Link } from 'react-router-dom';
import { loadState } from '../config/load-state';

const Navbar = () => {
    const user = loadState("user")
    return (
        <div className='w-full shadow fixed top-0 left-0 z-50 bg-white'>
            <div className='w-[1111px] mx-auto flex justify-between items-center  h-[72px]'>
                <Link to="/">
                    <img className='h-[30px]' src={Logo} alt="" />
                </Link>
                <div className="flex gap-8">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <FaRegCommentAlt className='w-5 h-5' />
                        <p className='text-[16px]'>Xabarlar</p>
                    </div>
                    <Link to="/liked" className="flex items-center gap-2">
                        <FaRegHeart className='w-5 h-5' />
                        <p className='text-[16px]'>Yoqtirganlar</p>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-2">
                        <FaRegUser className='w-5 h-5' />
                        <p className='text-[16px]'>Profil</p>
                    </Link>
                    <select name="" id="">
                        <option value="uz">uz</option>
                        <option value="en">en</option>
                        <option value="ru">ru</option>
                    </select>
                    {
                        user ? (
                            <Link to={"/create-product"} >
                                <Button id="login-btn" className="bg-[#19191C] rounded-lg px-4 py-2 text-white text-[16px]">E'lonlarni joylashtirish</Button>
                            </Link>
                        ) : (
                            <Link to={"/login"} >
                                <Button id="login-btn" className="bg-[#19191C] rounded-lg px-4 py-2 text-white text-[16px]">E'lonlarni joylashtirish</Button>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar