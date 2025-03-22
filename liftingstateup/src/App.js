import './App.css';
import Child from './Child';

function App() {
  function getData(data) {
    console.log(data);
    
  }

  return (
    <div className="App">
      <Child getData={getData}/>
    </div>
  );
}

export default App;