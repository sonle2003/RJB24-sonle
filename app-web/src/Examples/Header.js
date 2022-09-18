import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Black",
      number: 0,
    };
    this.chang = this.chang.bind(this);
    this.chang1 = this.chang1.bind(this);
  }
  chang() {
    this.setState({
      name: "Red",
    });
  }
  chang1() {
    this.setState({
      name: "Black",    
    });
  }
  changeNumber() {
    if (this.state.number >= 10) {
    } else {
      this.setState({
        number: this.state.number + 1,
      });
    }
  }
  changeNumber1() {
    if (this.state.number <= 0) {
    } else {
      this.setState({
        number: this.state.number - 1,
      });
    }
  }

  render() {
   
    return (
      <>
        <div>{this.state.name}</div>
        <button onClick={() => this.chang()}>Change Red</button>
        <button onClick={() => this.chang1()}>Change Black</button>
        <div>{this.state.number}</div>
        <button onClick={() => this.changeNumber()}>Tang</button>
        <button onClick={() => this.changeNumber1()}>Giam</button>
      </>
    );
  }
}
