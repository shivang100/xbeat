import { IoMdStar, IoMdCheckmark } from 'react-icons/io';
import Image from 'next/image';
import product1 from "../public/product1.png";
export default function Product_details() {
    return (
        <div className='mt-24 h-screen w-full'>
            <div className='grid grid-cols-2 gap-10 '>
                <div className='flex flex-row gap-20  pl-10 mt-10'>
                    <div className='grid gap-16  border-white'>
                        <div className='w-24 h-24 border-2 border-opacity-20 rounded cursor-pointer transition duration-200 hover:border-gray-300 active:border-gray-200'>


                            <Image
                                height={500}
                                width={500}
                                alt="ecommerce"
                                className="border-white p-2"
                                src={product1}
                            /></div>
                        <div className='w-24 h-24 border-2 border-opacity-20 rounded  cursor-pointer transition duration-200 hover:border-gray-300 active:border-gray-200'>
                            <Image
                                height={500}
                                width={500}
                                alt="ecommerce"
                                className="border-white"
                                src={product1}
                            /></div>
                        <div className='w-24 h-24 border-2 border-opacity-20 rounded  cursor-pointer transition duration-200 hover:border-gray-300 active:border-gray-200'>
                            <Image
                                height={500}
                                width={500}
                                alt="ecommerce"
                                className="border-white"
                                src={product1}
                            /></div>
                        <div className='w-24 h-24 border-2 border-opacity-20 rounded  cursor-pointer transition duration-200 hover:border-gray-300 active:border-gray-200'>
                            <Image
                                height={500}
                                width={500}
                                alt="ecommerce"
                                className="border-white"
                                src={product1}
                            /></div>

                    </div>
                    <div className='w-[120%] h-[120%] bg-black text-white'>
                        <div className='w-[120%] h-[120%]  '>
                            <Image
                                height={900}
                                width={900}
                                alt="ecommerce"
                                className=""
                                src={product1}
                            /></div>

                    </div>

                </div>
                <div className=''>
                    <div className='border-b-2 border-thin ml-20 mr-20 pb-8'>
                        <h3 className='font-bold text-3xl text-of mt-4 ml-20 mb-5'>
                            Asus Tuf F-Dash 15
                            {/* ( {cartQuantity} {cartQuantity > 1 ? 'items' : 'item'} ) */}
                        </h3>
                        <span className='font-semibold text-lg text-of mt-5 mb-5 ml-20'>
                            Gaming Laptop
                        </span>
                        <br />
                        <span className='font-light text-lg text-of ml-20'>
                            **** | 755 Ratings
                        </span>
                    </div>
                    <div className='border-b-2 border-thin ml-20 mr-20 mb-5 20 pb-8'>
                        <div className='flex gap-4'>
                        <h3 className='flex gap-4 font-bold text-3xl text-of mt-5 ml-20 mb-5 mr-4'>
                            ₹1,299 
                            <span className='text-lg line-through mt-2 text-[#6c757d]'> ₹3,990</span>
                            {/* ( {cartQuantity} {cartQuantity > 1 ? 'items' : 'item'} ) */}
                        </h3>
                        
                        </div>
                        <span className='font-semibold text-lg text-of mt-5 mb-5 ml-20'>
                            Gaming Laptop</span>
                        
                        <br />
                        <span className='font-light text-lg text-of mt-5 ml-20'>
                            **** | 755 Ratings
                        </span>
                    </div>
                    <div className='border-b-2 border-thin ml-20 mr-20 mb-20 pb-8'>
                        <h3 className='font-bold text-3xl text-of ml-20 mb-5'>
                            Asus Tuf F-Dash 15
                            {/* ( {cartQuantity} {cartQuantity > 1 ? 'items' : 'item'} ) */}
                        </h3>
                        <span className='font-semibold text-lg text-of mt-5 mb-5 ml-20'>
                            Gaming Laptop
                        </span>
                        <br />
                        <span className='font-light text-lg text-of mt-5 ml-20'>
                            **** | 755 Ratings
                        </span>
                    </div>



                </div>

            </div>

        </div>
    );
}