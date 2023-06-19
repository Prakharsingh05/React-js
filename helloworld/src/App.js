import React,{Component} from 'react'
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import Counter1 from './components/Counter1';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Counter1></Counter1>
      <UserGreetings/>
      <ParentComponent/>
      <EventBind></EventBind>
      <FunctionClick></FunctionClick>
      <Counter></Counter>
      <Greet name = "prakhar"/>
      <Greet name = "batman"/>
      <Greet name = "bruceWayne"/>
      <Message/>

      {/*<Welcome></Welcome>*/}
      {/* <Hello></Hello>*/}
    </div>
  );
}
}

export default App;
