import { useState } from "react";
import  Select from "react-select";

export default function Drop(){
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
        console.log(data[0],"here you go");
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