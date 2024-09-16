'use client'

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import ReactLenis from "lenis/react";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(true)
  const docH = useRef(0);
  useEffect(()=>{
    const handleScroll=()=>{
      console.log(window.scrollY, document.body.scrollHeight-window.innerHeight, docH)
      if(window.scrollY>=docH.current){
        setOpen(false);
      }else{
        setOpen(true)
      }
    }
    docH.current = document.body.scrollHeight-(1.2)*window.innerHeight;
    window.addEventListener('scroll', handleScroll)
  })
  return (
    <div className="w-full">
      <nav className={`flex h-[6vw] pb-[3vw] top-0 items-center text-[1vw] fixed z-20 w-full ${open?'':'hidden'} transition ease-in duration-300 mix-blend-difference`}>
        <p className="py-[1vw] px-[2vw]">BunkMate</p>
        <div className="flex flex-1 justify-center items-center">
          <button className="mx-[1vw]" onClick={()=>{window.scrollTo(0,0)}}>Home</button>
          <p className="mx-[1vw]" onClick={()=>{document.getElementById('feature').scrollIntoView()}}>Features</p>
          <button className="mx-[1vw]" onClick={()=>{window.scrollTo(0,document.body.scrollHeight)}}>About</button>
        </div>
        <p className="py-[1vw] px-[2vw]"><Link href={'/login'}>Login</Link></p>
      </nav>
      <div className="max-w-screen">
        <ReactLenis root options={{ lerp: 0.06, duration: 1.5, smoothTouch: true, smoothWheel:true }}>
          {children}
        </ReactLenis>
      </div>
    </div>
  );
}
