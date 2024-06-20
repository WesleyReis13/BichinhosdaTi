import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import TelaLogin from './components/TelaLogin.js';
import NavBar from './components/layouts/NavBar';
import Inicio from './components/Inicio';

function App() {
  return (
    <Router>
      <NavBar/>
    <Routes>
     <Route path='/Inicio' element={<Inicio/>}/>
     <Route path='/telaLogin' element={<TelaLogin/>}/>         
    </Routes>
    </Router>
  );
}

export default App;
