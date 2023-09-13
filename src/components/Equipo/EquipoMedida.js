import React from 'react';
import Button from 'react-bootstrap/Button';
import './EquipoMedida.css'

const EquipoMedida = ({ totalPrice, onNextClick }) => {
  return (
    <div className="title-price">
      <h2>Tu Equipo a Medida</h2>
      <p>Precio Total: {totalPrice}€</p>
      <Button variant="secondary" onClick={() => onNextClick()}>
        Siguiente
      </Button>
    </div>
  );
};

export default EquipoMedida;
