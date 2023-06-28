import React , {useState} from 'react'

function HookCOunter4() {

    const[items,setItems] =useState([])



  return (
    <div>
        <ul>
            {
            Items.map(item=>(
                 <li key ={item.id}> {item.value}</li>
                 ))}
                
            </ul>
      
    </div>
  )
}

export default HookCOunter4
