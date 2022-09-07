import React from "react";
import Print from "./Print";

export default function TestList() {
    // const arrayData = [
    //     { id: 1, name: "Data 01" },
    //     { id: 2, name: "Data 02" },
    //     { id: 3, name: "Data 03" },
    //   ];
    //   const arrayColor = [
    //     { id: 1, name: "red" },
    //     { id: 2, name: "blue" },
    //     { id: 3, name: "green" },
    //   ];
    const name="hello";
    const color="red";
  return (
    <>
     <Print name={this.name} color={this.color} />
    </>
  );
}
