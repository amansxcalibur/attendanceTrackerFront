'use client'

import Graph from "./graph"
import { useState, useEffect } from "react";

export default function Data(){
    const [hLim2,setHLim2]=useState("50vh");
    useEffect(()=>{
        const elem=document.getElementById('victimer');
        const rect=elem.getBoundingClientRect();
        console.log(rect['height']);
        const thirdparty=(Math.round(rect["height"])).toString()+"px"
        setHLim2(thirdparty);
        console.log((thirdparty));
        console.log("in data")
        
        console.log(hLim2)
    },[])
    return(
        <div className="flex flex-1 h-full flex-col mx-[3vw] font-light" 
        //style={{height:hw}}
        >
            <div className="mb-[1.5vw]">
                <p className="text-[6vw]">S2 <span className="font-thin">CSE</span></p>
            </div>
            <div className="flex">
                <div className="flex flex-[2] items-center">
                    <p className="text-[4.3vw] leading-[1]">78<span className="text-[3vw]">%</span></p>
                    <p className="text-[1.4vw] leading-[1.8vw] ml-4">Overall<br/>attendance</p>
                </div>
                <div className="flex flex-[3] items-center">
                    <p className="text-[4.3vw] leading-[1]">14<span className="text-[3vw]">d</span></p>
                    <p className="text-[1.5vw] leading-[2vw] ml-4">Overall<br/>bunks left</p>
                </div>
            </div>
            <div className="flex-1 flex h-full" id="victimer">
                <div className="flex-1 flex h-full overflow-auto no-scrollbar" style={{height:hLim2}}>
                    <Graph/>
                </div>
            </div>
        </div>
    )
}