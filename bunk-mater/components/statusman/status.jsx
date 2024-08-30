'use client'

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '@/app/_utils/apiConstants.js';
import AddNewSubs from './add_new_sub';

export default function Status({dateQuer, setDateQuer, dateCurr, setDateCurr, refreshCont, setRefreshCont, hw}){
    const firstrend=useRef(false);
    const thirdparty=useRef([]);
    const [saveCheck, setSaveCheck]=useState(null);
    const [dateQuerForDisp, setDateQuerForDisp] = useState(dateQuer);

    useEffect(()=>{
        if (JSON.stringify(dateQuerForDisp) != JSON.stringify(dateQuer)){
            setDateQuerForDisp(dateQuer);
        }
    },[dateQuer])

    const color={
        present:["bg-black","text-white","bg-[#5aad70]","text-black"],
        bunked:["bg-black","text-white","bg-[#cc4e4e]","text-black"],
        cancelled:["bg-[#272727]","text-[#9e9e9e]",'',"text-[#9e9e9e]"]
    }
    
    useEffect(()=>{
        if(firstrend.current && thirdparty.current!=[] && JSON.stringify(dateQuerForDisp)!=JSON.stringify([])) {
            //console.log("not firstrend, here is thirdparty.current", thirdparty.current)
            update(refreshCont, dateCurr, dateQuerForDisp, setRefreshCont, thirdparty)
        }
        else{
            //console.log("first rend") 
            }
    },[dateQuerForDisp])

    const handleStatusChange=(key)=>{
        if(dateQuerForDisp[key].status[0]=='p'){
            setDateQuer({...dateQuerForDisp,[key]:{...dateQuerForDisp[key], status:'bunked'}});
            thirdparty.current=["bunked",key];
            firstrend.current=true
        }
        else if(dateQuerForDisp[key].status[0]=='b'){
            setDateQuer({...dateQuerForDisp,[key]:{...dateQuerForDisp[key], status:'cancelled'}})
            thirdparty.current=["cancelled",key]; 
            firstrend.current=true
        }
        else{
            setDateQuer({...dateQuerForDisp,[key]:{...dateQuerForDisp[key], status:'present'}});
            thirdparty.current=["present",key];
            firstrend.current=true
        }
    }
   

    return(
        <div className={`flex-1 flex flex-col overflow-hidden`} style={{height:hw}}>
            <div className='flex-1 overflow-auto no-scrollbar'>
                <AddNewSubs dateCurr={dateCurr} dateQuerForDisp={dateQuerForDisp} refreshCont={refreshCont} setRefreshCont={setRefreshCont}/>
                {Object.keys(dateQuerForDisp).map((key, index) => (
                    <div className='h-[8.9vw] flex mt-1 max-sm:h-[15vh]' key={index}> 
                        <div className={`flex-1 flex text-[1.5vw] items-center ${color[dateQuerForDisp[key].status][0]} ${color[dateQuerForDisp[key].status][1]} rounded-l-lg pl-[3vw] max-sm:text-3xl max-sm:font-light`}>
                            {dateQuerForDisp[key].name}
                        </div>
                        <div className={`h-full flex ${color[dateQuerForDisp[key].status][0]} ${color[dateQuerForDisp[key].status][1]} rounded-r-lg`} >
                            <div className='m-[1px]'>
                                <button 
                                    className={`h-full w-[12vw] flex items-center justify-center overflow-hidden ${color[dateQuerForDisp[key].status][2]} rounded-lg max-sm:w-[15vh]`} 
                                    onClick={()=>{handleStatusChange(key)}}
                                    title={dateQuerForDisp[key].status}>
                                    <p className={`uppercase text-[9vw] font-light leading-none ${color[dateQuerForDisp[key].status][3]} max-sm:text-[17vh]`}>{dateQuerForDisp[key].status[0]}</p>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </div>
    )
}

function update(refreshCont, dateCurr, dateQuerForDisp, setRefreshCont, thirdparty){
    //console.log("this is update", thirdparty.current)
    //console.log(dateQuerForDisp[thirdparty.current[1]].session_url, thirdparty.current[1])
    const header={
        'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
    }
    axios.patch(dateQuerForDisp[thirdparty.current[1]].session_url, {
        "status": thirdparty.current[0]
    },{headers:header})
    .then((response)=>{
        //console.log(response.status, response.data)
        if(refreshCont==[]){
            setRefreshCont(['hello'])
        }else{
            setRefreshCont([]);
        }
        //console.log("set refreshCont")
    
    })
    .catch((error)=>{
        //console.log("caught an error in post\n",error)
    })
}