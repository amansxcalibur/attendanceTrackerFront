import './Home.css'
import Perc from '../Features/Perc/Perc.js'
import Leaves from '../Features/Leaveleft.js'
import { BrowserRouter, Router, useNavigate, Routes, Route} from 'react-router-dom';
import Status from '../Features/Status/Status.js';
import { useState} from 'react';
import SeeTable from '../Features/SeeTable/SeeTable.js';

export default function Home(){
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

    const statdata=[
      {
          "name": "maths",
          "percentage": 44,
          "bunks_available": 5
      },
      {
          "name": "English",
          "percentage": 94 ,
          "bunks_available": 10
      },
      {
          "name": "history",
          "percentage": 100,
          "bunks_available": 4
      },
      {
          "name": "chemistry",
          "percentage": 66,
          "bunks_available": 10
      },
      {
          "name": "physics",
          "percentage": 30,
          "bunks_available": 15
      },
      {
          "name": "algebra",
          "percentage": 83,
          "bunks_available": 5
      },
      {
          "name": "literature",
          "percentage": 75,
          "bunks_available": 10
      },
      {
          "name": "geography",
          "percentage": 9,
          "bunks_available": 4
      },]
  //     {
  //         "name": "biology",
  //         "percentage": 100,
  //         "bunks_available": 5
  //     },
  //     {
  //         "name": "computer science",
  //         "percentage": 100,
  //         "bunks_available": 5
  //     },
  //     {
  //         "name": "geometry",
  //         "percentage": 100,
  //         "bunks_available": 5
  //     },
  //     {
  //         "name": "world history",
  //         "percentage": 100,
  //         "bunks_available": 4
  //     },
  //     {
  //         "name": "art",
  //         "percentage": 100,
  //         "bunks_available": 5
  //     },
  //     {
  //         "name": "calculus",
  //         "percentage": 100,
  //         "bunks_available": 5
  //     },
  //     {
  //         "name": "US history",
  //         "percentage": 100,
  //         "bunks_available": 4
  //     }
  // ]
    return(
      <div style={{height:"100%"}}>
      <div class='home' style={{backgroundColor:'transparent', borderRadius:"20px", height:"100%"}}>
        
        <div style={{backgroundColor:"transparent", flex:"13", display:"flex", flexWrap:"wrap"}}>
          <div style={{backgroundColor:"transparent", flex:"3", display:"flex", flexDirection:"column"}}>
            <div style={{backgroundColor:"transparent", flex:"2", display:"flex", flexDirection:"column"}}>
              <h1>{a.name}</h1>
              <div style={{display:"flex", height:"100%"}}>
                <div style={{backgroundColor:"transparent", flex:"6", height:"100%"}}>
                  <div style={{height:"100%", padding:"10px"}}>
                    <div>Home</div>
                    <div style={{backgroundColor:"transparent", height:"100%"}}>
                      <div style={{backgroundColor:destState[1][0], borderRadius:"20px", padding:"10px"}} onClick={()=>{setDest(['home',['yellow', 'transparent']])}}>home</div>
                      <div style={{backgroundColor:destState[1][1], borderRadius:"20px", padding:"10px"}} onClick={()=>{setDest(['timetable',['transparent','yellow']])}}>timetable</div>
                    </div>
                  </div>
                </div>
                { destState[0]==='home'?
                <div style={{backgroundColor:"white", flex:"8", display:"flex", padding:"20px", borderRadius:"20px", marginRight:"20px"}}>
                  <Perc
                    statdata={statdata}/>
                </div>:<></>}
              </div>
            </div>
            <div style={{backgroundColor:"white", flex:"1", display:"grid", padding:"20px", margin:"20px", borderRadius:"20px"}}>
              <Leaves
                statdata={statdata}/>
            </div>
          </div>
          { destState[0]==='home'?
            <div style={{backgroundColor:"white", flex:"1", padding:"20px", borderRadius:"20px", marginRight:"20px", marginBottom:"20px"}}>
              <Status/>
            </div>:<SeeTable
                  tableData={a.courses}/>
          }
        </div>
      </div>
      </div>
    )
  }