import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
 class LIfecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Prakhar'
      }
      console.log('LIfecycleA constructor')
    }

     static getDerivedStateFromProps(Props,state) {
      console.log('lifeCycle getDerivedStateFromProps')
      return null
    }

    componentDidMount() {

        console.log('LifecycleA componentDidMount')

    }

    shouldComponentUpdate(){
        console.log('LifecyclyA shouldComponentUpdate')
        return true
    }

        getSnapshotBeforeUpdate(prevProps, prevState) {
                console.log('LifecycleA getsanpshotBefore')
                return true

          
        }

        componentDidUpdate(prevProps, prevState){
            console.log('LifecycleA componentDidUpdate')
            return true
        }

        changeState =()=>{
            this.setState({
                name: 'Prakhar singh'
            })
        }
        
        
    render(){
        console.log('LifecycleA render')

        return ( 
            <div>
            <div>Lifecycle A</div>
            <button onClick = {this.changeState}>Change State</button>
            <LifecycleB/>

            </div>


        )
        

    }
    
}

export default LIfecycleA
