'use client'

import { API_BASE_URL, ACCESS_TOKEN_NAME } from "@/app/_utils/apiConstants"
import { useState, useEffect } from "react"
import { getCurrentDate } from "@/app/_utils/currDate";
import dayjs from "dayjs";
// import BasicDatePicker from "./rewind_time";
import BasicDatePicker from "./rewind";
import Status from "./status";
import HeightLimit from "../height_limit_scrollable/heightLimit";

export default function Statusman(){
    const [dateCurr, setDateCurr]=useState(dayjs());
    const [dateQuer, setDateQuer]=useState([
        {
            "name": "history",
            "status": "present",
            "session_url": "http://127.0.0.1:8000/session/63171"
        },
        {
            "name": "geography",
            "status": "present",
            "session_url": "http://127.0.0.1:8000/session/63172"
        },
        {
            "name": "world history",
            "status": "present",
            "session_url": "http://127.0.0.1:8000/session/63173"
        },
        {
            "name": "US history",
            "status": "present",
            "session_url": "http://127.0.0.1:8000/session/63174"
        },
        
    ]);

    // const header={
    //     'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
    //   }
    // useEffect(()=>{
    //     axios.get(API_BASE_URL + '/datequery?date='+dateCurr.format("YYYY-MM-DD"), {headers:header})
    //     .then(function (response) {
    //         if(response.status === 200){
    //             setDateQuer(response.data)
    //         }
    //         else{
    //             console.log(response.data)
    //         }
    //     })
    //     .catch(function (error) {
    //         console.log(JSON.stringify(error));
    //     });
    //     console.log("after useEffect",dateQuer)
    // },[dateCurr])
    const [rendCont, setRendCont]=useState(null);
    const [hw,setHw]=useState('50vh');
    const smRatio=258.1;
    const lgRatio=0.13;
    useEffect(()=>{
        HeightLimit({setHw, smRatio, lgRatio})
        return()=>{
            window.removeEventListener("resize",{});
        }
    },[])

    function renderSwitch(param) {
        switch(param) {
          case 1:
            return 'st';
          case 2:
            return 'nd';
          case 3:
            return 'rd';
          default:
            return 'th';
        }
      }
      
    let month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][dateCurr.month()]
    
    useEffect(()=>{
        month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][dateCurr.month()]
    },[dateCurr])

    function handleCond(){
        if (dateCurr.format("DD-MM-YYYY")!==dayjs().format("DD-MM-YYYY")){
            return  <>
                      {dateCurr.date()}
                      <span className="font-extralight text-[rgba(125,125,125,1)]">{renderSwitch(dateCurr.date()%10)} {month}</span>
                    </>
        }else{
            return "Today"
        }
    }
    return(
        <div className="h-full flex flex-col">
            <div className="flex justify-center items-center max-sm:mb-3">
                <div className="flex-1">
                    <span className="text-[4vw] font-light max-sm:text-6xl">
                        {handleCond()}
                    </span>
                </div>
                <div className="flex justify-end items-center">
                    <BasicDatePicker dateCurr={dateCurr} setDateCurr={setDateCurr}/>
                </div>
            </div>
            <div className="flex flex-1 pt-[0.5px]" id='victim'>
            {dateQuer===null || dateQuer==[]?<></>:
                <Status dateQuer={dateQuer} setDateQuer={setDateQuer} dateCurr={dateCurr} setDateCurr={setDateCurr} rendCont={rendCont} setRendCont={setRendCont} hw={hw}/>
            }
            </div>
        </div>
    )
}