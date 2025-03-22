import { useCallback, useState } from 'react';
import './App.css';
import Child from './Child';

function App() {
  const [add, setAdd] = useState(0)
  const [count, setCount] = useState(0)

  const Learning = useCallback(() => {
    //some code
  }, [count])

  return (
    <div className="App">
      <h1>useCallback</h1>
      <Child Learning={Learning} count={count} /><br/>
      <span>{add}</span><br/>
      <button onClick={() => setAdd(add + 1)}>add</button><br/>
      <span>{count}</span><br/>
      <button onClick={() => setCount(count + 2)}>count</button>

    </div>
  );
}

export default App;
