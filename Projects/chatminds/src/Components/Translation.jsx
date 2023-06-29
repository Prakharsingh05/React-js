import React from 'react'

export default function Translation(sendToAI ,setInput ,result) {
  return (
    <div className='container col-6'>
      <textarea className="text-area" cols={55} rows={10} onChange={(e)=> setInput(e.target.value)}>

      </textarea>
    <br/>
      <button onClick ={sendToAI} type="button" className="btn btn-success col-6 ">Send to AI</button>
      <button type="button" className="btn btn-danger col-4">Reset</button>
      <h3 className="result-text">{result.length >0 ? result: ""}</h3>
    </div>
  )
}
