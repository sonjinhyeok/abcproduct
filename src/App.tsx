import React from 'react';
import './App.css';
import { Person } from './Person'

function App() {
  return (
    <div className="App">
      <Person name={"KIM"} age={26}/>
      <Person name={"John"} age={20}/>
      <Person name={"James"} age={35}/>
    </div>
  );
}

export default App;

