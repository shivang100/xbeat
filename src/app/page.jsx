"use client";
import HeroSlider from "./components/HeroSlider";
import FeaturedSlider from "./components/FeaturedSlider";
import TopProducts from "./components/TopProducts";

export default function Home() {
    return (
        <main className="bg-rd text-of mt-16">
            <div className="">
                <HeroSlider />
            </div>
            <div className="">
                <h2 className="font-bold text-2xl text-center py-32">
                    Featured Products
                </h2>
                <FeaturedSlider />
            </div>
            <div>
                <TopProducts />
            </div>
        </main>
    );
}
