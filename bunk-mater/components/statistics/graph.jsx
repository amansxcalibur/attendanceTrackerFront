'use client'//make sure to change it to server

import chroma from 'chroma-js';

export default function Graph(){
    const statData=[
        {
            "name": "maths",
            "percentage": 44,
            "bunks_available": 5
        },
        {
            "name": "English",
            "percentage": 94 ,
            "bunks_available": 10
        },
    ]
    console.log("in Perc")
    const f = chroma.scale(['red','yellow','green']);
    
    return(
        <>
            <div className='h-full w-full overflow-auto flex flex-col'>
                {statData.map((key, value)=>(
                    <div key={value} style={{display:"flex", flexDirection:"column", flex:"1"}}>
                        <div style={{textAlign:"center"}}>{key.percentage}%</div>
                        <div className='test' style={{height:"85%", }}>
                            <div className='h-5' style={{backgroundColor:"", width:(100-parseInt(key.percentage)).toString().concat("%")}}></div>
                            <div className='h-5' style={{backgroundColor:f((0.01*parseInt(key.percentage).toString())), margin:"1px", display:"flex", flexDirection:"column", borderRadius:"20px", width:(parseInt(key.percentage)).toString().concat("%"), flex:"1", color:'transparent', textAlign:"center"}}></div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            {key.name.slice(0,4)}
                        </div>
                    </div>
                ))}
            </div>
        </>
        )
}

