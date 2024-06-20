'use client'
import { useState, useEffect } from "react";

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
            "biology",
            "computer science"
        ],
        [
            "geometry",
            "English",
            "world history",
            "physics",
            "art"
        ],
        [
            "calculus",
            "literature",
            "US history",
            "chemistry",
            "physics"
        ]
    ];
    const [hw,setHw]=useState("50vh");
    useEffect(()=>{
        const elem=document.getElementById('victim');
        const rect=elem.getBoundingClientRect();
        console.log(rect['height']);
        const thirdparty=(Math.round(rect["height"])).toString()+"px"
        setHw(thirdparty);
        console.log((thirdparty));
        console.log("in useEffect")
        console.log(hw)
    },[])

    return(
        <div className="flex flex-col h-full">
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
        <div className="flex flex-1 justify-center overflow-auto" style={{maxHeight:`${hw}`}} id="victim">
            <table className="border-separate">
                <tbody>
                    {tableData.map((rowVal, rowId)=>(
                        <tr key={rowId} className="text-[1.5vw] font-light">
                            {Object.values(rowVal).map((cellValue, colIndex) => (
                                <td key={colIndex} className="h-[13vw] w-[13vw] text-center bg-[#202224] border border-black">
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
        </div>
    );
}