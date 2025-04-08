import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div className={"w-screen flex flex-col items-center bg-white justify-start"}>
            <Navbar />
            
            <Image src={"/assets/apple-ring.png"} alt={"Apple Ring"} width={300} height={300} className={"w-1/2 h-auto mt-10"} />
        </div>
    )
}