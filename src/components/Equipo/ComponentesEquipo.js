import React, { useState } from 'react';
import './ComponentesEquipo.css';
import Pantalla from './Pantalla';
import EquipoMedida from './EquipoMedida';
import CPU from './CPU';

const ComponentesEquipo = () => {
  const [reducir, setReducir] = useState(false);
  const [mostrarTarjetasP, setMostrarTarjetasP] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [mostrarTarjetasCPU, setMostrarTarjetasCPU] = useState(false);
  const [mostrarTarjetasT, setMostrarTarjetasT] = useState(false);
  const [mostrarTarjetasM, setMostrarTarjetasM] = useState(false);


  const items = [
    { nombre: 'Pantalla', icono: `${process.env.PUBLIC_URL}/Monitor.svg` },
    { nombre: 'CPU', icono: `${process.env.PUBLIC_URL}/Computer.svg` },
    { nombre: 'Teclado', icono: `${process.env.PUBLIC_URL}/Keyboard.svg` },
    { nombre: 'Mouse', icono: `${process.env.PUBLIC_URL}/Mouse.svg` }
  ];

  const handleItemClick = (nombre) => {
    if (nombre === 'Pantalla') {
      if (!reducir) {
        setReducir(true);
        setMostrarTarjetasP(true);
        setMostrarTarjetasCPU(false); // Ocultar tarjetas de CPU cuando se selecciona Pantalla
      }
    } else if (nombre === 'CPU') {
      if (!reducir) {
        setReducir(true);
        setMostrarTarjetasCPU(true); // Mostrar tarjetas de CPU cuando se selecciona CPU
        setMostrarTarjetasCPU(false); // Ocultar tarjetas de Pantalla cuando se selecciona CPU
      }
    }
    else if (nombre === 'Teclado') {
      if (!reducir) {
        setReducir(true);
        setMostrarTarjetasT(true); // Mostrar tarjetas de CPU cuando se selecciona CPU
        setMostrarTarjetasT(false); // Ocultar tarjetas de Pantalla cuando se selecciona CPU
      }
    }
    else if (nombre === 'Mouse') {
      if (!reducir) {
        setReducir(true);
        setMostrarTarjetasCPU(true); // Mostrar tarjetas de CPU cuando se selecciona CPU
        setMostrarTarjetasM(false); // Ocultar tarjetas de Pantalla cuando se selecciona CPU
      }
    }
  };

  const handleNextClick = () => {
    setReducir(false);
    setMostrarTarjetasP(false);
  };

  const updateTotalPrice = (price) => {
    setTotalPrice(prevTotalPrice => prevTotalPrice + price);
  };
  return (
    <div>
      {items.map(item => (
        <div 
          key={item.nombre} 
          className={`item-container ${reducir ? 'reducido' : ''}`}
          onClick={() => handleItemClick(item.nombre)}
        >
          <img src={item.icono} alt={item.nombre} className="icono" />
          <span className={`nombre ${reducir ? 'oculto' : ''}`}>{item.nombre}</span>
        </div>
      ))}
      {mostrarTarjetasP && <Pantalla updateTotalPrice={updateTotalPrice}/>}
      {mostrarTarjetasCPU && <CPU updateTotalPrice={updateTotalPrice}/>}
      {mostrarTarjetasT && <Pantalla updateTotalPrice={updateTotalPrice}/>}
      {mostrarTarjetasM && <CPU updateTotalPrice={updateTotalPrice}/>}
      <EquipoMedida totalPrice={totalPrice} onNextClick={handleNextClick}/>
    </div>
  );
}

export default ComponentesEquipo;
