import { useState, useEffect } from "react";
import Statusman from "@/components/statusman/statusman";
import Data from "@/components/statistics/data";

export default function HomeDisp({curr}){
    const [smWind, setSmWind]=useState();
    useEffect(()=>{
        setSmWind(window.innerWidth<640)
        window.addEventListener('resize',()=>{
            setTimeout(()=>{
                if (window.innerWidth<640){
                    setSmWind(true);
                }else{
                    setSmWind(false);
                }
            },100)
        })
    },[])
    return(
        <div className="flex overflow-hidden flex-1">
            {smWind!=undefined?smWind==true? (curr=='Today'?
                    <div className="bg-[#1c1c1c] flex-[4] mx-[1px] px-5 max-sm:rounded-t-[40px] max-sm:pt-5 max-sm:px-3">
                        <Statusman/>
                    </div>:
                    <div className="bg-[#1c1c1c] flex-[9] flex mx-[1px] max-sm:rounded-t-[40px] max-sm:m-0">
                        <Data/>
                    </div>):
                    <>
                        <div className="bg-[#1c1c1c] flex-[4] mx-[1px] px-5 rounded-[20px]">
                            <Statusman/>
                        </div>
                        <div className="bg-[#1c1c1c] flex-[9] flex mx-[1px] rounded-[20px]">
                            <Data/>
                        </div>
                    </>:<></>
            }
        </div>
    )
}