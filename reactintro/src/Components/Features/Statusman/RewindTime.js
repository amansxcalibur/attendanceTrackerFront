import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function BasicDatePicker({dateCurr, setDateCurr}) {
  console.log(typeof (dateCurr), dateCurr.format("DD-MM-YYYY"), "in basicdatepicker")
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
       <DatePicker 
          label="REWIND TIME"
          value={dateCurr.format("DD-MM-YYYY")===dayjs().format("DD-MM-YYYY")?null:dateCurr}
          onChange={(newValue)=>setDateCurr(newValue)}
       />
      </DemoContainer>
    </LocalizationProvider>
  );
}