import { useEffect, useState } from "react";
import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../../../constants/apiConstants";
import dayjs from "dayjs";
import axios from "axios";
import React from "react";
import BasicDatePicker from "./RewindTime";
import Status from "./Status";

export default function Statusman({rendCont,setRendCont}){
    const [dateCurr, setDateCurr]=React.useState(dayjs())
    const [dateQuer, setDateQuer]=useState(null);
    const header={
        'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
      }
    useEffect(()=>{
        console.log("Useeffect ub statusman for datequerr init val")
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
    },[dateCurr])
    useEffect(()=>{
        Statusmanner(dateCurr, setDateCurr, dateQuer, setDateQuer, rendCont, setRendCont)
    },[dateQuer])
    console.log("after useEffect")
    return(
        <>
            <BasicDatePicker dateCurr={dateCurr} setDateCurr={setDateCurr}/>
        </>
    )
}
function Statusmanner(dateCurr, setDateCurr, dateQuer, setDateQuer, rendCont, setRendCont){
    console.log("in statusmanner")
    return(
        <>
            <Status dateQuer={dateQuer} setDateQuer={setDateQuer} rendCont={rendCont} setRendCont={setRendCont} dateCurr={dateCurr}/>
        </>
    )
}