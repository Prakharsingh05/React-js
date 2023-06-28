import React, {useState} from 'react';
import './App.css';
import OptionSelection from './Components/OptionSelection';
import {arrayItems} from "./AiOptions";
import Translation from './Components/Translation';

function App() {
  const [option,setOption] = useState({});
  const selectOption =(Option)=>{
    console.log(Option);
  };

  console.log(option)



  return (
    <div className="App">
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
      <Translation/>
    </div>
  );
}

export default App;
