

export default function Leaves({statdata}){
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
    //     {
    //         "name": "history",
    //         "percentage": 100,
    //         "bunks_available": 4
    //     },
    //     {
    //         "name": "chemistry",
    //         "percentage": 66,
    //         "bunks_available": 10
    //     },
    //     {
    //         "name": "physics",
    //         "percentage": 30,
    //         "bunks_available": 15
    //     },
    //     {
    //         "name": "algebra",
    //         "percentage": 83,
    //         "bunks_available": 5
    //     },
    //     {
    //         "name": "literature",
    //         "percentage": 75,
    //         "bunks_available": 10
    //     },
    //     {
    //         "name": "geography",
    //         "percentage": 9,
    //         "bunks_available": 4
    //     },
    //     {
    //         "name": "biology",
    //         "percentage": 100,
    //         "bunks_available": 5
    //     },
    //     {
    //         "name": "computer science",
    //         "percentage": 100,
    //         "bunks_available": 5
    //     },
    //     {
    //         "name": "geometry",
    //         "percentage": 100,
    //         "bunks_available": 5
    //     },
    //     {
    //         "name": "world history",
    //         "percentage": 100,
    //         "bunks_available": 4
    //     },
    //     {
    //         "name": "art",
    //         "percentage": 100,
    //         "bunks_available": 5
    //     },
    //     {
    //         "name": "calculus",
    //         "percentage": 100,
    //         "bunks_available": 5
    //     },
    //     {
    //         "name": "US history",
    //         "percentage": 100,
    //         "bunks_available": 4
    //     }
    // ]
    return(
        <>
        <h2>Bunks Left</h2>
        <div style={{justifyContent:"center",}}>
        <div style={{backgroundColor:"#DDDDDD", display:"flex", flexWrap:"wrap", overflow:"auto", height:"300px", }}>
            {statdata.map((key, value)=>(
                <div key={value} style={{backgroundColor:"white", marginLeft:"7px", marginTop:"7px", width:"162px", height:"182px", display:"flex", flexDirection:"column", borderRadius:"20px"}}>
                    <div style={{marginLeft:"8px", marginTop:"0px"}}>
                        {key.name}
                    </div>
                    <div style={{borderRadius:"50%", border:"5px solid", borderColor:"black", flex:"1", margin:"8px", justifyContent:"center", display:"flex", alignItems:"center", fontSize:"50px"}}>
                        {key.bunks_available}
                    </div>
                </div>
            ))}
        </div>
        </div>
        </>
        // <table style={{backgroundColor:"",}}>
                
        //         <tbody style={{backgroundColor:"", padding:"20px", width:"100%"}}>
                    
        //             {Object.keys(data).map((key, index) => (
        //                 <>
        //                 <tr style={{backgroundColor:"white", margin:"1px", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(100px,1fr))"}} key={index}>
        //                     <td style={{backgroundColor:"", paddingLeft:"10px"}}>{key}</td>
        //                     <td style={{backgroundColor:"", paddingRight:"10px", textAlign:"right"}}>{data[key]}</td>
        //                 </tr>
                        
        //                 </>
        //             ))}
                    
        //         </tbody>
        //     </table>
    )
}