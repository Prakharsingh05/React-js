import React, { Component } from 'react'

 class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment =()=>{
        this.setState(prevState=>{
           return { count : prevState.count +1}
        })
    }
  render() {
    const {count} =this.State
    return (
      <div>
        <button onMouseOver={this.increment}>Hovered {count} times</button>    
      </div>
    )
  }
}

export default HoverCounter
