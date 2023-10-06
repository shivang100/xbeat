"use client";
import { IoMdStar, IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import { useState, useEffect } from "react";
import data from "../Data/data";

export default function Product_details() {
    const [prodId, setProdId] = useState(null);
    const [product, setProduct] = useState({});
    const [image, setImage] = useState("");
    const [imageId, setImageId] = useState(10);

    useEffect(() => {
        const productId = window.location.href.split("?")[1].split("=")[1];
        setProdId(productId);
    }, []);

    useEffect(() => {
        if (prodId !== null) {
            const prod = data.filter((item) => item.id === parseInt(prodId));
            setProduct(prod[0]);
            console.log(prod.images);
            setImage(prod[0].mainImage);
        }
    }, [prodId]);

    return (
        <div className="pt-24 pb-10 w-full bg-rd">
            <div className="grid grid-cols-2 gap-10 ">
                <div className="flex flex-row gap-20 px-5">
                    <div className="flex flex-col gap-14 border-white">
                        <button
                            className={`w-24 h-24 border-2 rounded cursor-pointer transition duration-200 ${
                                imageId === 10
                                    ? "border-white"
                                    : "border-gray-600"
                            }`}
                            onClick={() => {
                                setImage(product.mainImage);
                                setImageId(10);
                            }}
                        >
                            <Image
                                height={500}
                                width={500}
                                alt="ecommerce"
                                className="p-2"
                                src={product.mainImage}
                            />
                        </button>
                        {product?.images?.length > 0 &&
                            product.images.map((img, i) => {
                                return (
                                    <button
                                        key={i}
                                        className={`w-24 h-24 border-2 rounded  cursor-pointer transition duration-200 ${
                                            imageId === i
                                                ? "border-white"
                                                : "border-gray-700"
                                        }`}
                                        onClick={() => {
                                            setImage(img);
                                            setImageId(i);
                                        }}
                                    >
                                        <Image
                                            height={500}
                                            width={500}
                                            alt="ecommerce"
                                            className="p-2"
                                            src={img}
                                        />
                                    </button>
                                );
                            })}
                    </div>
                    <div className="w-[120%] h-[120%] text-white">
                        <div className="w-[120%] h-[120%]  ">
                            <Image
                                height={900}
                                width={900}
                                alt="ecommerce"
                                className=""
                                src={image}
                            />
                        </div>
                    </div>
                </div>
                <div className="ml-10">
                    <div className="border-b border-thin ml-20 mr-4 pb-8">
                        <h3 className="font-bold text-2xl text-of mb-2">
                            {product.title}
                        </h3>
                        <div className="font-semibold text-base text-of mb-5">
                            {product.info}
                            <br />
                        </div>
                        <div className="font-normal text-base text-of flex gap-2">
                            <div className="flex">
                                {new Array(4).fill(0).map((i, j) => {
                                    return (
                                        <IoMdStar
                                            key={j}
                                            className="text-pe mt-1"
                                        />
                                    );
                                })}
                            </div>
                            <div>| </div>
                            <div>{product.ratings} Ratings</div>
                        </div>
                    </div>
                    <div className="border-b border-thin ml-20 mr-4 mb-5 20 flex justify-between">
                        <div className="pb-8">
                            <h2 className="mt-8 mb-4">
                                <span className="text-3xl text-of font-bold">
                                    ₹{product.discountedPrice}
                                </span>
                                <span className="text-2xl line-through ml-4 text-gray-500 font-bold">
                                    ₹{product.originalPrice}
                                </span>
                            </h2>
                            <span className="font-medium text-base text-[#008000] mt-5 mb-5">
                                You save: ₹
                                {product.originalPrice -
                                    product.discountedPrice}{" "}
                                (55%)
                            </span>

                            <br />
                            <span className="font-normal text-base text-of mt-5">
                                (Inclusive of all taxes)
                            </span>
                        </div>
                        <div className="my-auto">
                            <h1 className="bg-[#008000] text-white flex px-2 py-1 gap-2 rounded-sm font-semibold">
                                <IoMdCheckmark className="mt-1" />
                                In Stock
                            </h1>
                        </div>
                    </div>
                    <div className="border-b border-thin ml-20 mr-4 mb-20 pb-8">
                        <h3 className="font-semibold text-base text-of mt-7 mb-5">
                            Offers and Discounts
                        </h3>
                        <div className="flex gap-5">
                            <span className="font-light text-base text-of border px-2 py-1 rounded-sm border-gray-600">
                                No Cost EMI on Credit Card
                            </span>
                            <span className="font-light text-base text-of border px-2 py-1 rounded-sm border-gray-600">
                                Pay Later & Avail Cashback
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
