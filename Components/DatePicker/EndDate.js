import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
  
export default function EndDate() {
  const [end, setEndDate] = useState(new Date());
  
  return (
    <div style={{display:'block',margin:0, borderWidth:'8px',borderStyle:'solid',borderColor:'orange'}}>
      <DatePicker selected={end} onChange=
              {(date) => setEndDate(date)} />
    </div>
  );
}