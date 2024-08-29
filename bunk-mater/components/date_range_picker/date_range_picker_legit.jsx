import { useState, useEffect } from "react";

export default function DateRangePicker({interval, setInterval}){
    const handleDate=(e)=>{
        if (e.target.id=="start_date"){
            let min_date = new Date(e.target.value)
            min_date.setDate(min_date.getDate() + 1);
            setInterval({...interval, start_date: e.target.value, min_date: min_date.toLocaleDateString("fr-CA")});
        }else{
            setInterval({...interval,end_date: e.target.value})
        }
    }
    return(
        <>
            <input 
                type="date"
                id="start_date"
                max={interval.end_date}
                onChange={handleDate}
                required
                className="bg-black w-[15vw] h-[3.4vw] px-[0.5vw] max-sm:min-h-14 max-sm:min-w-[45vw] border-[#3a3a3a] hover:border-white border-solid border-[2px] max-sm:border"
                >
            </input>
            |
            <input 
                type="date"
                id="end_date"
                min={interval.min_date}
                onChange={handleDate}
                required
                className="bg-black w-[15vw] h-[3.4vw] px-[0.5vw] max-sm:min-h-14 max-sm:min-w-[45vw] border-[#3a3a3a] hover:border-white border-solid border-[2px] max-sm:border"
                >
            </input>
        </>
    )
}