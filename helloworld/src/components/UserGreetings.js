import React, { Component } from 'react'

class UserGreetings extends Component {


constructor(props) {
  super(props)

  this.state = {
    isLoggedIn: true
     
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
    //multiline comment in javascript?
   // render(){
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div> Welcome Prakhar </div>

    // }else{
    //     message= <div> welcome guest </div>
    // }
    // return <div>{message}</div>
    // }

    // 3- conditional operator

    render(){
      return(
        this.state.isLoggedIn? (
          <div>Welcome Prakhar</div>
        ):(<div>Welcome Guest</div>)
      )
    }

 }


 


export default UserGreetings
