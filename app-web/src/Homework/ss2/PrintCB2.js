import React from 'react'
import "./UI2.css";
import { AiFillHtml5 } from 'react-icons/ai'

export default function PrintCB2(props) {
    const {text,color,percent}=props
  return (
    <>
    <div className='flex-container'>
        <div>
            <span className='icon' style={{color:color}}><AiFillHtml5/></span>
            <span className='txt3'>{text}</span>
            <span className='color_1' style={{background:color,paddingRight:percent ,borderRadius:"10px 0px 0px 10px"}}></span>
        </div>    
    </div>
    </>
  )
}

