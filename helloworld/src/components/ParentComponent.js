import React, { Component } from 'react'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
      
    }

    greetParent(){
        alert(`Hello${this.stat.parentName}`)
    }
    
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default ParentComponent
