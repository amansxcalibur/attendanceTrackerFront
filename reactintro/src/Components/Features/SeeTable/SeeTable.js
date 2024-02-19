import { BrowserRouter, Router, useNavigate, Routes, Route} from 'react-router-dom';

export default function SeeTable({tableData}){
    const navigate = useNavigate();
    
    return(
        <div style={{flex:"5"}}>
            <div style={{height:"0px"}}></div>
            <table style={{backgroundColor:"red", borderRadius:"20px", border:"1px solid rgb(0,0,0)", width:"100%", tableLayout:"fixed"}}>
            <thead>
                <tr>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    {/* <th>Sat</th>
                    <th>Sun</th> */}
                </tr>
                <td colSpan="1" style={{backgroundColor:"black", }}></td>
            </thead>
            <tbody style={{backgroundColor:"", padding:"20px", }}>
                {tableData.map((rowVal, rowId)=>(
                    <tr key={rowId}>
                        {Object.values(rowVal).map((cellValue, colIndex) => (
                            <td key={colIndex} style={{backgroundColor:"green", paddingTop:"20px", paddingBottom:"20px", textAlign:"center", height:"30px"}}>
                                {colIndex}
                                {rowId}
                                {tableData[rowId][colIndex]}
                            </td>
                        ))}
                    </tr>

                ))}
            </tbody>
        </table>
        <button onClick={()=>{navigate('/edit')}}>Edit Table</button>
        </div>
    )
}