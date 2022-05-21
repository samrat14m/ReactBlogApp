import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './component/Home';
import Bollywood from './component/Bollywood';
import Travel from './component/Travel';
import Technology from './component/Technology';
function App() {
  return (
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path = "/Bollywood" element = {<Bollywood/>}/>
        <Route path = "/Technology" element = {<Technology/>}/>
        <Route path = "/Travel" element = {<Travel/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
