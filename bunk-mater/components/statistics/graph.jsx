import chroma from 'chroma-js';

export default function Graph({statData}){
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
                        <div className='mr-9 min-w-[4.6vw] max-sm:text-2xl max-sm:min-w-16 max-sm:m-0'>
                            {key.name.slice(0,4)}
                        </div>
                        {parseInt(key.percentage)>74?
                            <div className='flex-1 flex h-[10vh]'>
                                <div className='flex-1 bg-[#55eb50] flex flex-col items-end justify-center rounded-[50px] mr-[-4.5vw]'>
                                    <p className='text-black text-[2.5vw] font-extralight p-6 max-sm:text-3xl'>75</p>
                                </div>
                                {/* <div className='h-[10vh] w-[10vh] flex flex-col items-center justify-center bg-[#55eb50] rounded-e-full'>
                                    <p className='text-black text-[2.5vw] font-extralight p-6 max-sm:text-3xl'>75</p>
                                </div> */}
                                <div className='flex-[3] flex'>
                                    <div id='graph' className='h-[10vh] flex justify-center items-center rounded-[50px] bg-emerald-600'
                                         style={{minWidth:(4*(parseInt(key.percentage)-75)).toString().concat("%"),
                                                 backgroundColor:f((0.01*4*(parseInt(key.percentage)-75).toString()))
                                         }}>
                                            <p className='text-black text-left text-[2.5vw] font-extralight p-6 max-sm:text-3xl bg-[#55eb50] bg-opacity-20 rounded-full h-[10vh] pt-4'>75</p>
                                            <p className='text-black text-right flex-1 text-[2.5vw] font-extralight p-6 max-sm:text-3xl'>{key.percentage}</p>
                                         </div>
                                    <div className='flex-1'></div>
                                </div>
                            </div>
                            :
                            <div className='flex flex-1'>
                                <div className='flex-1'>
                                    <div className='bg-red-500 h-[10vh] flex flex-col items-end justify-center rounded-[50px] min-w-[9.5vh]' 
                                         style={{maxWidth:(key.percentage).toString().concat("%")}}>
                                        <p className='text-black text-[2.5vw] font-extralight p-6 max-sm:text-3xl'>{key.percentage}</p>
                                    </div>
                                </div>
                                <div className='flex-[3]'></div>
                            </div>}
                        <div className='text-center max-sm:text-3xl mx-5 text-[2.5vw] sm:font-thin'>{key.bunks_available}</div>
                    </div>
                </div>
            ))}
        </div>
        )
}

