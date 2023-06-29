import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Header from "./componenets/Header";
import Home from "./componenets/Home"




import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path ="/" element={<Home/>}/>


        
      </Routes>
    </Router>
  );
}

export default App;
