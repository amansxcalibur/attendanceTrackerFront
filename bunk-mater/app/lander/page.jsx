'use client'

import Link from "next/link";
import Image from "next/image";
import Dashboard from "@/app/_assets/dashboard.png"
import Typewriter from "@/app/_assets/typewriter.jpg"
import EditTable from "@/app/_assets/edit_timetable.png"
import RewindTime from "@/app/_assets/rewind_time.png"
import Statusman from "@/app/_assets/statusman.png"
import CoursesDropped from "@/app/_assets/courses_drop_cropped.png"
import { useState } from "react";
import CircleScale from "@/components/scroll_shenanigans/circle_scale";
import HorizontalScrollCarousel from "@/components/scroll_shenanigans/dependent_horizontal_scroll";

export default function Home() {
  const [activate, setActivate] = useState(false);
  return (
    <div className={`h-[94vh] scroll-smooth`}>
      <div className="flex flex-col items-center justify-center flex-1 m-[1vw] h-[90vh] bg-black">
        <p className="text-[2vw] -m-[1vw]">Welcome to</p>
        <p className="text-[7vw]">Bunk-Mate</p>
        {/* <p className="text-[#8a8a8a] pb-[1vw] max-w-[60vw] text-[1.5vw] text-center">Tired of having your attendance in the <span className="text-red-600">red</span>? Track bunks and perhaps mate. Maybe this will be your anti-kryptonite...</p> */}
        <button 
          type="button"
          className="bg-black max-sm:text-lg rounded-full text-[1.5vw] font-light hover:text-black hover:bg-white transition duration-1000 border-[1px] border-b-blueviolet border-r-blueviolet border-t-white border-l-white p-4 text-blueviolet hover:border-b-[#ee67ee] hover:border-r-[#ee67ee] hover:border-t-blueviolet hover:border-l-blueviolet hover:shadow-[5px_5px_rgba(240,46,170,0.4),10px_10px_rgba(240,46,170,0.3),15px_15px_rgba(240,46,170,0.2)]"
            >
            <Link className="flex-1 p-[1vw]" href="/registration">Get Started</Link>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={Dashboard} className="h-[30vh] w-auto"/>
        <Image src={Typewriter}/>
      </div>
      <div className="text-[3vw] h-screen flex justify-center items-center">
        <p className="max-w-[60vw]">
          Bunk Mate helps you track your attendance and plan your bunks. Who else is better to rely on that oneself..
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image src={Dashboard} className="w-[60vw] h-auto"/>
        <Image src={EditTable} className="w-[60vw] h-auto"/>
        <div className="w-[60vw] h-[30vw] flex justify-center items-center rounded-[2vw] bg-[#1c1c1c]">Ranked bunking here</div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-start">
          <Image src={CoursesDropped} className="w-[20vw] h-auto"/>
          <p>Add and edit your timetable</p>
        </div>
        <div className="flex justify-end">
          <p>Choose which day’s course status to change</p>
          <Image src={RewindTime} className="w-[20vw] h-auto"/>
        </div>
        <div className="flex justify-start">
          <Image src={Statusman} className="w-[20vw] h-auto"/>
          <p>Update your attendance for each course</p>
        </div>
        {/* <CircleScale/>
        <HorizontalScrollCarousel/> */}
        <div className="bg-white h-screen flex text-black">
          <div>Bunk-Mate</div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
}