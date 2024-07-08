'use client'

import Graph from "./graph"
import { useState, useEffect } from "react";
import HeightLimit from "../height_limit_scrollable/heightLimit";

export default function Data(){
    const statData=[
        {
            "name": "Maths",
            "percentage": 86,
            "bunks_available": 5
        },
        {
            "name": "English",
            "percentage": 94 ,
            "bunks_available": 10
        },
        {
            "name": "Phys",
            "percentage": 52 ,
            "bunks_available": 10
        },
        {
            "name": "Maths",
            "percentage": 77,
            "bunks_available": 5
        },
        {
            "name": "English",
            "percentage": 94 ,
            "bunks_available": 10
        },
        {
            "name": "Phys",
            "percentage": 77 ,
            "bunks_available": 10
        },

        {
            "name": "Maths",
            "percentage": 86,
            "bunks_available": 5
        },
        {
            "name": "English",
            "percentage": 94 ,
            "bunks_available": 10
        },
        {
            "name": "Phys",
            "percentage": 77 ,
            "bunks_available": 10
        },
    ]

    const [hw,setHw]=useState('50vh');

    const smRatio=297;
    const lgRatio=0.218;

    useEffect(()=>{
        HeightLimit({setHw, smRatio, lgRatio})
        return()=>{
            window.removeEventListener("resize",{});
        }
    },[])

    const avg=(key)=>{
        let sum=0;
        statData.forEach((sub)=>{
            sum+=sub[key];
        })
        return key=='percentage'?(sum/statData.length).toFixed(0): sum;
    }

    return(
        <div className="flex flex-1 h-full flex-col mx-[3vw] font-light max-sm:m-5 max-sm:mb-0">
            <div className="mb-[1.5vw] max-sm:mb-2">
                <p className="text-[6vw] max-sm:text-6xl">S2 <span className="font-thin">CSE</span></p>
            </div>
            <div className="flex">
                <div className="flex flex-[2] items-center">
                    <p className="text-[4.3vw] leading-[1] max-sm:text-5xl">{avg("percentage")}<span className="text-[3vw] max-sm:text-4xl">%</span></p>
                    <p className="text-[1.4vw] leading-[1.8vw] ml-4 max-sm:text-sm max-sm:leading-4 max-sm:ml-1">Overall<br/>attendance</p>
                </div>
                <div className="flex flex-[3] items-center justify-center">
                    <p className="text-[4.3vw] leading-[1] max-sm:text-5xl">{avg("bunks_available")}<span className="text-[3vw] max-sm:text-4xl">d</span></p>
                    <p className="text-[1.5vw] leading-[2vw] ml-4 max-sm:text-sm max-sm:leading-4 max-sm:ml-1">Overall<br/>bunks left</p>
                </div>
                <div className="flex text-center items-center">
                    <p className="text-[1.5vw] leading-[2vw] ml-4 max-sm:text-sm max-sm:leading-4 max-sm:ml-1">Bunks<br/>left</p>
                </div>
            </div>
            <div className="flex-1 flex h-full" id="victimer">
                <div className="flex-1 flex h-full overflow-auto no-scrollbar" style={{height:hw}}>
                    <Graph statData={statData}/>
                </div>
            </div>
        </div>
    )
}