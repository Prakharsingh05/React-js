import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    }
      clickHandler(){
        this.setState({
            message: 'goodbye'
      })
      }
    
    
  render() {
    return (
      <div>
        {this.state.message}
        <button onClick ={this.clickHandler.bind(this)}>click-EB</button>
        
      </div>
    )
  }
}

export default EventBind
