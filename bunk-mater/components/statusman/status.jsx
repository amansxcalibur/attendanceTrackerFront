'use client'

import { useEffect, useState, useRef } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '@/app/_utils/apiConstants.js';
import BasicDatePicker from './rewind_time';

export default function Status({dateQuer, setDateQuer, dateCurr, setDateCurr, rendCont, setRendCont, hw}){
    // console.log("in Status here is dateQuery",dateQuer, JSON.stringify(dateQuer)!=JSON.stringify([]));
    // console.log(dateQuer, 'hi from statusman', rendCont);
    const firstrend=useRef(false);
    const thirdparty=useRef([])
    const data=[
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
    {
        "name": "Math",
        "status": "present",
        "session_url": "http://127.0.0.1:8000/session/63174"
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
    {
        "name": "Math",
        "status": "present",
        "session_url": "http://127.0.0.1:8000/session/63174"
    },
]
    useEffect(()=>{
        setDateQuer(data)
    },[])

    const color={
        present:["bg-black","text-white","bg-[#5aad70]"],
        bunked:["bg-black","text-white","bg-[#cc4e4e]"],
        cancelled:["bg-[#F1F1F1]","text-[#BFBFBF]"]
    }
    
    // useEffect(()=>{
    //     if(firstrend.current && thirdparty.current!=[] && JSON.stringify(dateQuer)!=JSON.stringify([])) {
    //         console.log("not firstrend, here is thirdparty.current", thirdparty.current)
    //         update(rendCont, dateCurr, dateQuer, setRendCont, thirdparty)
    //     }
    //     else{
    //         console.log("first rend") 
    //         }
    // },[dateQuer])

    const handleStatusChange=(key)=>{
        if(dateQuer[key].status[0]=='p')
            setDateQuer({...dateQuer,[key]:{...dateQuer[key], status:'bunked'}})
        else if(dateQuer[key].status[0]=='b')
            setDateQuer({...dateQuer,[key]:{...dateQuer[key], status:'cancelled'}})
        else
            setDateQuer({...dateQuer,[key]:{...dateQuer[key], status:'present'}})
    }
    // const [sizeHelp, setSizeHelp]=useState("h-70vh");
    // useEffect(()=>{
    //     const handleResize=()=>{
    //         const elem=document.getElementById('victim');
    //         const rect=elem.getBoundingClientRect();
    //         console.log(rect['height']);
    //         const thirdparty="h-["+(rect["height"]-4).toString()+"px]"
    //         setSizeHelp(thirdparty);
    //         console.log(sizeHelp)
    //     }
    //     console.log("in useEffect")
    //     window.addEventListener('resize', handleResize);
    //     return()=>{
    //         console.log("end")
    //         window.removeEventListener('resize', handleResize);
    //     }
    // },[]);

   

    return(
        <div className={`flex-1 flex flex-col overflow-hidden`} style={{height:hw}} id='victim'>
            <div className='flex-1 overflow-auto no-scrollbar'>
                {Object.keys(dateQuer).map((key, index) => (
                    <div className='h-[9vw] flex mb-1' key={index}> 
                        <div className={`flex-1 flex items-center ${color[dateQuer[key].status][0]} ${color[dateQuer[key].status][1]} rounded-l-lg pl-[3vw]`}>
                            {dateQuer[key].name}
                        </div>
                        <div className={`h-full flex ${color[dateQuer[key].status][0]} ${color[dateQuer[key].status][1]} rounded-r-lg`} >
                            <div className='m-[1px]'>
                                <button className={`h-full w-[12vw] ${color[dateQuer[key].status][2]} rounded-lg`} onClick={()=>{handleStatusChange(key)}}>
                                    <span className='uppercase text-[5vw] p-0 m-0'>{dateQuer[key].status[0]}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </div>
    )
}

// function update(rendCont, dateCurr, dateQuer, setRendCont, thirdparty){
//     console.log("this is update", thirdparty.current)
//     console.log(dateQuer[thirdparty.current[1]].session_url, thirdparty[1])
//     const header={
//         'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
//     }
//     axios.patch(dateQuer[thirdparty.current[1]].session_url, {
//         "status": thirdparty.current[0]
//     },{headers:header})
//     .then((response)=>{
//         console.log(response.status, response.data)
        
//     console.log("gonna set rend again")
//     if(rendCont==[]){setRendCont(['hello'])}
//     else{
//     setRendCont([]);}
//     })
//     .catch((error)=>{
//         console.log("caught an error in post\n",error)
//     })
//     console.log("end of update")
// }
// update(rendCont=rendCont, dateCurr=dateCurr)