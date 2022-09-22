import ".//basic1.css";
import React from "react";
import anh1 from "./image/1.jpg";

function Main() {
    return(
        <>
            <div className="container">
                <div className="flex1">
                    <img src={anh1} alt=""className="img1"/>
                    <div className="content">
                        <div className="content_a">Clothing & Apparel</div>
                        <div className="content_b">Accessories</div>
                        <div className="content_b">Bags</div>
                        <div className="content_b">Kid's Fashion</div>
                        <div className="content_b">Mens</div>
                    </div>  
                    
                </div>
            </div>
        </>
    );
}
export default Main