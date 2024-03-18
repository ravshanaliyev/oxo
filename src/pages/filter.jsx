import React, { useState } from 'react'
import HomeSearch from '../components/home-search'
import { Link, useParams } from 'react-router-dom'
import { useGetCategoryItems } from '../service/query/useGetCategoryItems'
import { GoDotFill } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Empty from '../assets/empt.svg'
import { addLike, removeLike } from '../redux/slices/like-slice';

const Filter = () => {
    const [filterByPlace, setFilterByPlace] = useState('Tashkent')
    const { category } = useParams()
    const { data, isLoading } = useGetCategoryItems(category)
    const likedProducts = useSelector((state) => state.like.data)
    const dispatch = useDispatch()
    return (
        <div>
            <HomeSearch />
            <div className="container my-6">
                <div className='w-full flex gap-6 pb-1 border-b-[2px]  border-b-tertiary'>
                    <h3 className='text-lg text-primary font-semibold cursor-pointer'>Hammasi</h3>
                    <h3 className='text-lg text-secondary cursor-pointer'>Jismoniy shaxs</h3>
                    <h3 className='text-lg text-secondary cursor-pointer'>Biznes</h3>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 my-6">
                        <em className='text-lg '>{data?.length} ta {category} kategoriyasi boyicha elonlar</em>
                    </div>
                    <div className="flex items-center gap-2">
                        <p>Saralash:</p>
                        <select value={filterByPlace} onChange={(e) => setFilterByPlace(e.target.value)} className='bg-[#fff] rounded-lg h-10 w-[140px] border-[2px] p-1'>
                            <option value="Tashkent">Tashkent</option>
                            <option value="Samarkand">Samarkand</option>
                            <option value="Jizzakh">Jizzakh</option>
                            <option value="Navoiy">Navoiy</option>
                            <option value="Buxoro">Buxoro</option>
                            <option value="Gulistion">Gulistion</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='bg-quaternary py-6'>
                <div className="container">
                    <h3 className='text-2xl mt-2 mb-6'>Top e&#39;lonlar</h3>
                    <div className=' grid grid-cols-4 gap-6'>
                        {
                            isLoading ? (
                                <p>Loading...</p>
                            ) : (
                                data?.filter((product) => product.location === filterByPlace).map((product) => (
                                    <div key={product.id} className="w-[210px] border bg-white rounded-lg">
                                        <Link to={`/product-detail/${category}/${product.id}`}>
                                            <img className='rounded-t-lg h-[150px] w-full object-cover' src={product.image} alt="" />
                                        </Link>
                                        <div className='p-3 h-[120px]'>
                                            <p>{product.title.length > 18 ? product.title.slice(0, 18) + "..." : product.title}</p>
                                            <p className='my-2 text-red text-lg'>{product.price}</p>
                                            <div className='flex justify-between'>
                                                <p className='text-secondary'>{product.location}</p>
                                                {likedProducts?.findIndex((likeproduct) => likeproduct.id === product.id) !==
                                                    -1 ? (
                                                    <AiFillHeart
                                                        className="text-red text-2xl cursor-pointer"
                                                        onClick={() => dispatch(removeLike(product))}
                                                    />
                                                ) : (
                                                    <AiOutlineHeart
                                                        className="text-secondary text-2xl cursor-pointer"
                                                        onClick={() => dispatch(addLike(product))}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                        {
                            data?.filter((product) => product.location === filterByPlace).length === 0 && (
                                <div className='flex justify-center flex-col'>
                                    <img className='w-[300px]' src={Empty} alt="" />
                                    <h3>Hozircha e&#39;lonlar mavjud emas</h3>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter