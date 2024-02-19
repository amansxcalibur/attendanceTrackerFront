import React, { useState, useEffect } from "react";

export default function AlertComponent(props){
    const [modalDisplay, toggleDisplay]=useState('none');
    const openModal=()=>{
        toggleDisplay('block');
    }
    const closeModal=()=>{
        toggleDisplay('none');
        props.hideError(null);
    }
    useEffect(()=>{
        if(props.errorMessage!==null){
            openModal()
        }else{
            closeModal()
        }
    });
    return(
        <div role="alert" id="alertPopUp">
            <div>
                <span>{props.errorMessage}</span>
                <button type="button" onClick={()=>closeModal()}>
                    <span>&times;</span>
                </button>
            </div>
        </div>
    )
}