import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Name from './pages/Name';
import Match from './pages/Match';
import Rank from './pages/Rank';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/name' element={<Name />} />
        <Route path='/match' element={<Match />} />
        <Route path='/rank' element={<Rank />} />
      </Routes>
    </div>
  );
}

export default App;
