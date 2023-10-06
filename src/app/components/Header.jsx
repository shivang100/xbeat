"use client";
import {
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isScrolled]);

    return (
        //
        <header
            className={`p-4 fixed top-0 w-full transition-all ease-in-out duration-300 h-16 flex justify-between text-gray-400 text-2xl z-[99999] ${
                isScrolled ? "bg-black" : "bg-rd"
            } `}
        >
            <Link href="/">
                <h1 className="font-bold pl-8 pt-2">X-Beat</h1>
            </Link>

            <div className="flex gap-12 pt-2 pr-8">
                <AiOutlineSearch />
                <AiOutlineShoppingCart />
                <AiOutlineUser />
            </div>
        </header>
    );
}
