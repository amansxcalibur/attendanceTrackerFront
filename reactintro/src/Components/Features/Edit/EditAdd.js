import Table from './Edit.js'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';

export default function EditAdd(){
    const location = useLocation();
    console.log(location.state,"yhis is in edutadd() ")
    const [tableData, setTableData] =useState(location.state);
    console.log(tableData, 'this is table data in edutadd')
    const data=[
        "maths", "eng", "phy", "chem",
    ]
    return(
        <div style={{backgroundColor:"transparent", display:"flex", flex:"1", paddingLeft:"10px", paddingRight:"10px"}}>
            <div style={{backgroundColor:"transparent",display:"flex", flexDirection:"column", flex:"1"}}>
                <p style={{fontSize:"50px", fontWeight:"light", marginBottom:"2vh"}}>Table</p>
                <div style={{backgroundColor:"",display:"flex", flex:"1", gap:"10px"}}>
                    <div style={{backgroundColor:"transparent",flex:"4",}}>
                        <Table tableData={tableData}/>
                        </div>
                    <div style={{backgroundColor:"transparent",flex:"1", }}>
                        Add subs
                        <table style={{backgroundColor:"red", width:"100%", borderRadius:"20px", border:"1px solid rgb(0,0,0)"}}>
                            <thead> 
                                <tr>
                                    <th>Key</th>
                                </tr>
                                <td colSpan="1" style={{backgroundColor:"black", }}></td>
                            </thead>
                            <tbody style={{backgroundColor:"", padding:"20px", }}>
                                {Object.keys(data).map((key, index) => (
                                    <>
                                    <tr style={{}} key={index}>
                                        <td style={{backgroundColor:"", paddingRight:"10px", textAlign:"center"}}>{data[key]}</td>
                                    </tr>
                                    
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}