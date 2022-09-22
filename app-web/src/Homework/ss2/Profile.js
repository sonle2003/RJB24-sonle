import PrintCB2 from './PrintCB2'
import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { AiFillApple } from 'react-icons/ai'


export default function Profile() {
  return (
    <>
        <PrintCB2 text={"HTML"} color= {"#e44d4c"} percent={600}/>
        <PrintCB2 text={"CSS"} color= {"#2db8cd"} percent={500} />
        <PrintCB2 text={"PHP"} color= {"#4ac25e"} percent={350}/>
        <PrintCB2 text={"JAVA"} color= {"#e9c328"}percent={700} />
        <PrintCB2 text={".NET"} color= {"#bb70d5"}percent={400}/>
    </>
  )
}

   