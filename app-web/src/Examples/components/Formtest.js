import React from "react";
import {Navigate} from "react-router-dom"
const NAME = "levietson2003@gmail.com";
const PASSWORD = "Sonle2003";

export default function Formtest() {
  const [name, setName] = React.useState(undefined);
  const [pass, setPass] = React.useState(undefined);
  const [check, setCheck] = React.useState(undefined);
  const navigation=Navigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(pass);
    if(name===NAME&& pass===PASSWORD){
      setCheck(true);
      navigation('/next');
      console.log('S');
      
    }else{
      console.log('F');
      setCheck(false);
    }
   
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Tai Khoan</label>
        <input
          type={"email"}
          placeholder="input username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Mat khau</label>
        <input
          type={"password"}
          value={pass}
          placeholder="input password"
          onChange={(e) => setPass(e.target.value)}
        /><br/>
        <input type={"submit"} />
      </form>
    </>
  );
}
