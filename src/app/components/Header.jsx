import {
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import Link from "next/link";

export default function Header() {
    return (
        <header className="h-14 bg-black flex justify-between text-gray-400 text-3xl">
            <Link href="/">
                <h1 className="font-bold pl-4 pt-4">X-Beat</h1>
            </Link>

            <div className="flex gap-16 pt-4 pr-3">
                <AiOutlineSearch />
                <AiOutlineShoppingCart />
                <AiOutlineUser />
            </div>
        </header>
    );
}
