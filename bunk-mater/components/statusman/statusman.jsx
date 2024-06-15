'use client'

import { API_BASE_URL, ACCESS_TOKEN_NAME } from "@/app/_utils/apiConstants"
import { useState } from "react"
import { getCurrentDate } from "@/app/_utils/currDate";
import dayjs from "dayjs";
import BasicDatePicker from "./rewind_time";
import Status from "./status";

export default function Statusman(){
    const [dateCurr, setDateCurr]=useState(dayjs);
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

    return(
        <div className="h-full flex flex-col p-2">
            <div className="flex">
                <div className="flex-1"><span className="text-[4vw] font-light">Today</span></div>
                <div className="flex-1">
                    <BasicDatePicker dateCurr={dateCurr} setDateCurr={setDateCurr}/>
                </div>
            </div>
            <div className="flex flex-1">
            {dateQuer===null || dateQuer==[]?<></>:
            // dateQuer[0].status===null?<></>:
                <Status dateQuer={dateQuer} setDateQuer={setDateQuer} dateCurr={dateCurr} setDateCurr={setDateCurr} rendCont={rendCont} setRendCont={setRendCont}/>
            }
            </div>
        </div>
    )
}