
import './App.css';
import OptionSelection from './Components/OptionSelection';
import {arrayItems} from "./AiOptions";

function App() {
  const selectOption =(Option)=>{
    console.log(Option);
  };


  return (
    <div className="App">
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
      
    </div>
  );
}

export default App;
