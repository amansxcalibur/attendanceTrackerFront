'use client'//make sure to change it to server

import chroma from 'chroma-js';

export default function Graph(){
    const statData=[
        {
            "name": "Maths",
            "percentage": 44,
            "bunks_available": 5
        },
        {
            "name": "English",
            "percentage": 94 ,
            "bunks_available": 10
        },
        {
            "name": "Phys",
            "percentage": 30 ,
            "bunks_available": 10
        },
        {
            "name": "Maths",
            "percentage": 44,
            "bunks_available": 5
        },
        {
            "name": "English",
            "percentage": 94 ,
            "bunks_available": 10
        },
        {
            "name": "Phys",
            "percentage": 30 ,
            "bunks_available": 10
        },

        {
            "name": "Maths",
            "percentage": 44,
            "bunks_available": 5
        },
        {
            "name": "English",
            "percentage": 94 ,
            "bunks_available": 10
        },
        {
            "name": "Phys",
            "percentage": 30 ,
            "bunks_available": 10
        },
    ]
    console.log("in Perc")
    const f = chroma.scale(['red','yellow','green']);
    
    return(
        <div className='h-full w-full my-[2vw]'>
            {statData.map((key, value)=>(
                <div key={value} className='flex flex-col flex-1 text-[1.5vw] mb-[2vw]'>
                    <div className='flex items-center'>
                        <div className='mr-9 min-w-[4.6vw] '>
                            {key.name.slice(0,4)}
                        </div>
                        <div className='h-[10vh] flex flex-col items-end justify-center rounded-[50px] flex-1' style={{backgroundColor:f((0.01*parseInt(key.percentage).toString())), width:(parseInt(key.percentage)).toString().concat("%")}}>
                            <p className='text-black text-[2.5vw] font-extralight p-6'>{key.percentage}</p>
                        </div>
                        <div style={{width:(100-parseInt(key.percentage)).toString().concat("%")}}></div>
                        <div className='text-center'>{key.bunks_available}</div>
                    </div>
                </div>
            ))}
        </div>
        )
}

