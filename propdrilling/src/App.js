import './App.css';
import ChildA from './components/ChildA';

function App() {
  const name = "abhinav"
  return (
    <div className="App">
      <ChildA name={name}/>
    </div>
  );
}

export default App;
