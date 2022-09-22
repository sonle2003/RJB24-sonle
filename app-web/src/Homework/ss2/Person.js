import React from 'react'
import PrintCB5 from './PrintCB5'

export default function Person() {
    const users={
        dob:"23/05/2014",
        bg:"B+",
        edu:"MCA",
        res:"Bangalore",
    };
    const mails={
        mail1:"robot12@gmail.com",
        mail2:"smith12@gmail.com",
        mail3:"peter1@gmail.com",
        mail4:"point12@gmail.com",
    };
    const phones={
        phone1:8665543219,
        phone2:8225543219,
        phone3:8225543929,
        phone4:993794265,
    }
    // const colors={
    //   color
    // }
  return (
    <>
    <PrintCB5 name={"ROBORT PATTION"} work={"Developing"}  user={users} email={mails.mail1} phone={phones.phone1}/>
    <PrintCB5 name={"JAMES SMITH"} work={"Designer"}  user={users} email={mails.mail1} phone={phones.phone1}/>
    <PrintCB5 name={"TOM HANKS"} work={"UI Designer"}  user={users} email={mails.mail1} phone={phones.phone1}/>
    <PrintCB5 name={"SILVESTER STALIN"} work={"Testing"}  user={users} email={mails.mail1} phone={phones.phone1}/>
    </>
  )
}
