// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navegacion/Navbar';
import Login from './components/Auth/Login'; // Importa el componente Login
import Signup from './components/Auth/SignUp'; // Importa el componente Signup
import Inicio from './components/Paginas/Inicio';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/login" element={<Login />} /> {/* Ruta para el login */}
          <Route path="/signup" element={<Signup />} /> {/* Ruta para el registro */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
