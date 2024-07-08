'use client'

import { useState, useEffect } from "react";
import EditSvg from '../../../components/svg/edit.jsx'
import TrashSvg from '../../../components/svg/trash.jsx'
import Link from "next/link.js";
import Popup from '../../../components/popup/popup.jsx'
import HeightLimit from "@/components/height_limit_scrollable/heightLimit.js";

export default function Table(){
    const tableData=[
        [
            "maths",
            "English",
            "history",
            "chemistry",
            "physics"
        ],
        [
            "algebra",
            "literature",
            "geography",
            null,
            "computer science"
        ],
        [
            null,
            "English",
            "world history",
            "physics",
            "art"
        ],
        [
            null,
            null,
            "US history",
            "chemistry",
            null
        ],
        [
            "maths",
            "English",
            "history",
            "chemistry",
            "physics"
        ],
        [
            "algebra",
            "literature",
            "geography",
            null,
            "computer science"
        ],
        [
            null,
            "English",
            "world history",
            "physics",
            "art"
        ],
        [
            null,
            null,
            "US history",
            "chemistry",
            null
        ],
        [
            "maths",
            "English",
            "history",
            "chemistry",
            "physics"
        ],
        [
            "algebra",
            "literature",
            "geography",
            null,
            "computer science"
        ],
        [
            null,
            "English",
            "world history",
            "physics",
            "art"
        ],
        [
            null,
            null,
            "US history",
            "chemistry",
            null
        ]
    ];

    const [delCheck, setDelCheck]=useState(null);
    const [hw,setHw]=useState('50vh');

    useEffect(()=>{
        if (delCheck=="Delete"){
            alert("deleted");
        }
    },[delCheck])

    const smRatio=170;
    const lgRatio=0.1415;
    
    useEffect(()=>{
        HeightLimit({setHw, smRatio, lgRatio})
        return()=>{
            window.removeEventListener("resize",{});
        }
    },[])

    return(
        <div className="flex flex-col h-full pt-[3vw] max-sm:pt-4">
            <div className="sm:hidden max-sm:flex max-sm:justify-center">
                <Link href={"/dashboard/edit"} className="rounded-full sm:h-16 sm:w-16 max-sm:mx-3 flex justify-center items-center overflow-hidden">
                    <EditSvg/>
                </Link>
                <button className="rounded-full sm:h-16 sm:w-16 max-sm:mx-3 flex justify-center items-center overflow-hidden">
                    <Popup compToPass={<TrashSvg/>} setDesCheck={setDelCheck} message={{message:"Are you sure you want to delete the timetable?", opt:["Cancel", "Delete"]}}/>
                </button>
            </div>
            <div className="flex sm:flex-1 justify-center max-sm:items-end max-sm:mt-3">
                <table>
                    <thead>
                        <tr className="text-[4vw] text-[#737373] max-sm:text-4xl">
                            <th className="font-light w-[13vw] max-sm:w-[19.5vw]">Mon</th>
                            <th className="font-light w-[13vw] max-sm:w-[19.5vw]">Tue</th>
                            <th className="font-light w-[13vw] max-sm:w-[19.5vw]">Wed</th>
                            <th className="font-light w-[13vw] max-sm:w-[19.5vw]">Thu</th>
                            <th className="font-light w-[13vw] max-sm:w-[19.5vw]">Fri</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="flex flex-[9] justify-center" id="victim">
                <div id="fake-buttons" className="h-16 w-16 max-sm:hidden"></div>
                <div className="overflow-auto no-scrollbar" style={{maxHeight:`${hw}`}}>
                    <table className="border-separate">
                        <tbody>
                            {tableData.map((rowVal, rowId)=>(
                                <tr key={rowId} className="text-[1.5vw] font-light max-sm:text-lg">
                                    {Object.values(rowVal).map((cellValue, colIndex) => (
                                        <td key={colIndex} className={`h-[13vw] w-[13vw] text-center ${tableData[rowId][colIndex]==null?'':'hover:bg-[#292b2e] bg-[#202224]'} border border-black
                                                                       max-sm:h-[19.5vw] max-sm:w-[19.5vw]`}>
                                            <div className="h-full flex justify-center items-center flex-wrap break-all">
                                                {/* {colIndex}
                                                {rowId} */}
                                                {tableData[rowId][colIndex]}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="max-sm:hidden">
                    <Link href={"/dashboard/edit"} className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                        <EditSvg/>
                    </Link>
                    <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                        <Popup compToPass={<TrashSvg/>} setDesCheck={setDelCheck} message={{message:"Are you sure you want to delete the timetable?", opt:["Cancel", "Delete"]}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}