"use client";

import {useEffect, useState} from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className={`sticky h-14 top-0 ${isScrolled ? "w-full justify-around" : "w-4/6 justify-between px-18"} backdrop-blur-md flex items-center border-b border-[#d6d6d6] pt-4 pb-2 px-1 z-20`}>
            <h1 className={"font-bold text-xl"}>Apple Ring</h1>

            <button className={"bg-[#306fdb] text-white rounded-full px-3 py-px text-sm"}>Acheter</button>
        </div>
    )
}