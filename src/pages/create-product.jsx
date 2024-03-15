import React, { useEffect } from 'react'
import { Button } from '../utils/utils'
import { useForm } from 'react-hook-form'
import { useCreateProduct } from '../service/mutation/useCreateProduct'
import { loadState } from '../config/load-state'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {
    const navigate = useNavigate()
    const [categoryName, setCategoryName] = React.useState('hobbi')
    const { register, handleSubmit } = useForm()
    const { mutate } = useCreateProduct(categoryName)
    const onSubmit = (data) => {
        console.log(data);
        mutate(data, {
            onSuccess: (res) => {
                console.log(res)
            },
            onError: (error) => {
                console.log(error)
            }
        })
    }
    useEffect(() => {
        if (!loadState("user").accessToken) {
            navigate("/login")
        }
    },)
    return (
        <div className='bg-[#F6F6F6] py-6'>
            <div className='w-[1111px] mx-auto'>
                <h1 className='text-2xl mb-3'>E&#39;lon berish</h1>
                <div className='rounded-xl px-6 py-5 bg-white '>
                    <h2 className='text-xl mb-4'>Bizga e&#39;loningiz haqida gapirib bering</h2>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-gray-500  text-sm' htmlFor="name">Sarlavha kiriting</label>
                        <input {...register('title', { required: true })} className='h-[44px] border  rounded-lg px-4 mt-1  bg-[#F6F6F6]' id='name' type="text" placeholder='Masalan iphone 13 pro max' />
                    </div>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-gray-500 text-sm' htmlFor="rukn">Rukn</label>
                        <select   {...register('category', { required: true })} className='h-[44px] border  rounded-lg px-4 mt-1  bg-[#F6F6F6]' name="rukn" id="rukn">
                            <option value="home">Home</option>
                            <option value="hobbi">Hobbi</option>
                            <option value="garden">Garden</option>
                            <option value="cars">Cars</option>
                            <option value="children-for">Children for</option>
                            <option value="service">Service</option>
                            <option value="animals">Animals</option>
                            <option value="free">Free</option>
                            <option value="exchange">Exchange</option>
                        </select>
                    </div>
                </div>
                <div className='rounded-xl px-6 py-5 bg-white mt-6'>
                    <h2 className='text-xl mb-1'>Bizga e&#39;loningiz haqida gapirib bering</h2>
                    <p className='text-gray-500 mb-4'>Birinchi surat e&#39;loningiz asosiy rasmi bo&#39;ladi. Suratlar tartibini ularning ustiga bosib va olib o&#39;tish bilan o&#39;zgartirishingiz mumkin.</p>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-gray-500  text-sm' htmlFor="image">Rasm qo&#39;shing</label>
                        <input {...register('image', { required: true })} className='h-[44px] border  rounded-lg px-4 mt-1  bg-[#F6F6F6]' id='image' type="text" placeholder='Masalan https://www.heathermurphygroup.com/wp-content/uploads/2024/03/Savannah-Home-Listings-800x569.jpg' />
                    </div>
                </div>
                <div className='rounded-xl px-6 py-5 bg-white mt-6  '>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-gray-500  text-sm' htmlFor="desc">Tavsif</label>
                        <textarea {...register('desc', { required: true })} rows={8} className='border  rounded-lg px-4 mt-1  bg-[#F6F6F6] py-2' id='desc' type="text" placeholder='E&#39; lon haqida batafsil' />
                    </div>
                    <div className="flex justify-between w-[780px]">
                        <p>Yana kamida 80 ta belgi yozing</p>
                        <p>0/9000</p>
                    </div>
                </div>
                <div className='rounded-xl px-6 py-5 bg-white mt-6  '>
                    <h2 className='text-xl mb-4'>Siz bilan bog&#39;lanish uchun</h2>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-gray-500  text-sm' htmlFor="place">Joylashuv</label>
                        <input {...register('location', { required: true })} className='border  rounded-lg px-4 mt-1  bg-[#F6F6F6] py-2 h-[44px]' id='place' type="text" placeholder='Masalan Toshkent, Bektemir tumani' />
                    </div>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-gray-500  text-sm' htmlFor="fullname">Ism</label>
                        <input {...register('fullname', { required: true })} className='border  rounded-lg px-4 mt-1  bg-[#F6F6F6] py-2 h-[44px]' id='fullname' type="text" placeholder='Ismingizni kiriting' />
                    </div>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-gray-500  text-sm' htmlFor="email">Email manzil</label>
                        <input {...register('email', { required: true })} className='border  rounded-lg px-4 mt-1  bg-[#F6F6F6] py-2 h-[44px]' id='email' type="text" placeholder='Email manzilingiz' />
                    </div>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-gray-500  text-sm' htmlFor="tel-number">Telefon raqam</label>
                        <input {...register('tel-number', { required: true })} className='border  rounded-lg px-4 mt-1  bg-[#F6F6F6] py-2 h-[44px]' id='tel-number' type="text" placeholder='Telefon raqamingiz' />
                    </div>
                </div>
                <div className='flex justify-end mt-4'>
                    <Button type="submit" onClick={handleSubmit(onSubmit)} className="bg-[#19191C] rounded-lg px-16 py-[12px] text-white text-[16px]">E&#39;lon joylash</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct