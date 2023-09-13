import React from 'react';
import ComponentesEquipo from './ComponentesEquipo';
import './Equipo.css'; // Asegúrate de crear este archivo CSS
import NavbarE from '../navegacion/NavbarE';

const Equipo = () => {
  return (
    <div className="equipo-container">
        <NavbarE/>
      <ComponentesEquipo />
    </div>
  );
}
export default Equipo;