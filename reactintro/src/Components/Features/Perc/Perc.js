import chroma from 'chroma-js';
import './Perc.css'

export default function Perc({statData}){
    // const statdata=[
    //     {
    //         "name": "maths",
    //         "percentage": 44,
    //         "bunks_available": 5
    //     },
    //     {
    //         "name": "English",
    //         "percentage": 94 ,
    //         "bunks_available": 10
    //     },
    // ]
    console.log("in Perc")
    const f = chroma.scale(['red','yellow','green']);
    
    return(
        <>
            <div style={{backgroundColor:"", color:"black", display:"flex", overflow:"auto", height:"100%", width:"100%"}}>
                {statData.map((key, value)=>(
                    <div key={value} style={{display:"flex", flexDirection:"column", flex:"1"}}>
                        <div style={{textAlign:"center"}}>{key.percentage}%</div>
                        <div className='test' style={{height:"85%", }}>
                            <div style={{backgroundColor:"", height:(100-parseInt(key.percentage)).toString().concat("%")}}></div>
                            <div style={{backgroundColor:f((0.01*parseInt(key.percentage).toString())), margin:"1px", display:"flex", flexDirection:"column", borderRadius:"20px", height:(parseInt(key.percentage)).toString().concat("%"), flex:"1", color:'transparent', textAlign:"center"}}></div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            {key.name.slice(0,3)}
                        </div>
                    </div>
                ))}
            </div>
        </>
        // <table style={{padding:"10px", width:'100%'}}>
        //     <thead>
        //         <tr>
        //             <th>Key</th>
        //             <th>Value</th>
        //         </tr>
        //         <td colSpan="2" style={{backgroundColor:"black",}}></td>
        //     </thead>
        //     <tbody>
        //         {Object.keys(data2).map((key, index) => (
        //             <>
        //             <tr key={index}>
        //                 <td>{key}</td>
        //                 <td style={{textAlign:"right"}}>{data2[key]}%</td>
        //             </tr>
        //             <td colSpan="2" style={{}}>
        //                 <div style={{display:"flex"}}>
        //                     <div style={{backgroundColor:f((0.01*parseInt(data2[key]).toString())), width:data2[key].concat("%"), minHeight:"10px", borderBottomLeftRadius:"20px", borderTopLeftRadius:"20px"}}></div>
        //                     <div style={{backgroundColor:"gray", width:(100-parseInt(data2[key])).toString().concat("%"), minHeight:"10px", borderBottomRightRadius:"20px", borderTopRightRadius:"20px"}}></div>
        //                 </div>
        //             </td>
        //             </>
        //         ))}
        //     </tbody>
        // </table>
        )
}

