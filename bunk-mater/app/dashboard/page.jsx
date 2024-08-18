'use client'

import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../_utils/apiConstants";
import { useEffect } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

export default function Homepage(){
    const router=useRouter();
    const header={
        'Authorization':'Token '+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
      }
      useEffect(()=>{
        axios.get(API_BASE_URL + '/courses', {headers:header})
        .then(function (response) {
            if(response.status === 200){
                router.push('/dashboard/home')
            }
            else{
                console.log(response.data)
                router.push('/add')
            }
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
    },[])
    return(
        <div className="h-screen flex">welcome to dahsboard</div>
    );
}