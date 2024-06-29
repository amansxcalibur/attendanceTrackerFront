'use client'//make sure to change it to server

import chroma from 'chroma-js';

export default function Graph({statData}){
    console.log("in Perc")
    const f = chroma.scale(['red','yellow','green']);

    const handleGraphWidth=(key)=>{
        if (parseInt(key.percentage)<75){
            return (parseInt(key.percentage)).toString().concat("%");
        }else{
            return "100%";
        }
    }
    
    return(
        <div className='h-full w-full my-[2vw]'>
            {statData.map((key, value)=>(
                <div key={value} className='flex flex-col flex-1 text-[1.5vw] mb-[2vw]'>
                    <div className='flex items-center'>
                        <div className='mr-9 min-w-[4.6vw] '>
                            {key.name.slice(0,4)}
                        </div>
                        {/* <div className='h-[10vh] flex flex-col items-end justify-center rounded-[50px] flex-1' style={{backgroundColor:f((0.01*parseInt(key.percentage).toString())), maxWidth:handleGraphWidth(key)}}>
                            <p className='text-black text-[2.5vw] font-extralight p-6'>{key.percentage}</p>
                        </div>
                        <div className='h-[10vh] flex flex-col items-end justify-center rounded-[50px] flex-1' style={{backgroundColor:f((0.01*parseInt(key.percentage).toString())), maxWidth:(parseInt(key.percentage)).toString().concat("%")}}>
                            <p className='text-black text-[2.5vw] font-extralight p-6'>{key.percentage}</p>
                        </div>
                        <div style={{width:(100-parseInt(key.percentage)).toString().concat("%")}}></div> */}
                        {/* <div className='absolute z-10 flex-1 flex justify-center '>
                            <p className='text-black text-[2.5vw] font-extralight p-6'>{key.percentage}</p>
                        </div> */}
                        {parseInt(key.percentage)>74?
                            <div className='flex-1 flex h-[10vh]'>
                                <div className='flex-1 bg-[#68df64] flex flex-col items-end justify-center rounded-s-[50px]'></div>
                                <div className='h-[10vh] w-[10vh] flex flex-col items-center justify-center bg-[#55eb50] rounded-e-full'>
                                    <p className='text-black text-[2.5vw] font-extralight p-6'>75</p>
                                </div>
                                <div className='flex-[3] flex'>
                                    <div className='h-[10vh] flex flex-col items-end justify-center rounded-[50px] bg-emerald-600' 
                                         style={{minWidth:(4*(parseInt(key.percentage)-75)).toString().concat("%"),
                                                 backgroundColor:f((0.01*4*(parseInt(key.percentage)-75).toString()))
                                         }}>
                                            <p className='text-black text-[2.5vw] font-extralight p-6'>{key.percentage}</p>
                                         </div>
                                    <div className='flex-1'></div>
                                </div>
                            </div>
                            :
                            <div className='flex flex-1'>
                                <div className='flex-1'>
                                    <div className='bg-red-500 h-[10vh] flex flex-col items-end justify-center rounded-[50px]' style={{maxWidth:(key.percentage).toString().concat("%")}}>
                                        <p className='text-black text-[2.5vw] font-extralight p-6'>{key.percentage}</p>
                                    </div>
                                </div>
                                <div className='flex-[3]'></div>
                            </div>}
                        <div className='text-center'>{key.bunks_available}</div>
                    </div>
                </div>
            ))}
        </div>
        )
}

