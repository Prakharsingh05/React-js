import React, { Component } from 'react'
import LIfecycleB from './LifecycleB'
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
    render(){
        console.log('LifecycleA render')

        return ( 
            <div>
            <div>Lifecycle A</div>
            <LIfecycleB/>

            </div>


        )
        

    }
    
}

export default LIfecycleA
