import React, {useState} from 'react';

import './App.css';
import{ Configuration, OpenAIApi } from 'openai';
import OptionSelection from './Components/OptionSelection';
import {arrayItems} from "./AiOptions";
import Translation from './Components/Translation';

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_key,
  });
  
  const openai =new OpenAIApi(configuration);
  const [option,setOption] = useState({});
  const[result , setResult] =useState("");
  const [input,setInput] = useState("");
  const selectOption =(option)=>{
    setOption(option);
  };


  const sendToAI = async () =>{
    
    let object = {...option , prompt: input};
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);

  }

 



  return (
    <div className="App">
      {Object.values(option).length ===0 ?(
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
      ):(
      <Translation sendToAI={sendToAI} setInput={setInput} result={result}/>
  )}
    </div>
  );
}

export default App;
