import React, { Component } from 'react'
import { AiFillLike } from 'react-icons/ai'
export default class likebt extends Component {
    constructor(props) {
        super(props);
        this.state = {
          color: 'white',
        };
        this.changlike = this.changlike.bind(this);
      }
      changlike(){
        this.setState({
            color:'blue',
        });
      }
  render() {
    return (
      <div>
        <div><AiFillLike style={{width:100,height:100,color:this.state.color}}/></div>
        <button onClick={() => this.changlike()} style={{width:100,height:50,background:'red',color:'white'}}>Likes</button>
      </div>
    )
  }
}

