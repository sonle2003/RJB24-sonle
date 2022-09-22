import PrintCB1 from './PrintCB1'
import React, { Component } from 'react'

export default class ChartBar1 extends Component {
  constructor(props){
    super(props);
    this.state={
        ts:[
        {
          text: "BANDWIDTH",
          color1: "#e44d4c",
          colors: "#f75354",
          percentage: 20,
        },
        {
          text: "STORAGE",
          color1: "#2db8cd",
          colors: "#31c8dd",
          percentage: 50,
        },
        {
          text: "USERS",
          color1: "#4ac25e",
          colors: "#51d566",
          percentage: 70,
        },
        {
          text: "VISITORS",
          color1: "#e9c318",
          colors: "#fcd518",
          percentage: 30,
        },
        {
          text: "EMAILS",
          color1: "#bb70d5",
          colors: "#cb79e7",
          percentage: 45,
        },
        {
          text: "BASIC",
          color1: "#eb59d6",
          colors: "#fe60e8",
          percentage: 80,
        },
        {
          text: "OTHERS",
          color1: "#5890d9",
          colors: "#609bec",
          percentage: 37,
        },
      ],
    };
  }
  render() {
    var list = this.state.ts.map((post) => <PrintCB1 key={post.text} post={post} />);
    return (
      <div>{list}</div>
    )
  }
}

