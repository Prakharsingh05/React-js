import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Prakhar"
      }
    }

    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name:'Prakhar singh'
            })
        },2000)
    }
    
  render() {
    return (
      <div>
        Parent compoenent
        <RegComp name ={this.state.name}/>
        <PureComp name ={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
