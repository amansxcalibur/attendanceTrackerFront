import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../../constants/apiConstants.js';
import axios from 'axios';
import Status from './Status.js';

export function queryForDate(dateCurr){
    console.log("yeaay yay`")
    const header={
        headers:{
            'Authorization':"Token "+JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME))
        }
    }
    const count=3
    console.log('count outside', count)
    axios.get(API_BASE_URL + '/datequery?date='+dateCurr, header)
    .then(function (response) {
        if(response.status === 200){
            console.log("hello datquey des", dateCurr)
            console.log(response.data)
            console.log("sending response to status")
            Status(response.data)
            count+=1;
            console.log(count)
        }
        // else if(response.code === 204){
        //     props.showError("Username and password do not match");
        // }
        else{
            console.log('ahh yes else part')
            console.log(response.data)
            // setState(response.data)
        }
    })
    .catch(function (error) {
        console.log("catchme in datequery")
        console.log(JSON.stringify(error));
        console.log(count+1, "this is count")
    });
}
