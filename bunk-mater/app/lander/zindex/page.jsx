'use client'

import { useEffect, useState, useRef } from "react"

export default function CircleScale(){
    const [h, setH] = useState(0);
    const [w, setW] = useState(0);
    const [activate, setActivate] = useState(false)
    const ref = useRef(null);
    const scrollDir = useRef("scrolling down")
    const offs = useRef(0);
  
    useEffect(() => {
      let lastScrollY = window.scrollY;
      let ticking = false;
  
      const updateScrollDir = () => {
        const scrollY = window.scrollY;
        if (Math.abs(scrollY - lastScrollY) < 5) {
          ticking = false;
          return;
        }
        scrollDir.current = scrollY > lastScrollY ? "scrolling down" : "scrolling up"
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };
  
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(()=>{
        //console.log('dir change to ', scrollDir)
    },[scrollDir])
    const handleScroll=()=>{
        // console.log('here')
        if(scrollDir.current=="scrolling down"){
            setH(h => 1*(window.scrollY-offs.current));
            setW(w => 1*(window.scrollY-offs.current));
            //console.log('addition', scrollDir)
        }else{
            setH(h => 1*(window.scrollY-offs.current));
            setW(w => 1*(window.scrollY-offs.current));
            //console.log('subttraction', scrollDir)
        }
        //console.log(window.scrollY-offs.current, offs.current, window.scrollY)
        // console.log(h,w)
    }
    useEffect(()=>{
        if (offs.current==0){
            offs.current=window.scrollY;
        }

        if (activate){
            //console.log(activate,'activate')
            window.addEventListener("scroll", handleScroll);
        }else{
            setH(0);
            setW(0);
            window.removeEventListener("scroll", handleScroll)
        }
        return(()=>{
            setH(0);
            setW(0);
            window.removeEventListener("scroll", handleScroll)
        })
    },[activate])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            setActivate(entry.isIntersecting);
            },
            { root: null, rootMargin: '0px', threshold: 0 }
        );

        if (ref.current) {
            observer.observe(ref.current);
            //console.log('observing')
        }

        return () => {
            if (ref.current) {
            observer.unobserve(ref.current);
            //console.log('not observing')
            }
        };
        }, []);

        useEffect(()=>{
            //console.log(activate,'here is activate')
        },[activate])

    return(
        <div className="h-[600vh]">
        <div className="h-[200vh]"></div>
        <div className="flex justify-center h-[200vh] bg-red-950" ref={ref}
        //style={{height:`${Math.round(Math.sqrt((window.innerHeight)**2+(window.innerWidth)**2))}px`}}
        >
            <div className={`bg-blue-600 rounded-full fixed ${h>window.innerHeight?'transform -translate-y-1/2 top-[50vh]':'bottom-0'}`}
            style={{minHeight: `${h}px`, minWidth: `${w}px`}}
            ></div>
        </div>
        {/* <div className={`flex justify-center bg-blue-600 transform ${h>window.innerHeight?"fixed left-1/2 -translate-x-1/2 -translate-y-1/2 top-[50vh]":"bottom-0"}`}>
            <div ref={ref} className="bg-white transition rounded-full" style={{minHeight: `${h}px`, minWidth: `${w}px`}}></div>
        </div> */}
        <div className="h-[200vh]"></div>
        </div>
    )
}