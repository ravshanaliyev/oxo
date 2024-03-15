import React from 'react'
import { useGetAllProducts } from '../service/query/useGetAllProducts'
import { Button } from '../utils/utils'
import { FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Cards = () => {
    const { data, isLoading } = useGetAllProducts()
    return (
        <div className='w-full bg-[#F6F6F6]'>
            <div className="container py-6">
                <h2 className='text-2xl mt-2 mb-6'>Siz uchun maxsus</h2>
                <div className="grid grid-cols-5 gap-6">
                    {
                        isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            data?.map((product) => (
                                <div key={product.id} className="w-[210px] border bg-white rounded-lg">
                                    <Link to={`/product/${product.id}`}>
                                        <img className='rounded-t-lg h-[150px] w-full object-cover' src={product.image} alt="" />
                                    </Link>
                                    <div className='px-3 py-2'>
                                        <p>{product?.title?.slice(0, 40) + "..."}</p>
                                        <p className='my-2 text-[#EA3838] text-lg'>{product.price}</p>
                                        <div className='flex justify-between'>
                                            <p>{product.location}</p>
                                            <Button className={"text-[#888888]"}><FiHeart /></Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards