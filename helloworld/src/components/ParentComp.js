import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

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
        <MemoComp name = {this.state.name}/>
        {/* <RegComp name ={this.state.name}/>
        <PureComp name ={this.state.name}/> */}
        
      </div>
    )
  }
}

export default ParentComp
