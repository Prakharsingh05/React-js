import React, { Component } from 'react'
 class LIfecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Prakhar'
      }
      console.log('LIfecycleB constructor')
    }

     static getDerivedStateFromProps(Props,state) {
      console.log('lifeCycleB getDerivedStateFromProps')
      return null
    }

    componentDidMount() {

        console.log('LifecycleB componentDidMount')

    }
    render(){
        console.log('LifecycleB render')

        return <div>LifecycleB </div>
        

    }
    
}

export default LIfecycleB
