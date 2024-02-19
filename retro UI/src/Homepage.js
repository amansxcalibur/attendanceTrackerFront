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



/*function Leftpanel() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (

    <body class='body'>
      <div class='leftpanel' style={{ backgroundColor: 'blue' }}>
        <div>
          <h1>Welcome</h1>
          <button >Home</button>
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>
      
    </body>
  );
}

function Home() {
  return (
    <>
    <div class='desc'>
      <h1>Home</h1>
      <body class='descont'>
          <div><Progress/></div>
          <div class='desc-bottom'>
            <Leaves/>
            <Graph/></div>
      </body>
      </div>
    </>
  )
}


function DescPanel() {
  return (
    <table border='1'>
      <tr>
        <td>Row1, Column 1</td>
        <td>Row1, Column 2</td>
      </tr>
      <tr>
        <td>Row2, Column 1</td>
        <td>Row2, Column 2</td>
      </tr>
    </table>
  )
}


function Leaves(){
  return(
    <>
    <body class='desc-content' id='leaves'>
    <h2>Leaves Left</h2>
    <div>Subs go here...</div></body>
    </>
  )
}

function Graph(){
  return(
    <>
    <body class='desc-content' id='graph'>
    <h2>Graph:</h2>
    <div>Graph goes here...</div>
    </body></>
  )
}

function Progress(){
  return(
    <>
    <body>
    <div class='desc-content' id='progress'>
      <h2>Progress</h2>
    </div>
    <div class="desc-content">
      
    </div>
    </body></>
    
  )
}

function Add() {
  return (
    <>
      <div>
        <h1>This is Add</h1></div></>
  )
}*/
