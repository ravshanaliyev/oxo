import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProduct } from '../service/query/useGetSingleProduct'
import HomeSearch from '../components/home-search'
import { Button } from '../utils/utils'
import { MdArrowBackIos } from "react-icons/md";
import { GoDotFill } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { ProductDetailMain, ProductDetailTop } from '../components'

const ProductDetail = () => {
    const { id } = useParams()
    const { data } = useGetSingleProduct(id)
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
                <ProductDetailTop data={data} />
                <ProductDetailMain data={data} />
            </div>
        </div>
    )
}

export default ProductDetail