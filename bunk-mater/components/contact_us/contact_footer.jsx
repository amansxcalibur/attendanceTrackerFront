import Logo from "@/public/assets/logo.png"
import Image from "next/image"
import Link from "next/link"
import BackToTop from "../svg/back_to_top"
import PopOutButton from "../ui/popout_button"

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
                            <p className="text-[1.5vw] max-md:text-[4vw] px-[1vw] hover:bg-black hover:text-white rounded-full transition duration-300 ease flex">
                                <Link href={'https://github.com/amansxcalibur'} className="flex-1">amansxcalibur</Link>
                            </p>
                            <p className="text-[1.5vw] max-md:text-[4vw] px-[1vw] hover:bg-black hover:text-white rounded-full transition duration-300 ease flex">
                                <Link href={'https://github.com/angrezichatterbox'} className="flex-1">angrezichatterbox</Link>
                            </p>
                            <p className="text-[1.5vw] max-md:text-[4vw] px-[1vw] hover:bg-black hover:text-white rounded-full transition duration-300 ease flex">
                                <Link href={'https://github.com/hrideshmg'} className="flex-1">hrideshmg</Link>
                            </p>
                        </div>
                        <div className="text-black flex-1 flex justify-center w-full items-end">
                            <BackToTop/>
                        </div>
                        <div className="min-w-[15vw]">
                            <p className="text-[2vw] text-[#8a8a8a] max-md:text-[5vw]">GitHub</p>
                            <p className="text-[1.5vw] max-md:text-[4vw] px-[1vw] hover:bg-black hover:text-white rounded-full transition duration-300 ease flex">
                                <Link href={'https://github.com/Bunk-Mate/.github'} className="flex-1">Bunk-Mate</Link>
                            </p>
                            <p className="text-[1.5vw] max-md:text-[4vw] px-[1vw] hover:bg-black hover:text-white rounded-full transition duration-300 ease flex">
                                <Link href={'https://github.com/Bunk-Mate/Mobile-App'} className="flex-1">Mobile App</Link>
                            </p>
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
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] flex">
                        <PopOutButton href={'/registration'} mssg={"Get started now?"}/>
                    </div>
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
                    <div className="rounded-full min-w-[20vw] max-md:min-w-[45vw] flex">
                        <PopOutButton href={'https://github.com/Bunk-Mate/Mobile-App'} mssg={"We also have an app"}/>
                    </div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                </div>
                <div className="h-[12vh] ml-[15vh] flex max-md:-ml-[10vw]">
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black max-md:hidden"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
                    <div className="rounded-full min-w-[15vw] max-md:min-w-[40vw] flex">
                        <PopOutButton href={'https://github.com/Bunk-Mate/Website/issues'} mssg={"Found any bugs?"}/>
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
        {[1,2,3,4,5,6,7,8,9].map(iter=>
            <div key={iter.id} className="rounded-full min-w-[15vw] max-md:min-w-[40vw] mt-[0.1vh] ml-[0.1vh] border-black border-solid border-[0.5vh] bg-black"></div>
        )}
        </>
    )
}