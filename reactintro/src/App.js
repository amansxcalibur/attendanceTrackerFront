import Home from './Components/Home/Home.js';
import './App.css';
import { useState } from 'react';
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
import Homer from './Homepage.js'
// import PrivateRoute from './utils/PrivateRoute';  
// import RegistrationForm from './Components/comp/RegistrationForm.js';
// import LoginForm from './Components/comp/LoginForm.js';
// import Header from './Components/comp/Header.js';
// import AlertComponent from './Components/comp/AlertComponent.js';

export default function App() {
  // const [token, setToken]=useToken();
  
  // if(!token){
  //   return <Login setToken={setToken}/>
  // }
  const [title, updateTitle]=useState(null);
  const [errorMessage, updateErrorMessage]=useState(null);

  return (
    <div>
      <BrowserRouter>
        <Homer/>
      </BrowserRouter>
      {/* <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true}>
                <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
              </Route>
              <Route path="/register">
                <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
              </Route>
              <Route path="/login">
                <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
              </Route>
              <PrivateRoute path="/home">
                <Homer/>
              </PrivateRoute>
        </Routes>
        <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
      </BrowserRouter> */}
    </div>
  );
}

// function Leftpanel(){
//   const navigate = useNavigate();

//   // const handleClick = () => {
//   //   navigate
//   //}
//   return(
//     <>
//     <div class='leftpanel' style={{backgroundColor:'gray'}}>
//       <div style={{backgroundColor:"green", height:"100%", display:"flex", flexDirection:"column"}}>
//         <img src={logo} width={60} height={60}></img>
//         <div style={{backgroundColor:"blue", display:"flex",flexDirection:"column", flex:"30"}}>
//             <div onClick={()=>{navigate('/')}} style={{backgroundColor:"brown", textAlign:"center", justifyContent:"center",horizontalAlign:"center", marginTop:"5px", padding:"17px", borderRadius:"10px"}}>T!</div>
//             <div style={{backgroundColor:"brown", textAlign:"center", justifyContent:"center",horizontalAlign:"center", marginTop:"5px", padding:"17px", borderRadius:"10px"}}>T$</div>
//             <button onClick={()=>{navigate('/add')}} style={{backgroundColor:"red", textAlign:"center", justifyContent:"center",horizontalAlign:"center", marginTop:"5px", padding:"15px", margin:"5px", borderRadius:"100px"}}>
//               <img src={add} width={14}/>
//             </button>
//         </div>
//         <div style={{display:"flex", flexDirection:"column", flex:"1"}}>
//             <button style={{backgroundColor:"transparent", border:"none", margin:"10px"}} onClick={()=>{navigate('settings')}}><img src={gear} width={30}/></button>
//             <button style={{backgroundColor:"transparent", border:"none", margin:"10px"}}><img src={logout} width={30}/></button>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// function Rightpanel(){
//   return(
//     <div class="Rightpanel" style={{backgroundColor:'purple',padding:"10px", flexDirection:"column"}}>
//       <div style={{backgroundColor:"cyan", flex:"", display:"flex"}}>
//           <div style={{backgroundColor:"gray", borderRadius:"200px", width:"67px", height:"67px", overflow:"hidden"}}>
//             <img src={pfp} style={{display:"inline", margin:"0 auto", height:"100%", width:"100%", height:"100%"}}/>
//           </div>
//           <div style={{marginLeft:"10px"}}>
//             <h2>Emu Otori</h2>
//           </div>
//       </div>
//       <div style={{overflow:"auto", flex:"1"}}>
//       <Routes>
//           <Route exact path="/"
//             element={<Home/>}/>
//           <Route path="/settings"
//             element={<Settings/>}/>
//           <Route path="/add"
//             element={<Add/>}/>
//           <Route path="/status"
//             element={<Status/>}/>
//           <Route path="/edit"
//           element={<EditAdd/>}/>
//         </Routes>
//         </div>
//     </div>
//   )
// }



