import chroma from 'chroma-js';

export default function Perc(){
    const data1=[
        {
            p1:"math",
            p2:"eng",
            p3:"phy",
        },
        {
            p1:"d2math",
            p2:"d2eng",
            p3:"d2phy",
        },
        {
            p1:"d3math",
            p2:"d3eng",
            p3:"d3phy",
        }
    ]
    const data2={
        math:"75",
        phy:"55",
        eng:"35",
        chem:"9",
        cse:"92",
        eee:"65"
    }
    const f = chroma.scale(['red','yellow','green']);
    
    return(
        <table style={{padding:"10px"}}>
            <thead>
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
                <td colSpan="2" style={{backgroundColor:"black",}}></td>
            </thead>
            <tbody>
                {Object.keys(data2).map((key, index) => (
                    <>
                    <tr key={index}>
                        <td>{key}</td>
                        <td style={{textAlign:"right"}}>{data2[key]}%</td>
                    </tr>
                    <td colSpan="2" style={{}}>
                        <div style={{display:"flex"}}>
                            <div style={{backgroundColor:f((0.01*parseInt(data2[key]).toString())), width:data2[key].concat("%"), minHeight:"10px", borderBottomLeftRadius:"20px", borderTopLeftRadius:"20px"}}></div>
                            <div style={{backgroundColor:"gray", width:(100-parseInt(data2[key])).toString().concat("%"), minHeight:"10px", borderBottomRightRadius:"20px", borderTopRightRadius:"20px"}}></div>
                        </div>
                    </td>
                    </>
                ))}
            </tbody>
        </table>
        )
}

