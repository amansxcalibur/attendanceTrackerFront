

export default function Leaves(){
    const data={
        math:"0",
        phy:"7",
        eng:"-20",
        chem:"10"
    }
    return(
        <table style={{backgroundColor:"",}}>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th style={{textAlign:"right"}}>Leaves Left</th>
                    </tr>
                    <td colSpan="2" style={{backgroundColor:"black", }}></td>
                </thead>
                <tbody style={{backgroundColor:"", padding:"20px"}}>
                    {Object.keys(data).map((key, index) => (
                        <>
                        <tr style={{}} key={index}>
                            <td style={{backgroundColor:"", paddingLeft:"10px"}}>{key}</td>
                            <td style={{backgroundColor:"", paddingRight:"10px", textAlign:"right"}}>{data[key]}</td>
                        </tr>
                        
                        </>
                    ))}
                </tbody>
            </table>
    )
}