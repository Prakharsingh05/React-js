import React ,{useState}from 'react'

function HookCounter() {

    const [count , setCount] = useState(0)
  return (
    <div>
      <button onClick={()=> setCount(count+1)}>Count {count}</button>
      <h7> Function based using hooks</h7>
    </div>
  )
}

export default HookCounter
