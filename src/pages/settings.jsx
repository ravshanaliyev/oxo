import React, { useEffect } from 'react'
import { Button } from '../utils/utils'
import { FaChevronCircleLeft } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { loadState } from '../config/load-state';
import { useUpdateUser } from '../service/mutation/useUpdateUser';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Settings = () => {
    const user = loadState("user")?.user
    const { register, handleSubmit } = useForm()
    const { mutate } = useUpdateUser(user?.id)
    const navigate = useNavigate()
    const submit = (data) => {
        mutate(data, {
            onSuccess: (res) => {
                toast.success("Ma'lumotlar muofaqiyatli o'zgartirildi")
            },
            onError: (err) => {
                toast.error(err?.response?.data?.message)
            }
        })
    }
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [])
    return (
        <div className='w-full bg-quaternary py-6'>
            <div className="w-[750px] mx-auto">
                <div className="flex items-center gap-4">
                    <Button className={"flex items-center text-2xl"} onClick={() => window.history.back()}><FaChevronCircleLeft /></Button>
                    <h1 className='text-2xl'>Profilni tahrirlash</h1>
                </div>
                <div className='w-full rounded-xl bg-white my-6 p-6'>
                    <form className='flex flex-col gap-5' onSubmit={handleSubmit(submit)}>
                        <div className='flex flex-col gap-1'>
                            <label className='text-gray-600' htmlFor="">Rasm</label>
                            <input {...register("image", { required: true })} className='border border-tertiary p-2 rounded-lg' type="text" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-gray-600' htmlFor="">Ism Familiya</label>
                            <input {...register("fullname", { required: true })} className='border border-tertiary p-2 rounded-lg' type="text" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-gray-600' htmlFor="">Joylashuv</label>
                            <input {...register("city", { required: true })} className='border border-tertiary p-2 rounded-lg' type="text" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-gray-600' htmlFor="">Email</label>
                            <input {...register("email", { required: true })} className='border border-tertiary p-2 rounded-lg' type="email" />
                        </div>
                        <Button type='submit' className='py-2 bg-primary text-white rounded-lg hover:bg-white hover:text-primary hover:border-primary border border-primary transition'>Saqlash</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Settings