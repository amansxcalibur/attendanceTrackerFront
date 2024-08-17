import { useState, useEffect } from "react";

export default function DateRangePicker(){
    return(
        <>
            <input 
                type="date" 
                className="bg-black w-[15vw] h-[3.4vw] px-[0.5vw] border-[#3a3a3a] hover:border-white border-solid border-[2px]"
                >
            </input>
            |
            <input 
                type="date" 
                className="bg-black w-[15vw] h-[3.4vw] px-[0.5vw] border-[#3a3a3a] hover:border-white border-solid border-[2px]"
                >
            </input>
        </>
    )
}