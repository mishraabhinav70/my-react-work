import './App.css';
import { useState,React } from 'react';
function App() {
  const [count,setcount]=useState(0);
  function counter() {
    setcount(count+1)
  }
  return (
    <div className="App">
      <h1>counter is {count} </h1>
      <button onClick={counter}>click</button>
    </div>
  );
}

export default App;
