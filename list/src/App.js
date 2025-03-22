import './App.css';
import Map from './Components/Map';
import Usestatearray from './Components/Usestatearray';
import Usestatelist from './Components/Usestatelist';

function App() {
  return (
    <div className="App">
      <Usestatearray/>
      <Map />
      <Usestatelist/>
    </div>
  );
}

export default App;
