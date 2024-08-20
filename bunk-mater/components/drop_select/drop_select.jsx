'use client'

import Select from "react-select";
import { useEffect, useState } from "react";

export default function Drop({tableData, handleUpdate, row, col, statusman, optionList}){
  const [selectedOptions, setSelectedOptions] = useState();
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(()=>{
    setWindowHeight(window.innerHeight);
  },[])
  
  function handleSelect(data){
    setSelectedOptions(data);
    console.log(data.label, row, col);
    handleUpdate({data, row, col});
  }

  return (
    <div className="">
      <div className="dropdown-container">
        <Select 
          options={optionList}
          placeholder={tableData[row][col]}
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          styles={{
            control: (baseStyles, state)=>(windowHeight<640)?({
              ...baseStyles,
              borderColor: state.isFocused?"white":"transparent",
              height:"12vh",
              backgroundColor:tableData[row][col]==null?"":"#202224",
              color:"",
              display:"flex",
              flexDirection:"column",
              overflow:"scroll",
              fontSize:statusman?"30px":""
              //wordBreak:"break-all"
            }):
            ({
              ...baseStyles,
              borderColor: state.isFocused?"white":"transparent",
              height:statusman==true?"8.7vw":"13vw",
              width: statusman==true?"29.2vw":"",
              backgroundColor:tableData[row][col]==null?"":"#202224",
              display:"flex",
              fontSize:statusman?"1.5vw":""
            }),
            valueContainer: (baseStyles, state)=>(windowHeight<640)?({
              ...baseStyles,
              overflow:"scroll",
            }):
            ({
              ...baseStyles,
              overflow:"auto",
            }),
            menu: (baseStyles, state)=>({
              ...baseStyles,
              backgroundColor:"black",
            }),
            option: (baseStyles, { isFocused, isSelected }) => ({
              ...baseStyles,
                backgroundColor: isSelected ? "green" : isFocused ? "#00AA4A" : undefined
            }),
            placeholder: (baseStyles, state)=>({
              ...baseStyles,
              color:"white"
            }),
            singleValue: (baseStyles, state)=>({
              ...baseStyles,
              color:"#99FF9B"
            }),
            input: (baseStyles, state)=>({
              ...baseStyles,
              color:"white",
              fontSize:statusman?"1.5vw":""
            })
          }}
        />
      </div>
    </div>
  );
}