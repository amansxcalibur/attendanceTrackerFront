import Home from './Components/Home/Home.js';
import './App.css';
import React, { useState, useEffect } from 'react';
import Settings from './Components/Settings/Settings.js'
import { BrowserRouter, Router, useNavigate, Routes, Route} from 'react-router-dom';
import Add from './Components/Add/Add.js'
import Status from './Components/Features/Status/Status.js'
import logo from './icons/pngwing.com(3).png'
import EditAdd from './Components/Features/Edit/EditAdd.js';
import gear from './icons/cog.svg'
import logout from './icons/logout-1.svg'
import add from './icons/add-1.svg'
import pfp from './icons/uWu.jpg'
// import { ACCESS_TOKEN_NAME, API_BASE_URL } from './constants/apiConstants';
// import axios from 'axios';


export default function Homer(props) {
  // const navigate=useNavigate();

  // useEffect(()=>{
  //   axios.get(API_BASE_URL+'/user/me',{headers:{'token':localStorage.getItem(ACCESS_TOKEN_NAME)}})
  //   .then(function(response){
  //     if(response.status!==200){
  //       redirectToLogin();
  //     }
  //   })
  //   .catch(function(error){
  //     redirectToLogin();
  //   });
  // },[]);

  // function redirectToLogin(){
  //   navigate('/login');
  // }

  return (
    <div class='Main'>
        <Leftpanel/>
        <Rightpanel/>
    </div>
  );
}

function Leftpanel(){
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate
  //}
  return(
    <>
    <div class='leftpanel' style={{backgroundColor:'white'}}>
      <div style={{backgroundColor:"transparent", height:"100%", display:"flex", flexDirection:"column"}}>
        <img src={logo} width={60} height={60}></img>
        <div style={{backgroundColor:"transparent", display:"flex",flexDirection:"column", flex:"30"}}>
            <div onClick={()=>{navigate('/')}} style={{backgroundColor:"brown", textAlign:"center", justifyContent:"center",horizontalAlign:"center", marginTop:"5px", padding:"17px", borderRadius:"10px"}}>T!</div>
            {/* <div style={{backgroundColor:"brown", textAlign:"center", justifyContent:"center",horizontalAlign:"center", marginTop:"5px", padding:"17px", borderRadius:"10px"}}>T$</div> */}
            <button onClick={()=>{navigate('/add')}} style={{backgroundColor:"red", textAlign:"center", justifyContent:"center",horizontalAlign:"center", marginTop:"5px", padding:"15px", margin:"5px", borderRadius:"100px"}}>
              <img src={add} width={14}/>
            </button>
        </div>
        <div style={{display:"flex", flexDirection:"column", flex:"1"}}>
            <button style={{backgroundColor:"transparent", border:"none", margin:"10px"}} onClick={()=>{navigate('settings')}}><img src={gear} width={30}/></button>
            <button style={{backgroundColor:"transparent", border:"none", margin:"10px"}}><img src={logout} width={30}/></button>
        </div>
      </div>
    </div>
    </>
  );
}

function Rightpanel(){
  return(
    <div class="Rightpanel" style={{backgroundColor:'#DDDDDD',padding:"10px", flexDirection:"column"}}>
      <div style={{backgroundColor:"transparent", flex:"", display:"flex"}}>
          <div style={{backgroundColor:"gray", borderRadius:"200px", width:"67px", height:"67px", overflow:"hidden"}}>
            <img src={pfp} style={{display:"inline", margin:"0 auto", height:"100%", width:"100%", height:"100%"}}/>
          </div>
          <div style={{marginLeft:"10px"}}>
            <h2>Emu Otori</h2>
          </div>
      </div>
      <div style={{overflow:"auto", flex:"1"}}>
      <Routes>
          <Route exact path="/"
            element={<Home/>}/>
          <Route path="/settings"
            element={<Settings/>}/>
          <Route path="/add"
            element={<Add/>}/>
          <Route path="/status"
            element={<Status/>}/>
          <Route path="/edit"
          element={<EditAdd/>}/>
        </Routes>
        </div>
    </div>
  )
}



