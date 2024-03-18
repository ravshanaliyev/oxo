import React, { useEffect } from 'react'
import { useGetAllProducts } from '../service/query/useGetAllProducts'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike } from '../redux/slices/like-slice';
import { useInfiniteData } from '../service/query/useInfiniteData';
import { useInView } from 'react-intersection-observer';

const Cards = () => {
    const [pageParam, setPageParam] = React.useState(1)
    const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteData(pageParam)
    const { ref, inView, entry } = useInView()
    const likedProducts = useSelector((state) => state.like.data)
    const dispatch = useDispatch()
    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView])
    return (
        <div className='w-full bg-[#F6F6F6]'>
            <div className="container py-6">
                <h2 className='text-2xl mt-2 mb-6'>Siz uchun maxsus</h2>
                <div className="grid grid-cols-5 gap-6">
                    {
                        isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            data?.pages?.map((page) => (
                                page?.map((product) => (
                                    <div key={product?.id} className="w-[210px] border bg-white rounded-lg">
                                        <Link to={`/product-detail/${product?.id}`}>
                                            <img className='rounded-t-lg h-[150px] w-full object-cover' src={product?.image} alt="" />
                                        </Link>
                                        <div className='p-3'>
                                            <p>{product?.title?.length > 40 ? product?.title?.slice(0, 40) + "..." : product?.title}</p>
                                            <p className='my-2 text-red text-lg'>{product?.price}</p>
                                            <div className='flex justify-between'>
                                                <p className='text-secondary'>{product?.location}</p>
                                                {likedProducts?.findIndex((likeproduct) => likeproduct?.id === product?.id) !==
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
                            ))
                        )
                    }
                </div>
                {hasNextPage && <div ref={ref}>{inView ? <h2>Loading...</h2> : ""}</div>}
            </div>
        </div>
    )
}

export default Cards