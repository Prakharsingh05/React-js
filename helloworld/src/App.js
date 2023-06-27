import React,{Component, Fragment} from 'react'
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
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LIfecycleA from './components/LIfecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Cleanup from './components/Cleanup';
import ParentComp from './components/ParentComp';
import Refsdemo from './components/Refsdemo';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  render(){
  return (
    <div className="App">
      <ErrorBoundary/>
      <Hero heroName = "batman" />
      <Hero heroName = " superman" />
       <Hero heroName="joker"/>
      
      <PortalDemo/>
      <Refsdemo/>
      <ParentComp/>
      <Cleanup/>
      <Table/>
      <FragmentDemo/>
      <LIfecycleA/>
      <Form/>
      <Inline></Inline>
      <StyleSheet primary ={false}></StyleSheet>
    
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
