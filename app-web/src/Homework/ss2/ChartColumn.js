import PrintCB4 from "./PrintCB4";
import React from 'react'
import { FaMonero } from "react-icons/fa";

export default function ChartColumn() {
  const day={
    mon:"MON",
    tue:"TUE",
    wed:'WED',
    thu:"THU",
    fri:"FRI",
  };
 
  return (
    <>
        <PrintCB4 text={'TODAY"S VISITORS'} number={24+","+599}  day={day.mon} day2={day.tue}day3={day.wed}day4={day.thu} day5={day.fri}/>
        <PrintCB4 text={'YESTERDAY"S VISITORS'} number={15+","+699}  day={day.mon} day2={day.tue}day3={day.wed}day4={day.thu} day5={day.fri} />
        <PrintCB4 text={'TOTAL DOWNLOADS'} number={1+","+24+","+599}  />
        <PrintCB4 text={'CURRENT INCOME'} number={54+","+599}   day={day.mon} day2={day.tue}day3={day.wed}day4={day.thu} day5={day.fri}/>
        
    </>
  )
}
