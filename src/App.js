import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/SignUp';
import Inicio from './components/Paginas/Inicio';
import Equipo from './components/Equipo/Equipo';
import { Home } from './components/Paginas/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/Equipo' element = {<Equipo/>}/>
          <Route path="/Home" element = {<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
