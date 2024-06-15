import { useEffect, useState } from "react";
import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../../../constants/apiConstants";
import dayjs from "dayjs";
import axios from "axios";
import React from "react";
import BasicDatePicker from "./RewindTime";
import Status from "./Status"
import Button from '@mui/material/Button';

export default function Statusman({rendCont,setRendCont}){
    console.log("in statusman");
    const [dateCurr, setDateCurr]=React.useState(dayjs())
    const [dateQuer, setDateQuer]=useState(null);
    const header={
        'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
      }
    useEffect(()=>{
        console.log("Useeffect in statusman for dateQuer via dateCurr")
        axios.get(API_BASE_URL + '/datequery?date='+dateCurr.format("YYYY-MM-DD"), {headers:header})
        .then(function (response) {
            if(response.status === 200){
                console.log("hello datquey des", dateQuer)
                console.log(response.data)
                setDateQuer(response.data)
                console.log("thisis datequer just after setState",dateQuer)
            }
            else{
                console.log('ahh yes else part')
                console.log(response.data)
                // setState(response.data)
            }
        })
        .catch(function (error) {
            console.log("catchme in datequery")
            console.log(JSON.stringify(error));
        });
        console.log("after useEffect",dateQuer)
    },[dateCurr])

    // useEffect(()=>{
    //     console.log('useEffect for passing datQuer to statusmanner', dateQuer)
    //     Statusmanner(dateCurr, setDateCurr, dateQuer, setDateQuer, rendCont, setRendCont)
    // },[dateQuer])
    console.log("end of func statusman", dateQuer)
    return(
        <>
        <div style={{display:"flex"}}>
            <div style={{flex:"1"}}><span style={{fontSize:"50px", fontWeight:"light"}}>Today's Courses</span></div>
            <div style={{flex:"1"}}>
                <BasicDatePicker dateCurr={dateCurr} setDateCurr={setDateCurr}/>
            </div>
        </div>
            {dateQuer===null || dateQuer==[]?<></>: 
            // dateQuer[0].status===null?<></>:
            <Status dateQuer={dateQuer} setDateQuer={setDateQuer} dateCurr={dateCurr} setDateCurr={setDateCurr} rendCont={rendCont} setRendCont={setRendCont}/>}
        </>
    )
}
// function Statusmanner(dateCurr, setDateCurr, dateQuer, setDateQuer, rendCont, setRendCont){
//     console.log("in statusmanner",dateQuer)
//     return(
//         <>
//             <Status/>
//         </>
//     )
// }