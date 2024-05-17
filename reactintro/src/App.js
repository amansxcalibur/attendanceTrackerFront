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
import PrivateRoute from './utils/PrivateRoute';  
import RegistrationForm from './Components/comp/RegistrationForm.js';
import LoginForm from './Components/comp/LoginForm.js';
import Header from './Components/comp/Header.js';
import AlertComponent from './Components/comp/AlertComponent.js';

export default function App() {
  // const [token, setToken]=useToken();
  
  // if(!token){
  //   return <Login setToken={setToken}/>
  // }
  const [title, updateTitle]=useState(null);
  const [errorMessage, updateErrorMessage]=useState(null);

  return (
    <div style={{ height:"100vh", display:"flex",}}>
      {/* <BrowserRouter>
        <Homer/>
      </BrowserRouter> */}
      
      <BrowserRouter>
      {/* <Header title={title}/> */}
        <Routes>
          {/* <Route path="/" element={<RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>}/> */}
          <Route path="/register" element={<RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>}/>
          <Route path="/" element={<LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>}/>
          {/* <PrivateRoute path="/home" element={<Homer/>}/> */}
          <Route path='/home/*' element={<PrivateRoute><Homer/></PrivateRoute>}/>
        </Routes>
        {/* <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/> */}
      </BrowserRouter>
    </div>
  );
}
