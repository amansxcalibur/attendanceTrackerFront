'use client'

import Link from "next/link";
import Image from "next/image";
import Dashboard from "@/app/_assets/dashboard.png"
import EditTable from "@/app/_assets/edit_timetable.png"
import CircleScale from "@/components/scroll_shenanigans/circle_scale";
import HorizontalScrollCarousel from "@/components/scroll_shenanigans/dependent_horizontal_scroll";
import ContactFooter from "@/components/contact_us/contact_footer";
import Feature from "@/components/feature/feature";
import NameStrip from "@/components/name_strip/name_strip";
import FeatureStrip from "@/components/name_strip/feature_strip"
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    window.onbeforeunload=()=>{
        window.scrollTo(0,0)
    }
    //console.log('reload')
  })
  return (
    <div className="h-[94vh] scroll-smooth">
      <div className="flex flex-col items-center justify-center flex-1 m-[1vw] h-[90vh] max-md:h-[90vh] bg-black">
        <p className="text-[2vw] -m-[1vw] max-md:text-[5vw]">Welcome to</p>
        <p className="text-[7vw] max-md:text-[14vw]">Bunk-Mate</p>
        <button 
          type="button"
          className="bg-black max-sm:text-lg rounded-full text-[1.5vw] font-light hover:text-black hover:bg-white transition duration-1000 border-[1px] border-b-blueviolet border-r-blueviolet border-t-white border-l-white p-4 text-blueviolet hover:border-b-[#ee67ee] hover:border-r-[#ee67ee] hover:border-t-blueviolet hover:border-l-blueviolet hover:shadow-[5px_5px_rgba(240,46,170,0.4),10px_10px_rgba(240,46,170,0.3),15px_15px_rgba(240,46,170,0.2)]"
            >
            <Link className="flex-1 p-[1vw]" href="/registration">Get Started</Link>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center -mt-[8vw]">
        <Image src={Dashboard} className="h-[30vw] w-auto border-[0.4vw] rounded-[1vw] border-[#979797] border-solid max-md:w-[90vw] max-md:h-auto"/>
        <div className="bg-gradient-to-t from-black min-h-[10vw] w-screen -mt-[10vw]"></div>
      </div>
      <div className="text-[3vw] max-md:text-[7vw] h-screen flex justify-center items-center">
        <p className="max-w-[60vw] max-md:max-w-[85vw]">
          Bunk Mate helps you track your attendance and plan your bunks. Who else is better to rely on that oneself..
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-[50vh] max-md:mt-[15vh]">
        <Image src={Dashboard} className="w-[60vw] h-auto sticky top-[50vh] -translate-y-1/2 mb-[20vw] max-md:w-[90vw] border-[0.4vw] rounded-[1vw] border-[#505050] border-solid"/>
        <Image src={EditTable} className="w-[60vw] h-auto sticky top-[50vh] -translate-y-1/2 mb-[20vw] max-md:w-[90vw] border-[0.4vw] rounded-[1vw] border-[#505050] border-solid"/>
        <div className="w-[60vw] h-[30.4vw] flex justify-center items-center bg-[#1c1c1c] sticky top-[50vh] -translate-y-1/2 mb-[20vw] max-md:w-[90vw] max-md:h-[45vw] border-[0.2vw] rounded-[1vw] border-[#979797] border-dashed text-[1vw]">Ranked bunking coming soon</div>
      </div>
      <div className="max-w-screen -mb-[13vw] -mt-[20vw]">
        <FeatureStrip/>
      </div>
      <div id='feature'>
        <Feature/>
      </div>
      <CircleScale/>
      <HorizontalScrollCarousel/>
      <div className="max-w-screen bg-white">
        <NameStrip/>
      </div>
      <div className="h-[20vh] bg-black max-w-screen"></div>
      <ContactFooter/>
    </div>
  );
}