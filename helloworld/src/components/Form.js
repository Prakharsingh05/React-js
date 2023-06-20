import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: ''
      }
    }

    handleUserNameChange = (event)=> {
        this.setState ({
            username : event.target.value
        })
    }
    
  render() {
    return (
      
        <form>
            <div>
            <label>UserName</label>
            <input type='text' value = {this.state.username} onChange ={this.handleUserNameChange}></input>
            </div>

        </form>
      
    )
  }
}

export default Form
