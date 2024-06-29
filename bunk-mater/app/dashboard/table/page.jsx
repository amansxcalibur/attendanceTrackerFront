'use client'

import { useState, useEffect } from "react";
import EditSvg from '../../../components/svg/edit.jsx'
import TrashSvg from '../../../components/svg/trash.jsx'
import Link from "next/link.js";
import Popup from '../../../components/popup/popup.jsx'

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
        ]
    ];

    const [delCheck, setDelCheck]=useState(null);
    const [hw,setHw]=useState("50vh");

    useEffect(()=>{
        const elem=document.getElementById('victim');
        const rect=elem.getBoundingClientRect();
        console.log(rect['height']);
        const thirdparty=(Math.floor(rect["height"])).toString()+"px"
        setHw(thirdparty);
        console.log((thirdparty));
        console.log("in useEffect")
        console.log(hw)
    },[])

    useEffect(()=>{
        if (delCheck=="Delete"){
            alert("deleted");
        }
    },[delCheck])

    return(
        <div className="flex flex-col h-full">
            <div className="flex-1"></div>
            <div className="flex justify-center">
                <table>
                    <thead>
                        <tr className="text-[4vw] text-[#737373]">
                            <th className="font-light w-[13vw]">Mon</th>
                            <th className="font-light w-[13vw]">Tue</th>
                            <th className="font-light w-[13vw]">Wed</th>
                            <th className="font-light w-[13vw]">Thu</th>
                            <th className="font-light w-[13vw]">Fri</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="flex flex-[9] justify-center " id="victim">
            <div id="fake-buttons" className="h-16 w-16"></div>
                <div className="overflow-auto no-scrollbar" style={{maxHeight:`${hw}`}}>
                    <table className="border-separate">
                        <tbody>
                            {tableData.map((rowVal, rowId)=>(
                                <tr key={rowId} className="text-[1.5vw] font-light">
                                    {Object.values(rowVal).map((cellValue, colIndex) => (
                                        <td key={colIndex} className={`h-[13vw] w-[13vw] text-center ${tableData[rowId][colIndex]==null?'':'hover:bg-[#292b2e] bg-[#202224]'} border border-black`}>
                                            <div>{colIndex}
                                            {rowId}
                                            {tableData[rowId][colIndex]}</div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <Link href={"/dashboard/edit"} className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                        <EditSvg/>
                    </Link>
                    <button className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                        <Popup compToPass={<TrashSvg/>} setDesCheck={setDelCheck} message={{message:"Are you sure you want to delete the timetable?", opt:["Cancel", "Delete"]}}/>
                    </button>
                </div>
            </div>
        </div>
    );
}