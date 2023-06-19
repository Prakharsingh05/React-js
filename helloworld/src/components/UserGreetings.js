import React, { Component } from 'react'

class UserGreetings extends Component {


constructor(props) {
  super(props)

  this.state = {
    isLoggedIn: false
     
  }
}

 render(){
    
    if(this.isLoggedIn){
        <div>Welcome prakhar</div>

    }else{
        <div>welcome guest</div>

    }
 }


 // render() {
   // return (
     // <div>
        
      // <div>Welcome vishwas</div> 
      // <div>Welcome Guest</div> 
     // </div>
   // )
  //}
}

export default UserGreetings
