'use client'

import { useState, useEffect } from "react";
import XSvg from '../../../components/svg/x.jsx'
import CheckSvg from '../../../components/svg/check.jsx'
import Link from "next/link.js";
import Drop from '../../../components/drop_select/drop_select.jsx'
import Popup from "@/components/popup/popup.jsx";
import { useRouter } from "next/navigation";

export default function EditTable(){
    const [tableData, setTableData]=useState([
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
    ]);

    const router=useRouter()
    const [saveCheck, setSaveCheck]=useState(null);
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
        if (saveCheck=="Save"){
            alert("saved");
            router.push('/dashboard/table')
        }else if(saveCheck=="Discard"){
            alert("discarded");
            router.push('/dashboard/table')
        }
    })

    const handleUpdate=({data,row,col})=>{
        var thirdparty=tableData;
        thirdparty[row][col]=data.label;
        setTableData(thirdparty);
    }

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
            <div className="h-16 w-16"></div>
                <div className="overflow-auto no-scrollbar" style={{maxHeight:`${hw}`}}>
                    <table className="border-separate">
                        <tbody>
                            {tableData.map((rowVal, rowId)=>(
                                <tr key={rowId} className="text-[1.5vw] font-light">
                                    {Object.values(rowVal).map((cellValue, colIndex) => (
                                        <td key={colIndex} className={`h-[13vw] w-[13vw] text-center ${tableData[rowId][colIndex]==null?'hover:bg-[#202224] bg-[#0d0e0f]':'hover:bg-[#292b2e] bg-[#202224]'} border border-black`}>
                                            <div>
                                                <Drop tableData={tableData} handleUpdate={handleUpdate} row={rowId} col={colIndex}/>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                        <Popup compToPass={<CheckSvg/>} setDesCheck={setSaveCheck} message={{message:"Are you sure you want to save the changes?", opt:["Cancel", "Save"]}}/>
                    </div>
                    <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                        <Popup compToPass={<XSvg/>} setDesCheck={setSaveCheck} message={{message:"Are you sure you want to discard the changes?", opt:["Cancel", "Discard"]}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}