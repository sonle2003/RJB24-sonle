import React from "react";
import ".//basic2.css";
import anh2 from "./image/2.jpg";
import {AiOutlineStar,AiFillStar} from "react-icons/ai"

function Bai2() {
  return (
    <>
      <div className="container_2">
        <div className="flex2">
          <img src={anh2} alt="" className="img2" />
          <div className="content_0">
            <div className="content_1">YOUNG SHOP</div>
            <hr></hr>
            <div className="content_2">Samsung UHD TV 24inch</div>
            <div className="content_3">
              <AiFillStar color="orange"/>
              <AiFillStar color="orange" className="star"/>
              <AiFillStar color="orange" className="star"/>
              <AiFillStar color="orange" className="star"/>
              <AiOutlineStar className="star"/>
              <span className="number">02</span>
            </div>
            <div className="content_4">$599</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Bai2;
