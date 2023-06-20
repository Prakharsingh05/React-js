import React, { Component } from 'react'
 class LifecycleB extends Component {

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
    shouldComponentUpdate(){
        console.log('LifecyclyB shouldComponentUpdate')
        return true
    }

        getSnapshotBeforeUpdate(prevProps, prevState) {
                console.log('LifecycleB getsanpshotBefore')
                return true
          
        }

        componentDidUpdate(prevProps, prevState){
            console.log('LifecycleB componentDidUpdate')
            return true
        }
        
    render(){
        console.log('LifecycleB render')

        return <div>LifecycleB </div>
        

    }
    
}

export default LifecycleB
