import './App.css';
import { useState, useRef, React } from 'react';
function App() {
  const refElement = useRef("");
  const [count, setcount] = useState(0);
  const [name, setName] = useState("abhinav");
  console.log(refElement);

  function counter() {
    setcount(count + 1)
  }
  function reset() {
    setName("")
    refElement.current.focus()
    refElement.current.style.color = "black"
  }

  function handelInput() {
    refElement.current.style.color = "red"
  }
  return (
    <div className="App">


      <h1>counter is {count} </h1>
      <button onClick={counter}>click</button>

      <h1>useRef</h1>
      <input type='text' ref={refElement} value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={reset}>reset</button>
      <button onClick={handelInput}>handel input</button>
    </div>
  );
}

export default App;
