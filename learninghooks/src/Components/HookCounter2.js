import React,{useState} from 'react'

function HookCounter2() {
    const initialCount = 0
    const [count , setCount] =useState
  return (
    <div>
        count : {count}
        <button>Increment</button>
         
    </div>
  )
}

export default HookCounter2
