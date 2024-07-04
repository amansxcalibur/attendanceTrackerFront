'use client'

import { useState, useEffect } from "react";
import XSvg from '../../../components/svg/x.jsx';
import CheckSvg from '../../../components/svg/check.jsx';
import PlusSvg from '../../../components/svg/plus.jsx';
import TrashSvg from '../../../components/svg/trash.jsx';
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
    const [hw,setHw]=useState((parseInt(window.innerHeight-0.14*window.innerWidth-2)).toString()+"px");

    useEffect(()=>{
        // const elem=document.getElementById('victim');
        // const rect=elem.getBoundingClientRect();
        // const thirdparty=(Math.floor(rect["height"])).toString()+"px";
        // setHw(thirdparty);

        window.addEventListener("resize",()=>{
            setTimeout(()=>{
                // console.log(window.innerHeight-0.1*window.innerWidth, "hw:",hw);
                setHw((parseInt(window.innerHeight-0.14*window.innerWidth-2)).toString()+"px");
            },10)
        });
        return()=>{
            window.removeEventListener("resize",{});
        }
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

    const addRow=(index)=>{
        const thirdparty=tableData;
        setTableData(thirdparty.toSpliced(index,0,[null, null, null, null, null]));
    }

    const delRow=(index)=>{
        const thirdparty=tableData;
        setTableData(thirdparty.toSpliced(index,1))
    }

    return(
        <div className="flex flex-col h-full pt-[3vw]">
            {/* <div className="flex-1"></div> */}
            <div className="sm:hidden flex mb-5 mt-2">
                <div className="rounded-full flex-1 flex justify-end items-center overflow-hidden mr-1">
                    <Popup compToPass={<div className="bg-[#1c1c1c] h-14 w-24 rounded-full flex justify-center items-center">Save</div>} setDesCheck={setSaveCheck} message={{message:"Are you sure you want to save the changes?", opt:["Cancel", "Save"]}}/>
                </div>
                <div className="rounded-full flex-1 flex justify-start items-center overflow-hidden ml-1">
                    <Popup compToPass={<div className="bg-[#2b1f1f] h-14 w-24 rounded-full flex justify-center items-center">Cancel</div>} setDesCheck={setSaveCheck} message={{message:"Are you sure you want to discard the changes?", opt:["Cancel", "Discard"]}}/>
                </div>
            </div>
            <div className="flex justify-center">
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
            <div className="flex flex-[9] justify-center " id="victim">
                {/* <div className="h-16 w-16"></div> */}
                <div className="overflow-auto no-scrollbar" style={{maxHeight:`${hw}`}}>
                    <table className="border-separate table-fixed w-[70.4vw] max-sm:w-full">
                        <tbody>
                            {tableData.map((rowVal, rowId)=>(
                                <>
                                    <tr className="w-[4.7vw] sm:h-[19.5vw] max-sm:w-full max-sm:h-10 sm:hidden">
                                        <td className="rounded-full sm:h-16 sm:w-16 flex flex-1 justify-center h-10 items-end overflow-hidden">
                                            <button onClick={()=>{addRow(rowId)}}><PlusSvg/></button>
                                        </td>
                                        <td className="w-[19,5vw]"></td>
                                        <td className="w-[19,5vw]"></td>
                                        <td className="w-[19,5vw]"></td>
                                        <td className="rounded-full sm:h-16 sm:w-16 flex flex-1 justify-center h-10 items-end overflow-hidden">
                                            <button onClick={()=>{delRow(rowId)}}><TrashSvg/></button>
                                        </td>
                                    </tr>
                                    <tr key={rowId} className="text-[1.5vw] font-light max-sm:text-lg">
                                        <td className="w-[4.7vw] flex flex-col justify-center items-end max-sm:hidden">
                                            <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                                                <button onClick={()=>{addRow(rowId)}}><PlusSvg/></button>
                                            </div>
                                            <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                                                <button onClick={()=>{delRow(rowId)}}><TrashSvg/></button>
                                            </div>
                                        </td>
                                        {Object.values(rowVal).map((cellValue, colIndex) => (
                                            <td key={colIndex} className={`h-[13vw] w-[13vw] max-sm:h-[19.5vw] max-sm:w-[19.5vw] text-center ${tableData[rowId][colIndex]==null?'hover:bg-[#202224] bg-[#0d0e0f]':'hover:bg-[#292b2e] bg-[#202224]'} border border-black`}>
                                                <div>
                                                    <Drop tableData={tableData} handleUpdate={handleUpdate} row={rowId} col={colIndex}/>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                </>
                            ))}
                            <tr className="text-[1.5vw] font-light">
                                <td className="max-sm:hidden"></td>
                                <td className='h-[13vw] w-[13vw] max-sm:h-[19.5vw] max-sm:w-[19.5vw] text-center border border-black flex'>
                                    <button className="hover:bg-[#202224] bg-[#0d0e0f] flex-1 max-sm:text-3xl" onClick={()=>{addRow(tableData.length)}}>+</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="max-sm:hidden">
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