import Nav from "./components/Nav"
import './App.css'

import Caro from "./components/Caro"
import Card1 from "./components/Card1"
import About from "./components/About"
import Aboutc from "./components/Aboutc"

function App({school, amount}) {
  return (
    <div className="App">
 
    <Nav />

    <Aboutc/>
    <About/>
    <Card1 school={school}  amount={amount}/>
    <Caro/>
    
     <h1>Hello world</h1>
     
    </div>
  );
}

export default App;
