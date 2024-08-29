'use client'

import { useState, useEffect } from "react";
import XSvg from '../../components/svg/x.jsx';
import CheckSvg from '../../components/svg/check.jsx';
import PlusSvg from '../../components/svg/plus.jsx';
import TrashSvg from '../../components/svg/trash.jsx';
import Link from "next/link.js";
import Drop from '../../components/drop_select/drop_select.jsx'
import Popup from "@/components/popup/popup.jsx";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import DateRangePicker from "@/components/date_range_picker/date_range_picker_legit.jsx";
import MinSubAttendance from "@/components/min_sub_attendance/min_sub_attendance.js";
import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../_utils/apiConstants.js";
import axios from "axios";

export default function Add(){
    const [tableData, setTableData]=useState([
        [
            null,
            null,
            null,
            null,
            null
        ]
    ]);

    const router=useRouter()
    const [name, setName] = useState("")
    const [optionList, setOptionList] = useState([]);
    const [interval, setInterval] = useState({start_date: '', end_date: ''})
    const [range, setRange] = useState(0);
    const [criteria, setCriteria]=useState({value:75});

    useEffect(()=>{
        if (interval.start_date != '' && interval.end_date != ''){
            const start_date = new Date(interval.start_date);
            const end_date = new Date(interval.end_date);
            const time_range = Math.floor((end_date.getTime() - start_date.getTime()) / (1000 * 60 * 60 * 24));
            setRange(time_range)
        }
    },[interval])

    const handleUpdate=({data,row,col})=>{
        var thirdparty=tableData;
        thirdparty[row][col]=data.label;
        setTableData(thirdparty);
    }

    const handleSubmit=()=>{
        const payload={
            "name": name,
            "start_date": interval.start_date,
            "end_date": interval.end_date,
            "threshold": criteria.value,
            "courses_data": removeNull(tableData)
        }
        console.log(payload)
        const header={
            'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
        }
        axios.post(API_BASE_URL + '/collection', payload, {headers: header})
            .then(function (response) {
                if(response.status === 201){
                    router.push('/dashboard/home')
                }
                // else if(response.code === 204){
                //     props.showError("Username and password do not match");
                // }
                else{
                    alert("Some error has occurred");
                    console.log(response.data)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleName=(e)=>{
        setName(e.target.value);
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
        <form className="flex flex-1 flex-col overflow-auto no-scrollbar">
            <div className="absolute z-[9] h-[10vh] w-screen bottom-0 bg-gradient-to-t from-black">____</div>
            <div className="flex-1 pt-[3vw]"></div>
            <div className="flex sm:justify-center">
                <div className="w-[62vw] mb-[1vw]">
                    <p className="text-[3vw] max-sm:text-3xl max-sm:ml-[4vw] max-sm:mt-6 max-sm:mb-2">Get started...</p>
                </div>
            </div>
            <div className="flex sm:justify-center sm:items-center flex-col text-[1.1vw] my-[2vw] max-sm:text-lg max-[400px]:text-base">
                <div className="flex justify-center max-sm:items-center mb-[2vw]">
                    <div className="max-sm:flex-1 flex justify-center">
                        <input type="text"
                            id="table_name"
                            onChange={handleName}
                            value={name}
                            placeholder="Timetable Name"
                            className=" min-w-[15vw] max-sm:w-[45vw] max-sm:min-h-14 pl-4 bg-black border-[#3a3a3a] hover:border-white border-[1px] mx-[1vw]" 
                            required
                        />
                    </div>
                    <p className="max-sm:flex-1">Timetable Name<br/><span className="text-[#727272]">A name for your wonderful timetable.</span></p>
                </div>
                <div className="flex justify-center sm:items-center max-sm:flex-col">
                    <div className="flex items-center max-sm:flex-row-reverse max-sm:my-5">
                        <div className="flex flex-col max-sm:flex-1 justify-center items-center mx-[2vw]">
                            <DateRangePicker interval={interval} setInterval={setInterval}/>
                        </div>
                        <p className="sm:max-w-[20vw] max-sm:flex-1 max-sm:text-right">Timetable duration.<br/><span className="text-[#727272]">Years? Months? Weeks? Days?</span></p>
                    </div>
                    <MinSubAttendance criteria={criteria} setCriteria={setCriteria}/>
                </div>
                <div className="text-[3vw] mt-[2vw] mb-[6vw] max-sm:flex max-sm:justify-center max-sm:text-[40px] max-sm:py-7">{range} days</div>
            </div>
            <div className="flex justify-center sticky top-0">
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
            <div className="flex items-center flex-[9] justify-center " 
            //id="victim"
            >
                {/* <div className="h-16 w-16"></div> */}
                <div 
                //className="overflow-auto no-scrollbar"
                // style={{maxHeight:`${hw}`}}
                >
                    <table className="border-separate table-fixed w-[70.4vw] max-sm:w-full">
                        <tbody>
                            {tableData.map((rowVal, rowId)=>(
                                <Fragment key={rowId}>
                                    <tr className="w-[4.7vw] sm:h-[19.5vw] max-sm:w-full max-sm:h-10 sm:hidden">
                                        <td className="rounded-full sm:h-16 sm:w-16 flex flex-1 justify-center h-10 items-end overflow-hidden">
                                            <button type="button" onClick={()=>{addRow(rowId)}}><PlusSvg/></button>
                                        </td>
                                        <td className="w-[19.5vw]"></td>
                                        <td className="w-[19.5vw]"></td>
                                        <td className="w-[19.5vw]"></td>
                                        <td className="rounded-full sm:h-16 sm:w-16 flex flex-1 justify-center h-10 items-end overflow-hidden">
                                            <button type="button" onClick={()=>{delRow(rowId)}}><TrashSvg/></button>
                                        </td>
                                    </tr>
                                    <tr key={rowId} className="text-[1.5vw] font-light max-sm:text-lg">
                                        <td className="w-[4.7vw] flex flex-col justify-center items-end max-sm:hidden">
                                            <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                                                <button type="button" onClick={()=>{addRow(rowId)}}><PlusSvg/></button>
                                            </div>
                                            <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                                                <button type="button" onClick={()=>{delRow(rowId)}}><TrashSvg/></button>
                                            </div>
                                        </td>
                                        {Object.values(rowVal).map((cellValue, colIndex) => (
                                            <td key={colIndex} className={`h-[13vw] w-[13vw] max-sm:h-[19.5vw] max-sm:w-[19.5vw] text-center ${tableData[rowId][colIndex]==null?'hover:bg-[#202224] bg-[#0d0e0f]':'hover:bg-[#292b2e] bg-[#202224]'} border border-black`}>
                                                <div>
                                                    <Drop tableData={tableData} handleUpdate={handleUpdate} row={rowId} col={colIndex} optionList={optionList} setOptionList={setOptionList}/>
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
                        </tbody>
                    </table>
                </div>
                <div className="w-32"></div>
            </div>
            <div className="flex sm:justify-center justify-end">
                <div className="sm:w-[62vw] flex justify-end max-sm:mr-6">
                    <button 
                        type="button"
                        className="bg-black max-sm:text-lg text-[1.5vw] font-light rounded-lg hover:text-black hover:bg-white transition duration-1000 border-[1px] border-b-blueviolet border-r-blueviolet border-t-white border-l-white p-4 text-blueviolet hover:border-b-[#ee67ee] hover:border-r-[#ee67ee] hover:border-t-blueviolet hover:border-l-blueviolet hover:shadow-[5px_5px_rgba(240,46,170,0.4),10px_10px_rgba(240,46,170,0.3),15px_15px_rgba(240,46,170,0.2)]"
                        onClick={handleSubmit}
                        >
                        Save Timetable
                    </button>
                </div>
            </div>
            <div className="min-h-[20vh]"></div>
        </form>
    );
}

function removeNull(tableData){
    var nullLessTableData = tableData
    for (let i=0; i<tableData.length; i++){
        for (let j=0; j<5; j++){
            if (nullLessTableData[i][j]==null){
                nullLessTableData[i][j]=""
            }
        }
    }
    return nullLessTableData
}