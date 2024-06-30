'use client'

import Graph from "./graph"
import { useState, useEffect } from "react";

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

    const [hLim2,setHLim2]=useState("50vh");
    useEffect(()=>{
        const elem=document.getElementById('victimer');
        const rect=elem.getBoundingClientRect();
        // console.log(rect['height']);
        const thirdparty=(Math.round(rect["height"])).toString()+"px"
        setHLim2(thirdparty);
        // console.log((thirdparty));
        // console.log("in data")
        
        // console.log(hLim2)
    },[])

    const avg=(key)=>{
        let sum=0;
        statData.forEach((sub)=>{
            sum+=sub[key];
        })
        return key=='percentage'?(sum/statData.length).toFixed(0): sum;
    }

    return(
        <div className="flex flex-1 h-full flex-col mx-[3vw] font-light" 
        //style={{height:hw}}
        >
            <div className="mb-[1.5vw]">
                <p className="text-[6vw]">S2 <span className="font-thin">CSE</span></p>
            </div>
            <div className="flex">
                <div className="flex flex-[2] items-center">
                    <p className="text-[4.3vw] leading-[1]">{avg("percentage")}<span className="text-[3vw]">%</span></p>
                    <p className="text-[1.4vw] leading-[1.8vw] ml-4">Overall<br/>attendance</p>
                </div>
                <div className="flex flex-[3] items-center">
                    <p className="text-[4.3vw] leading-[1]">{avg("bunks_available")}<span className="text-[3vw]">d</span></p>
                    <p className="text-[1.5vw] leading-[2vw] ml-4">Overall<br/>bunks left</p>
                </div>
                <div className="flex text-right items-end">
                    <p className="text-[1.5vw] leading-[2vw] ml-4">Bunks</p>
                </div>
            </div>
            <div className="flex-1 flex h-full" id="victimer">
                <div className="flex-1 flex h-full overflow-auto no-scrollbar" style={{height:hLim2}}>
                    <Graph statData={statData}/>
                </div>
            </div>
        </div>
    )
}