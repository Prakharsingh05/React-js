import React, { Component } from 'react'
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
            <lifecycleB/>

            </div>


        )
        

    }
    
}

export default LIfecycleA
