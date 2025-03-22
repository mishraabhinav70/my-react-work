import './App.css';
import { useMemo, useState } from 'react';
function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  const multiplication = useMemo(function multiply() {
    return add * 10;
  }, [add])
  return (
    <div className="App">
      <h1>use of useMemo</h1>
      {multiplication}<br/>
      <button onClick={() => setAdd(add + 1)}>addition</button>
      <span>{add}</span><br />
      <button onClick={() => setMinus(minus - 1)}>substraction</button>
      <span>{minus}</span>
    </div>
  );
}

export default App;
