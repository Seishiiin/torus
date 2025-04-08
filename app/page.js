import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div className={"w-screen flex flex-col items-center bg-white justify-start px-10"}>
            <Navbar />
            
            <Image src={"/assets/apple-ring.png"} alt={"Apple Ring"} width={300} height={300} className={"w-1/2 h-auto mt-10"} />

            <div className={"w-4/6 flex flex-col items-center justify-center"}>
                <h1 className={" flex justify-start items-start gap-1 font-bold text-4xl"}><Image src={"/assets/apple.svg"} alt={"Apple"} width={30} height={30} className={"w-8 h-8"} /> Ring</h1>
                <p className={"text-gray-500 text-sm"}>Plus qu’un bijou. Une révolution.</p>
                <button className={"bg-[#306fdb] text-white rounded-full px-6 py-2 text-md mt-5"}>Acheter maintenant</button>
            </div>
        </div>
    )
}