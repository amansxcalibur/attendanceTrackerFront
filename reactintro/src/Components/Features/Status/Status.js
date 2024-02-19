import Checkbox from './Checkbox';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ButtonField from './RewindTime.js'

export default function Status(){
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
        "name": "USn't history",
        "status": "present",
        "session_url": "http://127.0.0.1:8000/session/63174"
    },
    {
        "name": "UShis tory",
        "status": "present",
        "session_url": "http://127.0.0.1:8000/session/63174"
    },
    {
        "name": "UShertory",
        "status": "present",
        "session_url": "http://127.0.0.1:8000/session/63174"
    },
    {
        "name": "history",
        "status": "present",
        "session_url": "http://127.0.0.1:8000/session/63174"
    }
]
    // const data={"p0":{subject:"math",status:['grey','blue','blue'],url:"url1"},
    //             'p1':{subject:'physics',status:['grey','blue','blue'],url:"url1"},
    //             'p2':{subject:'chemistry',status:['grey','blue','blue'],url:"url1"},
    //             'p3':{subject:'english',status:['grey','blue','blue'],url:"url1"},
    //         }
    var [statState, setStatState]=useState(data)
    return(
        <>
        <div style={{display:"flex"}}>
            <h2 style={{paddingLeft:"10px", flex:"1"}}>Today's Courses</h2>
            <div style={{display:"flex", flex:"", alignItems:"center", justifyContent:"center", backgroundColor:"black"}}>
                <ButtonField/>
            </div>
            </div>
        <table style={{padding:"10px", width:"100%", borderCollapse:"separate", borderSpacing:"0px 4px", }}>
            <thead>
                <tr>
                    <th>Sub</th>
                    <th>Value</th>
                    <th>Helpme</th>
                </tr>
                <td colSpan="3" style={{backgroundColor:"black",}}></td>
            </thead>
            <tbody>
                {Object.keys(statState).map((key, index) => (
                    <>
                    <tr style={{backgroundColor:"blue", }} key={index}>
                        <td style={{textAlign:"center"}}>P{key}</td>
                        <td style={{}}>{statState[key].name}</td>
                        <td>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <button style={{backgroundColor:statState[key].status==='present'?'grey':'transparent', border:"none", borderRadius:"20px", padding:"4px"}} onClick={()=>setStatState({...statState,[key]:{...statState[key], status:'present'}})}>Present</button>
                                <button style={{backgroundColor:statState[key].status==='absent'?'grey':'transparent', border:"none", borderRadius:"20px", padding:"4px"}} onClick={()=>setStatState({...statState,[key]:{...statState[key], status:'absent'}})}>Absent</button>
                                <button style={{backgroundColor:statState[key].status==='cancelled'?'grey':'transparent', border:"none", borderRadius:"20px", padding:"4px"}} onClick={()=>setStatState({...statState,[key]:{...statState[key], status:'cancelled'}})}>Canceled</button>
                            </div>
                        </td>
                    </tr>
                    </>
                ))}
            </tbody>
        </table>
    </>
    )
}
