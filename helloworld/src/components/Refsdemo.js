import React, { Component } from 'react'
 class Refsdemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef =React.createRef()
    }

    componentDidMount = () => {
        this.inputRef.current.focus()
      console.log(this.inputRef)
    }


    clickHandler = () => {
        alert(this.inputRef.current.value)
    } 
    
    
     
  render() {
    return (
      <div>
        <input type ="text" ref ={this.inputRef}></input>
        <button onClick ={this.clickHandler}>click for alert</button>
      </div>
    )
  }
}

export default Refsdemo
