import Image from "next/image";
import Link from "next/link";
import porduct1 from "../public/product1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, A11y, Autoplay } from "swiper";
import data from "../Data/data";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function FeaturedSlider() {
    return (
        <Swiper
            modules={[EffectCoverflow, Pagination, A11y, Autoplay]}
            loop={true}
            speed={300}
            spaceBetween={100}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            effect={"coverflow"}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 70,
                modifier: 3,
                slideShadows: false,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 200,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 250,
                },
            }}
            className="featured_swiper"
        >
            {data.map((prod, i) => {
                return (
                    <SwiperSlide key={i} className="mb-20">
                        <div className="text-center">{prod.title}</div>
                        <figure className="my-8">
                            <Link href="/TopProducts">
                                <Image
                                    src={prod.mainImage}
                                    alt="product"
                                    className="w-full"
                                />
                            </Link>
                        </figure>
                        <h2 className="my-2 text-center">
                            <span className="text-3xl font-bold">
                                ₹{prod.discountedPrice}
                            </span>
                            <span className="text-2xl line-through ml-2 text-gray-500 font-bold">
                                ₹{prod.originalPrice}
                            </span>
                        </h2>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
