'use client'

import { useState, useEffect } from "react";
import XSvg from '../../../components/svg/x.jsx';
import CheckSvg from '../../../components/svg/check.jsx';
import PlusSvg from '../../../components/svg/plus.jsx';
import TrashSvg from '../../../components/svg/trash.jsx';
import Drop from '../../../components/drop_select/drop_select.jsx'
import Popup from "@/components/popup/popup.jsx";
import { useRouter } from "next/navigation";
import HeightLimit from "@/components/height_limit_scrollable/heightLimit.js";
import { Fragment } from "react";
import { ACCESS_TIMETABLE_NAME, API_BASE_URL, ACCESS_TOKEN_NAME } from "@/app/_utils/apiConstants.js";
import axios from "axios";

export default function EditTable(){

   
    const [tableData, setTableData] = useState([[]])
    const [optionList, setOptionList] = useState([{}])
    const router=useRouter()
    const [saveCheck, setSaveCheck]=useState(null);
    const [hw,setHw]=useState("50vh");
    const smRatio=212;
    const lgRatio=0.1415;

    useEffect(()=>{
        HeightLimit({setHw, smRatio, lgRatio})
        if (sessionStorage.getItem(ACCESS_TIMETABLE_NAME)){
            const timetable=JSON.parse(sessionStorage.getItem(ACCESS_TIMETABLE_NAME)).courses_data
            setTableData(timetable)
            setOptionList(getOptions({timetable}))
        }
        return()=>{
            window.removeEventListener("resize",{});
        }
    },[])

    useEffect(()=>{
        if (saveCheck=="Save"){
            alert("saved");
            console.log(tableData, 'here is the updated one')
            const header={
                'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
            }
            axios.patch(API_BASE_URL+'/collection',{"courses_data":tableData},{headers:header})
            .then((response)=>{
                console.log(response.status, response.data)
                if (response.status==200){
                    sessionStorage.removeItem(ACCESS_TIMETABLE_NAME);
                    console.log('removed from local')
                }
                router.push('/dashboard/table')
            })
            .catch((error)=>{
                console.log("caught an error in post\n",error)
            })
        }else if(saveCheck=="Discard"){
            alert("discarded");
            router.push('/dashboard/table')
        }
    },[saveCheck])

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
                    <Popup compToPass={<div className="bg-[#1c1c1c] h-14 w-24 rounded-full flex justify-center items-center">Save</div>} setDecisionCheck={setSaveCheck} message={{message:"Are you sure you want to save the changes?", opt:["Cancel", "Save"]}}/>
                </div>
                <div className="rounded-full flex-1 flex justify-start items-center overflow-hidden ml-1">
                    <Popup compToPass={<div className="bg-[#2b1f1f] h-14 w-24 rounded-full flex justify-center items-center">Cancel</div>} setDecisionCheck={setSaveCheck} message={{message:"Are you sure you want to discard the changes?", opt:["Cancel", "Discard"]}}/>
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
                                <Fragment key={rowId}>
                                    <tr className="w-[4.7vw] sm:h-[19.5vw] max-sm:w-full max-sm:h-10 sm:hidden">
                                        <td className="rounded-full sm:h-16 sm:w-16 flex flex-1 justify-center h-10 items-end overflow-hidden">
                                            <button onClick={()=>{addRow(rowId)}}><PlusSvg/></button>
                                        </td>
                                        <td className="w-[19.5vw]"></td>
                                        <td className="w-[19.5vw]"></td>
                                        <td className="w-[19.5vw]"></td>
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
                                                    <Drop tableData={tableData} handleUpdate={handleUpdate} row={rowId} col={colIndex} statusman={false} optionList={optionList} setOptionList={setOptionList}/>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                </Fragment>
                            ))}
                            <tr className="text-[1.5vw] font-light">
                                <td className="max-sm:hidden"></td>
                                <td className='h-[13vw] w-[13vw] max-sm:h-[19.5vw] max-sm:w-[19.5vw] text-center border border-black flex'>
                                    <button className="hover:bg-[#202224] bg-[#0d0e0f] flex-1 max-sm:text-3xl max-sm:bg-[#202224]" onClick={()=>{addRow(tableData.length)}}>+</button>
                                </td>
                            </tr>
                            <tr className="h-[50vh]"></tr>
                        </tbody>
                    </table>
                </div>
                <div className="max-sm:hidden">
                    <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                        <Popup compToPass={<CheckSvg/>} setDecisionCheck={setSaveCheck} message={{message:"Are you sure you want to save the changes?", opt:["Cancel", "Save"]}}/>
                    </div>
                    <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                        <Popup compToPass={<XSvg/>} setDecisionCheck={setSaveCheck} message={{message:"Are you sure you want to discard the changes?", opt:["Cancel", "Discard"]}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getOptions({timetable}){
    console.log(timetable, 'here you go')
    var thirdparty=[];
    var options=[]
    for (let i=0; i<timetable.length; i++){
      for (let j=0; j<timetable[i].length; j++){
        if (!thirdparty.includes(timetable[i][j])){
          thirdparty.push(timetable[i][j])
        }
      }
    }
    for (let i=0; i<thirdparty.length; i++){
        if(thirdparty[i] != ""){
            options.push({label: thirdparty[i], value: thirdparty[i]});
        }
    }
    console.log(options, thirdparty)
    return options;
}