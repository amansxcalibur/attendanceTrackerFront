import Image from "next/image";
import Chinchilla from "@/public/assets/chinchilla.gif"
import Link from "next/link";

export default function TermsAndCond(){
    return(
        <div className="h-screen flex flex-col">
            <p className="p-4 text-xl"><Link href="/registration"><u>Go back to registration</u></Link></p>
            <div className="flex-1 flex justify-center items-center">
                <Image src={Chinchilla}/>
            </div>
        </div>
    )
}