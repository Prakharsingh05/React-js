
import './App.css';
import OptionSelection from './Components/OptionSelection';
import {arrayItems} from "./AiOptions";

function App() {
  console.log(arrayItems);

  return (
    <div className="App">
      <OptionSelection arrayItems={arrayItems}/>
      
    </div>
  );
}

export default App;
