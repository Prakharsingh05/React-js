import React, {useState} from 'react';
import{ Configuration, OpenAIApi } from 'openai';
import './App.css';
import OptionSelection from './Components/OptionSelection';
import {arrayItems} from "./AiOptions";
import Translation from './Components/Translation';

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  
  const openai =new OpenAIApi(configuration);
  const [option,setOption] = useState({});
  const [input,setInput] = useState("");
  const selectOption =(option)=>{
    setOption(option);
  };


  const sendToAI = () =>{
    
    let object = {...option , promt: input};
    console.log(object)

  }

  console.log(Object.values(option).length);



  return (
    <div className="App">
      {Object.values(option).length ===0 ?(
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
      ):(
      <Translation send={sendToAI} setInput={setInput}/>
  )}
    </div>
  );
}

export default App;
