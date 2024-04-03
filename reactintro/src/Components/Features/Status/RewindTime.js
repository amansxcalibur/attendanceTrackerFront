import * as React from 'react';
import {queryForDate} from './queryForDate';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { type } from '@testing-library/user-event/dist/type';
import dayjs from 'dayjs';
import { useState } from 'react';

function ButtonField(props) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;
console.log();
  return (
    <Button style={{backgroundColor:"#DDDDDD", color:"black"}}
      variant="outlined"
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.((prev) => !prev)}
    >
      {label !== dayjs().format('DD/MM/YYYY') ? `${label}` : 'Rewind Time'}
    </Button>
  );
}

function ButtonDatePicker(props) {
  const [date, setDate] = useState()
  const [open, setOpen] = React.useState(false);
  const dater=()=>{
    console.log(props.value.format('YYYY-MM-DD'));
    setOpen(false);
    queryForDate(props.value.format('YYYY-MM-DD'));
  }
  return (
    <DatePicker
      slots={{ field: ButtonField, ...props.slots }}
      slotProps={{ field: { setOpen } }}
      {...props}
      open={open}
      onClose={() => dater()}
      onOpen={() => setOpen(true)}
    />
  );
}

export default function PickerWithButtonField() {
  const [value, setValue] = React.useState(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ButtonDatePicker
        label={value.format('DD/MM/YYYY')}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
}