import React from 'react'
import PrintCB3 from './PrintCB3'
import { FaFacebookF,FaTwitter,FaPinterest,FaGooglePlusG } from 'react-icons/fa'


export default function SocialBlock() {
  return (
    <>
      <div style={{position:'absolute',top:'75px',left:'50px',fontSize:'70px',color:'white'}}><FaFacebookF/></div>
      <PrintCB3  text={"Facebook"} color={"rgb(83, 144, 249)"} money={"5,00,000 Likes"}/>
      <div style={{position:'absolute',top:'75px',left:'366px',fontSize:'70px',color:'white'}}><FaTwitter/></div>
      <PrintCB3  text={"Twitter"} color={"aqua"} money={"40,000 Tweets"}/>
      <div style={{position:'absolute',top:'75px',left:'680px',fontSize:'90px',color:'white'}}><FaGooglePlusG/></div>
      <PrintCB3  text={"Google +"} color={"rgb(252, 176, 36)"} money={"4,60,000 Plus"}/>
      <div style={{position:'absolute',top:'75px',left:'990px',fontSize:'70px',color:'white'}}><FaPinterest/></div>
      <PrintCB3  text={"Pinterest"} color={" rgb(249, 95, 68)"} money={"34,000 Pins"}/>
    </>
  )
}
