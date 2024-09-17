'use client'

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import ReactLenis from "lenis/react";
import Logo from "@/app/_assets/logo.png"
import Image from "next/image";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(true)
  // const docH = useRef(0);
  // useEffect(()=>{
  //   const handleScroll=()=>{
  //     console.log(window.scrollY, document.body.scrollHeight-window.innerHeight, docH)
  //     if(window.scrollY>=docH.current){
  //       setOpen(false);
  //     }else{
  //       setOpen(true)
  //     }
  //   }
  //   docH.current = document.body.scrollHeight-(1)*window.innerHeight;
  //   window.addEventListener('scroll', handleScroll)
  // })
  useEffect(() => {
    let observer;
    const ref = document.getElementById("end");
    //console.log('vna')
    observer = new IntersectionObserver(
        ([entry]) => {
        setOpen(!entry.isIntersecting);
        //console.log(!entry.isIntersecting)
        },
        { root: null, rootMargin: '0px', threshold: 0 }
    );

    if (ref) {
        observer.observe(ref);
        //console.log('observing')
    }

    return () => {
        if (ref && observer !=undefined) {
        observer.unobserve(ref);
        //console.log('not observing')
        }
    };
  }, []);
  return (
    <div className="w-full">
      <nav className={`flex pb-[3vw] top-0 items-center text-[1vw] max-md:text-[5vw] fixed z-20 w-full ${open?'':' -translate-y-[100%] '} transition ease-in duration-300 mix-blend-difference`}>
        <Image src={Logo} className="h-[7vw] w-auto -mr-[2vw] md:hidden"></Image>
        <button onClick={()=>{window.scrollTo(0,0)}} className="py-[1vw] px-[2vw] max-md:flex-1">BunkMate</button>
        <div className="flex flex-1 justify-center items-center max-md:hidden">
          <button className="mx-[1vw] hover:text-[#808080] transition ease-in duration-300" onClick={()=>{window.scrollTo(0,0)}}>Home</button>
          <button className="mx-[1vw] hover:text-[#808080] transition ease-in duration-300" onClick={()=>{document.getElementById('feature').scrollIntoView()}}>Features</button>
          <button className="mx-[1vw] hover:text-[#808080] transition ease-in duration-300" onClick={()=>{window.scrollTo(0,document.body.scrollHeight)}}>About</button>
        </div>
        <button className="py-[0.5vw] px-[1vw] mx-[1vw] hover:bg-white hover:text-black rounded-full transition duration-300 ease"><Link href={'/login'}>Login</Link></button>
      </nav>
      <div className="max-w-screen">
        <ReactLenis root options={{ lerp: 0.06, duration: 1.5, smoothTouch: true, smoothWheel:true }}>
          {children}
        </ReactLenis>
      </div>
    </div>
  );
}
