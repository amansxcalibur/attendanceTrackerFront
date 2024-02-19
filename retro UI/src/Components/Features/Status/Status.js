import Checkbox from './Checkbox';
import { useState } from 'react';

export default function Status(){
    const data={"p0":{subject:"math",status:['grey','blue','blue'],url:"url1"},
                'p1':{subject:'physics',status:['grey','blue','blue'],url:"url1"},
                'p2':{subject:'chemistry',status:['grey','blue','blue'],url:"url1"},
                'p3':{subject:'english',status:['grey','blue','blue'],url:"url1"},
            }
    var [statState, setStatState]=useState(data)
    return(
        <table style={{padding:"10px"}}>
            <thead>
                <tr>
                    <th>Subs</th>
                    <th>Value</th>
                    <th>Help</th>
                </tr>
                <td colSpan="3" style={{backgroundColor:"black",}}></td>
            </thead>
            <tbody>
                {Object.keys(statState).map((key, index) => (
                    <>
                    <tr style={{backgroundColor:"blue", }} key={index}>
                        <td>{key}</td>
                        <td style={{textAlign:"center"}}>{statState[key].subject}</td>
                        <td>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <button style={{backgroundColor:statState[key].status[0], border:"none", borderRadius:"5px"}} onClick={()=>setStatState({...statState,[key]:{...statState[key], status:['grey','blue','blue']}})}>Present</button>
                                <button style={{backgroundColor:statState[key].status[1], border:"none", borderRadius:"5px"}} onClick={()=>setStatState({...statState,[key]:{...statState[key], status:['blue','grey','blue']}})}>Absent</button>
                                <button style={{backgroundColor:statState[key].status[2], border:"none", borderRadius:"5px"}} onClick={()=>setStatState({...statState,[key]:{...statState[key], status:['blue','blue','grey']}})}>Canceled</button>
                            </div>
                        </td>
                    </tr>
                    </>
                ))}
            </tbody>
        </table>
    )
}
