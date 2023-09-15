import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/SignUp';
import Inicio from './components/Paginas/Inicio';
import Equipo from './components/Equipo/Equipo';
import Accesorios from './components/Accesorios/Accesorios'
import { Home } from './components/Paginas/Home';
import { CartContext } from './components/Context/CartContext';
import { SelectionProvider } from './components/Context/SelectionContext';
import  Pago  from './components/Pago/cart'
function App() {
  return (
    <Router>
      <div className="App">
        <SelectionProvider>
          <CartContext>
            <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path='/Equipo' element = {<Equipo/>}/>
              <Route path="/Home" element = {<Home/>}/>
              <Route path='/cart' element = {<Pago/>}/>
              <Route path='/Accesorios' element={<Accesorios/>}/>
            </Routes>
          </CartContext>
        </SelectionProvider>
      </div>
    </Router>
  );
}

export default App;
