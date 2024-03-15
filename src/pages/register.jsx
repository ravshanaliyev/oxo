import React, { useEffect } from 'react'
import LoginImg from '../assets/login.svg'
import { Button } from '../utils/utils'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useRegister } from '../service/mutation/useRegister'
import { loadState, saveState } from '../config/load-state'
import Cookies from 'js-cookie'
const Register = () => {
    const navigate = useNavigate()
    const { mutate, isError, isLoading } = useRegister()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const submit = (data) => {
        mutate(data, {
            onSuccess: (res) => {
                saveState("user", res)
                navigate("/")
                Cookies.set("token", res.accessToken, { expires: 7 })
            },
            onError: (error) => {
                console.log(error)
            }
        })
        reset()
    }
    useEffect(() => {
        if (loadState("user")?.accessToken) {
            navigate("/")
        }
    }, [])
    return (
        <div style={{ backgroundImage: `url(${LoginImg})`, backgroundPosition: 'bottom left', backgroundRepeat: 'no-repeat' }} className='w-full h-[90vh] flex justify-center items-center '>
            <div className='w-[407px] border shadow-lg rounded-lg px-10 py-4'>
                <div className="flex justify-between">
                    <Link to={"/login"} className='text-[20px]  pb-1 w-[40%] text-center border-b-[4px] border-b-[#E1E1E1] '>Kirish</Link>
                    <Link to={"/register"} className='text-[20px] border-[#19191C] border-b-[4px] pb-1 w-[60%] text-center'>Ro&#39;yxatdan o&#39;tish</Link>
                </div>
                <p className='text-red-500 mt-2'>{isError && "Email yoki parol xato"}</p>
                <form className='mt-2' onSubmit={handleSubmit(submit)}>
                    <div className="flex flex-col gap-1 mt-4 ">
                        <label className='text-sm text-[#979C9E]' htmlFor="image">Rasm</label>
                        <input {...register("image", { required: true })} className='border p-2 rounded' type="text" name="image" id="image" placeholder='Rasmingizni kiriting' />
                    </div>
                    <div className="flex flex-col gap-1 mt-4 ">
                        <label className='text-sm text-[#979C9E]' htmlFor="fullname">Ism va Familiya</label>
                        <input {...register("fullname", { required: true })} className='border p-2 rounded' type="text" name="fullname" id="fullname" placeholder='Ism familiyangizni kiriting' />
                    </div>
                    <div className="flex flex-col gap-1 mt-4 ">
                        <label className='text-sm text-[#979C9E]' htmlFor="city">Joylashuv</label>
                        <input {...register("city", { required: true })} className='border p-2 rounded' type="text" name="city" id="city" placeholder='Yashaydigan shaharni manzilini kiriting' />
                    </div>
                    <div className="flex flex-col gap-1 mt-4 ">
                        <label className='text-sm text-[#979C9E]' htmlFor="username">Username</label>
                        <input {...register("username", { required: true })} className='border p-2 rounded' type="text" name="username" id="username" placeholder='Username kiriting' />
                    </div>
                    <div className="flex flex-col gap-1 mt-4 ">
                        <label className='text-sm text-[#979C9E]' htmlFor="email">Email</label>
                        <input {...register("email", { required: true })} className='border p-2 rounded' type="email" name="email" id="email" placeholder='Email manzilini kiriting' />
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <label className='text-sm text-[#979C9E]' htmlFor="password">Parol</label>
                        <input {...register("password", { required: true })} className='border p-2 rounded' type="password" name="password" id="password" placeholder='Parolni kiriting' />
                    </div>
                    <Button type='submit' id="login-btn" className="bg-[#19191C] rounded-xl px-4 py-3 text-white text-[16px] mt-6 w-full">Ro&#39;yxatdan o&#39;tish</Button>
                </form>
            </div>
        </div>
    )
}

export default Register