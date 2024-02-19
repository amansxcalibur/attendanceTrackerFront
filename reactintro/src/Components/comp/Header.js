import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from '../../constants/apiConstants';

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
        if (location.pathname==='/'){
            return(
                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            );
        }
    }

    function handleLogout(){
        localStorage.removeItem(ACCESS_TOKEN_NAME);
        navigate('/login');
    }

    return(
        <nav>
            <div>
                <span>
                    {props.title || title}
                </span>
            </div>
        </nav>
    );
}