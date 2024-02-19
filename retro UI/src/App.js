import Home from './Components/Home/Home.js';
import './App.css';
import { useState } from 'react';
import Settings from './Components/Settings/Settings.js'
import { BrowserRouter, Router, useNavigate, Routes, Route} from 'react-router-dom';
import Add from './Components/Add/Add.js'
import Status from './Components/Features/Status/Status.js'


export default function App() {
  return (
    <div class='Main'>
      <BrowserRouter>
        <Leftpanel/>
        <Rightpanel/>
      </BrowserRouter>
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
    <div class='leftpanel' style={{backgroundColor:'gray'}}>
      <h1 style={{textAlign:"center"}}>HELLO</h1>
      <div class="option" style={{backgroundColor:"black"}}>
        <div class="home" onClick={()=>{navigate('/')}} id="leftpanelcont">Home</div>
        <div onClick={()=>{navigate('/add')}} id='leftpanelcont'>Add</div>
        <div onClick={()=>{navigate('/status')}} id='leftpanelcont'>Status</div>
      </div>
      <button class="settings" onClick={() => {navigate('/settings')}} id="leftpanelcont">settings</button>
      <button class="logout" id="leftpanelcont">logout</button>
      </div>
    </>
  );
}

function Rightpanel(){
  return(
    <div class="Rightpanel" style={{backgroundColor:'gray',padding:"10px"}}>
      <Routes>
          <Route exact path="/"
            element={<Home/>}/>
          <Route path="/settings"
            element={<Settings/>}/>
          <Route path="/add"
            element={<Add/>}/>
          <Route path="/status"
            element={<Status/>}/>
        </Routes>
    </div>
  )
}



