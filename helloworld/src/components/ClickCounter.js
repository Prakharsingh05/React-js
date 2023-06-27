import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    ClickHandler = ()=>{
      
      this.setState({
        count: this.state.count+1
      })
    }
    
  render() {
    return (
      <div>
        <button onClick={this.ClickHandler.bind(this)}>clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)