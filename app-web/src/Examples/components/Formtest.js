import React from "react";
import { useNavigate } from "react-router-dom";
const NAME = "levietson2003@gmail.com";
const PASSWORD = "Sonle2003";

export default function Formtest(props) {
  const{Login}=props;
  const [name, setName] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [check, setCheck] = React.useState(undefined);
  const navigates =useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(pass);
    if(name===NAME&& pass===PASSWORD){
      setCheck(true);
      console.log('S');
      navigates("/home");
      
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
