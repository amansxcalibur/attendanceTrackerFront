import Table from './Table.js'
export default function Add(){
    const data=[
        "maths", "eng", "phy", "chem",
    ]
    return(
        <div style={{backgroundColor:"brown", display:"flex", flex:"1", paddingLeft:"10px", paddingRight:"10px"}}>
            <div style={{backgroundColor:"purple",display:"flex", flexDirection:"column", flex:"1"}}>
                <h1>Table</h1>
                <div style={{backgroundColor:"",display:"flex", flex:"1", gap:"10px"}}>
                    <div style={{backgroundColor:"cyan",flex:"4",}}>
                        Table
                        <Table/>
                        </div>
                    <div style={{backgroundColor:"cyan",flex:"1", }}>
                        Add subs
                        <table style={{backgroundColor:"red", width:"100%", borderRadius:"20px", border:"1px solid rgb(0,0,0)"}}>
                            <thead>
                                <tr>
                                    <th>Key</th>
                                </tr>
                                <tr>
                                    <td colSpan="1" style={{backgroundColor:"black", }}></td>
                                </tr>
                            </thead>
                            <tbody style={{backgroundColor:"", padding:"20px", }}>
                                {Object.keys(data).map((key, index) => (
                                    <>
                                    <tr style={{}} key={index}>
                                        <td style={{backgroundColor:"", paddingRight:"10px", textAlign:"center"}}>{data[key]}</td>
                                    </tr>
                                    
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}