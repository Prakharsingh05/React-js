import React, {useState} from 'react';
import './App.css';
import OptionSelection from './Components/OptionSelection';
import {arrayItems} from "./AiOptions";
import Translation from './Components/Translation';

function App() {
  const [option,setOption] = useState({});
  const selectOption =(option)=>{
    setOption(option);
  };

  console.log(Object.values(option).length);



  return (
    <div className="App">
      {Object.values(option).length ===0 ?(
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
      ):(
      <Translation/>
  )}
    </div>
  );
}

export default App;
