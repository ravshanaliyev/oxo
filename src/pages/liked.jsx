import React from 'react'
import { Button } from '../utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { addLike, removeLike } from '../redux/slices/like-slice'

const Liked = () => {
    const likedProducts = useSelector((state) => state.like.data)
    const dispatch = useDispatch()
    return (
        <>
            <div className="container my-6">
                <h1 className='text-2xl my-6'>Saralanganlar</h1>
                <div className="flex justify-between my-4">
                    <p className='text-lg border-b-[2px] border-b-[#EA3838]'>Saralangan e’lonlar ({likedProducts?.length})</p>
                    <Button className="bg-[#19191C] px-4 py-2 text-white rounded-lg">Qidirsh parameterlarini o’chirish</Button>
                </div>
            </div>
            <div className="bg-[#F6F6F6] w-full py-10">
                <div className="container">
                    <div className="grid grid-cols-5 gap-6">
                        {
                            likedProducts?.map((product) => (
                                <div key={product.id} className="w-[210px] border bg-white rounded-lg">
                                    <Link to={`/product-detail/${product.id}`}>
                                        <img className='rounded-t-lg h-[150px] w-full object-cover' src={product.image} alt="" />
                                    </Link>
                                    <div className='p-3'>
                                        <p>{product.title.length > 40 ? product.title.slice(0, 40) + "..." : product.title}</p>
                                        <p className='my-2 text-[#EA3838] text-lg'>{product.price}</p>
                                        <div className='flex justify-between'>
                                            <p className='text-[#888888]'>{product.location}</p>
                                            {likedProducts?.findIndex((likeproduct) => likeproduct.id === product.id) !==
                                                -1 ? (
                                                <AiFillHeart
                                                    className="text-red-500 text-2xl cursor-pointer"
                                                    onClick={() => dispatch(removeLike(product))}
                                                />
                                            ) : (
                                                <AiOutlineHeart
                                                    className="text-[#999] text-2xl cursor-pointer"
                                                    onClick={() => dispatch(addLike(product))}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Liked