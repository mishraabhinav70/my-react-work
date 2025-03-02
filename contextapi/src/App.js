import React, { createContext } from 'react';
import './App.css';
import ChildA from './components/ChildA';

const data = createContext();
const data1 = createContext();
function App() {
  const name = "abhinav"
  const gender = "male"
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1 };
