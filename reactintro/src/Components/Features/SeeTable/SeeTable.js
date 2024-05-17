import { BrowserRouter, Router, useNavigate, Routes, Route} from 'react-router-dom';
import { table_color } from '../../../constants/colors.js';

export default function SeeTable({tableData}){
    const navigate = useNavigate();
    console.log(tableData,"this is table Data in seetable")
    return(
        <div style={{flex:"5"}}>
        <table style={{backgroundColor:"transparent", borderRadius:"20px", border:"0px  solid rgb(0,0,0)", width:"100%", tableLayout:"fixed",}}>
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
                <tr>
                    <td colSpan="1" style={{backgroundColor:"black", }}></td>
                </tr>
            </thead></table>
        <div style={{flex:"5", display:"flex", flexDirection:"column"}}>
            <div style={{flexWrap:"wrap", overflow:"auto", height:"80vh"}}>
            <div style={{height:"0px"}}>
            </div>
            <table style={{backgroundColor:"transparent", borderRadius:"20px", border:"0px  solid rgb(0,0,0)", width:"100%", tableLayout:"fixed",}}>
            {/* <thead>
                <tr>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                </tr>
                <tr>
                    <td colSpan="1" style={{backgroundColor:"black", }}></td>
                </tr>
            </thead> */}
            <tbody style={{backgroundColor:"", padding:"20px", }}>
                {tableData.map((rowVal, rowId)=>(
                    <tr key={rowId}>
                        {Object.values(rowVal).map((cellValue, colIndex) => (
                            <td key={colIndex} style={{backgroundColor:"rgb(50,50,50)", opacity:"70%", paddingTop:"20px", paddingBottom:"20px", textAlign:"center", height:"20vh"}}>
                                <div style={{opacity:"200%"}}>{colIndex}
                                {rowId}
                                {tableData[rowId][colIndex]}</div>
                            </td>
                        ))}
                    </tr>

                ))}
            </tbody>
        </table>
        </div>
        </div>
        <button style={{backgroundColor:"#6eb898", border:"none", borderRadius:"20px", padding:"2vh"}} onClick={()=>{navigate('home/edit', {state:{tableData}})}}>Edit Table</button>
        </div>
    )
}