import "./App.css";
import React from "react";
import TestList from "./Examples/components/TestList";
import Main from "./Homework/ss1/Basic1";
import Bai2 from "./Homework/ss1/Basic2";
import Bai3 from "./Homework/ss1/Basic3";
// const user = {
//   id: 10,
//   firstName: "Park",
//   lastName: "Chae-young",
//   nickName: "Rosé",
//   avatarUrl: image1,
//   profile: "https://www.instagram.com/roses_are_rosie/",
// };
// const userLeft = [
//   {
//     id: 1,
//     firstName: "Park1",
//     lastName: "Chae-young",
//     nickName: "Rosé",
//     avatarUrl: image1,
//     profile: "https://www.instagram.com/roses_are_rosie/",
//   },
//   {
//     id: 2,
//     firstName: "Park2",
//     lastName: "Chae-young",
//     nickName: "Rosé",
//     avatarUrl: image1,
//     profile: "https://www.instagram.com/roses_are_rosie/",
//   },

//   {
//     id: 3,
//     firstName: "Park3",
//     lastName: "Chae-young",
//     nickName: "Rosé",
//     avatarUrl: image1,
//     profile: "https://www.instagram.com/roses_are_rosie/",
//   },
// ];
// console.log(user.id);
// const _print=(people)=>{
//   return(
//    <>
//     <div className="container">
//       <p className="id" style={{color: people.id % 2==0 ?"red":"green"}}>{people.id}</p>
//       <p className="first" >{people.firstName}</p>
//       <p className="last">{people.lastName}</p>
//       <p className="nick">{people.nickName}</p>
//       <img src={people.avatarUrl} width="200px" height="200px" className="img1"/>
//     </div>
//    </>
//   );
// }
function App() {
  return (
    <>
      {/* {userLeft.map((item) => (
        <Print key={item.id} people={item} />
      ))}
      <Print people={user} /> */}
      <Main/>
      <Bai2/>
      <Bai3/>
    </>
  );
}

export default App;
