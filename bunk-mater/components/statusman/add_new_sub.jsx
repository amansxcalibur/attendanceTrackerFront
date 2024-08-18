import { useEffect, useState } from "react";
import Popup from '../popup/popup';
import Drop from '../drop_select/drop_select';
import CheckSvg from '../svg/check'
import XSvg from '../svg/x'
import axios from "axios";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "@/app/_utils/apiConstants";

export default function AddNewSubs({dateCurr, dateQuer}){
    const [addNewSub, setAddNewSub] = useState("Save");
    const [optionList, setOptionList] = useState([])
    const [message, setMessage] = useState('Add another subject')

    const days=['sun','mon','tue','wed','thu','fri','sat',]

    useEffect(()=>{
        if (dateQuer.length==0){
            var [YYYY, MM, DD] = dateCurr.format("YYYY-MM-DD").split('-');
            var mydate = new Date(YYYY, MM-1, DD); 
            console.log(days[mydate.getDay()]);
            setOptionList([
                {label:'Monday', value:1},
                {label:'Tuesday', value:2},
                {label:'Wednesday', value:3},
                {label:'Thursday', value:4},
                {label:'Friday', value:5},
              ]);
            setMessage("Choose which week-day's timetable to use")
        }else if (message!="Add another subject"){ 
            setOptions({setOptionList})
            setMessage("Add another subject")
          }
    },[dateQuer])

    return(
        <>
            <div className='h-[8.9vw] flex mt-1 max-sm:h-[15vh] bg-[#0c0c0c] hover:bg-black border-dashed border-[#727272] border-[2px] rounded-[1vw]'> 
                {addNewSub=="Save" || addNewSub=="Discard"?
                    <button className={`flex-1 flex text-[1.5vw] items-center rounded-l-lg px-[3vw] max-sm:text-3xl text-[#727272] hover:text-white max-sm:font-light`} 
                            onClick={()=>{setAddNewSub("Cancel")}}>
                        {message}
                    </button>:
                    <Drop tableData={[{}]} row={0} col={0} statusman={true} optionList={optionList}></Drop>
                }
            </div>
            <div className={`max-sm:hidden flex justify-end ${addNewSub=="Save" || addNewSub=="Discard"?"hidden":""}`}>
                <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                    <Popup compToPass={<CheckSvg/>} setDesCheck={setAddNewSub} message={{message:"Are you sure you want to save the changes?", opt:["Cancel", "Save"]}}/>
                </div>
                <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                    <Popup compToPass={<XSvg/>} setDesCheck={setAddNewSub} message={{message:"Are you sure you want to discard the changes?", opt:["Cancel", "Discard"]}}/>
                </div>
            </div>
        </>
    )
}

function setOptions({setOptionList}){
    var thirdparty=[];
    var options=[]
    const header={
        'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
    }
    axios.get(API_BASE_URL + '/statquery', { headers: header })
      .then(function(response){
        if (response.status === 200) {
            thirdparty=response.data;
            for (let i=0; i<thirdparty.length; i++){
                if (!options.includes(thirdparty[i].name)){
                    options.push({label: thirdparty[i]["name"], value: thirdparty[i]["name"]})
                }
            }
            setOptionList(options);
          }
        })
        .catch(function(error) {
          console.error("Error fetching data:", error);
        }
     );
}