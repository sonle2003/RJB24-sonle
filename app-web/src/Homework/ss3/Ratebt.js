import React, { Component } from "react";
import { AiFillStar } from "react-icons/ai";

export default class Ratebt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "",
      color2: "",
      color3: "",
      color4: "",
      color5: "",
    };
    // this.changstar1 = this.changstar1.bind(this);
  }
  reload() {
    this.setState({
      color1: "",
      color2: "",
      color3: "",
      color4: "",
      color5: "",
    });
  }
  changstar1() {
    this.setState({
      color1: "yellow",
      color2: "",
      color3: "",
      color4: "",
      color5: "",
    });
  }
  changstar2() {
    this.setState({
      color1: "yellow",
      color2: "yellow",
      color3: "",
      color4: "",
      color5: "",
    });
  }
  changstar3() {
    this.setState({
      color1: "yellow",
      color2: "yellow",
      color3: "yellow",
      color4: "",
      color5: "",
    });
  }
  changstar4() {
    this.setState({
      color1: "yellow",
      color2: "yellow",
      color3: "yellow",
      color4: "yellow",
      color5: "",
    });
  }
  changstar5() {
    this.setState({
      color1: "yellow",
      color2: "yellow",
      color3: "yellow",
      color4: "yellow",
      color5: "yellow",
    });
  }
  render() {
    return (
      <div>
        <div style={{ fontSize: 50, padding: 100 }}>
          <AiFillStar className="star1" style={{ color: this.state.color1 }} />
          <AiFillStar className="star2" style={{ color: this.state.color2 }} />
          <AiFillStar className="star3" style={{ color: this.state.color3 }} />
          <AiFillStar className="star4" style={{ color: this.state.color4 }} />
          <AiFillStar className="star5" style={{ color: this.state.color5 }} />
        </div>
        <div style={{ paddingLeft: 100 }}>
          <button
            onClick={() => this.changstar1()}
            style={{
              fontSize: 30,
              color: "black",
              background: "blue",
              marginRight: 30,
            }}
          >
            1 <AiFillStar />
          </button>
          <button
            onClick={() => this.changstar2()}
            style={{
              fontSize: 30,
              color: "black",
              background: "blue",
              marginRight: 30,
            }}
          >
            2 <AiFillStar />
          </button>
          <button
            onClick={() => this.changstar3()}
            style={{
              fontSize: 30,
              color: "black",
              background: "blue",
              marginRight: 30,
            }}
          >
            3 <AiFillStar />
          </button>
          <button
            onClick={() =>
              this.changstar4()
            }
            style={{
              fontSize: 30,
              color: "black",
              background: "blue",
              marginRight: 30,
            }}
          >
            4 <AiFillStar />
          </button>
          <button
            onClick={() =>
              this.changstar5()
            }
            style={{
              fontSize: 30,
              color: "black",
              background: "blue",
              marginRight: 30,
            }}
          >
            5 <AiFillStar />
          </button>
          <button
            onClick={()=>
                this.reload()
            }
             style={{
              fontSize: 30,
              color: "black",
              background: "blue",
              marginRight: 30,
            }}>
                Reload All</button>
        </div>
      </div>
    );
  }
}
