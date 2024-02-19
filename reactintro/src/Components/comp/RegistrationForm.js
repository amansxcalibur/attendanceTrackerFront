import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { useNavigate } from "react-router-dom";
import { response } from "express";

export default function RegistrationForm(props){
    const [state, setState]=useState({
        username:"",
        password:"",
        confirmpassword:"",
        successMessage:null
    });
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const { id, value }=e.target;
        setState(prevState=>({
            ...prevState,
            [id]: value
        }));
    }

    const sendDetailsToServer=()=>{
        if(state.username.length&&state.password.length){
            props.showError(null);
            const payload={
                "name":state.username,
                "password":state.password
            }
            axios.post(API_BASE_URL+'/user/register', payload)
            .then(function(repsonse){
                if(response.status===200){
                    setState(prevState=>({
                        ...prevState,
                        'succesMessage':'Registration successful. Redirecting to hmepage'
                    }))
                    localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
                    redirectToHome();
                    props.showError(null)
                }else{
                    props.showError("Some error occured");
                }
            })
            .catch(function(error){
                console.log(error);
            })
        }else{
            props.showError("Please enter valid credentials")
        }
    }

    const redirectToHome=()=>{
        props.updateTitle("Home");
        navigate('/home');
    }

    const redirectToLogin=()=>{
        props.updateTitle('Login');
        navigate('/login');
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
                        <input type="text" id="userName" placeholder="Username add" value={state.username} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" id="password" placeholder="Password add" value={state.password} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" id="confirmPassword" placeholder="Confirm Password add" value={state.confirmpassword} onChange={handleChange}/>
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