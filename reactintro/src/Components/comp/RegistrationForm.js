import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { useNavigate } from "react-router-dom";
//axios.defaults.headers.common['Access-Control-Allow-Origin']= '*'

export default function RegistrationForm(props){
    const [state, setState]=useState({
        username:"",
        password:"",
        confirmpassword:"",
        successMessage:null
    });
    const header={
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
        // 'Authorization':'Bearer '+localStorage.getItem(ACCESS_TOKEN_NAME),
        // 'Access-Control-Allow-Origin':'*',
    }
    
    //console.log(header)
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const { id, value }=e.target;
        setState(prevState=>({
            ...prevState,
            [id]: value
        }));
    }

    const sendDetailsToServer=()=>{
        console.log("im here");
        if(state.username.length&&state.password.length){
            console.log('maybe here');
            props.showError(null);
            const payload={
                "username":state.username,
                "password":state.password
            }
            // axios.defaults.headers.common['Access-Control-Allow-Origin']= '*'

            axios.post(API_BASE_URL + '/register', payload)
            .then((response)=>{
                if(response.status===201){
                    console.log(response.body);
                    setState(prevState=>({
                        ...prevState,
                        'succesMessage':'Registration successful. Redirecting to homepage'
                    }))
                    console.log("about to pass")
                    localStorage.setItem(ACCESS_TOKEN_NAME, JSON.stringify(response.data.token));
                    // redirectToHome();
                    props.showError(null)
                    console.log("created")
                }
            })
            .catch((error)=>{
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log('yo got a response but not 200');
                    console.log(error.response.data);
                    console.log(error.response.status)
                //   } else if (error.request) {
                //     // The request was made but no response was received
                //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                //     // http.ClientRequest in node.js
                //     console.log("no server response");
                //     console.log(error.request);
                //   } else {
                //     // Something happened in setting up the request that triggered an Error
                //     console.log("error while setting up request");
                //     console.log('Error', error.message);
                //   }
                //   console.log("error config");
                //   console.log(error.config);
            }})
        }else{
            props.showError("Please enter valid credentials")
        }
    }

    const redirectToHome=()=>{
        console.log("home")
        props.updateTitle("Home");
        navigate('/home');
    }

    const redirectToLogin=()=>{
        props.updateTitle('Login');
        navigate('/');
    }

    const handleSubmitClick=(e)=>{
        e.preventDefault();
        if(state.password===state.confirmpassword){
            sendDetailsToServer();
        }else{
            props.showError("Password do not match");
        }
    }
    return(
        <div>
            <form>
                <div>
                    <div>
                        <label>UserName</label>
                        <input type="text" id="username" placeholder="Username add" value={state.username} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" id="password" placeholder="Password add" value={state.password} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" id="confirmpassword" placeholder="Confirm Password add" value={state.confirmpassword} onChange={handleChange}/>
                    </div>
                    <button type="submit" onClick={handleSubmitClick}>Register</button>
                </div>
            </form>
            <div style={{display: state.successMessage?'block':'none'}} role="alert">
                {state.successMessage}
            </div>
            <div>
                <span>Already have an account?</span>
                <span onClick={()=>redirectToLogin()}>Login here</span>
            </div>
        </div>
    )
}