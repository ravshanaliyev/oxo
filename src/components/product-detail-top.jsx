import { FaArrowRight, FaUserCircle } from "react-icons/fa";
import Locat from '../assets/location.svg'
import { Button } from "../utils/utils";
const ProductDetailTop = ({ data }) => {
    return (
        <>
            <div className="flex w-full my-6 gap-6">
                <div className="w-2/3 ">
                    <img className='rounded-xl h-[500px]' src={data?.image} alt="" />
                </div>
                <div className="w-1/3 ">
                    <div className='bg-white rounded-xl py-6 px-4'>
                        <h3 className='text-xl font-semibold'>Foydalanuvchi</h3>
                        <div className='flex gap-4 my-4'>
                            <FaUserCircle className='w-10 h-10 mt-2 cursor-pointer' />
                            <div>
                                <strong>{data?.fullname}</strong>
                                <p>Ro’yxatdan o’tgan sanasi 2024</p>
                                <p className='text-secondary'>{data?.location}</p>
                                <Button className={"flex items-center gap-2"}>Barcha elonlar <FaArrowRight className='w-4 mt-[3px] h-3' /></Button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl p-4 mt-8'>
                        <div className='flex gap-4 my-4'>
                            <img src={Locat} alt="" />
                            <div>
                                <strong>{data?.location}</strong>
                                <p>Mirzo ulug’bek tumani</p>
                                <p className='text-secondary'>Sizdan 9 km uzoqlikda</p>
                            </div>
                        </div>
                        <img className='rounded-lg' src="https://s3-alpha-sig.figma.com/img/d2f5/7a34/f0cae4146ee31d7a1d2a367d968069cc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jjb79XPwnEtU~skvSVHxDLIwYyY8QqILjV3jQkUoJG5VsV8aWrY31Pocc5Mz7dLV5VTDi7ZKPsaXZbFWDXS5tVScAJZJg40CjRb2zEW1nWLOFoWrFQKWJqb0I1tw84MsDOOxCqbbP1OnnHx~9uRc96uAYTvzwINAdlXJ2UuIVHShi0zcB8Lfr7q~DJ3Pg7uUD71XZ6ORn3YfOI4lVC-e0bJR0X3GwYVu2ZHs5RMEfx2~SFzyrXnvUEAoll5D1KOtZcLTVCI~PKKdIpSGwm2GPBaE79UE5BrZfrpUOAWeFm~nPUv99NjdgFPCr-Ldci857I4P-bOvHEYpCE6CRmnWTg__" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailTop