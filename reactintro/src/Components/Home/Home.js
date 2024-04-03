import './Home.css'
import Perc from '../Features/Perc/Perc.js'
import Leaves from '../Features/Leaveleft.js'
import { BrowserRouter, Router, useNavigate, Routes, Route} from 'react-router-dom';
import Status from '../Features/Statusman/Status.js';
import { useEffect, useState} from 'react';
import SeeTable from '../Features/SeeTable/SeeTable.js';
import axios from 'axios';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiConstants.js';
import BasicDatePicker from '../Features/Statusman/RewindTime.js';
import dayjs from 'dayjs';
import React from 'react';
import Statusman from '../Features/Statusman/Statusman.js';
import { red } from '@mui/material/colors';

export default function Home(){
  console.log("in Home")
    const navigate = useNavigate();
    const [destState, setDest]=useState(['home',['yellow', 'transparent']]);
    const a={
      "name": "S4 CSE",
      "shared": false,
      "start_date": "2024-02-05",
      "end_date": "2024-06-28",
      "threshold": 75,
      "courses": [
          [
              "maths",
              "English",
              "history",
              "chemistry",
              "physics"
          ],
          [
              "algebra",
              "literature",
              "geography",
              "biology",
              "computer science"
          ],
          [
              "English",
              "physics",
              "geometry",
              "world history",
              "art"
          ],
          [
              "chemistry",
              "physics",
              "literature",
              "calculus",
              "US history"
          ]
      ]
    }

    // const statdata=[
    //   {
    //       "name": "maths",
    //       "percentage": 44,
    //       "bunks_available": 5
    //   },
    //   {
    //       "name": "English",
    //       "percentage": 94 ,
    //       "bunks_available": 10
    //   },]
    
    const [rendCont, setRendCont]=useState()
    // console.log(dateCurr)
    
      const [statData, setStatData]=useState([]);
      const header={
        'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
      }
      useEffect(()=>{
        const fetchData = async () => {
          try {
            console.log("in useEffect")
            const statResponse = await axios.get(API_BASE_URL + '/statquery', { headers: header });
          if (statResponse.status === 200) {
              setStatData(statResponse.data);
              console.log("statdata", statResponse.data)
            }
          } catch (error) {
            console.error("Error fetching data:", error);
            // Consider setting an error state here to handle errors in the UI
          }
       };
      
       fetchData();
      
      //   axios.get(API_BASE_URL + '/statquery', {headers:header})
      //   .then(function (response) {
      //       if(response.status === 200){
      //           console.log("useEffect in home", response.data)
      //           setStatData(response.data)
      //           console.log(statData)
      //       }
      //       // else if(response.code === 204){
      //       //     props.showError("Username and password do not match");
      //       // }
      //       else{
      //           console.log('else part of useEffect in home')
      //           console.log(response.data)
      //       }
      //   })
      //   .catch(function (error) {
      //       console.log("catch")
      //       console.log(error.response);
      //   });
      //   axios.get(API_BASE_URL + '/datequery?date='+dateCurr, {headers:header})
      //   .then(function (response) {
      //       if(response.status === 200){
      //           console.log("datequer UseEffect", response.data)
      //           setDateQuer(response.data)
      //           console.log(response.data)
      //           console.log(dateCurr, dateQuer)
      //       }
      //       // else if(response.code === 204){
      //       //     props.showError("Username and password do not match");
      //       // }
      //       else{
      //           console.log('else part datequer useEffect')
      //           console.log(response.data)
      //       }
      //   })
      //   .catch(function (error) {
      //       console.log("catch")
      //       console.log(error.response);
      //   });
      },[rendCont])
      
    return(
      <div style={{height:"100%"}}>
      <div className='home' style={{backgroundColor:'transparent', borderRadius:"20px", height:"100%"}}>
        
        <div style={{backgroundColor:"transparent", flex:"13", display:"flex", flexWrap:"wrap"}}>
          <div style={{backgroundColor:"transparent", flex:"3", display:"flex", flexDirection:"column"}}>
            <div style={{backgroundColor:"transparent", flex:"2", display:"flex", flexDirection:"column"}}>
              <h1>{a.name}</h1>
              <div style={{display:"flex", height:"100%"}}>
                <div style={{backgroundColor:"transparent", flex:"6", height:"100%"}}>
                  <div style={{height:"100%", padding:"10px"}}>
                    <div>Home</div>
                    {/* <button onClick={()=>callme()}>callme</button> */}
                    <div style={{backgroundColor:"transparent", height:"100%"}}>
                      <div style={{backgroundColor:destState[1][0], borderRadius:"20px", padding:"10px"}} onClick={()=>{setDest(['home',['yellow', 'transparent']])}}>home</div>
                      <div style={{backgroundColor:destState[1][1], borderRadius:"20px", padding:"10px"}} onClick={()=>{setDest(['timetable',['transparent','yellow']])}}>timetable</div>
                    </div>
                  </div>
                </div>
                { destState[0]==='home'?
                <div style={{backgroundColor:"white", flex:"8", display:"flex", padding:"20px", borderRadius:"20px", marginRight:"20px"}}>
                  <Perc
                    statData={statData}/>
                </div>:<></>}
              </div>
            </div>
            <div style={{backgroundColor:"white", flex:"1", display:"grid", padding:"20px", margin:"20px", borderRadius:"20px"}}>
              <Leaves
                statData={statData}/>
            </div>
          </div>
          { destState[0]==='home'?
            <div style={{backgroundColor:"white", flex:"1", padding:"20px", borderRadius:"20px", marginRight:"20px", marginBottom:"20px"}}>
              <Statusman rendCont={rendCont} setRendCont={setRendCont}/>
            </div>:<SeeTable
                  tableData={a.courses}/>
          }
        </div>
      </div>
      </div>
    )
  }