import Link from "next/link";
import Image from "next/image";
import product1 from "../public/product1.png";
import { BsArrowRight } from "react-icons/bs";
import {
    FaShippingFast,
    FaShieldAlt,
    FaTags,
    FaCreditCard,
} from "react-icons/fa";
import data from "../Data/data";
import { useState, useEffect } from "react";

export default function TopProducts() {
    const [showProductList, setShowProductList] = useState("all");
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        let products = [];
        if (showProductList === "all") {
            products = data;
        } else if (showProductList === "camera") {
            products = data.filter((prod) => prod.category === "Camera");
        } else if (showProductList === "phone") {
            products = data.filter((prod) => prod.category === "phone");
        } else if (showProductList === "laptop") {
            products = data.filter((prod) => prod.category === "Laptop");
        }
        setProductList(products);
    }, [showProductList]);

    return (
        <div className="bg-rd text-of text-center justify-center w-full py-20">
            <div className="lg:flex lg:flex-row md:flex md:flex-row text-center justify-center">
                <h1 className="font-bold text-2xl lg:mt-20 md:mt-20 lg:mx-auto md:mx-auto md:mb-10 lg:mb-10 lg:text-center lg:justify center md:text-center md:justify-center text-of">
                    Top Products
                </h1>
            </div>
            <div className="lg:flex lg:flex-row md:flex md:flex-row text-lg gap-20 text-center justify-center">
                <button
                    className={`hover:bg-pe pt-1 pb-1 pl-4 pr-4 border rounded border-rd ${
                        showProductList === "all" ? "bg-pe" : ""
                    }`}
                    onClick={() => setShowProductList("all")}
                >
                    All
                </button>

                <button
                    className={`hover:bg-pe pt-1 pb-1 pl-4 pr-4 border rounded border-rd ${
                        showProductList === "camera" ? "bg-pe" : ""
                    }`}
                    onClick={() => setShowProductList("camera")}
                >
                    Cameras
                </button>

                <button
                    className={`hover:bg-pe pt-1 pb-1 pl-4 pr-4 border rounded border-rd ${
                        showProductList === "phone" ? "bg-pe" : ""
                    }`}
                    onClick={() => setShowProductList("phone")}
                >
                    Phones
                </button>

                <button
                    className={`hover:bg-pe pt-1 pb-1 pl-4 pr-4 border rounded border-rd ${
                        showProductList === "laptop" ? "bg-pe" : ""
                    }`}
                    onClick={() => setShowProductList("laptop")}
                >
                    Laptops
                </button>
            </div>
            <div className="lg:px-10 lg:mt-10 md:px-10 md:mt-10 lg:grid lg:grid-cols-4 lg:gap-2 md:grid md:grid-cols-3 md:gap-4 lg:w-full md:full justify-start text-start ">
                {productList.map((prod, i) => {
                    return (
                        <div
                            className="border border-white lg:h-[490px] md:h-[400px]"
                            key={i}
                        >
                            <div className="bg-or lg:mb-4 md:mb-2 h-60 max-h-60">
                                <Link
                                    href={`/Product_details?prodId=${prod.id}`}
                                >
                                    <Image
                                        height={200}
                                        width={300}
                                        alt="ecommerce"
                                        className="max-h-52"
                                        src={prod.mainImage}
                                    />
                                </Link>
                            </div>
                            <div>
                                <span className="lg:text-xl md:text-lg font-bold lg:px-4 md:px-2 lg:mb-6 md:mb-3">
                                    {prod.title}
                                </span>
                                <br />
                                <span className="text-sm font-medium lg:px-4 lg:mb-6 md:px-2 md:mb-3">
                                    {prod.info}
                                </span>
                                <br />
                                <div className=" border-1-0 bg-of h-[0.5px] mx-4 my-4"></div>
                                <h2 className="my-2 mx-4">
                                    <span className="text-2xl font-bold">
                                        ₹{prod.discountedPrice}
                                    </span>
                                    <span className="text-xl line-through ml-2 text-gray-500 font-bold">
                                        ₹{prod.originalPrice}
                                    </span>
                                </h2>
                                <br />
                                <div className="bg-pe lg:mx-4 md:mx-2 ">
                                    <button className=" lg:py-2 md:py-2 flex items-center mx-auto text-white rounded font-light">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="border lg:pb-10 md:mb-5 border-white lg:h-[490px] md:h-[400px]">
                    <a href="">
                        <div className="flex flex-col lg:my-48 md:my-44">
                            <p className="font-light text-2xl lg:mx-auto md:mx-auto text-center justify center text-of">
                                Browse All
                            </p>
                            <p className="flex gap-2 font-light text-2xl lg:mx-auto md:mx-auto text-center justify center text-of">
                                Prooducts{" "}
                                <BsArrowRight className="lg:mt-2 mt-2 " />
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="lg:flex lg:flex-row md:flex md:flex-row text-center justify center">
                <h1 className="font-bold text-2xl lg:mt-20 md:mt-20 lg:mx-auto md:mx-auto md:mb-10 lg:mb-10 lg:text-center lg:justify-center md:text-center md:justify-center text-of">
                    Our Advantages
                </h1>
            </div>
            <div className="flex flex-row lg:gap-44 md:gap-32 font-bold text-lg lg:mt-20 md:mt-20 md:mx-5 md:mb-10 lg:mx-2 lg:text-left lg:justify-center md:text-left md:justify-center text-of">
                <div className=" pt-1 pb-1 border rounded border-rd flex gap-4">
                    <span className="text-pe">
                        <FaShippingFast className="h-9 w-9 mt-4" />
                    </span>
                    <span>
                        <span>Express Delivery</span>
                        <br />
                        <span className="text-sm font-normal">
                            Ships in 24 Hours
                        </span>
                    </span>
                </div>
                <div className=" pt-1 pb-1 border rounded border-rd flex gap-4">
                    <span className="text-pe">
                        <FaShieldAlt className="h-9 w-9 mt-4" />
                    </span>
                    <span>
                        <span>Brand Warranty</span>
                        <br />
                        <span className="text-sm font-normal">
                            100% Original products
                        </span>
                    </span>
                </div>
                <div className=" pt-1 pb-1  border rounded border-rd flex gap-4">
                    <span className="text-pe">
                        <FaTags className="h-9 w-9 mt-4" />
                    </span>
                    <span>
                        <span>Exciting Deals</span>
                        <br />
                        <span className="text-sm font-normal">
                            On all prepaid orders
                        </span>
                    </span>
                </div>
                <div className=" pt-1 pb-1  border rounded border-rd flex gap-4">
                    <span className="text-pe">
                        <FaCreditCard className="h-9 w-9 mt-4" />
                    </span>
                    <span>
                        <span>Secure Payments</span>
                        <br />
                        <span className="text-sm font-normal">
                            SSL / Secure certificate
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}
