import React from 'react'

function ChildComponent(props) {
  return (
    <div>
       <button onClick={()=>props.greetHandler('prakhar')}>GreetParent</button>
    </div>
  )
}


export default ChildComponent
