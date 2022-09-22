import React from 'react'
import "./UI3.css";
export default function PrintCB3(props) {
  const {color,text,money}=props;
  return (
    <>
        <div className='box' style={{background:color ,paddingTop:170,marginTop:'50px'}}>
          <span className='text'>
            <p className='text1'>{text}</p>
            <p className='text2'>{money}</p>
          </span>
        </div>
    </> 
  )
}
