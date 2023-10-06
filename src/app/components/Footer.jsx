import Link from "next/link";
import {
    BiLogoFacebook,
    BiLogoTwitter,
    BiLogoInstagram,
    BiLogoLinkedin,
} from "react-icons/bi";
export default function Footer() {
    return (
        <footer>
            <div className="bg-black text-of py-2 px-6 sm:w-100 lg:max-w-full">
                <div className="flex flex-col md:flex-row justify-between lg:mt-10">
                    <div className="md:w-1/3 lg:w-1/2">
                        <Link href="/">
                            <h1 className="font-bold text-2xl">X-Beat</h1>
                        </Link>
                        <p className="font-normal text-sm md:text-sm text-of mt-3 w-[88%]">
                            Subscribe to our Email alerts to receive early
                            discount offers, and new products info.
                        </p>
                        <input
                            placeholder="Email Address*"
                            type="email"
                            className="border-2
                    focus:border-white w-[88%] bg-black p-2 mt-4 mr-0 mb-0 ml-0 text-base text-white
                    border-gray-700 "
                        />
                        <button className="mt-4 px-8 py-2 bg-pe text-white rounded font-light">
                            Subscribe
                        </button>
                    </div>
                    <div className="text-base text-gray-200 mt-8 md:mt-0 md:w-1/4 lg:ml-20">
                        <h1 className="font-bold text-of">Help</h1>
                        <ul className="mt-6 text-sm">
                            <a href="/">
                                <li className="flex text-base title-font gap-4 py-2 text-of">
                                    FAQ
                                </li>
                            </a>
                            <a href="/Menu">
                                <li className="flex text-base title-font gap-4 py-2 text-of">
                                    Track Order
                                </li>
                            </a>
                            <a href="/Menu">
                                <li className="flex text-base title-font gap-4 py-2 text-of ">
                                    Cancel Order
                                </li>
                            </a>
                            <a href="/Menu">
                                <li className="flex text-base title-font gap-4 py-2 text-of">
                                    Return Order
                                </li>
                            </a>
                            <a href="/Menu">
                                <li className="flex text-base title-font gap-4 py-2 text-of">
                                    Warranty Info
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="text-base text-gray-200 mt-8 md:mt-0 md:w-1/3 lg:ml-24">
                        <h1 className="font-bold text-gray-400">Policies</h1>
                        <ul className="mt-6 text-sm">
                            <a href="/">
                                <li className="flex text-base title-font gap-4 py-2 text-of">
                                    Return Policy
                                </li>
                            </a>
                            <a href="/Menu">
                                <li className="flex text-base title-font gap-4 py-2 text-of">
                                    Security
                                </li>
                            </a>
                            <a href="/Menu">
                                <li className="flex text-base title-font gap-4 py-2 text-of ">
                                    Sitemap
                                </li>
                            </a>
                            <a href="/Menu">
                                <li className="flex text-base title-font gap-4 py-2 text-of">
                                    Privacy Policy
                                </li>
                            </a>
                            <a href="/Menu">
                                <li className="flex text-base title-font gap-4 py-2 text-of">
                                    Terms & Conditions
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="text-base text-gray-200 mt-8 md:mt-0 md:w-1/4 lg:ml-20">
                        <h1 className="font-bold text-gray-400">Company</h1>
                        <ul className="mt-6 text-sm">
                            <a href="/">
                                <li className="flex text-base title-font gap-4 py-2 text-of">
                                    About Us
                                </li>
                            </a>
                            <a href="/Menu">
                                <li className="flex text-base title-font gap-4 py-2 text-of">
                                    Contact Us
                                </li>
                            </a>
                            <a href="/Menu">
                                <li className="flex text-base title-font gap-4 py-2 text-of ">
                                    Service Centres
                                </li>
                            </a>
                            <a href="/Menu">
                                <li className="flex text-base title-font gap-4 py-2 text-of">
                                    Careers
                                </li>
                            </a>
                            <a href="/Menu">
                                <li className="flex text-base title-font gap-4 py-2 text-of">
                                    Affiliates
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-black text-of">
                <hr className="lg:pt-4 border-gray-400 pb-2 " />
                <div className="text-sm font-light flex flex-col md:flex-row justify-between lg:ml-10 text-gray-400">
                    <h1 className="pt-2 mb-2 w-full">
                        2023 | XBeat. All Rights Reserved. Built by | Shivang
                        Malhotra
                    </h1>
                    <div className="flex mt-4 md:mt-0 lg:ml-10 text-2xl mr-14">
                        <h1 className="pt-2 p-4 pl-6">
                            <BiLogoFacebook />
                        </h1>
                        <h1 className="pt-2 p-4 pl-6 ">
                            <BiLogoTwitter />
                        </h1>
                        <h1 className="pt-2 p-4 pl-6 ">
                            <BiLogoInstagram />
                        </h1>
                        <h1 className="pt-2 p-4 pl-6 ">
                            <BiLogoLinkedin />
                        </h1>
                    </div>
                </div>
            </div>
        </footer>
    );
}
