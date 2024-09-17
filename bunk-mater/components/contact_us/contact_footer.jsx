import Logo from "@/app/_assets/logo.png"
import Tape from "@/app/_assets/name_strip.png"
import Image from "next/image"
import Link from "next/link"
import BackToTop from "../svg/back_to_top"

export default function ContactFooter(){
    return(
        <div className="h-screen bg-white flex flex-col text-black invert">
            <div className="absolute flex flex-col items-end z-10 min-h-screen w-full pointer-events-none">
                <div className="text-[4vw] max-md:text-[10vw] w-full flex items-center tracking-tighter max-md:mt-[3vw]">
                    <Image src={Logo} className="invert h-[5.5vw] max-md:h-[11vw] w-auto"/>Bunk-Mate</div>
                <div className="flex-1"></div>
                <div className="min-h-[10vh] w-screen bg-gradient-to-t from-white from-20%"></div>
                <div className="min-h-[35vh] w-screen bg-white flex flex-col items-end pointer-events-auto">
                    <div className="flex-1 w-full flex p-[2vw] px-[4vw]">
                        <div className="min-w-[15vw]">
                            <p className="text-[2vw] text-[#8a8a8a] max-md:text-[5vw]">A PROJECT BY</p>
                            <p className="text-[1.5vw] max-md:text-[4vw] px-[1vw] hover:bg-black hover:text-white rounded-full transition duration-300 ease"><Link href={'https://github.com/amansxcalibur'}>amansxcalibur</Link></p>
                            <p className="text-[1.5vw] max-md:text-[4vw] px-[1vw] hover:bg-black hover:text-white rounded-full transition duration-300 ease"><Link href={'https://github.com/angrezichatterbox'}>angrezichatterbox</Link></p>
                            <p className="text-[1.5vw] max-md:text-[4vw] px-[1vw] hover:bg-black hover:text-white rounded-full transition duration-300 ease"><Link href={'https://github.com/hrideshmg'}>hrideshmg</Link></p>
                        </div>
                        <div className="text-black flex-1 flex justify-center w-full items-end">
                            <BackToTop/>
                        </div>
                        <div className="min-w-[15vw]">
                            <p className="text-[2vw] text-[#8a8a8a] max-md:text-[5vw]">GitHub</p>
                            <p className="text-[1.5vw] max-md:text-[4vw] px-[1vw] hover:bg-black hover:text-white rounded-full transition duration-300 ease"><Link href={'https://github.com/Bunk-Mate/.github'}>Bunk-Mate</Link></p>
                            <p className="text-[1.5vw] max-md:text-[4vw] px-[1vw] hover:bg-black hover:text-white rounded-full transition duration-300 ease"><Link href={'https://github.com/Bunk-Mate/Mobile-App'}>Mobile App</Link></p>
                        </div>
                    </div>
                    <div id="end" className="text-[#8a8a8a] text-[1vw] max-md:text-[3vw] w-full p-[1vw]">&copy;2024, Bunk-Mate. All Rights Probably NOT Reserved</div>
                </div>
            </div>
            <div className="flex-1 bg-white flex flex-col -ml-[15vw] max-h-screen overflow-hidden tracking-tight">
                <div className="h-[12vh] flex ml-[80vw] mt-[2.1vh]"><Insider/></div>
                <div className="h-[12vh] flex max-md:-ml-[30vw]"><Insider/></div>
                <div className="h-[12vh] ml-[18vh] flex max-md:-ml-[10vw]">
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <button className="rounded-full min-w-[15vw] max-md:min-w-[40vw] flex justify-center items-center mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-[#ff61ff]">
                        <Link href={'/login'} className="flex-1 text-[1.25vw] max-md:text-[4vw]">Get started now?</Link>
                    </button>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                </div>
                <div className="h-[12vh] ml-[5vh] flex max-md:-ml-[20vw]">
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black max-md:hidden"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black max-md:hidden"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black max-md:hidden"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black max-md:hidden"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <button className="rounded-full min-w-[20vw] max-md:min-w-[45vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-[#ff61ff] flex justify-center items-center">
                        <Link href={'https://github.com/Bunk-Mate/Mobile-App'} className="flex-1 text-[1.25vw] max-md:text-[4vw]">We also have an app</Link>
                    </button>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                </div>
                <div className="h-[12vh] ml-[15vh] flex max-md:-ml-[10vw]">
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black max-md:hidden"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-[#ff61ff] flex justify-center items-center">
                        <Link href={'https://github.com/Bunk-Mate/Website/issues'} className="flex-1 text-[1.25vw] max-md:text-[4vw]">Found any bugs?</Link>
                    </div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                </div>
                <div className="h-[12vh] ml-[3vh] flex"><Insider/></div>
                <div className="h-[12vh] ml-[10vh] flex"><Insider/></div>
                <div className="h-[12vh flex"><Insider/></div>
                <div className="h-[12vh] ml-[15vh flex"><Insider/></div>
                <div className="h-[12vh] ml-[5vh] flex"><Insider/></div>
            </div>
        </div>
    )
}

function Insider(){
    return(
        <>
        <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
        <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
        <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
        <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
        <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
        <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
        <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
        <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
        <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
        </>
    )
}