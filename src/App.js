import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Exercise1 from './pages/exercise1/exercise1.jsx';
import Exercise2 from './pages/exercise2/exercise2.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="menu">
          <ol>
            <li className="menu__item"><Link to="/">Ejercicio 1</Link></li>
            <li className="menu__item"><Link to="/exercise2">Ejercicio 2</Link></li>
          </ol>
        </nav>
        <Routes>
          <Route path="/" exact element={<Exercise1/>} />
          <Route path="/exercise2" element={<Exercise2/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
