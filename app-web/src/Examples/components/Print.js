/* eslint-disable no-useless-constructor */
// import React from "react";

// export default function Print(props) {
//   const { people, color} = props;
//   console.log(people,color);
//   return (
//     <div style={{ border: "1px solid #111" }}>
//         <p style={{ color : color?.name }}>{people?.name}</p>
//     </div>
//   );
// }
import React, { Component } from 'react'

export default class Print extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
        <p style={{ color : this.props?.name }}>{this.props?.color}</p>
      </div>
    )
  }
}

