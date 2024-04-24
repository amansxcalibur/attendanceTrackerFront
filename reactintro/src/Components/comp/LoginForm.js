import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
import { useNavigate } from 'react-router-dom';
import ModernArt from '../../assets/modernartcropped.png'

function LoginForm(props) {
    const [state, setState] = useState({
        username: "",
        password: "",
        successMessage: null
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value 
        }));
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            "username": state.username,
            "password": state.password,
        };
        axios.post(API_BASE_URL + '/login', payload)
            .then(function (response) {
                if(response.status === 202){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    console.log("hello login des")
                    console.log(response.data)
                    localStorage.setItem(ACCESS_TOKEN_NAME,JSON.stringify(response.data.token));
                    redirectToHome();
                    props.showError(null)
                }
                // else if(response.code === 204){
                //     props.showError("Username and password do not match");
                // }
                else{
                    props.showError("Username does not exists");
                    console.log(response.data)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const redirectToHome = () => {
        props.updateTitle('Home');
        navigate('/home');
    }

    const redirectToRegister = () => {
        navigate('/register');
        props.updateTitle('Register');
    }

    return(
        <div style={{display:"flex", backgroundColor:"green", flex:"1"}}>
            <div style={{flex:"1", justifyContent:"center", alignItems:"center", display:"flex", backgroundColor:"red"}}>
                <img src={ModernArt} style={{height:"800px"}}/>
            </div>
            <div style={{flex:"1", backgroundColor:"cyan"}}>
                <div style={{padding:"140px"}}>
                <p style={{fontSize:"40px"}}>Welcome</p>
                <div className="registerMessage">
                    <span className="loginText" onClick={() => redirectToRegister()}><b><u>Create a free account</u></b></span>
                    <span> or log in to get started</span> 
                </div>
                <form>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <label htmlFor="Username1">Username</label>
                        <input type="text"
                            id="username"
                            placeholder="Enter username" 
                            value={state.username}
                            onChange={handleChange}
                            style={{paddingLeft:"20px", borderRadius:"30px", minHeight:"40px", border:"2px solid black"}}
                        />
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <label style={{marginTop:"20px"}} htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                        style={{paddingLeft:"20px", borderRadius:"30px", minHeight:"40px", border:"2px solid black"}}
                    />
                    </div>
                    <div style={{textAlign:"right"}}>
                        <p><u><b>Forgot password?</b></u></p>
                    </div>
                    <button 
                        type="submit" 
                        onClick={handleSubmitClick}
                        style={{width:"100%", minHeight:"46px", borderRadius:"30px", border:"2px solid black", color:"white", backgroundColor:"black"}}>Login</button>
                </form>
                <div style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
                </div>
            </div></div>
        </div>
    )
}

export default LoginForm;
