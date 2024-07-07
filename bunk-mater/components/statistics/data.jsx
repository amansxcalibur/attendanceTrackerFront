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

    const [hLim2,setHLim2]=useState('50vh');
    // useEffect(()=>{
    //     const elem=document.getElementById('victimer');
    //     const rect=elem.getBoundingClientRect();
    //     // console.log(rect['height']);
    //     const thirdparty=(Math.round(rect["height"])).toString()+"px"
    //     setHLim2(thirdparty);
    //     // console.log((thirdparty));
    //     // console.log("in data")
        
    //     // console.log(hLim2)
    // },[])

    useEffect(()=>{
        // const elem=document.getElementById('victimer');
        // const rect=elem.getBoundingClientRect();
        // const thirdparty=(Math.floor(rect["height"])).toString()+"px";
        // console.log(thirdparty)
        // setHLim2(thirdparty);
        if (window.innerWidth>640){
            setHLim2((parseInt(window.innerHeight-0.216*window.innerWidth-3)).toString()+"px");
        }else{
            setHLim2((parseInt(window.innerHeight-297)).toString()+'px');
        }
        window.addEventListener("resize",()=>{
            setTimeout(()=>{
                //console.log(window.innerHeight-0.11*window.innerWidth, "hw:",hLim2);
                if (window.innerWidth>640){
                    setHLim2((parseInt(window.innerHeight-0.216*window.innerWidth-3)).toString()+"px");
                }else{
                    setHLim2((parseInt(window.innerHeight-297)).toString()+'px');
                }
            },10)
        });
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
        <div className="flex flex-1 h-full flex-col mx-[3vw] font-light max-sm:m-5 max-sm:mb-0" 
        //style={{height:hw}}
        >
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
                <div className="flex-1 flex h-full overflow-auto no-scrollbar" style={{height:hLim2}}>
                    <Graph statData={statData}/>
                </div>
            </div>
        </div>
    )
}