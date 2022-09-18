import React from 'react';
import "./UI4.css";

export default function PrintCB4(props) {
    const {text,number,day,day2,day3,day4,day5}=props;
  return (
    <>
        <div  className='box'>
            <div className='text_a'>{text}</div>
            <div className='numbers' >{number}</div><hr></hr>
            <span className='per1' style={{height:30 }}>
            <div className='days' style={{marginTop:"35px"}}>{day}</div>
            </span>
            <span className='per2' style={{height:20,marginLeft:75}}>
            <div className='days' style={{marginTop:"25px"}}>{day2}</div>
            </span>
            <span className='per3' style={{height:60 ,marginLeft:120}}>
            <div className='days' style={{marginTop:"65px"}}>{day3}</div>
            </span>
            <span className='per4' style={{height:70,marginLeft:165}}>
            <div className='days' style={{marginTop:"75px"}}>{day4}</div>
            </span>
            <span className='per5' style={{height:50,marginLeft:205}}>
            <div className='days' style={{marginTop:"55px"}}>{day5}</div>
            </span>
        </div>
    </>
  )
}


