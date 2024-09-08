// import { useEffect, useRef } from "react"

// export default function Scroller(){
//     const scrollRef = useRef(null);
//     useEffect(()=>{
//         const handleScroll=()=>{
//             console.log('here')
//         }
//         window.addEventListener(scroll,handleScroll())
//         return(()=>{
//             window.removeEventListener(scroll, handleScroll())
//         })
//     },[])
//     return(
//         <div ref={scrollRef}></div>
//     )
// }
'use client'
import React, { useEffect, useRef, useState } from 'react';

export default function HorizontalScroll({activate,setActivate}){
    const ref = useRef(null);
    const [scrollerX, setScrollerX] = useState(0);
    // const [activate, setActivate] = useState(false);
    let test = 0
    useEffect(()=>{
        console.log('something comes up')
        const handleScroll=(event)=>{
            setTimeout(()=>{
                
                const { deltaX, deltaY } = event;
                setScrollerX(scrollerX => scrollerX-deltaY)

                // Log the values of deltaX and deltaY
                console.log('deltaX:', deltaX);
                console.log('deltaY:', deltaY);
                console.log(deltaX,deltaY,"print deltay here")
                // ref.translate(10)
            },100)
        }
        if(activate){
            window.addEventListener("wheel", handleScroll)
        }else{
            window.removeEventListener("wheel", handleScroll)
        }
        return(()=>{
            window.removeEventListener("wheel", handleScroll)
        })
    },[activate])

    useEffect(()=>{
        console.log(activate,'activate?')
    },[activate])

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setActivate(entry.isIntersecting);
          },
          { root: null, rootMargin: '0px', threshold: 0.4 }
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

  return(
    <div ref={ref} className={`bg-white text-black text-[3vw] w-[200vw] h-screen flex justify-center items-center`} style={{transform: `translateX(${scrollerX}px)`}}>
        <p>(Your text goes here. Also, you can place other elements within this parent div.)</p>
    </div>
  )
}