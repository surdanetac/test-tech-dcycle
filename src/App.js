import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Exercise1 from './pages/exercise1/exercise1.jsx';
import Exercise2 from './pages/exercise2/exercise2.jsx';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="menu">
            <ol>
              <li className="menu-item"><Link to="/exercise1">Ejercicio 1</Link></li>
              <li className="menu-item"><Link to="/exercise2">Ejercicio 2</Link></li>
            </ol>
          </nav>
      <Routes>
        <Route path="/exercise1" element={<Exercise1/>} />
        <Route path="/exercise2" element={<Exercise2/>} />
        <Route path="/" exact >
      </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
