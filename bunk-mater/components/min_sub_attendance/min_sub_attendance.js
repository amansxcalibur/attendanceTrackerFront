import { useState } from "react";
import CurvedArrowHead from "../../app/_assets/curved_arrowhead_white.png"
import Image from "next/image";

export default function MinSubAttendance(){
    const [criteria, setCriteria]=useState({value:75});
    const handleChange=(event)=>{
        let { value, min, max } = event.target;
        value= (Math.max(Number(min), Math.min(Number(max), Number(value)))).toString();

        setCriteria({ value: value });
    }
    const handleIncrement=()=>{
        setCriteria(prevState => ({value: prevState.value + 1}))
    }
    const handleDecrement=()=>{
        setCriteria(prevState => ({value: prevState.value - 1}))
    }
    return(
        <>
            <div className="flex flex-col justify-center items-center ml-[2vw] mr-[1vw]">
                <button type="button" className="text-[1.5vw] text-[#727272] hover:text-white -my-2" onClick={handleIncrement}>
                    <Image src={CurvedArrowHead} className="-rotate-90" height={50}/>
                </button>
                <input type="number" 
                    placeholder="75"
                    min='0'
                    max='100'
                    value={criteria.value}
                    onChange={handleChange}
                    className="no-scrollbar bg-black hover:border-white border-[#3a3a3a] border-[1px] min-h-[4vw] max-w-[4vw] text-center text-[2vw] rounded-full"
                />
                <button type="button" className="text-[1.5vw] text-[#727272] hover:text-white -my-2" onClick={handleDecrement}>
                    <Image src={CurvedArrowHead} className="rotate-90" height={50}/>
                </button>
            </div>
            <p className="max-w-[20vw]">The Attendance criteria.<br/><span className="text-[#727272]">Every subject will have a minimum attendance criteria</span></p>
        </>
    )
}