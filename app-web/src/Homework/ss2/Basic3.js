import React from "react";
import anh3 from "./image/3.jpg";
import "./basic3.css";

function Bai3() {
  return (
    <>
      <div className="container_3">
        <div className="flex3">
          <img src={anh3} alt="" className="img3" />
          <div className="content_x">
            <div className="content_y">Technology</div>
            <div className="content_z">Harman Kadon Onyx Studio Mini, Reviews Experiences</div>
            <div className="content_t">Feb 21, 2021 by <span className="drfurion">drfurion</span></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Bai3;