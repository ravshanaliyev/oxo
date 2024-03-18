import React, { useState } from 'react'
import { Button } from '../utils/utils'
import { GrLocation } from "react-icons/gr";
import { IoMdSearch } from "react-icons/io";
import useDebounce from '../config/useDebounce';
import useSearch from '../service/query/useSearch';
import { Link } from 'react-router-dom';

const HomeSearch = () => {
    const [searchValue, setSearchValue] = useState("")
    const title = useDebounce(searchValue)
    const { data: searchData } = useSearch(title)
    console.log(searchData);
    return (
        <div className='bg-quaternary'>
            <div className="container flex justify-between items-center h-[130px]">
                <div className="flex items-center bg-white rounded-xl">
                    <div className='w-[480px] flex items-center gap-2 border border-tertiary px-4 rounded-l-lg h-[44px] relative z-10'>
                        <IoMdSearch className='w-5 h-5' />
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='w-full py-2 outline-none' type="text" placeholder='198 182 natija bo&#39;yicha ' />
                        {
                            searchValue.length > 2 ? (
                                <div className="absolute top-8 left-0 flex flex-col  mt-4 z-50 rounded-lg shadow-lg bg-white p-5 w-[700px] justify-center items-center mx-auto ">
                                    {
                                        searchData?.map((item) => (
                                            <Link onClick={() => setSearchValue("")} className=' flex gap-4  items-center my-3 border-b p-2 hover:bg-gray-100' key={item.id} to={`/product-detail/${item.id}`}>
                                                <img className='w-[70px]' src={item.image} alt="" />
                                                <p>{item.title}</p>
                                                <p className='text-red'>{item.price}</p>

                                            </Link>
                                        ))
                                    }
                                </div>
                            ) : null
                        }
                    </div>
                    <div className='w-[480px] flex items-center gap-2 border px-4 rounded-r-lg border-l-0 border-tertiary h-[44px]'>
                        <GrLocation className='w-5 h-5' />
                        <input className='w-full py-2 outline-none' type="text" placeholder='Butun O&#39;zbekiston' />
                    </div>
                </div>
                <Button className="bg-primary rounded-lg px-10 py-[10px] text-white text-[16px] border-primary border hover:text-primary hover:bg-white transition">Izlash</Button>
            </div>
        </div>
    )
}

export default HomeSearch