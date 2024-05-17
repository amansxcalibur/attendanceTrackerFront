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
    const [destState, setDest]=useState(['home',['yellow', 'transparent']]); //decides home or timetable and the colour
    // const a={
    //   "name": "S4 CSE",
    //   "shared": false,
    //   "start_date": "2024-02-05",
    //   "end_date": "2024-06-28",
    //   "threshold": 75,
    //   "courses": [
    //       [
    //           "maths",
    //           "English",
    //           "history",
    //           "chemistry",
    //           "physics"
    //       ],
    //       [
    //           "algebra",
    //           "literature",
    //           "geography",
    //           "biology",
    //           "computer science"
    //       ],
    //       [
    //           "English",
    //           "physics",
    //           "geometry",
    //           "world history",
    //           "art"
    //       ],
    //       [
    //           "chemistry",
    //           "physics",
    //           "literature",
    //           "calculus",
    //           "US history"
    //       ]
    //   ]
    // }

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
      const [tableData, setTableData]=useState({})
      const header={
        'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
      }

      //displays bunks available and perc. RendCont so to make sure this gets updated when present status changes.
      useEffect(()=>{
      //   const fetchData = async () => {
      //     try {
      //       console.log("in useEffect")
      //       const statResponse = await axios.get(API_BASE_URL + '/statquery', { headers: header });
      //     if (statResponse.status === 200) {
      //         setStatData(statResponse.data);
      //         console.log("statdata", statResponse.data)
      //       }
      //     } catch (error) {
      //       console.error("Error fetching data:", error);
      //     }
      //  };
      // fetchData();
      axios.get(API_BASE_URL + '/statquery', { headers: header })
      .then(function(response){
        if (response.status === 200) {
            setStatData(response.data);
            console.log("statdata", response.data)
          }
        })
        .catch(function(error) {
          console.error("Error fetching data:", error);
        }
     );
      },[rendCont])

      useEffect(()=>{
        console.log(header);
      axios.get(API_BASE_URL+'/collection', {headers: header})
      .then(function(response){
        console.log(response.data,"destState changed, setting response to tableData")
        setTableData(response.data)
        console.log("this is tabledata after setstate ", tableData)
      })
      .catch(function(error){
        console.log(error.response,)
      })
    },[destState])
      
    return(
      <div style={{flex:"1", display:"flex"}}>
      <div className='home' style={{backgroundColor:'transparent', borderRadius:"20px", height:"100%"}}>
        
        <div style={{backgroundColor:"transparent", flex:"1", display:"flex", flexWrap:"wrap"}}>
          <div style={{backgroundColor:"transparent", flex:"2.5", display:"flex", flexDirection:"column"}}>
            <div style={{backgroundColor:"transparent", flex:"2", display:"flex", flexDirection:"column"}}>
              <h1>{tableData.name}</h1>
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
            <div style={{backgroundColor:"transparent", flex:"2", display:"flex", flexDirection:"column", marginBottom:"20px", marginLeft:"20px", marginRight:"20px ", borderRadius:"20px"}}>
              <Leaves
                statData={statData}/>
            </div>
          </div>
          { destState[0]==='home'?
            <div style={{backgroundColor:"transperent", flex:"1", borderRadius:"20px", marginRight:"20px", marginBottom:"20px"}}>
              <Statusman rendCont={rendCont} setRendCont={setRendCont}/>
            </div>:tableData=={}?<></>:<SeeTable
                  tableData={tableData.courses_data}/>
          }
        </div>
      </div>
      </div>
    )
  }