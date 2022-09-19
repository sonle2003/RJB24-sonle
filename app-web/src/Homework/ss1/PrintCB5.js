import React from 'react'
import {BiCalendar, BiFontSize} from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import {IoIosSchool} from'react-icons/io'
import{FaMapMarkerAlt,FaPhone} from'react-icons/fa'
import{BsEnvelope} from'react-icons/bs'
import anh2 from "./image/anh2.jpg";

import "./UI5.css";
import { Form } from 'react-router-dom'

export default function PrintCB5(props) {
    const {name,work,user,email,phone}=props;
  return (
    <>
        <div className='flexbox'>
            <div><img src={anh2} style={{width:190,height:190,padding:15}}/></div>
            <div className='name'>{name}</div>
            <div className='work'>{work}</div>
            <div className='tip' >
              <div style={{fontSize:12}}><BiCalendar style={{paddingRight:10}}/>DOB<span style={{paddingLeft:65}}>{user.dob}</span></div><hr></hr>
              <div style={{fontSize:12}}><AiFillHeart style={{paddingRight:10}}/>BG<span style={{paddingLeft:120}} >{user.bg}</span></div><hr></hr>
              <div style={{fontSize:12}}><IoIosSchool style={{paddingRight:10}}/>EDU<span style={{paddingLeft:95}} >{user.edu}</span></div><hr></hr>
              <div style={{fontSize:12}}><FaMapMarkerAlt style={{paddingRight:10}}/>RES<span style={{paddingLeft:70}} >{user.res}</span></div>
            </div>
            <div><button className='button1'><div>EMAIL ID</div><BsEnvelope style={{paddingRight:5}}/>{email}</button> </div>
            <div><button className='button2'><div>PHONE NO</div><FaPhone style={{paddingRight:5}}/>{phone}</button> </div>
        </div>
    </>
  )
}
