import { useState } from 'react';
import  Select from "react-select";
import { BrowserRouter, Router, useNavigate, Routes, Route} from 'react-router-dom';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../../../constants/apiConstants';
import axios from 'axios';

function Table(tableData){
    const navigate= useNavigate();
    // var tableData=[
    //     ["m0",'t0',"w0","th0",'f0',"sa0","su0"],
    //     ["m1",'t1',"w1","th1",'f1',"sa1","su1"],
    //     ["m2",'t2',"w2","th2",'f2',"sa2","su2"],
    //     ["m3",'t3',"w3","th3",'f3',"sa3","su3"],
    // ]
    console.log(tableData,"in Table()")

    const [stater, setStater] = useState(tableData)
    var thirdparty=[]
    console.log(stater, 'this is stater in Table in edit')
    
    const handleFR=({data, row,col})=>{
      thirdparty=stater
      console.log("I SEE THE LIGHT")
      thirdparty.tableData.tableData[row][col]=data.label
      setStater(thirdparty)
      console.log(data.label, row, col, thirdparty.tableData.tableData[row][col], stater.tableData.tableData[row][col])
      
    }

  //   function handleChange(e){
  //     const { id, value } = e.target;
  //     setAllDet(prevState => ({
  //         ...prevState,
  //         [id]: value 
  //     }));
  // }

    function Add(){
      setStater([...stater, [null,null,null,null,null,null,null],])
      console.log(stater.length)
    }

    function handlClick(){
      console.log('axios posting',stater.tableData.tableData)
      // const header={
      //   'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
      // }
      // axios.patch(API_BASE_URL+'/collection', {
      //     "courses_data": stater.tableData.tableData
      // },{headers:header})
      // .then((response)=>{
      //     console.log(response.status, response.data)
      // })
      // .catch((error)=>{
      //     console.log("caught an error in post\n",error)
      // })
    }
    return(
      <>
      <div>
          {/* <label htmlFor='name'>Name</label>
          <input id='name' type='text' placeholder='Name' value={allDet.name} onChange={handleChange} required></input> */}
          {/* <label htmlFor='start_date'>Start Date</label>
          <input type='date' id='start_date' value={allDet.start_date} onChange={handleChange} required></input>
          <label htmlFor='end_date'>End Date</label>
          <input type='date' id='end_date' value={allDet.end_date} onChange={handleChange} required></input> */}
        </div>
        <table style={{backgroundColor:"red", borderRadius:"20px", border:"1px solid rgb(0,0,0)", width:"100%", padding:"10px"}}>
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
                <tr>
                  <td colSpan="1" style={{backgroundColor:"black", }}></td>
                </tr>
            </thead>
            <tbody style={{backgroundColor:"", padding:"20px", }}>
                {stater.tableData.tableData.map((rowVal, rowId)=>(
                    <tr key={rowId}>
                        {Object.values(rowVal).map((cellValue, colIndex) => (
                            <td key={colIndex}>
                                {colIndex}
                                {rowId}
                                {stater.tableData.tableData[rowId][colIndex]}
                                <Drop placer={stater.tableData.tableData} handleFR={handleFR} row={rowId} col={colIndex}/>
                            </td>
                            ))}
                        </tr>

                ))}
            </tbody>
        </table>

        <div style={{backgroundColor:"blue", display:"flex", padding:"5px"}}>
                  <button style={{flex:0, minWidth:100}} onClick={Add}>Add row</button>
                  </div>
        <div>
            <button onClick={()=>handlClick()}>Save</button>
            <button onClick={()=>{navigate('/')}}>Cancel</button>
        </div>
        </>
    )
}

const Drop=({placer, handleFR, row, col})=>{
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
              placeholder={placer[row][col]}
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
            />
          </div>
        </div>
      );
}
export default Table;