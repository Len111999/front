import React, { useState } from 'react';
import './ComponentesEquipo.css';
import Pantalla from './Pantalla';
import CPU from './CPU';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import EquipoMedida from './EquipoMedida'
import Teclado from './Teclado';
import Mouse from './Mouse';

const ComponentesEquipo = () => {
  const [reducir, setReducir] = useState(false);
  const [mostrarTarjetasP, setMostrarTarjetasP] = useState(false);
  const [mostrarTarjetasCPU, setMostrarTarjetasCPU] = useState(false);
  const [mostrarTarjetasTeclado, setMostrarTarjetasTeclado] = useState(false);
  const [mostrarTarjetasMouse, setMostrarTarjetasMouse] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedPantalla, setSelectedPantalla] = useState(null);
  const [selectedCPU, setSelectedCPU] = useState(null);
  const [selectedTeclado, setSelectedTeclado] = useState(null);
  const [selectedMouse, setSelectedMouse] = useState(null);
  const [showTotal, setShowTotal] = useState(false);

  const items = [
    { nombre: 'Pantalla', icono: `${process.env.PUBLIC_URL}/Monitor.svg` },
    { nombre: 'CPU', icono: `${process.env.PUBLIC_URL}/Computer.svg` },
    { nombre: 'Teclado', icono: `${process.env.PUBLIC_URL}/Keyboard.svg` },
    { nombre: 'Mouse', icono: `${process.env.PUBLIC_URL}/Mouse.svg` }
  ];

  const handleItemClick = (nombre) => {
    if (nombre === 'Pantalla' && !selectedPantalla) {
      if (!reducir) {
        setReducir(true);
        setMostrarTarjetasP(true);
        setMostrarTarjetasCPU(false);
      }
    } else if (nombre === 'CPU' && !selectedCPU) {
      if (!reducir) {
        setReducir(true);
        setMostrarTarjetasCPU(true);
        setMostrarTarjetasP(false);
      }
    } else if (nombre === 'Teclado' && !selectedTeclado){
      if(!reducir){
        setReducir(true);
        setMostrarTarjetasTeclado(true);
        setMostrarTarjetasCPU(false);
      }
    } else if (nombre === 'Mouse' && !selectedMouse){
      if(!reducir){
        setReducir(true);
        setMostrarTarjetasMouse(true);
        setMostrarTarjetasTeclado(false);
      }
    }
  };

  const handleNextClick = () => {
    setReducir(false);
    setMostrarTarjetasP(false);
    setMostrarTarjetasTeclado(false);
    setMostrarTarjetasCPU(false);
    setMostrarTarjetasMouse(false);
  };

  const updateTotalPrice = (price) => {
    setTotalPrice(prevTotalPrice => prevTotalPrice + price);
  };

  const handleTotalClick = () => {
    if (selectedPantalla || selectedCPU) {
      setShowTotal(true);
    }
  };

  const handleCloseTotal = () => {
    setShowTotal(false);
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
      {mostrarTarjetasP && <Pantalla updateTotalPrice={updateTotalPrice} setSelectedPantalla={setSelectedPantalla} />}
      {mostrarTarjetasCPU && <CPU updateTotalPrice={updateTotalPrice} setSelectedCPU={setSelectedCPU} />}
      {mostrarTarjetasTeclado && <Teclado updateTotalPrice={updateTotalPrice} setSelectedTeclado={setSelectedTeclado} />}
      {mostrarTarjetasMouse && <Mouse updateTotalPrice={updateTotalPrice} setSelectedMouse={setSelectedMouse} />}
      <EquipoMedida totalPrice={totalPrice} onNextClick={handleNextClick}/>
      <Button variant="secondary" onClick={handleTotalClick} className='ButonCart'>
        Carrito
      </Button>
      <Modal show={showTotal} onHide={handleCloseTotal}>
        <Modal.Header closeButton>
          <Modal.Title>Información de la Selección</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPantalla ? (
            <div>
              <p>ID Pantalla: {selectedPantalla.id}</p>
              <p>Nombre Pantalla: {selectedPantalla.alt}</p>
            </div>
          ) : (
            <p>No hay pantalla seleccionada</p>
          )}
          {selectedCPU ? (
            <div>
              <p>ID CPU: {selectedCPU.id}</p>
              <p>Nombre CPU: {selectedCPU.alt}</p>
            </div>
          ) : (
            <p>No hay CPU seleccionada</p>
          )}
          {selectedTeclado ? (
            <div>
              <p>ID Teclado: {selectedTeclado.id}</p>
              <p>Nombre Teclado: {selectedTeclado.alt}</p>
            </div>
          ) : (
            <p>No hay teclado seleccionada</p>
          )}
          {selectedMouse ? (
            <div>
              <p>ID Mouse: {selectedMouse.id}</p>
              <p>Nombre Mouse: {selectedMouse.alt}</p>
            </div>
          ) : (
            <p>No hay mouse seleccionada</p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ComponentesEquipo;
