"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper";
import data from "../Data/data";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function HeroSlider() {
    const products=data.filter(prod=> prod.id===3 || prod.id===2 || prod.id===4);
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
            {products.map((prod,i) => {
                return (
                    <SwiperSlide key={i}>
                        <div className="flex flex-col md:flex-row md:justify-around pt-10 pb-24 pl-24 pr-32">
                            <div className="absolute top-9 left-5 -z-10">
                                <h1 className="text-[200px] font-bold text-[#1c1c1d]">
                                    {prod.category}
                                </h1>
                            </div>
                            <div className="flex flex-col md:ml-10 md:pt-10 md:w-[45%] justify-center">
                                <h3 className="text-xl font-semibold">
                                    {prod.title}
                                </h3>
                                <h1 className="text-5xl font-bold text-left capitalize my-2">
                                    {prod.tagline}
                                </h1>
                                <h2 className="my-4">
                                    <span className="text-3xl font-bold">
                                        ₹{prod.discountedPrice}
                                    </span>
                                    <span className="text-2xl line-through ml-2 text-gray-500 font-bold">
                                        ₹{prod.originalPrice}
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
                                    src={prod.mainImage}
                                    alt="Product"
                                    width={600}
                                    height={600}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
