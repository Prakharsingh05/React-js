import logo from './logo.svg';
import './App.css';
import OptionSelection from './Components/OptionSelection';
import {arrayItems} from "./AiOptions";

function App() {
  console.log(arrayItems);

  return (
    <div className="App">
      <OptionSelection/>
      
    </div>
  );
}

export default App;
