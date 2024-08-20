import { useEffect, useState } from "react";
import Popup from '../popup/popup';
import Drop from '../drop_select/drop_select';
import CheckSvg from '../svg/check'
import XSvg from '../svg/x'
import axios from "axios";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "@/app/_utils/apiConstants";
import dayjs from "dayjs";

export default function AddNewSubs({dateCurr, dateQuerForDisp, refreshCont, setRefreshCont}){
    const [addNewSub, setAddNewSub] = useState("");
    const [newSub, setNewSub] = useState('');
    const [optionList, setOptionList] = useState([])
    const [message, setMessage] = useState('Add another subject')
    const [tempFixSaturday, setTempFixSaturday] = useState(false)
    const days=['sun','mon','tue','wed','thu','fri','sat',]

    useEffect(()=>{
        if (dateQuerForDisp.length==0){
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
    },[dateQuerForDisp])

    useEffect(()=>{
        if (addNewSub == 'Save'){
            var payload = {}
            var endpoint = ""
            var [YYYY, MM, DD] = dateCurr.format("YYYY-MM-DD").split('-');
            var mydate = new Date(YYYY, MM-1, DD);
            if (dateQuerForDisp.length==0){
                // console.log(mydate.getDay());
                payload = {
                    "day_of_week":mydate.getDay()
                };
                endpoint = "schedule_selector"
            }else{
                payload = {
                    "name" : newSub,
                    "schedules": {
                        "day_of_week": mydate.getDay()
                    }
                };
                endpoint="courses"
            }
            if (newSub != '' || endpoint=='schedule_selector'){
                const header={
                    'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
                }
                axios.post(API_BASE_URL + '/' + endpoint, payload, {headers : header})
                .then((response)=>{
                    if(response.status===200){
                        console.log("subject updated")
                        if(refreshCont==[]){
                            setRefreshCont(['hello'])
                        }else{
                            setRefreshCont([]);
                        }
                        setNewSub('');
                        setAddNewSub('');
                        console.log('addnewsub getting reset again??')
                    }
                })
                .catch((error)=>{
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status)
                }})
                console.log(payload)
            }else{
                alert('No empty subject name please.')
                console.log(newSub, addNewSub, 'this')
            }
        }
    },[addNewSub])

    useEffect(()=>{
        setTempFixSaturday(dateCurr.format("YYYY-MM-DD")==dayjs().format("YYYY-MM-DD"))
    },[dateCurr])

    const handleUpdate=({data,row,col})=>{
        console.log
        setNewSub(data.value);
    }

    return(
        <>
            <div className={`h-[8.9vw] flex mt-1 max-sm:h-[15vh] bg-[#0c0c0c] hover:bg-black border-dashed border-[#727272] border-[2px] rounded-[1vw] ${tempFixSaturday?"":"hidden"}`}> 
                {addNewSub=="" || addNewSub=="Discard"?
                    <button className={`flex-1 flex text-[1.5vw] items-center rounded-l-lg px-[3vw] max-sm:text-3xl text-[#727272] hover:text-white max-sm:font-light`} 
                            onClick={()=>{setAddNewSub("Cancel")}}>
                        {message}
                    </button>:
                    <Drop tableData={[{}]} handleUpdate={handleUpdate} row={0} col={0} statusman={true} optionList={optionList}></Drop>
                }
            </div>
            <div className={`max-sm:hidden flex justify-end ${addNewSub=="" || addNewSub=="Discard"?"hidden":""}`}>
                <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                    <Popup compToPass={<CheckSvg/>} setDecisionCheck={setAddNewSub} message={{message:"Are you sure you want to save the changes?", opt:["Cancel", "Save"]}}/>
                </div>
                <div className="rounded-full h-16 w-16 flex justify-center items-center overflow-hidden">
                    <Popup compToPass={<XSvg/>} setDecisionCheck={setAddNewSub} message={{message:"Are you sure you want to discard the changes?", opt:["Cancel", "Discard"]}}/>
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