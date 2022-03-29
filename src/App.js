import Home from './pages/Home';
import Details from './pages/Details';
import {Routes, Route} from "react-router-dom";
import './index.css';

function App() {
  return (
    <div className="header">
      <Routes>
        <Route path="/Details" element={<Details />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
