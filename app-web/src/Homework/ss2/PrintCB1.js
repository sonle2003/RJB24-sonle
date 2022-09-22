import React from 'react'
import "./UI1.css";
export default function PrintCB1(props) {
  return (
    <>
        <div className='flex-container'>
          <div className='border'>
            <span className='txt1' style={{backgroundColor:props.post.color1}}>{props.post.text}</span>
            <span className='percent' style={{backgroundColor:props.post.colors}}>{props.post.percentage+"%"}</span>
          </div>
        </div>
   </> 
  )
}
