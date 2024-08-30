import { ACCESS_TIMETABLE_NAME } from '@/app/_utils/apiConstants';
import chroma from 'chroma-js';
import { useState, useEffect } from 'react';

export default function Graph({statData, threshold}){
    const f = chroma.scale(['red','yellow','green']);
    const handleGraphWidth=(key)=>{
        if (parseInt(key.percentage)<75){
            return (parseInt(key.percentage)).toString().concat("%");
        }else{
            return "100%";
        }
    }
    useEffect(()=>{
        if (sessionStorage.getItem(ACCESS_TIMETABLE_NAME).threshold){
            setThreshold(sessionStorage.getItem(ACCESS_TIMETABLE_NAME).threshold);
            //console.log(threshold)
        }
    },[])
    
    return(
        <div className='h-full w-full my-[2vw]'>
            {statData.map((key, value)=>(
                <div key={value} className='flex flex-col flex-1 text-[1.5vw] mb-[2vw]'>
                    <div className='flex items-center'>
                        <div className='mr-9 min-w-[4.6vw] max-sm:text-2xl max-sm:min-w-16 max-sm:m-0'>
                            {key.name.slice(0,4)}
                        </div>
                        {parseInt(key.percentage)>threshold?
                            <div className='flex-1 flex h-[10vh]'>
                                <div className='flex-1 max-sm:flex-[3] bg-[#55eb50] flex items-center justify-start max-sm:justify-end rounded-[5vh] sm:mr-[-10vh]'>
                                    <p className='text-black text-[2.5vw] font-extralight p-6 max-sm:text-3xl flex justify-center items-center h-[10vh] max-sm:hidden'>0</p>
                                    <p className='text-black text-[2.5vw] font-extralight p-6 max-sm:text-3xl sm:hidden'>{threshold}</p>
                                </div>
                                {/* <div className='h-[10vh] w-[10vh] flex flex-col items-center justify-center bg-[#55eb50] rounded-e-full'>
                                    <p className='text-black text-[2.5vw] font-extralight p-6 max-sm:text-3xl'>75</p>
                                </div> */}
                                <div className='flex-[3] flex max-sm:flex-[5]'>
                                    <div id='graph' className='h-[10vh] flex justify-center items-center rounded-[5vh] bg-emerald-600'
                                         style={{minWidth:(4*(parseInt(key.percentage)-75)).toString().concat("%"),
                                                 backgroundColor:f((0.01*4*(parseInt(key.percentage)-75).toString()))
                                         }}>
                                            <p className='text-black text-left text-[2.5vw] font-extralight p-6 max-sm:text-3xl bg-[#55eb50] bg-opacity-20 rounded-full w-[10vh] h-[10vh] flex justify-center items-center max-sm:hidden'>{threshold}</p>
                                            <p className='text-black text-right flex-1 text-[2.5vw] font-extralight p-6 max-sm:text-3xl'>{key.percentage}</p>
                                         </div>
                                    <div className='flex-1'></div>
                                </div>
                            </div>
                            :
                            <div className='flex flex-1'>
                                <div className='flex-1 max-sm:flex-[3]'>
                                    <div className='bg-red-500 h-[10vh] flex flex-col items-end justify-center rounded-[5vh] min-w-[9.5vh]' 
                                         style={{maxWidth:(key.percentage*2).toString().concat("%")}}>
                                        <p className='text-black text-[2.5vw] font-extralight p-6 max-sm:text-3xl'>{key.percentage}</p>
                                    </div>
                                </div>
                                <div className='flex-[3] max-sm:flex-[5]'></div>
                            </div>}
                        <div className='text-center max-sm:text-3xl mx-5 text-[2.5vw] sm:font-thin'>{key.bunks_available}</div>
                    </div>
                </div>
            ))}
        </div>
        )
}

