import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiConstants';
import axios from "axios";

export default function Header(props){
    const location=useLocation();
    const navigate=useNavigate();

    const capitalize=(s)=>{
        if (typeof s!=='string') return '';
        return s.charAt(0).toUpperCase()+s.slice(1);
    }

    let title=capitalize(location.pathname.substring(1,location.pathname.length));
    if (location.pathname==='/'){
        title="Welcome"
    }
    function renderLogout(){
        if (location.pathname==='/home'){
            return(
                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            );
        }
    }
    const header={
        headers:{'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME)),}
    }
    function handleLogout(){
        axios.post(API_BASE_URL + '/logout', {}, header)
            .then((response)=>{
                if(response.status===200){
                    localStorage.removeItem(ACCESS_TOKEN_NAME);
                                       // redirectToHome();
                    console.log("logged out")
                    navigate('/login'); 
                }
            })
            .catch((error)=>{
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log('yo got a response but not 200');
                    console.log(error.response.data);
                    console.log(error.response.status)
                  } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log("no server response");
                    console.log(error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("error while setting up request");
                    console.log('Error', error.message);
                  }
                  console.log("error config");
                  console.log(error.config);
            })
        }

    return(
        <nav>
            <div>
                <span>
                    {props.title || title}
                </span>
                {renderLogout()}
            </div>
        </nav>
    );
}