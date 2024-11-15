import Link from "next/link"

export default function PopOutButton({href, mssg}){
    return(
        <Link href={href} className="rounded-full w-full mt-[0.1vh] ml-[0.1vh] border shadow-none transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_4px_0_0_black] active:transform active:translate-y-0.5 active:translate-x-0.25 active:shadow-none">
            <p className="border-solid border-[0.5vh] bg-[#ff61ff] flex justify-center items-center border-black h-full rounded-full text-[1.25vw] max-md:text-[4vw]">
                {mssg}
            </p>
        </Link>
    )
}