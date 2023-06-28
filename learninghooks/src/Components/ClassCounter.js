import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementcount = ()=>{
        this.setState({
            count: this.state.count+1
        })
    }

    
  render() {
    return (
      <div>
        <button onClick = {this.incrementcount}>Count {this.state.count}</button>
       < h7> Class based using setState</h7>
      </div>
    )
  }
}

export default ClassCounter
