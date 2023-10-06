"use client";
import { AiOutlineClose } from "react-icons/ai";
// import { ToastContainer } from "react-toastify";
export default function Login() {

    return (
        <div className="fixed inset-0 flex items-center justify-center lg:mt-0 bg-black text-white bg-opacity-50 z-20">
            {/* <ToastContainer /> */}
            <div className="rounded-lg shadow-lg w-screen">
                <div className="flex flex-col items-center justify-center lg:pr-10 lg:pl-20 lg:mb-10 mr-auto ml-auto
        xl:px-5 lg:flex-row">
            <div className="flex flex-col items-center justify-center lg:mb-0 mb-10 lg:pl-10 lg:flex-row ">
                <div className="lg:w-76 lg:mt-20 w-76 flex justify-end">
                    <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-rd shadow-2xl 
              relative z-10">
                <p className="w-full text-2xl font-medium text-left leading-snug font-serif text-of">
                                    Login
                                </p>
                                <div className="flex w-full">
                                <p className="w-full text-lg font-light text-left text-of">
                                New to X-Beat ?
                                </p>
                                <p className="w-full -ml-32 text-lg font-light text-left text-white">
                                Create an account
                                </p>
                                </div>
                <form className="w-full mt-10 mr-0 mb-10 ml-0 relative space-y-8 sm:max-w-full md:max-w-full sm:w-full">
                <div className="relative">
                                        <p
                                            className="bg-rd pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-white
                    absolute"
                                        >
                                            Email
                                        </p>
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            // onChange={handleEmailChange}
                                            className="border placeholder-gray-400 focus:outline-none
                    focus:border-of w-full pt-4 pr-4 pb-6 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-rd
                    border-gray-300"
                                        />
                                    </div>
                                    <div className="relative">
                                        <p
                                            className="bg-rd pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-white
                                            absolute"
                                        >
                                            Password
                                        </p>
                                        <input
                                            placeholder="Password"
                                            type="password"
                                            // onChange={handlePasswordChange}
                                            className="border placeholder-gray-400 focus:outline-none
                    focus:border-of w-full pt-4 pr-4 pb-6 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-rd
                    border-gray-300"
                                        />
                                    </div>
                                    <div className="relative">
                                        <button
                                            type="submit"

                                            className="w-full inline-block px-5 py-2 text-xl font-medium text-center bg-pe
                    transition duration-200 text-white"
                                        >
                                            Login
                                        </button>
                                    </div>
                    <div className="flex mt-8 ">
                    <hr className="text-white w-full mr-8" ></hr>
                        <span className="-mt-3 w-full text-base text-of">
                            or login with
                                </span>
                        <hr className="w-full"></hr>
                        </div>

                </form>
                                    
                                <ul className="-mx-2 mb-12 flex gap-4">
                                <li className="">
                                        <button
                                            type="submit"
                                            // onClick={handleFacebookLogin}
                                            className="flex h-11 items-center w-32 justify-center  bg-[#4064AC] hover:bg-opacity-90"
                                        >
                                            <p className="text-white">Facebook</p>
                                        </button>
                                    </li>
                                
                                    <li className="">
                                        <button
                                            type="submit"
                                            // onClick={handleGoogleLogin}
                                            className="flex h-11 items-center w-32 justify-center   bg-pe hover:bg-opacity-90"
                                        >
                                            <p className="text-white">Google</p>
                                        </button>
                                    </li>
                                    <li className="">
                                        <button
                                            type="submit"
                                            // onClick={handleFacebookLogin}
                                            className="flex h-11 items-center w-32 justify-center bg-[#4064AC] hover:bg-opacity-90"
                                        >
                                            <p className="text-white">Twitter</p>
                                        </button>
                                    </li>
                                    
                                </ul>

                    </div>
                    <div className="h-8 w-8 py-1 px-2 items-center justify-center absolute z-20 bg-black">
                                <button>
                                <AiOutlineClose className="h-4 w-4 items-center text-of hover:text-white"/>
                                </button>
                            </div>

                </div>

            </div>

                </div>
            </div>
        </div>
    );
}
