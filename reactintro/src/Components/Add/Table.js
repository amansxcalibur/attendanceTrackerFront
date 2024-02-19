import { useState } from 'react';
import  Select from "react-select";
import { BrowserRouter, Router, useNavigate, Routes, Route} from 'react-router-dom';


const Table=()=>{
  const navigate=useNavigate();
    var tableData=[
        ["m0",'t0',"w0","th0",'f0',"sa0","su0"],
        ["m1",'t1',"w1","th1",'f1',"sa1","su1"],
        ["m2",'t2',"w2","th2",'f2',"sa2","su2"],
        ["m3",'t3',"w3","th3",'f3',"sa3","su3"],
    ]
    const [stater, setStater] = useState(tableData)
    const handleFR=({data, row,col})=>{
      tableData=stater
      console.log("I SEE THE LIGHT")
      tableData[row][col]=data.label
      setStater(tableData)
      console.log(data.label, row, col, tableData[row][col], stater[row][col])
      
    }
    function Add(){
      setStater([...stater, ["null", "null", "null"," null", "null", "null", "null"],])
      console.log(stater.length)
    }
    return(
      <>
        <table style={{backgroundColor:"red", borderRadius:"20px", border:"1px solid rgb(0,0,0)", width:"100%", }}>
            <thead>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
                <td colSpan="1" style={{backgroundColor:"black", }}></td>
            </thead>
            <tbody style={{backgroundColor:"", padding:"20px", }}>
                {stater.map((rowVal, rowId)=>(
                    <tr key={rowId}>
                        {Object.values(rowVal).map((cellValue, colIndex) => (
                            <td key={colIndex}>
                                {colIndex}
                                {rowId}
                                {stater[rowId][colIndex]}
                                <Drop handleFR={handleFR} row={rowId} col={colIndex}/>
                            </td>
                            ))}
                        </tr>

                ))}
            </tbody>
        </table>

        <div style={{backgroundColor:"blue", display:"flex", padding:"5px"}}>
                  <button style={{flex:0, minWidth:100}} onClick={Add}>Add row</button></div>
                  <div>
                  <button style={{flex:0, minWidth:100}} >Add table</button>
                  <button style={{minWidth:100}} onClick={()=>{navigate('/')}}>Cancel</button>
                  </div>
        </>
    )
}

const Drop=({handleFR, row, col})=>{
    const optionList = [
        { value: "maths", label: "Maths" },
        { value: "phy", label: "Physics" },
        { value: "comp", label: "Computer" },
        { value: "chem", label: "Chemistry" },
        { value: "eng", label: "English" }
      ];
      const [selectedOptions, setSelectedOptions] = useState();
      
      function handleSelect(data){
        setSelectedOptions(data);
        console.log(data.label, row, col);
        handleFR({data, row, col});
      }

      return (
        <div className="App" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignitems:"center",}}>
          <div className="dropdown-container" style={{}}>
            <Select
              options={optionList}
              placeholder="Select subject"
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
            />
          </div>
        </div>
      );
}
export default Table;