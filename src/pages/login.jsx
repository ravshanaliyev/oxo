import React, { useEffect } from 'react'
import LoginImg from '../assets/login.svg'
import { Button } from '../utils/utils'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useLogin } from '../service/mutation/useLogin'
import { loadState, saveState } from '../config/load-state'
const Login = () => {
    const { register, handleSubmit } = useForm()
    const { mutate, isError } = useLogin()
    const navigate = useNavigate()
    const submit = (data) => {
        mutate(data, {
            onSuccess: (res) => {
                saveState("user", res)
                navigate("/")
            },
            onError: (error) => {
                console.log(error)
            }
        })
    }
    useEffect(() => {
        if (loadState("user")?.accessToken) {
            navigate("/")
        }
    }, [])
    return (
        <div style={{ backgroundImage: `url(${LoginImg})`, backgroundPosition: 'bottom left', backgroundRepeat: 'no-repeat' }} className='w-full h-[90vh]  flex justify-center items-center'>
            <div className='w-[407px] border shadow-lg rounded-lg px-10 py-8'>
                <div className="flex w-full justify-between">
                    <Link to={"/login"} className='text-[20px]  border-primary border-b-[4px] pb-1  w-[40%] text-center   '>Kirish</Link>
                    <Link to={"/register"} className='text-[20px] pb-1 border-b-[4px] border-b-[#E1E1E1] w-[60%] text-center'>Ro&#39;yxatdan o&#39;tish</Link>
                </div>
                <p className='text-red mt-5'>{isError && "Email yoki parol xato"}</p>
                <form className='mt-4' onSubmit={handleSubmit(submit)}>
                    <div className="flex flex-col gap-1">
                        <label className='text-sm text-tertiary' htmlFor="email">Email</label>
                        <input {...register("email", { required: true })} className='border p-2 rounded' type="email" name="email" id="email" placeholder='Email manzilini kiriting' />
                    </div>
                    <div className="flex flex-col gap-1 mt-4">
                        <label className='text-sm text-tertiary' htmlFor="password">Parol</label>
                        <input {...register("password", { required: true })} className='border p-2 rounded' type="password" name="password" id="password" placeholder='Parolni kiriting' />
                    </div>
                    <Button type='submit' id="login-btn" className="bg-primary rounded-xl px-4 py-3 text-white text-[16px] mt-6 w-full">Kirish</Button>
                </form>
            </div>
        </div>
    )
}

export default Login