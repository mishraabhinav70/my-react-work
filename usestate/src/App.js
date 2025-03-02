import './App.css';
import { useState,useEffect,React } from 'react';
function App() {

  const [count,setcount]=useState(0);
  const [data,setData]=useState("Ram");

  useEffect(
    ()=>{
      console.log("updated")
    },[data]
  )

  function counter() {
    setcount(count+1)
  }

  function updateData() {
    setData("Sita")
  }

  return (
    <div className="App">

      <h1>counter is {count} </h1>
      <button onClick={counter}>click</button>

      <h1>the name is {data} </h1>
      <button onClick={updateData}>click to update</button>

    </div>
  );
}

export default App;
