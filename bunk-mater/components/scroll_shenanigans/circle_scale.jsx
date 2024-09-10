'use client'

import { useEffect, useState, useRef } from "react"

export default function CircleScale(){
    const [h, setH] = useState(10);
    const [w, setW] = useState(10);
    const [activate, setActivate] = useState(true)
    const ref = useRef(null);
    const scrollDir = useRef("scrolling down")
    const offs = useRef(null);
  
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
        console.log('dir change to ', scrollDir)
    },[scrollDir])
    const handleScroll=()=>{
        // console.log('here')
        if(scrollDir.current=="scrolling down"){
            setH(h => 1*(window.scrollY-offs.current));
            setW(w => 1*(window.scrollY-offs.current));
            console.log('addition', scrollDir)
        }else{
            setH(h => 1*(window.scrollY-offs.current));
            setW(w => 1*(window.scrollY-offs.current));
            console.log('subttraction', scrollDir)
        }
        console.log(window.scrollY-offs.current)
        // console.log(h,w)
    }
    useEffect(()=>{
        offs.current = window.scrollY
        
        if (activate){
            console.log(activate,'activate')
            window.addEventListener("scroll", handleScroll);
        }else{
            window.removeEventListener("scroll", handleScroll)
        }
        return(()=>{
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
            console.log('observing')
        }

        return () => {
            if (ref.current) {
            observer.unobserve(ref.current);
            console.log('not observing')
            }
        };
        }, []);

        useEffect(()=>{
            console.log(activate,'here is activate')
        },[activate])

    return(
        <div className="max-h-screen">
        <div className="h-[200vh]"></div>
        <div className={`flex justify-center fixed -z-10 left-1/2 transform -translate-x-1/2 ${h>window.innerHeight?"-translate-y-1/2 top-[50vh]":"bottom-0"}`}>
            <div ref={ref} className="bg-white transition rounded-full" style={{minHeight: `${h}px`, minWidth: `${w}px`}}></div>
        </div>
        <div className="h-[200vh]"></div>
        </div>
    )
}


// 'use client'
// import React, { useEffect, useRef, useState } from 'react';

// export default function CircleScale(){
//     const ref = useRef(null);
//     const [scrollerX, setScrollerX] = useState(200);
//     const [activate, setActivate] = useState(false);
//     let test = 0
//     useEffect(()=>{
//         console.log('something comes up')
//         const handleScroll=(event)=>{
//             // setTimeout(()=>{
                
//                 const { deltaX, deltaY } = event;
//                 setScrollerX(scrollerX => scrollerX-deltaY)

//                 // Log the values of deltaX and deltaY
//                 console.log('deltaX:', deltaX);
//                 console.log('deltaY:', deltaY);
//                 console.log(deltaX,deltaY,"print deltay here")
//                 // ref.translate(10)
//             // },)
//         }
//         if(activate){
//             window.addEventListener("scroll", handleScroll)
//         }else{
//             window.removeEventListener("scroll", handleScroll)
//         }
//         return(()=>{
//             window.removeEventListener("scroll", handleScroll)
//         })
//     },[activate])

//     useEffect(()=>{
//         console.log(activate,'activate?')
//     },[activate])

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//           ([entry]) => {
//             setActivate(entry.isIntersecting);
//           },
//           { root: null, rootMargin: '0px', threshold: 0 }
//         );
    
//         if (ref.current) {
//           observer.observe(ref.current);
//           console.log('observing')
//         }
    
//         return () => {
//           if (ref.current) {
//             observer.unobserve(ref.current);
//             console.log('not observing')
//           }
//         };
//       }, []);

//   return(
//     // <div ref={ref} className={`bg-white text-black text-[3vw] w-[300vw] h-screen flex justify-center items-center`} style={{transform: `translateX(${scrollerX}px)`}}>
//     //     <p>(Your text goes here. Also, you can place other elements within this parent div.)</p>
//     // </div>
//     <div id='victim' className='h-[200vh]'>
//       <div ref={ref} className='bg-white rounded-full text-black flex justify-center' style={{height: `${scrollerX}px`, width: `${scrollerX}px`}}>ttt</div>
//     </div>
//   )
// }