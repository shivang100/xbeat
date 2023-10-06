"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper";
import product1 from "../public/product1.png";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function HeroSlider() {
    return (
        <Swiper
            modules={[Pagination, A11y, Autoplay]}
            loop={true}
            spaceBetween={100}
            slidesPerView={1}
            speed={300}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
        >
            {new Array(3).fill(0).map((i) => {
                return (
                    <SwiperSlide key={i}>
                        <div className="flex flex-col md:flex-row md:justify-around pt-10 pb-24 pl-24 pr-32">
                            <div className="absolute top-9 left-5 -z-10">
                                <h1 className="text-[200px] font-bold text-[#1c1c1d]">
                                    In Ear
                                </h1>
                            </div>
                            <div className="flex flex-col md:ml-10 md:pt-10 md:w-[45%] justify-center">
                                <h3 className="text-xl font-semibold">
                                    Sony WH-XB910N
                                </h3>
                                <h1 className="text-5xl font-bold text-left capitalize my-2">
                                    Give Your Favourite music a boost.
                                </h1>
                                <h2 className="my-4">
                                    <span className="text-3xl font-bold">
                                        ₹13489
                                    </span>
                                    <span className="text-2xl line-through ml-2 text-gray-500 font-bold">
                                        ₹19990
                                    </span>
                                </h2>
                                <div className="mt-4 w-32 px-2 py-2 bg-pe text-white rounded font-light items-center">
                                    <Link href="/TopProducts" className="px-5">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-0 md:w-[45%] md:ml-10 md:block hidden">
                                <Image
                                    className="h-full w-full"
                                    src={product1}
                                    alt="Product"
                                    width={600}
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
