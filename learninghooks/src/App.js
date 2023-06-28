
import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import HookCounter2 from './Components/HookCounter2';
import HookCounter3 from './Components/HookCounter3';

function App() {
  return (
    <div className="App">
      <HookCounter3/>
      <HookCounter2/>
      <HookCounter/>
     <ClassCounter/>
    </div>
  );
}

export default App;
