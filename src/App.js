import './App.css';
import Child from './Child';
import ReactGA from "react-ga";

const trackin_ID="G-1HFMKCP63G";
ReactGA.initialize(trackin_ID)
function App() {
  return (
    <div className="App">
      <Child/>
    </div>
  );
}

export default App;
