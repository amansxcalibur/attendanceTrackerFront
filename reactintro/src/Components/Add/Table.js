import { useState } from 'react';
import  CreatableSelect from "react-select/creatable";
import { BrowserRouter, Router, useNavigate, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiConstants';


const Table=()=>{
  const navigate=useNavigate();
    // var tableData=[
    //     ["m0",'t0',"w0","th0",'f0',"sa0","su0"],
    //     ["m1",'t1',"w1","th1",'f1',"sa1","su1"],
    //     ["m2",'t2',"w2","th2",'f2',"sa2","su2"],
    //     ["m3",'t3',"w3","th3",'f3',"sa3","su3"],
    // ]
    var tableData=[[null,null,null,null,null]]
    const [stater, setStater] = useState(tableData)
    const [allDet,setAllDet]=useState(
      { "name":null,
        "shared":"False",
        "start_date":null,
        "end_date":null,
        "courses_data":tableData,
    })
    const handleFR=({data, row,col})=>{
      tableData=stater
      console.log("I SEE THE LIGHT")
      if (data==null)
        tableData[row][col]=data.label
      else
        tableData[row][col]=null;
      setStater(tableData)
      console.log(data.label, row, col, tableData[row][col], stater[row][col])
      setAllDet(prevState=>({
        ...prevState,
        "courses_data":stater,
      }))
      console.log("here is alldet", allDet)
      
    }
    function saveTable(){
      console.log("saved", stater)
      console.log('all data',allDet)

    //   //removing empty
    //   let thirdparty=allDet.courses_data;
    //   //removing null from each row
    //   function clearing(value, index, thirdparty){
    //       thirdparty[index]=value.filter(n=>n);
    //   }
    // thirdparty.forEach(clearing);
    // //removing empty arrays and setState
    // setAllDet(prevState=>({
    //   ...prevState,
    //   "courses_data":thirdparty.filter(n=>n.length>0) 
    // }))
      
    const header={
        'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
      }
      axios.post(API_BASE_URL+'/collection',
          allDet
          ,{headers:header})
      .then((response)=>{
          console.log(response.status, response.data)
      })
      .catch((error)=>{
          console.log("caught an error in post\n",error)
      })
    }
    function Add(){
      setStater([...stater, [null, null, null, null, null, null, null],])
      console.log(stater.length, stater)
    }
    function handleChange(e){
      const { id, value } = e.target;
      setAllDet(prevState => ({
          ...prevState,
          [id]: value 
      }));
  }
    return(
      <>
      {/* <form> */}
        <div>
          <label htmlFor='name'>Name</label>
          <input id='name' type='text' placeholder='Name' value={allDet.name} onChange={handleChange} required></input>
          <label htmlFor='start_date'>Start Date</label>
          <input type='date' id='start_date' value={allDet.start_date} onChange={handleChange} required></input>
          <label htmlFor='end_date'>End Date</label>
          <input type='date' id='end_date' value={allDet.end_date} onChange={handleChange} required></input>
        </div>
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
                <tr>
                  <td colSpan="1" style={{backgroundColor:"black", }}></td>
                </tr>
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
        <button type='submit' style={{flex:0, minWidth:100}} onClick={()=>{saveTable(); navigate('/home')}}>Add table</button>
        <button type='submit' style={{minWidth:100}} onClick={()=>{navigate('/home')}}>Cancel</button>
        </div>
      {/* </form> */}
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
        console.log(data.label, row, col, "in handleSelect");
        handleFR({data, row, col});
      }

      return (
        <div className="App" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignitems:"center",}}>
          <div className="dropdown-container" style={{}}>
            <CreatableSelect
              options={optionList}
              placeholder="Select subject"
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
              isClearable={true}
            />
          </div>
        </div>
      );
}
export default Table;