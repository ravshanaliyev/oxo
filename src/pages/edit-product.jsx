import React, { useEffect } from 'react'
import { Button } from '../utils/utils'
import { useForm } from 'react-hook-form'
import { loadState } from '../config/load-state'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useEditProduct } from '../service/mutation/useEditProduct'

const EditProduct = () => {
    const navigate = useNavigate()
    const [categoryName, setCategoryName] = React.useState('home')
    const { register, handleSubmit } = useForm()
    const { id } = useParams()
    const { mutate } = useEditProduct(id)
    const onSubmit = (data) => {
        console.log(data);
        mutate(data, {
            onSuccess: (res) => {
                toast.success("Elon muvaffaqiyatli saqlandi")
                window.history.back()
            },
            onError: (error) => {
                toast.error(error?.response?.data?.message)
            }
        })
    }
    useEffect(() => {
        if (!loadState("user")?.accessToken) {
            navigate("/login")
        }
    },)
    return (
        <div className='bg-quaternary py-6'>
            <div className='container'>
                <h1 className='text-2xl mb-3'>Productni tahrirlash</h1>
                <div className='rounded-xl px-6 py-5 bg-white '>
                    <h2 className='text-xl mb-4'>Bizga e&#39;loningiz haqida gapirib bering</h2>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-secondary  text-sm' htmlFor="name">Sarlavha kiriting</label>
                        <input {...register('title', { required: true })} className='h-[44px] border  rounded-lg px-4 mt-1  bg-quaternary' id='name' type="text" placeholder='Masalan iphone 13 pro max' />
                    </div>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-secondary  text-sm' htmlFor="price">Narx kiriting</label>
                        <input {...register('price', { required: true })} className='h-[44px] border  rounded-lg px-4 mt-1  bg-quaternary' id='price' type="text" placeholder='Masalan $100' />
                    </div>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-secondary text-sm' htmlFor="rukn">Rukn</label>
                        <select onChange={(e) => setCategoryName(e.target.value)} className='h-[44px] border  rounded-lg px-4 mt-1  bg-quaternary' name="rukn" id="rukn">
                            <option value="home">Home</option>
                            <option value="hobbi">Hobbi</option>
                            <option value="garden">Garden</option>
                            <option value="cars">Cars</option>
                            <option value="texno">Texnology</option>
                            <option value="children">Children for</option>
                            <option value="service">Service</option>
                            <option value="animals">Animals</option>
                            <option value="free">Free</option>
                            <option value="exchange">Exchange</option>
                        </select>
                    </div>
                </div>
                <div className='rounded-xl px-6 py-5 bg-white mt-6'>
                    <h2 className='text-xl mb-1'>Bizga e&#39;loningiz haqida gapirib bering</h2>
                    <p className='text-secondary mb-4'>Birinchi surat e&#39;loningiz asosiy rasmi bo&#39;ladi. Suratlar tartibini ularning ustiga bosib va olib o&#39;tish bilan o&#39;zgartirishingiz mumkin.</p>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-secondary  text-sm' htmlFor="image">Rasm qo&#39;shing</label>
                        <input {...register('image', { required: true })} className='h-[44px] border  rounded-lg px-4 mt-1  bg-quaternary' id='image' type="text" placeholder='Masalan https://www.heathermurphygroup.com/wp-content/uploads/2024/03/Savannah-Home-Listings-800x569.jpg' />
                    </div>
                </div>
                <div className='rounded-xl px-6 py-5 bg-white mt-6  '>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-secondary  text-sm' htmlFor="desc">Tavsif</label>
                        <textarea {...register('desc', { required: true })} rows={8} className='border  rounded-lg px-4 mt-1  bg-quaternary py-2' id='desc' type="text" placeholder='E&#39; lon haqida batafsil' />
                    </div>
                    <div className="flex justify-between w-[780px]">
                        <p>Yana kamida 80 ta belgi yozing</p>
                        <p>0/9000</p>
                    </div>
                </div>
                <div className='rounded-xl px-6 py-5 bg-white mt-6  '>
                    <h2 className='text-xl mb-4'>Siz bilan bog&#39;lanish uchun</h2>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-secondary  text-sm' htmlFor="place">Joylashuv</label>
                        <input {...register('location', { required: true })} className='border  rounded-lg px-4 mt-1  bg-quaternary py-2 h-[44px]' id='place' type="text" placeholder='Masalan Toshkent, Bektemir tumani' />
                    </div>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-secondary  text-sm' htmlFor="fullname">Ism</label>
                        <input {...register('fullname', { required: true })} className='border  rounded-lg px-4 mt-1  bg-quaternary py-2 h-[44px]' id='fullname' type="text" placeholder='Ismingizni kiriting' />
                    </div>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-secondary  text-sm' htmlFor="email">Email manzil</label>
                        <input {...register('email', { required: true })} className='border  rounded-lg px-4 mt-1  bg-quaternary py-2 h-[44px]' id='email' type="text" placeholder='Email manzilingiz' />
                    </div>
                    <div className='mb-6 flex flex-col w-[780px]'>
                        <label className='text-secondary  text-sm' htmlFor="tel-number">Telefon raqam</label>
                        <input {...register('tel-number', { required: true })} className='border  rounded-lg px-4 mt-1  bg-quaternary py-2 h-[44px]' id='tel-number' type="text" placeholder='Telefon raqamingiz' />
                    </div>
                </div>
                <div className='flex justify-end mt-4'>
                    <Button type="submit" onClick={handleSubmit(onSubmit)} className="bg-primary rounded-lg px-16 py-[12px] text-white text-[16px] border-primary border hover:text-primary hover:bg-white transition">Saqlash</Button>
                </div>
            </div>
        </div>
    )
}

export default EditProduct