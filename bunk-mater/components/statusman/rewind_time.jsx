import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export default function BasicDatePicker({dateCurr, setDateCurr}) {
  // console.log(typeof (dateCurr), dateCurr.format("DD-MM-YYYY"), "in basicdatepicker")
  const color="white";
  const newTheme = (theme) => createTheme({
    ...theme,
    components: {
      MuiIconButton: {
        styleOverrides: {
          sizeMedium: {
            color
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color
          }
        }
      },
      MuiDate:{
        styleOverrides:{
          root:{
            color
            
          }
        }
      }
    }
  })
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <ThemeProvider theme={newTheme}>
          <DatePicker 
              label="REWIND TIME"
              value={dateCurr.format("DD-MM-YYYY")===dayjs().format("DD-MM-YYYY")?null:dateCurr}
              onChange={(newValue)=>setDateCurr(newValue)}
          />
       </ThemeProvider>
      </DemoContainer>
    </LocalizationProvider>
  );
}