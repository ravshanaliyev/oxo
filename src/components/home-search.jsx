import React from 'react'
import { Button } from '../utils/utils'
import { GrLocation } from "react-icons/gr";
import { IoMdSearch } from "react-icons/io";

const HomeSearch = () => {
    return (
        <div className='bg-[#F6F6F6]'>
            <div className="w-[1111px] mx-auto flex justify-between items-center h-[112px]">
                <div className="flex items-center bg-white rounded-xl">
                    <div className='w-[490px] flex items-center gap-2 border border-[#979C9E] px-4 rounded-l-lg h-[44px]'>
                        <IoMdSearch className='w-5 h-5' />
                        <input className='w-full py-2 outline-none' type="text" placeholder='198 182 natija bo&#39;yicha ' />
                    </div>
                    <div className='w-[490px] flex items-center gap-2 border px-4 rounded-r-lg border-l-0 border-[#979C9E] h-[44px]'>
                        <GrLocation className='w-5 h-5' />
                        <input className='w-full py-2 outline-none' type="text" placeholder='Butun O&#39;zbekiston' />
                    </div>
                </div>
                <Button className="bg-[#19191C] rounded-lg px-10 py-[10px] text-white text-[16px]">Izlash</Button>
            </div>
        </div>
    )
}

export default HomeSearch