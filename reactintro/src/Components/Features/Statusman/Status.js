import { useEffect, useState, useRef } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ButtonField from './RewindTime.js'
import axios from 'axios';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../../constants/apiConstants.js';
import BasicDatePicker from './RewindTime.js';

export default function Status({dateQuer, setDateQuer, dateCurr, setDateCurr, rendCont, setRendCont}){
    console.log("in Status",dateQuer);
    // console.log(dateQuer, 'hi from statusman', rendCont);
    const firstrend=useRef(false);
//     const data=[
//     {
//         "name": "history",
//         "status": "present",
//         "session_url": "http://127.0.0.1:8000/session/63171"
//     },
//     {
//         "name": "geography",
//         "status": "present",
//         "session_url": "http://127.0.0.1:8000/session/63172"
//     },
//     {
//         "name": "world history",
//         "status": "present",
//         "session_url": "http://127.0.0.1:8000/session/63173"
//     },
//     {
//         "name": "US history",
//         "status": "present",
//         "session_url": "http://127.0.0.1:8000/session/63174"
//     },
//     
// ]
    const color={
        present:["#DDDDDD","black","green"],
        bunked:["#DDDDDD","black","red"],
        cancelled:["#F1F1F1","#BFBFBF"]
    }
    useEffect(()=>{
        if(firstrend.current && rendCont) {
            update(rendCont, dateCurr, dateQuer, setRendCont)
        }
        else firstrend.current=true
    },[dateQuer])
    return(
        <>
        <table style={{padding:"10px", width:"100%", borderCollapse:"separate", borderSpacing:"0px 4px"}}>
            <thead>
                <tr>
                    <th>Sub</th>
                    <th>Value</th>
                    <th>Helpme</th>
                </tr>
                <tr>
                    <td colSpan="3" style={{backgroundColor:"black",}}></td>
                </tr>
            </thead>
            <tbody>
                {Object.keys(dateQuer).map((key, index) => (
                    <>
                    {/* {statState[key].status==='cancelled'?
                    <tr style={{backgroundColor:"transparent", color:"#BFBFBF"}} key={index}> 
                        <td style={{backgroundColor:'#F1F1F1', textAlign:"center", borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px"}}>P{key}</td>
                        <td style={{backgroundColor:'#F1F1F1'}}>{statState[key].name}</td>
                        <td style={{backgroundColor:"#F1F1F1", borderTopRightRadius:"20px", borderBottomRightRadius:"20px"}}>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <button style={{backgroundColor:'transparent', border:"none", borderRadius:"20px", padding:"4px"}} onClick={()=>setStatState({...statState,[key]:{...statState[key], status:'present'}})}>Present</button>
                                <button style={{backgroundColor:'transparent', border:"none", borderRadius:"20px", padding:"4px"}} onClick={()=>setStatState({...statState,[key]:{...statState[key], status:'absent'}})}>Absent</button>
                                <button style={{backgroundColor:'#DDDDDD', border:"none", borderRadius:"20px", padding:"4px"}} onClick={()=>setStatState({...statState,[key]:{...statState[key], status:'cancelled'}})}>Canceled</button>
                            </div>
                        </td>
                    </tr>
                    : */}
                    <tr style={{backgroundColor:"transparent"}} key={index}> 
                        <td style={{backgroundColor:color[dateQuer[key].status][0], color:color[dateQuer[key].status][1], textAlign:"center", borderLeft:"1px", borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px"}}>P{key}</td>
                        <td style={{backgroundColor:color[dateQuer[key].status][0], color:color[dateQuer[key].status][1],}}>{dateQuer[key].name}</td>
                        <td style={{backgroundColor:color[dateQuer[key].status][0], color:color[dateQuer[key].status][1], borderTopRightRadius:"20px", borderBottomRightRadius:"20px"}}>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <button style={{backgroundColor:dateQuer[key].status==='present'?'rgb(100,255,10)':'transparent', border:"none", borderRadius:"20px", padding:"4px"}} onClick={()=>{setRendCont(["present",key]); setDateQuer({...dateQuer,[key]:{...dateQuer[key], status:'present'}}); }}>Present</button>
                                <button style={{backgroundColor:dateQuer[key].status==='bunked'?'red':'transparent', border:"none", borderRadius:"20px", padding:"4px"}} onClick={()=>{setRendCont(["bunked",key]); setDateQuer({...dateQuer,[key]:{...dateQuer[key], status:'bunked'}});}}>Absent</button>
                                <button style={{backgroundColor:dateQuer[key].status==='cancelled'?'#DDDDDD':'transparent', border:"none", borderRadius:"20px", padding:"4px"}} onClick={()=>{setRendCont(["cancelled",key]); setDateQuer({...dateQuer,[key]:{...dateQuer[key], status:'cancelled'}});}}>Canceled</button>
                            </div>
                        </td>
                    </tr>
                    {/* } */}
                    </>
                ))}
            </tbody>
        </table>
    </>
    )
}

function update(rendCont, dateCurr, dateQuer, setRendCont){
    console.log("this is update", rendCont)
    console.log(dateQuer[rendCont[1]].session_url, rendCont[1])
    const header={
        'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
      }
    axios.patch(dateQuer[rendCont[1]].session_url, {
        "status": rendCont[0]
    },{headers:header})
    .then((response)=>{
        console.log(response.status, response.data)

    console.log("gonna set rend again")
    setRendCont([]);
    })
    .catch((error)=>{
        console.log("caught an error in post\n",error)
    })

}
// update(rendCont=rendCont, dateCurr=dateCurr)