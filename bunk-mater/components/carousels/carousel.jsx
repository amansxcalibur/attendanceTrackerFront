import Image from "next/image";
import BunkMate from "../../app/_assets/Bunk-Mate.png"

export default function Carousel(){
    const logos = [1,2,3,4,5,6,7,8,9,10]
    return(
        <div className="max-md:w-screen max-md:absolute max-md:-z-10 max-md:-translate-y-[40vh] md:h-screen inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(95%-128px),transparent_100%)]">
        <ul className="flex md:flex-col md:items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none md:animate-infinite-scroll-y max-md:animate-infinite-scroll-x">
          {logos.map((index) => (
            <li key={index}>
              <Image src={BunkMate} className="md:w-[40vw] max-md:w-[30vh] md:mb-[1vw] max-md:-ml-[6.5vh]"/>
            </li>
          ))}
        </ul>
      </div>
    )
}