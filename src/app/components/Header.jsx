'use client';
import {
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import React, { useEffect, useState } from 'react';
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
            //h-14 bg-black flex justify-between text-gray-400 text-2xl
        <header className={`${
            isScrolled ? 'scrolled-header' : 'h-14 bg-rd flex justify-between text-gray-400 text-2xl'
          }h-14 bg-black flex justify-between text-gray-400 text-2xl p-2 fixed top-0 w-full transition-all linear-out, slow in duration-500`}>
            <Link href="/">
                <h1 className="font-bold pl-8 pt-3">X-Beat</h1>
            </Link>

            <div className="flex gap-12 pt-3 pr-8">
                <AiOutlineSearch />
                <AiOutlineShoppingCart />
                <AiOutlineUser />
            </div>
        </header>
    );
}
