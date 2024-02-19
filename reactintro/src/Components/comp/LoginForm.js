import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
import { useNavigate } from 'react-router-dom';

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
        axios.post(API_BASE_URL + '/user/login', payload)
            .then(function (response) {
                
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
        <div>
            <form>
                <div>
                    <label htmlFor="Username1">Username</label>
                    <input type="text" 
                        id="username"
                        placeholder="Enter eusername" 
                        value={state.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password"
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div>
                </div>
                <button 
                    type="submit" 
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            <div style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
            </div>
        </div>
    )
}

export default LoginForm;
