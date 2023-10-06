import { BsCartX } from 'react-icons/bs'
import Link from 'next/link';
export default function Cart(){
    return (
        <div className="bg-rd text-of justify-center w-full mt-16 pt-36 pb-24">
                    {
                        0 === 1 ? (
                            <div className="flex flex-col gap-6 justify-center items-center">
           
                    <BsCartX className='h-40 w-40 text-pe'/>
              
                <h2 className='font-bold text-2xl lg:text-center lg:justify center md:text-center md:justify-center text-of'>Your Cart is empty</h2>
                <Link href="/TopProducts" className=" px-8 py-2 bg-pe text-white rounded font-light">
                    Start Shopping
                </Link>
            </div>
                        ) : (
                            <div className="flex flex-row gap-12 w-full">
                                <div className="w-[60%] h-64 bg-or ml-10">
                                    {/* {
                                        cartItems.map(item => (
                                            <CartItem
                                                key={item.id}
                                                {...item}
                                            />
                                        ))
                                    } */}
                                </div>

                                <div className="grid grid-cols-1 gap-4 -mt-1">
                                        <h3 className='font-bold text-2xl text-of'>
                                            Order Summary &nbsp;
                                            {/* ( {cartQuantity} {cartQuantity > 1 ? 'items' : 'item'} ) */}
                                        </h3>
                                        <div className="">
                                            <div className="flex flex-row gap-80">
                                                <span className='text-lg'>Original Price</span>
                                                {/* <b className='ml-28'>{displayCartTotal}</b> */}
                                            </div>
                                            <div className="mt-4 grid grid-cols-2 gap-80">
                                                <span className='text-lg'>Discount</span>
                                                {/* <b className='ml-28'>- {displayCartDiscount}</b> */}
                                            </div>
                                            <div className="mt-4 grid grid-cols-2 gap-40">
                                                <span className='text-lg'>Delivery</span>
                                                <b className='ml-28'>Free</b>
                                            </div>
                                            <hr className='mt-10 text-of'></hr>
                                            <div className="mt-4 flex flex-row gap-96">
                                                <b className='text-2xl font-bold'>Total Price</b>
                                                {/* <b><small>Total Price</small></b> */}
                                                {/* <b className='ml-28'>{displayTotalAmount}</b> */}
                                            </div>
                                        </div>
                                        <Link href="/TopProducts" className=" px-20 py-2 mt-8 w-full bg-pe text-center text-white rounded font-">
                                            Check Out
                                        </Link>

                                </div>
                            </div>
                        )
                    }
                </div>
    );
}