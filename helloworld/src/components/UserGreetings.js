import React, { Component } from 'react'

class UserGreetings extends Component {


constructor(props) {
  super(props)

  this.state = {
    isLoggedIn: true
     
  }
}
  // conditional rendering
  // 1 - if/else

 //render(){
    
   // if(this.state.isLoggedIn){
       // return <div>Welcome prakhar</div>
    //}

    //else {
      //  return <div>welcome guest</div>
        

    //}

    //2 - element variable
    render(){
    let message
    if(this.state.isLoggedIn){
        message = <div> Welcome Prakhar </div>

    }else{
        message= <div> welcome guest </div>
    }
    return <div>{message}</div>
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


export default UserGreetings
