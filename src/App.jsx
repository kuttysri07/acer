import React,{useState} from "react";
import Nav from "./components/navbar/nav";
import Background from "./components/background/background";
import Hero from "./components/hero/hero";
import './App.css';

function App() {

let herotext=[
  {text1:"Level up with" ,text2:"Ultimate acer Aspire 7"},
  {text1:"Dual fan with Multiple" ,text2:" cooling Modes"},
  {text1:"Up to 2.2x" ,text2:"Better Performance"}
]

const [heroCount,setheroCount]=useState(0);
const [palyStatus,setplayStatus]=useState(false);

  return (
    <div>
    
     <Background 
     heroCount={heroCount} palyStatus={palyStatus}
     />
      <Nav/>
      <Hero
      setplayStatus={setplayStatus}
      setheroCount={setheroCount}
      herotext={herotext[heroCount]}
      palyStatus={palyStatus}
      heroCount={ heroCount}


      />
      
    </div>
  );
}

export default App;
