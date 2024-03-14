import React from 'react'
import LoginImg from '../assets/login.svg'
import { Button } from '../utils/utils'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div style={{ backgroundImage: `url(${LoginImg})`, backgroundPosition: 'bottom left', backgroundRepeat: 'no-repeat' }} className='w-full h-screen flex justify-center items-center'>
            <div className='w-[407px] border shadow-lg rounded-lg px-10 py-8'>
                <div className="flex justify-between">
                    <Link to={"/login"} className='text-[20px]  border-[#19191C] border-b-[2px]'>Kirish</Link>
                    <Link to={"/register"} className='text-[20px]'>Ro&#39;yxatdan o&#39;tish</Link>
                </div>
                <form className='mt-6'>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input className='border p-2 rounded' type="email" name="email" id="email" placeholder='Email manzilini kiriting' />
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="password">Parol</label>
                        <input className='border p-2 rounded' type="password" name="password" id="password" placeholder='Parolni kiriting' />
                    </div>
                    <Button id="login-btn" className="bg-[#19191C] rounded-xl px-4 py-3 text-white text-[16px] mt-6 w-full">Kirish</Button>
                </form>
            </div>
        </div>
    )
}

export default Login